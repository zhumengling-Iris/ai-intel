/*
 * AI 行业情报库 · 数据文件（V3.3）
 * 新增公司、更新数据只改这个文件，不改页面代码（PRD 第 9 章）。
 * 每次自动更新前，旧文件会备份到 backup/data-YYYY-MM-DD.js。
 *
 * 填写规则（PRD 7.4）：
 *   - 每个模块都要有 src（来源）；查不到的字段写 null，页面会显示「未查到」
 *   - src 写法：{ url, checked: '查询日期' }
 *       official: false   → 来自「其他公开来源」，页面标注「非官方来源」
 *       label: '说明'      → 多个来源时用 label 区分
 *   - 动态类型只能是：模型发布 / 融资 / 产品 / 合作 / 人事
 *
 * V2.0 新增字段：
 *   - models[]：模型列表。current: true 的是当前主力（只能有一个）
 *       新主力出现时：旧主力改为 current: false，detail 原样保留（存档），新模型补齐 detail 后设为 current: true
 *       detail 分 6 类：basic / spec / ability / price / channels / bench，字段名见 PRD 5.4
 *       collected：detail 的收集日期；没有 detail 的历代模型可省略 detail
 *   - pricing：plans[]（会员档位）、api[]（API 价格），各自附来源
 *   - features：12 项功能，v 取值：有 / 部分 / 无 / 未查到
 *   - updates[]：更新记录，每次更新追加一组
 *
 * V3.0 新增字段：
 *   - news[]：company 改为选填；subject 写相关产品或机构（没有 company 时必填）；directions 是 0–2 个关注方向；term 关联词条
 *       动态类型新增：下架停服 / 定价与商业模式 / 标准与协议 / 监管政策 / 收购与整合 / 安全事故 / 技术概念
 *   - terms[]：新词雷达词条，字段见 PRD 5.8；status 取值：新出现 / 升温中 / 已普及 / 降温
 *   - termLine[]：技术演变线上显示的词条 id
 *   - directions 取值：agent / context / eval / cost / safety / ux（含义见 PRD 5.9）
 *
 * V3.1 新增字段（见 PRD 5.10）：
 *   - tracks[]：能力赛道，dimensions 是这条赛道的对比维度，terms 是相关词条 id
 *   - products[]：产品。company 填收录公司 id；范围外公司不写 company，写 companyName
 *       matrix[赛道 id][维度]：矩阵取值，查不到写 null；labels 是附录 A 的 4 个分类标签
 *   - terms[].category：词条分类，目前有「架构模式」「开发框架」「开发框架」
 *
 * V3.3 新增字段（PRD 6.10）：
 *   - officialGap：没有官方原文时必填 { reason, detail, tried: [], checked }
 *       reason 只能是：暂未找到 / 官网打不开 / 需要登录 / 只发在公众号 / 官方确实没发
 *   - officialDomains：官方域名清单；带 / 的按网址前缀匹配（如 huggingface.co/qwen）
 */
