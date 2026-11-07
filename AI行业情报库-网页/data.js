/*
 * AI 行业情报库 · 数据文件
 * 新增公司、更新数据只改这个文件，不改页面代码（PRD 第 9 章）。
 *
 * 填写规则（PRD 7.4）：
 *   - 每个模块都要有 src（来源）；查不到的字段写 null，页面会显示「未查到」
 *   - src 写法：{ url, checked: '查询日期' }
 *       official: false   → 来自「其他公开来源」，页面标注「非官方来源」（官方和权威媒体都不用写）
 *       label: '说明'      → 说法不一时附多个来源，用 label 区分
 *   - 融资不适用（上市公司、大厂内部团队）：funding 写 { applicable: false, reason: '原因', src }
 *   - 动态类型只能是：模型发布 / 融资 / 产品 / 合作 / 人事
 *   - 金额写原币种和单位，例如「650 亿美元」
 */
window.DATA = {
  updated: '2026-10-20',

  companies: [
    {
      id: 'anthropic',
      nameZh: 'Anthropic',
      nameEn: 'Anthropic',
      aliases: ['Claude'],
      region: '海外',
      tagline: 'Claude 系列大模型开发商',
      hq: '旧金山',
      founded: '2021',
      website: 'https://www.anthropic.com',
      src: { url: 'https://en.wikipedia.org/wiki/Anthropic', checked: '2026-10-20', official: false },
      model: {
        name: 'Claude 5.5 系列（Opus / Sonnet / Haiku）',
        date: '2026-10-07（Haiku 5.5）',
        features: 'Opus 5.5 于 9 月 22 日发布，主打智能体编程、电脑操作和知识工作；典型任务成本比 Opus 5 低 40%，输出速度快 30% 以上',
        src: { url: 'https://www.anthropic.com/claude-opus-5-5', checked: '2026-10-20' },
      },
      funding: {
        round: 'H 轮',
        amount: '650 亿美元',
        valuation: '9650 亿美元（投后）',
        investors: 'Altimeter Capital、Dragoneer、Greenoaks、Sequoia Capital 领投',
        date: '2026-05-28',
        src: { url: 'https://www.anthropic.com/news/series-h', checked: '2026-10-20' },
      },
      products: {
        consumer: 'Claude（网页、桌面端、手机 App）',
        enterprise: 'Claude Platform API、Team / Enterprise 版、Claude Code',
        pricing: '免费版 0 元；Pro 20 美元/月（按年付 17 美元/月）；Max 100 美元/月起',
        apiPaid: '收费，按 token 计费（Opus 5.5：输入 4 美元、输出 20 美元 / 百万 token）',
        src: [
          { url: 'https://claude.com/pricing', checked: '2026-10-20', label: '会员价格' },
          { url: 'https://www.anthropic.com/claude-opus-5-5', checked: '2026-10-20', label: 'API 价格' },
        ],
      },
    },

    {
      id: 'deepseek',
      nameZh: '深度求索',
      nameEn: 'DeepSeek',
      aliases: [],
      region: '国内',
      tagline: '开源大模型公司',
      hq: '杭州',
      founded: '2023',
      website: 'https://www.deepseek.com',
      src: { url: 'https://en.wikipedia.org/wiki/DeepSeek', checked: '2026-10-20', official: false },
      model: {
        name: 'DeepSeek-V4.1-Flash / DeepSeek-V4-Pro',
        date: '2026-10-17（V4.1-Flash-1017）',
        features: 'V4.1-Flash 为 552B 参数 MoE 模型，采用新的非对称编解码架构，原生支持视觉理解；权重在 Hugging Face 开源',
        src: [
          { url: 'https://api-docs.deepseek.com/news/news261017', checked: '2026-10-20', label: '1017 版' },
          { url: 'https://api-docs.deepseek.com/news/news260910', checked: '2026-10-20', label: 'V4.1-Flash' },
        ],
      },
      funding: {
        round: '首轮外部融资（新一轮洽谈中）',
        amount: '约 74 亿美元（约 500 亿元人民币）',
        valuation: '说法不一：500 亿美元以上（The Information）；约 3500 亿元人民币（CNBC 援引投资方文件）',
        investors: '腾讯、宁德时代领投，国家人工智能产业投资基金、阿里巴巴参与',
        date: '2026-06',
        src: [
          { url: 'https://www.siliconrepublic.com/business/the-information-deepseek-raises-7-4bn-at-50bn-plus-valuation', checked: '2026-10-20', label: 'Silicon Republic' },
          { url: 'https://www.cnbc.com/2026/10/06/deepseek-funding-round.html', checked: '2026-10-20', label: 'CNBC' },
        ],
      },
      products: {
        consumer: 'DeepSeek 网页版、App',
        enterprise: 'DeepSeek API（含搜索 / 抓取 API）',
        pricing: null,
        apiPaid: '收费，按 token 计费，分高峰和低谷价，低谷价比高峰价低 50%',
        src: { url: 'https://api-docs.deepseek.com/news/news260813', checked: '2026-10-20' },
      },
    },

    {
      id: 'qwen',
      nameZh: '阿里·通义',
      nameEn: 'Qwen',
      aliases: ['通义', '通义千问', '千问', '阿里', '阿里巴巴', 'Alibaba'],
      region: '国内',
      tagline: '阿里巴巴旗下开源大模型系列',
      hq: '杭州',
      founded: '2023（通义千问首次发布）',
      website: 'https://qwen.ai',
      src: { url: 'https://en.wikipedia.org/wiki/Qwen', checked: '2026-10-20', official: false },
      model: {
        name: 'Qwen3.8-Max',
        date: '2026-08-17（开放权重）',
        features: '通义最强模型，8 月开放权重供免费下载；同日发布可在笔记本电脑上运行的 Qwen3.8-27B',
        src: { url: 'https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html', checked: '2026-10-20' },
      },
      funding: {
        applicable: false,
        reason: '阿里巴巴集团内部团队',
        src: { url: 'https://en.wikipedia.org/wiki/Qwen', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: null,
        enterprise: null,
        pricing: null,
        apiPaid: null,
        src: null,
      },
    },

    {
      id: 'openai',
      nameZh: 'OpenAI',
      nameEn: 'OpenAI',
      aliases: ['ChatGPT', 'GPT'],
      region: '海外',
      tagline: 'ChatGPT 开发商',
      hq: '旧金山',
      founded: '2015',
      website: 'https://openai.com',
      src: { url: 'https://en.wikipedia.org/wiki/OpenAI', checked: '2026-10-20', official: false },
      model: {
        name: 'GPT-6 系列（Astra / Sol / Luna）',
        date: '2026-09-29（GPT-6.1 Sol）',
        features: 'GPT-6 Astra 于 9 月 3 日发布，在电脑操作、浏览、软件工程、网络安全、科学和专业工作上达到业界领先；可通过 ChatGPT、OpenAI API、Azure 和 AWS Bedrock 使用',
        src: [
          { url: 'https://openai.com/index/gpt-6-astra', checked: '2026-10-20', label: 'Astra' },
          { url: 'https://openai.com/index/introducing-gpt-6-1-sol', checked: '2026-10-20', label: '6.1 Sol' },
        ],
      },
      funding: {
        round: null,
        amount: '1220 亿美元',
        valuation: '8520 亿美元（投后）',
        investors: '软银联合 a16z、D. E. Shaw Ventures、MGX、TPG 等领投；亚马逊、英伟达、软银为战略投资方',
        date: '2026-03-31',
        src: { url: 'https://finance.yahoo.com/markets/stocks/articles/openai-closes-122-billion-funding-010940572.html', checked: '2026-10-20' },
      },
      products: {
        consumer: 'ChatGPT（网页、App）',
        enterprise: 'OpenAI API、ChatGPT Business / Enterprise、Codex',
        pricing: 'Pro 100 美元/月起；其他档位未查到',
        apiPaid: '收费；GPT-6 系列在 API 中按灵活用量计费',
        src: [
          { url: 'https://chatgpt.com/pricing', checked: '2026-10-20', label: '会员价格' },
          { url: 'https://openai.com/api/pricing/', checked: '2026-10-20', label: 'API 价格' },
        ],
      },
    },

    {
      id: 'google-deepmind',
      nameZh: 'Google DeepMind',
      nameEn: 'Google DeepMind',
      aliases: ['谷歌', 'Google', 'Gemini', 'DeepMind'],
      region: '海外',
      tagline: '谷歌旗下 AI 实验室',
      hq: '伦敦',
      founded: '2010',
      website: 'https://deepmind.google',
      src: { url: 'https://en.wikipedia.org/wiki/Google_DeepMind', checked: '2026-10-20', official: false },
      model: {
        name: 'Gemini 4 Argon',
        date: '2026-10-13（全面开放）',
        features: '新一代旗舰推理模型，擅长复杂编程、金融、法律、网络安全和科学任务；面向开发者、企业和普通用户开放',
        src: { url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/', checked: '2026-10-20' },
      },
      funding: {
        applicable: false,
        reason: '谷歌（Alphabet）内部团队',
        src: { url: 'https://en.wikipedia.org/wiki/Google_DeepMind', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: 'Gemini（网页、App）',
        enterprise: 'Gemini API、Google AI Studio',
        pricing: 'Google AI Pro（含 5 TB 存储）19.99 美元/月',
        apiPaid: '有免费额度；Gemini 4 Argon 只在付费层提供，输入 2 美元 / 百万 token（11 月 30 日前价格）',
        src: [
          { url: 'https://one.google.com/about/plans', checked: '2026-10-20', label: '会员价格' },
          { url: 'https://ai.google.dev/gemini-api/docs/pricing', checked: '2026-10-20', label: 'API 价格' },
        ],
      },
    },

    {
      id: 'meta',
      nameZh: 'Meta',
      nameEn: 'Meta',
      aliases: ['Meta AI', 'Muse', 'Facebook', 'MSL'],
      region: '海外',
      tagline: 'Meta 旗下 AI 实验室',
      hq: '门洛帕克',
      founded: '2025（Meta 超级智能实验室成立）',
      website: 'https://ai.meta.com',
      src: { url: 'https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs', checked: '2026-10-20', official: false },
      model: {
        name: 'Muse Wonder / Muse Wonder Full',
        date: '2026-10-12',
        features: 'Meta 目前能力最强的模型，主打个人和工作中的智能体任务',
        src: { url: 'https://about.fb.com/news/2026/10/introducing-muse-wonder-models/', checked: '2026-10-20' },
      },
      funding: {
        applicable: false,
        reason: 'Meta Platforms（上市公司）内部团队',
        src: { url: 'https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: '个人 AI 智能体 Muse',
        enterprise: 'Muse 小企业版',
        pricing: null,
        apiPaid: null,
        src: [
          { url: 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/', checked: '2026-10-20', label: '个人版' },
          { url: 'https://about.fb.com/news/2026/09/introducing-muse-small-business/', checked: '2026-10-20', label: '小企业版' },
        ],
      },
    },

    {
      id: 'xai',
      nameZh: 'xAI',
      nameEn: 'xAI',
      aliases: ['SpaceXSI', 'SpaceXAI', 'Grok', 'SpaceX'],
      region: '海外',
      tagline: 'Grok 开发商，SpaceX 旗下',
      hq: '帕洛阿尔托',
      founded: '2023',
      website: 'https://x.ai',
      src: { url: 'https://en.wikipedia.org/wiki/SpaceXAI', checked: '2026-10-20', official: false },
      model: {
        name: 'Grok 4.7',
        date: '2026-09-21',
        features: '主打编程和知识工作，能更长时间处理难题并检查自己的结果；与 Grok 4.6 同价同速',
        src: { url: 'https://x.ai/news/grok-4-7', checked: '2026-10-20' },
      },
      funding: {
        applicable: false,
        reason: '2026 年 2 月被 SpaceX 收购，现为 SpaceX 全资子公司',
        src: { url: 'https://en.wikipedia.org/wiki/SpaceXAI', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: 'Grok（网页、App、X 内置）',
        enterprise: 'xAI API、Grok Bot 企业版、Cursor',
        pricing: 'The X Subscription：免费版 0；Plus 8 美元/月；Premium 30 美元/月；Super 100 美元/月；Ultra 200 美元/月',
        apiPaid: '收费；Grok 4.7 输入 2 美元、输出 6 美元 / 百万 token',
        src: [
          { url: 'https://x.ai/news/x-subscription', checked: '2026-10-20', label: '会员价格' },
          { url: 'https://x.ai/news/grok-4-7', checked: '2026-10-20', label: 'API 价格' },
        ],
      },
    },

    {
      id: 'mistral',
      nameZh: 'Mistral AI',
      nameEn: 'Mistral AI',
      aliases: ['Le Chat'],
      region: '海外',
      tagline: '欧洲开放权重大模型公司',
      hq: '巴黎',
      founded: '2023',
      website: 'https://mistral.ai',
      src: { url: 'https://en.wikipedia.org/wiki/Mistral_AI', checked: '2026-10-20', official: false },
      model: {
        name: 'Mistral Large 4',
        date: '2026-10-06（API 预览）',
        features: '1 万亿参数、原生多模态，激活参数 520 亿；公司迄今最大的模型，官方称当月底开放权重',
        src: { url: 'https://mistral.ai/news/mistral-large-4/', checked: '2026-10-20' },
      },
      funding: {
        round: 'D 轮',
        amount: '30 亿欧元',
        valuation: '超过 210 亿欧元（投后）',
        investors: '三星电子领投，EQT 旗下 Scaleup Europe Fund 和 PSG Equity 联合领投',
        date: '2026-09-08',
        src: { url: 'https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/', checked: '2026-10-20' },
      },
      products: {
        consumer: 'Le Chat（网页、App）',
        enterprise: 'Mistral API、Le Chat Team / Enterprise',
        pricing: '免费版 0；Pro 14.99 美元/月（学生 5.99 美元/月）；Team 24.99 美元/人/月',
        apiPaid: '收费；Mistral Large 4 输入 1.36 美元、输出 4.18 美元 / 百万 token',
        src: [
          { url: 'https://mistral.ai/pricing', checked: '2026-10-20', label: '会员价格' },
          { url: 'https://mistral.ai/news/mistral-large-4/', checked: '2026-10-20', label: 'API 价格' },
        ],
      },
    },

    {
      id: 'moonshot',
      nameZh: '月之暗面',
      nameEn: 'Moonshot AI',
      aliases: ['Kimi'],
      region: '国内',
      tagline: 'Kimi 大模型和智能助手开发商',
      hq: '北京',
      founded: '2023',
      website: 'https://www.kimi.com',
      src: { url: 'https://en.wikipedia.org/wiki/Moonshot_AI', checked: '2026-10-20', official: false },
      model: {
        name: 'Kimi K3',
        date: '2026-07',
        features: '新一代旗舰模型，发布十天后全链条开源',
        src: { url: 'https://news.pedaily.cn/202607/566986.shtml', checked: '2026-10-20' },
      },
      funding: {
        round: 'F 轮（G 轮 / Pre-IPO 轮已启动）',
        amount: '超过 35 亿美元',
        valuation: '350 亿美元（投后）',
        investors: null,
        date: '2026-07',
        src: [
          { url: 'https://news.pedaily.cn/202607/566986.shtml', checked: '2026-10-20', label: 'F 轮' },
          { url: 'https://www.cls.cn/detail/2445951', checked: '2026-10-20', label: 'G 轮' },
        ],
      },
      products: {
        consumer: 'Kimi（网页、App）',
        enterprise: 'Kimi 开放平台 API',
        pricing: null,
        apiPaid: null,
        src: { url: 'https://platform.moonshot.cn/blog', checked: '2026-10-20' },
      },
    },

    {
      id: 'zhipu',
      nameZh: '智谱',
      nameEn: 'Z.ai',
      aliases: ['智谱AI', 'Zhipu', 'GLM'],
      region: '国内',
      tagline: 'GLM 大模型开发商，港股上市',
      hq: '北京',
      founded: '2019',
      website: 'https://z.ai',
      src: { url: 'https://en.wikipedia.org/wiki/Z.ai', checked: '2026-10-20', official: false },
      model: {
        name: 'GLM-5.3',
        date: '2026-08-14',
        features: '基座与 GLM-5.2 相同，靠大规模后训练提升能力，主打编程和网络安全',
        src: { url: 'https://companies.caixin.com/2026-08-14/102474172.html', checked: '2026-10-20' },
      },
      funding: {
        applicable: false,
        reason: '港股上市公司（02513.HK），2026 年 1 月上市',
        src: { url: 'https://en.wikipedia.org/wiki/Z.ai', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: null,
        enterprise: null,
        pricing: null,
        apiPaid: null,
        src: null,
      },
    },

    {
      id: 'minimax',
      nameZh: 'MiniMax',
      nameEn: 'MiniMax',
      aliases: ['稀宇', '稀宇科技', '海螺'],
      region: '国内',
      tagline: '多模态大模型公司，港股上市',
      hq: '上海',
      founded: '2021',
      website: 'https://www.minimax.io',
      src: { url: 'https://en.wikipedia.org/wiki/MiniMax_Group', checked: '2026-10-20', official: false },
      model: {
        name: 'MiniMax M3',
        date: '2026-06-01（M3.1-Flash-Preview 于 9 月 27 日上线）',
        features: '开放权重旗舰模型，上下文窗口 100 万 token；M3.1 预览版暂未开放权重',
        src: { url: 'https://presenc.ai/research/minimax-model-lineage-2026', checked: '2026-10-20', official: false },
      },
      funding: {
        applicable: false,
        reason: '港股上市公司（00100.HK），2026 年 1 月上市',
        src: { url: 'https://en.wikipedia.org/wiki/MiniMax_Group', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: null,
        enterprise: 'MiniMax API、MiniMax Code、Token Plan 订阅',
        pricing: null,
        apiPaid: '收费；M 系列输入 0.30 美元、输出 1.20 美元 / 百万 token',
        src: { url: 'https://presenc.ai/research/minimax-model-lineage-2026', checked: '2026-10-20', official: false },
      },
    },

    {
      id: 'doubao',
      nameZh: '字节·豆包',
      nameEn: 'Doubao',
      aliases: ['豆包', '字节', '字节跳动', 'ByteDance', 'Seed', '火山引擎'],
      region: '国内',
      tagline: '字节跳动旗下大模型和 AI 助手',
      hq: '北京',
      founded: '2023（豆包上线）',
      website: 'https://www.doubao.com',
      src: [
        { url: 'https://en.wikipedia.org/wiki/Doubao', checked: '2026-10-20', official: false, label: '豆包' },
        { url: 'https://en.wikipedia.org/wiki/ByteDance', checked: '2026-10-20', official: false, label: '字节跳动总部' },
      ],
      model: {
        name: '豆包大模型 2.1（Seed-2.1-pro / Seed-2.1-turbo）',
        date: '2026-06',
        features: null,
        src: { url: 'https://decohack.com/ai-daily/2026-06-24/', checked: '2026-10-20', official: false },
      },
      funding: {
        applicable: false,
        reason: '字节跳动内部团队',
        src: { url: 'https://en.wikipedia.org/wiki/Doubao', checked: '2026-10-20', official: false },
      },
      products: {
        consumer: '豆包（网页、App）',
        enterprise: '火山引擎豆包大模型',
        pricing: null,
        apiPaid: null,
        src: { url: 'https://www.volcengine.com/product/doubao', checked: '2026-10-20' },
      },
    },
  ],

  news: [
    // Anthropic
    { company: 'anthropic', date: '2026-10-14', type: '合作', title: '开设新加坡办公室，并与新加坡政府签署合作备忘录',
      src: { url: 'https://www.anthropic.com/news/singapore-office-opening', checked: '2026-10-20' } },
    { company: 'anthropic', date: '2026-10-07', type: '模型发布', title: '发布 Claude Haiku 5.5',
      src: { url: 'https://www.anthropic.com/claude-haiku-5-5', checked: '2026-10-20' } },
    { company: 'anthropic', date: '2026-10-01', type: '合作', title: '巴克莱银行扩大使用 Claude，用于运营和客户服务',
      src: { url: 'https://www.anthropic.com/news/barclays-scales-claude', checked: '2026-10-20' } },
    { company: 'anthropic', date: '2026-09-28', type: '模型发布', title: '发布 Claude Sonnet 5.5',
      src: { url: 'https://www.anthropic.com/claude-sonnet-5-5', checked: '2026-10-20' } },
    { company: 'anthropic', date: '2026-09-22', type: '模型发布', title: '发布 Claude Opus 5.5，5.5 系列首个模型',
      src: { url: 'https://www.anthropic.com/claude-opus-5-5', checked: '2026-10-20' } },

    // DeepSeek
    { company: 'deepseek', date: '2026-10-17', type: '模型发布', title: '发布 V4.1-Flash-1017，开放搜索 API',
      src: { url: 'https://api-docs.deepseek.com/news/news261017', checked: '2026-10-20' } },
    { company: 'deepseek', date: '2026-10-06', type: '融资', title: '据报道新一轮融资规模或扩大至最高 1000 亿元人民币',
      src: { url: 'https://www.cnbc.com/2026/10/06/deepseek-funding-round.html', checked: '2026-10-20' } },
    { company: 'deepseek', date: '2026-09-10', type: '模型发布', title: '发布 V4.1-Flash，新架构，原生支持视觉理解',
      src: { url: 'https://api-docs.deepseek.com/news/news260910', checked: '2026-10-20' } },
    { company: 'deepseek', date: '2026-08-21', type: '模型发布', title: '发布多模态实验模型 V4-Flash-Vision-Exp',
      src: { url: 'https://api-docs.deepseek.com/news/news260821', checked: '2026-10-20' } },
    { company: 'deepseek', date: '2026-08-13', type: '模型发布', title: 'V4-Pro 正式发布，API 推出高峰 / 低谷分时价',
      src: { url: 'https://api-docs.deepseek.com/news/news260813', checked: '2026-10-20' } },

    // 阿里·通义
    { company: 'qwen', date: '2026-10-09', type: '模型发布', title: '发布图像模型 Qwen-Image-2.1-Turbo',
      src: { url: 'https://www.marktechpost.com/2026/10/09/alibaba-qwen-releases-qwen-image-2-1-turbo-an-8-step-7b-image-model/', checked: '2026-10-20' } },
    { company: 'qwen', date: '2026-09-22', type: '模型发布', title: '云栖大会公布 Qwen 4 系列，尚未正式上线',
      src: { url: 'https://aitoolsreview.co.uk/insights/qwen-4', checked: '2026-10-20', official: false } },
    { company: 'qwen', date: '2026-09-21', type: '模型发布', title: '开源 7B 图像生成与编辑模型 Qwen-Image-2.1',
      src: { url: 'https://www.marktechpost.com/2026/09/21/alibaba-qwen-releases-qwen-image-2-1/', checked: '2026-10-20' } },
    { company: 'qwen', date: '2026-08-17', type: '模型发布', title: '发布 Qwen3.8-27B，开放 Max 权重',
      src: { url: 'https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html', checked: '2026-10-20' } },

    // OpenAI
    { company: 'openai', date: '2026-10-07', type: '产品', title: 'GPT-6 向所有 ChatGPT 用户开放',
      src: { url: 'https://openai.com/index/gpt-6-for-everyone', checked: '2026-10-20' } },
    { company: 'openai', date: '2026-10-06', type: '合作', title: '与 Atlassian 扩大合作，把企业知识接入 AI',
      src: { url: 'https://openai.com/index/atlassian-partnership', checked: '2026-10-20' } },
    { company: 'openai', date: '2026-09-29', type: '模型发布', title: '发布 GPT-6.1 Sol',
      src: { url: 'https://openai.com/index/introducing-gpt-6-1-sol', checked: '2026-10-20' } },
    { company: 'openai', date: '2026-09-03', type: '模型发布', title: '发布 GPT-6 Astra，GPT-6 系列首个模型',
      src: { url: 'https://openai.com/index/gpt-6-astra', checked: '2026-10-20' } },
    { company: 'openai', date: '2026-08-13', type: '人事', title: '任命 Dali Rajic 为首席营收官',
      src: { url: 'https://openai.com/index/dali-rajic-chief-revenue-officer', checked: '2026-10-20' } },

    // Google DeepMind
    { company: 'google-deepmind', date: '2026-10-14', type: '合作', title: '与新加坡政府合作开发端侧诈骗检测模型',
      src: { url: 'https://deepmind.google/blog/on-device-ai-scam-detection-mddi/', checked: '2026-10-20' } },
    { company: 'google-deepmind', date: '2026-10-13', type: '模型发布', title: 'Gemini 4 Argon 全面开放',
      src: { url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/', checked: '2026-10-20' } },
    { company: 'google-deepmind', date: '2026-10-06', type: '模型发布', title: '开源轻量多模态嵌入模型 EmbeddingGemma 2',
      src: { url: 'https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/', checked: '2026-10-20' } },
    { company: 'google-deepmind', date: '2026-09-30', type: '模型发布', title: '公布新一代前沿模型 Gemini 4 Argon',
      src: { url: 'https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/', checked: '2026-10-20' } },
    { company: 'google-deepmind', date: '2026-09-02', type: '模型发布', title: '发布 Gemini 3.8 Flash 系列',
      src: { url: 'https://deepmind.google/blog/introducing-gemini-3-8-flash-and-38-flash-cyber/', checked: '2026-10-20' } },

    // Meta
    { company: 'meta', date: '2026-10-12', type: '模型发布', title: '发布智能体模型 Muse Wonder 系列',
      src: { url: 'https://about.fb.com/news/2026/10/introducing-muse-wonder-models/', checked: '2026-10-20' } },
    { company: 'meta', date: '2026-09-29', type: '产品', title: '推出 Muse 小企业版',
      src: { url: 'https://about.fb.com/news/2026/09/introducing-muse-small-business/', checked: '2026-10-20' } },
    { company: 'meta', date: '2026-09-23', type: '产品', title: '发布 Ray-Ban 等 AI 眼镜新品',
      src: { url: 'https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/', checked: '2026-10-20' } },
    { company: 'meta', date: '2026-09-08', type: '产品', title: '推出面向所有人的个人 AI 智能体 Muse',
      src: { url: 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/', checked: '2026-10-20' } },

    // xAI
    { company: 'xai', date: '2026-10-14', type: '模型发布', title: '发布语音模型 Grok Voice 3.0',
      src: { url: 'https://x.ai/news/grok-voice-3', checked: '2026-10-20' } },
    { company: 'xai', date: '2026-10-12', type: '产品', title: 'Grok、Cursor、X 合并为一个订阅',
      src: { url: 'https://x.ai/news/x-subscription', checked: '2026-10-20' } },
    { company: 'xai', date: '2026-09-28', type: '产品', title: '推出团队共享的 AI 同事 Team Bots',
      src: { url: 'https://x.ai/news/team-bots', checked: '2026-10-20' } },
    { company: 'xai', date: '2026-09-21', type: '模型发布', title: '发布 Grok 4.7',
      src: { url: 'https://x.ai/news/grok-4-7', checked: '2026-10-20' } },
    { company: 'xai', date: '2026-09-03', type: '产品', title: 'Grok Bot 推出企业版',
      src: { url: 'https://x.ai/news/grok-bot-for-enterprise', checked: '2026-10-20' } },

    // Mistral
    { company: 'mistral', date: '2026-10-15', type: '模型发布', title: '发布时间序列预测模型 Timestral',
      src: { url: 'https://mistral.ai/news/timestral/', checked: '2026-10-20' } },
    { company: 'mistral', date: '2026-10-06', type: '模型发布', title: '发布 Mistral Large 4 预览版',
      src: { url: 'https://mistral.ai/news/mistral-large-4/', checked: '2026-10-20' } },
    { company: 'mistral', date: '2026-09-16', type: '合作', title: '与 Mozilla 合作，为 Firefox 提供 AI',
      src: { url: 'https://mistral.ai/news/mistral-x-mozilla/', checked: '2026-10-20' } },
    { company: 'mistral', date: '2026-09-10', type: '合作', title: '与 Cloudera 合作，面向企业数据提供 AI',
      src: { url: 'https://mistral.ai/news/mistral-x-cloudera/', checked: '2026-10-20' } },
    { company: 'mistral', date: '2026-09-08', type: '融资', title: '完成 30 亿欧元 D 轮融资，投后估值超 210 亿欧元',
      src: { url: 'https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/', checked: '2026-10-20' } },

    // 月之暗面
    { company: 'moonshot', date: '2026-10-12', type: '融资', title: '注册资本增至约 1437 万元，年内多次增资',
      src: { url: 'https://finance.sina.com.cn/tech/roll/2026-10-12/doc-iniuxwif5337037.shtml', checked: '2026-10-20' } },
    { company: 'moonshot', date: '2026-08-05', type: '融资', title: '据报道 Pre-IPO 轮启动，估值 500 亿美元',
      src: { url: 'https://www.cls.cn/detail/2445951', checked: '2026-10-20' } },
    { company: 'moonshot', date: '2026-07-30', type: '融资', title: '据报道完成超 35 亿美元 F 轮融资',
      src: { url: 'https://news.pedaily.cn/202607/566986.shtml', checked: '2026-10-20' } },

    // 智谱
    { company: 'zhipu', date: '2026-10-05', type: '合作', title: 'Cursor 上线 GLM-5.3 系列模型',
      src: { url: 'https://finance.sina.com.cn/jjxw/2026-10-05/doc-iniuekzz2774086.shtml', checked: '2026-10-20' } },
    { company: 'zhipu', date: '2026-08-14', type: '模型发布', title: '发布 GLM-5.3，主打编程和网络安全',
      src: { url: 'https://companies.caixin.com/2026-08-14/102474172.html', checked: '2026-10-20' } },

    // MiniMax
    { company: 'minimax', date: '2026-09-27', type: '模型发布', title: 'M3.1-Flash 预览版上线',
      src: { url: 'https://presenc.ai/research/minimax-model-lineage-2026', checked: '2026-10-20', official: false } },

    // 字节·豆包
    { company: 'doubao', date: '2026-10-19', type: '产品', title: '火山引擎推出 Seedance AI 短剧激励计划',
      src: { url: 'https://chaincatcher.com/en/article/2297291', checked: '2026-10-20', official: false } },
    { company: 'doubao', date: '2026-10-16', type: '人事', title: 'Seed 成立对齐与风险预备部门，全球招聘研究员',
      src: { url: 'https://digitimes.com/news/a20261016PD234/bytedance-testing-development-governance-competition.html', checked: '2026-10-20' } },
  ],
};
