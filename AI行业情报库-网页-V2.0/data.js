/*
 * AI 行业情报库 · 数据文件（V2.0）
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
 */
window.DATA = {
  "updated": "2026-11-06",
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
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-opus-4-6",
          "name": "Claude Opus 4.6",
          "date": "2026-02-05",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-opus-4-5",
          "name": "Claude Opus 4.5",
          "date": "2025-11-24",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-sonnet-4-5",
          "name": "Claude Sonnet 4.5",
          "date": "2025-09-29",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
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
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-3-7-sonnet",
          "name": "Claude 3.7 Sonnet",
          "date": "2025-02-24",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-3-5-sonnet",
          "name": "Claude 3.5 Sonnet",
          "date": "2024-06-20",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
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
          }
        },
        {
          "current": false,
          "collected": null,
          "id": "claude-2",
          "name": "Claude 2",
          "date": "2023-07-11",
          "summary": null,
          "src": {
            "url": "https://en.wikipedia.org/wiki/Claude_(AI)",
            "checked": "2026-10-20",
            "official": false
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
            "monthly": "100 美元起",
            "annual": null,
            "perks": "用量为 Pro 的 5 倍或 20 倍；每月 100–200 美元 API 额度"
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
          "checked": "2026-10-20"
        },
        "api": [
          {
            "model": "Claude Fable 5.1",
            "input": "10 美元",
            "output": "50 美元",
            "cache": null
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
            "cache": null
          },
          {
            "model": "Claude Haiku 5.5",
            "input": "0.10 美元起",
            "output": "0.50 美元起",
            "cache": null
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
          "v": "未查到"
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
              "是否开源": "是，开放权重；开源版不含图像输入和非思考模式（据维基百科）",
              "许可证": "据维基百科：2.4T 版为专有许可，27B 蒸馏版为 Apache 2.0",
              "src": [
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
              "参数规模": "约 2.4 万亿（据维基百科）",
              "架构": "混合专家（MoE），开源版名为 Qwen3.8-2.4T-A95B（据维基百科）",
              "上下文窗口": "100 万 token（百炼计价档位上限）",
              "最大输出长度": null,
              "src": [
                {
                  "url": "https://en.wikipedia.org/wiki/Qwen",
                  "checked": "2026-10-20",
                  "official": false
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
          }
        }
      ],
      "pricing": {
        "plans": [],
        "plansNote": "千问 App 的付费会员方案未查到",
        "plansSrc": null,
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
          "v": "未查到"
        },
        "memory": {
          "v": "未查到"
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
          "v": "未查到"
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
          "v": "未查到"
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
          "v": "未查到"
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
          }
        }
      ],
      "pricing": {
        "plans": [
          {
            "name": "免费",
            "monthly": "0",
            "annual": null,
            "perks": "15 GB 存储，基础 Gemini 用量"
          },
          {
            "name": "Google AI Plus（2 TB）",
            "monthly": "9.99 美元",
            "annual": null,
            "perks": "Gemini 用量 2 倍、Flash 模型、Flow、Gmail 中的 Gemini"
          },
          {
            "name": "Google AI Pro（5 TB）",
            "monthly": "19.99 美元",
            "annual": null,
            "perks": "Gemini 用量 4 倍、Gemini 4 Argon、深度研究、Flow、Gmail / 文档中的 Gemini"
          }
        ],
        "plansNote": "按年付最多省 16%",
        "plansSrc": {
          "url": "https://one.google.com/about/plans",
          "checked": "2026-10-20"
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
          "v": "未查到"
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
          "v": "未查到"
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
          "v": "未查到"
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
              "发布日期": "2026-07-16；7 月 27 日开放权重（据维基百科）",
              "开发方": "月之暗面",
              "是否开源": "是，开放权重",
              "许可证": "自定义许可：年收入超 2000 万美元的公司对外提供服务需与月之暗面签约（据维基百科）",
              "src": [
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
              "参数规模": "2.8 万亿（据维基百科）",
              "架构": "稀疏 MoE，896 个专家，每个 token 激活 16 个（据维基百科）",
              "上下文窗口": "100 万 token（据维基百科）",
              "最大输出长度": null,
              "src": {
                "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
                "checked": "2026-10-20",
                "official": false
              }
            },
            "ability": {
              "输入模态": "文本、图像（原生视觉理解，据维基百科）",
              "输出模态": "文本",
              "推理模式": "仅思考模式（阿里云百炼标注）",
              "工具调用": null,
              "src": [
                {
                  "url": "https://en.wikipedia.org/wiki/Kimi_(AI)",
                  "checked": "2026-10-20",
                  "official": false
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
              "src": {
                "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                "checked": "2026-10-20",
                "official": false,
                "label": "Presenc"
              }
            },
            "spec": {
              "参数规模": "约 4280 亿，激活约 230 亿",
              "架构": "混合专家（MoE）；相比 M2.7 改了注意力架构",
              "上下文窗口": "100 万 token",
              "最大输出长度": null,
              "src": {
                "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                "checked": "2026-10-20",
                "official": false,
                "label": "Presenc"
              }
            },
            "ability": {
              "输入模态": "文本、图像、视频",
              "输出模态": "文本",
              "推理模式": null,
              "工具调用": "支持电脑操作",
              "src": {
                "url": "https://presenc.ai/research/minimax-model-lineage-2026",
                "checked": "2026-10-20",
                "official": false,
                "label": "Presenc"
              }
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
              "note": "未查到官方评测数据；字节官网为动态页面，未能读取",
              "src": null
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
          }
        }
      ],
      "pricing": {
        "plans": [],
        "plansNote": "豆包 App 的付费会员方案未查到",
        "plansSrc": null,
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
          "v": "未查到"
        },
        "research": {
          "v": "未查到"
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
          "v": "未查到"
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
          "v": "部分",
          "note": "模型支持 GUI 任务处理",
          "src": {
            "url": "https://www.volcengine.com/docs/82379/1330310",
            "checked": "2026-10-23",
            "label": "方舟模型列表"
          }
        },
        "memory": {
          "v": "未查到"
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
      "type": "产品",
      "title": "将 Agent Skills 标准捐给 AAIF 基金会",
      "src": {
        "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "anthropic",
      "date": "2026-10-21",
      "type": "产品",
      "title": "推出主动式智能体应用 Claude Duet 研究预览",
      "src": {
        "url": "https://claude.com/blog/claude-duet",
        "checked": "2026-10-23"
      }
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
      "src": {
        "url": "https://www.21jingji.com/article/20261020/herald/5330df27d9317a4d21cf51ae14472b44.html",
        "checked": "2026-10-21"
      }
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
      }
    },
    {
      "company": "qwen",
      "date": "2026-10-09",
      "type": "模型发布",
      "title": "发布图像模型 Qwen-Image-2.1-Turbo",
      "src": {
        "url": "https://www.marktechpost.com/2026/10/09/alibaba-qwen-releases-qwen-image-2-1-turbo-an-8-step-7b-image-model/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "qwen",
      "date": "2026-09-22",
      "type": "模型发布",
      "title": "云栖大会公布 Qwen 4 系列，尚未正式上线",
      "src": {
        "url": "https://aitoolsreview.co.uk/insights/qwen-4",
        "checked": "2026-10-20",
        "official": false
      }
    },
    {
      "company": "qwen",
      "date": "2026-09-21",
      "type": "模型发布",
      "title": "开源 7B 图像生成与编辑模型 Qwen-Image-2.1",
      "src": {
        "url": "https://www.marktechpost.com/2026/09/21/alibaba-qwen-releases-qwen-image-2-1/",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "qwen",
      "date": "2026-08-17",
      "type": "模型发布",
      "title": "发布 Qwen3.8-27B，开放 Max 权重",
      "src": {
        "url": "https://www.cnbc.com/2026/08/17/alibaba-meta-qwen-open-weight-ai-laptop-models.html",
        "checked": "2026-10-20"
      }
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
      }
    },
    {
      "company": "openai",
      "date": "2026-10-22",
      "type": "产品",
      "title": "Decisions API 正式上线",
      "src": {
        "url": "https://openai.com/index/decisions-api",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-22",
      "type": "合作",
      "title": "Uber 向 3 万多名员工推广 ChatGPT Work",
      "src": {
        "url": "https://openai.com/index/uber-chatgpt-work-rollout",
        "checked": "2026-10-23"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-21",
      "type": "合作",
      "title": "与谷歌云合作，模型和 Codex 上架谷歌云",
      "src": {
        "url": "https://openai.com/index/openai-models-google-cloud",
        "checked": "2026-10-22"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-21",
      "type": "产品",
      "title": "ChatGPT 广告扩展到 26 个新国家",
      "src": {
        "url": "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
        "checked": "2026-10-22"
      }
    },
    {
      "company": "openai",
      "date": "2026-10-20",
      "type": "合作",
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
      }
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
      }
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
      }
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
      }
    },
    {
      "company": "meta",
      "date": "2026-09-08",
      "type": "产品",
      "title": "推出面向所有人的个人 AI 智能体 Muse",
      "src": {
        "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
        "checked": "2026-10-20"
      }
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
      }
    },
    {
      "company": "xai",
      "date": "2026-10-12",
      "type": "产品",
      "title": "Grok、Cursor、X 合并为一个订阅",
      "src": {
        "url": "https://x.ai/news/x-subscription",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "xai",
      "date": "2026-09-28",
      "type": "产品",
      "title": "推出团队共享的 AI 同事 Team Bots",
      "src": {
        "url": "https://x.ai/news/team-bots",
        "checked": "2026-10-20"
      }
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
      }
    },
    {
      "company": "mistral",
      "date": "2026-10-21",
      "type": "合作",
      "title": "与英伟达合作开发 AI 原生工程设计工作流",
      "src": {
        "url": "https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/",
        "checked": "2026-10-22"
      }
    },
    {
      "company": "mistral",
      "date": "2026-10-20",
      "type": "模型发布",
      "title": "发布语音智能体 SDK 及语音模型 Voxtral 3",
      "src": {
        "url": "https://mistral.ai/news/voxtral-3/",
        "checked": "2026-10-21"
      }
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
      }
    },
    {
      "company": "zhipu",
      "date": "2026-10-05",
      "type": "合作",
      "title": "Cursor 上线 GLM-5.3 系列模型",
      "src": {
        "url": "https://finance.sina.com.cn/jjxw/2026-10-05/doc-iniuekzz2774086.shtml",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "zhipu",
      "date": "2026-08-14",
      "type": "模型发布",
      "title": "发布 GLM-5.3，主打编程和网络安全",
      "src": {
        "url": "https://companies.caixin.com/2026-08-14/102474172.html",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "minimax",
      "date": "2026-10-19",
      "type": "模型发布",
      "title": "正式发布 M3.1 Flash，价格较 M3 降超五成",
      "src": {
        "url": "https://www.minimaxi.com/blog/minimax-m31f",
        "checked": "2026-10-21"
      }
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
      }
    },
    {
      "company": "doubao",
      "date": "2026-10-16",
      "type": "人事",
      "title": "Seed 成立对齐与风险预备部门，全球招聘研究员",
      "src": {
        "url": "https://digitimes.com/news/a20261016PD234/bytedance-testing-development-governance-competition.html",
        "checked": "2026-10-20"
      }
    },
    {
      "company": "minimax",
      "date": "2026-10-22",
      "type": "产品",
      "title": "推出 MiniMax Code 小程序",
      "src": {
        "url": "https://www.minimax.io/blog/minimax-code-mini-app-1792650729",
        "checked": "2026-10-23"
      }
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
      }
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
      }
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
      }
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
      "type": "合作",
      "title": "宣布收购 Pierre，扩展 Codex 代码工具",
      "src": {
        "url": "https://openai.com/index/openai-to-acquire-pierre",
        "checked": "2026-11-06",
        "label": "官方公告"
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    }
  ],
  "version": "V2.0",
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
    }
  ]
};
