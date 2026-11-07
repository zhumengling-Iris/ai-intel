(function () {
  'use strict';

  const D = window.DATA;
  const app = document.getElementById('app');
  const bar = document.getElementById('compare-bar');

  const MISSING = '未查到';
  const NO_NEWS = '近 3 个月暂无公开动态';
  const TYPES = ['模型发布', '融资', '产品', '合作', '人事'];
  const MIN_CMP = 2;
  const MAX_CMP = 4;

  // 页面状态：切换页面时保留，回到列表还是原来的筛选和勾选
  const state = { region: '全部', query: '', selected: [], types: [] };

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

  // ---------- 路由 ----------
  function parseHash() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, query = ''] = raw.split('?');
    const params = new URLSearchParams(query);
    const parts = path.split('/').filter(Boolean);
    return { page: parts[0] || 'list', arg: parts[1], params };
  }

  function render() {
    const { page, arg, params } = parseHash();

    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('active', a.dataset.nav === (page === 'company' ? 'list' : page));
    });

    if (page === 'company') renderDetail(arg);
    else if (page === 'compare') renderCompare(params);
    else if (page === 'timeline') renderTimeline();
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
          <div class="card-row"><span class="k">主力模型：</span>${val(c.model?.name)}</div>
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

  // ---------- F3 公司详情 ----------
  function renderDetail(id) {
    const c = byId(id);
    if (!c) {
      app.innerHTML = '<a class="back" href="#/">← 返回列表</a><div class="empty">没有找到这家公司</div>';
      return;
    }
    document.title = `${c.nameZh} · AI 行业情报库`;
    const m = c.model || {};
    const f = c.funding || {};
    const p = c.products || {};
    const news = newsOf(c.id).slice(0, 5);

    const section = (title, src, body) => `
      <section class="section">
        <div class="section-head"><h2>${title}</h2><div class="section-srcs">${sources(src)}</div></div>
        ${body}
      </section>
    `;
    const kv = (rows) => `<dl class="kv">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;

    const fundingBody = f.applicable === false
      ? kv([['融资情况', `不适用<div class="na-reason">${esc(f.reason)}</div>`]])
      : kv([
        ['轮次', val(f.round)],
        ['金额', val(f.amount)],
        ['估值', val(f.valuation)],
        ['主要投资方', val(f.investors)],
        ['日期', val(f.date)],
      ]);

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
      </div>

      ${section('基本信息', c.src, kv([
        ['一句话定位', val(c.tagline)],
        ['总部', val(c.hq)],
        ['成立时间', val(c.founded)],
      ]))}

      ${section('主力模型', m.src, kv([
        ['模型名称', val(m.name)],
        ['最近发布时间', val(m.date)],
        ['主要特点', val(m.features)],
      ]))}

      ${section('最近一轮融资', f.src, fundingBody)}

      ${section('产品与商业化', p.src, kv([
        ['个人用户产品', val(p.consumer)],
        ['企业 / 开发者产品', val(p.enterprise)],
        ['个人会员价格', val(p.pricing)],
        ['API 是否收费', val(p.apiPaid)],
      ]))}

      <section class="section">
        <div class="section-head"><h2>近期动态</h2></div>
        ${news.length ? `<ul class="news-list">${news.map((n) => `
          <li class="news-item">
            <span class="date">${esc(n.date)}</span>
            <span class="title">${tag(n.type)} ${esc(n.title)}</span>
            <span class="src-cell">${sources(n.src)}</span>
          </li>`).join('')}</ul>` : `<div class="muted">${NO_NEWS}</div>`}
      </section>
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

    const rows = [
      ['地区', (c) => esc(c.region)],
      ['一句话定位', (c) => val(c.tagline)],
      ['主力模型', (c) => `${val(c.model?.name)}${c.model?.features ? `<span class="sub">${esc(c.model.features)}</span>` : ''}`],
      ['最近发布时间', (c) => val(c.model?.date)],
      ['最近一轮融资', (c) => fundingSummary(c.funding)],
      ['估值', (c) => valuation(c.funding)],
      ['个人会员价格', (c) => val(c.products?.pricing)],
      ['API 是否收费', (c) => val(c.products?.apiPaid)],
      ['最近一条动态', (c) => {
        const n = latestNews(c.id);
        return n ? `${esc(n.title)}<span class="sub">${esc(n.date)} · ${n.type}</span>` : `<span class="muted">${NO_NEWS}</span>`;
      }],
    ];

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
          <tbody>
            ${rows.map(([label, cell]) => `
              <tr><th scope="row">${label}</th>${list.map((c) => `<td>${cell(c)}</td>`).join('')}</tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ---------- F5 动态时间线 ----------
  function renderTimeline() {
    document.title = '动态时间线 · AI 行业情报库';
    app.innerHTML = `
      <h1>动态时间线</h1>
      <p class="page-sub">所有公司的动态按日期倒序排列。</p>
      <div class="toolbar">
        <div class="chips" role="group" aria-label="类型筛选" id="type-chips"></div>
        <span class="result-count" id="count"></span>
      </div>
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

    const items = sortByDate(D.news).filter((n) => all || state.types.includes(n.type));
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
          <a class="co" href="#/company/${n.company}">${c ? shortName(c) : esc(n.company)}</a>
          <span class="title">${tag(n.type)} ${esc(n.title)}</span>
          <span class="src-cell">${sources(n.src)}</span>
        </li>
      `;
    }).join('');
  }

  // ---------- 启动 ----------
  document.getElementById('updated').textContent = D.updated;
  window.addEventListener('hashchange', render);
  render();
})();
