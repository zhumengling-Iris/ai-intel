(function () {
  'use strict';

  const D = window.DATA;
  const app = document.getElementById('app');
  const bar = document.getElementById('compare-bar');

  const MISSING = '未查到';
  const NO_NEWS = '近 3 个月暂无公开动态';
  const TYPES = ['模型发布', '融资', '产品', '合作', '人事', '下架停服', '定价与商业模式', '标准与协议', '监管政策', '收购与整合', '安全事故', '技术概念'];
  // 关注方向（PRD 5.9）
  const DIRECTIONS = [
    ['agent', '智能体与人机协作'], ['context', '上下文与记忆'], ['eval', '评测与质量'],
    ['cost', '成本与商业化'], ['safety', '安全与合规'], ['ux', 'AI 原生交互'],
  ];
  const directionName = (k) => (DIRECTIONS.find(([id]) => id === k) || [k, k])[1];
  const TERM_STATUS = ['新出现', '升温中', '已普及', '降温'];
  const KNOWN_KEY = 'ai-intel-known-terms';
  const MIN_CMP = 2;
  const MAX_CMP = 4;
  const CMP_MODELS = 4; // 对比页每家显示最近几个模型

  // 模型详细参数的 6 个分类（PRD 5.4）
  const DETAIL = [
    ['basic', '基本信息', ['发布日期', '开发方', '是否开源', '许可证']],
    ['spec', '规格', ['参数规模', '架构', '上下文窗口', '最大输出长度']],
    ['ability', '能力', ['输入模态', '输出模态', '推理模式', '工具调用']],
    ['price', '价格', ['输入价格', '输出价格', '缓存价格']],
    ['channels', '使用渠道', ['渠道']],
    ['bench', '评测成绩', null], // 评测成绩是「名称 - 分数」列表
  ];

  // 功能矩阵的 12 项（PRD 5.6）
  const FEATURES = [
    ['search', '联网搜索'], ['research', '深度研究'], ['image', '图像生成'], ['video', '视频生成'],
    ['voice', '语音对话'], ['files', '文件分析'], ['coding', '编程智能体'], ['computer', '电脑 / 浏览器操作'],
    ['memory', '记忆'], ['openWeights', '开放权重'], ['api', 'API'], ['enterprise', '企业版'],
  ];
  const FEATURE_ICON = { '有': '✓', '部分': '◐', '无': '✗', '未查到': '?' };

  // 页面状态：切换页面时保留，回到列表还是原来的筛选和勾选
  const state = {
    region: '全部', query: '', selected: [], types: [], newsDir: '全部',
    termView: '未读', termStatus: '全部', termDir: '全部', termQuery: '', termCategory: '全部', mapQuery: '',
  };

  // 「我已知道」只存在当前浏览器；存储不可用时页面照常显示，只是不保存（PRD 6.13）
  let knownTerms = [];
  try {
    const saved = JSON.parse(localStorage.getItem(KNOWN_KEY) || '[]');
    if (Array.isArray(saved)) knownTerms = saved;
  } catch (e) { knownTerms = []; }
  const isKnown = (id) => knownTerms.includes(id);
  function toggleKnown(id) {
    knownTerms = isKnown(id) ? knownTerms.filter((x) => x !== id) : [...knownTerms, id];
    try { localStorage.setItem(KNOWN_KEY, JSON.stringify(knownTerms)); } catch (e) { /* 不保存，本次会话仍生效 */ }
  }

  // ---------- 工具 ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const isEmpty = (v) => v === null || v === undefined || v === '';
  // 字段缺失时显示「未查到」，不留空白（PRD 6.3）
  const val = (v) => (isEmpty(v) ? `<span class="missing">${MISSING}</span>` : esc(v));

  const byId = (id) => D.companies.find((c) => c.id === id);
  const sortByDate = (list) => list.slice().sort((a, b) => b.date.localeCompare(a.date));
  const newsOf = (id) => sortByDate(D.news.filter((n) => n.company === id));
  const latestNews = (id) => newsOf(id)[0];
  const fullName = (c) => (c.nameZh === c.nameEn ? esc(c.nameEn) : `${esc(c.nameZh)} ${esc(c.nameEn)}`);
  const shortName = (c) => esc(c.nameZh);

  // 模型：按发布日期从新到旧；当前主力只有一个
  const modelsOf = (c) => sortByDate(c.models || []);
  const mainModel = (c) => (c.models || []).find((m) => m.current) || modelsOf(c)[0];
  const hasDetail = (m) => !!m && !!m.detail;
  const modelHref = (c, m) => `#/model/${c.id}/${m.id}`;
  const modelLink = (c, m) => (hasDetail(m)
    ? `<a class="model-link" href="${modelHref(c, m)}">${esc(m.name)}</a>`
    : esc(m.name));

  // 来源：可以是一个，也可以是多个（说法不一时附两个来源，PRD 7.4）
  function sources(src) {
    if (!src) return '';
    const list = Array.isArray(src) ? src : [src];
    return list.map((s) => {
      const label = s.label ? `来源·${esc(s.label)}` : '来源';
      const flag = s.official === false ? ' <span class="unofficial">非官方来源</span>' : '';
      const checked = s.checked ? ` <span class="src-meta">查询于 ${esc(s.checked)}</span>` : '';
      return `<span><a class="src" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${label}↗</a>${flag}${checked}</span>`;
    }).join('');
  }

  const tag = (t) => `<span class="tag" data-t="${esc(t)}">${esc(t)}</span>`;
  const region = (r) => `<span class="region">${esc(r)}</span>`;
  const badge = (text, kind) => `<span class="badge badge-${kind}">${esc(text)}</span>`;

  function fundingSummary(f) {
    if (!f) return val(null);
    if (f.applicable === false) return `不适用<span class="sub">${esc(f.reason)}</span>`;
    const parts = [f.round, f.amount].filter((x) => !isEmpty(x)).map(esc).join(' · ');
    return `${parts || val(null)}${f.date ? `<span class="sub">${esc(f.date)}</span>` : ''}`;
  }

  function valuation(f) {
    if (!f) return val(null);
    if (f.applicable === false) return '不适用';
    return val(f.valuation);
  }

  const section = (title, src, body, extraClass = '') => `
    <section class="section ${extraClass}">
      <div class="section-head"><h2>${title}</h2><div class="section-srcs">${sources(src)}</div></div>
      ${body}
    </section>
  `;
  const kv = (rows) => `<dl class="kv">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;

  // ---------- 路由 ----------
  function parseHash() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, query = ''] = raw.split('?');
    const params = new URLSearchParams(query);
    const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
    return { page: parts[0] || 'list', args: parts.slice(1), params };
  }

  function render() {
    const { page, args, params } = parseHash();
    const navOf = { company: 'list', model: 'list', term: 'terms', track: 'map', product: 'map' };

    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('active', a.dataset.nav === (navOf[page] || page));
    });

    if (page === 'company') renderDetail(args[0]);
    else if (page === 'model') renderModel(args[0], args[1]);
    else if (page === 'compare') renderCompare(params);
    else if (page === 'timeline') renderTimeline();
    else if (page === 'updates') renderUpdates();
    else if (page === 'terms') renderTerms();
    else if (page === 'term') renderTermDetail(args[0]);
    else if (page === 'map') renderMap();
    else if (page === 'track') renderTrack(args[0]);
    else if (page === 'product') renderProduct(args[0]);
    else renderList();

    renderBar(page === 'list');
    window.scrollTo(0, 0);
  }

  // ---------- F1 公司列表 + F2 筛选与搜索 ----------
  function renderList() {
    document.title = 'AI 行业情报库';
    app.innerHTML = `
      <h1>公司列表</h1>
      <p class="page-sub">共收录 ${D.companies.length} 家公司，按最近动态排序。勾选 2–4 家可以横向对比。</p>
      <div class="toolbar">
        <div class="chips" role="group" aria-label="地区筛选">
          ${['全部', '国内', '海外'].map((r) => `
            <button class="chip${state.region === r ? ' on' : ''}" data-region="${r}" aria-pressed="${state.region === r}">${r}</button>
          `).join('')}
        </div>
        <input class="search" type="search" placeholder="搜索公司中文名或英文名" value="${esc(state.query)}" aria-label="搜索公司">
      </div>
      <div class="grid" id="grid"></div>
    `;

    app.querySelectorAll('[data-region]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.region = btn.dataset.region;
        app.querySelectorAll('[data-region]').forEach((b) => {
          const on = b === btn;
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', on);
        });
        renderGrid();
      });
    });

    app.querySelector('.search').addEventListener('input', (e) => {
      state.query = e.target.value;
      renderGrid();
    });

    renderGrid();
  }

  function filteredCompanies() {
    const q = state.query.trim().toLowerCase();
    return D.companies
      .filter((c) => state.region === '全部' || c.region === state.region)
      .filter((c) => !q || [c.nameZh, c.nameEn, ...(c.aliases || [])].some((n) => n.toLowerCase().includes(q)))
      // 最近有动作的公司排在前面
      .sort((a, b) => {
        const da = latestNews(a.id)?.date || '';
        const db = latestNews(b.id)?.date || '';
        return db.localeCompare(da);
      });
  }

  function renderGrid() {
    const grid = document.getElementById('grid');
    const list = filteredCompanies();
    if (!list.length) {
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1">没有找到相关公司</div>';
      return;
    }
    const full = state.selected.length >= MAX_CMP;
    grid.innerHTML = list.map((c) => {
      const n = latestNews(c.id);
      const m = mainModel(c);
      const picked = state.selected.includes(c.id);
      const disabled = full && !picked;
      return `
        <article class="card${picked ? ' picked' : ''}">
          <label class="pick" title="${disabled ? '最多对比 4 家' : '加入对比'}">
            <input type="checkbox" data-pick="${c.id}" ${picked ? 'checked' : ''} ${disabled ? 'disabled' : ''}
              aria-label="把 ${esc(c.nameZh)} 加入对比">
          </label>
          <div class="card-head">
            <a class="card-name" href="#/company/${c.id}">${fullName(c)}</a>
          </div>
          <div>${region(c.region)}</div>
          <div class="card-tagline">${val(c.tagline)}</div>
          <div class="card-row"><span class="k">主力模型：</span>${m ? (hasDetail(m)
            ? `<a class="model-link card-model" href="${modelHref(c, m)}">${esc(m.name)}</a>` : esc(m.name)) : val(null)}</div>
          <div class="card-news">
            ${n ? `<span class="date">${esc(n.date)}</span>${esc(n.title)}` : `<span class="muted">${NO_NEWS}</span>`}
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-pick]').forEach((box) => {
      box.addEventListener('change', () => togglePick(box.dataset.pick, box.checked));
    });
  }

  function togglePick(id, on) {
    if (on && !state.selected.includes(id) && state.selected.length < MAX_CMP) state.selected.push(id);
    if (!on) state.selected = state.selected.filter((x) => x !== id);
    renderGrid();
    renderBar(true);
  }

  // 列表页底部的「对比（已选 N 家）」浮条
  function renderBar(show) {
    const n = state.selected.length;
    if (!show || n === 0) {
      bar.hidden = true;
      document.body.classList.remove('has-bar');
      return;
    }
    bar.hidden = false;
    document.body.classList.add('has-bar');
    const names = state.selected.map((id) => shortName(byId(id))).join('、');
    let hint = '';
    if (n < MIN_CMP) hint = '至少选择 2 家';
    else if (n >= MAX_CMP) hint = '最多对比 4 家';
    bar.innerHTML = `
      <div class="bar-info">
        <div class="bar-names">${names}</div>
        ${hint ? `<div class="bar-hint">${hint}</div>` : ''}
      </div>
      <button class="btn btn-link" data-act="clear">清空</button>
      <button class="btn btn-primary" data-act="go" ${n < MIN_CMP ? 'disabled' : ''}>对比（已选 ${n} 家）</button>
    `;
    bar.querySelector('[data-act="clear"]').addEventListener('click', () => {
      state.selected = [];
      renderGrid();
      renderBar(true);
    });
    bar.querySelector('[data-act="go"]').addEventListener('click', () => {
      location.hash = `#/compare?ids=${state.selected.join(',')}`;
    });
  }

  // ---------- F8 模型演变 ----------
  function evolution(c, limit) {
    const list = modelsOf(c);
    if (!list.length) return `<div class="muted">${MISSING}</div>`;
    const shown = limit ? list.slice(0, limit) : list;
    const more = limit && list.length > limit
      ? `<li class="evo-more"><a href="#/company/${c.id}">还有 ${list.length - limit} 个早期模型 →</a></li>` : '';
    return `<ol class="evo">${shown.map((m) => `
      <li class="evo-item${m.current ? ' is-current' : ''}">
        <span class="evo-date">${esc(m.date)}</span>
        <div class="evo-body">
          <div class="evo-name">${modelLink(c, m)}${m.current ? badge('当前主力', 'current') : ''}</div>
          ${m.summary ? `<div class="evo-sum">${esc(m.summary)}</div>` : ''}
          ${!limit && m.src ? `<div class="evo-src">${sources(m.src)}</div>` : ''}
        </div>
        ${!limit && hasDetail(m) ? `<a class="btn btn-small" href="${modelHref(c, m)}">详细参数</a>` : ''}
      </li>`).join('')}${more}</ol>`;
  }

  // ---------- F9 商业与会员定价 ----------
  function plansTable(p) {
    if (!p || !p.plans || !p.plans.length) return `<div class="muted">会员价格：${MISSING}</div>`;
    return `
      <div class="table-scroll"><table class="mini">
        <thead><tr><th>档位</th><th>月付</th><th>年付（折合每月）</th><th>主要权益</th></tr></thead>
        <tbody>${p.plans.map((x) => `
          <tr><td class="strong">${esc(x.name)}</td><td>${val(x.monthly)}</td><td>${val(x.annual)}</td><td>${val(x.perks)}</td></tr>
        `).join('')}</tbody>
      </table></div>`;
  }

  function apiTable(p) {
    if (!p || !p.api || !p.api.length) return `<div class="muted">API 价格：${MISSING}</div>`;
    return `
      <div class="table-scroll"><table class="mini">
        <thead><tr><th>模型</th><th>输入</th><th>输出</th><th>缓存</th></tr></thead>
        <tbody>${p.api.map((x) => `
          <tr><td class="strong">${esc(x.model)}</td><td>${val(x.input)}</td><td>${val(x.output)}</td><td>${val(x.cache)}</td></tr>
        `).join('')}</tbody>
      </table></div>
      ${p.apiUnit ? `<div class="table-note">${esc(p.apiUnit)}</div>` : ''}`;
  }

  function pricingBlock(c) {
    const p = c.pricing || {};
    return `
      <div class="subsection">
        <div class="sub-head"><h3>会员档位</h3><div class="section-srcs">${sources(p.plansSrc)}</div></div>
        ${plansTable(p)}
        ${p.plansNote ? `<div class="table-note">${esc(p.plansNote)}</div>` : ''}
      </div>
      <div class="subsection">
        <div class="sub-head"><h3>API 价格</h3><div class="section-srcs">${sources(p.apiSrc)}</div></div>
        ${apiTable(p)}
      </div>`;
  }

  // ---------- F10 功能矩阵 ----------
  function featureOf(c, key) {
    const f = (c.features || {})[key];
    return f && f.v ? f : { v: MISSING };
  }
  const featureMark = (f) => `<span class="feat feat-${FEATURE_ICON[f.v] ? f.v : '未查到'}" title="${esc(f.v)}">${FEATURE_ICON[f.v] || '?'} ${esc(f.v)}</span>`;

  function featureList(c) {
    return `<ul class="feat-list">${FEATURES.map(([key, label]) => {
      const f = featureOf(c, key);
      return `<li>
        <span class="feat-label">${label}</span>
        ${featureMark(f)}
        <span class="feat-note">${f.note ? esc(f.note) : ''} ${sources(f.src)}</span>
      </li>`;
    }).join('')}</ul>
    <div class="table-note">✓ 有　◐ 部分　✗ 无　? 未查到</div>`;
  }

  // ---------- F3 公司详情 ----------
  function renderDetail(id) {
    const c = byId(id);
    if (!c) {
      app.innerHTML = '<a class="back" href="#/">← 返回列表</a><div class="empty">没有找到这家公司</div>';
      return;
    }
    document.title = `${c.nameZh} · AI 行业情报库`;
    const m = mainModel(c);
    const f = c.funding || {};
    const p = c.products || {};
    const news = newsOf(c.id).slice(0, 5);

    const fundingBody = f.applicable === false
      ? kv([['融资情况', `不适用<div class="na-reason">${esc(f.reason)}</div>`]])
      : kv([
        ['轮次', val(f.round)],
        ['金额', val(f.amount)],
        ['估值', val(f.valuation)],
        ['主要投资方', val(f.investors)],
        ['日期', val(f.date)],
      ]);

    const mainBody = m ? `
      <div class="main-model">
        <div>
          <div class="main-model-name">${esc(m.name)} ${badge('当前主力', 'current')}</div>
          <div class="muted">${esc(m.date)}${m.summary ? ` · ${esc(m.summary)}` : ''}</div>
        </div>
        ${hasDetail(m) ? `<a class="btn btn-primary" href="${modelHref(c, m)}">查看详细参数 →</a>` : ''}
      </div>` : `<div class="muted">${MISSING}</div>`;

    app.innerHTML = `
      <a class="back" href="#/">← 返回列表</a>
      <div class="detail-head">
        <h1>${fullName(c)} ${region(c.region)}</h1>
        <div class="detail-meta">
          <span>${val(c.tagline)}</span>
          <span>总部：${val(c.hq)}</span>
          <span>成立：${val(c.founded)}</span>
          ${c.website ? `<a href="${esc(c.website)}" target="_blank" rel="noopener noreferrer">官网↗</a>` : `<span>官网：${val(null)}</span>`}
        </div>
        <nav class="jump">
          <a href="#sec-model" data-jump>主力模型</a><a href="#sec-evo" data-jump>模型演变</a>
          <a href="#sec-fund" data-jump>融资</a><a href="#sec-prod" data-jump>产品</a>
          <a href="#sec-price" data-jump>定价</a><a href="#sec-feat" data-jump>功能矩阵</a><a href="#sec-news" data-jump>动态</a>
        </nav>
      </div>

      ${section('基本信息', c.src, kv([
        ['一句话定位', val(c.tagline)],
        ['总部', val(c.hq)],
        ['成立时间', val(c.founded)],
      ]))}

      <div id="sec-model">${section('主力模型', m && m.src, mainBody)}</div>
      <div id="sec-evo">${section('模型演变', null, evolution(c))}</div>
      <div id="sec-fund">${section('最近一轮融资', f.src, fundingBody)}</div>
      <div id="sec-prod">${section('产品', p.src, kv([
        ['个人用户产品', val(p.consumer)],
        ['企业 / 开发者产品', val(p.enterprise)],
      ]))}</div>
      <div id="sec-price">${section('商业与会员定价', null, pricingBlock(c))}</div>
      <div id="sec-feat">${section('功能矩阵', null, featureList(c))}</div>

      <div id="sec-news"><section class="section">
        <div class="section-head"><h2>近期动态</h2></div>
        ${news.length ? `<ul class="news-list">${news.map((n) => `
          <li class="news-item">
            <span class="date">${esc(n.date)}</span>
            <span class="title">${tag(n.type)} ${esc(n.title)}</span>
            <span class="src-cell">${sources(n.src)}</span>
          </li>`).join('')}</ul>` : `<div class="muted">${NO_NEWS}</div>`}
      </section></div>
    `;

    // 页内跳转用 scrollIntoView，不改 hash（hash 用于路由）
    app.querySelectorAll('[data-jump]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ---------- F7 模型详情 ----------
  function renderModel(companyId, modelId) {
    const c = byId(companyId);
    const m = c && (c.models || []).find((x) => x.id === modelId);
    if (!c || !m || !m.detail) {
      app.innerHTML = `<a class="back" href="${c ? `#/company/${c.id}` : '#/'}">← 返回</a><div class="empty">没有找到这个模型</div>`;
      return;
    }
    document.title = `${m.name} · AI 行业情报库`;
    const d = m.detail;

    const blocks = DETAIL.map(([key, title, fields]) => {
      const block = d[key] || {};
      let body;
      if (fields) {
        body = kv(fields.map((k) => [k, val(block[k])]));
      } else {
        const items = block.items || [];
        body = items.length
          ? `<dl class="kv">${items.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>`
          : `<div class="muted">${MISSING}</div>`;
      }
      if (block.note) body += `<div class="table-note">${esc(block.note)}</div>`;
      return section(title, block.src, body, 'model-block');
    }).join('');

    const status = m.current
      ? badge('当前主力', 'current')
      : badge(`历史版本${m.collected ? ` · 参数收集于 ${m.collected}` : ''}`, 'archived');

    app.innerHTML = `
      <a class="back" href="#/company/${c.id}">← 返回 ${shortName(c)}</a>
      <div class="detail-head">
        <h1>${esc(m.name)} ${status}</h1>
        <div class="detail-meta">
          <span>${fullName(c)}</span>
          <span>发布：${val(m.date)}</span>
          ${m.collected ? `<span>参数收集于 ${esc(m.collected)}</span>` : ''}
        </div>
        ${m.summary ? `<p class="model-summary">${esc(m.summary)}</p>` : ''}
      </div>
      <div class="model-grid">${blocks}</div>
    `;
  }

  // ---------- F4 横向对比 ----------
  function renderCompare(params) {
    document.title = '对比 · AI 行业情报库';
    // 对比的公司写在链接里，复制链接给别人也能看到同样的对比
    const fromUrl = (params.get('ids') || '').split(',').filter((id) => byId(id));
    if (fromUrl.length) state.selected = [...new Set(fromUrl)].slice(0, MAX_CMP);
    const list = state.selected.map(byId);

    if (list.length < MIN_CMP) {
      app.innerHTML = `
        <h1>横向对比</h1>
        <div class="empty">至少选择 2 家公司才能对比。<br><br><a class="btn" href="#/">去公司列表勾选</a></div>
      `;
      return;
    }

    const md = (c, key, field) => {
      const m = mainModel(c);
      return val(m && m.detail && m.detail[key] ? m.detail[key][field] : null);
    };
    // 优先取主力模型那一行，名称对不上时取第一行
    const mainApi = (c) => {
      const a = (c.pricing && c.pricing.api) || [];
      if (!a.length) return val(null);
      const name = (mainModel(c)?.name || '').toLowerCase();
      const row = a.find((x) => x.model.toLowerCase().includes(name)) || a[0];
      return `${esc(row.model)}<span class="sub">输入 ${esc(row.input || MISSING)} · 输出 ${esc(row.output || MISSING)}</span>`;
    };
    const planList = (c) => {
      const plans = (c.pricing && c.pricing.plans) || [];
      if (!plans.length) return val(null);
      return `<ul class="plain">${plans.map((x) => `<li><b>${esc(x.name)}</b> ${esc(x.monthly || MISSING)}</li>`).join('')}</ul>`;
    };

    const groups = [
      ['基本信息', [
        ['地区', (c) => esc(c.region)],
        ['一句话定位', (c) => val(c.tagline)],
      ]],
      ['模型', [
        ['主力模型', (c) => {
          const m = mainModel(c);
          if (!m) return val(null);
          return `${modelLink(c, m)}${m.summary ? `<span class="sub">${esc(m.summary)}</span>` : ''}`;
        }],
        ['发布日期', (c) => val(mainModel(c)?.date)],
        ['上下文窗口', (c) => md(c, 'spec', '上下文窗口')],
        ['是否开源', (c) => md(c, 'basic', '是否开源')],
        ['模型演变', (c) => evolution(c, CMP_MODELS)],
      ]],
      ['融资', [
        ['最近一轮融资', (c) => fundingSummary(c.funding)],
        ['估值', (c) => valuation(c.funding)],
      ]],
      ['产品', [
        ['个人用户产品', (c) => val(c.products?.consumer)],
        ['企业 / 开发者产品', (c) => val(c.products?.enterprise)],
      ]],
      ['商业与会员定价', [
        ['会员档位', planList],
        ['API 价格（主力）', mainApi],
      ]],
      ['功能矩阵', FEATURES.map(([key, label]) => [label, (c) => featureMark(featureOf(c, key))])],
      ['动态', [
        ['最近一条动态', (c) => {
          const n = latestNews(c.id);
          return n ? `${esc(n.title)}<span class="sub">${esc(n.date)} · ${n.type}</span>` : `<span class="muted">${NO_NEWS}</span>`;
        }],
      ]],
    ];

    const cols = list.length + 1;
    app.innerHTML = `
      <h1>横向对比</h1>
      <p class="page-sub">已选 ${list.length} 家公司。<a href="#/">返回列表修改</a></p>
      <p class="swipe-hint">← 左右滑动查看更多 →</p>
      <div class="table-wrap">
        <table class="cmp">
          <thead><tr>
            <th scope="col">维度</th>
            ${list.map((c) => `<th scope="col"><a href="#/company/${c.id}">${shortName(c)}</a></th>`).join('')}
          </tr></thead>
          ${groups.map(([title, rows]) => `
            <tbody>
              <tr class="group-row"><th scope="rowgroup" colspan="${cols}">${title}</th></tr>
              ${rows.map(([label, cell]) => `
                <tr><th scope="row">${label}</th>${list.map((c) => `<td>${cell(c)}</td>`).join('')}</tr>
              `).join('')}
            </tbody>
          `).join('')}
        </table>
      </div>
    `;
  }

  // ---------- F5 动态时间线 ----------
  function renderTimeline() {
    document.title = '动态时间线 · AI 行业情报库';
    app.innerHTML = `
      <h1>动态时间线</h1>
      <p class="page-sub">公司动态和行业事件按日期倒序排列。</p>
      <div class="filter-row"><span class="filter-label">类型</span><div class="chips" role="group" aria-label="类型筛选" id="type-chips"></div></div>
      <div class="filter-row"><span class="filter-label">方向</span><div class="chips" role="group" aria-label="方向筛选" id="dir-chips"></div></div>
      <div class="toolbar"><span class="result-count" id="count"></span></div>
      <div class="timeline-box"><ul class="news-list timeline" id="timeline"></ul></div>
    `;
    renderTimelineItems();
  }

  function renderTimelineItems() {
    const chips = document.getElementById('type-chips');
    const all = state.types.length === 0;
    chips.innerHTML = [['全部', all], ...TYPES.map((t) => [t, state.types.includes(t)])]
      .map(([t, on]) => `<button class="chip${on ? ' on' : ''}" data-type="${t}" aria-pressed="${on}">${t}</button>`)
      .join('');
    chips.querySelectorAll('[data-type]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.type;
        if (t === '全部') state.types = [];
        else if (state.types.includes(t)) state.types = state.types.filter((x) => x !== t);
        else state.types.push(t);
        // 五类全选等同于「全部」
        if (state.types.length === TYPES.length) state.types = [];
        renderTimelineItems();
      });
    });

    const dirChips = document.getElementById('dir-chips');
    dirChips.innerHTML = directionChips(state.newsDir);
    dirChips.querySelectorAll('[data-dir]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.newsDir = btn.dataset.dir;
        renderTimelineItems();
      });
    });

    const items = sortByDate(D.news)
      .filter((n) => all || state.types.includes(n.type))
      .filter((n) => state.newsDir === '全部' || (n.directions || []).includes(state.newsDir));
    document.getElementById('count').textContent = `共 ${items.length} 条`;
    const box = document.getElementById('timeline');
    if (!items.length) {
      box.innerHTML = '<li class="empty">没有符合条件的动态</li>';
      return;
    }
    box.innerHTML = items.map((n) => {
      const c = byId(n.company);
      return `
        <li class="news-item">
          <span class="date">${esc(n.date)}</span>
          ${newsOwner(n, c)}
          <span class="title">${tag(n.type)} ${esc(n.title)}${n.term && termById(n.term) ? ` <a class="term-link" href="#/term/${n.term}">看词条</a>` : ''}${directionTags(n.directions)}</span>
          <span class="src-cell">${sources(n.src)}</span>
        </li>
      `;
    }).join('');
  }

  // ---------- F12 更新记录 ----------
  function renderUpdates() {
    document.title = '更新记录 · AI 行业情报库';
    const days = sortByDate(D.updates || []);
    app.innerHTML = `
      <h1>更新记录</h1>
      <p class="page-sub">每天 07:00 自动更新一次，这里列出每次改了什么。更新前的旧数据备份在 <code>backup/</code> 文件夹。</p>
      ${days.length ? days.map((d) => `
        <section class="section">
          <div class="section-head"><h2>${esc(d.date)}</h2><span class="muted">${esc(d.by || '')}</span></div>
          ${d.items && d.items.length ? `<ul class="news-list">${d.items.map((it) => {
            const c = byId(it.company);
            return `
            <li class="news-item update-item">
              <span>${badge(it.type, 'update')}</span>
              <span class="title">${c ? `<a class="co" href="#/company/${c.id}">${shortName(c)}</a> ` : ''}${esc(it.text)}</span>
              <span class="src-cell">${sources(it.src)}</span>
            </li>`;
          }).join('')}</ul>` : '<div class="muted">今日无新增</div>'}
        </section>
      `).join('') : '<div class="empty">还没有更新记录</div>'}
    `;
  }

  // ---------- 关注方向 ----------
  function directionChips(current) {
    return [['全部', '全部'], ...DIRECTIONS]
      .map(([id, label]) => `<button class="chip${current === id ? ' on' : ''}" data-dir="${id}" aria-pressed="${current === id}">${label}</button>`)
      .join('');
  }
  const directionTags = (list) => (list || []).map((k) => `<span class="dir-tag">${esc(directionName(k))}</span>`).join('');

  // 行业事件可以没有所属公司：显示相关对象，否则显示「行业」（PRD 6.5）
  function newsOwner(n, c) {
    if (c) {
      const subject = n.subject ? `<span class="co-sub">${esc(n.subject)}</span>` : '';
      return `<span class="co-cell"><a class="co" href="#/company/${n.company}">${shortName(c)}</a>${subject}</span>`;
    }
    return `<span class="co-cell"><span class="co co-industry">${esc(n.subject || '行业')}</span></span>`;
  }

  // ---------- F13 新词雷达 ----------
  const termById = (id) => (D.terms || []).find((x) => x.id === id);
  const statusBadge = (s) => `<span class="term-status" data-s="${esc(s)}">${esc(s)}</span>`;
  const termMonth = (x) => esc(x.firstSeen);
  const statusRank = (s) => { const i = TERM_STATUS.indexOf(s); return i < 0 ? 9 : i; };

  function termMatches(x) {
    const q = state.termQuery.trim().toLowerCase();
    if (state.termCategory !== '全部' && x.category !== state.termCategory) return false;
    if (state.termStatus !== '全部' && x.status !== state.termStatus) return false;
    if (state.termDir !== '全部' && !(x.directions || []).includes(state.termDir)) return false;
    if (q && ![x.name, ...(x.aliases || [])].some((n) => n.toLowerCase().includes(q))) return false;
    return true;
  }

  function renderTerms() {
    document.title = '新词雷达 · AI 行业情报库';
    const line = (D.termLine || []).map(termById).filter(Boolean)
      .sort((a, b) => a.firstSeen.localeCompare(b.firstSeen));
    app.innerHTML = `
      <h1>新词雷达</h1>
      <p class="page-sub">不属于某一家公司的技术新词。已经懂的词点「我已知道」，它就不会再出现在未读里。</p>
      ${line.length ? `
      <section class="section">
        <div class="section-head"><h2>技术演变线</h2><span class="muted">按首次出现时间排列</span></div>
        <ol class="term-line">${line.map((x) => `
          <li><a href="#/term/${x.id}"><span class="tl-date">${termMonth(x)}</span><span class="tl-name">${esc(x.name)}</span></a></li>`).join('')}</ol>
      </section>` : ''}
      <div class="chips term-views" role="group" aria-label="视图" id="term-views"></div>
      <div class="filter-row"><span class="filter-label">分类</span><div class="chips" role="group" aria-label="分类筛选" id="term-category"></div></div>
      <div class="filter-row"><span class="filter-label">状态</span><div class="chips" role="group" aria-label="状态筛选" id="term-status"></div></div>
      <div class="filter-row"><span class="filter-label">方向</span><div class="chips" role="group" aria-label="方向筛选" id="term-dir"></div></div>
      <div class="toolbar"><input class="search term-search" type="search" placeholder="搜索名词或别名" value="${esc(state.termQuery)}" aria-label="搜索名词"></div>
      <div class="grid" id="term-grid"></div>
    `;
    app.querySelector('.term-search').addEventListener('input', (e) => {
      state.termQuery = e.target.value;
      renderTermGrid();
    });
    renderTermGrid();
  }

  function renderTermGrid() {
    const all = D.terms || [];
    const unread = all.filter((x) => !isKnown(x.id));
    const views = [['未读', unread.length], ['全部', all.length], ['我已知道', all.length - unread.length]];
    const viewsBox = document.getElementById('term-views');
    viewsBox.innerHTML = views.map(([v, n]) => `<button class="chip${state.termView === v ? ' on' : ''}" data-view="${v}" aria-pressed="${state.termView === v}">${v} ${n}</button>`).join('');
    viewsBox.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => { state.termView = b.dataset.view; renderTermGrid(); }));

    const categories = ['全部', ...new Set(all.map((x) => x.category).filter(Boolean))];
    const catBox = document.getElementById('term-category');
    catBox.innerHTML = categories.map((c) => `<button class="chip${state.termCategory === c ? ' on' : ''}" data-cat="${esc(c)}" aria-pressed="${state.termCategory === c}">${esc(c)}</button>`).join('');
    catBox.querySelectorAll('[data-cat]').forEach((b) => b.addEventListener('click', () => { state.termCategory = b.dataset.cat; renderTermGrid(); }));

    const statusBox = document.getElementById('term-status');
    statusBox.innerHTML = ['全部', ...TERM_STATUS].map((s) => `<button class="chip${state.termStatus === s ? ' on' : ''}" data-status="${s}" aria-pressed="${state.termStatus === s}">${s}</button>`).join('');
    statusBox.querySelectorAll('[data-status]').forEach((b) => b.addEventListener('click', () => { state.termStatus = b.dataset.status; renderTermGrid(); }));

    const dirBox = document.getElementById('term-dir');
    dirBox.innerHTML = directionChips(state.termDir);
    dirBox.querySelectorAll('[data-dir]').forEach((b) => b.addEventListener('click', () => { state.termDir = b.dataset.dir; renderTermGrid(); }));

    const list = all
      .filter((x) => (state.termView === '全部') || (state.termView === '未读' ? !isKnown(x.id) : isKnown(x.id)))
      .filter(termMatches)
      .sort((a, b) => statusRank(a.status) - statusRank(b.status) || b.firstSeen.localeCompare(a.firstSeen));

    const grid = document.getElementById('term-grid');
    if (!list.length) {
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1">没有找到相关新词</div>';
      return;
    }
    grid.innerHTML = list.map((x) => {
      const cos = (x.adopters || []).map((a) => byId(a.company)).filter(Boolean).map(shortName);
      return `
      <article class="card term-card${isKnown(x.id) ? ' is-known' : ''}">
        <div class="card-head term-head">
          <a class="card-name" href="#/term/${x.id}">${esc(x.name)}</a>
          ${statusBadge(x.status)}
        </div>
        ${x.category ? `<div><span class="region">${esc(x.category)}</span></div>` : ''}
        <div class="term-one">${esc(x.oneLine)}</div>
        <div class="card-row"><span class="k">首次出现：</span>${termMonth(x)} · ${esc(x.proposer)}</div>
        ${cos.length ? `<div class="card-row"><span class="k">谁在用：</span>${cos.join('、')}</div>` : ''}
        <div class="term-foot">
          <span>${directionTags(x.directions)}</span>
          <button class="btn btn-small term-known" data-known="${x.id}" aria-pressed="${isKnown(x.id)}">${isKnown(x.id) ? '✓ 已知道' : '我已知道'}</button>
        </div>
      </article>`;
    }).join('');
    grid.querySelectorAll('[data-known]').forEach((b) => b.addEventListener('click', () => {
      toggleKnown(b.dataset.known);
      renderTermGrid();
    }));
  }

  function renderTermDetail(id) {
    const x = termById(id);
    if (!x) {
      app.innerHTML = '<a class="back" href="#/terms">← 返回新词雷达</a><div class="empty">没有找到这个词</div>';
      return;
    }
    document.title = `${x.name} · AI 行业情报库`;
    const relation = (r) => {
      const other = termById(r.term);
      return `<li>${other ? `<a href="#/term/${other.id}">${esc(other.name)}</a>` : esc(r.term)}：${esc(r.text)}</li>`;
    };
    const adopter = (a) => {
      const c = byId(a.company);
      return `<li>${c ? `<a href="#/company/${c.id}">${shortName(c)}</a>` : esc(a.company)}：${esc(a.note)} <span class="term-src">${sources(a.src)}</span></li>`;
    };
    app.innerHTML = `
      <a class="back" href="#/terms">← 返回新词雷达</a>
      <div class="detail-head">
        <h1>${esc(x.name)} ${statusBadge(x.status)}</h1>
        <div class="detail-meta">
          ${(x.aliases || []).length ? `<span>也叫：${x.aliases.map(esc).join('、')}</span>` : ''}
          <span>首次出现：${termMonth(x)}</span>
          <span>${esc(x.proposer)}</span>
        </div>
        <p class="model-summary">${directionTags(x.directions)}</p>
        <button class="btn btn-small" id="known-btn" aria-pressed="${isKnown(x.id)}">${isKnown(x.id) ? '✓ 已知道（点击取消）' : '我已知道'}</button>
      </div>
      ${section('它是什么', x.src, `<p class="term-p">${esc(x.oneLine)}</p>${x.analogy ? `<p class="term-p"><span class="term-k">打个比方：</span>${esc(x.analogy)}</p>` : ''}`)}
      ${section('解决什么问题', null, `<p class="term-p">${esc(x.problem)}</p>`)}
      ${(x.relations || []).length ? section('和相关词的关系', null, `<ul class="term-list">${x.relations.map(relation).join('')}</ul>`) : ''}
      ${section('谁在用', null, (x.adopters || []).length ? `<ul class="term-list">${x.adopters.map(adopter).join('')}</ul>` : `<div class="muted">${MISSING}</div>`)}
      ${section('产品经理要懂什么', null, `<p class="term-p">${esc(x.pmNote)}</p><div class="table-note">这部分是编辑的解读，不是来源原话</div>`)}
      ${section('当前状态依据', x.statusSrc, `<p class="term-p">${statusBadge(x.status)} ${esc(x.statusReason)}</p>`)}
    `;
    document.getElementById('known-btn').addEventListener('click', () => {
      toggleKnown(x.id);
      renderTermDetail(x.id);
    });
  }

  // ---------- F16 能力地图 ----------
  const trackById = (id) => (D.tracks || []).find((x) => x.id === id);
  const productById = (id) => (D.products || []).find((x) => x.id === id);
  // 最新版本的产品排在前面，日期未查到的排在最后
  const productsOf = (trackId) => (D.products || [])
    .filter((x) => (x.tracks || []).includes(trackId))
    .sort((a, b) => (b.versionDate || '').localeCompare(a.versionDate || ''));
  // 收录公司可以点进公司页，范围外公司只显示名称（PRD 6.18）
  function ownerOf(x, link) {
    const c = byId(x.company);
    if (c) return link ? `<a href="#/company/${c.id}">${shortName(c)}</a>` : shortName(c);
    return `${esc(x.companyName || MISSING)}`;
  }

  function renderMap() {
    document.title = '能力地图 · AI 行业情报库';
    const groups = [...new Set((D.tracks || []).map((x) => x.group))];
    app.innerHTML = `
      <h1>能力地图</h1>
      <p class="page-sub">按能力看 AI 产品：选一条赛道，看有哪些产品、彼此差在哪。</p>
      <div class="toolbar"><input class="search map-search" type="search" placeholder="搜索产品，如 可灵、Muse" value="${esc(state.mapQuery)}" aria-label="搜索产品"></div>
      <div id="map-results"></div>
      <div id="map-tracks">
      ${groups.map((g) => `
        <h2 class="map-group">${esc(g)}</h2>
        <div class="grid">
          ${D.tracks.filter((x) => x.group === g).map((x) => {
            const ps = productsOf(x.id);
            return `<article class="card">
              <div class="card-head term-head"><a class="card-name" href="#/track/${x.id}">${esc(x.name)}</a><span class="region">${ps.length} 个产品</span></div>
              <div class="term-one">${esc(x.desc)}</div>
              <div class="card-news">${ps.map((p) => esc(p.name)).join('、')}</div>
            </article>`;
          }).join('')}
        </div>`).join('')}
      </div>
    `;
    app.querySelector('.map-search').addEventListener('input', (e) => {
      state.mapQuery = e.target.value;
      renderMapResults();
    });
    renderMapResults();
  }

  function renderMapResults() {
    const q = state.mapQuery.trim().toLowerCase();
    const box = document.getElementById('map-results');
    document.getElementById('map-tracks').hidden = !!q;
    if (!q) { box.innerHTML = ''; return; }
    const list = (D.products || []).filter((x) => [x.name, ...(x.aliases || [])].some((n) => n.toLowerCase().includes(q)));
    box.innerHTML = list.length ? `<div class="grid">${list.map((x) => `
      <article class="card">
        <div class="card-head"><a class="card-name" href="#/product/${x.id}">${esc(x.name)}</a></div>
        <div class="term-one">${esc(x.desc)}</div>
        <div class="card-row"><span class="k">所属：</span>${ownerOf(x, false)}</div>
      </article>`).join('')}</div>` : '<div class="empty">没有找到相关产品</div>';
  }

  // ---------- F17 赛道功能矩阵 ----------
  function renderTrack(id) {
    const x = trackById(id);
    if (!x) {
      app.innerHTML = '<a class="back" href="#/map">← 返回能力地图</a><div class="empty">没有找到这条赛道</div>';
      return;
    }
    document.title = `${x.name} · AI 行业情报库`;
    const ps = productsOf(id);
    const terms = (x.terms || []).map(termById).filter(Boolean);
    const cell = (p, dim) => val(((p.matrix || {})[id] || {})[dim]);
    app.innerHTML = `
      <a class="back" href="#/map">← 返回能力地图</a>
      <div class="detail-head">
        <h1>${esc(x.name)} <span class="region">${esc(x.group)}</span></h1>
        <p class="model-summary">${esc(x.desc)}</p>
        ${terms.length ? `<div class="track-terms"><span class="filter-label">相关技术</span>${terms.map((m) => `<a class="chip" href="#/term/${m.id}">${esc(m.name)}</a>`).join('')}</div>` : ''}
      </div>
      <p class="swipe-hint">← 左右滑动查看更多 →</p>
      <div class="table-wrap">
        <table class="cmp">
          <thead><tr><th scope="col">维度</th>${ps.map((p) => `<th scope="col"><a href="#/product/${p.id}">${esc(p.name)}</a></th>`).join('')}</tr></thead>
          <tbody>
            <tr><th scope="row">所属公司</th>${ps.map((p) => `<td>${ownerOf(p, true)}</td>`).join('')}</tr>
            <tr><th scope="row">最新版本</th>${ps.map((p) => `<td>${val(p.version)}${p.versionDate ? `<span class="sub">${esc(p.versionDate)}</span>` : ''}</td>`).join('')}</tr>
            <tr><th scope="row">AI 是否核心</th>${ps.map((p) => `<td>${val(p.labels && p.labels.core)}</td>`).join('')}</tr>
            ${(x.dimensions || []).map((dim) => `<tr><th scope="row">${esc(dim)}</th>${ps.map((p) => `<td>${cell(p, dim)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
      <section class="section track-src">
        <div class="section-head"><h2>来源</h2></div>
        <ul class="term-list">${ps.map((p) => `<li>${esc(p.name)}：<span class="term-src">${sources(p.src)}</span></li>`).join('')}</ul>
      </section>
    `;
  }

  // ---------- F18 产品详情 ----------
  function renderProduct(id) {
    const x = productById(id);
    if (!x) {
      app.innerHTML = '<a class="back" href="#/map">← 返回能力地图</a><div class="empty">没有找到这个产品</div>';
      return;
    }
    document.title = `${x.name} · AI 行业情报库`;
    const l = x.labels || {};
    const tracks = (x.tracks || []).map(trackById).filter(Boolean);
    const news = (x.newsMatch ? D.news.filter((n) => new RegExp(x.newsMatch).test(`${n.title} ${n.subject || ''}`)) : []);
    app.innerHTML = `
      <a class="back" href="${tracks[0] ? `#/track/${tracks[0].id}` : '#/map'}">← 返回${tracks[0] ? esc(tracks[0].name) : '能力地图'}</a>
      <div class="detail-head">
        <h1>${esc(x.name)}</h1>
        <p class="model-summary">${esc(x.desc)}</p>
        <div class="track-terms">${tracks.map((m) => `<a class="chip" href="#/track/${m.id}">${esc(m.name)}</a>`).join('')}</div>
      </div>
      ${section('基本信息', x.src, kv([
        ['所属公司', ownerOf(x, true)],
        ['最新版本', `${val(x.version)}${x.versionDate ? `（${esc(x.versionDate)}）` : ''}`],
        ['底层模型', val(x.model)],
      ]))}
      ${section('分类标签', null, kv([
        ['产业层级', val(l.layer)],
        ['AI 是否核心', val(l.core)],
        ['内容模态', val(l.modality)],
        ['目标用户', val(l.users)],
      ]) + '<div class="table-note">标签是编辑判断，不是厂商官方分类</div>')}
      ${tracks.map((m) => section(`${esc(m.name)}能力`, null, kv((m.dimensions || []).map((dim) => [esc(dim), val(((x.matrix || {})[m.id] || {})[dim])])))).join('')}
      ${(x.history || []).length ? section('版本演变', null, `<ol class="evo">${x.history.map((h) => `<li class="evo-item"><span class="evo-date">${esc(h.date)}</span><div class="evo-body"><div class="evo-name">${esc(h.name)}</div>${h.note ? `<div class="evo-sum">${esc(h.note)}</div>` : ''}</div></li>`).join('')}</ol>`) : ''}
      ${news.length ? section('相关动态', null, `<ul class="news-list">${sortByDate(news).slice(0, 5).map((n) => `<li class="news-item"><span class="date">${esc(n.date)}</span><span class="title">${tag(n.type)} ${esc(n.title)}</span><span class="src-cell">${sources(n.src)}</span></li>`).join('')}</ul>`) : ''}
    `;
  }

  // ---------- 启动 ----------
  document.getElementById('updated').textContent = D.updated;
  document.getElementById('version').textContent = D.version || '';
  window.addEventListener('hashchange', render);
  render();
})();
