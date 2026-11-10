// 检查 data.js 是否符合 PRD 的数据规则。用法：node check.js <data.js 路径>
// 有问题时打印并以非 0 退出，自动更新写入前后都要跑一遍。
const fs = require('fs');
const vm = require('vm');

const file = process.argv[2];
const ctx = { window: {} };
try {
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
} catch (e) {
  console.error('data.js 无法解析：', e.message);
  process.exit(1);
}
const D = ctx.window.DATA;
const errs = [];
const TYPES = ['模型发布', '融资', '产品', '合作', '人事', '下架停服', '定价与商业模式', '标准与协议', '监管政策', '收购与整合', '安全事故', '技术概念'];
const DIRS = ['agent', 'context', 'eval', 'cost', 'safety', 'ux'];
const STATUS = ['新出现', '升温中', '已普及', '降温'];
const FEATS = ['search', 'research', 'image', 'video', 'voice', 'files', 'coding', 'computer', 'memory', 'openWeights', 'api', 'enterprise'];
const DATE = /^\d{4}(-\d{2}(-\d{2})?)?$/;

if (!D || !Array.isArray(D.companies) || !Array.isArray(D.news)) errs.push('缺少 companies 或 news');
if (!DATE.test(D.updated || '')) errs.push('updated 日期格式不对');
const ids = new Set();
for (const c of D.companies || []) {
  if (ids.has(c.id)) errs.push(`公司 id 重复：${c.id}`);
  ids.add(c.id);
  const models = c.models || [];
  const cur = models.filter((m) => m.current);
  if (cur.length !== 1) errs.push(`${c.id}：当前主力模型应为 1 个，实际 ${cur.length} 个`);
  if (cur[0] && !cur[0].detail) errs.push(`${c.id}：当前主力模型缺少 detail`);
  const mids = new Set();
  for (const m of models) {
    if (mids.has(m.id)) errs.push(`${c.id}：模型 id 重复 ${m.id}`);
    mids.add(m.id);
    if (!m.name || !DATE.test(m.date || '')) errs.push(`${c.id}/${m.id}：名称或日期缺失（日期写 YYYY、YYYY-MM 或 YYYY-MM-DD）`);
  }
  for (const k of FEATS) {
    const f = (c.features || {})[k];
    if (!f || !['有', '部分', '无', '未查到'].includes(f.v)) errs.push(`${c.id}：功能 ${k} 缺失或取值不对`);
  }
}
for (const n of D.news || []) {
  // 行业事件可以没有所属公司，但要写相关对象（PRD 5.3）；V2.0 及更早的数据没有此字段时公司必填
  if (n.company ? !ids.has(n.company) : !n.subject) errs.push(`动态缺少公司或相关对象：${n.title}`);
  for (const k of n.directions || []) if (!DIRS.includes(k)) errs.push(`动态方向不对：${k}（${n.title}）`);
  if ((n.directions || []).length > 2) errs.push(`动态方向超过 2 个：${n.title}`);
  if (n.term && !(D.terms || []).some((x) => x.id === n.term)) errs.push(`动态关联的词条不存在：${n.term}`);
  if (!TYPES.includes(n.type)) errs.push(`动态类型不对：${n.type}（${n.title}）`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.date)) errs.push(`动态日期要精确到日：${n.title}`);
  // 来源可以是一个，也可以是多个（说法不一时附两个来源）
  const srcs = Array.isArray(n.src) ? n.src : (n.src ? [n.src] : []);
  if (!srcs.length || srcs.some((s) => !s || !s.url)) errs.push(`动态缺少来源：${n.title}`);
  if ((n.title || '').length > 30) errs.push(`动态标题超过 30 字：${n.title}`);
}