window.DATA = {
  "updated": "2026-11-10",
  "companies": [
    {
      "id": "anthropic",
      "nameZh": "Anthropic",
      "nameEn": "Anthropic",
      "aliases": [
        "Claude"
      ],
      "region": "海外",
      "tagline": "Claude 系列大模型开发商",
      "hq": "旧金山",
      "founded": "2021",
      "website": "https://www.anthropic.com",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Anthropic",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "round": "H 轮",
        "amount": "650 亿美元",
        "valuation": "9650 亿美元（投后）",
        "investors": "Altimeter Capital、Dragoneer、Greenoaks、Sequoia Capital 领投",
        "date": "2026-05-28",
        "src": {
          "url": "https://www.anthropic.com/news/series-h",
          "checked": "2026-10-20"
        }
      },
      "products": {
        "consumer": "Claude（网页、桌面端、手机 App）",
        "enterprise": "Claude Platform API、Team / Enterprise 版、Claude Code",
        "src": null
      },
      "models": [
        {
          "current": true,
          "collected": "2026-11-10",
          "id": "claude-fable-5-2",
          "name": "Claude Fable 5.2",
          "date": "2026-11-09",
          "summary": "官方称最强模型，面向最艰巨的技术工作",
          "src": {
            "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
            "checked": "2026-11-10",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-11-09",
              "开发方": "Anthropic",
              "是否开源": "否，通过 Claude 应用和 API 提供",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": [
                {
                  "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
                  "checked": "2026-11-10",
                  "label": "发布页"
                },
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                  "checked": "2026-11-10",
                  "label": "模型文档"
                }
              ]
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开（与 Mythos 5.2 是同一底层模型）",
              "上下文窗口": "100 万 token",
              "最大输出长度": "12.8 万 token",
              "src": [
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                  "checked": "2026-11-10",
                  "label": "模型文档"
                },
                {
                  "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
                  "checked": "2026-11-10",
                  "label": "发布页"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像",
              "输出模态": "文本",
              "推理模式": "自适应思考（始终开启），默认推理强度 high",
              "工具调用": "支持",
              "src": {
                "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                "checked": "2026-11-10",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "8 美元 / 百万 token（快速模式 16 美元）",
              "输出价格": "40 美元 / 百万 token（快速模式 80 美元）",
              "缓存价格": "读取 0.20 美元；写入 10 美元（5 分钟）/ 16 美元（1 小时）/ 百万 token",
              "src": [
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/pricing",
                  "checked": "2026-11-10",
                  "label": "价格文档"
                },
                {
                  "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
                  "checked": "2026-11-10",
                  "label": "发布页"
                }
              ]
            },
            "channels": {
              "渠道": "Claude 应用、Claude Code、Claude Platform API（claude-fable-5-2）、Amazon Web Services、Google Cloud、Microsoft Azure；Mythos 5.2 只向网络安全、生命科学验证计划的机构开放",
              "src": {
                "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
                "checked": "2026-11-10",
                "label": "发布页"
              }
            },
            "bench": {
              "items": [
                [
                  "FrontierCode 2.0（智能体编程，Xhigh）",
                  "49.1%"
                ],
                [
                  "FrontierSWE v2（智能体编程）",
                  "69.9%"
                ],
                [
                  "AutomationBench（业务流程）",
                  "51.4%"
                ],
                [
                  "Terminal-Bench-Science 0.1（科研）",
                  "74.6%"
                ],
                [
                  "OSWorld 2.1（电脑操作，离线部分题集）",
                  "89.3%"
                ],
                [
                  "Humanity’s Last Exam（使用工具）",
                  "74.2%"
                ],
                [
                  "Remote Labor Index（知识工作，High）",
                  "41.3%"
                ],
                [
                  "AA-Briefcase v1.1（知识工作）",
                  "66.1%（Elo 1785）"
                ],
                [
                  "RoboDojo Sim（机器人控制）",
                  "64.9%"
                ]
              ],
              "note": "开启防护时的成绩，默认取各模型最高可用推理强度；同表 Opus 5.5 的 AA-Briefcase Elo 为 1800。官方仍推荐多数任务先用 Opus 5.5",
              "src": {
                "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
                "checked": "2026-11-10",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-mythos-5-2",
          "name": "Claude Mythos 5.2",
          "date": "2026-11-09",
          "summary": "与 Fable 5.2 同一模型，限网安和生命科学机构使用",
          "src": {
            "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
            "checked": "2026-11-10",
            "label": "发布页"
          }
        },
        {
          "current": false,
          "collected": "2026-10-20",
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "date": "2026-09-22",
          "summary": "Claude 5.5 系列首个模型，多数任务接近 Fable 5.1",
          "src": {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-09-22",
              "开发方": "Anthropic",
              "是否开源": "否，通过 Claude 应用和 API 提供",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": [
                {
                  "url": "https://www.anthropic.com/claude-opus-5-5",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                }
              ]
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开",
              "上下文窗口": "100 万 token",
              "最大输出长度": "12.8 万 token",
              "src": [
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像",
              "输出模态": "文本",
              "推理模式": "自适应思考（始终开启），默认推理强度 medium",
              "工具调用": "支持",
              "src": {
                "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "4 美元 / 百万 token",
              "输出价格": "20 美元 / 百万 token",
              "缓存价格": "读取 0.20 美元、写入 5 美元 / 百万 token",
              "src": {
                "url": "https://www.anthropic.com/claude-opus-5-5",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            },
            "channels": {
              "渠道": "Claude 网页 / 桌面端 / App、Claude API、Amazon Bedrock、Google Cloud、Microsoft Foundry、Claude Platform on AWS",
              "src": {
                "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "bench": {
              "items": [
                [
                  "Terminal-Bench 4.0（智能体编程）",
                  "66.4%"
                ],
                [
                  "FrontierCode v1.1（智能体编程）",
                  "54.4%"
                ],
                [
                  "CursorBench 4.0（智能体编程）",
                  "57.8%"
                ],
                [
                  "OSWorld 2.1（电脑操作）",
                  "81.8%"
                ],
                [
                  "Humanity's Last Exam（使用工具）",
                  "67.7%"
                ],
                [
                  "GDPval-AA v2.1（知识工作，Elo）",
                  "1846"
                ],
                [
                  "AutomationBench（业务流程）",
                  "40.0%"
                ],
                [
                  "Terminal-Bench-Science 0.1（科研）",
                  "58.7%"
                ]
              ],
              "src": {
                "url": "https://www.anthropic.com/claude-opus-5-5",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "date": "2026-10-07",
          "summary": "5.5 系列最快的模型，适合大批量任务",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "date": "2026-09-28",
          "summary": "速度和智能的平衡",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-fable-5-1",
          "name": "Claude Fable 5.1",
          "date": "2026-09-01",
          "summary": "面向高难度推理和长时间智能体任务",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-opus-5",
          "name": "Claude Opus 5",
          "date": "2026-07-24",
          "summary": "Claude 5 代 Opus",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-fable-5",
          "name": "Claude Fable 5",
          "date": "2026-06-09",
          "summary": "新增 Fable 档，能力高于 Opus",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-mythos-preview",
          "name": "Claude Mythos Preview",
          "date": "2026-04-07",
          "summary": "有限开放的预览模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-opus-4-6",
          "name": "Claude Opus 4.6",
          "date": "2026-02-05",
          "summary": "编程更强，首个支持 100 万上下文（测试版）的 Opus",
          "src": {
            "url": "https://www.anthropic.com/news/claude-opus-4-6",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-opus-4-5",
          "name": "Claude Opus 4.5",
          "date": "2025-11-24",
          "summary": "官方称编程、智能体和电脑操作能力领先",
          "src": {
            "url": "https://www.anthropic.com/news/claude-opus-4-5",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-sonnet-4-5",
          "name": "Claude Sonnet 4.5",
          "date": "2025-09-29",
          "summary": "官方称最强编程模型，擅长构建智能体和操作电脑",
          "src": {
            "url": "https://www.anthropic.com/news/claude-sonnet-4-5",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-4",
          "name": "Claude Opus 4 / Sonnet 4",
          "date": "2025-05-22",
          "summary": "Claude 4 代，Opus 和 Sonnet 同日发布",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-3-7-sonnet",
          "name": "Claude 3.7 Sonnet",
          "date": "2025-02-24",
          "summary": "首个混合推理模型，同时推出 Claude Code 预览",
          "src": {
            "url": "https://www.anthropic.com/news/claude-3-7-sonnet",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-3-5-sonnet",
          "name": "Claude 3.5 Sonnet",
          "date": "2024-06-20",
          "summary": "3.5 系列首款，中档价格，超过 Claude 3 Opus",
          "src": {
            "url": "https://www.anthropic.com/news/claude-3-5-sonnet",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-3",
          "name": "Claude 3（Opus / Sonnet）",
          "date": "2024-03-04",
          "summary": "首次分为 Haiku / Sonnet / Opus 三档",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-2",
          "name": "Claude 2",
          "date": "2023-07-11",
          "summary": "回答更长，开放 API 和公开测试版网站",
          "src": {
            "url": "https://www.anthropic.com/news/claude-2",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-1",
          "name": "Claude",
          "date": "2023-03-14",
          "summary": "第一代 Claude",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Free",
            "monthly": "0",
            "annual": "0",
            "perks": "网页搜索、基础用量"
          },
          {
            "name": "Pro",
            "monthly": "20 美元",
            "annual": "17 美元",
            "perks": "Claude Code、项目、更多模型、Claude for Microsoft 365"
          },
          {
            "name": "Max",
            "monthly": "100 美元",
            "annual": null,
            "perks": "用量为 Pro 的 5 倍；Fable 最多用到每周限额一半；每月 100 美元 API 额度"
          },
          {
            "name": "Ultra",
            "monthly": "200 美元",
            "annual": null,
            "perks": "无 5 小时限额（已验证账户）；每周用量为 Pro 的 10 倍；每月 200 美元 API 额度"
          },
          {
            "name": "Team 标准席位",
            "monthly": "25 美元 / 人",
            "annual": "20 美元 / 人",
            "perks": "2–150 人团队，用量高于 Pro，含 Claude Code、Cowork"
          },
          {
            "name": "Team 高级席位",
            "monthly": "125 美元 / 人",
            "annual": "100 美元 / 人",
            "perks": "用量为标准席位的 5 倍"
          },
          {
            "name": "Enterprise",
            "monthly": null,
            "annual": "20 美元 / 人起",
            "perks": "按年付、至少 20 席，另按 API 价格计用量"
          }
        ],
        "plansSrc": {
          "url": "https://claude.com/pricing",
          "checked": "2026-11-09",
          "label": "Claude 套餐页"
        },
        "api": [
          {
            "model": "Claude Fable 5.2",
            "input": "8 美元",
            "output": "40 美元",
            "cache": "读取 0.20 美元"
          },
          {
            "model": "Claude Fable 5.1",
            "input": "10 美元",
            "output": "50 美元",
            "cache": "读取 0.25 美元"
          },
          {
            "model": "Claude Opus 5.5",
            "input": "4 美元",
            "output": "20 美元",
            "cache": "读取 0.20 美元"
          },
          {
            "model": "Claude Sonnet 5.5",
            "input": "2 美元",
            "output": "10 美元",
            "cache": "读取 0.10 美元"
          },
          {
            "model": "Claude Haiku 5.5",
            "input": "0.10 美元起",
            "output": "0.50 美元起",
            "cache": "读取 0.01 美元起"
          }
        ],
        "apiUnit": "单位：每百万 token",
        "apiSrc": [
          {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-10-20",
            "label": "模型文档"
          },
          {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          {
            "url": "https://platform.claude.com/docs/en/about-claude/pricing",
            "checked": "2026-11-09",
            "label": "Claude 价格文档"
          },
          {
            "url": "https://platform.claude.com/docs/en/about-claude/pricing",
            "checked": "2026-11-10",
            "label": "Claude 价格文档（Fable 5.2）"
          }
        ]
      },
      "features": {
        "search": {
          "v": "有",
          "note": "网页搜索",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "research": {
          "v": "有",
          "note": "Research",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "image": {
          "v": "无",
          "note": "当前模型只输出文本，不生成图片",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-11-09",
            "label": "Claude 模型文档"
          }
        },
        "video": {
          "v": "未查到"
        },
        "voice": {
          "v": "有",
          "note": "语音模式",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "files": {
          "v": "有",
          "note": "运行代码分析数据、创建和编辑文件",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "coding": {
          "v": "有",
          "note": "Claude Code",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "computer": {
          "v": "有",
          "note": "Claude in Chrome；Opus 5.5 主打电脑操作",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "memory": {
          "v": "有",
          "note": "跨对话记忆",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "openWeights": {
          "v": "无",
          "note": "只通过应用和 API 提供",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "api": {
          "v": "有",
          "note": "Claude API",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "Team / Enterprise",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-20"
          }
        }
      }
    },
    {
      "id": "deepseek",
      "nameZh": "深度求索",
      "nameEn": "DeepSeek",
      "aliases": [],
      "region": "国内",
      "tagline": "开源大模型公司",
      "hq": "杭州",
      "founded": "2023",
      "website": "https://www.deepseek.com",
      "src": {
        "url": "https://en.wikipedia.org/wiki/DeepSeek",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "round": "首轮外部融资（新一轮洽谈中）",
        "amount": "约 74 亿美元（约 500 亿元人民币）",
        "valuation": "说法不一：500 亿美元以上（The Information）；约 3500 亿元人民币（CNBC 援引投资方文件）",
        "investors": "腾讯、宁德时代领投，国家人工智能产业投资基金、阿里巴巴参与",
        "date": "2026-06",
        "src": [
          {
            "url": "https://www.siliconrepublic.com/business/the-information-deepseek-raises-7-4bn-at-50bn-plus-valuation",
            "checked": "2026-10-20",
            "label": "Silicon Republic"
          },
          {
            "url": "https://www.cnbc.com/2026/10/06/deepseek-funding-round.html",
            "checked": "2026-10-20",
            "label": "CNBC"
          }
        ]
      },
      "products": {
        "consumer": "DeepSeek 网页版、App",
        "enterprise": "DeepSeek API（含搜索 / 抓取 API）",
        "src": {
          "url": "https://api-docs.deepseek.com/news/news260813",
          "checked": "2026-10-20"
        }
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-20",
          "id": "deepseek-v4-1-flash-1017",
          "name": "DeepSeek-V4.1-Flash-1017",
          "date": "2026-10-17",
          "summary": "新架构的开源多模态模型，性能和成本都优于 V4-Pro",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-10-20",
            "label": "1017 版"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-17（V4.1-Flash 首版 9 月 10 日）",
              "开发方": "深度求索",
              "是否开源": "是，权重发布在 Hugging Face",
              "许可证": "MIT（据维基百科）",
              "src": [
                {
                  "url": "https://api-docs.deepseek.com/news/news261017",
                  "checked": "2026-10-20",
                  "label": "1017 版"
                },
                {
                  "url": "https://api-docs.deepseek.com/news/news260910",
                  "checked": "2026-10-20",
                  "label": "V4.1-Flash"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/DeepSeek",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "spec": {
              "参数规模": "5520 亿（MoE），输入激活 80 亿、输出激活 160 亿",
              "架构": "新的因果编码器-解码器非对称架构；KV 缓存为上一代的 1/4（显存）和 1/8（SSD）",
              "上下文窗口": "100 万 token",
              "最大输出长度": "38.4 万 token",
              "src": [
                {
                  "url": "https://api-docs.deepseek.com/news/news260910",
                  "checked": "2026-10-20",
                  "label": "V4.1-Flash"
                },
                {
                  "url": "https://api-docs.deepseek.com/quick_start/pricing",
                  "checked": "2026-10-20",
                  "label": "模型与价格"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像（原生视觉理解）",
              "输出模态": "文本",
              "推理模式": "思考模式（默认）和非思考模式可切换",
              "工具调用": "支持；兼容 OpenAI 和 Anthropic 接口格式",
              "src": {
                "url": "https://api-docs.deepseek.com/quick_start/pricing",
                "checked": "2026-10-20",
                "label": "模型与价格"
              }
            },
            "price": {
              "输入价格": "0.30 美元 / 百万 token（高峰），低谷 0.15 美元",
              "输出价格": "1.20 美元 / 百万 token（高峰），低谷 0.60 美元",
              "缓存价格": "命中缓存 0.006 美元（高峰），低谷 0.003 美元",
              "src": {
                "url": "https://api-docs.deepseek.com/quick_start/pricing",
                "checked": "2026-10-20",
                "label": "模型与价格"
              }
            },
            "channels": {
              "渠道": "DeepSeek 网页、App、API；权重可自行部署",
              "src": [
                {
                  "url": "https://api-docs.deepseek.com/news/news261017",
                  "checked": "2026-10-20",
                  "label": "1017 版"
                },
                {
                  "url": "https://api-docs.deepseek.com/quick_start/pricing",
                  "checked": "2026-10-20",
                  "label": "模型与价格"
                }
              ]
            },
            "bench": {
              "items": [],
              "note": "发布页的评测以图表展示，未能读取具体分数",
              "src": {
                "url": "https://api-docs.deepseek.com/news/news261017",
                "checked": "2026-10-20",
                "label": "1017 版"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek-V4.1-Flash",
          "date": "2026-09-10",
          "summary": "新架构系列中最小的模型，原生视觉理解",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news260910",
            "checked": "2026-10-20",
            "label": "V4.1-Flash"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v4-flash-vision-exp",
          "name": "DeepSeek-V4-Flash-Vision-Exp",
          "date": "2026-08-21",
          "summary": "多模态实验模型",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news260821",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v4-pro",
          "name": "DeepSeek-V4-Pro",
          "date": "2026-08-13",
          "summary": "V4 旗舰正式版，9 月起逐步由 V4.1-Flash 取代",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news260813",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v4-preview",
          "name": "DeepSeek-V4 预览版",
          "date": "2026-04-24",
          "summary": "V4-Pro 和 V4-Flash 预览",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news260424",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v3-2",
          "name": "DeepSeek-V3.2",
          "date": "2025-12-01",
          "summary": null,
          "src": {
            "url": "https://api-docs.deepseek.com/news/news251201",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v3-1",
          "name": "DeepSeek V3.1",
          "date": "2025-08-21",
          "summary": "思考和非思考模式合一",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news250821",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-r1-0528",
          "name": "DeepSeek-R1-0528",
          "date": "2025-05-28",
          "summary": null,
          "src": {
            "url": "https://api-docs.deepseek.com/news/news250528",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-r1",
          "name": "DeepSeek-R1",
          "date": "2025-01-20",
          "summary": "开源推理模型，引发全球关注",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news250120",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v3",
          "name": "DeepSeek-V3",
          "date": "2024-12-26",
          "summary": null,
          "src": {
            "url": "https://api-docs.deepseek.com/news/news1226",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v2-5",
          "name": "DeepSeek-V2.5",
          "date": "2024-09-05",
          "summary": null,
          "src": {
            "url": "https://api-docs.deepseek.com/news/news0905",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-v2",
          "name": "DeepSeek-V2",
          "date": "2024-05",
          "summary": "提出多头潜在注意力（MLA）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/DeepSeek",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "deepseek-llm",
          "name": "DeepSeek-LLM",
          "date": "2023-11-29",
          "summary": "第一代通用模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/DeepSeek",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [],
        "plansNote": "网页版和 App 的付费会员方案未查到",
        "plansSrc": null,
        "api": [
          {
            "model": "DeepSeek-V4.1-Flash-1017（高峰）",
            "input": "0.30 美元",
            "output": "1.20 美元",
            "cache": "0.006 美元"
          },
          {
            "model": "DeepSeek-V4.1-Flash-1017（低谷）",
            "input": "0.15 美元",
            "output": "0.60 美元",
            "cache": "0.003 美元"
          }
        ],
        "apiUnit": "单位：每百万 token；低谷价为高峰价的一半；另有搜索 / 抓取 API，每千次 0.75 美元",
        "apiSrc": {
          "url": "https://api-docs.deepseek.com/quick_start/pricing",
          "checked": "2026-10-20",
          "label": "模型与价格"
        }
      },
      "features": {
        "search": {
          "v": "有",
          "note": "自研搜索引擎，提供搜索 / 抓取 API",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-10-20",
            "label": "1017 版"
          }
        },
        "research": {
          "v": "未查到"
        },
        "image": {
          "v": "未查到",
          "note": "模型能看图，生图未查到"
        },
        "video": {
          "v": "未查到"
        },
        "voice": {
          "v": "未查到"
        },
        "files": {
          "v": "未查到"
        },
        "coding": {
          "v": "有",
          "note": "DeepSeek Harness；兼容 Claude Code、Codex",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-10-20",
            "label": "1017 版"
          }
        },
        "computer": {
          "v": "未查到"
        },
        "memory": {
          "v": "未查到"
        },
        "openWeights": {
          "v": "有",
          "note": "Hugging Face 开源",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-10-20",
            "label": "1017 版"
          }
        },
        "api": {
          "v": "有",
          "note": "DeepSeek API",
          "src": {
            "url": "https://api-docs.deepseek.com/quick_start/pricing",
            "checked": "2026-10-20",
            "label": "模型与价格"
          }
        },
        "enterprise": {
          "v": "未查到"
        }
      }
    },
    {
      "id": "qwen",
      "nameZh": "阿里·通义",
      "nameEn": "Qwen",
      "aliases": [
        "通义",
        "通义千问",
        "千问",
        "阿里",
        "阿里巴巴",
        "Alibaba"
      ],
      "region": "国内",
      "tagline": "阿里巴巴旗下开源大模型系列",
      "hq": "杭州",
      "founded": "2023（通义千问首次发布）",
      "website": "https://qwen.ai",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Qwen",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "阿里巴巴集团内部团队",
        "src": {
          "url": "https://en.wikipedia.org/wiki/Qwen",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "千问（网页、电脑端、App）、千问输入法",
        "enterprise": "阿里云百炼 API、千问工作助理",
        "src": [
          {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-23",
            "label": "千问官网"
          },
          {
            "url": "https://help.aliyun.com/zh/model-studio/models",
            "checked": "2026-10-23",
            "label": "百炼"
          }
        ]
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-20",
          "id": "qwen3-8-max",
          "name": "Qwen3.8-Max",
          "date": "2026-08-03",
          "summary": "通义最强模型，云端先上线，8 月 12 日开放权重",
          "src": [
            {
              "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
              "checked": "2026-11-10",
              "label": "官方模型卡（开源版）"
            },
            {
              "url": "https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html",
              "checked": "2026-10-20",
              "label": "CNBC"
            },
            {
              "url": "https://en.wikipedia.org/wiki/Qwen",
              "checked": "2026-10-20",
              "official": false
            }
          ],
          "detail": {
            "basic": {
              "发布日期": "2026-08-03 云端版上线；8 月 12 日开放权重（据维基百科）",
              "开发方": "阿里巴巴（通义千问团队）",
              "是否开源": "是，开放权重（开源版 Qwen3.8-2.4T-A95B）；开源版只支持文本，必须开启思考",
              "许可证": "开源版用自定义的 qwen3.8-max 许可证；27B 版为 Apache 2.0",
              "src": [
                {
                  "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
                  "checked": "2026-11-10",
                  "label": "官方模型卡（开源版）"
                },
                {
                  "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
                  "checked": "2026-11-10",
                  "label": "27B 模型卡"
                },
                {
                  "url": "https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html",
                  "checked": "2026-10-20",
                  "label": "CNBC"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Qwen",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "spec": {
              "参数规模": "2.4 万亿，激活 950 亿（开源版）",
              "架构": "MoE，512 个专家，每 token 选 10 个 + 1 个共享；92 层，Gated DeltaNet 和 Gated Attention 混合",
              "上下文窗口": "开源版原生 262,144 token，可扩展到约 101 万；云端版默认 100 万",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
                  "checked": "2026-11-10",
                  "label": "官方模型卡（开源版）"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
                  "checked": "2026-10-20",
                  "label": "百炼价格"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像（云端版）",
              "输出模态": "文本",
              "推理模式": "思考和非思考模式",
              "工具调用": "支持（官方称延续完整工具生态，0902 版加强多工具调度）",
              "src": [
                {
                  "url": "https://help.aliyun.com/zh/model-studio/models",
                  "checked": "2026-10-20",
                  "label": "百炼模型列表"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
                  "checked": "2026-10-20",
                  "label": "百炼价格"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
                  "checked": "2026-10-24",
                  "label": "百炼模型上架记录"
                }
              ]
            },
            "price": {
              "输入价格": "12 元 / 百万 token",
              "输出价格": "36 元 / 百万 token",
              "缓存价格": "上下文缓存享折扣；Batch 调用半价",
              "src": {
                "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
                "checked": "2026-10-20",
                "label": "百炼价格"
              }
            },
            "channels": {
              "渠道": "千问 App、阿里云百炼 API；权重可自行部署",
              "src": [
                {
                  "url": "https://help.aliyun.com/zh/model-studio/models",
                  "checked": "2026-10-20",
                  "label": "百炼模型列表"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Qwen",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "bench": {
              "items": [],
              "note": "未查到官方评测数据",
              "src": null
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-8-omni-flash",
          "name": "Qwen3.8-Omni-Flash",
          "date": "2026-09-18",
          "summary": "可输入文本、图像、音频、视频的全模态模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "id": "qwen3-8-flash",
          "name": "Qwen3.8-Flash",
          "date": "2026-08-26",
          "summary": "原生百万上下文的多模态模型，主打编程和智能体",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
            "checked": "2026-10-24",
            "label": "百炼模型上架记录"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-8-27b",
          "name": "Qwen3.8-27B",
          "date": "2026-08-14",
          "summary": "可在笔记本电脑上运行，Apache 2.0",
          "src": [
            {
              "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
              "checked": "2026-11-10",
              "label": "官方模型卡"
            },
            {
              "url": "https://en.wikipedia.org/wiki/Qwen",
              "checked": "2026-10-20",
              "official": false
            },
            {
              "url": "https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html",
              "checked": "2026-10-20",
              "label": "CNBC"
            }
          ]
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-7-max",
          "name": "Qwen3.7-Max",
          "date": "2026-05",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-6",
          "name": "Qwen3.6 / 3.6-Plus",
          "date": "2026-04",
          "summary": "Plus 版不开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-5",
          "name": "Qwen3.5",
          "date": "2026-02",
          "summary": "开放权重",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3-max",
          "name": "Qwen3-Max",
          "date": "2025-09",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen3",
          "name": "Qwen3",
          "date": "2025-04",
          "summary": "Apache 2.0 开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwq-32b",
          "name": "QwQ-32B",
          "date": "2025-03",
          "summary": "推理模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen2-5",
          "name": "Qwen2.5",
          "date": "2024-09",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen2",
          "name": "Qwen2",
          "date": "2024-06",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "qwen-1",
          "name": "Qwen（通义千问）",
          "date": "2023-09",
          "summary": "第一代开源模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "高级会员",
            "monthly": "19 元",
            "annual": "约 16.7 元（200 元 / 年）",
            "perks": "办公助理、AI PPT 等功能额度为普通用户 2 倍"
          },
          {
            "name": "精英会员",
            "monthly": "49 元",
            "annual": "约 47.3 元（568 元 / 年）",
            "perks": "办公助理、AI PPT 等功能更多额度"
          },
          {
            "name": "旗舰会员",
            "monthly": "128 元",
            "annual": "约 124.9 元（1499 元 / 年）",
            "perks": "办公助理、AI PPT 等功能更多额度"
          }
        ],
        "plansNote": "千问 App 办公助理专业会员，2026 年 8 月 10 日上线；千问办公是另一款产品，另行收费",
        "plansSrc": {
          "url": "https://www.36kr.com/p/3933525177653128",
          "checked": "2026-11-07",
          "label": "36 氪"
        },
        "api": [
          {
            "model": "qwen3.8-max",
            "input": "12 元",
            "output": "36 元",
            "cache": "享折扣"
          },
          {
            "model": "qwen3.8-max-prime（优速模式）",
            "input": "24 元",
            "output": "72 元",
            "cache": null
          }
        ],
        "apiUnit": "单位：每百万 token，输入 0–100 万 token 档；qwen3.8-max 有 100 万 token 免费额度",
        "apiSrc": {
          "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
          "checked": "2026-10-20",
          "label": "百炼价格"
        }
      },
      "features": {
        "search": {
          "v": "有",
          "note": "千问网页版「思考研究」模式含深度搜索",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-24",
            "label": "千问网页版"
          }
        },
        "research": {
          "v": "有",
          "note": "千问网页版「思考研究」模式含深度研究",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-24",
            "label": "千问网页版"
          }
        },
        "image": {
          "v": "有",
          "note": "百炼提供 qwen-image 等图像生成模型",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/models",
            "checked": "2026-10-20",
            "label": "百炼模型列表"
          }
        },
        "video": {
          "v": "有",
          "note": "百炼提供文生视频、图生视频模型",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/models",
            "checked": "2026-10-20",
            "label": "百炼模型列表"
          }
        },
        "voice": {
          "v": "有",
          "note": "Qwen3.8-Omni-Flash 实时语音",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/models",
            "checked": "2026-10-20",
            "label": "百炼模型列表"
          }
        },
        "files": {
          "v": "有",
          "note": "音视频速读、录音纪要",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-23",
            "label": "千问官网"
          }
        },
        "coding": {
          "v": "部分",
          "note": "千问「代码」功能；Qwen3-Coder 模型",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-23",
            "label": "千问官网"
          }
        },
        "computer": {
          "v": "有",
          "note": "千问 App 办公助理支持操作电脑和浏览器",
          "src": {
            "url": "https://www.36kr.com/p/3933525177653128",
            "checked": "2026-11-07",
            "label": "36 氪"
          }
        },
        "memory": {
          "v": "有",
          "note": "长期记忆，可在设置的个性化中查看（据非官方文章）",
          "src": {
            "url": "https://zhuanlan.zhihu.com/p/1962510756210783102",
            "checked": "2026-11-07",
            "label": "知乎",
            "official": false
          }
        },
        "openWeights": {
          "v": "有",
          "note": "多数版本开放权重",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Qwen",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "api": {
          "v": "有",
          "note": "阿里云百炼",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/models",
            "checked": "2026-10-20",
            "label": "百炼模型列表"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "千问办公企业版：企业标准版 198 元 / 月 / 席，企业旗舰版需询价（8 月公测时）",
          "src": {
            "url": "https://www.ithome.com/0/984/942.htm",
            "checked": "2026-11-07",
            "label": "IT之家"
          }
        }
      }
    },
    {
      "id": "openai",
      "nameZh": "OpenAI",
      "nameEn": "OpenAI",
      "aliases": [
        "ChatGPT",
        "GPT"
      ],
      "region": "海外",
      "tagline": "ChatGPT 开发商",
      "hq": "旧金山",
      "founded": "2015",
      "website": "https://openai.com",
      "src": {
        "url": "https://en.wikipedia.org/wiki/OpenAI",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "round": null,
        "amount": "1220 亿美元",
        "valuation": "8520 亿美元（投后）",
        "investors": "软银联合 a16z、D. E. Shaw Ventures、MGX、TPG 等领投；亚马逊、英伟达、软银为战略投资方",
        "date": "2026-03-31",
        "src": {
          "url": "https://finance.yahoo.com/markets/stocks/articles/openai-closes-122-billion-funding-010940572.html",
          "checked": "2026-10-20"
        }
      },
      "products": {
        "consumer": "ChatGPT（网页、App）",
        "enterprise": "OpenAI API、ChatGPT Business / Enterprise、Codex",
        "src": null
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-20",
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "date": "2026-09-03",
          "summary": "OpenAI 能力最强的模型，主打复杂推理和电脑操作",
          "src": {
            "url": "https://openai.com/index/gpt-6-astra",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-09-03（有限预览），次日向付费用户开放",
              "开发方": "OpenAI",
              "是否开源": "否，通过 ChatGPT 和 API 提供",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": [
                {
                  "url": "https://openai.com/index/gpt-6-astra",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/GPT-6",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开",
              "上下文窗口": "105 万 token",
              "最大输出长度": "12.8 万 token",
              "src": [
                {
                  "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像",
              "输出模态": "文本",
              "推理模式": "可调推理强度：low / medium / high / xhigh / max",
              "工具调用": "支持；知识截止 2026-04-30",
              "src": {
                "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "10 美元 / 百万 token（超过 27.2 万 token 的请求按 2 倍）",
              "输出价格": "50 美元 / 百万 token",
              "缓存价格": "读取 1 美元、写入 12.5 美元 / 百万 token",
              "src": {
                "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "channels": {
              "渠道": "ChatGPT（Plus、Pro、Business、Enterprise）、OpenAI API、Microsoft Azure、AWS Bedrock",
              "src": {
                "url": "https://openai.com/index/gpt-6-astra",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            },
            "bench": {
              "items": [
                [
                  "FrontierMath Tier 4（数学）",
                  "98%"
                ],
                [
                  "ARC-AGI-3（推理）",
                  "99.9%"
                ],
                [
                  "ExploitBench（网络安全）",
                  "100%"
                ]
              ],
              "src": {
                "url": "https://openai.com/index/gpt-6-astra",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-6-cyber",
          "name": "GPT-6 Cyber",
          "date": "2026-11-05",
          "summary": "网络安全专用模型，用于漏洞发现和利用验证",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-cyber",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-6-1-terra",
          "name": "GPT-6.1 Terra",
          "date": "2026-10-26",
          "summary": "快速高效，主打电脑操作和视觉推理，价格减半",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-1-terra",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "date": "2026-09-29",
          "summary": "接近 Astra 的能力，单任务成本低很多",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-1-sol",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-6-sol-luna",
          "name": "GPT-6 Sol / Luna",
          "date": "2026-09-22",
          "summary": "GPT-6 的中档和轻量版",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna",
            "checked": "2026-10-20"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-5-6",
          "name": "GPT-5.6（Luna / Terra / Sol）",
          "date": "2026-06",
          "summary": "首次按 Luna、Terra、Sol 分档",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-5-5",
          "name": "GPT-5.5",
          "date": "2026-04",
          "summary": "面向复杂专业工作和电脑操作",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-5-4",
          "name": "GPT-5.4",
          "date": "2026-03",
          "summary": "面向企业，增强自主操作电脑",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-5-2",
          "name": "GPT-5.2",
          "date": "2025-12",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-5",
          "name": "GPT-5",
          "date": "2025-08",
          "summary": "快速回答和深度推理合为一体",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "o3",
          "name": "o3",
          "date": "2025-04",
          "summary": "推理模型，能看图并调用工具",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "o1",
          "name": "o1",
          "date": "2024-12",
          "summary": "早期推理模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-4o",
          "name": "GPT-4o",
          "date": "2024-05",
          "summary": "能处理文本、图像、音频和视频",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-4",
          "name": "GPT-4",
          "date": "2023-03",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gpt-3-5",
          "name": "GPT-3.5",
          "date": "2022-11",
          "summary": "ChatGPT 最初使用的模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/ChatGPT",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Free",
            "monthly": "0",
            "annual": null,
            "perks": "无限文本对话（GPT-6），有限的上传、生图、语音、深度研究、Codex"
          },
          {
            "name": "Go",
            "monthly": null,
            "annual": null,
            "perks": "更多消息、上传、生图和语音；可能含广告"
          },
          {
            "name": "Plus",
            "monthly": null,
            "annual": null,
            "perks": "GPT-6 高级推理、更多深度研究和记忆"
          },
          {
            "name": "Pro",
            "monthly": "100 美元起",
            "annual": null,
            "perks": null
          },
          {
            "name": "Business / Enterprise",
            "monthly": null,
            "annual": null,
            "perks": "团队和企业版"
          }
        ],
        "plansNote": "价格按地区显示，中国区页面不显示价格，只读到 Pro 起步价；各档功能已核对",
        "plansSrc": {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-10-23",
          "label": "套餐页"
        },
        "api": [
          {
            "model": "GPT-6 Astra",
            "input": "10 美元",
            "output": "50 美元",
            "cache": "读取 1 美元"
          },
          {
            "model": "GPT-6.1 Sol",
            "input": "2 美元",
            "output": "10 美元",
            "cache": "读取 0.10 美元"
          },
          {
            "model": "GPT-6.1 Terra",
            "input": "1 美元",
            "output": "5 美元",
            "cache": "读取 0.05 美元"
          },
          {
            "model": "GPT-6 Luna",
            "input": "0.10 美元",
            "output": "0.50 美元",
            "cache": "读取 0.01 美元"
          }
        ],
        "apiUnit": "单位：每百万 token，标准档、短上下文；Batch 和 Flex 半价",
        "apiSrc": [
          {
            "url": "https://developers.openai.com/api/docs/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          },
          {
            "url": "https://openai.com/index/introducing-gpt-6-1-terra",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        ]
      },
      "features": {
        "search": {
          "v": "有",
          "note": "搜索；Plus 起含内置浏览器",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-23",
            "label": "套餐页"
          }
        },
        "research": {
          "v": "有",
          "note": "深度研究",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "image": {
          "v": "有",
          "note": "ChatGPT Images 2.5",
          "src": {
            "url": "https://openai.com/index/introducing-chatgpt-images-2-5",
            "checked": "2026-10-20"
          }
        },
        "video": {
          "v": "无",
          "note": "Sora 网页和 App 已于 2026-04-26 停用，API 于 2026-09-24 停用",
          "src": {
            "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
            "checked": "2026-11-09",
            "label": "OpenAI 帮助中心"
          }
        },
        "voice": {
          "v": "有",
          "note": "语音对话、GPT-Live",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "files": {
          "v": "有",
          "note": "上传文件",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "coding": {
          "v": "有",
          "note": "Codex",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "computer": {
          "v": "有",
          "note": "GPT-6 Astra 主打电脑操作",
          "src": {
            "url": "https://openai.com/index/gpt-6-astra",
            "checked": "2026-10-20",
            "label": "发布页"
          }
        },
        "memory": {
          "v": "有",
          "note": "记忆和上下文",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        },
        "openWeights": {
          "v": "有",
          "note": "gpt-oss-120b / 20b，Apache 2.0 许可",
          "src": {
            "url": "https://huggingface.co/openai/gpt-oss-120b",
            "checked": "2026-11-09",
            "label": "OpenAI Hugging Face 主页"
          }
        },
        "api": {
          "v": "有",
          "note": "OpenAI API",
          "src": {
            "url": "https://developers.openai.com/api/docs/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "ChatGPT Business / Enterprise",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-20"
          }
        }
      }
    },
    {
      "id": "google-deepmind",
      "nameZh": "Google DeepMind",
      "nameEn": "Google DeepMind",
      "aliases": [
        "谷歌",
        "Google",
        "Gemini",
        "DeepMind"
      ],
      "region": "海外",
      "tagline": "谷歌旗下 AI 实验室",
      "hq": "伦敦",
      "founded": "2010",
      "website": "https://deepmind.google",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Google_DeepMind",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "谷歌（Alphabet）内部团队",
        "src": {
          "url": "https://en.wikipedia.org/wiki/Google_DeepMind",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "Gemini（网页、App）",
        "enterprise": "Gemini API、Google AI Studio",
        "src": null
      },
      "models": [
        {
          "current": true,
          "collected": "2026-11-06",
          "id": "gemini-4-carbon",
          "name": "Gemini 4 Carbon",
          "date": "2026-10-28",
          "summary": "官方称最强模型，主打网络安全和长程工程",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            "checked": "2026-11-06",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-28 公布，先向部分网络防御者开放",
              "开发方": "Google DeepMind",
              "是否开源": "否",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            },
            "spec": {
              "参数规模": null,
              "架构": null,
              "上下文窗口": null,
              "最大输出长度": null,
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            },
            "ability": {
              "输入模态": null,
              "输出模态": null,
              "推理模式": null,
              "工具调用": null,
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            },
            "price": {
              "输入价格": "2 美元 / 百万 token（首发优惠价，与 Argon 相同）",
              "输出价格": "10 美元 / 百万 token（首发优惠价）",
              "缓存价格": "输入价的 5%，即 0.10 美元 / 百万 token",
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            },
            "channels": {
              "渠道": "目前仅通过 Fairwind 计划提供给部分网络防御者和受信合作伙伴；官方称之后向开发者、企业和消费者开放",
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            },
            "bench": {
              "items": [
                [
                  "Artificial Analysis Intelligence Index v5.0",
                  "59（第 1）"
                ],
                [
                  "SEC-bench Pro（漏洞发现）",
                  "88.2%"
                ],
                [
                  "ExploitGym（漏洞利用）",
                  "54.8%"
                ],
                [
                  "CWE-bench（漏洞修复）",
                  "71.0%"
                ],
                [
                  "WebDev Arena",
                  "1768（第 4）"
                ]
              ],
              "note": "网络安全成绩为未开启防护栏时的评测结果",
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": "2026-10-20",
          "id": "gemini-4-argon",
          "name": "Gemini 4 Argon",
          "date": "2026-10-13",
          "summary": "旗舰推理模型，输出上限提高到 100 万 token",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-13 全面开放（9 月 30 日先通过 Fairwind 计划提供）",
              "开发方": "Google DeepMind",
              "是否开源": "否，通过 Gemini 应用和 API 提供",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": [
                {
                  "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开",
              "上下文窗口": "1,048,576 token（输入和输出合计）",
              "最大输出长度": "默认 65,536 token；开启长输出最多 1,048,576 token",
              "src": [
                {
                  "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像、视频、音频、PDF",
              "输出模态": "文本",
              "推理模式": "支持思考，强度分 low / medium / high",
              "工具调用": "支持函数调用、代码执行、搜索、地图、URL 读取、文件搜索；电脑操作为预览",
              "src": {
                "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "2 美元 / 百万 token（11 月 30 日前），12 月 1 日起 4 美元",
              "输出价格": "10 美元 / 百万 token（含思考 token；11 月 30 日前），12 月 1 日起 20 美元",
              "缓存价格": "0.10 美元 / 百万 token（11 月 30 日前），只支持隐式缓存",
              "src": {
                "url": "https://ai.google.dev/gemini-api/docs/pricing",
                "checked": "2026-10-20",
                "label": "API 价格"
              }
            },
            "channels": {
              "渠道": "Gemini 应用（Google AI Pro）、Gemini API（付费层）、Google AI Studio",
              "src": [
                {
                  "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://one.google.com/about/plans",
                  "checked": "2026-10-20"
                }
              ]
            },
            "bench": {
              "items": [
                [
                  "DeepSWE v1.1（长程软件工程）",
                  "77.9%"
                ],
                [
                  "AutomationBench（业务流程）",
                  "51.3%"
                ],
                [
                  "LVBench（长视频理解）",
                  "91.7%"
                ],
                [
                  "CWE-bench v1（漏洞修复）",
                  "68%"
                ]
              ],
              "note": "官方称在 Vals Index、Vals Finance Agent v2、Harvey 法律基准上领先",
              "src": {
                "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
                "checked": "2026-10-23",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-8-flash",
          "name": "Gemini 3.8 Flash",
          "date": "2026-09-02",
          "summary": "最强的 Flash 模型，另有网络安全版 3.8 Flash Cyber",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-7-flash",
          "name": "Gemini 3.7 Flash",
          "date": "2026-08-13",
          "summary": "加强推理基础",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-6-flash",
          "name": "Gemini 3.6 Flash",
          "date": "2026-07-21",
          "summary": "编程、知识和多模态改进",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-5-flash",
          "name": "Gemini 3.5 Flash",
          "date": "2026-05-19",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-1-pro",
          "name": "Gemini 3.1 Pro",
          "date": "2026-02-19",
          "summary": "面向大数据量的复杂推理",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-3-pro",
          "name": "Gemini 3 Pro",
          "date": "2025-11-18",
          "summary": "Gemini 3 系列的基础模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-2-5-pro",
          "name": "Gemini 2.5 Pro",
          "date": "2025-03-25",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-2-0-flash",
          "name": "Gemini 2.0 Flash",
          "date": "2025-01-30",
          "summary": "主打多模态、智能体和速度",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-1-5-pro",
          "name": "Gemini 1.5 Pro",
          "date": "2024-02-15",
          "summary": "上下文扩展到 100 万 token",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-1-0-ultra",
          "name": "Gemini 1.0 Ultra",
          "date": "2024-02-08",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "gemini-1-0-pro",
          "name": "Gemini 1.0 Pro",
          "date": "2023-12-13",
          "summary": "第一代 Gemini",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "免费",
            "monthly": "0",
            "annual": "0",
            "perks": "15 GB 存储，基础 Gemini 用量"
          },
          {
            "name": "Google AI Plus（2 TB）",
            "monthly": "9.99 美元",
            "annual": "约 8.33 美元（99.99 美元 / 年）",
            "perks": "Gemini 用量 2 倍、Flash 模型、Flow、Gmail 中的 Gemini"
          },
          {
            "name": "Google AI Pro（5 TB）",
            "monthly": "19.99 美元",
            "annual": "约 16.67 美元（199.99 美元 / 年）",
            "perks": "Gemini 用量 4 倍、Gemini 4 Argon、深度研究、Flow、Gmail / 文档中的 Gemini"
          }
        ],
        "plansNote": "按年付最多省 16%",
        "plansSrc": {
          "url": "https://one.google.com/about/plans",
          "checked": "2026-11-10",
          "label": "Google One 方案页"
        },
        "api": [
          {
            "model": "Gemini 4 Carbon（尚未向开发者开放）",
            "input": "2 美元",
            "output": "10 美元",
            "cache": "0.10 美元"
          },
          {
            "model": "Gemini 4 Argon",
            "input": "2 美元",
            "output": "10 美元",
            "cache": "0.10 美元"
          },
          {
            "model": "Gemini 3.8 Flash",
            "input": "0.75 美元",
            "output": "3.75 美元",
            "cache": null
          }
        ],
        "apiUnit": "单位：每百万 token，付费层；Argon 为 11 月 30 日前价格，3.8 Flash 为 12 月 31 日前价格，之后翻倍",
        "apiSrc": [
          {
            "url": "https://ai.google.dev/gemini-api/docs/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          },
          {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        ]
      },
      "features": {
        "search": {
          "v": "有",
          "note": "搜索接地（Search grounding）",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "research": {
          "v": "有",
          "note": "深度研究",
          "src": {
            "url": "https://one.google.com/about/plans",
            "checked": "2026-10-20"
          }
        },
        "image": {
          "v": "有",
          "note": "Nano Banana 图像模型；Argon 本身不生成图片",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "video": {
          "v": "部分",
          "note": "Google Flow 创意工具",
          "src": {
            "url": "https://one.google.com/about/plans",
            "checked": "2026-10-20"
          }
        },
        "voice": {
          "v": "有",
          "note": "Gemini 3.8 Live 实时语音",
          "src": {
            "url": "https://deepmind.google/blog/introducing-gemini-38-live-with-live-avatar/",
            "checked": "2026-10-23",
            "label": "Gemini Live"
          }
        },
        "files": {
          "v": "有",
          "note": "支持 PDF、文件搜索",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "coding": {
          "v": "有",
          "note": "Argon 主打复杂软件工程",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          }
        },
        "computer": {
          "v": "部分",
          "note": "电脑操作为预览版",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "memory": {
          "v": "有",
          "note": "Gemini 应用可记住过往对话做个性化回答，用户可查看和管理记忆",
          "src": {
            "url": "https://support.google.com/gemini/answer/15637730?hl=en",
            "checked": "2026-11-10",
            "label": "Gemini 帮助中心"
          }
        },
        "openWeights": {
          "v": "部分",
          "note": "Gemma 系列开放权重，如 EmbeddingGemma 2",
          "src": {
            "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
            "checked": "2026-10-20"
          }
        },
        "api": {
          "v": "有",
          "note": "Gemini API",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "Gemini for Business（Gemini Enterprise），可免费试用 Enterprise Plus 版 30 天",
          "src": {
            "url": "https://cloud.google.com/gemini-enterprise",
            "checked": "2026-11-10",
            "label": "Google Cloud"
          }
        }
      }
    },
    {
      "id": "meta",
      "nameZh": "Meta",
      "nameEn": "Meta",
      "aliases": [
        "Meta AI",
        "Muse",
        "Facebook",
        "MSL"
      ],
      "region": "海外",
      "tagline": "Meta 旗下 AI 实验室",
      "hq": "门洛帕克",
      "founded": "2025（Meta 超级智能实验室成立）",
      "website": "https://ai.meta.com",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "Meta Platforms（上市公司）内部团队",
        "src": {
          "url": "https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "个人 AI 智能体 Muse",
        "enterprise": "Meta Model API、Muse Code、Muse 小企业版",
        "src": [
          {
            "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
            "checked": "2026-10-23",
            "label": "发布页"
          },
          {
            "url": "https://about.fb.com/news/2026/09/introducing-muse-small-business/",
            "checked": "2026-10-23",
            "label": "小企业版"
          }
        ]
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-23",
          "id": "muse-wonder",
          "name": "Muse Wonder / Muse Wonder Full",
          "date": "2026-10-12",
          "summary": "Meta 目前最强的模型，面向个人和工作中的智能体任务",
          "src": {
            "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-12",
              "开发方": "Meta 超级智能实验室",
              "是否开源": "未查到（通过 Meta Model API 提供）",
              "许可证": null,
              "src": [
                {
                  "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
                  "checked": "2026-10-23",
                  "label": "发布页"
                },
                {
                  "url": "https://research.meta.ai/blog/muse-wonder",
                  "checked": "2026-10-23",
                  "label": "研究博客"
                }
              ]
            },
            "spec": {
              "参数规模": null,
              "架构": "在 Meta 吉瓦级 Prometheus 数据中心训练；其余未公开",
              "上下文窗口": null,
              "最大输出长度": null,
              "src": {
                "url": "https://research.meta.ai/blog/muse-wonder",
                "checked": "2026-10-23",
                "label": "研究博客"
              }
            },
            "ability": {
              "输入模态": "文本、图像（可根据图片生成游戏等）",
              "输出模态": "文本",
              "推理模式": "可调推理强度（官方评测使用 max / xhigh）",
              "工具调用": "支持智能体任务，可在浏览器和多个应用中操作；具备 Active Memory 跨对话记忆和 Active Focus 持续执行",
              "src": {
                "url": "https://research.meta.ai/blog/muse-wonder",
                "checked": "2026-10-23",
                "label": "研究博客"
              }
            },
            "price": {
              "输入价格": null,
              "输出价格": null,
              "缓存价格": null,
              "src": null
            },
            "channels": {
              "渠道": "Meta Model API、Muse Code（Muse Wonder Full 限 Muse Code 订阅用户）；即将接入 Muse 应用，先向订阅用户开放",
              "src": [
                {
                  "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
                  "checked": "2026-10-23",
                  "label": "发布页"
                },
                {
                  "url": "https://research.meta.ai/blog/muse-wonder",
                  "checked": "2026-10-23",
                  "label": "研究博客"
                }
              ]
            },
            "bench": {
              "items": [
                [
                  "Personal Superintelligence Index（个人与知识工作）",
                  "59.1"
                ],
                [
                  "Harvey LAB-AA（法律）",
                  "13.1"
                ],
                [
                  "Vals Finance Agent V2（金融）",
                  "59.1"
                ],
                [
                  "HealthBench Pro（健康）",
                  "62.3"
                ],
                [
                  "AutomationBench-AA（业务流程）",
                  "45.4"
                ],
                [
                  "OSWorld V2.1（电脑操作，partial）",
                  "78.4"
                ],
                [
                  "MemoryBench（记忆）",
                  "85.5"
                ],
                [
                  "Terminal-Bench 4.0-AA（终端编程）",
                  "57.1"
                ],
                [
                  "DeepSWE 1.1（长程编程）",
                  "79.0"
                ],
                [
                  "SWE-Marathon（超长工程，xhigh）",
                  "57.5"
                ],
                [
                  "ProgramBench（从零编程）",
                  "59.0"
                ],
                [
                  "Artificial Analysis Index（综合）",
                  "56"
                ]
              ],
              "note": "以上为 Muse Wonder Full（max 推理强度）的成绩，Muse Wonder 略低；数据来自官方评测表图片",
              "src": [
                {
                  "url": "https://research.meta.ai/blog/muse-wonder",
                  "checked": "2026-10-23",
                  "label": "研究博客"
                },
                {
                  "url": "https://research.meta.ai/articles/introducing-muse-wonder/images/muse-evaluation-table-light-v6.webp",
                  "checked": "2026-10-23",
                  "label": "评测表"
                }
              ]
            }
          }
        },
        {
          "id": "muse-spark-open",
          "name": "Muse Spark Open",
          "date": "2026-10-15",
          "summary": "开放权重，8160 亿总参数、420 亿激活，100 万上下文",
          "src": {
            "url": "https://research.meta.ai/blog/muse-spark-open",
            "checked": "2026-10-24",
            "label": "研究博客"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "muse-spark",
          "name": "Muse Spark",
          "date": "2026-04",
          "summary": "Muse 产品线的第一个模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Meta_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-4",
          "name": "Llama 4",
          "date": "2025-04-05",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-3-3",
          "name": "Llama 3.3",
          "date": "2024-12-07",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-3-2",
          "name": "Llama 3.2",
          "date": "2024-09-25",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-3-1",
          "name": "Llama 3.1",
          "date": "2024-07-23",
          "summary": "上下文 12.8 万 token",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-3",
          "name": "Llama 3",
          "date": "2024-04-18",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-2",
          "name": "Llama 2",
          "date": "2023-07-18",
          "summary": "开放权重，可商用（需遵守使用政策）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "llama-1",
          "name": "Llama",
          "date": "2023-02-24",
          "summary": "第一代 Llama",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [],
        "plansSrc": null,
        "api": [],
        "apiSrc": null
      },
      "features": {
        "search": {
          "v": "未查到"
        },
        "research": {
          "v": "未查到"
        },
        "image": {
          "v": "有",
          "note": "Muse Image：Meta AI 应用、meta.ai、美国 Instagram 快拍、部分国家的 WhatsApp",
          "src": {
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
            "checked": "2026-11-10",
            "label": "Meta 研究博客"
          }
        },
        "video": {
          "v": "未查到"
        },
        "voice": {
          "v": "有",
          "note": "Muse 应用（手机、网页、Mac）实时语音对话",
          "src": {
            "url": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
            "checked": "2026-11-06",
            "label": "官方新闻"
          }
        },
        "files": {
          "v": "未查到"
        },
        "coding": {
          "v": "有",
          "note": "Muse Code",
          "src": {
            "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
            "checked": "2026-10-23",
            "label": "发布页"
          }
        },
        "computer": {
          "v": "有",
          "note": "可直接在浏览器和多个应用中执行任务",
          "src": {
            "url": "https://research.meta.ai/blog/muse-wonder",
            "checked": "2026-10-23",
            "label": "研究博客"
          }
        },
        "memory": {
          "v": "有",
          "note": "Active Memory 跨对话记忆",
          "src": {
            "url": "https://research.meta.ai/blog/muse-wonder",
            "checked": "2026-10-23",
            "label": "研究博客"
          }
        },
        "openWeights": {
          "v": "部分",
          "note": "Muse Spark Open 开放权重（Muse 模型许可证，商用条款有限制）；Llama 系列开放权重；Muse Wonder 未开放",
          "src": {
            "url": "https://research.meta.ai/blog/muse-spark-open",
            "checked": "2026-10-24",
            "label": "研究博客"
          }
        },
        "api": {
          "v": "有",
          "note": "Meta Model API",
          "src": {
            "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
            "checked": "2026-10-23",
            "label": "发布页"
          }
        },
        "enterprise": {
          "v": "部分",
          "note": "Muse 小企业版",
          "src": {
            "url": "https://about.fb.com/news/2026/09/introducing-muse-small-business/",
            "checked": "2026-10-20"
          }
        }
      }
    },
    {
      "id": "xai",
      "nameZh": "xAI",
      "nameEn": "xAI",
      "aliases": [
        "SpaceXSI",
        "SpaceXAI",
        "Grok",
        "SpaceX"
      ],
      "region": "海外",
      "tagline": "Grok 开发商，SpaceX 旗下",
      "hq": "帕洛阿尔托",
      "founded": "2023",
      "website": "https://x.ai",
      "src": {
        "url": "https://en.wikipedia.org/wiki/SpaceXAI",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "2026 年 2 月被 SpaceX 收购，现为 SpaceX 全资子公司",
        "src": {
          "url": "https://en.wikipedia.org/wiki/SpaceXAI",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "Grok（网页、App、X 内置）",
        "enterprise": "xAI API、Grok Bot 企业版、Cursor",
        "src": null
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-20",
          "id": "grok-4-7",
          "name": "Grok 4.7",
          "date": "2026-09-21",
          "summary": "编程和知识工作最强的 Grok，与 4.6 同价同速",
          "src": {
            "url": "https://x.ai/news/grok-4-7",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-09-21",
              "开发方": "xAI（SpaceXSI）",
              "是否开源": "否，通过 Grok 应用和 API 提供",
              "许可证": "不适用（闭源，按服务条款使用）",
              "src": {
                "url": "https://x.ai/news/grok-4-7",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开",
              "上下文窗口": "50 万 token",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://docs.x.ai/docs/models",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://docs.x.ai/docs/models",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                }
              ]
            },
            "ability": {
              "输入模态": null,
              "输出模态": "文本",
              "推理模式": "可配置推理强度；知识截止 2026 年 5 月",
              "工具调用": "支持智能体工具调用",
              "src": {
                "url": "https://docs.x.ai/docs/models",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "2 美元 / 百万 token",
              "输出价格": "6 美元 / 百万 token",
              "缓存价格": null,
              "src": {
                "url": "https://docs.x.ai/docs/models",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "channels": {
              "渠道": "Grok 应用、X、Cursor、xAI API",
              "src": [
                {
                  "url": "https://docs.x.ai/docs/models",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://x.ai/news/x-subscription",
                  "checked": "2026-10-20"
                }
              ]
            },
            "bench": {
              "items": [],
              "note": "发布页评测以图表展示，列名无法可靠对应，暂不摘录",
              "src": {
                "url": "https://x.ai/news/grok-4-7",
                "checked": "2026-10-20",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4-6",
          "name": "Grok 4.6",
          "date": "2026-08",
          "summary": "基于 1.5 万亿参数 V9 基座，加入 Cursor 数据",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4-5",
          "name": "Grok 4.5",
          "date": "2026-07",
          "summary": "新的预训练模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4-3",
          "name": "Grok 4.3",
          "date": "2026-04",
          "summary": "改进架构的新预训练模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4-20",
          "name": "Grok 4.20",
          "date": "2026-02",
          "summary": "主打速度、工具调用和低幻觉",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4-1",
          "name": "Grok 4.1",
          "date": "2025-11",
          "summary": "侧重创意和情感交流",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-4",
          "name": "Grok 4",
          "date": "2025-07",
          "summary": "原生工具调用和实时搜索",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-3",
          "name": "Grok 3",
          "date": "2025-02",
          "summary": "算力为 Grok 2 的 10 倍，加入推理模式",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-2",
          "name": "Grok 2",
          "date": "2024-08",
          "summary": "加入图像生成",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-1-5",
          "name": "Grok 1.5",
          "date": "2024-05",
          "summary": "上下文 12.8 万 token",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "grok-1",
          "name": "Grok 1",
          "date": "2023-11",
          "summary": "第一代 Grok，Apache-2.0 开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "免费",
            "monthly": "0",
            "annual": null,
            "perks": "每日使用 Grok，少量 Cursor 智能体额度"
          },
          {
            "name": "Plus",
            "monthly": "8 美元",
            "annual": null,
            "perks": "更多 Grok 和 Cursor 用量，X 认证标识"
          },
          {
            "name": "Premium",
            "monthly": "30 美元",
            "annual": null,
            "perks": "含 SuperGrok、Cursor Pro、X Premium+ 的权益"
          },
          {
            "name": "Super",
            "monthly": "100 美元",
            "annual": null,
            "perks": "用量为 Plus 的 15 倍"
          },
          {
            "name": "Ultra",
            "monthly": "200 美元",
            "annual": null,
            "perks": "用量为 Plus 的 50 倍"
          }
        ],
        "plansNote": "The X Subscription：把 Grok、Grok Bot、Cursor、X Premium 合成一个订阅",
        "plansSrc": {
          "url": "https://x.ai/news/x-subscription",
          "checked": "2026-10-20"
        },
        "api": [
          {
            "model": "Grok 4.7",
            "input": "2 美元",
            "output": "6 美元",
            "cache": null
          }
        ],
        "apiUnit": "单位：每百万 token；另有语音 API（0.08 美元 / 分钟起）和图像视频 API（0.02 美元 / 张起）",
        "apiSrc": {
          "url": "https://docs.x.ai/docs/models",
          "checked": "2026-10-20",
          "label": "模型文档"
        }
      },
      "features": {
        "search": {
          "v": "有",
          "note": "Grok 4 起集成实时搜索",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "research": {
          "v": "未查到"
        },
        "image": {
          "v": "有",
          "note": "Imagine API",
          "src": {
            "url": "https://docs.x.ai/docs/models",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "video": {
          "v": "有",
          "note": "Imagine API 支持视频生成",
          "src": {
            "url": "https://docs.x.ai/docs/models",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "voice": {
          "v": "有",
          "note": "Grok Voice 3.0、语音 API",
          "src": {
            "url": "https://x.ai/news/grok-voice-3",
            "checked": "2026-10-20"
          }
        },
        "files": {
          "v": "未查到"
        },
        "coding": {
          "v": "有",
          "note": "Grok Build、Cursor",
          "src": {
            "url": "https://x.ai/news/grok-build-memory",
            "checked": "2026-10-20"
          }
        },
        "computer": {
          "v": "有",
          "note": "Grok Bot 有自己的电脑",
          "src": {
            "url": "https://x.ai/news/designing-grok-bot",
            "checked": "2026-10-20"
          }
        },
        "memory": {
          "v": "部分",
          "note": "Grok Build 跨会话记忆",
          "src": {
            "url": "https://x.ai/news/grok-build-memory",
            "checked": "2026-10-20"
          }
        },
        "openWeights": {
          "v": "部分",
          "note": "早期 Grok-1 以 Apache-2.0 开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "api": {
          "v": "有",
          "note": "xAI API",
          "src": {
            "url": "https://docs.x.ai/docs/models",
            "checked": "2026-10-20",
            "label": "模型文档"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "Grok Bot 企业版",
          "src": {
            "url": "https://x.ai/news/grok-bot-for-enterprise",
            "checked": "2026-10-20"
          }
        }
      }
    },
    {
      "id": "mistral",
      "nameZh": "Mistral AI",
      "nameEn": "Mistral AI",
      "aliases": [
        "Le Chat"
      ],
      "region": "海外",
      "tagline": "欧洲开放权重大模型公司",
      "hq": "巴黎",
      "founded": "2023",
      "website": "https://mistral.ai",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Mistral_AI",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "round": "D 轮",
        "amount": "30 亿欧元",
        "valuation": "超过 210 亿欧元（投后）",
        "investors": "三星电子领投，EQT 旗下 Scaleup Europe Fund 和 PSG Equity 联合领投",
        "date": "2026-09-08",
        "src": {
          "url": "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/",
          "checked": "2026-10-20"
        }
      },
      "products": {
        "consumer": "Le Chat（网页、App）",
        "enterprise": "Mistral API、Le Chat Team / Enterprise",
        "src": null
      },
      "models": [
        {
          "current": true,
          "collected": "2026-11-06",
          "id": "mistral-large-4",
          "name": "Mistral Large 4",
          "date": "2026-10-06",
          "summary": "1 万亿参数原生多模态模型，公司迄今最大",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4/",
            "checked": "2026-10-20",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-06 公开预览；2026-10-29 发布改进版并开放权重",
              "开发方": "Mistral AI",
              "是否开源": "是，开放权重",
              "许可证": "Mistral Ecosystem Open-Weight License（修改版 MIT）：可商用，运营 MaaS 业务须另获商业许可",
              "src": [
                {
                  "url": "https://mistral.ai/news/mistral-large-4/",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Mistral_AI",
                  "checked": "2026-10-20",
                  "official": false
                },
                {
                  "url": "https://docs.mistral.ai/models/mistral-large-4-0",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                },
                {
                  "url": "https://mistral.ai/news/mistral-large-4-oss/",
                  "checked": "2026-11-06",
                  "label": "开放权重公告"
                }
              ]
            },
            "spec": {
              "参数规模": "1.05 万亿，激活 520 亿；视觉编码器 16 亿",
              "架构": "细粒度混合专家（MoE），原生多模态",
              "上下文窗口": "100 万 token",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://docs.mistral.ai/models/mistral-large-4-0",
                  "checked": "2026-10-23",
                  "label": "模型文档"
                },
                {
                  "url": "https://mistral.ai/news/mistral-large-4/",
                  "checked": "2026-10-23",
                  "label": "发布页"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像",
              "输出模态": "文本",
              "推理模式": "低 / 中 / 高三档，默认高",
              "工具调用": "支持函数调用、内置工具、结构化输出、文档问答；训练数据覆盖 160 多种语言",
              "src": [
                {
                  "url": "https://mistral.ai/news/mistral-large-4/",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://mistral.ai/news/mistral-large-4-oss/",
                  "checked": "2026-11-06",
                  "label": "开放权重公告"
                }
              ]
            },
            "price": {
              "输入价格": "0.70 美元 / 百万 token",
              "输出价格": "2.10 美元 / 百万 token",
              "缓存价格": "0.07 美元 / 百万 token",
              "src": {
                "url": "https://mistral.ai/news/mistral-large-4-oss/",
                "checked": "2026-11-06",
                "label": "开放权重公告"
              }
            },
            "channels": {
              "渠道": "Mistral Studio、Mistral API、OpenRouter、Hugging Face 权重（可用 vLLM、SGLang 自部署）",
              "src": {
                "url": "https://mistral.ai/news/mistral-large-4-oss/",
                "checked": "2026-11-06",
                "label": "开放权重公告"
              }
            },
            "bench": {
              "items": [
                [
                  "DeepSWE v1.1（软件工程）",
                  "61.7%"
                ],
                [
                  "SWE-Atlas-QnA（代码库理解）",
                  "59.4%"
                ],
                [
                  "Terminal-Bench 4（终端任务）",
                  "41%"
                ],
                [
                  "Coding Agent Index（编程智能体综合）",
                  "48%"
                ],
                [
                  "AutomationBench（业务流程）",
                  "59.9%"
                ],
                [
                  "Dense 200（视觉定位）",
                  "42%"
                ],
                [
                  "FrontierCode 2.0（Cognition）",
                  "19.7%"
                ],
                [
                  "Artificial Analysis Cyber Index",
                  "51%"
                ]
              ],
              "src": [
                {
                  "url": "https://mistral.ai/news/mistral-large-4/",
                  "checked": "2026-10-20",
                  "label": "发布页"
                },
                {
                  "url": "https://mistral.ai/news/mistral-large-4-oss/",
                  "checked": "2026-11-06",
                  "label": "开放权重公告"
                }
              ],
              "note": "Terminal-Bench、Coding Agent Index、FrontierCode、Cyber Index 为 10 月 29 日改进版成绩，其余为预览版成绩"
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-medium-3-5",
          "name": "Mistral Medium 3.5",
          "date": "2026-04",
          "summary": "首个合并式旗舰模型，1280 亿参数",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-small-4",
          "name": "Mistral Small 4",
          "date": "2026-03",
          "summary": "1190 亿参数 MoE，支持图像输入，Apache-2.0",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-large-3",
          "name": "Mistral Large 3",
          "date": "2025-12",
          "summary": "6750 亿参数 MoE，Apache-2.0",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "magistral",
          "name": "Magistral（推理模型）",
          "date": "2025-06",
          "summary": "首个推理模型，Small 版开放权重",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-medium-3",
          "name": "Mistral Medium 3",
          "date": "2025-05",
          "summary": "可本地部署的企业模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-large-2",
          "name": "Mistral Large 2",
          "date": "2024-07",
          "summary": "1230 亿参数",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mixtral-8x22b",
          "name": "Mixtral 8x22B",
          "date": "2024-04",
          "summary": "开源 MoE 模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-large",
          "name": "Mistral Large",
          "date": "2024-02",
          "summary": "第一代 Large",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "mistral-medium",
          "name": "Mistral Medium",
          "date": "2023-12",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Free",
            "monthly": "0",
            "annual": null,
            "perks": "有限的消息和网页搜索、基础生图"
          },
          {
            "name": "Pro",
            "monthly": "14.99 美元",
            "annual": null,
            "perks": "完整使用 Vibe 编程、更多生图（最多 40 倍）；学生 5.99 美元/月"
          },
          {
            "name": "Team",
            "monthly": "24.99 美元 / 人",
            "annual": null,
            "perks": "团队协作空间、更高额度"
          },
          {
            "name": "Enterprise",
            "monthly": null,
            "annual": null,
            "perks": "私有部署"
          }
        ],
        "plansNote": "不含税价格",
        "plansSrc": {
          "url": "https://mistral.ai/pricing",
          "checked": "2026-10-20"
        },
        "api": [
          {
            "model": "Mistral Large 4",
            "input": "0.70 美元",
            "output": "2.10 美元",
            "cache": "0.07 美元"
          }
        ],
        "apiUnit": "单位：每百万 token",
        "apiSrc": {
          "url": "https://mistral.ai/news/mistral-large-4-oss/",
          "checked": "2026-11-06",
          "label": "开放权重公告"
        }
      },
      "features": {
        "search": {
          "v": "有",
          "note": "网页搜索",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-10-20"
          }
        },
        "research": {
          "v": "未查到"
        },
        "image": {
          "v": "有",
          "note": "图像生成和编辑",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-10-20"
          }
        },
        "video": {
          "v": "未查到"
        },
        "voice": {
          "v": "部分",
          "note": "Voxtral 语音模型（API）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Mistral_AI",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "files": {
          "v": "有",
          "note": "文档上传，支持 PDF、表格、Office",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-10-20"
          }
        },
        "coding": {
          "v": "有",
          "note": "Mistral Vibe 编程智能体",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-10-20"
          }
        },
        "computer": {
          "v": "未查到"
        },
        "memory": {
          "v": "未查到"
        },
        "openWeights": {
          "v": "有",
          "note": "Mistral Large 4 以 Mistral Ecosystem Open-Weight License 开放；Small、Large 3 等以 Apache-2.0 开放",
          "src": [
            {
              "url": "https://en.wikipedia.org/wiki/Mistral_AI",
              "checked": "2026-10-20",
              "official": false
            },
            {
              "url": "https://mistral.ai/news/mistral-large-4-oss/",
              "checked": "2026-11-06",
              "label": "开放权重公告"
            }
          ]
        },
        "api": {
          "v": "有",
          "note": "Mistral API",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4/",
            "checked": "2026-10-20",
            "label": "发布页"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "Team / Enterprise",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-10-20"
          }
        }
      }
    },
    {
      "id": "moonshot",
      "nameZh": "月之暗面",
      "nameEn": "Moonshot AI",
      "aliases": [
        "Kimi"
      ],
      "region": "国内",
      "tagline": "Kimi 大模型和智能助手开发商",
      "hq": "北京",
      "founded": "2023",
      "website": "https://www.kimi.com",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Moonshot_AI",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "round": "F 轮（G 轮 / Pre-IPO 轮已启动）",
        "amount": "超过 35 亿美元",
        "valuation": "350 亿美元（投后）",
        "investors": null,
        "date": "2026-07",
        "src": [
          {
            "url": "https://news.pedaily.cn/202607/566986.shtml",
            "checked": "2026-10-20",
            "label": "F 轮"
          },
          {
            "url": "https://www.cls.cn/detail/2445951",
            "checked": "2026-10-20",
            "label": "G 轮"
          }
        ]
      },
      "products": {
        "consumer": "Kimi（网页、App）",
        "enterprise": "Kimi 开放平台 API",
        "src": {
          "url": "https://www.kimi.com/",
          "checked": "2026-10-23",
          "label": "官网"
        }
      },
      "models": [
        {
          "current": true,
          "collected": "2026-11-06",
          "id": "kimi-k3-1-pro",
          "name": "Kimi K3.1 Pro",
          "date": "2026-10-24",
          "summary": "2.8 万亿参数开放权重模型，强化学习大幅加码",
          "src": [
            {
              "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
              "checked": "2026-11-06",
              "label": "技术博客"
            },
            {
              "url": "https://www.stdaily.com/web/gdxw/2026-10/24/content_602239.html",
              "checked": "2026-11-06",
              "label": "科技日报"
            }
          ],
          "detail": {
            "basic": {
              "发布日期": "2026-10-24；权重已在 Hugging Face 发布（官方承诺 11 月 4 日前）",
              "开发方": "月之暗面",
              "是否开源": "是，开放权重",
              "许可证": "自定义 Kimi K3.1-Pro License：运营 MaaS 且 12 个月收入超 2000 万美元须另签协议；月活超 1 亿或月收入超 2000 万美元的商用产品须显著标注",
              "src": [
                {
                  "url": "https://www.stdaily.com/web/gdxw/2026-10/24/content_602239.html",
                  "checked": "2026-11-06",
                  "label": "科技日报"
                },
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
                  "checked": "2026-11-06",
                  "label": "模型卡"
                },
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro/raw/main/LICENSE",
                  "checked": "2026-11-06",
                  "label": "许可证"
                }
              ]
            },
            "spec": {
              "参数规模": "2.8 万亿，激活 1040 亿；视觉编码器 4.01 亿",
              "架构": "MoE，896 个专家，每 token 选 16 个；69 层 KDA + 24 层 Gated DSA",
              "上下文窗口": "1,048,576 token",
              "最大输出长度": null,
              "src": {
                "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
                "checked": "2026-11-06",
                "label": "模型卡"
              }
            },
            "ability": {
              "输入模态": "文本、图像",
              "输出模态": "文本",
              "推理模式": "思考始终开启，强度 low / high / max，默认 max",
              "工具调用": "支持工具调用、结构化输出、流式输出、动态工具加载",
              "src": [
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
                  "checked": "2026-11-06",
                  "label": "模型卡"
                },
                {
                  "url": "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart",
                  "checked": "2026-11-06",
                  "label": "API 文档"
                }
              ]
            },
            "price": {
              "输入价格": "13 元 / 百万 token",
              "输出价格": "68 元 / 百万 token",
              "缓存价格": "命中 1.3 元、写入 13 元 / 百万 token",
              "src": {
                "url": "https://www.kimi.com/membership/pricing?tab=api",
                "checked": "2026-11-06",
                "label": "官方 API 价格"
              }
            },
            "channels": {
              "渠道": "Kimi.com、Kimi Work、Kimi Code、Kimi API、Hugging Face 权重",
              "src": [
                {
                  "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
                  "checked": "2026-11-06",
                  "label": "技术博客"
                },
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
                  "checked": "2026-11-06",
                  "label": "模型卡"
                }
              ]
            },
            "bench": {
              "items": [
                [
                  "Terminal-Bench 4.0",
                  "65.7%"
                ],
                [
                  "DeepSWE v1.1",
                  "75.5%"
                ],
                [
                  "SWE Marathon v1.1",
                  "51.7%"
                ],
                [
                  "BenchCAD（带工具）",
                  "92.7%"
                ],
                [
                  "OfficeQA Pro v2",
                  "64.4"
                ],
                [
                  "BrowseComp",
                  "92.1%"
                ],
                [
                  "GDPval-AA v2.1（Elo）",
                  "1846"
                ]
              ],
              "note": "官方自报，最高推理强度",
              "src": [
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
                  "checked": "2026-11-06",
                  "label": "模型卡"
                },
                {
                  "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
                  "checked": "2026-11-06",
                  "label": "技术博客"
                }
              ]
            }
          }
        },
        {
          "current": false,
          "collected": "2026-10-20",
          "id": "kimi-k3",
          "name": "Kimi K3",
          "date": "2026-07-16",
          "summary": "2.8 万亿参数的开放权重旗舰，发布十天后开源",
          "src": [
            {
              "url": "https://huggingface.co/moonshotai/Kimi-K3",
              "checked": "2026-11-10",
              "label": "官方模型卡"
            },
            {
              "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
              "checked": "2026-10-20",
              "official": false
            },
            {
              "url": "https://news.pedaily.cn/202607/566986.shtml",
              "checked": "2026-10-20",
              "label": "投资界"
            }
          ],
          "detail": {
            "basic": {
              "发布日期": "2026-07-16；7 月 27 日开放权重（据维基百科，权重已在 Hugging Face 发布）",
              "开发方": "月之暗面",
              "是否开源": "是，开放权重",
              "许可证": "自定义 Kimi K3 License：运营 MaaS 且 12 个月收入超 2000 万美元须另签协议；月活超 1 亿或月收入超 2000 万美元的商用产品须显著标注",
              "src": [
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                },
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE",
                  "checked": "2026-11-10",
                  "label": "许可证"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
                  "checked": "2026-10-20",
                  "official": false
                },
                {
                  "url": "https://news.pedaily.cn/202607/566986.shtml",
                  "checked": "2026-10-20",
                  "label": "投资界"
                }
              ]
            },
            "spec": {
              "参数规模": "2.8 万亿，激活 1040 亿；视觉编码器 4.01 亿",
              "架构": "MoE，896 个专家，每 token 选 16 个 + 2 个共享；93 层（69 层 KDA + 24 层 Gated MLA）",
              "上下文窗口": "1,048,576 token",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像（模型卡介绍里称也能理解视频）",
              "输出模态": "文本",
              "推理模式": "仅思考模式（阿里云百炼标注）",
              "工具调用": "支持（模型卡称能长时间编排终端工具）",
              "src": [
                {
                  "url": "https://huggingface.co/moonshotai/Kimi-K3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
                  "checked": "2026-10-20",
                  "label": "阿里云百炼价格"
                }
              ]
            },
            "price": {
              "输入价格": "20 元 / 百万 token",
              "输出价格": "100 元 / 百万 token",
              "缓存价格": "命中 2 元、写入 20 元 / 百万 token",
              "src": {
                "url": "https://www.kimi.com/membership/pricing?tab=api",
                "checked": "2026-10-23",
                "label": "官方 API 价格"
              }
            },
            "channels": {
              "渠道": "Kimi 网页、App、Kimi 开放平台 API、阿里云百炼",
              "src": [
                {
                  "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
                  "checked": "2026-10-20",
                  "label": "阿里云百炼价格"
                },
                {
                  "url": "https://platform.moonshot.cn/blog",
                  "checked": "2026-10-20",
                  "label": "开放平台"
                }
              ]
            },
            "bench": {
              "items": [],
              "note": "未查到官方评测数据",
              "src": null
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-k2-7-code",
          "name": "Kimi K2.7 Code",
          "date": "2026-06",
          "summary": "编程专用模型，256K 上下文",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-k2-6",
          "name": "Kimi K2.6",
          "date": "2026-04",
          "summary": "支持文本、图像、视频输入",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-k2-5",
          "name": "Kimi K2.5",
          "date": "2026-01",
          "summary": "1 万亿参数 MoE",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-k2-thinking",
          "name": "Kimi K2 Thinking",
          "date": "2025-11",
          "summary": "推理模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-k2",
          "name": "Kimi K2",
          "date": "2025-07",
          "summary": "1 万亿参数，修改版 MIT 许可开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "kimi-1",
          "name": "Kimi 智能助手",
          "date": "2023",
          "summary": "首个支持 12.8 万 token 无损上下文的产品",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Free",
            "monthly": "0",
            "annual": "0",
            "perks": "1 个 Agent 任务并行，2 个项目"
          },
          {
            "name": "Plus",
            "monthly": "19 美元",
            "annual": "15 美元（180 美元 / 年）",
            "perks": "Office 文件处理、深度研究、网站部署、Kimi Code"
          },
          {
            "name": "Pro",
            "monthly": "39 美元",
            "annual": "31 美元（372 美元 / 年）",
            "perks": "2 倍 Agent 额度、目标模式、专属 Kimi Claw"
          },
          {
            "name": "Max",
            "monthly": "99 美元",
            "annual": "79 美元（948 美元 / 年）",
            "perks": "5 倍 Agent 额度、百万 token 超长对话"
          },
          {
            "name": "Ultra",
            "monthly": "199 美元",
            "annual": "159 美元（1908 美元 / 年）",
            "perks": "10 倍 Agent 额度"
          }
        ],
        "plansNote": "另有企业版",
        "plansSrc": {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "会员价格"
        },
        "api": [
          {
            "model": "Kimi K3.1 Pro",
            "input": "13 元",
            "output": "68 元",
            "cache": "命中 1.3 元、写入 13 元"
          },
          {
            "model": "Kimi K3.1 Pro Highspeed",
            "input": "26 元",
            "output": "136 元",
            "cache": "命中 1.3 元、写入 26 元"
          },
          {
            "model": "Kimi K3",
            "input": "20 元",
            "output": "100 元",
            "cache": "命中 2 元、写入 20 元"
          },
          {
            "model": "Kimi K2.7 Code",
            "input": "6.5 元",
            "output": "27 元",
            "cache": "命中 1.3 元"
          },
          {
            "model": "Kimi K2.6",
            "input": "6.5 元",
            "output": "27 元",
            "cache": "命中 1.1 元"
          }
        ],
        "apiUnit": "单位：每百万 token（月之暗面官方价格）",
        "apiSrc": {
          "url": "https://www.kimi.com/membership/pricing?tab=api",
          "checked": "2026-11-06",
          "label": "官方 API 价格"
        }
      },
      "features": {
        "search": {
          "v": "未查到"
        },
        "research": {
          "v": "有",
          "note": "深度研究",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        "image": {
          "v": "未查到"
        },
        "video": {
          "v": "未查到"
        },
        "voice": {
          "v": "未查到"
        },
        "files": {
          "v": "有",
          "note": "Office 文件处理",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        "coding": {
          "v": "有",
          "note": "Kimi Code",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        "computer": {
          "v": "部分",
          "note": "Kimi Claw（云端、安卓本地和桌面端）",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        "memory": {
          "v": "有",
          "note": "梦境记忆",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        "openWeights": {
          "v": "有",
          "note": "K2、K3 开放权重",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "api": {
          "v": "有",
          "note": "Kimi 开放平台",
          "src": {
            "url": "https://platform.moonshot.cn/blog",
            "checked": "2026-10-20"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "企业版",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        }
      }
    },
    {
      "id": "zhipu",
      "nameZh": "智谱",
      "nameEn": "Z.ai",
      "aliases": [
        "智谱AI",
        "Zhipu",
        "GLM"
      ],
      "region": "国内",
      "tagline": "GLM 大模型开发商，港股上市",
      "hq": "北京",
      "founded": "2019",
      "website": "https://z.ai",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Z.ai",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "港股上市公司（02513.HK），2026 年 1 月上市",
        "src": {
          "url": "https://en.wikipedia.org/wiki/Z.ai",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "AutoClaw 办公智能体、ZCode 编程工具",
        "enterprise": "Z.ai API、GLM Coding Plan 团队版",
        "src": {
          "url": "https://z.ai/subscribe",
          "checked": "2026-10-23",
          "label": "GLM Coding Plan"
        }
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-20",
          "id": "glm-5-3",
          "name": "GLM-5.3",
          "date": "2026-08-14",
          "summary": "与 GLM-5.2 同一基座，靠后训练大幅提升编程",
          "src": [
            {
              "url": "https://docs.z.ai/guides/llm/glm-5.3",
              "checked": "2026-10-20",
              "label": "模型文档"
            },
            {
              "url": "https://companies.caixin.com/2026-08-14/102474172.html",
              "checked": "2026-10-20",
              "label": "财新"
            }
          ],
          "detail": {
            "basic": {
              "发布日期": "2026-08-14",
              "开发方": "智谱（Z.ai）",
              "是否开源": "开放权重（官方称在开源模型中领先）",
              "许可证": "自定义 GLM-5.3 License：可商用；运营 MaaS 且 12 个月收入超 100 亿美元须先通过 Z.AI 安全审查",
              "src": [
                {
                  "url": "https://docs.z.ai/guides/llm/glm-5.3",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://companies.caixin.com/2026-08-14/102474172.html",
                  "checked": "2026-10-20",
                  "label": "财新"
                },
                {
                  "url": "https://huggingface.co/zai-org/GLM-5.3/raw/main/LICENSE",
                  "checked": "2026-11-06",
                  "label": "许可证"
                }
              ]
            },
            "spec": {
              "参数规模": "7430 亿（与 GLM-5.2 相同的基座，据维基百科）",
              "架构": "MoE + DSA（glm_moe_dsa，78 层）",
              "上下文窗口": "100 万 token",
              "最大输出长度": "12.8 万 token",
              "src": [
                {
                  "url": "https://docs.z.ai/guides/llm/glm-5.3",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Z.ai",
                  "checked": "2026-10-20",
                  "official": false
                },
                {
                  "url": "https://huggingface.co/zai-org/GLM-5.3/raw/main/config.json",
                  "checked": "2026-11-06",
                  "label": "模型配置"
                }
              ]
            },
            "ability": {
              "输入模态": "仅文本",
              "输出模态": "文本",
              "推理模式": "始终开启推理，不能关闭",
              "工具调用": "支持工具流式输出、结构化输出、上下文缓存",
              "src": {
                "url": "https://docs.z.ai/guides/llm/glm-5.3",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            },
            "price": {
              "输入价格": "1.4 美元 / 百万 token",
              "输出价格": "4.4 美元 / 百万 token",
              "缓存价格": "缓存输入 0.26 美元 / 百万 token，缓存存储限时免费",
              "src": {
                "url": "https://docs.z.ai/guides/overview/pricing",
                "checked": "2026-10-20",
                "label": "API 价格"
              }
            },
            "channels": {
              "渠道": "Z.ai API、GLM Coding Plan、ZCode、阿里云百炼、Cursor",
              "src": [
                {
                  "url": "https://docs.z.ai/guides/llm/glm-5.3",
                  "checked": "2026-10-20",
                  "label": "模型文档"
                },
                {
                  "url": "https://finance.sina.com.cn/jjxw/2026-10-05/doc-iniuekzz2774086.shtml",
                  "checked": "2026-10-20",
                  "label": "Cursor 上线"
                }
              ]
            },
            "bench": {
              "items": [
                [
                  "Z.ai Code Bench（相对 GLM-5.2）",
                  "提升 50%"
                ]
              ],
              "note": "官方称在 Terminal Bench 3.0、Agents’ Last Exam（CLI）上达到开源模型最好成绩",
              "src": {
                "url": "https://docs.z.ai/guides/llm/glm-5.3",
                "checked": "2026-10-20",
                "label": "模型文档"
              }
            }
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-5-3-flash",
          "name": "GLM-5.3-Flash",
          "date": "2026-08-26",
          "summary": "混合注意力架构，3200 亿参数，原生视觉能力",
          "src": {
            "url": "https://docs.z.ai/release-notes/new-released",
            "checked": "2026-11-06",
            "label": "官方更新记录"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-5-2",
          "name": "GLM-5.2",
          "date": "2026-06-16",
          "summary": "上下文从 20 万扩大到 100 万 token",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-5-1",
          "name": "GLM-5.1",
          "date": "2026-03",
          "summary": "4 月 7 日开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-5",
          "name": "GLM-5",
          "date": "2026-02-12",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-4-6",
          "name": "GLM-4.6",
          "date": "2025-09",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "glm-4-5",
          "name": "GLM-4.5 / 4.5 Air",
          "date": "2025-07",
          "summary": "公司同时以 Z.ai 品牌出海",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "chatglm",
          "name": "ChatGLM",
          "date": "2023",
          "summary": "与清华 KEG 联合开发的对话模型",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Lite",
            "monthly": "18 美元",
            "annual": "12.6 美元",
            "perks": "每周 1 万积分，支持 ZCode、Claude Code 等 20 多种工具"
          },
          {
            "name": "Pro",
            "monthly": "80 美元",
            "annual": "56 美元",
            "perks": "Lite 的 6 倍用量，含精选 MCP 工具"
          },
          {
            "name": "Max",
            "monthly": "168 美元",
            "annual": "117.6 美元",
            "perks": "Lite 的 14 倍用量，高峰期专属资源"
          }
        ],
        "plansNote": "GLM Coding Plan（编程订阅），按年付七折；另有季付和团队版",
        "plansSrc": {
          "url": "https://z.ai/subscribe",
          "checked": "2026-10-23",
          "label": "GLM Coding Plan"
        },
        "api": [
          {
            "model": "GLM-5.3",
            "input": "1.4 美元",
            "output": "4.4 美元",
            "cache": "0.26 美元"
          },
          {
            "model": "GLM-5.3-FlashX",
            "input": "0.37 美元",
            "output": "1.25 美元",
            "cache": "0.075 美元"
          },
          {
            "model": "GLM-5.3-Flash",
            "input": "0.15 美元",
            "output": "0.50 美元",
            "cache": "0.03 美元"
          }
        ],
        "apiUnit": "单位：每百万 token（Z.ai 国际站）；阿里云百炼上 GLM-5.3 为输入 8 元、输出 28 元",
        "apiSrc": [
          {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          },
          {
            "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
            "checked": "2026-10-20",
            "label": "阿里云百炼"
          }
        ]
      },
      "features": {
        "search": {
          "v": "有",
          "note": "API 内置 Web Search 工具",
          "src": {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-11-06",
            "label": "API 价格"
          }
        },
        "research": {
          "v": "有",
          "note": "深度搜索与研究（AutoClaw）",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-10-23",
            "label": "GLM Coding Plan"
          }
        },
        "image": {
          "v": "有",
          "note": "GLM-Image、CogView-4",
          "src": {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-11-06",
            "label": "API 价格"
          }
        },
        "video": {
          "v": "有",
          "note": "CogVideoX-3、视频特效模板智能体",
          "src": {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-11-06",
            "label": "API 价格"
          }
        },
        "voice": {
          "v": "未查到"
        },
        "files": {
          "v": "有",
          "note": "上传业务数据自动生成图表和分析",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-10-23",
            "label": "GLM Coding Plan"
          }
        },
        "coding": {
          "v": "有",
          "note": "ZCode 桌面编程工具、GLM Coding Plan",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "computer": {
          "v": "部分",
          "note": "AutoClaw 自动执行任务",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-10-23",
            "label": "GLM Coding Plan"
          }
        },
        "memory": {
          "v": "未查到"
        },
        "openWeights": {
          "v": "有",
          "note": "GLM-5.1 等开源",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Z.ai",
            "checked": "2026-10-20",
            "official": false
          }
        },
        "api": {
          "v": "有",
          "note": "Z.ai API",
          "src": {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-10-20",
            "label": "API 价格"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "团队版：席位管理、用量看板、企业级数据安全",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-10-23",
            "label": "GLM Coding Plan"
          }
        }
      }
    },
    {
      "id": "minimax",
      "nameZh": "MiniMax",
      "nameEn": "MiniMax",
      "aliases": [
        "稀宇",
        "稀宇科技",
        "海螺"
      ],
      "region": "国内",
      "tagline": "多模态大模型公司，港股上市",
      "hq": "上海",
      "founded": "2021",
      "website": "https://www.minimax.io",
      "src": {
        "url": "https://en.wikipedia.org/wiki/MiniMax_Group",
        "checked": "2026-10-20",
        "official": false
      },
      "funding": {
        "applicable": false,
        "reason": "港股上市公司（00100.HK），2026 年 1 月上市",
        "src": {
          "url": "https://en.wikipedia.org/wiki/MiniMax_Group",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "MiniMax Code（网页、桌面、iOS、安卓）、Talkie",
        "enterprise": "MiniMax API、M Plan",
        "src": {
          "url": "https://www.minimax.io/",
          "checked": "2026-10-23",
          "label": "官网"
        }
      },
      "models": [
        {
          "id": "minimax-m3-1-flash",
          "name": "MiniMax M3.1 Flash",
          "date": "2026-10-19",
          "current": true,
          "collected": "2026-10-23",
          "summary": "新一代 Flash，智能体和编程大幅提升，成本降 70%",
          "src": {
            "url": "https://www.minimax.io/blog/minimax-m31f",
            "checked": "2026-10-23",
            "label": "发布页"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-10-19（9 月 27 日曾以预览版上线；早期版本曾匿名运行，名为 Space Bunny）",
              "开发方": "MiniMax（稀宇科技）",
              "是否开源": "权重稍后发布",
              "许可证": null,
              "src": {
                "url": "https://www.minimax.io/blog/minimax-m31f",
                "checked": "2026-10-23",
                "label": "发布页"
              }
            },
            "spec": {
              "参数规模": null,
              "架构": "更激进的稀疏化；输出速度 200+ token/秒（中位数 170+）",
              "上下文窗口": "100 万 token（预览版数据）",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://www.minimax.io/blog/minimax-m31f",
                  "checked": "2026-10-23",
                  "label": "发布页"
                },
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-23",
                  "label": "Presenc",
                  "official": false
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像（M Plan 含多模态理解）",
              "输出模态": "文本",
              "推理模式": "思考始终开启，支持五档思考深度",
              "工具调用": "支持链式工具调用、电脑操作",
              "src": [
                {
                  "url": "https://www.minimax.io/blog/minimax-m31f",
                  "checked": "2026-10-23",
                  "label": "发布页"
                },
                {
                  "url": "https://www.minimax.io/m-plan",
                  "checked": "2026-10-23",
                  "label": "M Plan"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
                  "checked": "2026-11-06",
                  "label": "百炼模型上架记录"
                },
                {
                  "url": "https://platform.minimax.io/docs/guides/models-intro",
                  "checked": "2026-11-06",
                  "label": "模型文档"
                }
              ]
            },
            "price": {
              "输入价格": "0.15 美元 / 百万 token",
              "输出价格": "0.60 美元 / 百万 token",
              "缓存价格": "缓存输入 0.015 美元 / 百万 token",
              "src": {
                "url": "https://www.minimax.io/blog/minimax-m31f",
                "checked": "2026-10-23",
                "label": "发布页"
              }
            },
            "channels": {
              "渠道": "MiniMax API、M Plan 订阅、MiniMax Code",
              "src": {
                "url": "https://www.minimax.io/blog/minimax-m31f",
                "checked": "2026-10-23",
                "label": "发布页"
              }
            },
            "bench": {
              "items": [
                [
                  "DeepSWE v1.1（软件工程）",
                  "73.7%"
                ],
                [
                  "OSWorld V2（电脑操作）",
                  "61.7"
                ],
                [
                  "Agents' Last Exam（真实专业任务）",
                  "29.6"
                ],
                [
                  "BankerToolBench（金融复杂任务）",
                  "76.2"
                ],
                [
                  "CyberGym（网络安全）",
                  "82%"
                ]
              ],
              "note": "官方称 OSWorld V2 和 ALE 两项为国产模型第一",
              "src": {
                "url": "https://www.minimax.io/blog/minimax-m31f",
                "checked": "2026-10-23",
                "label": "发布页"
              }
            }
          }
        },
        {
          "current": false,
          "collected": "2026-10-20",
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "date": "2026-06-01",
          "summary": "开放权重旗舰，原生支持图像和视频输入、电脑操作",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "detail": {
            "basic": {
              "发布日期": "2026-06-01；一周内在 Hugging Face 公开权重",
              "开发方": "MiniMax（稀宇科技）",
              "是否开源": "是，开放权重",
              "许可证": "MiniMax 社区许可证（minimax-community）",
              "src": [
                {
                  "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                },
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "Presenc"
                }
              ]
            },
            "spec": {
              "参数规模": "约 4280 亿，激活约 230 亿",
              "架构": "MoE；MiniMax 稀疏注意力（MSA），100 万上下文下比 M2 预填充快 9 倍、解码快 15 倍",
              "上下文窗口": "100 万 token",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                },
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "Presenc"
                }
              ]
            },
            "ability": {
              "输入模态": "文本、图像、视频",
              "输出模态": "文本",
              "推理模式": "三种：始终思考 / 自适应 / 不思考（thinking 参数）",
              "工具调用": "支持电脑操作",
              "src": [
                {
                  "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
                  "checked": "2026-11-10",
                  "label": "官方模型卡"
                },
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "Presenc"
                }
              ]
            },
            "price": {
              "输入价格": "0.30 美元 / 百万 token（超长提示另收附加费）",
              "输出价格": "1.20 美元 / 百万 token",
              "缓存价格": "读取 0.06 美元 / 百万 token（输入不超过 512K；超过时 0.12 美元）",
              "src": [
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "Presenc"
                },
                {
                  "url": "https://platform.minimax.io/docs/pricing/overview",
                  "checked": "2026-11-06",
                  "label": "官方 API 价格"
                }
              ]
            },
            "channels": {
              "渠道": "MiniMax API、MiniMax Code、Token Plan 订阅、阿里云百炼；权重可自行部署",
              "src": [
                {
                  "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "Presenc"
                },
                {
                  "url": "https://help.aliyun.com/zh/model-studio/models",
                  "checked": "2026-10-20",
                  "label": "阿里云百炼"
                }
              ]
            },
            "bench": {
              "items": [
                [
                  "SWE-Bench Pro",
                  "59.0%"
                ],
                [
                  "Terminal-Bench 2.1",
                  "66.0%"
                ],
                [
                  "SWE-fficiency",
                  "34.8%"
                ],
                [
                  "KernelBench Hard",
                  "28.8%"
                ],
                [
                  "MCP Atlas",
                  "74.2%"
                ]
              ],
              "src": {
                "url": "https://www.minimax.io/blog/minimax-m3",
                "checked": "2026-11-06",
                "label": "发布页"
              }
            }
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "minimax-m2-7",
          "name": "MiniMax-M2.7",
          "date": "2026-03-18",
          "summary": null,
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "minimax-m2-5",
          "name": "MiniMax-M2.5",
          "date": "2026-02-12",
          "summary": null,
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "minimax-m2",
          "name": "MiniMax-M2",
          "date": "2025-10",
          "summary": "2300 亿参数，主打编程和智能体",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "minimax-m1",
          "name": "MiniMax-M1",
          "date": "2025-06",
          "summary": "推理模型，Apache 2.0 开源",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "minimax-01",
          "name": "MiniMax-Text-01 / VL-01",
          "date": "2025-01",
          "summary": "4560 亿参数，开放权重",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "abab6-5",
          "name": "abab6.5",
          "date": "2024",
          "summary": "官方称万亿参数",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "abab1",
          "name": "abab1",
          "date": "2022",
          "summary": "第一代模型",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "id": "minimax-h3",
          "name": "MiniMax H3",
          "date": "2026-07-31",
          "current": false,
          "collected": null,
          "summary": "开放的全模态视频生成模型",
          "src": {
            "url": "https://www.minimax.io/blog/minimax-h3",
            "checked": "2026-10-23"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "Free",
            "monthly": "0",
            "annual": null,
            "perks": "MiniMax Code，有限的 M3.1 Flash、图像和语音模型"
          },
          {
            "name": "Go",
            "monthly": "22 美元",
            "annual": "220 美元 / 年",
            "perks": "M3.1 Flash、图像和语音模型、联网搜索"
          },
          {
            "name": "Explore",
            "monthly": "55 美元",
            "annual": "550 美元 / 年",
            "perks": "Go 的 3 倍用量，含 H3 视频模型"
          },
          {
            "name": "Build",
            "monthly": "132 美元",
            "annual": "1320 美元 / 年",
            "perks": "Go 的 7.5 倍用量，高峰期优先"
          }
        ],
        "plansNote": "M Plan 个人订阅；按年付送 2 个月",
        "plansSrc": {
          "url": "https://www.minimax.io/m-plan",
          "checked": "2026-11-06",
          "label": "M Plan"
        },
        "api": [
          {
            "model": "MiniMax M3.1 Flash",
            "input": "0.15 美元",
            "output": "0.60 美元",
            "cache": "0.015 美元"
          },
          {
            "model": "MiniMax M3",
            "input": "0.30 美元",
            "output": "1.20 美元",
            "cache": "0.06 美元"
          }
        ],
        "apiUnit": "单位：每百万 token",
        "apiSrc": [
          {
            "url": "https://platform.minimax.io/docs/pricing/overview",
            "checked": "2026-11-06",
            "label": "官方 API 价格"
          },
          {
            "url": "https://www.minimax.io/blog/minimax-m31f",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        ]
      },
      "features": {
        "search": {
          "v": "有",
          "note": "联网搜索",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "research": {
          "v": "未查到"
        },
        "image": {
          "v": "有",
          "note": "图像模型",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "video": {
          "v": "有",
          "note": "H3 视频模型",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "voice": {
          "v": "有",
          "note": "MiniMax Speech 2.8 语音模型",
          "src": {
            "url": "https://www.minimax.io/news/minimax-speech-28",
            "checked": "2026-10-20"
          }
        },
        "files": {
          "v": "未查到"
        },
        "coding": {
          "v": "有",
          "note": "MiniMax Code",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "computer": {
          "v": "有",
          "note": "内置浏览器、远程控制；M3.1 Flash 主打电脑操作",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "memory": {
          "v": "有",
          "note": "记忆",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        "openWeights": {
          "v": "有",
          "note": "M1 到 M3 都开放权重",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          }
        },
        "api": {
          "v": "有",
          "note": "MiniMax API",
          "src": {
            "url": "https://presenc.ai/research/minimax-model-lineage-2026",
            "checked": "2026-10-20",
            "official": false,
            "label": "Presenc"
          }
        },
        "enterprise": {
          "v": "未查到"
        }
      }
    },
    {
      "id": "doubao",
      "nameZh": "字节·豆包",
      "nameEn": "Doubao",
      "aliases": [
        "豆包",
        "字节",
        "字节跳动",
        "ByteDance",
        "Seed",
        "火山引擎"
      ],
      "region": "国内",
      "tagline": "字节跳动旗下大模型和 AI 助手",
      "hq": "北京",
      "founded": "2023（豆包上线）",
      "website": "https://www.doubao.com",
      "src": [
        {
          "url": "https://en.wikipedia.org/wiki/Doubao",
          "checked": "2026-10-20",
          "official": false,
          "label": "豆包"
        },
        {
          "url": "https://en.wikipedia.org/wiki/ByteDance",
          "checked": "2026-10-20",
          "official": false,
          "label": "字节跳动总部"
        }
      ],
      "funding": {
        "applicable": false,
        "reason": "字节跳动内部团队",
        "src": {
          "url": "https://en.wikipedia.org/wiki/Doubao",
          "checked": "2026-10-20",
          "official": false
        }
      },
      "products": {
        "consumer": "豆包（网页、App）",
        "enterprise": "火山引擎豆包大模型",
        "src": {
          "url": "https://www.volcengine.com/product/doubao",
          "checked": "2026-10-20"
        }
      },
      "models": [
        {
          "current": true,
          "collected": "2026-10-23",
          "id": "doubao-seed-2-1-pro",
          "name": "豆包大模型 2.1 Pro",
          "date": "2026-06-28",
          "summary": "豆包 2.1 旗舰，9 月 15 日更新版上下文扩到 1024K",
          "src": [
            {
              "url": "https://decohack.com/ai-daily/2026-06-24/",
              "checked": "2026-10-20",
              "official": false,
              "label": "DecoHack"
            },
            {
              "url": "https://www.volcengine.com/docs/82379/1544106",
              "checked": "2026-10-20",
              "label": "火山方舟计费"
            }
          ],
          "detail": {
            "basic": {
              "发布日期": "2026-06-28（版本 260628）；2026-09-15 更新（版本 260915）",
              "开发方": "字节跳动 Seed 团队",
              "是否开源": "否（据维基百科为专有许可）",
              "许可证": "专有",
              "src": [
                {
                  "url": "https://www.volcengine.com/docs/82379/1330310",
                  "checked": "2026-10-23",
                  "label": "方舟模型列表"
                },
                {
                  "url": "https://decohack.com/ai-daily/2026-06-24/",
                  "checked": "2026-10-20",
                  "official": false,
                  "label": "DecoHack"
                },
                {
                  "url": "https://en.wikipedia.org/wiki/Doubao",
                  "checked": "2026-10-20",
                  "official": false
                }
              ]
            },
            "spec": {
              "参数规模": "官方未公开",
              "架构": "官方未公开",
              "上下文窗口": "1024K token（260915 版；260628 版为 256K）",
              "最大输出长度": "256K token（默认 4K），最大思维链 256K",
              "src": {
                "url": "https://www.volcengine.com/docs/82379/1330310",
                "checked": "2026-10-23",
                "label": "方舟模型列表"
              }
            },
            "ability": {
              "输入模态": "文本、图像等（多模态理解）",
              "输出模态": "文本",
              "推理模式": "深度思考默认开启，可通过参数关闭",
              "工具调用": "支持工具调用、结构化输出、GUI 任务处理",
              "src": {
                "url": "https://www.volcengine.com/docs/82379/1330310",
                "checked": "2026-10-23",
                "label": "方舟模型列表"
              }
            },
            "price": {
              "输入价格": "6 元 / 百万 token",
              "输出价格": "30 元 / 百万 token",
              "缓存价格": "命中 1.2 元 / 百万 token；存储 0.017 元 / 百万 token / 小时",
              "src": {
                "url": "https://www.volcengine.com/docs/82379/1544106",
                "checked": "2026-10-20",
                "label": "火山方舟计费"
              }
            },
            "channels": {
              "渠道": "豆包 App、火山引擎方舟 API",
              "src": [
                {
                  "url": "https://www.volcengine.com/docs/82379/1330310",
                  "checked": "2026-10-23",
                  "label": "方舟模型列表"
                },
                {
                  "url": "https://www.volcengine.com/docs/82379/1544106",
                  "checked": "2026-10-23",
                  "label": "方舟计费"
                }
              ]
            },
            "bench": {
              "items": [],
              "note": "未查到分数：Seed2.1 官方页列出 GDPVal 等基准，成绩表未能读取",
              "src": {
                "url": "https://seed.bytedance.com/zh/seed2_1",
                "checked": "2026-11-07",
                "label": "Seed2.1 官方页"
              }
            }
          }
        },
        {
          "id": "doubao-seed-evolving",
          "name": "Doubao Seed Evolving",
          "date": "2026",
          "current": false,
          "collected": null,
          "summary": "Seed 最新编程和智能体模型，按周迭代",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-10-23",
            "label": "方舟模型列表"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "doubao-seed-2-0",
          "name": "豆包大模型 2.0（Seed 2.0）",
          "date": "2026-02-14",
          "summary": "分 Pro、Lite、Mini、Code 四个版本",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Doubao",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "doubao-launch",
          "name": "豆包上线",
          "date": "2023-08",
          "summary": "豆包智能助手发布",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Doubao",
            "checked": "2026-10-20",
            "official": false
          },
          "officialGap": {
            "reason": "暂未找到",
            "detail": "历代模型目前引用维基百科，还没逐个查找官方发布文章",
            "tried": [],
            "checked": "2026-11-10"
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "标准套餐",
            "monthly": "68 元",
            "annual": "约 57.3 元（688 元 / 年）",
            "perks": "接入 2.1 Pro；办公任务、专家模式额度为免费版 5 倍以上"
          },
          {
            "name": "加强套餐",
            "monthly": "200 元",
            "annual": "约 170.7 元（2048 元 / 年）",
            "perks": "额度为标准套餐 4 倍"
          },
          {
            "name": "高级套餐",
            "monthly": "500 元",
            "annual": "约 424 元（5088 元 / 年）",
            "perks": "额度为标准套餐 10 倍"
          }
        ],
        "plansNote": "2026 年 6 月 24 日上线，月付和权益据北京日报；年付来自 5 月 App Store 披露（当时最高档名为专业版），正式上线后未再核实",
        "plansSrc": [
          {
            "url": "https://news.bjd.com.cn/2026/06/24/11824240.shtml",
            "checked": "2026-11-07",
            "label": "北京日报"
          },
          {
            "url": "https://www.guancha.cn/economy/2026_05_04_815878.shtml",
            "checked": "2026-11-07",
            "label": "观察者网"
          }
        ],
        "api": [
          {
            "model": "doubao-seed-2.1-pro",
            "input": "6 元",
            "output": "30 元",
            "cache": "命中 1.2 元"
          },
          {
            "model": "doubao-seed-2.1-turbo",
            "input": "3 元",
            "output": "15 元",
            "cache": "命中 0.6 元"
          },
          {
            "model": "doubao-seed-2.1-lite",
            "input": "0.8 元",
            "output": "2.7 元",
            "cache": "命中 0.16 元"
          }
        ],
        "apiUnit": "单位：每百万 token，最短输入档位；Lite 另支持音频输入（12 元）",
        "apiSrc": {
          "url": "https://www.volcengine.com/docs/82379/1544106",
          "checked": "2026-10-20",
          "label": "火山方舟计费"
        }
      },
      "features": {
        "search": {
          "v": "有",
          "note": "深度思考时可边想边搜",
          "src": {
            "url": "https://tech.ifeng.com/c/8i5ME8snspx",
            "checked": "2026-11-07",
            "label": "凤凰网"
          }
        },
        "research": {
          "v": "有",
          "note": "「深入研究」，2025 年 6 月开启测试",
          "src": {
            "url": "https://tech.ifeng.com/c/8kbdTpTCXIn",
            "checked": "2026-11-07",
            "label": "凤凰网科技"
          }
        },
        "image": {
          "v": "有",
          "note": "Seedream 图像模型",
          "src": {
            "url": "https://decohack.com/ai-daily/2026-06-24/",
            "checked": "2026-10-20",
            "official": false,
            "label": "DecoHack"
          }
        },
        "video": {
          "v": "有",
          "note": "Seedance 视频模型",
          "src": {
            "url": "https://decohack.com/ai-daily/2026-06-24/",
            "checked": "2026-10-20",
            "official": false,
            "label": "DecoHack"
          }
        },
        "voice": {
          "v": "有",
          "note": "Doubao-Seed-Audio 音频模型",
          "src": {
            "url": "https://decohack.com/ai-daily/2026-06-24/",
            "checked": "2026-10-20",
            "official": false,
            "label": "DecoHack"
          }
        },
        "files": {
          "v": "有",
          "note": "办公任务模式可调用文档、表格，内置 Office 套件",
          "src": {
            "url": "https://news.bjd.com.cn/2026/06/24/11824240.shtml",
            "checked": "2026-11-07",
            "label": "北京日报"
          }
        },
        "coding": {
          "v": "有",
          "note": "Seed Evolving 编程智能体模型；方舟提供 Coding Plan 订阅",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-10-23",
            "label": "方舟模型列表"
          }
        },
        "computer": {
          "v": "有",
          "note": "专业版办公任务模式可操作本地电脑、使用浏览器",
          "src": {
            "url": "https://news.bjd.com.cn/2026/06/24/11824240.shtml",
            "checked": "2026-11-07",
            "label": "北京日报"
          }
        },
        "memory": {
          "v": "有",
          "note": "App 有长期记忆（据非官方文章，作者反馈内容未必写入成功）",
          "src": {
            "url": "https://www.woshipm.com/ai/6471161.html",
            "checked": "2026-11-07",
            "label": "人人都是产品经理",
            "official": false
          }
        },
        "openWeights": {
          "v": "未查到"
        },
        "api": {
          "v": "有",
          "note": "火山引擎方舟",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1544106",
            "checked": "2026-10-20",
            "label": "火山方舟计费"
          }
        },
        "enterprise": {
          "v": "有",
          "note": "火山引擎",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1544106",
            "checked": "2026-10-20",
            "label": "火山方舟计费"
          }
        }
      }
    }
  ],
  "news": [
    {
      "company": "anthropic",
      "date": "2026-10-22",
      "type": "标准与协议",
      "title": "将 Agent Skills 标准捐给 AAIF 基金会",
      "src": {
        "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
        "checked": "2026-10-23"
      },
      "subject": "AAIF",
      "directions": [
        "agent"
      ]
    },
    {
      "company": "anthropic",
      "date": "2026-10-21",
      "type": "产品",
      "title": "推出主动式智能体应用 Claude Duet 研究预览",
      "src": {
        "url": "https://claude.com/blog/claude-duet",
        "checked": "2026-10-23"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "anthropic",
      "date": "2026-10-21",
      "type": "人事",
      "title": "物理学家 Stubbs 加入长期利益信托",
      "src": {
        "url": "https://www.anthropic.com/news/christopher-stubbs-joins-long-term-benefit-trust",
        "checked": "2026-10-22"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-10-14",
      "type": "合作",
      "title": "开设新加坡办公室，并与新加坡政府签署合作备忘录",
      "src": {
        "url": "https://www.anthropic.com/news/singapore-office-opening",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-10-07",
      "type": "模型发布",
      "title": "发布 Claude Haiku 5.5",
      "src": {
        "url": "https://www.anthropic.com/claude-haiku-5-5",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-10-01",
      "type": "合作",
      "title": "巴克莱银行扩大使用 Claude，用于运营和客户服务",
      "src": {
        "url": "https://www.anthropic.com/news/barclays-scales-claude",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-09-28",
      "type": "模型发布",
      "title": "发布 Claude Sonnet 5.5",
      "src": {
        "url": "https://www.anthropic.com/claude-sonnet-5-5",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-09-22",
      "type": "模型发布",
      "title": "发布 Claude Opus 5.5，5.5 系列首个模型",
      "src": {
        "url": "https://www.anthropic.com/claude-opus-5-5",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-10-20",
      "type": "产品",
      "title": "开源内部推理框架 DeepInfer",
      "src": [
        {
          "url": "https://github.com/deepseek-ai/DeepInfer",
          "checked": "2026-11-10",
          "label": "DeepSeek GitHub"
        },
        {
          "url": "https://www.21jingji.com/article/20261020/herald/5330df27d9317a4d21cf51ae14472b44.html",
          "checked": "2026-10-21"
        }
      ]
    },
    {
      "company": "deepseek",
      "date": "2026-10-17",
      "type": "模型发布",
      "title": "发布 V4.1-Flash-1017，开放搜索 API",
      "src": {
        "url": "https://api-docs.deepseek.com/news/news261017",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-10-06",
      "type": "融资",
      "title": "据报道新一轮融资规模或扩大至最高 1000 亿元人民币",
      "src": {
        "url": "https://www.cnbc.com/2026/10/06/deepseek-funding-round.html",
        "checked": "2026-10-20"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "媒体援引知情人士的融资传闻，DeepSeek 没有公开回应",
        "tried": [
          "https://www.deepseek.com",
          "https://api-docs.deepseek.com/zh-cn/news"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-09-10",
      "type": "模型发布",
      "title": "发布 V4.1-Flash，新架构，原生支持视觉理解",
      "src": {
        "url": "https://api-docs.deepseek.com/news/news260910",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-08-21",
      "type": "模型发布",
      "title": "发布多模态实验模型 V4-Flash-Vision-Exp",
      "src": {
        "url": "https://api-docs.deepseek.com/news/news260821",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-08-13",
      "type": "模型发布",
      "title": "V4-Pro 正式发布，API 推出高峰 / 低谷分时价",
      "src": {
        "url": "https://api-docs.deepseek.com/news/news260813",
        "checked": "2026-10-20"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "qwen",
      "date": "2026-10-09",
      "type": "模型发布",
      "title": "发布图像模型 Qwen-Image-2.1-Turbo",
      "src": [
        {
          "url": "https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo",
          "checked": "2026-11-10",
          "label": "官方模型卡"
        },
        {
          "url": "https://www.marktechpost.com/2026/10/09/alibaba-qwen-releases-qwen-image-2-1-turbo-an-8-step-7b-image-model/",
          "checked": "2026-10-20"
        }
      ]
    },
    {
      "company": "qwen",
      "date": "2026-09-22",
      "type": "模型发布",
      "title": "云栖大会公布 Qwen 4 系列，尚未正式上线",
      "src": [
        {
          "url": "https://www.alibabagroup.com/zh-CN/document-2041268239081668608",
          "checked": "2026-11-10",
          "label": "阿里巴巴集团新闻稿"
        },
        {
          "url": "https://aitoolsreview.co.uk/insights/qwen-4",
          "checked": "2026-10-20",
          "official": false
        }
      ]
    },
    {
      "company": "qwen",
      "date": "2026-09-21",
      "type": "模型发布",
      "title": "开源 7B 图像生成与编辑模型 Qwen-Image-2.1",
      "src": [
        {
          "url": "https://huggingface.co/Qwen/Qwen-Image-2.1",
          "checked": "2026-11-10",
          "label": "官方模型卡"
        },
        {
          "url": "https://www.marktechpost.com/2026/09/21/alibaba-qwen-releases-qwen-image-2-1/",
          "checked": "2026-10-20"
        }
      ]
    },
    {
      "company": "qwen",
      "date": "2026-08-17",
      "type": "模型发布",
      "title": "发布 Qwen3.8-27B，开放 Max 权重",
      "src": [
        {
          "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
          "checked": "2026-11-10",
          "label": "官方模型卡"
        },
        {
          "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
          "checked": "2026-11-10",
          "label": "开放的 Max 权重"
        },
        {
          "url": "https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html",
          "checked": "2026-10-20"
        }
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-23",
      "type": "合作",
      "title": "与波兰 NASK 合作开展 AI 安全研究",
      "src": {
        "url": "https://openai.com/index/openai-nask-ai-safety-security-partnership",
        "checked": "2026-10-24",
        "label": "官方 RSS"
      },
      "directions": [
        "safety"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-22",
      "type": "产品",
      "title": "Decisions API 正式上线",
      "src": {
        "url": "https://openai.com/index/decisions-api",
        "checked": "2026-10-23"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-22",
      "type": "合作",
      "title": "Uber 向 3 万多名员工推广 ChatGPT Work",
      "src": {
        "url": "https://openai.com/index/uber-chatgpt-work-rollout",
        "checked": "2026-10-23"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-21",
      "type": "合作",
      "title": "与谷歌云合作，模型和 Codex 上架谷歌云",
      "src": {
        "url": "https://openai.com/index/openai-models-google-cloud",
        "checked": "2026-10-22"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-21",
      "type": "定价与商业模式",
      "title": "ChatGPT 广告扩展到 26 个新国家",
      "src": {
        "url": "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
        "checked": "2026-10-22"
      },
      "subject": "ChatGPT",
      "directions": [
        "cost"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-20",
      "type": "收购与整合",
      "title": "收购 Orchestra Bio，切入生命科学研发",
      "src": {
        "url": "https://openai.com/index/openai-to-acquire-orchestra-bio",
        "checked": "2026-10-21"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-07",
      "type": "产品",
      "title": "GPT-6 向所有 ChatGPT 用户开放",
      "src": {
        "url": "https://openai.com/index/gpt-6-for-everyone",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-06",
      "type": "合作",
      "title": "与 Atlassian 扩大合作，把企业知识接入 AI",
      "src": {
        "url": "https://openai.com/index/atlassian-partnership",
        "checked": "2026-10-20"
      },
      "directions": [
        "context"
      ]
    },
    {
      "company": "openai",
      "date": "2026-09-29",
      "type": "模型发布",
      "title": "发布 GPT-6.1 Sol",
      "src": {
        "url": "https://openai.com/index/introducing-gpt-6-1-sol",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "openai",
      "date": "2026-09-03",
      "type": "模型发布",
      "title": "发布 GPT-6 Astra，GPT-6 系列首个模型",
      "src": {
        "url": "https://openai.com/index/gpt-6-astra",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "openai",
      "date": "2026-08-13",
      "type": "人事",
      "title": "任命 Dali Rajic 为首席营收官",
      "src": {
        "url": "https://openai.com/index/dali-rajic-chief-revenue-officer",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "google-deepmind",
      "date": "2026-10-14",
      "type": "合作",
      "title": "与新加坡政府合作开发端侧诈骗检测模型",
      "src": {
        "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
        "checked": "2026-10-20"
      },
      "directions": [
        "safety"
      ]
    },
    {
      "company": "google-deepmind",
      "date": "2026-10-13",
      "type": "模型发布",
      "title": "Gemini 4 Argon 全面开放",
      "src": {
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "google-deepmind",
      "date": "2026-10-06",
      "type": "模型发布",
      "title": "开源轻量多模态嵌入模型 EmbeddingGemma 2",
      "src": {
        "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "google-deepmind",
      "date": "2026-09-30",
      "type": "模型发布",
      "title": "公布新一代前沿模型 Gemini 4 Argon",
      "src": {
        "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "google-deepmind",
      "date": "2026-09-02",
      "type": "模型发布",
      "title": "发布 Gemini 3.8 Flash 系列",
      "src": {
        "url": "https://deepmind.google/blog/introducing-gemini-3-8-flash-and-38-flash-cyber/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "meta",
      "date": "2026-10-15",
      "type": "模型发布",
      "title": "发布开放权重模型 Muse Spark Open",
      "src": {
        "url": "https://research.meta.ai/blog/muse-spark-open",
        "checked": "2026-10-24",
        "label": "研究博客"
      }
    },
    {
      "company": "meta",
      "date": "2026-10-12",
      "type": "模型发布",
      "title": "发布智能体模型 Muse Wonder 系列",
      "src": {
        "url": "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/",
        "checked": "2026-10-20"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "meta",
      "date": "2026-09-29",
      "type": "产品",
      "title": "推出 Muse 小企业版",
      "src": {
        "url": "https://about.fb.com/news/2026/09/introducing-muse-small-business/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "meta",
      "date": "2026-09-23",
      "type": "产品",
      "title": "发布 Ray-Ban 等 AI 眼镜新品",
      "src": {
        "url": "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/",
        "checked": "2026-10-20"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "meta",
      "date": "2026-09-08",
      "type": "产品",
      "title": "推出面向所有人的个人 AI 智能体 Muse",
      "src": {
        "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
        "checked": "2026-10-20"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "xai",
      "date": "2026-10-22",
      "type": "合作",
      "title": "推出 SpaceXSI 合作伙伴网络计划",
      "src": {
        "url": "https://x.ai/news/partnernetworkannouncement",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "xai",
      "date": "2026-10-14",
      "type": "模型发布",
      "title": "发布语音模型 Grok Voice 3.0",
      "src": {
        "url": "https://x.ai/news/grok-voice-3",
        "checked": "2026-10-20"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "xai",
      "date": "2026-10-12",
      "type": "定价与商业模式",
      "title": "Grok、Cursor、X 合并为一个订阅",
      "src": {
        "url": "https://x.ai/news/x-subscription",
        "checked": "2026-10-20"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "xai",
      "date": "2026-09-28",
      "type": "产品",
      "title": "推出团队共享的 AI 同事 Team Bots",
      "src": {
        "url": "https://x.ai/news/team-bots",
        "checked": "2026-10-20"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "xai",
      "date": "2026-09-21",
      "type": "模型发布",
      "title": "发布 Grok 4.7",
      "src": {
        "url": "https://x.ai/news/grok-4-7",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "xai",
      "date": "2026-09-03",
      "type": "产品",
      "title": "Grok Bot 推出企业版",
      "src": {
        "url": "https://x.ai/news/grok-bot-for-enterprise",
        "checked": "2026-10-20"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "mistral",
      "date": "2026-10-21",
      "type": "合作",
      "title": "与英伟达合作开发 AI 原生工程设计工作流",
      "src": {
        "url": "https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/",
        "checked": "2026-10-22"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "mistral",
      "date": "2026-10-20",
      "type": "模型发布",
      "title": "发布语音智能体 SDK 及语音模型 Voxtral 3",
      "src": {
        "url": "https://mistral.ai/news/voxtral-3/",
        "checked": "2026-10-21"
      },
      "directions": [
        "agent",
        "ux"
      ]
    },
    {
      "company": "mistral",
      "date": "2026-10-15",
      "type": "模型发布",
      "title": "发布时间序列预测模型 Timestral",
      "src": {
        "url": "https://mistral.ai/news/timestral/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "mistral",
      "date": "2026-10-06",
      "type": "模型发布",
      "title": "发布 Mistral Large 4 预览版",
      "src": {
        "url": "https://mistral.ai/news/mistral-large-4/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "mistral",
      "date": "2026-09-16",
      "type": "合作",
      "title": "与 Mozilla 合作，为 Firefox 提供 AI",
      "src": {
        "url": "https://mistral.ai/news/mistral-x-mozilla/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "mistral",
      "date": "2026-09-10",
      "type": "合作",
      "title": "与 Cloudera 合作，面向企业数据提供 AI",
      "src": {
        "url": "https://mistral.ai/news/mistral-x-cloudera/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "mistral",
      "date": "2026-09-08",
      "type": "融资",
      "title": "完成 30 亿欧元 D 轮融资，投后估值超 210 亿欧元",
      "src": {
        "url": "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "moonshot",
      "date": "2026-10-12",
      "type": "融资",
      "title": "注册资本增至约 1437 万元，年内多次增资",
      "src": {
        "url": "https://finance.sina.com.cn/tech/roll/2026-10-12/doc-iniuxwif5337037.shtml",
        "checked": "2026-10-20"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "工商变更信息来自企业信息平台，月之暗面没有发公告",
        "tried": [
          "https://www.moonshot.cn",
          "https://www.kimi.com"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "moonshot",
      "date": "2026-08-05",
      "type": "融资",
      "title": "据报道 Pre-IPO 轮启动，估值 500 亿美元",
      "src": {
        "url": "https://www.cls.cn/detail/2445951",
        "checked": "2026-10-20"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "媒体报道的融资消息，月之暗面没有公开确认",
        "tried": [
          "https://www.moonshot.cn",
          "https://www.kimi.com"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "moonshot",
      "date": "2026-07-30",
      "type": "融资",
      "title": "据报道完成超 35 亿美元 F 轮融资",
      "src": {
        "url": "https://news.pedaily.cn/202607/566986.shtml",
        "checked": "2026-10-20"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "媒体报道的融资消息，月之暗面没有公开确认",
        "tried": [
          "https://www.moonshot.cn",
          "https://www.kimi.com"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "zhipu",
      "date": "2026-10-05",
      "type": "合作",
      "title": "Cursor 上线 GLM-5.3 系列模型",
      "src": [
        {
          "url": "https://cursor.com/docs/models/glm-5-3",
          "checked": "2026-11-10",
          "label": "Cursor 模型文档"
        },
        {
          "url": "https://finance.sina.com.cn/jjxw/2026-10-05/doc-iniuekzz2774086.shtml",
          "checked": "2026-10-20"
        }
      ]
    },
    {
      "company": "zhipu",
      "date": "2026-08-14",
      "type": "模型发布",
      "title": "发布 GLM-5.3，主打编程和网络安全",
      "src": [
        {
          "url": "https://docs.z.ai/guides/llm/glm-5.3",
          "checked": "2026-11-10",
          "label": "智谱官方文档"
        },
        {
          "url": "https://companies.caixin.com/2026-08-14/102474172.html",
          "checked": "2026-10-20"
        }
      ],
      "directions": [
        "safety"
      ]
    },
    {
      "company": "minimax",
      "date": "2026-09-27",
      "type": "模型发布",
      "title": "M3.1-Flash 预览版上线",
      "src": {
        "url": "https://presenc.ai/research/minimax-model-lineage-2026",
        "checked": "2026-10-20",
        "official": false
      },
      "officialGap": {
        "reason": "暂未找到",
        "detail": "code.minimax.cn 有 M3.1 Flash 页面提到预览版，但还不能确认这个网站属于 MiniMax；MiniMax 官网新闻页没找到预览版公告",
        "tried": [
          "https://www.minimaxi.com/news",
          "https://code.minimax.cn/tools/m3.1-flash"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "doubao",
      "date": "2026-10-19",
      "type": "产品",
      "title": "火山引擎推出 Seedance AI 短剧激励计划",
      "src": {
        "url": "https://chaincatcher.com/en/article/2297291",
        "checked": "2026-10-20",
        "official": false
      },
      "officialGap": {
        "reason": "暂未找到",
        "detail": "多家媒体称由火山引擎发起，但火山引擎官网搜不到原文，可能只发在公众号，待在微信里确认",
        "tried": [
          "https://www.volcengine.com",
          "Bing 搜索 site:volcengine.com"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "doubao",
      "date": "2026-10-16",
      "type": "人事",
      "title": "Seed 成立对齐与风险预备部门，全球招聘研究员",
      "src": [
        {
          "url": "https://seed.bytedance.com/zh/career",
          "checked": "2026-11-10",
          "label": "Seed 官网招聘页"
        },
        {
          "url": "https://digitimes.com/news/a20261016PD234/bytedance-testing-development-governance-competition.html",
          "checked": "2026-10-20"
        }
      ],
      "directions": [
        "safety"
      ]
    },
    {
      "company": "minimax",
      "date": "2026-10-22",
      "type": "产品",
      "title": "推出 MiniMax Code 小程序",
      "src": {
        "url": "https://www.minimax.io/blog/minimax-code-mini-app-1792650729",
        "checked": "2026-10-23"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "minimax",
      "date": "2026-10-19",
      "type": "模型发布",
      "title": "正式发布 M3.1 Flash，成本降 70%",
      "src": {
        "url": "https://www.minimax.io/blog/minimax-m31f",
        "checked": "2026-10-23",
        "label": "发布页"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "minimax",
      "date": "2026-08-13",
      "type": "模型发布",
      "title": "开源音乐生成模型 Music 3.0",
      "src": {
        "url": "https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "minimax",
      "date": "2026-07-31",
      "type": "模型发布",
      "title": "发布开放的全模态视频模型 H3",
      "src": {
        "url": "https://www.minimax.io/blog/minimax-h3",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-26",
      "type": "模型发布",
      "title": "发布 GPT-6.1 Terra，主打高性价比电脑操作",
      "src": {
        "url": "https://openai.com/index/introducing-gpt-6-1-terra",
        "checked": "2026-11-06",
        "label": "发布页"
      },
      "directions": [
        "agent",
        "cost"
      ]
    },
    {
      "company": "openai",
      "date": "2026-10-27",
      "type": "合作",
      "title": "与 Oracle 扩大合作，将其应用接入 ChatGPT",
      "src": {
        "url": "https://openai.com/index/oracle-apps-in-chatgpt",
        "checked": "2026-11-06",
        "label": "官方 RSS"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-28",
      "type": "合作",
      "title": "与 ServiceNow 扩大企业工作流合作",
      "src": {
        "url": "https://openai.com/index/openai-servicenow-partnership-expansion",
        "checked": "2026-11-06",
        "label": "官方 RSS"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "openai",
      "date": "2026-11-02",
      "type": "人事",
      "title": "任命 Dan Driscoll 为国家安全现代化高级顾问",
      "src": {
        "url": "https://openai.com/index/dan-driscoll-joins-openai",
        "checked": "2026-11-06",
        "label": "官方 RSS"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-03",
      "type": "人事",
      "title": "任命 Jill Hazelbaker 为首席企业事务官",
      "src": {
        "url": "https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer",
        "checked": "2026-11-06",
        "label": "官方 RSS"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-04",
      "type": "模型发布",
      "title": "发布图像模型 Images 2.6，生成速度提升 50%",
      "src": {
        "url": "https://openai.com/index/introducing-images-2-6",
        "checked": "2026-11-06",
        "label": "发布页"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-04",
      "type": "收购与整合",
      "title": "宣布收购 Pierre，扩展 Codex 代码工具",
      "src": {
        "url": "https://openai.com/index/openai-to-acquire-pierre",
        "checked": "2026-11-06",
        "label": "官方公告"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "openai",
      "date": "2026-11-05",
      "type": "模型发布",
      "title": "发布网络安全模型 GPT-6 Cyber",
      "src": {
        "url": "https://openai.com/index/introducing-gpt-6-cyber",
        "checked": "2026-11-06",
        "label": "发布页"
      },
      "directions": [
        "safety"
      ]
    },
    {
      "company": "anthropic",
      "date": "2026-10-26",
      "type": "融资",
      "title": "向 SEC 提交 S-1，拟在纳斯达克上市，代码 ANT",
      "src": {
        "url": "https://www.anthropic.com/news/s1-sec",
        "checked": "2026-11-06",
        "label": "官方公告"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-10-27",
      "type": "合作",
      "title": "扩大与美国 GSA 合作，政府采购打六折",
      "src": {
        "url": "https://www.anthropic.com/news/expanding-partnership-gsa",
        "checked": "2026-11-06",
        "label": "官方公告"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "google-deepmind",
      "date": "2026-10-27",
      "type": "模型发布",
      "title": "公布世界模型 Genie 4，向受信测试者开放",
      "src": {
        "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
        "checked": "2026-11-06",
        "label": "发布页"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "google-deepmind",
      "date": "2026-10-28",
      "type": "模型发布",
      "title": "公布最强模型 Gemini 4 Carbon，分阶段开放",
      "src": {
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
        "checked": "2026-11-06",
        "label": "发布页"
      }
    },
    {
      "company": "google-deepmind",
      "date": "2026-11-05",
      "type": "模型发布",
      "title": "发布 Gemini Omni 1.2 Flash",
      "src": {
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
        "checked": "2026-11-06",
        "label": "发布页"
      }
    },
    {
      "company": "meta",
      "date": "2026-10-28",
      "type": "产品",
      "title": "Muse 智能体在新加坡上线",
      "src": {
        "url": "https://about.fb.com/news/2026/10/muse-is-now-available-in-singapore-the-worlds-first-personal-ai-agent-built-for-everyone/",
        "checked": "2026-11-06",
        "label": "官方新闻"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "meta",
      "date": "2026-10-28",
      "type": "合作",
      "title": "与美国五所大学合作加速医学和科学研究",
      "src": {
        "url": "https://about.fb.com/news/2026/10/meta-partners-with-five-us-universities-to-accelerate-medical-and-scientific-breakthroughs/",
        "checked": "2026-11-06",
        "label": "官方新闻"
      }
    },
    {
      "company": "meta",
      "date": "2026-11-05",
      "type": "产品",
      "title": "Muse 应用上线语音对话和表情头像",
      "src": {
        "url": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
        "checked": "2026-11-06",
        "label": "官方新闻"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "mistral",
      "date": "2026-10-29",
      "type": "模型发布",
      "title": "开放 Large 4 权重，API 降价约五成",
      "src": {
        "url": "https://mistral.ai/news/mistral-large-4-oss/",
        "checked": "2026-11-06",
        "label": "开放权重公告"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "mistral",
      "date": "2026-11-05",
      "type": "产品",
      "title": "Mistral Studio 新增托管智能体和应用",
      "src": {
        "url": "https://mistral.ai/news/build-with-studio/",
        "checked": "2026-11-06",
        "label": "官方博客"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "moonshot",
      "date": "2026-10-24",
      "type": "模型发布",
      "title": "发布 Kimi K3.1 Pro 及其高速版",
      "src": {
        "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
        "checked": "2026-11-06",
        "label": "技术博客"
      }
    },
    {
      "company": "qwen",
      "date": "2026-10-27",
      "type": "模型发布",
      "title": "上架实时语音对话模型 Qwen-Audio-3.1",
      "src": {
        "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
        "checked": "2026-11-06",
        "label": "百炼模型上架记录"
      },
      "directions": [
        "ux"
      ]
    },
    {
      "company": "doubao",
      "subject": "Coze 扣子",
      "date": "2026-10-29",
      "type": "下架停服",
      "title": "扣子企业版 11 月 30 日停售，2027 年底下线",
      "directions": [
        "cost"
      ],
      "src": {
        "url": "https://docs.coze.cn/enterprise-plan-discontinuation-notice",
        "checked": "2026-11-06",
        "label": "官方公告"
      }
    },
    {
      "company": "deepseek",
      "subject": "美国国土安全部",
      "date": "2026-10-19",
      "type": "监管政策",
      "title": "美国要求联邦民事机构移除 DeepSeek 产品",
      "directions": [
        "safety"
      ],
      "src": [
        {
          "url": "https://www.federalregister.gov/documents/2026/10/20/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive",
          "checked": "2026-11-10",
          "label": "美国《联邦公报》2026-21447"
        },
        {
          "url": "https://techstartups.com/2026/10/19/top-tech-news-today-october-19-2026-anthropic-deepseek-idealab-meta-microsoft-more/",
          "checked": "2026-11-06",
          "label": "TechStartups 转述路透社",
          "official": false
        }
      ]
    },
    {
      "company": "openai",
      "date": "2026-09-30",
      "type": "安全事故",
      "title": "披露并阻止一场协同模型蒸馏行动",
      "directions": [
        "safety"
      ],
      "term": "adversarial-distillation",
      "src": {
        "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "company": "openai",
      "subject": "Cursor",
      "date": "2026-08-28",
      "type": "收购与整合",
      "title": "SpaceX 收购 Cursor，OpenAI 拟停供模型",
      "directions": [
        "cost"
      ],
      "src": {
        "url": "https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "company": "openai",
      "subject": "Hugging Face",
      "date": "2026-07-21",
      "type": "安全事故",
      "title": "模型评测时发生安全事件，联合 HF 处理",
      "directions": [
        "safety",
        "eval"
      ],
      "src": {
        "url": "https://openai.com/index/hugging-face-model-evaluation-security-incident",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "subject": "AAIF",
      "date": "2025-12-09",
      "type": "标准与协议",
      "title": "Linux 基金会成立 AAIF，接收 MCP 等项目",
      "directions": [
        "agent"
      ],
      "term": "mcp",
      "src": {
        "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
        "checked": "2026-11-06",
        "label": "Linux 基金会"
      }
    },
    {
      "company": "google-deepmind",
      "subject": "Generative UI",
      "date": "2025-11-18",
      "type": "技术概念",
      "title": "Google 发布生成式界面 Generative UI",
      "directions": [
        "ux"
      ],
      "term": "generative-ui",
      "src": {
        "url": "https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/",
        "checked": "2026-11-06",
        "label": "Google"
      }
    },
    {
      "company": "anthropic",
      "subject": "Agent Skills",
      "date": "2025-10-16",
      "type": "技术概念",
      "title": "Anthropic 发布 Agent Skills",
      "directions": [
        "agent",
        "context"
      ],
      "term": "skills",
      "src": {
        "url": "https://www.anthropic.com/news/skills",
        "checked": "2026-11-06",
        "label": "Anthropic"
      }
    },
    {
      "company": "anthropic",
      "subject": "Context Engineering",
      "date": "2025-09-29",
      "type": "技术概念",
      "title": "Anthropic 系统阐述上下文工程",
      "directions": [
        "context"
      ],
      "term": "context-engineering",
      "src": {
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        "checked": "2026-11-06",
        "label": "Anthropic"
      }
    },
    {
      "company": "anthropic",
      "subject": "MCP",
      "date": "2024-11-25",
      "type": "技术概念",
      "title": "Anthropic 发布模型上下文协议 MCP",
      "directions": [
        "agent"
      ],
      "term": "mcp",
      "src": {
        "url": "https://www.anthropic.com/news/model-context-protocol",
        "checked": "2026-11-06",
        "label": "Anthropic"
      }
    },
    {
      "company": "meta",
      "date": "2026-11-06",
      "type": "产品",
      "title": "Muse 应用推出可自定义的空间 spaces",
      "directions": [
        "ux"
      ],
      "src": {
        "url": "https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/",
        "checked": "2026-11-07",
        "label": "Meta"
      }
    },
    {
      "company": "openai",
      "subject": "Hacktron",
      "date": "2026-11-06",
      "type": "合作",
      "title": "与 Hacktron 合作查找自身系统漏洞",
      "directions": [
        "safety"
      ],
      "src": {
        "url": "https://openai.com/index/partnering-with-hacktron",
        "checked": "2026-11-07",
        "label": "OpenAI"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-06",
      "type": "产品",
      "title": "发布湿实验智能体评测基准 BioBasicsBench",
      "directions": [
        "eval"
      ],
      "src": {
        "url": "https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science",
        "checked": "2026-11-07",
        "label": "OpenAI"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-05",
      "type": "监管政策",
      "title": "发布全国社区公约和算力园区政策蓝图",
      "src": {
        "url": "https://openai.com/index/setting-new-standard-responsible-ai-infrastructure",
        "checked": "2026-11-07",
        "label": "OpenAI"
      }
    },
    {
      "company": "anthropic",
      "subject": "TeraWulf",
      "date": "2026-11-04",
      "type": "合作",
      "title": "Google 为其约 190 亿美元租约的融资提供信用担保",
      "directions": [
        "cost"
      ],
      "src": {
        "url": "https://investors.terawulf.com/news-events/press-releases/detail/148/terawulf-secures-google-credit-backstop-for-project-financing-in-support-of-19-billion-anthropic-lease-executes-definitive-fluor-epc-agreement",
        "checked": "2026-11-07",
        "label": "TeraWulf 公告"
      }
    },
    {
      "company": "google-deepmind",
      "subject": "欧盟法院",
      "date": "2026-11-03",
      "type": "监管政策",
      "title": "欧盟法院顾问称 Gemini 实时用新闻或侵权",
      "directions": [
        "safety"
      ],
      "src": [
        {
          "url": "https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260155en.pdf",
          "checked": "2026-11-10",
          "label": "欧盟法院新闻稿"
        },
        {
          "url": "https://ipwatchdog.com/2026/11/04/cjeu-advocate-general-outlines-copyright-limits-for-ai-news-summaries/",
          "checked": "2026-11-07",
          "label": "IPWatchdog"
        }
      ]
    },
    {
      "company": "anthropic",
      "date": "2026-11-02",
      "type": "产品",
      "title": "Messages API 推出消息线程测试版",
      "directions": [
        "context",
        "cost"
      ],
      "src": {
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "checked": "2026-11-07",
        "label": "Claude 平台更新记录"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-10-31",
      "type": "产品",
      "title": "开源主动式编程智能体研究原型 Super-agent",
      "directions": [
        "agent"
      ],
      "src": {
        "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
        "checked": "2026-11-07",
        "label": "DeepSeek GitHub"
      }
    },
    {
      "company": "anthropic",
      "subject": "Claude Opus 4.8",
      "date": "2026-10-30",
      "type": "下架停服",
      "title": "Opus 4.8 快速模式将于 11 月 30 日移除",
      "directions": [
        "cost"
      ],
      "src": {
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "checked": "2026-11-07",
        "label": "Claude 平台更新记录"
      }
    },
    {
      "subject": "IETF AI 偏好工作组",
      "date": "2026-10-30",
      "type": "技术概念",
      "title": "四家 AI 公司支持 robots.txt 训练偏好信号",
      "directions": [
        "safety"
      ],
      "term": "training-preference-signal",
      "src": {
        "url": "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/",
        "checked": "2026-11-07",
        "label": "IETF 草案"
      }
    },
    {
      "company": "openai",
      "subject": "GPT-4 系列",
      "date": "2026-10-14",
      "type": "下架停服",
      "title": "GPT-4 系列部分模型 2027 年 1 月停用",
      "src": {
        "url": "https://platform.openai.com/docs/deprecations",
        "checked": "2026-11-07",
        "label": "OpenAI 弃用说明"
      }
    },
    {
      "subject": "LangChain",
      "date": "2025-10-22",
      "type": "技术概念",
      "title": "LangChain、LangGraph 发布 1.0",
      "directions": [
        "agent"
      ],
      "term": "langgraph",
      "src": {
        "url": "https://blog.langchain.com/langchain-langgraph-1dot0/",
        "checked": "2026-11-07",
        "label": "1.0 公告"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-11-06",
      "type": "技术概念",
      "title": "发布智能体记忆研究，用 dreaming 整理记忆",
      "directions": [
        "context",
        "agent"
      ],
      "term": "dreaming",
      "src": {
        "url": "https://www.anthropic.com/research/components-of-agent-memory",
        "checked": "2026-11-08",
        "label": "Anthropic"
      }
    },
    {
      "company": "openai",
      "date": "2026-11-06",
      "type": "融资",
      "title": "据报道首笔 110 亿美元融资到账，估值 1.25 万亿美元",
      "src": {
        "url": "https://news.qq.com/rain/a/20261107A036VH00",
        "checked": "2026-11-08",
        "label": "腾讯新闻（援引彭博）"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "彭博独家报道，OpenAI 没有发布公告",
        "tried": [
          "https://openai.com/news"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "anthropic",
      "subject": "Claude Max",
      "date": "2026-11-06",
      "type": "定价与商业模式",
      "title": "法官裁定 Max 用量宣传诉讼部分主张可继续",
      "directions": [
        "cost"
      ],
      "src": {
        "url": "https://thenextweb.com/news/anthropic-claude-max-lawsuit-ruling-usage-claims",
        "checked": "2026-11-08",
        "label": "The Next Web"
      },
      "officialGap": {
        "reason": "需要登录",
        "detail": "裁定原文在美国法院文件系统 PACER，需要注册登录并付费才能看",
        "tried": [
          "PACER 法院文件系统",
          "https://www.anthropic.com/news"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "deepseek",
      "date": "2026-11-07",
      "type": "安全事故",
      "title": "网页和 API 部分中断，一周内第二次",
      "src": {
        "url": "https://status.deepseek.com/incidents/7219383236287",
        "checked": "2026-11-08",
        "label": "DeepSeek 状态页"
      }
    },
    {
      "company": "qwen",
      "subject": "Apple",
      "date": "2026-11-04",
      "type": "合作",
      "title": "国行 Apple 智能接入千问，开放开发者测试",
      "src": [
        {
          "url": "https://www.apple.com.cn/newsroom/2026/10/apple-intelligence-features-are-coming-to-users-in-china/",
          "checked": "2026-11-10",
          "label": "Apple 中国新闻稿"
        },
        {
          "url": "https://finance.sina.com.cn/jjxw/2026-11-07/doc-inixwnyk5120664.shtml",
          "checked": "2026-11-08",
          "label": "新浪财经"
        }
      ]
    },
    {
      "company": "anthropic",
      "date": "2026-11-03",
      "type": "产品",
      "title": "Mythos 5 等模型生成的文本加入水印",
      "directions": [
        "safety"
      ],
      "src": {
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "checked": "2026-11-08",
        "label": "Claude 平台更新记录"
      }
    },
    {
      "company": "xai",
      "subject": "Grok Imagine",
      "date": "2026-11-02",
      "type": "下架停服",
      "title": "Imagine 停用两款旧图像模型，改由 2.0 低档承接",
      "src": {
        "url": "https://docs.x.ai/docs/release-notes",
        "checked": "2026-11-08",
        "label": "xAI 更新记录"
      }
    },
    {
      "company": "zhipu",
      "subject": "中国移动云",
      "date": "2026-11-06",
      "type": "合作",
      "title": "与中国移动云签约，GLM 接入移动云 MaaS",
      "src": {
        "url": "https://finance.sina.com.cn/tech/digi/2026-11-08/doc-inixzpas7009595.shtml",
        "checked": "2026-11-09",
        "label": "新浪科技（IT之家）"
      },
      "officialGap": {
        "reason": "暂未找到",
        "detail": "只找到媒体转载，中国移动和智谱官网都没搜到签约原文，可能只发在公众号",
        "tried": [
          "https://www.10086.cn",
          "https://ecloud.10086.cn",
          "https://www.zhipuai.cn",
          "https://z.ai"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "anthropic",
      "subject": "OnePWR Solutions",
      "date": "2026-11-08",
      "type": "合作",
      "title": "据报道约 34 亿美元锁定 1.7GW 燃气发电机",
      "src": {
        "url": "https://www.thehindubusinessline.com/info-tech/anthropic-strikes-34-billion-deal-for-data-centre-generators/article71680927.ece",
        "checked": "2026-11-09",
        "label": "BusinessLine（路透转述 FT）"
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "英国《金融时报》报道，Anthropic 没有发布公告",
        "tried": [
          "https://www.anthropic.com/news"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-11-09",
      "type": "模型发布",
      "title": "发布 Fable 5.2 和 Mythos 5.2，降价提速",
      "src": {
        "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
        "checked": "2026-11-10",
        "label": "发布页"
      },
      "directions": [
        "cost",
        "safety"
      ]
    },
    {
      "company": "openai",
      "subject": "AWS Marketplace",
      "date": "2026-11-09",
      "type": "合作",
      "title": "ChatGPT 企业版上架 AWS 市场",
      "src": {
        "url": "https://openai.com/index/chatgpt-enterprise-aws-marketplace",
        "checked": "2026-11-10",
        "label": "OpenAI"
      }
    },
    {
      "company": "doubao",
      "subject": "Seedream",
      "date": "2026-11-09",
      "type": "模型发布",
      "title": "发布图像模型 Seedream 5.5，多轮编辑更稳",
      "src": {
        "url": "https://seed.bytedance.com/zh/seedream5_5",
        "checked": "2026-11-10",
        "label": "字节跳动 Seed"
      },
      "directions": [
        "cost"
      ]
    },
    {
      "company": "qwen",
      "subject": "千问办公",
      "date": "2026-11-09",
      "type": "产品",
      "title": "千问办公 2.0 发布，支持多人与 Agent 协作",
      "src": {
        "url": "https://docs.qwenwork.cn/release-notes/desktop",
        "checked": "2026-11-10",
        "label": "千问办公官方更新日志"
      },
      "directions": [
        "agent"
      ]
    },
    {
      "company": "deepseek",
      "subject": "DeepSeek Harness",
      "date": "2026-11-05",
      "type": "产品",
      "title": "Harness 日活 154 万，筹备官方插件市场",
      "src": [
        {
          "url": "https://news.qq.com/rain/a/20261106A03H4L00",
          "checked": "2026-11-10",
          "label": "腾讯新闻（11 月 6 日报道，称 11 月 5 日晚披露）",
          "official": false
        },
        {
          "url": "https://www.sohu.com/a/1099205338_122980439",
          "checked": "2026-11-10",
          "label": "搜狐（称 11 月 8 日官方发文，日期说法不一）",
          "official": false
        }
      ],
      "directions": [
        "agent"
      ],
      "officialGap": {
        "reason": "官网打不开",
        "detail": "DeepSeek 官网对应页面加载报错，官方 X 账号需要登录才能看",
        "tried": [
          "https://www.deepseek.com",
          "https://x.com/deepseek_ai"
        ],
        "checked": "2026-11-10"
      }
    }
  ],
  "version": "V3.3",
  "updates": [
    {
      "date": "2026-10-20",
      "by": "V2.0 首次收集",
      "items": [
        {
          "company": "anthropic",
          "type": "其他",
          "text": "补充 Claude Opus 5.5 详细参数、16 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "deepseek",
          "type": "其他",
          "text": "补充 DeepSeek-V4.1-Flash-1017 详细参数、13 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "补充 Qwen3.8-Max 详细参数、12 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "openai",
          "type": "其他",
          "text": "补充 GPT-6 Astra 详细参数、13 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "google-deepmind",
          "type": "其他",
          "text": "补充 Gemini 4 Argon 详细参数、12 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "meta",
          "type": "其他",
          "text": "补充 Muse Wonder / Muse Wonder Full 详细参数、9 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "xai",
          "type": "其他",
          "text": "补充 Grok 4.7 详细参数、11 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "mistral",
          "type": "其他",
          "text": "补充 Mistral Large 4 详细参数、10 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "moonshot",
          "type": "其他",
          "text": "补充 Kimi K3 详细参数、7 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "zhipu",
          "type": "其他",
          "text": "补充 GLM-5.3 详细参数、7 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "minimax",
          "type": "其他",
          "text": "补充 MiniMax M3 详细参数、9 个模型的演变、定价和功能矩阵",
          "src": null
        },
        {
          "company": "doubao",
          "type": "其他",
          "text": "补充 豆包大模型 2.1 Pro 详细参数、3 个模型的演变、定价和功能矩阵",
          "src": null
        }
      ]
    },
    {
      "date": "2026-10-21",
      "by": "每日自动更新",
      "items": [
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 20 日宣布收购生命科学 AI 公司 Orchestra Bio",
          "src": {
            "url": "https://openai.com/index/openai-to-acquire-orchestra-bio",
            "checked": "2026-10-21"
          }
        },
        {
          "company": "mistral",
          "type": "新动态",
          "text": "10 月 20 日发布 Voxtral 3 语音智能体 SDK 和语音模型，支持 50 多种语言",
          "src": {
            "url": "https://mistral.ai/news/voxtral-3/",
            "checked": "2026-10-21"
          }
        },
        {
          "company": "deepseek",
          "type": "新动态",
          "text": "10 月 20 日开源内部推理框架 DeepInfer 和 Token 编解码组件 deepseek-recipe",
          "src": {
            "url": "https://www.21jingji.com/article/20261020/herald/5330df27d9317a4d21cf51ae14472b44.html",
            "checked": "2026-10-21"
          }
        },
        {
          "company": "minimax",
          "type": "新动态",
          "text": "10 月 19 日正式发布 M3.1 Flash（上次收集遗漏，本次补录）",
          "src": {
            "url": "https://www.minimaxi.com/blog/minimax-m31f",
            "checked": "2026-10-21"
          }
        },
        {
          "company": "minimax",
          "type": "新模型",
          "text": "模型列表新增 MiniMax M3.1 Flash；当前主力仍为 MiniMax M3（Pro 版尚未发布）",
          "src": {
            "url": "https://www.minimaxi.com/blog/minimax-m31f",
            "checked": "2026-10-21"
          }
        },
        {
          "company": "minimax",
          "type": "价格变化",
          "text": "API 价格改用官方定价页：M3.1 Flash 输入 1 元、输出 4 元、缓存 0.1 元 / 百万 token；M3 同步改为官方人民币价格",
          "src": {
            "url": "https://platform.minimaxi.com/docs/guides/pricing",
            "checked": "2026-10-21"
          }
        }
      ]
    },
    {
      "date": "2026-10-22",
      "by": "每日自动更新",
      "items": [
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 21 日宣布与谷歌云合作，OpenAI 前沿模型和 Codex 将上架 Google Cloud Model Garden",
          "src": {
            "url": "https://openai.com/index/openai-models-google-cloud",
            "checked": "2026-10-22"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 21 日宣布 ChatGPT 广告扩展到 26 个新国家，已有超过 10 万家广告主使用",
          "src": {
            "url": "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
            "checked": "2026-10-22"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "10 月 21 日宣布哈佛物理学家 Christopher Stubbs 加入长期利益信托（LTBT）",
          "src": {
            "url": "https://www.anthropic.com/news/christopher-stubbs-joins-long-term-benefit-trust",
            "checked": "2026-10-22"
          }
        },
        {
          "company": "mistral",
          "type": "新动态",
          "text": "10 月 21 日宣布与英伟达合作，用 Mistral 模型和英伟达加速计算开发 AI 原生工程设计工作流",
          "src": {
            "url": "https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/",
            "checked": "2026-10-22"
          }
        }
      ]
    },
    {
      "date": "2026-10-23",
      "by": "每日自动更新",
      "items": [
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "10 月 21 日开放 Claude Duet 研究预览候补名单，Claude 作为主动智能体在后台工作，先面向美国 Pro 和 Max 用户",
          "src": {
            "url": "https://claude.com/blog/claude-duet",
            "checked": "2026-10-23"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "10 月 22 日宣布把 Agent Skills 开放标准捐给 Linux 基金会旗下的 Agentic AI Foundation",
          "src": {
            "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
            "checked": "2026-10-23"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 22 日 Decisions API 正式上线，基于 GPT-6 Luna，单次请求最多 400 个问题",
          "src": {
            "url": "https://openai.com/index/decisions-api",
            "checked": "2026-10-23"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 22 日 Uber 宣布向全球 3 万多名员工推广 ChatGPT Work",
          "src": {
            "url": "https://openai.com/index/uber-chatgpt-work-rollout",
            "checked": "2026-10-23"
          }
        },
        {
          "company": "xai",
          "type": "新动态",
          "text": "10 月 22 日推出 SpaceX Super Intelligence 合作伙伴网络，早期阶段已有 130 多家公司参与",
          "src": {
            "url": "https://x.ai/news/partnernetworkannouncement",
            "checked": "2026-10-23"
          }
        }
      ]
    },
    {
      "date": "2026-10-23",
      "by": "内置浏览器补查官网",
      "items": [
        {
          "company": "meta",
          "type": "其他",
          "text": "浏览器补查：补充 Muse Wonder 评测成绩 12 项、使用渠道和能力；功能矩阵新增记忆、编程、API",
          "src": {
            "url": "https://research.meta.ai/blog/muse-wonder",
            "checked": "2026-10-23",
            "label": "研究博客"
          }
        },
        {
          "company": "openai",
          "type": "功能变化",
          "text": "浏览器补查：功能矩阵「联网搜索」由未查到改为有",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-10-23",
            "label": "套餐页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "其他",
          "text": "浏览器补查：补充 Gemini 4 Argon 评测成绩 4 项；功能矩阵新增语音对话",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
            "checked": "2026-10-23",
            "label": "发布页"
          }
        },
        {
          "company": "anthropic",
          "type": "价格变化",
          "text": "浏览器补查：补充 Team 和 Enterprise 席位价格",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-10-23",
            "label": "套餐页"
          }
        },
        {
          "company": "mistral",
          "type": "其他",
          "text": "浏览器补查：Mistral Large 4 补充上下文 100 万 token、缓存价格；参数以官方文档 1.05 万亿为准",
          "src": {
            "url": "https://docs.mistral.ai/models/mistral-large-4-0",
            "checked": "2026-10-23",
            "label": "模型文档"
          }
        },
        {
          "company": "moonshot",
          "type": "价格变化",
          "text": "浏览器补查：补充 Kimi 会员 5 档价格和官方 API 价格（K3 输入 20 元、输出 100 元）",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        {
          "company": "moonshot",
          "type": "功能变化",
          "text": "浏览器补查：功能矩阵新增深度研究、文件分析、记忆、编程、电脑操作",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-10-23",
            "label": "会员价格"
          }
        },
        {
          "company": "zhipu",
          "type": "价格变化",
          "text": "浏览器补查：补充 GLM Coding Plan 三档价格；功能矩阵新增深度研究、文件分析、企业版",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-10-23",
            "label": "GLM Coding Plan"
          }
        },
        {
          "company": "minimax",
          "type": "新模型",
          "text": "新主力模型 MiniMax M3.1 Flash（10 月 19 日正式发布），M3 归入历史版本，参数保留",
          "src": {
            "url": "https://www.minimax.io/blog/minimax-m31f",
            "checked": "2026-10-23",
            "label": "发布页"
          }
        },
        {
          "company": "minimax",
          "type": "新动态",
          "text": "新增 4 条动态：M3.1 Flash、MiniMax Code 小程序、Music 3.0、H3",
          "src": {
            "url": "https://www.minimax.io/",
            "checked": "2026-10-23"
          }
        },
        {
          "company": "minimax",
          "type": "价格变化",
          "text": "补充 M Plan 会员 3 档价格和 M3.1 Flash API 价格",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-10-23",
            "label": "M Plan"
          }
        },
        {
          "company": "doubao",
          "type": "其他",
          "text": "浏览器补查：豆包 2.1 Pro 补充上下文、最大输出、推理和工具能力；发布日期精确到 2026-06-28",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-10-23",
            "label": "方舟模型列表"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "浏览器补查：补充个人产品（千问网页、电脑端、App）和企业产品；功能矩阵新增文件分析",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-23",
            "label": "千问官网"
          }
        }
      ]
    },
    {
      "date": "2026-10-24",
      "by": "每日自动更新",
      "items": [
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 23 日与波兰国家研究机构 NASK 宣布合作，开展 AI 安全与安全技术研究",
          "src": {
            "url": "https://openai.com/index/openai-nask-ai-safety-security-partnership",
            "checked": "2026-10-24",
            "label": "官方 RSS"
          }
        },
        {
          "company": "meta",
          "type": "新模型",
          "text": "补录 10 月 15 日发布的开放权重模型 Muse Spark Open（8160 亿总参数、420 亿激活）",
          "src": {
            "url": "https://research.meta.ai/blog/muse-spark-open",
            "checked": "2026-10-24",
            "label": "研究博客"
          }
        },
        {
          "company": "meta",
          "type": "功能变化",
          "text": "功能矩阵「开放权重」说明补充 Muse Spark Open，仍为部分",
          "src": {
            "url": "https://research.meta.ai/blog/muse-spark-open",
            "checked": "2026-10-24",
            "label": "研究博客"
          }
        },
        {
          "company": "qwen",
          "type": "新模型",
          "text": "补录 8 月 26 日上架百炼的 Qwen3.8-Flash",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
            "checked": "2026-10-24",
            "label": "百炼模型上架记录"
          }
        },
        {
          "company": "qwen",
          "type": "功能变化",
          "text": "周六补查：功能矩阵「联网搜索」「深度研究」由未查到改为有",
          "src": {
            "url": "https://www.qianwen.com/",
            "checked": "2026-10-24",
            "label": "千问网页版"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "周六补查：Qwen3.8-Max 工具调用由未查到改为支持",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
            "checked": "2026-10-24",
            "label": "百炼模型上架记录"
          }
        }
      ]
    },
    {
      "date": "2026-11-06",
      "by": "每日自动更新",
      "items": [
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 26 日：发布 GPT-6.1 Terra，主打高性价比电脑操作",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-1-terra",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 27 日：与 Oracle 扩大合作，将其应用接入 ChatGPT",
          "src": {
            "url": "https://openai.com/index/oracle-apps-in-chatgpt",
            "checked": "2026-11-06",
            "label": "官方 RSS"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "10 月 28 日：与 ServiceNow 扩大企业工作流合作",
          "src": {
            "url": "https://openai.com/index/openai-servicenow-partnership-expansion",
            "checked": "2026-11-06",
            "label": "官方 RSS"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 2 日：任命 Dan Driscoll 为国家安全现代化高级顾问",
          "src": {
            "url": "https://openai.com/index/dan-driscoll-joins-openai",
            "checked": "2026-11-06",
            "label": "官方 RSS"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 3 日：任命 Jill Hazelbaker 为首席企业事务官",
          "src": {
            "url": "https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer",
            "checked": "2026-11-06",
            "label": "官方 RSS"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 4 日：发布图像模型 Images 2.6，生成速度提升 50%",
          "src": {
            "url": "https://openai.com/index/introducing-images-2-6",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 4 日：宣布收购 Pierre，扩展 Codex 代码工具",
          "src": {
            "url": "https://openai.com/index/openai-to-acquire-pierre",
            "checked": "2026-11-06",
            "label": "官方公告"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 5 日：发布网络安全模型 GPT-6 Cyber",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-cyber",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "openai",
          "type": "新模型",
          "text": "新增 GPT-6 Cyber（11 月 5 日）；OpenAI 仍称 GPT-6 Astra 为能力最强的前沿模型，主力不变",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-cyber",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "openai",
          "type": "新模型",
          "text": "新增 GPT-6.1 Terra（10 月 26 日）",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-1-terra",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "openai",
          "type": "价格变化",
          "text": "API 价格新增 GPT-6.1 Terra：输入 1 美元、输出 5 美元、缓存 0.05 美元（每百万 token）",
          "src": {
            "url": "https://openai.com/index/introducing-gpt-6-1-terra",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "10 月 26 日：向 SEC 提交 S-1，拟在纳斯达克上市，代码 ANT",
          "src": {
            "url": "https://www.anthropic.com/news/s1-sec",
            "checked": "2026-11-06",
            "label": "官方公告"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "10 月 27 日：扩大与美国 GSA 合作，政府采购打六折",
          "src": {
            "url": "https://www.anthropic.com/news/expanding-partnership-gsa",
            "checked": "2026-11-06",
            "label": "官方公告"
          }
        },
        {
          "company": "google-deepmind",
          "type": "新动态",
          "text": "10 月 27 日：公布世界模型 Genie 4，向受信测试者开放",
          "src": {
            "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "新动态",
          "text": "10 月 28 日：公布最强模型 Gemini 4 Carbon，分阶段开放",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "新动态",
          "text": "11 月 5 日：发布 Gemini Omni 1.2 Flash",
          "src": {
            "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "新模型",
          "text": "主力由 Gemini 4 Argon 换为 Gemini 4 Carbon（官方称最强模型）；Carbon 目前只向部分网络防御者开放，Argon 仍是公开可用的旗舰",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "价格变化",
          "text": "API 价格新增 Gemini 4 Carbon 首发价：输入 2 美元、输出 10 美元、缓存 0.10 美元（每百万 token）",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "价格变化",
          "text": "Gemini Omni 1.2 Flash 720p 视频每秒 0.07 美元，较 1.1 降价 30%",
          "src": {
            "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        },
        {
          "company": "meta",
          "type": "新动态",
          "text": "10 月 28 日：Muse 智能体在新加坡上线",
          "src": {
            "url": "https://about.fb.com/news/2026/10/muse-is-now-available-in-singapore-the-worlds-first-personal-ai-agent-built-for-everyone/",
            "checked": "2026-11-06",
            "label": "官方新闻"
          }
        },
        {
          "company": "meta",
          "type": "新动态",
          "text": "10 月 28 日：与美国五所大学合作加速医学和科学研究",
          "src": {
            "url": "https://about.fb.com/news/2026/10/meta-partners-with-five-us-universities-to-accelerate-medical-and-scientific-breakthroughs/",
            "checked": "2026-11-06",
            "label": "官方新闻"
          }
        },
        {
          "company": "meta",
          "type": "新动态",
          "text": "11 月 5 日：Muse 应用上线语音对话和表情头像",
          "src": {
            "url": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
            "checked": "2026-11-06",
            "label": "官方新闻"
          }
        },
        {
          "company": "meta",
          "type": "功能变化",
          "text": "功能矩阵「语音对话」由未查到改为有",
          "src": {
            "url": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
            "checked": "2026-11-06",
            "label": "官方新闻"
          }
        },
        {
          "company": "mistral",
          "type": "新动态",
          "text": "10 月 29 日：开放 Large 4 权重，API 降价约五成",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4-oss/",
            "checked": "2026-11-06",
            "label": "开放权重公告"
          }
        },
        {
          "company": "mistral",
          "type": "新动态",
          "text": "11 月 5 日：Mistral Studio 新增托管智能体和应用",
          "src": {
            "url": "https://mistral.ai/news/build-with-studio/",
            "checked": "2026-11-06",
            "label": "官方博客"
          }
        },
        {
          "company": "mistral",
          "type": "价格变化",
          "text": "Mistral Large 4 从输入 1.36 / 输出 4.18 / 缓存 0.14 美元降到 0.70 / 2.10 / 0.07 美元（每百万 token）",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4-oss/",
            "checked": "2026-11-06",
            "label": "开放权重公告"
          }
        },
        {
          "company": "mistral",
          "type": "其他",
          "text": "Mistral Large 4 更新为开放权重版：补上许可证和推理模式，更新评测成绩和使用渠道",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4-oss/",
            "checked": "2026-11-06",
            "label": "开放权重公告"
          }
        },
        {
          "company": "moonshot",
          "type": "新动态",
          "text": "10 月 24 日：发布 Kimi K3.1 Pro 及其高速版",
          "src": {
            "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
            "checked": "2026-11-06",
            "label": "技术博客"
          }
        },
        {
          "company": "moonshot",
          "type": "新模型",
          "text": "主力由 Kimi K3 换为 Kimi K3.1 Pro（官方称能力最强的 3T 级开放权重模型）",
          "src": {
            "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
            "checked": "2026-11-06",
            "label": "技术博客"
          }
        },
        {
          "company": "moonshot",
          "type": "价格变化",
          "text": "API 价格新增 K3.1 Pro（输入 13 元、输出 68 元）和 Highspeed 版（输入 26 元、输出 136 元），K3 价格不变；会员价不变",
          "src": {
            "url": "https://www.kimi.com/membership/pricing?tab=api",
            "checked": "2026-11-06",
            "label": "官方 API 价格"
          }
        },
        {
          "company": "moonshot",
          "type": "其他",
          "text": "K2 系列 10 月 31 日起不再向新用户开放，计划 2026 年 12 月底全部下线",
          "src": {
            "url": "https://platform.kimi.ai/docs/pricing/chat",
            "checked": "2026-11-06",
            "label": "API 价格文档"
          }
        },
        {
          "company": "qwen",
          "type": "新动态",
          "text": "10 月 27 日：百炼上架实时语音对话模型 qwen-audio-3.1-realtime-flash",
          "src": {
            "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
            "checked": "2026-11-06",
            "label": "百炼模型上架记录"
          }
        },
        {
          "company": "zhipu",
          "type": "其他",
          "text": "周五补查：GLM-5.3 许可证和架构已填写",
          "src": {
            "url": "https://huggingface.co/zai-org/GLM-5.3/raw/main/LICENSE",
            "checked": "2026-11-06",
            "label": "许可证"
          }
        },
        {
          "company": "zhipu",
          "type": "新模型",
          "text": "补录 GLM-5.3-Flash（8 月 26 日发布）",
          "src": {
            "url": "https://docs.z.ai/release-notes/new-released",
            "checked": "2026-11-06",
            "label": "官方更新记录"
          }
        },
        {
          "company": "zhipu",
          "type": "功能变化",
          "text": "周五补查：功能矩阵「联网搜索」「图像生成」「视频生成」由未查到改为有",
          "src": {
            "url": "https://docs.z.ai/guides/overview/pricing",
            "checked": "2026-11-06",
            "label": "API 价格"
          }
        },
        {
          "company": "minimax",
          "type": "其他",
          "text": "周五补查：M3 缓存价和评测成绩、M3.1 Flash 推理模式已填写；M Plan 去掉已过期的 10 月优惠说明；API 价格来源改为官方价格页",
          "src": {
            "url": "https://platform.minimax.io/docs/pricing/overview",
            "checked": "2026-11-06",
            "label": "官方 API 价格"
          }
        }
      ]
    },
    {
      "date": "2026-11-06",
      "by": "V3.0 首次收集",
      "items": [
        {
          "type": "其他",
          "text": "新增新词雷达，首批收录 25 个词条",
          "src": null
        },
        {
          "type": "其他",
          "text": "新增 10 条行业事件，包括扣子企业版下线、美国联邦机构移除 DeepSeek",
          "src": {
            "url": "https://docs.coze.cn/enterprise-plan-discontinuation-notice",
            "checked": "2026-11-06",
            "label": "官方公告"
          }
        },
        {
          "type": "其他",
          "text": "合并重复的 M3.1 Flash 动态；部分动态改为收购、定价、标准类型并贴上方向标签",
          "src": null
        }
      ]
    },
    {
      "date": "2026-11-06",
      "by": "V3.1 首次收集",
      "items": [
        {
          "type": "其他",
          "text": "新增能力地图：8 条赛道、35 个产品，含范围外公司的可灵（快手）",
          "src": {
            "url": "https://kling.ai/release-note/release-notes/Kling_4?type=dialog",
            "checked": "2026-11-06",
            "label": "Kling 4.0 说明"
          }
        },
        {
          "type": "新词",
          "text": "新词雷达增加「架构模式」分类，收录 ReAct、Plan-and-Execute、多智能体",
          "src": {
            "url": "https://arxiv.org/abs/2210.03629",
            "checked": "2026-11-06",
            "label": "原始论文"
          }
        }
      ]
    },
    {
      "date": "2026-11-07",
      "by": "每日自动更新",
      "items": [
        {
          "company": "meta",
          "type": "新动态",
          "text": "11 月 6 日：Muse 应用推出可自定义的空间 spaces",
          "src": {
            "url": "https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/",
            "checked": "2026-11-07",
            "label": "Meta"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 6 日：与 Hacktron 合作查找自身系统漏洞",
          "src": {
            "url": "https://openai.com/index/partnering-with-hacktron",
            "checked": "2026-11-07",
            "label": "OpenAI"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 6 日：发布湿实验智能体评测基准 BioBasicsBench",
          "src": {
            "url": "https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science",
            "checked": "2026-11-07",
            "label": "OpenAI"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "11 月 4 日：TeraWulf 公告 Google 为约 190 亿美元 Anthropic 租约的融资提供信用担保",
          "src": {
            "url": "https://investors.terawulf.com/news-events/press-releases/detail/148/terawulf-secures-google-credit-backstop-for-project-financing-in-support-of-19-billion-anthropic-lease-executes-definitive-fluor-epc-agreement",
            "checked": "2026-11-07",
            "label": "TeraWulf 公告"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "11 月 2 日：Messages API 推出消息线程测试版（补录）",
          "src": {
            "url": "https://platform.claude.com/docs/en/release-notes/overview",
            "checked": "2026-11-07",
            "label": "Claude 平台更新记录"
          }
        },
        {
          "company": "deepseek",
          "type": "新动态",
          "text": "10 月 31 日：开源主动式编程智能体研究原型 Super-agent（补录）",
          "src": {
            "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
            "checked": "2026-11-07",
            "label": "DeepSeek GitHub"
          }
        },
        {
          "company": "openai",
          "type": "行业事件",
          "text": "11 月 5 日：发布全国社区公约和算力园区政策蓝图",
          "src": {
            "url": "https://openai.com/index/setting-new-standard-responsible-ai-infrastructure",
            "checked": "2026-11-07",
            "label": "OpenAI"
          }
        },
        {
          "company": "google-deepmind",
          "type": "行业事件",
          "text": "11 月 3 日：欧盟法院顾问意见称 Gemini 实时使用新闻或侵权，意见不具约束力",
          "src": {
            "url": "https://ipwatchdog.com/2026/11/04/cjeu-advocate-general-outlines-copyright-limits-for-ai-news-summaries/",
            "checked": "2026-11-07",
            "label": "IPWatchdog"
          }
        },
        {
          "company": "anthropic",
          "type": "行业事件",
          "text": "10 月 30 日：Opus 4.8 快速模式将于 11 月 30 日移除（补录）",
          "src": {
            "url": "https://platform.claude.com/docs/en/release-notes/overview",
            "checked": "2026-11-07",
            "label": "Claude 平台更新记录"
          }
        },
        {
          "company": "openai",
          "type": "行业事件",
          "text": "10 月 14 日通知：GPT-4o、GPT-4.1 等 2027 年 1 月 14 日停用（补录）",
          "src": {
            "url": "https://platform.openai.com/docs/deprecations",
            "checked": "2026-11-07",
            "label": "OpenAI 弃用说明"
          }
        },
        {
          "type": "新词",
          "text": "新增「AI 训练偏好信号」，状态为新出现；四家公司支持，尚未成为正式标准",
          "src": {
            "url": "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/",
            "checked": "2026-11-07",
            "label": "IETF 草案"
          }
        },
        {
          "company": "deepseek",
          "type": "产品变化",
          "text": "能力地图「编程智能体」新增 DeepSeek Harness（开发者预览版）",
          "src": {
            "url": "https://github.com/deepseek-ai/deepseek-harness",
            "checked": "2026-11-07",
            "label": "DeepSeek GitHub"
          }
        },
        {
          "company": "qwen",
          "type": "价格变化",
          "text": "补查：千问 App 办公助理会员 19、49、128 元 / 月（8 月上线，此前未收录）",
          "src": {
            "url": "https://www.36kr.com/p/3933525177653128",
            "checked": "2026-11-07",
            "label": "36 氪"
          }
        },
        {
          "company": "doubao",
          "type": "价格变化",
          "text": "补查：豆包专业版 68、200、500 元 / 月（6 月上线，此前未收录）",
          "src": {
            "url": "https://news.bjd.com.cn/2026/06/24/11824240.shtml",
            "checked": "2026-11-07",
            "label": "北京日报"
          }
        },
        {
          "company": "qwen",
          "type": "功能变化",
          "text": "补查：电脑操作、记忆、企业版由未查到改为有",
          "src": {
            "url": "https://www.36kr.com/p/3933525177653128",
            "checked": "2026-11-07",
            "label": "36 氪"
          }
        },
        {
          "company": "doubao",
          "type": "功能变化",
          "text": "补查：联网搜索、深度研究、文件分析、记忆由未查到改为有；电脑操作由部分改为有",
          "src": {
            "url": "https://news.bjd.com.cn/2026/06/24/11824240.shtml",
            "checked": "2026-11-07",
            "label": "北京日报"
          }
        }
      ]
    },
    {
      "date": "2026-11-07",
      "by": "手动添加",
      "items": [
        {
          "type": "新词",
          "text": "新词雷达新增「开发框架」分类，收录 LangChain、LangGraph",
          "src": {
            "url": "https://docs.langchain.com/oss/python/langgraph/overview",
            "checked": "2026-11-07",
            "label": "LangGraph 文档"
          }
        }
      ]
    },
    {
      "date": "2026-11-08",
      "by": "每日自动更新",
      "items": [
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "11 月 6 日：发布智能体记忆研究，介绍用 dreaming 整理记忆",
          "src": {
            "url": "https://www.anthropic.com/research/components-of-agent-memory",
            "checked": "2026-11-08",
            "label": "Anthropic"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 6 日：据彭博报道，新一轮首笔 110 亿美元融资到账，估值 1.25 万亿美元；整轮最高 200 亿美元，融资信息字段待官方确认后再改",
          "src": {
            "url": "https://news.qq.com/rain/a/20261107A036VH00",
            "checked": "2026-11-08",
            "label": "腾讯新闻（援引彭博）"
          }
        },
        {
          "company": "qwen",
          "type": "新动态",
          "text": "11 月 4 日：千问支持的国行 Apple 智能开放开发者测试（补录）",
          "src": {
            "url": "https://finance.sina.com.cn/jjxw/2026-11-07/doc-inixwnyk5120664.shtml",
            "checked": "2026-11-08",
            "label": "新浪财经"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "11 月 3 日：Mythos 5、Opus 4.7、Sonnet 4.6 生成的文本加入 Anthropic 文本水印（补录）",
          "src": {
            "url": "https://platform.claude.com/docs/en/release-notes/overview",
            "checked": "2026-11-08",
            "label": "Claude 平台更新记录"
          }
        },
        {
          "company": "anthropic",
          "type": "行业事件",
          "text": "11 月 6 日：美国法官裁定 Claude Max「5 倍、20 倍用量」宣传相关的部分诉讼主张可继续审理",
          "src": {
            "url": "https://thenextweb.com/news/anthropic-claude-max-lawsuit-ruling-usage-claims",
            "checked": "2026-11-08",
            "label": "The Next Web"
          }
        },
        {
          "company": "deepseek",
          "type": "行业事件",
          "text": "11 月 7 日：网页和 API 部分中断，已恢复；11 月 3 日也发生过一次",
          "src": {
            "url": "https://status.deepseek.com/incidents/7219383236287",
            "checked": "2026-11-08",
            "label": "DeepSeek 状态页"
          }
        },
        {
          "company": "xai",
          "type": "行业事件",
          "text": "11 月 2 日：停用 grok-imagine-image-quality 和 image-pro，请求改由 image-2.0 低质量档处理，价格更低（补录）",
          "src": {
            "url": "https://docs.x.ai/docs/release-notes",
            "checked": "2026-11-08",
            "label": "xAI 更新记录"
          }
        },
        {
          "type": "新词",
          "text": "新增「Dreaming（智能体做梦）」，状态为新出现；Anthropic 提供 Dreams 功能（研究预览）",
          "src": {
            "url": "https://www.anthropic.com/research/components-of-agent-memory",
            "checked": "2026-11-08",
            "label": "Anthropic"
          }
        },
        {
          "company": "meta",
          "type": "产品变化",
          "text": "周日补查个人智能体赛道：Muse 价格入口填为「大部分功能免费，另有订阅档位」",
          "src": {
            "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
            "checked": "2026-11-08",
            "label": "Meta"
          }
        },
        {
          "company": "anthropic",
          "type": "产品变化",
          "text": "周日补查个人智能体赛道：Claude Duet 填上运行位置、记忆",
          "src": {
            "url": "https://claude.com/blog/claude-duet",
            "checked": "2026-11-08",
            "label": "Anthropic"
          }
        },
        {
          "type": "产品变化",
          "text": "周日补查个人智能体赛道：OpenClaw 填上能操作什么、记忆、主动与定时、操作确认、接入渠道（官方文档）",
          "src": {
            "url": "https://github.com/openclaw/openclaw",
            "checked": "2026-11-08",
            "label": "OpenClaw GitHub"
          }
        }
      ]
    },
    {
      "date": "2026-11-09",
      "by": "每日自动更新",
      "items": [
        {
          "company": "zhipu",
          "type": "新动态",
          "text": "11 月 6 日：与中国移动云公司签署合作协议，GLM 系列接入移动云 MaaS 平台，共建 AI Coding 产品",
          "src": {
            "url": "https://finance.sina.com.cn/tech/digi/2026-11-08/doc-inixzpas7009595.shtml",
            "checked": "2026-11-09",
            "label": "新浪科技（IT之家）"
          }
        },
        {
          "company": "anthropic",
          "type": "新动态",
          "text": "11 月 8 日：据 FT 报道，约 34 亿美元从 OnePWR 买下 1.7GW 燃气发电机订单（9 月下旬成交），Anthropic 未回应",
          "src": {
            "url": "https://www.thehindubusinessline.com/info-tech/anthropic-strikes-34-billion-deal-for-data-centre-generators/article71680927.ece",
            "checked": "2026-11-09",
            "label": "BusinessLine（路透转述 FT）"
          }
        },
        {
          "company": "anthropic",
          "type": "价格变化",
          "text": "套餐页现为 Max 100 美元（5 倍用量）和新档 Ultra 200 美元（10 倍周用量、无 5 小时限额）；原记录为 Max 100–200 美元",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-11-09",
            "label": "Claude 套餐页"
          }
        },
        {
          "company": "anthropic",
          "type": "价格变化",
          "text": "周一补查：填上 Fable 5.1、Sonnet 5.5、Haiku 5.5 的缓存读取价格",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/pricing",
            "checked": "2026-11-09",
            "label": "Claude 价格文档"
          }
        },
        {
          "company": "anthropic",
          "type": "功能变化",
          "text": "周一补查：图像生成填为「无」（当前模型只输出文本）",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-11-09",
            "label": "Claude 模型文档"
          }
        },
        {
          "company": "anthropic",
          "type": "其他",
          "text": "周一补查：补上 Opus 4.6、Opus 4.5、Sonnet 4.5、3.7 Sonnet、3.5 Sonnet、Claude 2 的简介，来源换成官方发布页",
          "src": {
            "url": "https://www.anthropic.com/news",
            "checked": "2026-11-09",
            "label": "Anthropic"
          }
        },
        {
          "company": "openai",
          "type": "功能变化",
          "text": "周一补查：视频生成填为「无」（Sora 已停用），开放权重填为「有」（gpt-oss）",
          "src": {
            "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
            "checked": "2026-11-09",
            "label": "OpenAI 帮助中心"
          }
        }
      ]
    },
    {
      "date": "2026-11-10",
      "by": "每日自动更新",
      "items": [
        {
          "company": "anthropic",
          "type": "新模型",
          "text": "11 月 9 日：发布 Claude Fable 5.2 和 Mythos 5.2（同一底层模型），官方称最强；价格 8 / 40 美元，比 Fable 5.1 低，输出最多快 30%",
          "src": {
            "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2",
            "checked": "2026-11-10",
            "label": "发布页"
          }
        },
        {
          "company": "anthropic",
          "type": "其他",
          "text": "当前主力由 Opus 5.5 改为 Fable 5.2（官方称「最强模型」）；Opus 5.5 的详细参数保留存档。官方仍推荐多数任务先用 Opus 5.5",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-11-10",
            "label": "模型文档"
          }
        },
        {
          "company": "anthropic",
          "type": "价格变化",
          "text": "API 价格新增 Fable 5.2：输入 8 美元、输出 40 美元、缓存读取 0.20 美元 / 百万 token；快速模式 16 / 80 美元",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/pricing",
            "checked": "2026-11-10",
            "label": "Claude 价格文档"
          }
        },
        {
          "company": "openai",
          "type": "新动态",
          "text": "11 月 9 日：ChatGPT Enterprise 上架 AWS Marketplace，企业可走 AWS 采购和账单",
          "src": {
            "url": "https://openai.com/index/chatgpt-enterprise-aws-marketplace",
            "checked": "2026-11-10",
            "label": "OpenAI"
          }
        },
        {
          "company": "doubao",
          "type": "新动态",
          "text": "11 月 9 日：发布图像模型 Seedream 5.5，已上线豆包、豆包工作、即梦，API 即将上线火山方舟",
          "src": {
            "url": "https://www.163.com/tech/article/LBAFFIOE00098IEO.html",
            "checked": "2026-11-10",
            "label": "网易科技"
          }
        },
        {
          "company": "doubao",
          "type": "产品变化",
          "text": "能力地图：Seedream 更新到 5.5，图像编辑、使用入口随之更新",
          "src": {
            "url": "https://seed.bytedance.com/zh/seedream5_5",
            "checked": "2026-11-10",
            "label": "字节跳动 Seed"
          }
        },
        {
          "company": "qwen",
          "type": "新动态",
          "text": "11 月 9 日：千问办公 2.0 发布，推出多人与 Agent 协作、自动任务、人机共创",
          "src": {
            "url": "https://docs.qwenwork.cn/release-notes/desktop",
            "checked": "2026-11-10",
            "label": "千问办公官方更新日志"
          }
        },
        {
          "company": "qwen",
          "type": "产品变化",
          "text": "能力地图：办公智能体赛道新增「千问办公」（和已收录的千问工作助理是两款产品）",
          "src": {
            "url": "https://docs.qwenwork.cn/release-notes/desktop",
            "checked": "2026-11-10",
            "label": "千问办公官方更新日志"
          }
        },
        {
          "company": "deepseek",
          "type": "新动态",
          "text": "11 月 8 日：DeepSeek Harness 公布插件生态进展（约 3.5 万个社区插件），筹备官方插件市场和开发者扶持计划（补录）",
          "src": {
            "url": "https://www.sohu.com/a/1099205338_122980439",
            "checked": "2026-11-10",
            "label": "搜狐",
            "official": false
          }
        },
        {
          "company": "google-deepmind",
          "type": "价格变化",
          "text": "周二补查：填上 Google AI Plus、AI Pro 的年付价格（99.99 美元 / 年、199.99 美元 / 年）",
          "src": {
            "url": "https://one.google.com/about/plans",
            "checked": "2026-11-10",
            "label": "Google One 方案页"
          }
        },
        {
          "company": "google-deepmind",
          "type": "功能变化",
          "text": "周二补查：记忆填为「有」（记住过往对话），企业版填为「有」（Gemini for Business）",
          "src": {
            "url": "https://cloud.google.com/gemini-enterprise",
            "checked": "2026-11-10",
            "label": "Google Cloud"
          }
        },
        {
          "company": "meta",
          "type": "功能变化",
          "text": "周二补查：图像生成填为「有」（Muse Image）",
          "src": {
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
            "checked": "2026-11-10",
            "label": "Meta 研究博客"
          }
        }
      ]
    },
    {
      "date": "2026-11-10",
      "by": "手动修正来源",
      "items": [
        {
          "company": "qwen",
          "type": "其他",
          "text": "千问办公 2.0 改用官方更新日志作为来源",
          "src": {
            "url": "https://docs.qwenwork.cn/release-notes/desktop",
            "checked": "2026-11-10",
            "label": "千问办公官方更新日志"
          }
        },
        {
          "company": "deepseek",
          "type": "其他",
          "text": "DeepSeek Harness 插件市场一条：日期改为 11 月 5 日（媒体说法不一，附两个来源）；官网报错、官方 X 需登录，暂无可打开的官方原文",
          "src": null
        },
        {
          "type": "其他",
          "text": "新浪科技（IT之家）、BusinessLine 等主流媒体不再标「非官方来源」",
          "src": null
        }
      ]
    },
    {
      "date": "2026-11-10",
      "by": "V3.3 来源核查",
      "items": [
        {
          "company": "deepseek",
          "type": "其他",
          "text": "「开源内部推理框架 DeepInfer」补充官方来源：DeepSeek GitHub",
          "src": {
            "url": "https://github.com/deepseek-ai/DeepInfer",
            "checked": "2026-11-10",
            "label": "DeepSeek GitHub"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "「发布图像模型 Qwen-Image-2.1-Turbo」补充官方来源：官方模型卡",
          "src": {
            "url": "https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo",
            "checked": "2026-11-10",
            "label": "官方模型卡"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "「云栖大会公布 Qwen 4 系列，尚未正式上线」补充官方来源：阿里巴巴集团新闻稿",
          "src": {
            "url": "https://www.alibabagroup.com/zh-CN/document-2041268239081668608",
            "checked": "2026-11-10",
            "label": "阿里巴巴集团新闻稿"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "「开源 7B 图像生成与编辑模型 Qwen-Image-2.1」补充官方来源：官方模型卡",
          "src": {
            "url": "https://huggingface.co/Qwen/Qwen-Image-2.1",
            "checked": "2026-11-10",
            "label": "官方模型卡"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "「发布 Qwen3.8-27B，开放 Max 权重」补充官方来源：官方模型卡、开放的 Max 权重",
          "src": {
            "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
            "checked": "2026-11-10",
            "label": "官方模型卡"
          }
        },
        {
          "company": "zhipu",
          "type": "其他",
          "text": "「Cursor 上线 GLM-5.3 系列模型」补充官方来源：Cursor 模型文档",
          "src": {
            "url": "https://cursor.com/docs/models/glm-5-3",
            "checked": "2026-11-10",
            "label": "Cursor 模型文档"
          }
        },
        {
          "company": "zhipu",
          "type": "其他",
          "text": "「发布 GLM-5.3，主打编程和网络安全」补充官方来源：智谱官方文档",
          "src": {
            "url": "https://docs.z.ai/guides/llm/glm-5.3",
            "checked": "2026-11-10",
            "label": "智谱官方文档"
          }
        },
        {
          "company": "doubao",
          "type": "其他",
          "text": "「Seed 成立对齐与风险预备部门，全球招聘研究员」补充官方来源：Seed 官网招聘页",
          "src": {
            "url": "https://seed.bytedance.com/zh/career",
            "checked": "2026-11-10",
            "label": "Seed 官网招聘页"
          }
        },
        {
          "company": "deepseek",
          "type": "其他",
          "text": "「美国要求联邦民事机构移除 DeepSeek 产品」补充官方来源：美国《联邦公报》2026-21447",
          "src": {
            "url": "https://www.federalregister.gov/documents/2026/10/20/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive",
            "checked": "2026-11-10",
            "label": "美国《联邦公报》2026-21447"
          }
        },
        {
          "company": "google-deepmind",
          "type": "其他",
          "text": "「欧盟法院顾问称 Gemini 实时用新闻或侵权」补充官方来源：欧盟法院新闻稿",
          "src": {
            "url": "https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260155en.pdf",
            "checked": "2026-11-10",
            "label": "欧盟法院新闻稿"
          }
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "「国行 Apple 智能接入千问，开放开发者测试」补充官方来源：Apple 中国新闻稿",
          "src": {
            "url": "https://www.apple.com.cn/newsroom/2026/10/apple-intelligence-features-are-coming-to-users-in-china/",
            "checked": "2026-11-10",
            "label": "Apple 中国新闻稿"
          }
        },
        {
          "company": "anthropic",
          "type": "其他",
          "text": "TeraWulf 公告、IETF 草案登记为官方来源（相关方官网）"
        },
        {
          "company": null,
          "type": "其他",
          "text": "Nano Banana、Qwen-Image、SeedMusic 产品页补充官方来源；OpenClaw 的 GitHub 和文档站登记为官方来源"
        },
        {
          "company": "qwen",
          "type": "其他",
          "text": "Qwen3.8-Max 的基本信息和参数改用官方模型卡，参数改为 2.4 万亿 / 激活 950 亿",
          "src": {
            "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
            "checked": "2026-11-10",
            "label": "官方模型卡（开源版）"
          }
        },
        {
          "company": "moonshot",
          "type": "其他",
          "text": "Kimi K3 的基本信息、参数、能力改用官方模型卡和许可证；Kimi K3.1 Pro 的 API 文档登记为官方来源",
          "src": {
            "url": "https://huggingface.co/moonshotai/Kimi-K3",
            "checked": "2026-11-10",
            "label": "官方模型卡"
          }
        },
        {
          "company": "minimax",
          "type": "其他",
          "text": "MiniMax M3 改用官方模型卡，补充推理模式和注意力架构",
          "src": {
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
            "checked": "2026-11-10",
            "label": "官方模型卡"
          }
        },
        {
          "company": null,
          "type": "其他",
          "text": "新增「来源核查」：91 个历代模型标为「暂未找到」，每日任务每天补查最多 5 条"
        }
      ]
    }
  ],
  "terms": [
    {
      "id": "proactive-agent",
      "name": "主动式智能体",
      "aliases": [
        "Proactive Agent",
        "Dot",
        "Claude Duet"
      ],
      "oneLine": "不等你开口，自己发现要做的事，并在关键操作前找你确认的智能体",
      "status": "新出现",
      "statusReason": "2026 年 9–10 月 OpenAI 和 Anthropic 相继推出，首次出现不到 90 天",
      "statusSrc": [
        {
          "url": "https://openai.com/index/introducing-dots",
          "checked": "2026-11-06",
          "label": "OpenAI"
        },
        {
          "url": "https://claude.com/blog/claude-duet",
          "checked": "2026-11-06",
          "label": "Anthropic"
        }
      ],
      "firstSeen": "2026-09",
      "proposer": "OpenAI 推出 dots（本库查到的较早产品）",
      "directions": [
        "agent"
      ],
      "analogy": "普通智能体像等你下单的外卖员，主动式智能体像会提醒你开会、顺手把资料备好的助理。",
      "problem": "传统智能体要用户先想到任务、再发起对话。主动式智能体把「发现任务」这一步也接过去，可以在用户离开时继续工作。",
      "relations": [
        {
          "term": "agent",
          "text": "是智能体的一种，差别在于由谁发起任务"
        },
        {
          "term": "memory",
          "text": "要主动发现该做什么，通常依赖对用户的长期了解"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "dots 可以自己持续工作，提供操作审核和审批",
          "src": {
            "url": "https://openai.com/index/introducing-dots",
            "checked": "2026-11-06",
            "label": "OpenAI"
          }
        },
        {
          "company": "anthropic",
          "note": "Claude Duet 研究预览：主动提醒、离开后继续工作，代你操作前先确认",
          "src": {
            "url": "https://claude.com/blog/claude-duet",
            "checked": "2026-11-06",
            "label": "Anthropic"
          }
        },
        {
          "company": "deepseek",
          "note": "开源研究原型 Super-agent，只在被请求或团队规则允许时行动；官方说明不是正式产品",
          "src": {
            "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
            "checked": "2026-11-07",
            "label": "DeepSeek GitHub"
          }
        }
      ],
      "pmNote": "产品难点从「回答得好不好」变成「什么时候该打扰用户、什么时候必须确认」。评估时不能只看完成率，还要看打扰次数和用户是否信任。",
      "src": [
        {
          "url": "https://openai.com/index/introducing-dots",
          "checked": "2026-11-06",
          "label": "OpenAI"
        },
        {
          "url": "https://claude.com/blog/claude-duet",
          "checked": "2026-11-06",
          "label": "Anthropic"
        }
      ]
    },
    {
      "id": "harness",
      "name": "Harness",
      "aliases": [
        "Agent Harness",
        "Harness Engineering",
        "智能体运行框架"
      ],
      "oneLine": "包在模型外面的一整套运行环境：工具、上下文、循环、安全控制，都算 Harness",
      "status": "已普及",
      "statusReason": "本库收录公司中，DeepSeek、MiniMax 和字节扣子都已官方使用这个说法（达到 3 家规则）",
      "statusSrc": [
        {
          "url": "https://api-docs.deepseek.com/news/news261017",
          "checked": "2026-11-06",
          "label": "DeepSeek"
        },
        {
          "url": "https://www.minimax.io/",
          "checked": "2026-11-06",
          "label": "MiniMax"
        },
        {
          "url": "https://www.coze.cn/",
          "checked": "2026-11-06",
          "label": "扣子官网"
        }
      ],
      "firstSeen": "2026-02",
      "proposer": "常见说法是 Mitchell Hashimoto 首次使用，Viv Trivedy 给出定义，来源说法不一",
      "directions": [
        "agent"
      ],
      "analogy": "模型是马，Harness 是缰绳和马具：同一匹马，装备不同，能干的活也不一样。",
      "problem": "光有强模型做不成智能体。模型要有记忆、能用工具、出错能重试、不能越权，这些都靠模型之外的系统来保证。",
      "relations": [
        {
          "term": "agent",
          "text": "常见公式：Agent = 模型 + Harness"
        },
        {
          "term": "context-engineering",
          "text": "上下文管理是 Harness 的一部分"
        },
        {
          "term": "skills",
          "text": "Harness 负责加载和运行 Skill"
        },
        {
          "term": "mcp",
          "text": "Harness 通过 MCP 这类协议连接工具"
        }
      ],
      "adopters": [
        {
          "company": "deepseek",
          "note": "推出 DeepSeek Harness，并针对它优化模型",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-11-06",
            "label": "DeepSeek"
          }
        },
        {
          "company": "minimax",
          "note": "官网称 MiniMax Code 是为自家模型打造的 coding harness",
          "src": {
            "url": "https://www.minimax.io/",
            "checked": "2026-11-06",
            "label": "MiniMax"
          }
        },
        {
          "company": "doubao",
          "note": "扣子官网提供「多种顶尖模型与 Agent Harness」按任务组合",
          "src": {
            "url": "https://www.coze.cn/",
            "checked": "2026-11-06",
            "label": "扣子官网"
          }
        }
      ],
      "pmNote": "模型差距缩小后，体验差异越来越多来自 Harness。竞品分析时不要只比模型分数，还要看工具、权限、恢复和长任务能力。",
      "src": [
        {
          "url": "https://addyosmani.com/blog/agent-harness-engineering/",
          "checked": "2026-11-06",
          "label": "Addy Osmani",
          "official": false
        },
        {
          "url": "https://arxiv.org/pdf/2609.00006",
          "checked": "2026-11-06",
          "label": "论文"
        }
      ]
    },
    {
      "id": "claw-agent",
      "name": "Claw 类个人智能体",
      "aliases": [
        "OpenClaw",
        "Kimi Claw",
        "AutoClaw",
        "龙虾"
      ],
      "oneLine": "因 OpenClaw 走红的智能体：跑在你的设备上，长期替你办事",
      "status": "升温中",
      "statusReason": "月之暗面、智谱已推出以 Claw 命名的产品（本库已核实 2 家）",
      "statusSrc": [
        {
          "url": "https://en.wikipedia.org/wiki/OpenClaw",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        },
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        },
        {
          "url": "https://z.ai/subscribe",
          "checked": "2026-11-06",
          "label": "Z.ai"
        }
      ],
      "firstSeen": "2025-11",
      "proposer": "Peter Steinberger 发布 OpenClaw 前身，2026 年 1 月改名 OpenClaw",
      "directions": [
        "agent",
        "safety"
      ],
      "analogy": "像给自己雇了一个住在电脑里的数字员工，而不是偶尔打开问问题的网页。",
      "problem": "网页聊天工具做不了长期、跨应用的事情。个人智能体能接入文件、消息和工具，持续代你办事，但权限也大得多。",
      "relations": [
        {
          "term": "agent",
          "text": "是智能体的产品形态之一"
        },
        {
          "term": "skills",
          "text": "常用 Skill 扩展能力"
        },
        {
          "term": "prompt-injection",
          "text": "权限大，被注入攻击的后果也更严重"
        }
      ],
      "adopters": [
        {
          "company": "moonshot",
          "note": "Kimi Claw，支持云端、安卓本地和桌面端",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-11-06",
            "label": "Kimi"
          }
        },
        {
          "company": "zhipu",
          "note": "AutoClaw 办公智能体",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-11-06",
            "label": "Z.ai"
          }
        }
      ],
      "pmNote": "这类产品的核心取舍是「能力越大，权限越大」。设计时要想清楚默认权限、操作确认和出错后的撤销方式。",
      "src": [
        {
          "url": "https://github.com/openclaw/openclaw",
          "checked": "2026-11-10",
          "label": "OpenClaw GitHub"
        },
        {
          "url": "https://en.wikipedia.org/wiki/OpenClaw",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ]
    },
    {
      "id": "adversarial-distillation",
      "name": "对抗性蒸馏",
      "aliases": [
        "模型蒸馏",
        "Model Distillation",
        "Distillation Attack"
      ],
      "oneLine": "大量调用别人的模型，用它的回答训练自己的模型，相当于偷师",
      "status": "升温中",
      "statusReason": "2026 年 Anthropic、OpenAI 相继公开指控或披露相关行为",
      "statusSrc": [
        {
          "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
          "checked": "2026-11-06",
          "label": "OpenAI"
        },
        {
          "url": "https://en.wikipedia.org/wiki/MiniMax_Group",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "firstSeen": "2026-02",
      "proposer": "Anthropic 公开指控多家公司（本库查到的较早事件）",
      "directions": [
        "safety"
      ],
      "analogy": "不偷菜谱，而是点几万份菜，靠尝味道把做法反推出来。",
      "problem": "蒸馏本身是常见技术，可以把大模型的知识转移到小模型。争议在于未经授权、以竞争为目的地大规模提取他人模型。",
      "relations": [
        {
          "term": "open-weights",
          "text": "两者都影响模型壁垒：一个主动开放，一个被动提取"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "披露并阻止一场协同蒸馏行动，最早活动见于 7 月第一周",
          "src": {
            "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
            "checked": "2026-11-06",
            "label": "OpenAI"
          }
        }
      ],
      "pmNote": "这件事影响 API 的产品策略：是否隐藏推理过程、如何限流和检测异常调用。开放程度和防护之间要做取舍。",
      "src": [
        {
          "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
          "checked": "2026-11-06",
          "label": "OpenAI"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Knowledge_distillation",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ]
    },
    {
      "id": "peak-pricing",
      "name": "分时定价",
      "aliases": [
        "高峰低谷价",
        "Off-peak Pricing",
        "错峰价"
      ],
      "oneLine": "API 按使用时段收费，低谷时段更便宜，引导用户错开高峰",
      "status": "升温中",
      "statusReason": "DeepSeek 在 V4 系列明确推出高峰和低谷价，低谷价便宜 50%",
      "statusSrc": {
        "url": "https://api-docs.deepseek.com/news/news260813",
        "checked": "2026-11-06",
        "label": "DeepSeek"
      },
      "firstSeen": "2026-08",
      "proposer": "DeepSeek V4 正式版（本库查到的记录，可能有更早的做法）",
      "directions": [
        "cost"
      ],
      "analogy": "和峰谷电价一个道理：半夜用电便宜，半夜跑任务也便宜。",
      "problem": "算力紧张时高峰容易拥堵，低谷又闲置。分时定价能把可以等待的任务移到低谷。",
      "relations": [
        {
          "term": "prompt-caching",
          "text": "都是降低 API 成本的手段"
        }
      ],
      "adopters": [
        {
          "company": "deepseek",
          "note": "低谷价是高峰价的一半",
          "src": {
            "url": "https://api-docs.deepseek.com/quick_start/pricing",
            "checked": "2026-11-06",
            "label": "DeepSeek 价格"
          }
        }
      ],
      "pmNote": "如果产品有可以延后的任务（如批量总结、夜间报告），可以把任务调度和定价结合起来，直接降低毛利压力。",
      "src": {
        "url": "https://api-docs.deepseek.com/news/news260813",
        "checked": "2026-11-06",
        "label": "DeepSeek"
      }
    },
    {
      "id": "generative-ui",
      "name": "生成式界面",
      "aliases": [
        "Generative UI",
        "Intelligent UI",
        "动态界面"
      ],
      "oneLine": "AI 不只回复文字，而是针对每个问题现场生成可操作的界面",
      "status": "升温中",
      "statusReason": "Google 2025 年推出，OpenAI 2026 年 10 月向所有 ChatGPT 用户推出 Intelligent UI",
      "statusSrc": [
        {
          "url": "https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/",
          "checked": "2026-11-06",
          "label": "Google"
        },
        {
          "url": "https://openai.com/index/gpt-6-for-everyone",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ],
      "firstSeen": "2025-11",
      "proposer": "Google Research 发布 Generative UI",
      "directions": [
        "ux"
      ],
      "analogy": "问旅行计划时，得到的不是一大段文字，而是一个当场做好、能点能改的小应用。",
      "problem": "长段文字不适合比较、计算和探索。固定界面又覆盖不了千变万化的问题。",
      "relations": [
        {
          "term": "agent",
          "text": "都在改变「只有聊天框」的产品形态"
        }
      ],
      "adopters": [
        {
          "company": "google-deepmind",
          "note": "Gemini 应用的动态视图",
          "src": {
            "url": "https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/",
            "checked": "2026-11-06",
            "label": "Google"
          }
        },
        {
          "company": "openai",
          "note": "ChatGPT 的 Intelligent UI",
          "src": {
            "url": "https://openai.com/index/gpt-6-for-everyone",
            "checked": "2026-11-06",
            "label": "OpenAI"
          }
        }
      ],
      "pmNote": "界面从「设计好再上线」变成「运行时生成」。产品经理要考虑一致性、质量兜底，以及怎么评估一个每次都不一样的界面。",
      "src": [
        {
          "url": "https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/",
          "checked": "2026-11-06",
          "label": "Google"
        },
        {
          "url": "https://openai.com/index/gpt-6-for-everyone",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ]
    },
    {
      "id": "skills",
      "name": "Skill",
      "aliases": [
        "Agent Skills",
        "技能",
        "SKILL.md"
      ],
      "oneLine": "把指令、脚本和资料打包成文件夹，智能体需要时才加载",
      "status": "已普及",
      "statusReason": "Anthropic 发起并捐给 AAIF；ChatGPT、Kimi、MiniMax 等都提供技能功能",
      "statusSrc": [
        {
          "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "捐赠公告"
        },
        {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-11-06",
          "label": "ChatGPT"
        },
        {
          "url": "https://www.minimax.io/m-plan",
          "checked": "2026-11-06",
          "label": "M Plan"
        }
      ],
      "firstSeen": "2025-10",
      "proposer": "Anthropic 发布 Agent Skills，2025 年 12 月作为开放标准推出",
      "directions": [
        "agent",
        "context"
      ],
      "analogy": "像给新员工发一本岗位手册，用到哪一章再翻哪一章，不用一开始全背下来。",
      "problem": "把所有规则都塞进提示词既占上下文又难维护。Skill 按需加载，还能复用和分享。",
      "relations": [
        {
          "term": "mcp",
          "text": "MCP 连接外部工具和数据，Skill 教智能体怎么做事"
        },
        {
          "term": "context-engineering",
          "text": "按需加载正是一种节省上下文的做法"
        },
        {
          "term": "harness",
          "text": "由 Harness 发现和运行"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "Agent Skills 发起方，2026 年 10 月捐给 AAIF",
          "src": {
            "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
            "checked": "2026-11-06",
            "label": "捐赠公告"
          }
        },
        {
          "company": "openai",
          "note": "ChatGPT 套餐列出「技能」",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-11-06",
            "label": "ChatGPT"
          }
        },
        {
          "company": "minimax",
          "note": "M Plan 列出 Skills",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-11-06",
            "label": "M Plan"
          }
        },
        {
          "company": "moonshot",
          "note": "Kimi 列出自进化技能",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-11-06",
            "label": "Kimi"
          }
        }
      ],
      "pmNote": "Skill 让产品经理和业务专家也能沉淀流程，不一定要写代码。可以把团队经验做成可复用的能力，但要注意来源可信度。",
      "src": [
        {
          "url": "https://www.anthropic.com/news/skills",
          "checked": "2026-11-06",
          "label": "Anthropic"
        },
        {
          "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "捐赠公告"
        }
      ]
    },
    {
      "id": "agents-md",
      "name": "AGENTS.md",
      "aliases": [
        "智能体说明文件"
      ],
      "oneLine": "放在代码仓库里的说明文件，专门告诉编程智能体这个项目该怎么做",
      "status": "升温中",
      "statusReason": "官网称已有 6 万多个开源项目使用，2025 年 12 月成为 AAIF 创始项目",
      "statusSrc": [
        {
          "url": "https://agents.md/",
          "checked": "2026-11-06",
          "label": "AGENTS.md"
        },
        {
          "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "Linux 基金会"
        }
      ],
      "firstSeen": "2025",
      "proposer": "OpenAI 贡献给 AAIF",
      "directions": [
        "agent",
        "context"
      ],
      "analogy": "给智能体看的 README：人看 README，智能体看 AGENTS.md。",
      "problem": "不同编程工具各有一套配置文件。统一格式后，一份说明可以被多种工具读取。",
      "relations": [
        {
          "term": "skills",
          "text": "AGENTS.md 放项目长期规则，Skill 放可复用的能力"
        },
        {
          "term": "context-engineering",
          "text": "是给智能体提供项目上下文的一种方式"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "贡献给 AAIF",
          "src": {
            "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
            "checked": "2026-11-06",
            "label": "Linux 基金会"
          }
        }
      ],
      "pmNote": "它提醒我们：智能体也是「用户」。文档和产品说明以后也要考虑写给机器看。",
      "src": [
        {
          "url": "https://agents.md/",
          "checked": "2026-11-06",
          "label": "AGENTS.md"
        },
        {
          "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "Linux 基金会"
        }
      ]
    },
    {
      "id": "context-engineering",
      "name": "上下文工程",
      "aliases": [
        "Context Engineering"
      ],
      "oneLine": "管理模型能看到的全部信息：提示词、资料、工具、历史记录，而不只是写提示词",
      "status": "升温中",
      "statusReason": "Anthropic 2025 年系统阐述后，这一说法随智能体普及而被广泛使用",
      "statusSrc": {
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        "checked": "2026-11-06",
        "label": "Anthropic"
      },
      "firstSeen": "2025-09",
      "proposer": "Anthropic 工程博客系统阐述（本库查到的较早官方文章）",
      "directions": [
        "context"
      ],
      "analogy": "提示词工程是想好怎么提问，上下文工程是开会前把该看的资料摆上桌，没用的拿走。",
      "problem": "智能体一跑就是几十步，上下文容量有限，信息太多或太少都会让它出错。",
      "relations": [
        {
          "term": "rag",
          "text": "RAG 是获取上下文的一种手段"
        },
        {
          "term": "memory",
          "text": "记忆决定跨对话时带上什么"
        },
        {
          "term": "skills",
          "text": "按需加载以节省上下文"
        },
        {
          "term": "harness",
          "text": "是 Harness 的核心工作之一"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "发表上下文工程指南",
          "src": {
            "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
            "checked": "2026-11-06",
            "label": "Anthropic"
          }
        }
      ],
      "pmNote": "上下文直接影响质量和成本。设计 AI 功能时要回答：这一步模型需要知道什么，这些信息从哪来，用户能不能看到和修改。",
      "src": [
        {
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
          "checked": "2026-11-06",
          "label": "Anthropic"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Prompt_engineering",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ]
    },
    {
      "id": "a2a",
      "name": "A2A",
      "aliases": [
        "Agent2Agent",
        "智能体互联协议"
      ],
      "oneLine": "让不同厂商的智能体能互相对话和分工的开放协议",
      "status": "升温中",
      "statusReason": "发布时有 50 多家合作伙伴；本库暂未核实到其他收录公司官方支持，状态待后续更新",
      "statusSrc": {
        "url": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/",
        "checked": "2026-11-06",
        "label": "Google"
      },
      "firstSeen": "2025-04",
      "proposer": "Google 发布",
      "directions": [
        "agent"
      ],
      "analogy": "MCP 像员工和工具之间的插座，A2A 像不同公司员工之间的工作邮件。",
      "problem": "企业里的智能体来自不同厂商，彼此不通，只能各干各的。",
      "relations": [
        {
          "term": "mcp",
          "text": "Google 称 A2A 与 MCP 互补：MCP 连工具，A2A 连智能体"
        }
      ],
      "adopters": [
        {
          "company": "google-deepmind",
          "note": "Google 发起并开放",
          "src": {
            "url": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/",
            "checked": "2026-11-06",
            "label": "Google"
          }
        }
      ],
      "pmNote": "协议之争决定生态位置。做企业智能体产品时，要判断接入哪些标准，这比自己造一套更重要。",
      "src": {
        "url": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/",
        "checked": "2026-11-06",
        "label": "Google"
      }
    },
    {
      "id": "vibe-coding",
      "name": "Vibe Coding",
      "aliases": [
        "氛围编程",
        "氛围编码"
      ],
      "oneLine": "主要靠和 AI 说话来做软件，人负责描述和验收，不一定逐行看代码",
      "status": "已普及",
      "statusReason": "被《柯林斯词典》评为 2025 年度词汇，已进入大众语境",
      "statusSrc": {
        "url": "https://en.wikipedia.org/wiki/Vibe_coding",
        "checked": "2026-11-06",
        "label": "维基百科",
        "official": false
      },
      "firstSeen": "2025-02",
      "proposer": "Andrej Karpathy 提出",
      "directions": [
        "agent"
      ],
      "analogy": "从自己砌墙变成当工头：说清要什么，再检查盖得对不对。",
      "problem": "把做软件的门槛降下来，让产品经理等非工程背景的人也能把想法做成可用的东西。",
      "relations": [
        {
          "term": "harness",
          "text": "编程智能体的 Harness 让这种方式变得可靠"
        }
      ],
      "adopters": [],
      "pmNote": "它让产品经理能快速验证想法，但验收和质量责任还在人身上。面试时可以讲你怎么定需求、验收和迭代，而不只是「AI 写的」。",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Vibe_coding",
        "checked": "2026-11-06",
        "label": "维基百科",
        "official": false
      },
      "officialGap": {
        "reason": "需要登录",
        "detail": "这个词出自 Andrej Karpathy 2025 年 2 月在 X 上的帖子，X 需要登录才能看原帖",
        "tried": [
          "https://x.com/karpathy"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "id": "deep-research",
      "name": "深度研究",
      "aliases": [
        "Deep Research"
      ],
      "oneLine": "AI 自己多轮搜索、阅读和整理，最后交付一份带引用的报告",
      "status": "已普及",
      "statusReason": "OpenAI、Google、Kimi、智谱都已提供",
      "statusSrc": [
        {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-11-06",
          "label": "ChatGPT"
        },
        {
          "url": "https://one.google.com/about/plans",
          "checked": "2026-11-06",
          "label": "Google AI 套餐"
        },
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        },
        {
          "url": "https://z.ai/subscribe",
          "checked": "2026-11-06",
          "label": "Z.ai"
        }
      ],
      "firstSeen": "2025-02",
      "proposer": "OpenAI 推出 Deep Research（本库查到的较早记录）",
      "directions": [
        "agent",
        "ux"
      ],
      "analogy": "从「帮我查一下」变成「交给实习生做一份调研报告」。",
      "problem": "复杂调研要反复搜索和比对。普通问答回答得快，但不够深入。",
      "relations": [
        {
          "term": "agent",
          "text": "是智能体在调研场景的典型应用"
        },
        {
          "term": "rag",
          "text": "都依赖检索外部信息"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "ChatGPT 深度研究",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-11-06",
            "label": "ChatGPT"
          }
        },
        {
          "company": "google-deepmind",
          "note": "Google AI Pro 含 Deep Research",
          "src": {
            "url": "https://one.google.com/about/plans",
            "checked": "2026-11-06",
            "label": "Google AI 套餐"
          }
        },
        {
          "company": "moonshot",
          "note": "Kimi 会员含深度研究",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-11-06",
            "label": "Kimi"
          }
        },
        {
          "company": "zhipu",
          "note": "AutoClaw 深度搜索与研究",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-11-06",
            "label": "Z.ai"
          }
        }
      ],
      "pmNote": "这是「等待换质量」的产品：用户愿意等几分钟。要设计好进度反馈、引用核查和结果可信度。",
      "src": {
        "url": "https://openai.com/index/introducing-deep-research/",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "id": "mcp",
      "name": "MCP",
      "aliases": [
        "Model Context Protocol",
        "模型上下文协议"
      ],
      "oneLine": "让 AI 用同一种方式连接各种工具和数据的开放标准",
      "status": "已普及",
      "statusReason": "OpenAI、Google 等主要厂商已采用，2025 年 12 月捐给 Linux 基金会旗下 AAIF",
      "statusSrc": [
        {
          "url": "https://en.wikipedia.org/wiki/Model_Context_Protocol",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        },
        {
          "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "Linux 基金会"
        }
      ],
      "firstSeen": "2024-11",
      "proposer": "Anthropic 发布",
      "directions": [
        "agent"
      ],
      "analogy": "AI 世界的 USB-C：工具只要做一个接口，各种 AI 都能接上。",
      "problem": "以前每接一个数据源都要单独开发。MCP 用一个协议代替零散的集成。",
      "relations": [
        {
          "term": "function-calling",
          "text": "Function Calling 是模型调用工具的能力，MCP 统一工具的接入方式"
        },
        {
          "term": "a2a",
          "text": "A2A 连接智能体，MCP 连接工具"
        },
        {
          "term": "skills",
          "text": "Skill 教智能体做事，MCP 提供可用工具"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "发起方",
          "src": {
            "url": "https://www.anthropic.com/news/model-context-protocol",
            "checked": "2026-11-06",
            "label": "Anthropic"
          }
        },
        {
          "company": "openai",
          "note": "已采用（据维基百科）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Model_Context_Protocol",
            "checked": "2026-11-06",
            "label": "维基百科",
            "official": false
          }
        },
        {
          "company": "google-deepmind",
          "note": "已采用（据维基百科）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Model_Context_Protocol",
            "checked": "2026-11-06",
            "label": "维基百科",
            "official": false
          }
        },
        {
          "company": "mistral",
          "note": "支持自定义 MCP 连接器（测试版）",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-11-06",
            "label": "Mistral 价格"
          }
        },
        {
          "company": "minimax",
          "note": "M Plan 提供 MCP 工具",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-11-06",
            "label": "M Plan"
          }
        },
        {
          "company": "zhipu",
          "note": "GLM Coding Plan 含精选 MCP 工具",
          "src": {
            "url": "https://z.ai/subscribe",
            "checked": "2026-11-06",
            "label": "Z.ai"
          }
        }
      ],
      "pmNote": "有了 MCP，产品的竞争点从「能接多少工具」转向「接入后体验好不好、权限是否安全」。",
      "src": [
        {
          "url": "https://www.anthropic.com/news/model-context-protocol",
          "checked": "2026-11-06",
          "label": "Anthropic"
        },
        {
          "url": "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
          "checked": "2026-11-06",
          "label": "Linux 基金会"
        }
      ]
    },
    {
      "id": "computer-use",
      "name": "电脑操作",
      "aliases": [
        "Computer Use",
        "GUI 任务处理",
        "操作电脑"
      ],
      "oneLine": "AI 像人一样看屏幕、点鼠标、敲键盘，直接操作软件",
      "status": "已普及",
      "statusReason": "Anthropic、OpenAI、Google（预览）、MiniMax 等都已支持",
      "statusSrc": [
        {
          "url": "https://www.anthropic.com/news/3-5-models-and-computer-use",
          "checked": "2026-11-06",
          "label": "Anthropic"
        },
        {
          "url": "https://openai.com/index/gpt-6-astra",
          "checked": "2026-11-06",
          "label": "GPT-6 Astra"
        },
        {
          "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
          "checked": "2026-11-06",
          "label": "Gemini 文档"
        },
        {
          "url": "https://www.minimax.io/blog/minimax-m31f",
          "checked": "2026-11-06",
          "label": "MiniMax"
        }
      ],
      "firstSeen": "2024-10",
      "proposer": "Anthropic 随 Claude 3.5 Sonnet 推出",
      "directions": [
        "agent",
        "safety"
      ],
      "analogy": "不用给每个软件开接口，让 AI 坐到电脑前自己操作。",
      "problem": "很多软件没有 API，智能体够不着。操作界面可以绕开这个限制。",
      "relations": [
        {
          "term": "agent",
          "text": "让智能体能在没有 API 的软件里行动"
        },
        {
          "term": "prompt-injection",
          "text": "网页上的恶意内容可能诱导它执行操作"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "Opus 5.5 OSWorld 2.1 为 81.8%",
          "src": {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-11-06",
            "label": "Claude Opus 5.5"
          }
        },
        {
          "company": "openai",
          "note": "GPT-6 Astra 主打电脑操作",
          "src": {
            "url": "https://openai.com/index/gpt-6-astra",
            "checked": "2026-11-06",
            "label": "GPT-6 Astra"
          }
        },
        {
          "company": "google-deepmind",
          "note": "Gemini 4 Argon 支持（预览）",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-11-06",
            "label": "Gemini 文档"
          }
        },
        {
          "company": "minimax",
          "note": "M3.1 Flash OSWorld V2 为 61.7",
          "src": {
            "url": "https://www.minimax.io/blog/minimax-m31f",
            "checked": "2026-11-06",
            "label": "MiniMax"
          }
        },
        {
          "company": "doubao",
          "note": "模型支持 GUI 任务处理",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-11-06",
            "label": "火山方舟"
          }
        }
      ],
      "pmNote": "重点不只是准确率，还有速度、成本和误操作后的损失。付款、删除这类动作要设计确认环节。",
      "src": {
        "url": "https://www.anthropic.com/news/3-5-models-and-computer-use",
        "checked": "2026-11-06",
        "label": "Anthropic"
      }
    },
    {
      "id": "reasoning",
      "name": "推理模型",
      "aliases": [
        "Reasoning Model",
        "思考模式",
        "深度思考",
        "Thinking"
      ],
      "oneLine": "模型回答前先花时间「想一想」，复杂问题更准，但更慢更贵",
      "status": "已普及",
      "statusReason": "OpenAI、Anthropic、DeepSeek、豆包等都已提供思考或推理模式",
      "statusSrc": [
        {
          "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
          "checked": "2026-11-06",
          "label": "GPT-6 Astra 文档"
        },
        {
          "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
          "checked": "2026-11-06",
          "label": "Claude 文档"
        },
        {
          "url": "https://api-docs.deepseek.com/quick_start/pricing",
          "checked": "2026-11-06",
          "label": "DeepSeek 价格"
        },
        {
          "url": "https://www.volcengine.com/docs/82379/1330310",
          "checked": "2026-11-06",
          "label": "火山方舟"
        }
      ],
      "firstSeen": "2024-09",
      "proposer": "OpenAI 发布 o1 系列",
      "directions": [
        "cost"
      ],
      "analogy": "考试时先打草稿再写答案，时间更长，但难题的正确率更高。",
      "problem": "直接作答在数学、编程等多步问题上容易出错。",
      "relations": [
        {
          "term": "agent",
          "text": "多步任务依赖模型的规划和判断"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "GPT-6 Astra 可调推理强度",
          "src": {
            "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
            "checked": "2026-11-06",
            "label": "GPT-6 Astra 文档"
          }
        },
        {
          "company": "anthropic",
          "note": "自适应思考",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-11-06",
            "label": "Claude 文档"
          }
        },
        {
          "company": "deepseek",
          "note": "思考和非思考模式可切换",
          "src": {
            "url": "https://api-docs.deepseek.com/quick_start/pricing",
            "checked": "2026-11-06",
            "label": "DeepSeek 价格"
          }
        },
        {
          "company": "doubao",
          "note": "深度思考默认开启，可关闭",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-11-06",
            "label": "火山方舟"
          }
        },
        {
          "company": "zhipu",
          "note": "GLM-5.3 始终开启推理",
          "src": {
            "url": "https://docs.z.ai/guides/llm/glm-5.3",
            "checked": "2026-11-06",
            "label": "智谱文档"
          }
        }
      ],
      "pmNote": "思考 token 也要计费。产品上要决定：哪些场景值得多等多花钱，是否把思考强度交给用户选。",
      "src": {
        "url": "https://openai.com/index/introducing-openai-o1-preview/",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "id": "prompt-caching",
      "name": "提示词缓存",
      "aliases": [
        "Prompt Caching",
        "Context Caching",
        "上下文缓存",
        "KV Cache"
      ],
      "oneLine": "重复发送的内容不用重新计算，价格大幅降低、速度更快",
      "status": "已普及",
      "statusReason": "OpenAI、Anthropic、Google、DeepSeek、豆包等价格表都单列了缓存价",
      "statusSrc": [
        {
          "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
          "checked": "2026-11-06",
          "label": "GPT-6 Astra 文档"
        },
        {
          "url": "https://www.anthropic.com/claude-opus-5-5",
          "checked": "2026-11-06",
          "label": "Claude Opus 5.5"
        },
        {
          "url": "https://api-docs.deepseek.com/quick_start/pricing",
          "checked": "2026-11-06",
          "label": "DeepSeek 价格"
        },
        {
          "url": "https://www.volcengine.com/docs/82379/1544106",
          "checked": "2026-11-06",
          "label": "火山方舟"
        }
      ],
      "firstSeen": "2024",
      "proposer": "本库查到 2024 年 Kimi、DeepSeek 已提供",
      "directions": [
        "cost",
        "context"
      ],
      "analogy": "老顾客说「老样子」，店家不用每次重新问一遍。",
      "problem": "智能体每一步都要带上长长的历史，反复计费的成本很高。",
      "relations": [
        {
          "term": "context-engineering",
          "text": "上下文结构决定缓存能否命中"
        },
        {
          "term": "peak-pricing",
          "text": "都是降低 API 成本的手段"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "GPT-6 Astra 缓存输入 1 美元（输入 10 美元）",
          "src": {
            "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
            "checked": "2026-11-06",
            "label": "GPT-6 Astra 文档"
          }
        },
        {
          "company": "anthropic",
          "note": "Opus 5.5 缓存读取 0.20 美元",
          "src": {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-11-06",
            "label": "Claude Opus 5.5"
          }
        },
        {
          "company": "deepseek",
          "note": "命中缓存价远低于普通输入",
          "src": {
            "url": "https://api-docs.deepseek.com/quick_start/pricing",
            "checked": "2026-11-06",
            "label": "DeepSeek 价格"
          }
        },
        {
          "company": "doubao",
          "note": "单列缓存命中和存储价格",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1544106",
            "checked": "2026-11-06",
            "label": "火山方舟"
          }
        }
      ],
      "pmNote": "算智能体成本时一定要算缓存命中率，只看输入输出单价会算错。官方价格对比时，这也是常被忽略的一项。",
      "src": [
        {
          "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        },
        {
          "url": "https://api-docs.deepseek.com/news/news0802",
          "checked": "2026-11-06",
          "label": "DeepSeek"
        }
      ]
    },
    {
      "id": "agent",
      "name": "智能体",
      "aliases": [
        "Agent",
        "AI Agent",
        "Agentic AI"
      ],
      "oneLine": "给它一个目标，它能自己规划、调用工具并一步步完成任务的 AI",
      "status": "已普及",
      "statusReason": "本库收录的公司几乎都把智能体作为主要方向",
      "statusSrc": [
        {
          "url": "https://openai.com/index/gpt-6-astra",
          "checked": "2026-11-06",
          "label": "GPT-6 Astra"
        },
        {
          "url": "https://research.meta.ai/blog/muse-wonder",
          "checked": "2026-11-06",
          "label": "Meta"
        },
        {
          "url": "https://www.minimax.io/blog/minimax-m31f",
          "checked": "2026-11-06",
          "label": "MiniMax"
        }
      ],
      "firstSeen": "2024",
      "proposer": "「agentic」一词 2024 年开始流行，吴恩达等人推动（据维基百科）",
      "directions": [
        "agent"
      ],
      "analogy": "聊天机器人告诉你怎么订机票，智能体直接帮你把机票订好。",
      "problem": "问答工具只能给答案，具体的事还得人去做。",
      "relations": [
        {
          "term": "harness",
          "text": "Agent = 模型 + Harness"
        },
        {
          "term": "mcp",
          "text": "通过 MCP 连接工具"
        },
        {
          "term": "function-calling",
          "text": "调用工具的基础能力"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "dots、Codex、ChatGPT 工作",
          "src": {
            "url": "https://chatgpt.com/pricing",
            "checked": "2026-11-06",
            "label": "ChatGPT"
          }
        },
        {
          "company": "anthropic",
          "note": "Claude Code、Claude Duet",
          "src": {
            "url": "https://claude.com/blog/claude-duet",
            "checked": "2026-11-06",
            "label": "Anthropic"
          }
        },
        {
          "company": "meta",
          "note": "Muse 个人智能体",
          "src": {
            "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
            "checked": "2026-11-06",
            "label": "Meta"
          }
        },
        {
          "company": "xai",
          "note": "Grok Bot",
          "src": {
            "url": "https://x.ai/news/designing-grok-bot",
            "checked": "2026-11-06",
            "label": "xAI"
          }
        },
        {
          "company": "minimax",
          "note": "MiniMax Code",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-11-06",
            "label": "M Plan"
          }
        }
      ],
      "pmNote": "核心问题是自主程度：哪些让 AI 自己做，哪些必须让人确认。衡量指标也要从回答质量变成任务完成率和成本。",
      "src": {
        "url": "https://en.wikipedia.org/wiki/AI_agent",
        "checked": "2026-11-06",
        "label": "维基百科",
        "official": false
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "通用概念，没有单一的官方发布方，用百科解释最合适",
        "tried": [
          "没有对应的官方发布方"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "id": "memory",
      "name": "长期记忆",
      "aliases": [
        "Memory",
        "Agent Memory",
        "Active Memory",
        "梦境记忆"
      ],
      "oneLine": "AI 跨对话记住你的偏好和事情，下次不用重新交代",
      "status": "已普及",
      "statusReason": "OpenAI、Anthropic、Meta、MiniMax、Kimi 都已提供",
      "statusSrc": [
        {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-11-06",
          "label": "ChatGPT"
        },
        {
          "url": "https://claude.com/pricing",
          "checked": "2026-11-06",
          "label": "Claude"
        },
        {
          "url": "https://research.meta.ai/blog/muse-wonder",
          "checked": "2026-11-06",
          "label": "Meta"
        },
        {
          "url": "https://www.minimax.io/m-plan",
          "checked": "2026-11-06",
          "label": "M Plan"
        },
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        }
      ],
      "firstSeen": "2024-02",
      "proposer": "OpenAI 为 ChatGPT 推出（本库查到的较早记录）",
      "directions": [
        "context",
        "safety"
      ],
      "analogy": "从每次都要重新自我介绍，变成有个老同事记得你的习惯。",
      "problem": "每次新对话都从零开始，用户要反复交代背景。",
      "relations": [
        {
          "term": "context-engineering",
          "text": "记忆决定跨对话带上什么"
        },
        {
          "term": "proactive-agent",
          "text": "主动式智能体通常依赖长期记忆"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "ChatGPT 记忆，用户可以在设置中关闭",
          "src": {
            "url": "https://openai.com/index/memory-and-new-controls-for-chatgpt/",
            "checked": "2026-11-06",
            "label": "OpenAI"
          }
        },
        {
          "company": "anthropic",
          "note": "跨对话记忆",
          "src": {
            "url": "https://claude.com/pricing",
            "checked": "2026-11-06",
            "label": "Claude"
          }
        },
        {
          "company": "meta",
          "note": "Active Memory，有 MemoryBench 评测",
          "src": {
            "url": "https://research.meta.ai/blog/muse-wonder",
            "checked": "2026-11-06",
            "label": "Meta"
          }
        },
        {
          "company": "minimax",
          "note": "M Plan 含记忆",
          "src": {
            "url": "https://www.minimax.io/m-plan",
            "checked": "2026-11-06",
            "label": "M Plan"
          }
        },
        {
          "company": "moonshot",
          "note": "梦境记忆",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-11-06",
            "label": "Kimi"
          }
        }
      ],
      "pmNote": "记忆是留存和隐私的双刃剑。要设计用户可见、可改、可删，并想好记错了怎么办。",
      "src": [
        {
          "url": "https://openai.com/index/memory-and-new-controls-for-chatgpt/",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ]
    },
    {
      "id": "mixture-of-experts",
      "name": "MoE",
      "aliases": [
        "Mixture of Experts",
        "混合专家模型",
        "稀疏专家"
      ],
      "oneLine": "模型内部有很多「专家」，每次只激活一小部分，所以总参数很大、算力却省",
      "status": "已普及",
      "statusReason": "Mistral、DeepSeek、月之暗面、MiniMax 等公开模型都采用",
      "statusSrc": [
        {
          "url": "https://docs.mistral.ai/models/mistral-large-4-0",
          "checked": "2026-11-06",
          "label": "Mistral 文档"
        },
        {
          "url": "https://api-docs.deepseek.com/news/news260910",
          "checked": "2026-11-06",
          "label": "DeepSeek"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "firstSeen": "2023-12",
      "proposer": "Mistral 发布 Mixtral 8x7B 带动大模型采用（技术本身更早）",
      "directions": [
        "cost"
      ],
      "analogy": "医院有很多科室，看病时只挂相关的几个科。",
      "problem": "单纯把模型做大，运行成本会同步上涨。",
      "relations": [
        {
          "term": "open-weights",
          "text": "近年的大型开放权重模型多采用 MoE"
        }
      ],
      "adopters": [
        {
          "company": "mistral",
          "note": "Large 4：总参数 1.05 万亿，激活 520 亿",
          "src": {
            "url": "https://docs.mistral.ai/models/mistral-large-4-0",
            "checked": "2026-11-06",
            "label": "Mistral 文档"
          }
        },
        {
          "company": "deepseek",
          "note": "V4.1-Flash：5520 亿 MoE",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news260910",
            "checked": "2026-11-06",
            "label": "DeepSeek"
          }
        },
        {
          "company": "moonshot",
          "note": "K3：896 个专家（据维基百科）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-11-06",
            "label": "维基百科",
            "official": false
          }
        }
      ],
      "pmNote": "看模型参数时要分清总参数和激活参数：「万亿参数」不等于运行成本是万亿级。产品上它主要影响价格和速度。",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Mixture_of_experts",
        "checked": "2026-11-06",
        "label": "维基百科",
        "official": false
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "通用概念，没有单一的官方发布方，用百科解释最合适",
        "tried": [
          "没有对应的官方发布方"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "id": "function-calling",
      "name": "Function Calling",
      "aliases": [
        "工具调用",
        "Tool Calling",
        "Tool Use",
        "函数调用"
      ],
      "oneLine": "模型不只输出文字，还能按格式发起调用，让程序去执行查询或操作",
      "status": "已普及",
      "statusReason": "本库主力模型的官方文档大多列为基础能力",
      "statusSrc": [
        {
          "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
          "checked": "2026-11-06",
          "label": "Claude 文档"
        },
        {
          "url": "https://docs.mistral.ai/models/mistral-large-4-0",
          "checked": "2026-11-06",
          "label": "Mistral 文档"
        },
        {
          "url": "https://www.volcengine.com/docs/82379/1330310",
          "checked": "2026-11-06",
          "label": "火山方舟"
        },
        {
          "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
          "checked": "2026-11-06",
          "label": "Gemini 文档"
        }
      ],
      "firstSeen": "2023-06",
      "proposer": "OpenAI 在 API 中推出",
      "directions": [
        "agent"
      ],
      "analogy": "模型自己不会打电话，但能写好号码和要说的话，交给助手去打。",
      "problem": "模型本身拿不到实时数据，也不能操作外部系统。",
      "relations": [
        {
          "term": "mcp",
          "text": "MCP 统一了工具的接入方式"
        },
        {
          "term": "agent",
          "text": "智能体行动的基础"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "当前模型都支持工具调用",
          "src": {
            "url": "https://platform.claude.com/docs/en/about-claude/models/overview",
            "checked": "2026-11-06",
            "label": "Claude 文档"
          }
        },
        {
          "company": "google-deepmind",
          "note": "Gemini 4 Argon 支持函数调用",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-11-06",
            "label": "Gemini 文档"
          }
        },
        {
          "company": "mistral",
          "note": "Large 4 支持函数调用",
          "src": {
            "url": "https://docs.mistral.ai/models/mistral-large-4-0",
            "checked": "2026-11-06",
            "label": "Mistral 文档"
          }
        },
        {
          "company": "doubao",
          "note": "豆包 2.1 支持工具调用",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-11-06",
            "label": "火山方舟"
          }
        }
      ],
      "pmNote": "工具描述写得好不好，会直接影响 AI 选不选对工具。这也是产品经理可以参与优化的地方。",
      "src": {
        "url": "https://openai.com/index/function-calling-and-other-api-updates/",
        "checked": "2026-11-06",
        "label": "OpenAI"
      }
    },
    {
      "id": "evals",
      "name": "Evals",
      "aliases": [
        "评测",
        "AI 评测",
        "Evaluation",
        "Benchmark"
      ],
      "oneLine": "用一组固定任务给 AI 打分，判断它有没有真的变好",
      "status": "已普及",
      "statusReason": "OpenAI、Anthropic、Google、Meta、Mistral 发布模型时都公布评测成绩",
      "statusSrc": [
        {
          "url": "https://openai.com/index/gpt-6-astra",
          "checked": "2026-11-06",
          "label": "GPT-6 Astra"
        },
        {
          "url": "https://www.anthropic.com/claude-opus-5-5",
          "checked": "2026-11-06",
          "label": "Claude Opus 5.5"
        },
        {
          "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
          "checked": "2026-11-06",
          "label": "Google"
        },
        {
          "url": "https://research.meta.ai/blog/muse-wonder",
          "checked": "2026-11-06",
          "label": "Meta"
        },
        {
          "url": "https://mistral.ai/news/mistral-large-4/",
          "checked": "2026-11-06",
          "label": "Mistral"
        }
      ],
      "firstSeen": "2023-03",
      "proposer": "OpenAI 随 GPT-4 开源 OpenAI Evals（本库查到的较早框架）",
      "directions": [
        "eval"
      ],
      "analogy": "AI 的统一考试和回归测试：改了提示词或换了模型，都要重新考一遍。",
      "problem": "AI 输出不固定，「感觉变好了」靠不住。没有评测就很难判断改动是否有效。",
      "relations": [
        {
          "term": "agent",
          "text": "智能体要评任务完成率，比评回答更难"
        }
      ],
      "adopters": [
        {
          "company": "openai",
          "note": "FrontierMath、ARC-AGI-3 等成绩",
          "src": {
            "url": "https://openai.com/index/gpt-6-astra",
            "checked": "2026-11-06",
            "label": "GPT-6 Astra"
          }
        },
        {
          "company": "anthropic",
          "note": "Terminal-Bench、OSWorld 等成绩",
          "src": {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-11-06",
            "label": "Claude Opus 5.5"
          }
        },
        {
          "company": "meta",
          "note": "MemoryBench、SWE-Marathon 等成绩",
          "src": {
            "url": "https://research.meta.ai/blog/muse-wonder",
            "checked": "2026-11-06",
            "label": "Meta"
          }
        },
        {
          "company": "mistral",
          "note": "DeepSWE、AutomationBench 等成绩",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4/",
            "checked": "2026-11-06",
            "label": "Mistral"
          }
        }
      ],
      "pmNote": "这是 AI 产品经理的核心能力。要能把业务目标转成评测集和通过标准，也要知道公开榜单的分数不等于你的场景表现。",
      "src": [
        {
          "url": "https://github.com/openai/evals",
          "checked": "2026-11-06",
          "label": "OpenAI Evals"
        },
        {
          "url": "https://openai.com/index/gpt-4-research/",
          "checked": "2026-11-06",
          "label": "GPT-4 发布页"
        }
      ]
    },
    {
      "id": "open-weights",
      "name": "开放权重",
      "aliases": [
        "Open Weights",
        "开源模型",
        "开放模型"
      ],
      "oneLine": "模型文件可以下载自行部署，但不等于训练数据和方法也公开",
      "status": "已普及",
      "statusReason": "DeepSeek、Mistral、月之暗面、MiniMax、智谱、阿里都提供开放权重模型",
      "statusSrc": [
        {
          "url": "https://api-docs.deepseek.com/news/news261017",
          "checked": "2026-11-06",
          "label": "DeepSeek"
        },
        {
          "url": "https://docs.mistral.ai/models/mistral-large-4-0",
          "checked": "2026-11-06",
          "label": "Mistral 文档"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "firstSeen": "2023-02",
      "proposer": "Meta 发布 Llama 后广泛流行（本库查到的较早记录）",
      "directions": [
        "cost",
        "safety"
      ],
      "analogy": "菜可以打包带回家自己加热，但配方和后厨过程不一定告诉你。",
      "problem": "闭源 API 有数据外流、依赖单一供应商和价格变动的风险。",
      "relations": [
        {
          "term": "mixture-of-experts",
          "text": "大型开放权重模型多采用 MoE"
        },
        {
          "term": "adversarial-distillation",
          "text": "都影响模型壁垒"
        }
      ],
      "adopters": [
        {
          "company": "deepseek",
          "note": "Hugging Face 发布权重",
          "src": {
            "url": "https://api-docs.deepseek.com/news/news261017",
            "checked": "2026-11-06",
            "label": "DeepSeek"
          }
        },
        {
          "company": "mistral",
          "note": "Large 4 开放权重",
          "src": {
            "url": "https://docs.mistral.ai/models/mistral-large-4-0",
            "checked": "2026-11-06",
            "label": "Mistral 文档"
          }
        },
        {
          "company": "moonshot",
          "note": "K3 开放权重，有商用限制（据维基百科）",
          "src": {
            "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
            "checked": "2026-11-06",
            "label": "维基百科",
            "official": false
          }
        }
      ],
      "pmNote": "选型时要看许可证：Kimi K3、Qwen 部分模型都有商用限制。「能下载」不等于「能随便商用」。",
      "src": [
        {
          "url": "https://en.wikipedia.org/wiki/Llama_(language_model)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        },
        {
          "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "通用概念，没有单一的官方发布方，用百科解释最合适",
        "tried": [
          "没有对应的官方发布方"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "id": "rag",
      "name": "RAG",
      "aliases": [
        "检索增强生成",
        "Retrieval-Augmented Generation",
        "知识库"
      ],
      "oneLine": "回答前先从资料库里查相关内容，再让模型基于这些内容作答",
      "status": "已普及",
      "statusReason": "Google、Mistral、火山方舟等都提供文件或知识库检索能力",
      "statusSrc": [
        {
          "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
          "checked": "2026-11-06",
          "label": "Gemini 文档"
        },
        {
          "url": "https://mistral.ai/pricing",
          "checked": "2026-11-06",
          "label": "Mistral 价格"
        },
        {
          "url": "https://www.volcengine.com/docs/82379/1544106",
          "checked": "2026-11-06",
          "label": "火山方舟"
        }
      ],
      "firstSeen": "2020-05",
      "proposer": "Facebook AI 等团队的论文提出",
      "directions": [
        "context"
      ],
      "analogy": "开卷考试：不靠硬背，先翻资料再答题。",
      "problem": "模型不知道企业内部资料和最新信息，直接回答容易编造。",
      "relations": [
        {
          "term": "context-engineering",
          "text": "是上下文来源之一"
        },
        {
          "term": "memory",
          "text": "RAG 查资料，记忆存用户的事"
        }
      ],
      "adopters": [
        {
          "company": "google-deepmind",
          "note": "Gemini 4 Argon 支持文件搜索",
          "src": {
            "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
            "checked": "2026-11-06",
            "label": "Gemini 文档"
          }
        },
        {
          "company": "mistral",
          "note": "Le Chat 支持文档库和知识连接器",
          "src": {
            "url": "https://mistral.ai/pricing",
            "checked": "2026-11-06",
            "label": "Mistral 价格"
          }
        },
        {
          "company": "doubao",
          "note": "方舟提供私域知识库搜索",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1544106",
            "checked": "2026-11-06",
            "label": "火山方舟"
          }
        }
      ],
      "pmNote": "RAG 效果常常卡在资料质量和检索准确率，而不是模型。要单独评估「找没找对」和「答没答对」。",
      "src": [
        {
          "url": "https://arxiv.org/abs/2005.11401",
          "checked": "2026-11-06",
          "label": "原始论文"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ]
    },
    {
      "id": "prompt-injection",
      "name": "提示词注入",
      "aliases": [
        "Prompt Injection",
        "间接注入",
        "IPI"
      ],
      "oneLine": "把恶意指令藏在网页或文档里，诱导 AI 做不该做的事",
      "status": "已普及",
      "statusReason": "Anthropic、Google、Mistral 发布模型时都公布防护情况",
      "statusSrc": [
        {
          "url": "https://www.anthropic.com/claude-opus-5-5",
          "checked": "2026-11-06",
          "label": "Claude Opus 5.5"
        },
        {
          "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
          "checked": "2026-11-06",
          "label": "Google"
        },
        {
          "url": "https://mistral.ai/news/mistral-large-4/",
          "checked": "2026-11-06",
          "label": "Mistral"
        }
      ],
      "firstSeen": "2022-05",
      "proposer": "2022 年 5 月被报告和命名，9 月由 Simon Willison 推广（据维基百科）",
      "directions": [
        "safety"
      ],
      "analogy": "有人在快递单上写「把这家钥匙也交给我」，不分辨的快递员就照做了。",
      "problem": "模型很难区分「指令」和「资料」。智能体能读外部内容又有操作权限，风险更大。",
      "relations": [
        {
          "term": "computer-use",
          "text": "操作电脑时会读到不可信内容"
        },
        {
          "term": "claw-agent",
          "text": "个人智能体权限大，后果更严重"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "称 Opus 5.5 抗注入能力优于 Opus 5",
          "src": {
            "url": "https://www.anthropic.com/claude-opus-5-5",
            "checked": "2026-11-06",
            "label": "Claude Opus 5.5"
          }
        },
        {
          "company": "google-deepmind",
          "note": "称 Argon 是抗间接注入最强的自家模型",
          "src": {
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
            "checked": "2026-11-06",
            "label": "Google"
          }
        },
        {
          "company": "mistral",
          "note": "Lakera B3 AI 安全基准中抵御 93.3% 的攻击",
          "src": {
            "url": "https://mistral.ai/news/mistral-large-4/",
            "checked": "2026-11-06",
            "label": "Mistral"
          }
        }
      ],
      "pmNote": "不能只靠模型防御，产品层要设计权限最小化、关键操作确认，以及把外部内容和指令隔离。",
      "src": {
        "url": "https://en.wikipedia.org/wiki/Prompt_injection",
        "checked": "2026-11-06",
        "label": "维基百科",
        "official": false
      },
      "officialGap": {
        "reason": "官方确实没发",
        "detail": "通用安全概念，最早由 Simon Willison 在个人博客上命名，没有官方发布方",
        "tried": [
          "没有对应的官方发布方"
        ],
        "checked": "2026-11-10"
      }
    },
    {
      "id": "world-model",
      "name": "世界模型",
      "aliases": [
        "World Model",
        "Genie"
      ],
      "oneLine": "让 AI 学会模拟环境如何变化，可以在想象中预演行动的结果",
      "status": "升温中",
      "statusReason": "Google DeepMind 2026 年 10 月公布 Genie 4，向受信测试者开放",
      "statusSrc": {
        "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
        "checked": "2026-11-06",
        "label": "发布页"
      },
      "firstSeen": "2018-03",
      "proposer": "Ha 和 Schmidhuber 的论文《World Models》",
      "directions": [
        "ux"
      ],
      "analogy": "大模型擅长读懂文字，世界模型想学的是「这样做之后会发生什么」。",
      "problem": "语言模型对物理和交互世界的理解有限，机器人、游戏和仿真需要能预测环境变化。",
      "relations": [
        {
          "term": "agent",
          "text": "可能让智能体在行动前先做模拟"
        }
      ],
      "adopters": [
        {
          "company": "google-deepmind",
          "note": "Genie 4，向受信测试者开放",
          "src": {
            "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
            "checked": "2026-11-06",
            "label": "发布页"
          }
        }
      ],
      "pmNote": "目前离大众产品还较远，先关注游戏、仿真和机器人场景的落地信号，不必急着规划。",
      "src": {
        "url": "https://arxiv.org/abs/1803.10122",
        "checked": "2026-11-06",
        "label": "原始论文"
      }
    },
    {
      "id": "react",
      "name": "ReAct",
      "category": "架构模式",
      "aliases": [
        "Reasoning + Acting",
        "思考-行动循环"
      ],
      "oneLine": "智能体的经典工作方法：想一步、做一步、看结果，再想下一步",
      "status": "已普及",
      "statusReason": "学术和工程界讲解智能体的基础模式，属于不依赖单一厂商的概念；本库未逐家核实各公司内部架构",
      "statusSrc": {
        "url": "https://arxiv.org/abs/2210.03629",
        "checked": "2026-11-06",
        "label": "原始论文"
      },
      "firstSeen": "2022-10",
      "proposer": "论文《ReAct: Synergizing Reasoning and Acting in Language Models》提出",
      "directions": [
        "agent"
      ],
      "analogy": "像查资料写报告：先想该查什么，查到后看看够不够，不够再换关键词接着查。",
      "problem": "只想不做，模型容易凭空编造；只做不想，又容易走错方向。把两者交替起来，可以边做边纠正。",
      "relations": [
        {
          "term": "plan-and-execute",
          "text": "ReAct 走一步看一步，Plan-and-Execute 先把计划做完"
        },
        {
          "term": "function-calling",
          "text": "「行动」这一步通常靠工具调用实现"
        },
        {
          "term": "harness",
          "text": "由 Harness 运行这个循环"
        }
      ],
      "adopters": [],
      "pmNote": "循环意味着步数不确定，成本和耗时也不确定。产品上要设最大步数、显示进度，并决定什么时候请用户介入。",
      "src": {
        "url": "https://arxiv.org/abs/2210.03629",
        "checked": "2026-11-06",
        "label": "原始论文"
      }
    },
    {
      "id": "plan-and-execute",
      "name": "Plan-and-Execute",
      "category": "架构模式",
      "aliases": [
        "先计划后执行",
        "Plan-and-Solve",
        "计划模式"
      ],
      "oneLine": "先拟定完整计划，再按步骤执行，必要时调整计划",
      "status": "升温中",
      "statusReason": "Kimi 的目标模式、Claude Duet 等产品都强调围绕目标持续推进，但本库未核实其内部架构",
      "statusSrc": [
        {
          "url": "https://arxiv.org/abs/2305.04091",
          "checked": "2026-11-06",
          "label": "Plan-and-Solve 论文"
        },
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        }
      ],
      "firstSeen": "2023-05",
      "proposer": "论文《Plan-and-Solve Prompting》提出相近思路",
      "directions": [
        "agent"
      ],
      "analogy": "装修先出图纸和工期，再按工序施工，不是看到什么修什么。",
      "problem": "任务很长时，走一步看一步容易跑偏。先做计划还能让用户提前检查方向。",
      "relations": [
        {
          "term": "react",
          "text": "两者常常结合：大方向先计划，单个步骤用 ReAct"
        }
      ],
      "adopters": [],
      "pmNote": "把计划展示给用户确认，是低成本的信任设计：在花钱执行之前，先发现方向错误。",
      "src": {
        "url": "https://arxiv.org/abs/2305.04091",
        "checked": "2026-11-06",
        "label": "Plan-and-Solve 论文"
      }
    },
    {
      "id": "multi-agent",
      "name": "多智能体",
      "category": "架构模式",
      "aliases": [
        "Multi-Agent",
        "Agent Team",
        "Subagent",
        "集群"
      ],
      "oneLine": "多个智能体分工协作，比如一个调研、一个写作、一个审核",
      "status": "已普及",
      "statusReason": "xAI、Kimi、MiniMax、OpenAI 都已提供多智能体或并行能力",
      "statusSrc": [
        {
          "url": "https://x.ai/news/grok-bot-more-plans",
          "checked": "2026-11-06",
          "label": "xAI"
        },
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        },
        {
          "url": "https://www.minimax.io/",
          "checked": "2026-11-06",
          "label": "MiniMax"
        },
        {
          "url": "https://openai.com/codex/",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ],
      "firstSeen": "2023-08",
      "proposer": "微软等团队的 AutoGen 论文（本库查到的较早框架）",
      "directions": [
        "agent",
        "cost"
      ],
      "analogy": "一个人干不完的活，分给一个小团队，再由负责人汇总。",
      "problem": "单个智能体上下文有限，长任务容易混乱。拆给多个智能体可以并行，也能互相检查。",
      "relations": [
        {
          "term": "a2a",
          "text": "A2A 让不同厂商的智能体协作"
        },
        {
          "term": "react",
          "text": "每个智能体内部仍可以用 ReAct 循环"
        }
      ],
      "adopters": [
        {
          "company": "xai",
          "note": "Grok Bot 可以组群聊分工",
          "src": {
            "url": "https://x.ai/news/grok-bot-more-plans",
            "checked": "2026-11-06",
            "label": "xAI"
          }
        },
        {
          "company": "moonshot",
          "note": "Kimi 集群功能、多 Agent 并行",
          "src": {
            "url": "https://www.kimi.com/membership/pricing",
            "checked": "2026-11-06",
            "label": "Kimi"
          }
        },
        {
          "company": "minimax",
          "note": "MiniMax Code 自动组建智能体团队",
          "src": {
            "url": "https://www.minimax.io/",
            "checked": "2026-11-06",
            "label": "MiniMax"
          }
        },
        {
          "company": "openai",
          "note": "Codex 并行运行多个智能体",
          "src": {
            "url": "https://openai.com/codex/",
            "checked": "2026-11-06",
            "label": "OpenAI"
          }
        }
      ],
      "pmNote": "不是越多越好：协作会增加成本和延迟，出错也更难定位。先确认单个智能体做不好，再考虑拆分。",
      "src": {
        "url": "https://arxiv.org/abs/2308.08155",
        "checked": "2026-11-06",
        "label": "AutoGen 论文"
      }
    },
    {
      "id": "training-preference-signal",
      "name": "AI 训练偏好信号",
      "aliases": [
        "Training Preference Signal",
        "Policy Token",
        "__usage_ai-training",
        "robots.txt 通用信号"
      ],
      "oneLine": "在 robots.txt 写一组规则，就能同时告诉多家 AI 公司能否用内容训练",
      "status": "新出现",
      "statusReason": "2026 年 10 月 30 日提交 IETF 个人草案，Anthropic、OpenAI、Google、微软表示支持，落地时间不同；尚未成为正式标准",
      "statusSrc": [
        {
          "url": "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/",
          "checked": "2026-11-07",
          "label": "IETF 草案"
        },
        {
          "url": "https://www.niemanlab.org/2026/11/anthropic-openai-google-and-microsoft-will-make-it-easier-for-publishers-to-opt-out-of-being-scraped/",
          "checked": "2026-11-07",
          "label": "Nieman Lab"
        }
      ],
      "firstSeen": "2026-10",
      "proposer": "Anthropic 的 Kevin Kelley 提交 IETF 个人草案",
      "directions": [
        "safety"
      ],
      "analogy": "以前要给每家快递分别贴「请勿投递」，现在门口贴一张，所有参与的快递公司都认。",
      "problem": "网站想拒绝 AI 训练，过去要逐个识别各家爬虫，分别写规则。通用信号让网站写一次就能向多家参与的公司表达同样的意愿。",
      "relations": [
        {
          "term": "agents-md",
          "text": "都是放在固定文件里、写给 AI 系统读的约定"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "提出方，已支持",
          "src": {
            "url": "https://www.niemanlab.org/2026/11/anthropic-openai-google-and-microsoft-will-make-it-easier-for-publishers-to-opt-out-of-being-scraped/",
            "checked": "2026-11-07",
            "label": "Nieman Lab"
          }
        },
        {
          "company": "openai",
          "note": "宣布将遵循，计划未来几个月落实，现有爬虫控制继续保留",
          "src": {
            "url": "https://openai.com/index/helping-websites-express-ai-training-preferences/",
            "checked": "2026-11-07",
            "label": "OpenAI"
          }
        },
        {
          "company": "google-deepmind",
          "note": "Google 宣布计划 2027 年支持",
          "src": {
            "url": "https://www.business-standard.com/technology/tech-news/policy-token-publishers-opt-out-ai-training-126110401150_1.html",
            "checked": "2026-11-07",
            "label": "Business Standard"
          }
        }
      ],
      "pmNote": "这是自愿遵守的信号，不是技术封锁，也还不是正式标准。做内容或抓取相关产品时，要分清「用于训练」和其他用途，并跟进各家的实际落地时间。",
      "src": [
        {
          "url": "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/",
          "checked": "2026-11-07",
          "label": "IETF 草案"
        },
        {
          "url": "https://openai.com/index/helping-websites-express-ai-training-preferences/",
          "checked": "2026-11-07",
          "label": "OpenAI"
        },
        {
          "url": "https://www.niemanlab.org/2026/11/anthropic-openai-google-and-microsoft-will-make-it-easier-for-publishers-to-opt-out-of-being-scraped/",
          "checked": "2026-11-07",
          "label": "Nieman Lab"
        },
        {
          "url": "https://www.business-standard.com/technology/tech-news/policy-token-publishers-opt-out-ai-training-126110401150_1.html",
          "checked": "2026-11-07",
          "label": "Business Standard"
        }
      ]
    },
    {
      "id": "langchain",
      "name": "LangChain",
      "category": "开发框架",
      "aliases": [
        "create_agent"
      ],
      "oneLine": "开源开发框架，用少量代码把模型、工具和提示词组合成智能体",
      "status": "已普及",
      "statusReason": "2025 年 10 月发布 1.0；官方提供 OpenAI、Anthropic、Google、Mistral 等模型的集成包（只代表能接入，不代表这些公司自己使用）",
      "statusSrc": [
        {
          "url": "https://blog.langchain.com/langchain-langgraph-1dot0/",
          "checked": "2026-11-07",
          "label": "1.0 公告"
        },
        {
          "url": "https://docs.langchain.com/oss/python/integrations/providers/overview",
          "checked": "2026-11-07",
          "label": "官方集成列表"
        }
      ],
      "firstSeen": "2022-10",
      "proposer": "Harrison Chase 发起的开源项目（据维基百科）",
      "directions": [
        "agent"
      ],
      "analogy": "像一套现成的厨房工具和半成品配料，不用从种菜开始做一顿饭。",
      "problem": "每家模型接口不同，自己接模型、工具和记忆要写很多重复代码，换模型也麻烦。",
      "relations": [
        {
          "term": "langgraph",
          "text": "LangChain 的智能体底层运行在 LangGraph 上"
        },
        {
          "term": "harness",
          "text": "官方文档把 LangChain 定位为一个精简、可配置的 Harness"
        },
        {
          "term": "rag",
          "text": "可以用来搭建 RAG 应用"
        },
        {
          "term": "function-calling",
          "text": "采用标准的工具调用架构"
        }
      ],
      "adopters": [],
      "pmNote": "它能让团队快速做出原型并方便更换模型。但简单调用一次模型时不一定需要框架，多一层也会增加复杂度和依赖。",
      "src": [
        {
          "url": "https://docs.langchain.com/oss/python/langchain/overview",
          "checked": "2026-11-07",
          "label": "LangChain 文档"
        },
        {
          "url": "https://blog.langchain.com/langchain-langgraph-1dot0/",
          "checked": "2026-11-07",
          "label": "1.0 公告"
        },
        {
          "url": "https://en.wikipedia.org/wiki/LangChain",
          "checked": "2026-11-07",
          "label": "维基百科",
          "official": false
        }
      ]
    },
    {
      "id": "langgraph",
      "name": "LangGraph",
      "category": "开发框架",
      "aliases": [
        "智能体编排框架"
      ],
      "oneLine": "用流程图编排长时间运行的智能体，支持循环、断点恢复和人工审批",
      "status": "升温中",
      "statusReason": "2025 年 10 月发布 1.0，LangChain 的智能体也运行在它之上；本库尚未核实收录公司官方使用",
      "statusSrc": [
        {
          "url": "https://blog.langchain.com/langchain-langgraph-1dot0/",
          "checked": "2026-11-07",
          "label": "1.0 公告"
        },
        {
          "url": "https://docs.langchain.com/oss/python/langgraph/overview",
          "checked": "2026-11-07",
          "label": "LangGraph 文档"
        }
      ],
      "firstSeen": "2024-01",
      "proposer": "LangChain 团队发布",
      "directions": [
        "agent"
      ],
      "analogy": "像后厨的流程图：先做哪步、失败退回哪步、哪一步要请主厨确认，都画清楚。",
      "problem": "智能体一跑可能很久，中途会出错或需要人确认。只靠模型自由发挥，流程不好控制，中断后也难恢复。",
      "relations": [
        {
          "term": "langchain",
          "text": "不依赖 LangChain 也能单独使用；需要精细控制流程时用它"
        },
        {
          "term": "react",
          "text": "可以用它实现这类循环式的智能体"
        },
        {
          "term": "multi-agent",
          "text": "适合搭建多步骤、多智能体流程"
        },
        {
          "term": "harness",
          "text": "提供智能体运行所需的状态保存、持久执行和人工介入等底层能力"
        }
      ],
      "adopters": [],
      "pmNote": "它把一个关键产品决策摆到台面上：哪些步骤用规则写死，哪些交给模型判断，哪里必须让人确认。退款、付款这类流程尤其要画清楚。",
      "src": [
        {
          "url": "https://docs.langchain.com/oss/python/langgraph/overview",
          "checked": "2026-11-07",
          "label": "LangGraph 文档"
        },
        {
          "url": "https://blog.langchain.com/langgraph/",
          "checked": "2026-11-07",
          "label": "LangGraph 发布文章"
        },
        {
          "url": "https://blog.langchain.com/langchain-langgraph-1dot0/",
          "checked": "2026-11-07",
          "label": "1.0 公告"
        }
      ]
    },
    {
      "id": "dreaming",
      "name": "Dreaming（智能体做梦）",
      "aliases": [
        "Dreaming",
        "Dreams",
        "Sleep-time Compute",
        "睡眠时计算"
      ],
      "oneLine": "智能体在空闲时回看过往记录，修正、合并和整理自己的记忆",
      "status": "新出现",
      "statusReason": "2026 年 11 月 6 日 Anthropic 发布研究并在 Managed Agents 提供 Dreams 功能（研究预览）；目前只查到 Anthropic 一家收录公司官方支持",
      "statusSrc": [
        {
          "url": "https://www.anthropic.com/research/components-of-agent-memory",
          "checked": "2026-11-08",
          "label": "Anthropic"
        },
        {
          "url": "https://platform.claude.com/docs/en/managed-agents/dreams",
          "checked": "2026-11-08",
          "label": "Claude 平台文档"
        }
      ],
      "firstSeen": "2025-04",
      "proposer": "思路来自 Letta 与 UC Berkeley 2025 年提出的 sleep-time compute；Anthropic 称这一过程常被叫作 dreaming",
      "directions": [
        "context",
        "agent"
      ],
      "analogy": "像人睡觉时大脑回放白天的经历，把零散的事整理成长期记得住的知识。",
      "problem": "智能体边做事边记笔记，时间长了笔记会重复、互相矛盾或过时。Dreaming 让它在任务之外对照原始记录重新整理：改正错误、合并重复、建立索引，并决定下次一开始就加载哪些内容。",
      "relations": [
        {
          "term": "memory",
          "text": "Dreaming 是维护长期记忆的一种方式"
        },
        {
          "term": "context-engineering",
          "text": "决定哪些记忆在新会话开始时放进上下文"
        },
        {
          "term": "harness",
          "text": "由运行框架安排何时整理、读取哪些记录"
        }
      ],
      "adopters": [
        {
          "company": "anthropic",
          "note": "Managed Agents 的 Dreams 功能（研究预览，需申请）；研究中用于 Claude 的记忆整理",
          "src": {
            "url": "https://platform.claude.com/docs/en/managed-agents/dreams",
            "checked": "2026-11-08",
            "label": "Claude 平台文档"
          }
        }
      ],
      "pmNote": "整理记忆要额外花算力，官方也提到需要权衡多久整理一次、整理哪些内容。Anthropic 的 Dreams 会生成新的记忆库、不改原库，便于人工检查后再采用。设计带记忆的产品时，要考虑记忆出错后怎么发现和纠正。",
      "src": [
        {
          "url": "https://www.anthropic.com/research/components-of-agent-memory",
          "checked": "2026-11-08",
          "label": "Anthropic"
        },
        {
          "url": "https://platform.claude.com/docs/en/managed-agents/dreams",
          "checked": "2026-11-08",
          "label": "Claude 平台文档"
        },
        {
          "url": "https://arxiv.org/abs/2504.13171",
          "checked": "2026-11-08",
          "label": "arXiv 论文"
        }
      ]
    }
  ],
  "termLine": [
    "rag",
    "react",
    "plan-and-execute",
    "function-calling",
    "multi-agent",
    "agent",
    "reasoning",
    "mcp",
    "context-engineering",
    "skills",
    "harness",
    "proactive-agent"
  ],
  "tracks": [
    {
      "id": "personal-agent",
      "group": "智能体",
      "name": "个人智能体",
      "desc": "长期替你办事的 AI：有自己的环境和记忆，你离开后还能继续工作",
      "terms": [
        "proactive-agent",
        "claw-agent",
        "react",
        "memory",
        "prompt-injection"
      ],
      "dimensions": [
        "运行位置",
        "能操作什么",
        "记忆",
        "主动与定时",
        "操作确认",
        "接入渠道",
        "价格入口"
      ]
    },
    {
      "id": "coding-agent",
      "group": "智能体",
      "name": "编程智能体",
      "desc": "能自己读代码、改代码、跑测试的工具",
      "terms": [
        "harness",
        "react",
        "plan-and-execute",
        "agents-md",
        "vibe-coding"
      ],
      "dimensions": [
        "使用形态",
        "底层模型",
        "并行与云端",
        "跨会话记忆",
        "价格入口"
      ]
    },
    {
      "id": "office-agent",
      "group": "智能体",
      "name": "办公智能体",
      "desc": "处理文档、表格和跨应用任务，交付可直接使用的工作成果",
      "terms": [
        "agent",
        "computer-use",
        "skills",
        "multi-agent"
      ],
      "dimensions": [
        "主要能力",
        "工作位置",
        "使用形态",
        "价格入口"
      ]
    },
    {
      "id": "image-gen",
      "group": "视觉创作",
      "name": "图像生成",
      "desc": "用文字或参考图生成、编辑图片",
      "terms": [
        "open-weights"
      ],
      "dimensions": [
        "最高清晰度",
        "图像编辑",
        "多图参考",
        "开放权重",
        "使用入口"
      ]
    },
    {
      "id": "video-gen",
      "group": "视觉创作",
      "name": "视频生成",
      "desc": "用文字、图片或视频生成带画面和声音的视频",
      "terms": [
        "world-model",
        "open-weights"
      ],
      "dimensions": [
        "最长时长",
        "最高分辨率",
        "原生音频",
        "参考输入",
        "开放权重",
        "API 价格"
      ]
    },
    {
      "id": "video-edit",
      "group": "视觉创作",
      "name": "视频编辑",
      "desc": "在已有视频上剪辑或修改，比较传统剪辑工具和 AI 模型两种路线",
      "terms": [],
      "dimensions": [
        "产品路线",
        "主要 AI 能力",
        "使用形态"
      ]
    },
    {
      "id": "voice",
      "group": "语音音频",
      "name": "语音对话",
      "desc": "能听能说、可实时打断的语音模型和语音智能体",
      "terms": [
        "agent"
      ],
      "dimensions": [
        "主要特点",
        "实时能力",
        "公开评测",
        "使用入口"
      ]
    },
    {
      "id": "music",
      "group": "语音音频",
      "name": "音乐生成",
      "desc": "用文字描述或歌词生成完整歌曲",
      "terms": [],
      "dimensions": [
        "主要特点",
        "歌曲长度",
        "开放权重",
        "使用入口"
      ]
    }
  ],
  "products": [
    {
      "id": "muse",
      "name": "Muse",
      "aliases": [
        "Meta Muse",
        "Muse 智能体"
      ],
      "company": "meta",
      "tracks": [
        "personal-agent"
      ],
      "desc": "Meta 面向所有人的个人 AI 智能体，可以在 WhatsApp 里使用",
      "version": "Muse",
      "versionDate": "2026-09-08",
      "model": "Muse Spark；Muse Wonder 即将接入",
      "newsMatch": "Muse(?! Wonder| Spark Open)",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
          "checked": "2026-11-06",
          "label": "Meta"
        },
        {
          "url": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
          "checked": "2026-11-06",
          "label": "Muse 语音"
        },
        {
          "url": "https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/",
          "checked": "2026-11-07",
          "label": "Muse spaces"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "云端专属虚拟机 Muse Secure VM",
          "能操作什么": "自带浏览器，可填表、跨应用办事、购物",
          "记忆": "有，用户可以要求忘记",
          "主动与定时": "主动提建议；关闭应用后继续工作",
          "操作确认": "发邮件、购买前确认；独立的 Sentinel 智能体审查联网；完整操作记录",
          "接入渠道": "Muse 应用、WhatsApp",
          "价格入口": "大部分功能免费，另有订阅档位"
        }
      }
    },
    {
      "id": "grok-bot",
      "name": "Grok Bot",
      "aliases": [
        "Team Bots",
        "SpaceXSI Bot"
      ],
      "company": "xai",
      "tracks": [
        "personal-agent"
      ],
      "desc": "有独立身份、记忆和云端电脑的数字同事，可以多个 Bot 群聊分工",
      "version": "Grok Bot",
      "versionDate": "2026-08-11 测试版",
      "model": "Grok 系列",
      "newsMatch": "Grok Bot|Team Bots",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://x.ai/news/grok-bot-more-plans",
          "checked": "2026-11-06",
          "label": "xAI"
        },
        {
          "url": "https://x.ai/news/designing-grok-bot",
          "checked": "2026-11-06",
          "label": "xAI 设计说明"
        },
        {
          "url": "https://x.ai/news/x-subscription",
          "checked": "2026-11-06",
          "label": "X Subscription"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "云端专属电脑，始终在线",
          "能操作什么": "浏览器、终端，登录你的应用后直接操作",
          "记忆": "有，每个 Bot 独立",
          "主动与定时": "支持 Routines 自动触发，离开后继续工作",
          "操作确认": "示例：外发内容留给你在收件箱审批",
          "接入渠道": "移动端、桌面端、X",
          "价格入口": "含在 SuperGrok、Cursor Pro、Cursor Teams 套餐"
        }
      }
    },
    {
      "id": "dots",
      "name": "dots",
      "aliases": [
        "dot",
        "OpenAI dots"
      ],
      "company": "openai",
      "tracks": [
        "personal-agent"
      ],
      "desc": "OpenAI 的全天候智能体，有自己的云端电脑，可以连接 4000 多个应用",
      "version": "dots",
      "versionDate": "2026-09-29",
      "model": "GPT-6 Astra、GPT-6.1 Terra 等",
      "newsMatch": "dots",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://openai.com/index/introducing-dots",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "云端电脑；授权后也可连接你的笔记本",
          "能操作什么": "自带电脑和浏览器，通过插件连接 4000 多个应用",
          "记忆": "有，从反馈中持续学习",
          "主动与定时": "全天候工作，可以在你提出前先做",
          "操作确认": "有操作审核和审批，可以随时查看它的电脑",
          "接入渠道": "ChatGPT、Slack、Teams、语音通话",
          "价格入口": "Pro、Business Premium、Enterprise 逐步开放"
        }
      }
    },
    {
      "id": "claude-duet",
      "name": "Claude Duet",
      "aliases": [
        "Duet"
      ],
      "company": "anthropic",
      "tracks": [
        "personal-agent"
      ],
      "desc": "Anthropic 的主动式智能体应用，每天发简报，只在需要时找你（研究预览）",
      "version": "研究预览",
      "versionDate": "2026-10-21",
      "model": "Claude",
      "newsMatch": "Duet",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://claude.com/blog/claude-duet",
          "checked": "2026-11-06",
          "label": "Anthropic"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "云端虚拟机，自带浏览器，不需要你的电脑或手机开着",
          "能操作什么": "已连接的应用；接受各类任务",
          "记忆": "沿用 Claude 账户里的记忆、技能和已连接应用",
          "主动与定时": "每天早上发简报，持续关注，只在需要时发消息",
          "操作确认": "代你操作前先确认；接触不到你的密码和登录令牌",
          "接入渠道": "iOS、安卓、claude.ai",
          "价格入口": "含在 Pro、Max、Ultra 套餐"
        }
      }
    },
    {
      "id": "kimi-claw",
      "name": "Kimi Claw",
      "aliases": [
        "Claw"
      ],
      "company": "moonshot",
      "tracks": [
        "personal-agent"
      ],
      "desc": "月之暗面的 Claw 类智能体，支持云端和本地运行",
      "version": null,
      "versionDate": null,
      "model": "Kimi K3 系列",
      "newsMatch": "Kimi Claw",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "云端、安卓本地、桌面端",
          "能操作什么": null,
          "记忆": "梦境记忆（部分会员档）",
          "主动与定时": "定时任务、目标模式",
          "操作确认": null,
          "接入渠道": "云端、安卓、桌面端、群聊",
          "价格入口": "Kimi Pro 档起"
        }
      }
    },
    {
      "id": "openclaw",
      "name": "OpenClaw",
      "aliases": [
        "Clawdbot",
        "Moltbot",
        "龙虾"
      ],
      "companyName": "OpenClaw 开源项目",
      "tracks": [
        "personal-agent"
      ],
      "desc": "带火个人智能体的开源项目，运行在本地，可以接入多种大模型",
      "version": null,
      "versionDate": null,
      "model": "外接 Claude、DeepSeek、GPT 等",
      "newsMatch": "OpenClaw",
      "labels": {
        "layer": "纯应用层",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "开发者、普通用户"
      },
      "src": [
        {
          "url": "https://en.wikipedia.org/wiki/OpenClaw",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        },
        {
          "url": "https://github.com/openclaw/openclaw",
          "checked": "2026-11-08",
          "label": "OpenClaw GitHub"
        },
        {
          "url": "https://docs.openclaw.ai/automation/cron-jobs",
          "checked": "2026-11-08",
          "label": "OpenClaw 文档"
        }
      ],
      "matrix": {
        "personal-agent": {
          "运行位置": "本地",
          "能操作什么": "执行命令、浏览器、文件；可装技能和插件",
          "记忆": "有，状态和记忆存在你自己的设备上",
          "主动与定时": "内置定时任务，到点唤醒智能体并把结果发到聊天渠道",
          "操作确认": "执行命令可设审批；陌生人私信默认要先配对批准；默认不在沙箱里运行",
          "接入渠道": "WhatsApp、Telegram、Slack、Discord、iMessage 等 20 多个渠道，另有桌面和手机应用",
          "价格入口": "开源，模型费用另算"
        }
      }
    },
    {
      "id": "claude-code",
      "name": "Claude Code",
      "aliases": [
        "CC"
      ],
      "company": "anthropic",
      "tracks": [
        "coding-agent"
      ],
      "desc": "Anthropic 的编程智能体，处理修 Bug、写测试到多日迁移",
      "version": null,
      "versionDate": null,
      "model": "Claude",
      "newsMatch": "Claude Code",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://claude.com/product/claude-code",
          "checked": "2026-11-06",
          "label": "Anthropic"
        },
        {
          "url": "https://claude.com/pricing",
          "checked": "2026-11-06",
          "label": "套餐"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": "终端、IDE、Slack、网页",
          "底层模型": "Claude",
          "并行与云端": null,
          "跨会话记忆": null,
          "价格入口": "含在 Pro 及以上套餐"
        }
      }
    },
    {
      "id": "codex",
      "name": "Codex",
      "aliases": [
        "OpenAI Codex"
      ],
      "company": "openai",
      "tracks": [
        "coding-agent"
      ],
      "desc": "OpenAI 的编程智能体，可以并行运行多个智能体并用电脑和浏览器工具验证结果",
      "version": null,
      "versionDate": null,
      "model": "GPT 系列",
      "newsMatch": "Codex",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://openai.com/codex/",
          "checked": "2026-11-06",
          "label": "OpenAI"
        },
        {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-11-06",
          "label": "ChatGPT"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": null,
          "底层模型": "GPT 系列",
          "并行与云端": "并行运行多个智能体，任务可以在云端继续",
          "跨会话记忆": null,
          "价格入口": "含在 ChatGPT 套餐，免费版有限使用"
        }
      }
    },
    {
      "id": "grok-build",
      "name": "Grok Build",
      "aliases": [],
      "company": "xai",
      "tracks": [
        "coding-agent"
      ],
      "desc": "xAI 的终端编程智能体，会在后台记录项目约定和决定",
      "version": null,
      "versionDate": null,
      "model": "Grok 系列",
      "newsMatch": "Grok Build",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://x.ai/news/grok-build-memory",
          "checked": "2026-11-06",
          "label": "xAI"
        },
        {
          "url": "https://x.ai/news/x-subscription",
          "checked": "2026-11-06",
          "label": "X Subscription"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": "终端",
          "底层模型": "Grok 系列",
          "并行与云端": null,
          "跨会话记忆": "有，按项目和全局记录为 Markdown 笔记",
          "价格入口": "X Subscription 套餐"
        }
      }
    },
    {
      "id": "kimi-code",
      "name": "Kimi Code",
      "aliases": [],
      "company": "moonshot",
      "tracks": [
        "coding-agent"
      ],
      "desc": "月之暗面的编程工具，含在 Kimi 会员权益内",
      "version": null,
      "versionDate": null,
      "model": "Kimi 系列",
      "newsMatch": "Kimi Code",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://www.kimi.com/membership/pricing",
          "checked": "2026-11-06",
          "label": "Kimi"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": null,
          "底层模型": "Kimi 系列",
          "并行与云端": "Agent 多任务并行（按会员档）",
          "跨会话记忆": null,
          "价格入口": "Kimi Plus 档起"
        }
      }
    },
    {
      "id": "minimax-code",
      "name": "MiniMax Code",
      "aliases": [],
      "company": "minimax",
      "tracks": [
        "coding-agent",
        "office-agent"
      ],
      "desc": "MiniMax 的智能体应用，有编程模式和工作模式，可以一键切换",
      "version": null,
      "versionDate": null,
      "model": "MiniMax M3.1 Flash",
      "newsMatch": "MiniMax Code",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "开发者、普通用户"
      },
      "src": [
        {
          "url": "https://www.minimax.io/m-plan",
          "checked": "2026-11-06",
          "label": "M Plan"
        },
        {
          "url": "https://www.minimax.io/",
          "checked": "2026-11-06",
          "label": "MiniMax"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": "网页、桌面、命令行、iOS、安卓",
          "底层模型": "MiniMax M3.1 Flash",
          "并行与云端": "支持远程控制和 SSH 连接",
          "跨会话记忆": "有",
          "价格入口": "免费版可用；M Plan 22 美元/月起"
        },
        "office-agent": {
          "主要能力": "工作模式：多智能体协作、理解图像视频音频并生成内容",
          "工作位置": "内置浏览器、远程控制",
          "使用形态": "网页、桌面、iOS、安卓",
          "价格入口": "免费版可用；M Plan 22 美元/月起"
        }
      }
    },
    {
      "id": "deepseek-harness",
      "name": "DeepSeek Harness",
      "aliases": [
        "dsh"
      ],
      "company": "deepseek",
      "tracks": [
        "coding-agent"
      ],
      "desc": "DeepSeek 开源的智能体运行框架，一切皆插件，目前是开发者预览版",
      "version": "开发者预览版",
      "versionDate": null,
      "model": "DeepSeek V4.1 Flash 1017 针对它做了优化",
      "newsMatch": "DeepSeek Harness|Super-agent",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://github.com/deepseek-ai/deepseek-harness",
          "checked": "2026-11-07",
          "label": "DeepSeek GitHub"
        },
        {
          "url": "https://api-docs.deepseek.com/news/news261017",
          "checked": "2026-11-07",
          "label": "DeepSeek"
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": "Web 界面（npx 启动）",
          "底层模型": "DeepSeek V4.1 Flash 1017 针对它做了优化",
          "并行与云端": null,
          "跨会话记忆": null,
          "价格入口": "开源（MIT）"
        }
      }
    },
    {
      "id": "zcode",
      "name": "ZCode",
      "aliases": [
        "GLM Coding Plan"
      ],
      "company": "zhipu",
      "tracks": [
        "coding-agent"
      ],
      "desc": "智谱的官方编程环境，为 GLM 模型优化",
      "version": null,
      "versionDate": "2026-07-02",
      "model": "GLM-5.3 等",
      "newsMatch": "ZCode",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "文本",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://z.ai/subscribe",
          "checked": "2026-11-06",
          "label": "Z.ai"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Z.ai",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "matrix": {
        "coding-agent": {
          "使用形态": "Windows、macOS、Linux 桌面应用",
          "底层模型": "GLM-5.3、GLM-5.3-Flash 等",
          "并行与云端": null,
          "跨会话记忆": null,
          "价格入口": "GLM Coding Plan 18 美元/月起"
        }
      }
    },
    {
      "id": "chatgpt-work",
      "name": "ChatGPT 工作",
      "aliases": [
        "ChatGPT Work"
      ],
      "company": "openai",
      "tracks": [
        "office-agent"
      ],
      "desc": "ChatGPT 的工作智能体模式，覆盖桌面端、网页端和移动端",
      "version": null,
      "versionDate": null,
      "model": "GPT 系列",
      "newsMatch": "ChatGPT Work",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://chatgpt.com/pricing",
          "checked": "2026-11-06",
          "label": "ChatGPT"
        }
      ],
      "matrix": {
        "office-agent": {
          "主要能力": null,
          "工作位置": null,
          "使用形态": "桌面端、网页端、移动端",
          "价格入口": "免费版限桌面端有限使用；Plus 起全端"
        }
      }
    },
    {
      "id": "claude-cowork",
      "name": "Claude Cowork",
      "aliases": [
        "Cowork"
      ],
      "company": "anthropic",
      "tracks": [
        "office-agent"
      ],
      "desc": "给目标后在你选定的文件夹和工具里工作，交付成果供你审阅",
      "version": null,
      "versionDate": null,
      "model": "Claude",
      "newsMatch": "Cowork",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://claude.com/product/cowork",
          "checked": "2026-11-06",
          "label": "Anthropic"
        }
      ],
      "matrix": {
        "office-agent": {
          "主要能力": "跨文件和工具完成任务，显示每一步操作",
          "工作位置": "你选定的文件夹和工具，必要时打开浏览器或接管屏幕",
          "使用形态": "网页、桌面、移动端",
          "价格入口": "Pro、Max、Ultra 逐步开放"
        }
      }
    },
    {
      "id": "qwen-work",
      "name": "千问工作助理",
      "aliases": [
        "千问"
      ],
      "company": "qwen",
      "tracks": [
        "office-agent"
      ],
      "desc": "千问的工作助理，提供专业技能和行业数据连接器",
      "version": null,
      "versionDate": null,
      "model": "Qwen 系列",
      "newsMatch": "千问工作",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://www.qianwen.com/",
          "checked": "2026-11-06",
          "label": "千问"
        }
      ],
      "matrix": {
        "office-agent": {
          "主要能力": "专业技能搭配行业数据连接器；PPT 创作、录音纪要、音视频速读",
          "工作位置": null,
          "使用形态": "网页、电脑端",
          "价格入口": null
        }
      }
    },
    {
      "id": "autoclaw",
      "name": "AutoClaw",
      "aliases": [],
      "company": "zhipu",
      "tracks": [
        "office-agent"
      ],
      "desc": "智谱的办公智能体，内置专家知识库和技能",
      "version": null,
      "versionDate": null,
      "model": "GLM 系列",
      "newsMatch": "AutoClaw",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://z.ai/subscribe",
          "checked": "2026-11-06",
          "label": "Z.ai"
        }
      ],
      "matrix": {
        "office-agent": {
          "主要能力": "深度研究、业务数据分析、自动执行工作流",
          "工作位置": null,
          "使用形态": "需下载",
          "价格入口": "可搭配 GLM Coding Plan"
        }
      }
    },
    {
      "id": "chatgpt-images",
      "name": "ChatGPT Images",
      "aliases": [
        "GPT-Image",
        "Images 2.6"
      ],
      "company": "openai",
      "tracks": [
        "image-gen"
      ],
      "desc": "OpenAI 的图像生成，也能生成 GIF 动图",
      "version": "Images 2.6",
      "versionDate": "2026-11-04",
      "model": "GPT-Image-2.6 Flare / Sunburst",
      "newsMatch": "Images 2",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://openai.com/index/introducing-images-2-6",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ],
      "history": [
        {
          "date": "2026-11-04",
          "name": "Images 2.6",
          "note": "生成速度提升 50%，新增 GIF"
        },
        {
          "date": "2026-09-08",
          "name": "Images 2.5",
          "note": null
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": null,
          "图像编辑": "支持多轮编辑",
          "多图参考": null,
          "开放权重": null,
          "使用入口": "ChatGPT、Codex、API"
        }
      }
    },
    {
      "id": "nano-banana",
      "name": "Nano Banana",
      "aliases": [
        "Gemini Image"
      ],
      "company": "google-deepmind",
      "tracks": [
        "image-gen"
      ],
      "desc": "Google 的 Gemini 图像模型",
      "version": "Nano Banana 2.1",
      "versionDate": "2026-10-06",
      "model": "基于 Gemini 3.6 Flash",
      "newsMatch": "Nano Banana",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://deepmind.google/models/gemini-image/",
          "checked": "2026-11-10",
          "label": "Google DeepMind 官网"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": null,
          "图像编辑": null,
          "多图参考": null,
          "开放权重": null,
          "使用入口": null
        }
      }
    },
    {
      "id": "seedream",
      "name": "Seedream",
      "aliases": [
        "豆包图像"
      ],
      "company": "doubao",
      "tracks": [
        "image-gen"
      ],
      "desc": "字节豆包的图像创作模型，主打可控编辑",
      "version": "Seedream 5.5",
      "versionDate": "2026-11-09",
      "model": "Seedream 5.5",
      "newsMatch": "Seedream",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://seed.bytedance.com/zh/seedream5_5",
          "checked": "2026-11-10",
          "label": "字节跳动 Seed"
        },
        {
          "url": "https://www.163.com/tech/article/LBAFFIOE00098IEO.html",
          "checked": "2026-11-10",
          "label": "网易科技"
        },
        {
          "url": "https://www.volcengine.com/docs/82379/1330310",
          "checked": "2026-11-06",
          "label": "火山方舟"
        },
        {
          "url": "https://decohack.com/ai-daily/2026-06-24/",
          "checked": "2026-11-06",
          "label": "DecoHack",
          "official": false
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": null,
          "图像编辑": "多轮编辑时非编辑区域像素级保持；原生生成透明素材",
          "多图参考": null,
          "开放权重": null,
          "使用入口": "豆包、豆包工作、即梦；5.5 的 API 即将上线火山方舟"
        }
      },
      "history": [
        {
          "date": "2026-11-09",
          "name": "Seedream 5.5",
          "note": "生成更快，多轮编辑更稳，支持透明素材；据网易科技，2K 方图编辑约 0.28 元 / 张"
        }
      ]
    },
    {
      "id": "qwen-image",
      "name": "Qwen-Image",
      "aliases": [
        "千问图像"
      ],
      "company": "qwen",
      "tracks": [
        "image-gen"
      ],
      "desc": "阿里的开放权重图像模型，有快速版 Turbo",
      "version": "Qwen-Image-2.1-Turbo",
      "versionDate": "2026-10-09",
      "model": "7B 参数",
      "newsMatch": "Qwen-Image",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://huggingface.co/Qwen/Qwen-Image-2.1",
          "checked": "2026-11-10",
          "label": "官方模型卡"
        },
        {
          "url": "https://www.marktechpost.com/2026/10/09/alibaba-qwen-releases-qwen-image-2-1-turbo-an-8-step-7b-image-model/",
          "checked": "2026-11-06",
          "label": "MarkTechPost"
        }
      ],
      "history": [
        {
          "date": "2026-10-09",
          "name": "Qwen-Image-2.1-Turbo",
          "note": "8 步出图"
        },
        {
          "date": "2026-09-21",
          "name": "Qwen-Image-2.1",
          "note": "7B 开放权重"
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": "2K",
          "图像编辑": "支持",
          "多图参考": null,
          "开放权重": "是",
          "使用入口": "可下载部署；提供托管 API"
        }
      }
    },
    {
      "id": "kling-image",
      "name": "可灵图像",
      "aliases": [
        "Kling Image",
        "Kling IMAGE 3.0"
      ],
      "companyName": "快手",
      "tracks": [
        "image-gen"
      ],
      "desc": "可灵的图像模型，支持系列图和原生 4K",
      "version": "Kling Image 3.0",
      "versionDate": "2026-01-31",
      "model": "Kling IMAGE 3.0",
      "newsMatch": "Kling Image",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://kling.ai/release-note/release-history",
          "checked": "2026-11-06",
          "label": "版本历史"
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": "原生 4K",
          "图像编辑": "局部重绘、风格迁移、多图融合",
          "多图参考": "支持",
          "开放权重": null,
          "使用入口": "可灵创作平台、API"
        }
      }
    },
    {
      "id": "grok-imagine",
      "name": "Grok Imagine",
      "aliases": [
        "Imagine API"
      ],
      "company": "xai",
      "tracks": [
        "image-gen",
        "video-gen",
        "video-edit"
      ],
      "desc": "xAI 的图像和视频生成模型，可以用 API 调用",
      "version": null,
      "versionDate": null,
      "model": "Grok Imagine",
      "newsMatch": "Grok Imagine",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "图像、视频",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://docs.x.ai/docs/guides/video-generation",
          "checked": "2026-11-06",
          "label": "xAI 文档"
        },
        {
          "url": "https://docs.x.ai/docs/models",
          "checked": "2026-11-06",
          "label": "xAI 模型"
        }
      ],
      "matrix": {
        "image-gen": {
          "最高清晰度": "2K",
          "图像编辑": "支持",
          "多图参考": "最多 5 张",
          "开放权重": null,
          "使用入口": "Grok、Imagine API（0.02 美元/张起）"
        },
        "video-gen": {
          "最长时长": "15 秒（低价版）",
          "最高分辨率": "原生 1080p",
          "原生音频": "支持对口型语音",
          "参考输入": "最多 14 张图、3 段声音",
          "开放权重": null,
          "API 价格": "0.02 美元/秒起"
        },
        "video-edit": {
          "产品路线": "AI 模型",
          "主要 AI 能力": "视频编辑、视频延长",
          "使用形态": "Imagine API"
        }
      }
    },
    {
      "id": "seedance",
      "name": "Seedance",
      "aliases": [
        "豆包视频",
        "即梦视频"
      ],
      "company": "doubao",
      "tracks": [
        "video-gen"
      ],
      "desc": "字节的视频生成模型，可以生成 30 秒原生视频",
      "version": "Seedance 2.5",
      "versionDate": "2026-07-31",
      "model": "Seedance",
      "newsMatch": "Seedance",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "视频",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://www.volcengine.com/docs/82379/1330310",
          "checked": "2026-11-06",
          "label": "火山方舟"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Seedance",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "history": [
        {
          "date": "2026-07-31",
          "name": "Seedance 2.5",
          "note": "30 秒原生视频，50 个多模态参考"
        },
        {
          "date": "2026-02",
          "name": "Seedance 2.0",
          "note": null
        },
        {
          "date": "2025-06",
          "name": "Seedance 首发",
          "note": null
        }
      ],
      "matrix": {
        "video-gen": {
          "最长时长": "30 秒；长视频模式测试版可到 3 分钟（据维基百科）",
          "最高分辨率": null,
          "原生音频": null,
          "参考输入": "全模态参考，最多 50 个（据维基百科）",
          "开放权重": null,
          "API 价格": null
        }
      }
    },
    {
      "id": "kling",
      "name": "可灵",
      "aliases": [
        "Kling",
        "Kling AI",
        "快手可灵"
      ],
      "companyName": "快手",
      "tracks": [
        "video-gen",
        "video-edit"
      ],
      "desc": "快手的视频生成产品，4.0 支持 4K、双声道音频和多关键帧",
      "version": "Kling 4.0",
      "versionDate": "2026-10-15",
      "model": "Kling 4.0、4.0 Flash",
      "newsMatch": "可灵|Kling",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "视频",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://kling.ai/release-note/release-notes/Kling_4?type=dialog",
          "checked": "2026-11-06",
          "label": "Kling 4.0 说明"
        },
        {
          "url": "https://kling.ai/release-note/release-history",
          "checked": "2026-11-06",
          "label": "版本历史"
        },
        {
          "url": "https://kling.ai/dev/pricing",
          "checked": "2026-11-06",
          "label": "API 价格"
        }
      ],
      "history": [
        {
          "date": "2026-10-15",
          "name": "Kling 4.0",
          "note": "画质、控制和音频升级"
        },
        {
          "date": "2026-06-17",
          "name": "Kling 3.0 Turbo",
          "note": null
        },
        {
          "date": "2026-04-23",
          "name": "原生 4K 视频",
          "note": null
        },
        {
          "date": "2026-01-31",
          "name": "Kling 3.0",
          "note": null
        }
      ],
      "matrix": {
        "video-gen": {
          "最长时长": "3–30 秒",
          "最高分辨率": "4K，10-bit HDR",
          "原生音频": "双声道立体声，支持对口型和多语言",
          "参考输入": "最多 15 项：10 张图、5 段视频、声音和元素",
          "开放权重": null,
          "API 价格": "1080P 1.5 单位/秒（预付包，单位价格未查到）"
        },
        "video-edit": {
          "产品路线": "AI 模型",
          "主要 AI 能力": "最多 5 段视频输入的多片段编辑、动作控制",
          "使用形态": "可灵创作平台、API"
        }
      }
    },
    {
      "id": "minimax-h3",
      "name": "MiniMax H3",
      "aliases": [],
      "company": "minimax",
      "tracks": [
        "video-gen"
      ],
      "desc": "MiniMax 的开放多模态生成模型，默认 2K 并带原生立体声",
      "version": "H3",
      "versionDate": "2026-07-31",
      "model": "H3",
      "newsMatch": "\\bH3\\b",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "视频",
        "users": "开发者、企业"
      },
      "src": [
        {
          "url": "https://www.minimax.io/blog/minimax-h3",
          "checked": "2026-11-06",
          "label": "MiniMax"
        },
        {
          "url": "https://www.minimax.io/m-plan",
          "checked": "2026-11-06",
          "label": "M Plan"
        }
      ],
      "matrix": {
        "video-gen": {
          "最长时长": "15 秒",
          "最高分辨率": "2K",
          "原生音频": "原生立体声",
          "参考输入": "文本、图像、视频、音频统一理解",
          "开放权重": "是（官方称开放模型）",
          "API 价格": "官方称 2K 每秒价格不到同类的三分之一；具体数字未查到"
        }
      }
    },
    {
      "id": "gemini-omni",
      "name": "Gemini Omni",
      "aliases": [
        "Omni",
        "Gemini Omni Flash"
      ],
      "company": "google-deepmind",
      "tracks": [
        "video-gen"
      ],
      "desc": "Google 的视频生成模型，支持多轮对话修改",
      "version": "Gemini Omni 1.2 Flash",
      "versionDate": "2026-11-05",
      "model": "Gemini Omni",
      "newsMatch": "Omni",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "视频",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
          "checked": "2026-11-06",
          "label": "Google"
        }
      ],
      "matrix": {
        "video-gen": {
          "最长时长": "原生 15 秒",
          "最高分辨率": null,
          "原生音频": null,
          "参考输入": "支持参考，一致性提升",
          "开放权重": null,
          "API 价格": "较上一版降低 30%；具体数字未查到"
        }
      }
    },
    {
      "id": "jianying",
      "name": "剪映",
      "aliases": [
        "JianYing",
        "CapCut"
      ],
      "company": "doubao",
      "tracks": [
        "video-edit"
      ],
      "desc": "字节的视频剪辑工具，海外版为 CapCut，在专业剪辑之上加入 AI 能力",
      "version": null,
      "versionDate": null,
      "model": null,
      "newsMatch": "剪映|CapCut",
      "labels": {
        "layer": "纯应用层",
        "core": "AI 增强",
        "modality": "视频",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://www.capcut.cn/",
          "checked": "2026-11-06",
          "label": "剪映官网"
        },
        {
          "url": "https://en.wikipedia.org/wiki/CapCut",
          "checked": "2026-11-06",
          "label": "维基百科",
          "official": false
        }
      ],
      "matrix": {
        "video-edit": {
          "产品路线": "传统剪辑工具 + AI",
          "主要 AI 能力": "AI 视频生成、营销成片、AI 音乐、智能抠像、画质修复",
          "使用形态": "手机、电脑、网页"
        }
      }
    },
    {
      "id": "grok-voice",
      "name": "Grok Voice",
      "aliases": [
        "Grok 语音"
      ],
      "company": "xai",
      "tracks": [
        "voice"
      ],
      "desc": "xAI 的语音到语音模型，主打低延迟",
      "version": "Grok Voice 3.0",
      "versionDate": "2026-10-14",
      "model": "Grok Voice 3.0",
      "newsMatch": "Grok Voice",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "开发者、企业"
      },
      "src": [
        {
          "url": "https://x.ai/news/grok-voice-3",
          "checked": "2026-11-06",
          "label": "xAI"
        }
      ],
      "matrix": {
        "voice": {
          "主要特点": "语音到语音模型，成本低于同类",
          "实时能力": "延迟低于 1 秒",
          "公开评测": "Full Duplex Bench 97%；官方称 Artificial Analysis 语音榜第一",
          "使用入口": "xAI Voice API"
        }
      }
    },
    {
      "id": "gpt-live",
      "name": "GPT-Live",
      "aliases": [
        "GPT-Live-1"
      ],
      "company": "openai",
      "tracks": [
        "voice"
      ],
      "desc": "OpenAI 的全双工语音模型，可以边听边说",
      "version": "GPT-Live-1（API）",
      "versionDate": "2026-09-10",
      "model": "GPT-Live",
      "newsMatch": "GPT-Live",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api",
          "checked": "2026-11-06",
          "label": "OpenAI"
        }
      ],
      "matrix": {
        "voice": {
          "主要特点": "单一模型同时处理输入和输出音频，不走语音转文字再转语音的链路",
          "实时能力": "全双工，打断处理流畅",
          "公开评测": null,
          "使用入口": "ChatGPT、API"
        }
      }
    },
    {
      "id": "gemini-live",
      "name": "Gemini Live",
      "aliases": [
        "Gemini 3.8 Live"
      ],
      "company": "google-deepmind",
      "tracks": [
        "voice"
      ],
      "desc": "Google 的实时对话模型，可以结合画面并在后台执行任务",
      "version": "Gemini 3.8 Live",
      "versionDate": "2026-09-15",
      "model": "Gemini 3.8 Live",
      "newsMatch": "Gemini 3\\.8 Live",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "普通用户、开发者"
      },
      "src": [
        {
          "url": "https://deepmind.google/blog/introducing-gemini-3-8-live-and-3-8-live-extended-thinking/",
          "checked": "2026-11-06",
          "label": "Google"
        }
      ],
      "matrix": {
        "voice": {
          "主要特点": "复杂推理、实时视觉上下文，后台执行任务不打断对话",
          "实时能力": "实时对话",
          "公开评测": null,
          "使用入口": null
        }
      }
    },
    {
      "id": "voxtral",
      "name": "Voxtral",
      "aliases": [
        "Voxtral 3"
      ],
      "company": "mistral",
      "tracks": [
        "voice"
      ],
      "desc": "Mistral 的语音模型和语音智能体 SDK，支持 50 多种语言",
      "version": "Voxtral 3",
      "versionDate": "2026-10-20",
      "model": "Voxtral 3",
      "newsMatch": "Voxtral",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://mistral.ai/news/voxtral-3",
          "checked": "2026-11-06",
          "label": "Mistral"
        }
      ],
      "matrix": {
        "voice": {
          "主要特点": "转写、语音合成和语音智能体 SDK",
          "实时能力": "面向实时多步对话",
          "公开评测": null,
          "使用入口": "Mistral API、SDK"
        }
      }
    },
    {
      "id": "qwen-audio",
      "name": "Qwen-Audio",
      "aliases": [
        "千问语音"
      ],
      "company": "qwen",
      "tracks": [
        "voice"
      ],
      "desc": "阿里的实时语音对话模型",
      "version": "Qwen-Audio-3.1",
      "versionDate": "2026-10-27",
      "model": "Qwen-Audio-3.1",
      "newsMatch": "Qwen-Audio",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "开发者"
      },
      "src": [
        {
          "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
          "checked": "2026-11-06",
          "label": "百炼"
        }
      ],
      "matrix": {
        "voice": {
          "主要特点": "实时语音对话模型",
          "实时能力": "实时",
          "公开评测": null,
          "使用入口": "阿里云百炼"
        }
      }
    },
    {
      "id": "minimax-music",
      "name": "MiniMax Music",
      "aliases": [
        "Music 3.0"
      ],
      "company": "minimax",
      "tracks": [
        "music"
      ],
      "desc": "MiniMax 的开放权重音乐模型，一次生成完整歌曲",
      "version": "Music 3.0",
      "versionDate": "2026-08-13",
      "model": "Music 3.0",
      "newsMatch": "Music 3",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "开发者、普通用户"
      },
      "src": [
        {
          "url": "https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model",
          "checked": "2026-11-06",
          "label": "MiniMax"
        }
      ],
      "matrix": {
        "music": {
          "主要特点": "作曲、编曲、演唱和制作一次完成",
          "歌曲长度": "最长 5 分钟",
          "开放权重": "是",
          "使用入口": "MiniMax 平台、开放权重下载"
        }
      }
    },
    {
      "id": "lyria",
      "name": "Lyria",
      "aliases": [
        "Google Flow Music"
      ],
      "company": "google-deepmind",
      "tracks": [
        "music"
      ],
      "desc": "Google 的音乐生成模型，在 Google Flow Music 中使用",
      "version": "Lyria 3.5",
      "versionDate": "2026-07-29",
      "model": "Lyria 3.5",
      "newsMatch": "Lyria",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://deepmind.google/blog/were-launching-lyria-35-in-google-flow-music-with-advances-across-musicality-lyrics-vocals-and-creative-control/",
          "checked": "2026-11-06",
          "label": "Google"
        }
      ],
      "matrix": {
        "music": {
          "主要特点": "旋律、歌词和人声质量提升，可控制速度和时长",
          "歌曲长度": null,
          "开放权重": null,
          "使用入口": "Google Flow Music"
        }
      }
    },
    {
      "id": "seedmusic",
      "name": "SeedMusic",
      "aliases": [
        "即梦音乐"
      ],
      "company": "doubao",
      "tracks": [
        "music"
      ],
      "desc": "字节的音乐模型，在即梦 AI 上线",
      "version": "SeedMusic 1.0 Preview",
      "versionDate": null,
      "model": "SeedMusic",
      "newsMatch": "SeedMusic",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "音频",
        "users": "普通用户"
      },
      "src": [
        {
          "url": "https://seed.bytedance.com/zh/special/seed-music",
          "checked": "2026-11-10",
          "label": "Seed 官网"
        },
        {
          "url": "https://decohack.com/ai-daily/2026-06-24/",
          "checked": "2026-11-06",
          "label": "DecoHack",
          "official": false
        }
      ],
      "matrix": {
        "music": {
          "主要特点": null,
          "歌曲长度": null,
          "开放权重": null,
          "使用入口": "即梦 AI"
        }
      }
    },
    {
      "id": "qwen-office",
      "name": "千问办公",
      "aliases": [
        "千问办公 2.0",
        "Team Agent"
      ],
      "company": "qwen",
      "tracks": [
        "office-agent"
      ],
      "desc": "阿里面向个人和团队协作的办公智能体，可把 Agent 带进钉钉工作群",
      "version": "千问办公 2.0",
      "versionDate": "2026-11-09",
      "model": null,
      "newsMatch": "千问办公",
      "labels": {
        "layer": "模型 + 应用",
        "core": "AI 原生",
        "modality": "多模态",
        "users": "普通用户、企业"
      },
      "src": [
        {
          "url": "https://docs.qwenwork.cn/release-notes/desktop",
          "checked": "2026-11-10",
          "label": "千问办公官方更新日志"
        }
      ],
      "matrix": {
        "office-agent": {
          "主要能力": "多人与 Agent 协作、按事件自动触发任务、在对话里直接修改文档和表格",
          "工作位置": "钉钉群聊、文档、AI 表格、AI 听记、宜搭应用",
          "使用形态": "千问办公客户端，三端互联",
          "价格入口": null
        }
      },
      "history": [
        {
          "date": "2026-11-09",
          "name": "千问办公 2.0",
          "note": "新增协作、自动任务、人机共创、资料空间"
        }
      ]
    }
  ],
  "officialDomains": [
    "openai.com",
    "chatgpt.com",
    "anthropic.com",
    "claude.com",
    "google.dev",
    "blog.google",
    "deepmind.google",
    "research.google",
    "developers.googleblog.com",
    "one.google.com",
    "about.fb.com",
    "research.meta.ai",
    "ai.meta.com",
    "meta.com",
    "x.ai",
    "mistral.ai",
    "deepseek.com",
    "kimi.com",
    "moonshot.cn",
    "moonshot.ai",
    "z.ai",
    "zhipuai.cn",
    "bigmodel.cn",
    "minimax.io",
    "minimaxi.com",
    "qwen.ai",
    "qianwen.com",
    "qwenwork.cn",
    "aliyun.com",
    "alibabacloud.com",
    "alibabagroup.com",
    "volcengine.com",
    "bytedance.com",
    "doubao.com",
    "coze.cn",
    "capcut.cn",
    "kling.ai",
    "klingai.com",
    "kuaishou.com",
    "linuxfoundation.org",
    "agents.md",
    "langchain.com",
    "arxiv.org",
    "github.com/deepseek-ai",
    "github.com/openai",
    "github.com/anthropics",
    "github.com/google",
    "github.com/google-deepmind",
    "github.com/meta-llama",
    "github.com/facebookresearch",
    "github.com/mistralai",
    "github.com/qwenlm",
    "github.com/moonshotai",
    "github.com/zai-org",
    "github.com/minimax-ai",
    "github.com/bytedance",
    "github.com/langchain-ai",
    "cursor.com",
    "federalregister.gov",
    "curia.europa.eu",
    "apple.com",
    "apple.com.cn",
    "terawulf.com",
    "ietf.org",
    "openclaw.ai",
    "github.com/openclaw",
    "kimi.ai",
    "huggingface.co/qwen",
    "huggingface.co/moonshotai",
    "huggingface.co/minimaxai",
    "huggingface.co/deepseek-ai",
    "huggingface.co/zai-org",
    "huggingface.co/mistralai",
    "huggingface.co/bytedance-seed"
  ]
};