const termIds = new Set();
for (const x of D.terms || []) {
  if (termIds.has(x.id)) errs.push(`词条 id 重复：${x.id}`);
  termIds.add(x.id);
  for (const k of ['name', 'oneLine', 'problem', 'pmNote', 'proposer', 'statusReason']) if (!x[k]) errs.push(`${x.id}：缺少 ${k}`);
  if (!x.src || (Array.isArray(x.src) && !x.src.length)) errs.push(`${x.id}：缺少来源`);
  if (!STATUS.includes(x.status)) errs.push(`${x.id}：状态不对 ${x.status}`);
  if (!DATE.test(x.firstSeen || '')) errs.push(`${x.id}：首次出现要写 YYYY 或 YYYY-MM`);
  if (!(x.directions || []).length || x.directions.length > 2 || x.directions.some((k) => !DIRS.includes(k))) errs.push(`${x.id}：方向要 1–2 个且取值正确`);
  if ((x.oneLine || '').length > 40) errs.push(`${x.id}：一句话解释超过 40 字`);
  for (const a of x.adopters || []) {
    if (!ids.has(a.company)) errs.push(`${x.id}：相关公司不存在 ${a.company}`);
    if (!a.src) errs.push(`${x.id}：${a.company} 缺少来源`);
  }
}
for (const x of D.terms || []) for (const r of x.relations || []) if (!termIds.has(r.term)) errs.push(`${x.id}：相关词不存在 ${r.term}`);
for (const id of D.termLine || []) if (!termIds.has(id)) errs.push(`演变线的词不存在：${id}`);

const trackIds = new Set();
for (const x of D.tracks || []) {
  if (trackIds.has(x.id)) errs.push(`赛道 id 重复：${x.id}`);
  trackIds.add(x.id);
  if (!x.name || !x.group || !x.desc || !(x.dimensions || []).length) errs.push(`赛道字段缺失：${x.id}`);
  for (const k of x.terms || []) if (!termIds.has(k)) errs.push(`赛道 ${x.id} 的相关技术不存在：${k}`);
}
const productIds = new Set();
for (const x of D.products || []) {
  if (productIds.has(x.id)) errs.push(`产品 id 重复：${x.id}`);
  productIds.add(x.id);
  if (!x.name || !x.desc) errs.push(`产品字段缺失：${x.id}`);
  if (x.company ? !ids.has(x.company) : !x.companyName) errs.push(`产品缺少公司：${x.id}`);
  if (!x.src || (Array.isArray(x.src) && !x.src.length)) errs.push(`产品缺少来源：${x.id}`);
  for (const k of ['layer', 'core', 'modality', 'users']) if (!(x.labels || {})[k]) errs.push(`产品 ${x.id} 缺少标签 ${k}`);
  if (!(x.tracks || []).length) errs.push(`产品没有赛道：${x.id}`);
  for (const tid of x.tracks || []) {
    const tr = (D.tracks || []).find((m) => m.id === tid);
    if (!tr) { errs.push(`产品 ${x.id} 的赛道不存在：${tid}`); continue; }
    const row = (x.matrix || {})[tid];
    if (!row) { errs.push(`产品 ${x.id} 缺少赛道 ${tid} 的矩阵`); continue; }
    for (const dim of tr.dimensions) if (!(dim in row)) errs.push(`产品 ${x.id} 缺少维度 ${dim}（写 null 表示未查到）`);
    for (const dim of Object.keys(row)) if (!tr.dimensions.includes(dim)) errs.push(`产品 ${x.id} 有多余维度 ${dim}`);
  }
}
for (const x of D.tracks || []) if (!(D.products || []).some((p) => (p.tracks || []).includes(x.id))) errs.push(`赛道没有产品：${x.id}`);

if (errs.length) {
  console.error(`发现 ${errs.length} 个问题：\n- ${errs.join('\n- ')}`);
  process.exit(1);
}
console.log(`检查通过：${D.companies.length} 家公司，${D.news.length} 条动态，${D.companies.reduce((s, c) => s + c.models.length, 0)} 个模型，${(D.terms || []).length} 个新词，${(D.products || []).length} 个产品，数据更新于 ${D.updated}`);
