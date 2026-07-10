// AI 工具日報 — 每日資料檔（由排程自動更新）
// 格式：每個物件代表一天，newest first
// 所有歷史資料均永久保留
const AI_NEWS_DATA = [
  {
    "date": "2026-07-10",
    "weekday": "星期五",
    "stats": {
      "claude": 2,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9uQmgzMW5SUGNxN3VQLUJmU3YtcEhCVXpyUl9aOVRMVEFDZU94NGJyVS1yV1NUMGoyY2Fycm1iamhuNVBNUlFEQjd2djFiRGRXSmRiZW14akhXdS1XZlNB?oc=5",
        "source": "Anthropic",
        "sub": "feature",
        "published": "2026-07-09",
        "title": "Claude 推出使用反思新功能",
        "desc": "Anthropic 為 Claude 新增了「使用反思」功能,讓使用者能回顧並分析自己與 Claude 的互動方式。這項功能可協助使用者更了解自己如何運用 AI 工具,進而優化工作流程、找出更有效的提示技巧,提升整體生產力。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1PVVQtWnZId3lUME1hcEtIQ3hCck9neGoyQVFvYlNUcUtLaF9RN0dEd0ozMEtQTXNBS2o1M2RwX0RrYkloTG9DdVI2cHNDZVpXYkM1NUx3bEVaXzNwOTJDbDNhREkxRERIS3VPdWJNZVA0Wm91bU1yYW0wbFI?oc=5",
        "source": "數位時代",
        "published": "2026-07-08",
        "title": "Anthropic 工程師揭露：精簡提示詞讓 Claude 表現更佳",
        "desc": "Anthropic 工程師分享 Claude Code 團隊的實戰經驗：刪減 80% 系統提示詞後，模型效能反而大幅提升。文章說明為何過長的提示詞會降低 AI 表現，並提供精簡提示的實務建議與最佳實踐。",
        "tags": [
          "tutorial",
          "prompt"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://www.notion.so/releases/2026-07-09",
        "source": "Notion",
        "sub": "feature",
        "published": "2026-07-09",
        "title": "Notion Workers 支援團隊共享",
        "desc": "Notion 新增 Workers 團隊共享功能,讓使用者能將自己建立的 AI 工作流(Workers)分享給整個團隊使用。團隊成員可直接套用這些預先設定好的自動化流程,無需重複設定,大幅提升協作效率與知識傳承。",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "url": "https://www.notion.so/releases/2026-07-08",
        "source": "Notion",
        "sub": "feature",
        "published": "2026-07-08",
        "title": "Notion Agents 推出 iOS 應用",
        "desc": "Notion 正式發布 Notion Agents iOS 應用程式,讓使用者能在 iPhone 和 iPad 上管理、執行 AI 代理。行動版支援查看代理執行狀態、接收通知、快速調整設定,讓 AI 自動化工作流不再受限於桌面環境。",
        "tags": [
          "tool",
          "agent"
        ]
      }
    ],
    "skipped": "排除：人事任命 2 則、研究論文 4 則、公司動態與案例分享 6 則、活動與投資新聞 5 則、非核心 AI 更新 1 則、6 月中旬以前較舊更新約 15 則,以及 GitHub 技術性小更新約 10 則。"
  },
  {
    "date": "2026-07-09",
    "weekday": "星期四",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 1,
      "grok": 0,
      "news": 2
    },
    "claude": [],
    "openai": [
      {
        "url": "https://openai.com/index/introducing-gpt-live",
        "source": "OpenAI",
        "sub": "feature",
        "published": "2026-07-08",
        "title": "GPT-Live 即時互動功能上線",
        "desc": "OpenAI 推出 GPT-Live，支援即時語音對話與協作互動。用戶可透過語音與 ChatGPT 自然對話，系統即時回應並執行任務，適用於會議記錄、即時翻譯、教學輔導等需要連續互動的場景。",
        "tags": [
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/",
        "source": "Google",
        "sub": "feature",
        "published": "2026-07-07",
        "title": "Gemini API 擴充 Managed Agents 功能",
        "desc": "Google 為 Gemini API 新增 Managed Agents 管理功能，支援背景任務執行、遠端 MCP（Model Context Protocol）整合與多代理協作。開發者可建立自動化工作流，讓 AI 代理持續執行長時間任務並與外部系統互動。",
        "tags": [
          "agent",
          "integration"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE56UU50OWU4ejJ2eTlZVkRDWm1UdzZpNDVYa1M0Y010QllqUDNZTkthcVRyRnM5cF84akRCR3BZTEdJc2wzOF93WC1LcDByODVj?oc=5",
        "source": "數位時代",
        "published": "2026-07-08",
        "title": "AI 簡報工具完整攻略：20 篇實測教學",
        "desc": "彙整 NotebookLM、Claude 等多款 AI 簡報工具的實測教學，包含 20 篇深度文章。涵蓋提示詞撰寫技巧、簡報修改方法、各工具比較與適用場景，是 AI 簡報製作的完整指南。",
        "tags": [
          "tutorial",
          "prompt",
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFBJS2xfMFc1TzZNdy00aFNibmVMb2EzZ0tNX1ctVVlOdGZjN0JyU245NUJEZzdmYVQ3ZzVRLXVJQWlVOXNGYVE3bU5wVmxlOWNYT2dr?oc=5",
        "source": "Meet創業小聚",
        "published": "2026-07-07",
        "title": "Taption AI 錄音轉影片完整教學",
        "desc": "深入介紹 Taption 的錄音轉影片功能，教你如何將音檔自動轉換成影片內容。涵蓋工具設定、轉換流程、輸出格式調整等完整步驟，適合需要快速製作影片內容的創作者。",
        "tags": [
          "tutorial",
          "tool"
        ]
      }
    ],
    "skipped": "刷掉 68 則：客戶案例約 6 則、研究報告與觀點文約 12 則、公司政策/投資/人事約 8 則、晶片硬體約 2 則、開發工具小更新約 15 則、教育計劃/活動約 5 則、其他非核心功能更新約 20 則。"
  },
  {
    "date": "2026-07-07",
    "weekday": "星期二",
    "stats": {
      "claude": 2,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "url": "https://www.koc.com.tw/archives/648222",
        "source": "電腦王阿達",
        "sub": "tutorial",
        "published": "2026-07-06",
        "title": "開源工具讓 Fable 5 的 token 成本最高省 70%",
        "desc": "介紹一款開源工具,能將文字資訊編碼藏進 PNG 圖片裡,讓 Fable 5 讀取圖片時一次取得大量 context,繞過文字 token 計費,實測可省下最高 70% 成本,適合需要大量背景知識的應用。",
        "tags": [
          "tutorial",
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOQmZaZXd4akRTeWpjUk1QTy1BcWZkMDM3Nkc0dXc5SGQ1Y1RVV3VrdmIwcHllZmNubFpxcDF5M0JLeE1QZG5DQ0FEWE1zRjdDM0V6dFdaNlJ5ZjRhOVZWMkViaExIYk5pSTBxckRYSUp1RER3SnhCTEtWampRT2V0dk93?oc=5",
        "source": "數位時代",
        "sub": "tutorial",
        "published": "2026-07-06",
        "title": "Claude Code 提示詞懶人包:官方 52 組指令整理",
        "desc": "彙整 Anthropic 官方推薦的 52 組 Claude Code 指令,適用於工程師、產品經理、設計師等不同角色,涵蓋程式碼審查、重構建議、文件生成、除錯協助等常見場景,一鍵複製直接使用。",
        "tags": [
          "tutorial",
          "tool"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5UQlJwWnlad2VrcERuUTJEUlByNHV5UUV1cXoxdHI3OTZUSzBGNTNYR295TGtfS2pZUFhxWFFRN29DMlVjbDl0V0I5TFAxdjFBQmJCVUJ2eU1PWmZaSUE?oc=5",
        "source": "數位時代",
        "published": "2026-07-05",
        "title": "AI 驅動資安 SOC 轉型：自動化劇本縮短 80% 處置時間",
        "desc": "探討如何運用 AI 技術改造雲端資安營運中心（SOC），透過自動化劇本與 AI 輔助調查，將資安事件處置時間縮短 80%。文章分享實際案例與實踐步驟，適合資安團隊參考。",
        "tags": [
          "tutorial",
          "workflow"
        ]
      }
    ],
    "skipped": "刷掉 66 則官方更新(含棄用通知、企業管理、案例研究、商業合作、趨勢報告等非功能發布);刷掉 11 則教學候選(含活動招生、研習會新聞、觀點文章、非 AI 主題)"
  },
  {
    "date": "2026-07-05",
    "weekday": "星期日",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE95OHBUdEhDX0YxUnVCTHpNS3JnaGJ4bUdoSnVxd0dXTWxsNFpNSkkyUzhhYjBSTks4NTFrU2M4d3l4RmQzUE5xTGlhdnk5R2hTNXJxUQ?oc=5",
        "source": "未來商務",
        "published": "2026-07-05",
        "title": "4步驟用 Claude 將 SOP 轉為技能文件並檢查缺漏",
        "desc": "示範如何用 Claude 將部門標準作業流程（SOP）轉換成可執行的技能文件，只需一句指令就能自動生成任務說明文件，並且同步檢查流程中的漏洞與不一致處，提升文件品質。",
        "tags": [
          "tutorial",
          "prompt",
          "workflow"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-07-02-copilot-agent-session-streaming-is-now-in-public-preview",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-07-02",
        "title": "GitHub Copilot 代理會話串流進入公開預覽",
        "desc": "GitHub Copilot 推出代理會話串流功能的公開預覽版，開發者可以即時接收 AI 代理的回應串流，提升互動體驗與開發效率。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://www.notion.so/releases/2026-07-01",
        "source": "Notion",
        "sub": "feature",
        "published": "2026-07-01",
        "title": "Notion 3.6 版本更新：支援外部代理與 HTML 區塊",
        "desc": "Notion 發布 3.6 版本，新增外部代理 (External Agents) 整合功能與 HTML 區塊支援，讓使用者可以在 Notion 中嵌入更多樣化的內容與 AI 工具。",
        "tags": [
          "tool"
        ]
      }
    ],
    "skipped": "從 72 則 update 候選中排除約 50+ 則公司動態（融資、合作、辦公室）、20+ 則研究論文與技術文章、10+ 則棄用公告與政策文件，選出 4 則具體功能更新。"
  },
  {
    "date": "2026-07-04",
    "weekday": "星期六",
    "stats": {
      "claude": 3,
      "openai": 1,
      "gemini": 0,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE94UjQ1SEhHSWRtZUVlMlZDdHJBbDU1aEFlbzJpV3A1V19NVF9sLVNnbjlkSEcwMV9vZTBUZ0dGdUFybWhHRmRkUVlyVzFTdWo3aFlIaU5wbzlOZw?oc=5",
        "source": "Anthropic",
        "sub": "model",
        "published": "2026-07-01",
        "title": "Anthropic 推出 Claude Sonnet 5 模型",
        "desc": "Anthropic 正式發布新一代 AI 模型 Claude Sonnet 5，這是 Sonnet 系列的最新版本。新模型在推理能力、程式碼生成、多語言處理等方面都有顯著提升，同時維持了 Claude 一貫的安全性與可靠性標準，適用於企業級應用場景。",
        "tags": [
          "model"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE81R0J0dXluYzJGcmxVb3dDY0Z2UjVYT2I5ZkYwSVRrWTBSUm5HZXpWRkFsQ2k5bm1jbVU5cENOY0xkX0tybV9FbnhRcFVac1dncWtqTF85OTZyd3o1dlRXenJkd1h3T1pTSGc?oc=5",
        "source": "Anthropic",
        "sub": "tool",
        "published": "2026-06-30",
        "title": "Claude Science 科學工作台正式上線",
        "desc": "Anthropic 發布專為科學研究設計的 AI 工作台 Claude Science，提供文獻分析、實驗數據處理、假說生成等功能。這個工具整合了 Claude 的語言理解與科學知識，能協助研究人員加速從資料探索到論文撰寫的完整研究流程。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1sOFctbUI0RFFzUnRrVDYyYzdublRhbDUzZkgzaHMzZWpzSFVrRmNVSWk5dFF0ZHBibmFabkJ2ekVlUXlHZS1WU0FYMUJUSzg4cGZxenEtT3ZaalRQd2I1aGk5RGcxN21rMDlN?oc=5",
        "source": "數位時代",
        "published": "2026-07-03",
        "title": "Claude 2026 新手完全指南：Projects、Skills、Cowork 全解析",
        "desc": "從 Claude 基礎操作到進階功能完整教學，涵蓋 Projects 專案管理、Skills 自訂能力、Cowork 協作模式等 2026 最新功能，附使用情境範例與設定技巧，適合初學者快速掌握 Claude 完整生態系。",
        "tags": [
          "tutorial",
          "workflow",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE14eHJSd0VlOWkwTVZYa2lnVVd5ODFqQm1JaEJPQzNpYWFtZGptdVAyd0w0UjRHcGlhdTdIcG9yQUw5ci1nTVpCMkQ0cnZYSU54N3NUa2VsaUF4NnBWb3VlekIwZ2c2amJhZmhud2JWMA?oc=5",
        "source": "數位時代",
        "published": "2026-07-03",
        "title": "ChatGPT 記憶功能設定教學與隱私管理",
        "desc": "教你 3 步驟啟用與管理 ChatGPT 記憶功能，說明免費與付費版差異、記憶內容檢視與刪除方法、隱私控制選項，協助你在便利性與資料安全間取得平衡，附常見問題解答與最佳實踐建議。",
        "tags": [
          "tutorial",
          "tool",
          "workflow"
        ]
      }
    ],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPVFNIb0dRVXZ2MlZ1R3NPMXktLUtTOFpjMEJKa0M1eGp2SzdMWkRCckIxckFWUzFocWczN1lKVVZ3d1BtdlI3NUVid3NXUTlQLUV6TzRwc29nSzdlTTBVd1hEV1pYQVBFVDh1ODh6d2hqZnM4X1g0dDlvYmNPQnRqVzBxMkpPd2c?oc=5",
        "source": "數位時代",
        "published": "2026-07-03",
        "title": "用 AI 與顧問框架優化口語表達技巧",
        "desc": "結合麥肯錫金字塔原理、BCG 結構化思考與 Toastmasters 演講評估框架，教你用 AI 工具分析錄音或逐字稿，找出填充詞（如「那個」「就是」）與邏輯破綻，附實作步驟與改善建議。",
        "tags": [
          "tutorial",
          "workflow",
          "tool"
        ]
      }
    ],
    "skipped": "刷掉了約 70 則：公司動態/投資/人事公告（約 8 則）、研究報告/案例研究（約 12 則）、技術部落格/觀點文章（約 15 則）、GitHub 企業功能細項更新（約 10 則）、Hugging Face 技術論文/工具（約 15 則）、Google 活動報導（約 5 則）、Anthropic 技術文件/系統卡（約 5 則）。"
  },
  {
    "date": "2026-06-30",
    "weekday": "星期二",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 1,
      "grok": 0,
      "news": 3
    },
    "claude": [
      {
        "url": "https://github.blog/changelog/2026-06-29-claude-opus-4-8-fast-mode-is-now-in-preview-for-github-copilot",
        "source": "GitHub",
        "sub": "integration",
        "published": "2026-06-29",
        "title": "GitHub Copilot 預覽 Claude Opus 4.8 快速模式",
        "desc": "GitHub Copilot 現在支援 Claude Opus 4.8 的快速模式（fast mode），讓開發者能在程式碼輔助時使用 Anthropic 最新旗艦模型的高速版本，兼顧推理能力與回應速度，適合需要即時程式碼建議的場景。",
        "tags": [
          "integration",
          "tool"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "url": "https://www.koc.com.tw/archives/647389",
        "source": "電腦王阿達",
        "published": "2026-06-29",
        "title": "Google ADK 框架入門：８分鐘打造專屬 AI Agent",
        "desc": "Google 官方提供的 ADK（Agent Development Kit）入門教學，示範如何在８分鐘內建立自己的 AI Agent。涵蓋框架基礎概念、開發步驟與實際範例，適合開發者快速上手。",
        "tags": [
          "tutorial",
          "agent",
          "workflow"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "url": "https://cursor.com/changelog/ios-mobile-app",
        "source": "Cursor",
        "sub": "feature",
        "published": "2026-06-29",
        "title": "Cursor 推出 iOS 行動應用程式",
        "desc": "AI 程式碼編輯器 Cursor 正式發布 iOS 版本，讓開發者能在 iPhone 和 iPad 上使用 AI 輔助編程功能，支援行動裝置上的程式碼檢視、編輯與 AI 對話，實現隨時隨地寫程式的工作模式。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://pub.aimind.so/your-ai-portraits-look-fake-because-of-this-one-prompting-mistake-and-heres-how-to-fix-it-a40cb503a4a0?source=rss------chatgpt-5",
        "source": "Medium",
        "published": "2026-06-29",
        "title": "為什麼你的 AI 肖像看起來很假？一個提示詞錯誤的解法",
        "desc": "指出多數人在生成 AI 肖像時常犯的提示詞錯誤，導致圖片看起來不自然。文章解釋問題成因，並提供具體的提示詞優化步驟與範例，幫助產出更真實的 AI 肖像作品。",
        "tags": [
          "tutorial",
          "prompt"
        ]
      },
      {
        "url": "https://www.koc.com.tw/archives/647466",
        "source": "電腦王阿達",
        "published": "2026-06-29",
        "title": "LiveCaption 即時雙語字幕工具，搭配 Ollama 本機運行",
        "desc": "介紹 Studio0808 LiveCaption 即時網頁影音字幕翻譯工具，搭配 Ollama 可完全在本機運行，無需雲端服務。教學涵蓋安裝步驟、環境配置與使用範例。",
        "tags": [
          "tutorial",
          "tool",
          "workflow"
        ]
      }
    ],
    "skipped": "共略過 68 則更新：GitHub 工具改進 9 則、Hugging Face 研究平台 15 則、Google 投資與產品更新 8 則、OpenAI 合作案例 14 則、Cursor 功能優化 8 則、Anthropic 研究與企業動態 13 則、晶片硬體 1 則。篩選標準為具體可用的 AI 功能更新。"
  },
  {
    "date": "2026-06-29",
    "weekday": "星期一",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 1,
      "grok": 0,
      "news": 1
    },
    "claude": [],
    "openai": [
      {
        "url": "https://openai.com/index/previewing-gpt-5-6-sol",
        "source": "OpenAI",
        "sub": "model",
        "published": "2026-06-26",
        "title": "OpenAI 預覽新一代模型 GPT-5.6 Sol",
        "desc": "OpenAI 推出下一代語言模型 GPT-5.6 Sol 的預覽版本，具備更強的推理能力與效能提升，為 GPT 系列帶來重大進化，開發者可提前體驗新模型的功能特性與應用潛力。",
        "tags": [
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "url": "https://www.koc.com.tw/archives/647335",
        "source": "電腦王阿達",
        "published": "2026-06-28",
        "title": "Gemini「讀書與學習」筆記本新功能與 5 個使用技巧",
        "desc": "介紹 Gemini 最新推出的「讀書與學習」筆記本功能，並分享 5 個實用技巧。文章說明如何用 AI 整理學習筆記、生成摘要、建立知識連結、設定學習目標，以及如何搭配其他 Gemini 功能提升學習效率。",
        "tags": [
          "tutorial",
          "tool"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-06-26-mai-code-1-flash-for-copilot-business-and-copilot-enterprise",
        "source": "GitHub",
        "sub": "model",
        "published": "2026-06-26",
        "title": "GitHub Copilot 企業版導入 MAI-Code-1-Flash 模型",
        "desc": "GitHub 為 Copilot Business 與 Enterprise 版本引入 MAI-Code-1-Flash 模型，提供更快的程式碼生成速度與更精準的建議，強化企業級開發者的 AI 輔助能力與開發效率。",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "skipped": "刷掉 66 則：企業合作/併購/投資約 8 則、趨勢文/案例分享約 15 則、研究論文約 5 則、硬體晶片 1 則、其餘為次要功能更新或重複項目"
  },
  {
    "date": "2026-06-26",
    "weekday": "星期五",
    "stats": {
      "claude": 3,
      "openai": 2,
      "gemini": 1,
      "grok": 0,
      "news": 3
    },
    "claude": [
      {
        "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9iZjJCVWRWdnpWLWtMTGVEcy1RbmFuWGY3UHhfVmFlQkRZalpoOFZMMzhLeEZhYVBTcjhKR0FZaEF5QlpNVzB2bXVIczF0X0RWbmN4NDM4VmUtZGxyU2dHbGRSWQ?oc=5",
        "source": "Anthropic",
        "sub": "feature",
        "published": "2026-06-23",
        "title": "Anthropic 推出 Claude Tag 新功能",
        "desc": "Claude 新增 Tag 功能，讓使用者能更有效地組織和管理對話內容。這項更新強化了 Claude 在專案管理和知識整理上的實用性，特別適合需要處理大量對話歷程的使用者，提升工作流程的條理性。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSFNzbzg3UjRTM2w4SG1nYmNjS1J2WlFKOFNhS0lBaG5OZ0w4djN1ZVkxUEN6SEZIdHVQMDBDS3VzZko0SEk1YTJPN0lfQW0wWUZFbHdGM3FyaWl3SzRRSlpQQjRJekJ5VW11UkI1Yk9LV2tlNzZMZkN2R042Sm9Xd1J3?oc=5",
        "source": "數位時代",
        "published": "2026-06-17",
        "title": "提示詞怎麼寫？官方公開 Claude prompt 優化四步驟",
        "desc": "Anthropic 官方公開 Claude 提示詞優化方法,解決 AI 回應品質下降問題。教學涵蓋四大步驟:明確任務定義、提供範例、結構化輸出格式、迭代測試優化。適合想提升 Claude 使用效果、解決「AI 變笨」困擾的使用者,文中提供具體 prompt 撰寫技巧與最佳實踐。",
        "tags": [
          "tutorial",
          "prompt"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9aRDItS3BydklKUEdBdHdpckJuSEdSNVU1U2NRQzRoR1Z4U0NTclotZ1MtNmVfRjN4WHVraGhWSVhzaXgydkhOcXExNGZpX2hmdzJuaW5rdVNLR1QtdlRiM3ZKcUdPeGRYeldDMFFOVQ?oc=5",
        "source": "數位時代",
        "published": "2026-06-17",
        "title": "Claude 自動化教學:用 memory 和 connector 找出值得自動化的工作",
        "desc": "教學示範如何運用 Claude 的 memory(記憶)與 connector(連接器)功能,四步驟識別並自動化重複性工作流程。涵蓋工作模式分析、自動化可行性評估、串接外部工具、建立工作流等實作步驟。適合想提升工作效率、減少手動作業的使用者,提供具體的自動化場景範例與實踐指引。",
        "tags": [
          "tutorial",
          "workflow",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "url": "https://openai.com/index/improving-health-intelligence-in-chatgpt",
        "source": "OpenAI",
        "sub": "feature",
        "published": "2026-06-18",
        "title": "ChatGPT 強化健康智能功能",
        "desc": "OpenAI 升級 ChatGPT 的健康相關知識能力，提供更準確的醫療資訊回應與健康建議。這項更新讓 ChatGPT 在健康諮詢、症狀理解和醫療知識查詢上更加可靠，但仍建議使用者諮詢專業醫療人員。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ZSzA3clU3X3lUam84SFhJblRsY2VZM1NBelRqSldXOV9XcWRacVFzd3RaRVlRaHJKcWJlMmVBazRxcmQyU2pISk1hN25vWVdqR01RQ1RsNlRHSWZPVDdIYw?oc=5",
        "source": "經理人",
        "published": "2026-06-17",
        "title": "Codex AI 簡報教學:六步驟做出能修改的投影片與專屬 Skills",
        "desc": "詳解 Codex AI 簡報製作功能,比 ChatGPT 更強大的編輯彈性。六步驟涵蓋:建立專案、輸入大綱、生成投影片、即時修改樣式與內容、匯出格式、建立可重複使用的 Skills。提供完整操作流程與截圖,適合需要快速產出專業簡報、希望保留後續編輯彈性的使用者。",
        "tags": [
          "tutorial",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBTNUFJV3Vkd0xZUjZEQ0xTbHV1YmdjVUZzUEZFSXFXMkFYZmFQb2lOUEpYeVdMZUY4eTIyaG5yajFsMGxrUWt6SnNWM2Z5R21MNVBrT2xMOXJINmZoR1p0alF1dm1NQjRl?oc=5",
        "source": "Now 新聞",
        "published": "2026-06-22",
        "title": "AI 辦公自動化:NotebookLM 最新功能 + KorTex 擴充教學",
        "desc": "解密 NotebookLM 最新功能並搭配 KorTex 擴充套件,實現工作效率翻倍。教學涵蓋 NotebookLM 進階應用(多文件整合、自動摘要、知識圖譜)與 KorTex 瀏覽器外掛設定,示範如何串接兩者完成自動化工作流。提供實際辦公場景範例,適合想優化文件處理流程的上班族。",
        "tags": [
          "tutorial",
          "tool",
          "workflow"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-and-deeper-copilot-integration",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-06-26",
        "title": "GitHub Desktop 3.6 推出 Worktrees 與深度 Copilot 整合",
        "desc": "GitHub Desktop 最新版本新增 Git Worktrees 支援，讓開發者能在同一專案中同時處理多個分支，並強化與 GitHub Copilot 的整合，提升程式碼審查與協作效率。適合需要並行開發多功能的團隊使用。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://cursor.com/changelog/customize",
        "source": "Cursor",
        "sub": "feature",
        "published": "2026-06-22",
        "title": "Cursor 開放自訂功能",
        "desc": "AI 程式編輯器 Cursor 推出自訂功能，讓開發者能根據個人偏好調整介面、快捷鍵和工作流程。這項更新提升了開發體驗的靈活性，讓 Cursor 更貼近不同開發者的使用習慣。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://www.koc.com.tw/archives/647214",
        "source": "電腦王阿達",
        "published": "2026-06-26",
        "title": "蘋果官方教學:三步驟在 Mac 本地端跑 AI Agent 開發 App",
        "desc": "Apple WWDC 2026 示範如何不用 API、不用訂閱,在 Mac 本地端運行 AI Agent 開發 iPad App。使用 MLX、MLX LM、MLX LM Server 技術堆疊,三步驟完成:安裝 mlx-lm、啟動本地模型伺服器、連接開發工具。教學展示 M5 晶片神經加速器 4 倍效能提升、離線可用與資料隱私優勢,附 SwiftUI 繪圖 App 實作範例。",
        "tags": [
          "tutorial",
          "agent",
          "tool"
        ]
      }
    ],
    "skipped": "已刷除約 70 則：包含硬體投資、IPO 聲明、研究論文、應用案例、公司動態、使用技巧教學、活動回顧等非實際功能更新項目。"
  },
  {
    "date": "2026-06-25",
    "weekday": "星期三",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 0,
      "grok": 0,
      "news": 5
    },
    "claude": [],
    "openai": [
      {
        "url": "https://openai.com/index/how-agents-are-transforming-work",
        "source": "OpenAI",
        "sub": "feature",
        "published": "2026-06-25",
        "title": "How agents are transforming work",
        "desc": "OpenAI 深度分析 AI 代理如何改變職場工作模式,從自動化任務執行到決策輔助,探討企業導入 Agent 系統後的實際效益與組織變革,並提供多個產業的應用案例研究。",
        "tags": [
          "agent"
        ]
      }
    ],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-06-25-copilot-code-review-analysis-depth-and-efficiency-updates",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-06-25",
        "title": "Copilot code review: Analysis depth and efficiency updates",
        "desc": "GitHub Copilot 代碼審查功能重大升級,分析深度與效率雙雙提升。新版本能更準確識別潛在安全漏洞、效能瓶頸與程式碼異味,同時縮短審查時間,協助開發團隊在 PR 階段就發現問題。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://github.blog/changelog/2026-06-25-github-copilot-for-jira-is-now-generally-available",
        "source": "GitHub",
        "sub": "integration",
        "published": "2026-06-25",
        "title": "GitHub Copilot for Jira is now generally available",
        "desc": "GitHub Copilot 與 Jira 的整合正式 GA,開發者可直接在 Jira issue 中獲得程式碼建議與技術文件摘要,打通專案管理與開發環節,減少工具切換成本。支援自動產生 ticket 技術規格與預估工作量。",
        "tags": [
          "integration"
        ]
      },
      {
        "url": "https://github.blog/changelog/2026-06-25-actions-steps-can-now-be-run-in-parallel",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-06-25",
        "title": "Actions steps can now be run in parallel",
        "desc": "GitHub Actions 推出並行執行步驟功能,允許 workflow 中的獨立步驟同時運行,大幅縮短 CI/CD 流程時間。適用於需同時執行多項測試、建置不同平台或並行部署的場景,可顯著提升開發效率。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://huggingface.co/blog/allenai/hybrid-token-prediction",
        "source": "Hugging Face",
        "sub": "research",
        "published": "2026-06-25",
        "title": "Which tokens does a hybrid model predict better?",
        "desc": "AllenAI 研究團隊分析混合模型在不同類型 token 上的預測表現差異,發現混合架構在處理特定語義結構(如程式碼、數學公式)時顯著優於純 Transformer 模型,為未來模型架構設計提供新方向。",
        "tags": [
          "model"
        ]
      },
      {
        "url": "https://blog.google/products-and-platforms/products/search/google-finance-updates-june-2026/",
        "source": "Google",
        "sub": "feature",
        "published": "2026-06-25",
        "title": "Our latest Google Finance upgrades, including a new app",
        "desc": "Google Finance 推出全新獨立應用與介面升級,整合 AI 驅動的投資組合分析、即時市場洞察與個人化財經新聞推薦,幫助用戶更高效追蹤投資標的與理解市場趨勢。",
        "tags": [
          "tool"
        ]
      }
    ],
    "skipped": "Medium 通用教學文(AI寫作工具比較、Prompt 教學)共 15 篇;台灣教育 AI 應用報導 8 篇;科技新報非 AI 新聞(太空、海運、半導體)12 篇;電腦王阿達產品開箱與功能更新 5 篇。本日 tutorial lane 候選皆為通用操作指南或廣告性質,無符合「有實質技術深度或創新應用場景」標準之文章。"
  },
  {
    "date": "2026-06-15",
    "weekday": "星期一",
    "stats": {
      "claude": 1,
      "openai": 1,
      "gemini": 0,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE0tNXJJQXNGZWM1d1VmMVRfOFZlYU9VUFcwdm03RFhDRE5uajJOY19mbUQ5ZVpXYW9IOWhzd3JOS3F2c0xIdFRYVUgtZF9RVVI1VW1KVExGb0RVRDBWdlpNTXN1cTA?oc=5",
        "source": "Anthropic",
        "sub": "feature",
        "published": "2026-06-09",
        "title": "Claude Fable 5 和 Mythos 5 正式發佈",
        "desc": "Anthropic 推出新一代 Claude Fable 5 和 Mythos 5 模型，提供更強大的推理能力和多模態處理，為企業級AI應用帶來突破性進展，能處理複雜的分析任務和創意工作。",
        "tags": [
          "model"
        ]
      }
    ],
    "openai": [
      {
        "url": "https://openai.com/index/introducing-openai-partner-network",
        "source": "OpenAI",
        "sub": "feature",
        "published": "2026-06-14",
        "title": "OpenAI 推出合作夥伴網絡計畫",
        "desc": "OpenAI 正式啟動 Partner Network，整合生態系夥伴資源，為企業提供完整的AI解決方案，包含諮詢、部署和客製化服務，加速AI技術商業化應用。",
        "tags": [
          "integration"
        ]
      }
    ],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-06-12",
        "title": "Copilot 程式碼審查新增設定和控制選項",
        "desc": "GitHub Copilot 程式碼審查功能推出新的配置選項，讓開發者能自訂審查標準、設定團隊規範，並控制AI建議的詳細程度，打造符合專案需求的程式碼品質檢查。",
        "tags": [
          "tool"
        ]
      }
    ],
    "skipped": "融資併購新聞 5則、空泛趨勢討論 15則、純公司新聞 8則、無具體操作內容的教學文 25則、非中文相關或標題不明確的文章 15則"
  },
  {
    "date": "2026-06-14",
    "weekday": "星期日",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 1,
      "grok": 0,
      "news": 3
    },
    "claude": [],
    "openai": [
      {
        "url": "https://openai.com/index/academy-courses-applying-ai-at-work",
        "source": "OpenAI",
        "sub": "feature",
        "published": "2026-06-12",
        "title": "OpenAI Academy 推出職場 AI 應用新課程",
        "desc": "OpenAI Academy 發布一系列新的職場 AI 應用課程，幫助專業人士掌握在工作環境中有效運用 AI 的技能。課程涵蓋實際案例和最佳實踐，讓學員能立即將所學應用到日常工作中。",
        "tags": [
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1UVUhXaFViNE1fdWlicVBWUmdEMTd6Zm9lcEFuanJrS2FrU1lnbFZZVXNNY0xMMkZ6cTVPeVVrVEZ5RXNXUGdXVy12NHJLZw?oc=5",
        "source": "天下雜誌",
        "sub": "tutorial",
        "published": "2026-06-10",
        "title": "NotebookLM 完整使用指南與功能教學",
        "desc": "全面解析 Google NotebookLM 的核心功能、使用方法和最新更新。從基礎操作到進階技巧，幫助你掌握這款 AI 筆記工具的各種應用場景和實用技巧。",
        "tags": [
          "tutorial"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "url": "https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview",
        "source": "GitHub",
        "sub": "feature",
        "published": "2026-06-11",
        "title": "GitHub Agentic Workflows 開放公眾預覽",
        "desc": "GitHub 正式推出 Agentic Workflows 功能的公眾預覽版，讓開發者能夠建立自動化的 AI 代理工作流程。這項功能可以自動處理程式碼審查、問題分類、以及其他重複性開發任務。",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "url": "https://cursor.com/changelog/bugbot-updates-june-2026",
        "source": "Cursor",
        "sub": "feature",
        "published": "2026-06-10",
        "title": "Cursor Bugbot 大幅效能提升",
        "desc": "Cursor 的 Bugbot 功能獲得重大升級：速度提升 3 倍、成本降低 22%、錯誤偵測率提高 10%。這些改進讓程式碼錯誤偵測變得更快速準確，大幅提升開發效率。",
        "tags": [
          "tool"
        ]
      },
      {
        "url": "https://huggingface.co/blog/CohereLabs/introducing-north-mini-code",
        "source": "Hugging Face",
        "sub": "feature",
        "published": "2026-06-09",
        "title": "Cohere 推出首款開發者專用模型 North Mini Code",
        "desc": "Cohere 發布專為開發者設計的 North Mini Code 模型，專精於程式碼生成、除錯和解釋。相較於通用模型，這款專用模型在程式設計任務上表現更出色，且推理速度更快。",
        "tags": [
          "model",
          "tool"
        ]
      }
    ],
    "skipped": "融資併購新聞 8 則、空泛趨勢討論 12 則、看不出具體學習內容的教學 15 則、政策法規類 6 則"
  },
  {
    "date": "2026-06-13",
    "weekday": "週六",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 2,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Chrome 擴充：YouTube to NotebookLM，可把影片整理進 NotebookLM",
        "desc": "YouTube to NotebookLM 可把 YouTube 影片、播放清單、頻道與搜尋結果整理進 NotebookLM。這比企業合作新聞更實用，適合用來把中文或英文 AI 工具影片變成可搜尋筆記。",
        "url": "https://chromewebstore.google.com/detail/youtube-to-notebooklm/kobncfkmjelbefaoohoblamnbackjggk",
        "source": "Chrome Web Store",
        "tags": [
          "claude",
          "youtube",
          "notebooklm",
          "tool"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "notebooklm",
        "title": "Android Central：NotebookLM 可主動找來源並做研究輸出",
        "desc": "Android Central 指出 NotebookLM 新版不再只依賴使用者手動上傳資料，能根據研究主題主動找來源，並用 Gemini 3.5 與 Antigravity 支援雲端處理。",
        "url": "https://www.androidcentral.com/apps-software/notebooklm-just-got-a-big-upgrade-and-research-could-get-a-lot-easier",
        "source": "Android Central",
        "tags": [
          "gemini",
          "notebooklm",
          "research"
        ]
      },
      {
        "sub": "gemini",
        "title": "Android Central 長文整理 Gemini 3.5、Nano Banana、Live 與開發者工具",
        "desc": "Android Central 的 Gemini 綜覽更新整理 Gemini Pro/Flash、Nano Banana、Gemini Live、Google AI Studio、Antigravity 等能力。適合快速理解 Google AI 生態現在有哪些可用入口。",
        "url": "https://www.androidcentral.com/apps-software/google-gemini",
        "source": "Android Central",
        "tags": [
          "gemini",
          "google",
          "ecosystem"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "sub": "social",
        "title": "Reddit 討論 Gemini 錯誤與服務穩定度，提醒 AI 工具仍需備援",
        "desc": "Reddit GoogleGeminiAI 版出現 Gemini 1076/1099 錯誤討論，雖然不是產品發布，但對重度使用者有提醒價值：重要工作流不要只押單一模型或單一服務。",
        "url": "https://www.reddit.com/r/GoogleGeminiAI/comments/1u23379/is_google_gemini_down_users_reporting_1099_and/",
        "source": "Reddit",
        "tags": [
          "gemini",
          "reliability",
          "community"
        ]
      }
    ],
    "hf": [
      {
        "sub": "model",
        "title": "Cohere 在 Hugging Face 發布 North Mini Code 開源 coding 模型",
        "desc": "CohereLabs 發布 North Mini Code，30B MoE、3B active parameters，主打 agentic software engineering，並以 Apache 2.0 授權釋出。這是近幾天最值得收進開發者雷達的開源模型。",
        "url": "https://huggingface.co/blog/CohereLabs/introducing-north-mini-code",
        "source": "Hugging Face",
        "tags": [
          "huggingface",
          "coding",
          "model"
        ]
      },
      {
        "sub": "mcp",
        "title": "Hugging Face 示範把 MCP tools 接到 Reachy Mini",
        "desc": "Reachy Mini 文章示範用 Hugging Face Spaces 上的 MCP tools 替機器人增加能力，不需要把工具下載到本機。這是 MCP 從開發工具走向實體裝置與互動應用的有趣案例。",
        "url": "https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini",
        "source": "Hugging Face",
        "tags": [
          "huggingface",
          "mcp",
          "robotics"
        ]
      }
    ],
    "gh": [
      {
        "sub": "sdk",
        "title": "GitHub Copilot SDK 正式 GA，可把 Copilot agent runtime 嵌進自己的工具",
        "desc": "GitHub Copilot SDK 已正式可用，提供 planning、tool invocation、file edits、streaming 與 multi-turn sessions。對想做自家開發工具或內部 agent 的團隊，這比單純用 Copilot Chat 更關鍵。",
        "url": "https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/",
        "source": "GitHub Changelog",
        "tags": [
          "github",
          "copilot",
          "sdk"
        ]
      },
      {
        "sub": "vscode",
        "title": "GitHub 整理 VS Code 5 月 AI 更新：Agents window 與遠端控制更成熟",
        "desc": "GitHub 的 VS Code Copilot 5 月更新提到 Agents window、BYOK 與終端安全效率等能力，方向是讓開發者從編輯器內管理更長、更多步驟的代理任務。",
        "url": "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
        "source": "GitHub Changelog",
        "tags": [
          "github",
          "vscode",
          "agent"
        ]
      }
    ]
  },
  {
    "date": "2026-06-12",
    "weekday": "週五",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 1,
      "grok": 1,
      "news": 0
    },
    "claude": [
      {
        "sub": "concept",
        "title": "Hugging Face：AI agent 詞彙表，搞懂 harness、scaffold 與 coding agent",
        "desc": "這篇整理 coding agent 常見概念，能幫你理解 Claude Code、Codex、Grok Build 這類工具到底差在哪。它不是企業新聞，但對使用這些工具更有幫助。",
        "url": "https://huggingface.co/blog/agent-glossary",
        "source": "Hugging Face",
        "tags": [
          "claude",
          "agent",
          "coding",
          "concept"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "notebooklm",
        "title": "TechCrunch：NotebookLM 可從對話建立來源資料庫",
        "desc": "TechCrunch 報導 NotebookLM 更新後，使用者可從 chat 開始建立 source repository，讓 AI 主動幫忙找資料。這補上原本 NotebookLM 最大痛點：使用前要自己先整理資料。",
        "url": "https://techcrunch.com/2026/06/08/notebooklms-new-update-will-help-you-build-source-repository-from-chat/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "notebooklm"
        ]
      }
    ],
    "grok": [
      {
        "sub": "plugin",
        "title": "xAI 官方：Grok Build 外掛市集可在終端機內瀏覽、安裝、更新外掛",
        "desc": "xAI 表示外掛市集直接內建於 Grok Build，可讓使用者在 terminal 裡瀏覽、安裝、更新外掛。首波方向包含服務整合與開發工具，明顯對準代理式 coding workflow。",
        "url": "https://x.ai/news/grok-plugin-marketplace",
        "source": "xAI",
        "tags": [
          "grok",
          "plugin",
          "terminal"
        ]
      }
    ],
    "news": [],
    "hf": [
      {
        "sub": "code-model",
        "title": "North Mini Code 針對 agentic software engineering 訓練",
        "desc": "CohereLabs 在 Hugging Face 發布 North Mini Code，明確主打代理式軟體工程任務。Apache 2.0 授權讓它比封閉模型更適合進本機或企業自建實驗。",
        "url": "https://huggingface.co/blog/CohereLabs/introducing-north-mini-code",
        "source": "Hugging Face",
        "tags": [
          "huggingface",
          "cohere",
          "coding"
        ]
      }
    ],
    "gh": [
      {
        "sub": "agent-apps",
        "title": "GitHub Agent Apps 讓第三方 AI 代理進入 GitHub workflows",
        "desc": "GitHub changelog 說明 agent apps 可從 GitHub Marketplace 安裝，並整合到 GitHub workflows。這代表 GitHub 正把 AI agent 當成平台層能力，而不是單一 Copilot 功能。",
        "url": "https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps/",
        "source": "GitHub Changelog",
        "tags": [
          "github",
          "agent-apps"
        ]
      },
      {
        "sub": "copilot",
        "title": "GitHub Copilot 用量計費已上線，code review 也會消耗額度",
        "desc": "GitHub changelog 顯示 Copilot 用量制計費已啟用，code review 除了 AI credits，也會消耗 GitHub Actions minutes。若你常讓 AI review PR，這會影響日常成本。",
        "url": "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/",
        "source": "GitHub Changelog",
        "tags": [
          "github",
          "copilot",
          "billing"
        ]
      }
    ]
  },
  {
    "date": "2026-06-11",
    "weekday": "週四",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 0
    },
    "claude": [
      {
        "sub": "model",
        "title": "Anthropic 發表 Claude Fable 5 與 Claude Mythos 5，將 Mythos 級能力帶向更廣泛用戶",
        "desc": "Anthropic 於 2026 年 6 月 9 日推出 Claude Fable 5 與 Claude Mythos 5。Fable 5 是加入更強 safeguards 後可一般使用的 Mythos 級模型，主打長時程任務、軟體工程、視覺與知識工作能力；Mythos 5 則先透過 Project Glasswing 提供給受信任的資安與基礎設施單位。",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-09",
    "weekday": "星期二",
    "stats": {
      "claude": 1,
      "openai": 1,
      "gemini": 1,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "security",
        "title": "Anthropic 公布 AI 輔助網攻分析，惡意帳號行為對照 MITRE ATT&CK",
        "desc": "Anthropic 近日公布一份針對 832 個惡意帳號的分析，指出 AI 正降低攻擊者執行複雜攻擊的門檻，並表示已依據觀察結果更新 Claude 的分類器與偵測機制。",
        "url": "https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack",
        "source": "Anthropic",
        "tags": [
          "claude",
          "security"
        ]
      }
    ],
    "openai": [
      {
        "sub": "memory",
        "title": "OpenAI 升級 ChatGPT 記憶機制，讓記憶內容更能隨時間自動更新",
        "desc": "OpenAI 在 2026 年 6 月 4 日更新 ChatGPT，讓記憶系統更能維持新鮮度與一致性，Plus 與 Pro 用戶可獲得更即時的個人化上下文與更大的記憶容量。",
        "url": "https://openai.com/products/release-notes/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "memory"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "platform",
        "title": "Google 釋出 Gemma 4 QAT 版本，進一步壓低裝置端推論記憶體需求",
        "desc": "Google 於 2026 年 6 月 5 日發布 Gemma 4 的 Quantization-Aware Training 版本，讓模型更適合在手機、邊緣裝置與一般消費級 GPU 上部署。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "platform"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "iThome：蘋果發表新一代 Apple Intelligence，Siri AI 登場",
        "desc": "iThome 於 2026 年 6 月 9 日報導，Apple 在 WWDC26 發表新一代 Apple Intelligence 與全新 Siri AI，主打個人情境理解、螢幕內容感知與跨 App 操作。",
        "url": "https://www.ithome.com.tw/news/176449",
        "source": "iThome",
        "tags": [
          "apple",
          "ai"
        ]
      },
      {
        "title": "INSIDE：WWDC 2026 宣布 Siri 接入 Google Gemini",
        "desc": "INSIDE 於 2026 年 6 月 9 日整理 WWDC 2026 重點，指出 Apple 將 Siri AI 底層接入 Google Gemini，並在多個平台推進 Apple Intelligence 的 AI 重構。",
        "url": "https://www.inside.com.tw/article/41497-wwsc-siri-ai",
        "source": "INSIDE",
        "tags": [
          "google",
          "apple"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-08",
    "weekday": "星期一",
    "stats": {
      "claude": 0,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 0
    },
    "claude": [],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-07",
    "weekday": "星期日",
    "stats": {
      "claude": 0,
      "openai": 0,
      "gemini": 1,
      "grok": 0,
      "news": 0
    },
    "claude": [],
    "openai": [],
    "gemini": [
      {
        "sub": "open",
        "title": "Google 發布 Gemma 4 12B，讓多模態代理模型可直接跑在筆電上",
        "desc": "Google 於 2026 年 6 月 3 日推出 Gemma 4 12B，強調以更小記憶體占用在筆電提供多模態推理與代理工作流能力，並採 Apache 2.0 授權釋出；官方同時表示 Gemma 4 系列累積下載已突破 1.5 億次。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "open"
        ]
      }
    ],
    "grok": [],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-06",
    "weekday": "星期六",
    "stats": {
      "claude": 0,
      "openai": 3,
      "gemini": 0,
      "grok": 1,
      "news": 2
    },
    "claude": [],
    "openai": [
      {
        "sub": "tool",
        "title": "OpenAI 為 Codex 加入角色型外掛、Sites 與註解功能，擴大知識工作應用",
        "desc": "OpenAI 於 2026 年 6 月 2 日宣布，Codex 新增角色導向 plugins、可分享網址的 Sites，以及可原地修訂內容的 annotations，讓分析、研究、行銷與設計等非工程工作也能直接在 Codex 內完成。",
        "url": "https://openai.com/index/codex-for-every-role-tool-workflow/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "memory",
        "title": "OpenAI 發布 Dreaming 記憶架構升級，強化 ChatGPT 的長期個人化",
        "desc": "OpenAI 於 2026 年 6 月 4 日公布更完整的 Dreaming 記憶系統，讓 ChatGPT 能自動更新過期記憶，持續整合多輪對話中的偏好、專案與限制，降低個人化資訊陳舊或互相矛盾的情況。",
        "url": "https://openai.com/index/chatgpt-memory-dreaming/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "memory"
        ]
      },
      {
        "sub": "platform",
        "title": "OpenAI 模型與 Codex 正式在 AWS 上全面可用",
        "desc": "OpenAI 於 2026 年 6 月 1 日宣布，旗下前沿模型與 Codex 已在 AWS 正式上線，企業可透過既有的安全、治理、採購與計費流程，把 OpenAI 能力導入 Amazon Bedrock 與既有雲端工作流。",
        "url": "https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "platform"
        ]
      }
    ],
    "gemini": [],
    "grok": [
      {
        "sub": "video",
        "title": "xAI 推出 grok-imagine-video-1.5-preview，開放以單張圖片生成影片",
        "desc": "xAI 於 2026 年 6 月 3 日把 grok-imagine-video-1.5-preview 開放到 API 預覽版，支援用單張靜態圖片加自然語言提示生成最長 720p 的動態影片，補強 Grok 的多模態創作能力。",
        "url": "https://x.ai/news/grok-imagine-1-5",
        "source": "xAI",
        "tags": [
          "grok",
          "video"
        ]
      }
    ],
    "news": [
      {
        "title": "iThome：OpenAI 發表 Codex 知識工作者導向工具",
        "desc": "iThome 於 2026 年 6 月 3 日報導，OpenAI 正把 Codex 從程式開發助理擴大到知識工作場景，加入角色型外掛、Sites 協作網站與 annotations，瞄準分析、研究與行銷等辦公流程。",
        "url": "https://www.ithome.com.tw/news/176307",
        "source": "iThome",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "title": "INSIDE：Anthropic 共同創辦人 Ben Mann 訪台，聚焦 Claude Code 與 AI 安全",
        "desc": "INSIDE 於 2026 年 6 月 5 日報導，Anthropic 共同創辦人 Ben Mann 在台北談 Claude Code、MCP 與 AI 安全邊界，顯示 Anthropic 持續加強在開發者與基礎設施生態的布局。",
        "url": "https://www.inside.com.tw/article/41483-anthropic-ben-mann-taiwan-visit-ai-safety-jobs-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "developer"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-05",
    "weekday": "星期五",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 2,
      "grok": 0,
      "news": 0
    },
    "claude": [],
    "openai": [
      {
        "sub": "safety",
        "title": "OpenAI 推出 Trusted Contact，讓 ChatGPT 在高風險情境可通知信任聯絡人",
        "desc": "OpenAI 於 2026 年 5 月 7 日開始推出 Trusted Contact，成年人可在 ChatGPT 中指定一位信任聯絡人；若系統與人工審查偵測到嚴重自傷風險，平台可通知該聯絡人協助關懷。",
        "url": "https://openai.com/index/introducing-trusted-contact-in-chatgpt/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "safety"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "platform",
        "title": "Gemini API 新增 Managed Agents，可在隔離 Linux 環境中執行工具與程式碼",
        "desc": "Google 於 2026 年 5 月 19 日宣布 Managed Agents 進入 Gemini API，開發者可用單一呼叫啟動會推理、會用工具、也能在隔離暫時性 Linux 環境中執行程式碼的代理。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "platform"
        ]
      },
      {
        "sub": "enterprise",
        "title": "Google 持續推進 Gemini Enterprise Agent Platform，整合企業代理治理與部署",
        "desc": "Google 在 2026 年 4 月 22 日介紹 Gemini Enterprise Agent Platform，將模型建置、代理整合、安全治理與 DevOps 能力整合到單一平台，讓企業更容易大規模管理 Gemini 與其他模型代理。",
        "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-enterprise-agent-platform/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "enterprise"
        ]
      }
    ],
    "grok": [],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-04",
    "weekday": "星期四",
    "stats": {
      "claude": 2,
      "openai": 0,
      "gemini": 0,
      "grok": 1,
      "news": 2
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Anthropic 上線 Claude Design，可直接生成設計稿、簡報與原型",
        "desc": "Anthropic 於 2026 年 4 月 17 日推出 Claude Design 研究預覽，讓使用者能用對話方式產出設計稿、互動原型、簡報與單頁文件，並可匯出到 Canva、PDF、PPTX 或 HTML。",
        "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
        "source": "Anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 推出 Claude Partner Hub 與服務分級，並加入 MCP 連接器",
        "desc": "Anthropic 於 2026 年 6 月 3 日發布 Claude Partner Network 新進展，新增 Services Track 與 Claude Partner Hub，合作夥伴也能透過新的 MCP connector 在 Claude 內查詢認證、專案與部署狀態。",
        "url": "https://www.anthropic.com/news/services-track-partner-hub",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [
      {
        "sub": "voice",
        "title": "xAI 與 Vapi 合作，把 Grok Voice 帶進數百萬個語音代理",
        "desc": "xAI 於 2026 年 6 月 3 日宣布與 Vapi 合作，讓 Grok 成為 Vapi 12 組核心聲音的預設引擎，並把 Grok 的語音 API 能力帶進 250 萬個以上的 voice agents。",
        "url": "https://x.ai/news/grok-vapi",
        "source": "xAI",
        "tags": [
          "grok",
          "voice"
        ]
      }
    ],
    "news": [
      {
        "title": "TechNews：Claude Opus 4.8 上線，Dynamic Workflows 瞄準大型程式碼任務",
        "desc": "TechNews 在 2026 年 5 月 29 日整理 Anthropic 新模型重點，指出 Claude Opus 4.8 不只升級模型，也把 Dynamic Workflows 帶進 Claude Code，強化多 subagent 的大型工程任務處理。",
        "url": "https://technews.tw/2026/05/29/anthropic-introduces-claude-opus-4-8/",
        "source": "TechNews",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "title": "INSIDE：Antigravity 2.0 從編輯器升級成完整 AI 代理平台",
        "desc": "INSIDE 在 2026 年 5 月 20 日指出，Google 把 Antigravity 2.0 擴展為桌面應用、CLI 與 SDK 三路齊發的平台，目標是讓 Gemini 3.5 Flash 支撐更完整的代理式開發流程。",
        "url": "https://www.inside.com.tw/article/41329-google-io-2026-antigravity-2-gemini-flash-developer-agents",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "platform"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-03",
    "weekday": "星期三",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "safety",
        "title": "Anthropic 擴大 Project Glasswing，讓更多關鍵單位測試真實世界 AI 漏洞風險",
        "desc": "Anthropic 於 2026 年 6 月 2 日宣布擴大 Project Glasswing，將計畫延伸到約 150 個新增組織，讓更多關鍵基礎設施與重要軟體維護方能使用 Claude Mythos Preview 做漏洞掃描與防禦研究。",
        "url": "https://www.anthropic.com/news/expanding-project-glasswing",
        "source": "Anthropic",
        "tags": [
          "claude",
          "safety"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "iThome：Anthropic 推出 Claude Opus 4.8，強化代理式任務與程式開發表現",
        "desc": "iThome 於 2026 年 6 月 1 日整理 Anthropic 最新模型更新，指出 Claude Opus 4.8 把推理控制與 Dynamic Workflows 拉進正式產品線，明顯瞄準代理式開發工作。",
        "url": "https://www.ithome.com.tw/news/176270",
        "source": "iThome",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "title": "INSIDE：OpenAI 把理財與財務分析流程帶進 ChatGPT",
        "desc": "INSIDE 報導 OpenAI 近期把個人理財與財務分析流程整合進 ChatGPT，反映 ChatGPT 正從對話工具擴大到更完整的日常任務代理場景。",
        "url": "https://www.inside.com.tw/article/41312-openai-chatgpt-personal-finance-tool-launch",
        "source": "INSIDE",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-02",
    "weekday": "星期二",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 1,
      "grok": 0,
      "news": 1
    },
    "claude": [],
    "openai": [
      {
        "sub": "security",
        "title": "OpenAI 推出 Advanced Account Security，加強 ChatGPT 帳號防護",
        "desc": "OpenAI 已開始提供 Advanced Account Security，要求使用者以 passkey 或相容安全金鑰登入，停用較弱的密碼與 Email/SMS 驗證路徑，並加入 recovery keys、較短 session 與更嚴格的帳號恢復流程。",
        "url": "https://help.openai.com/en/articles/20001221-advanced-account-security",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "security"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "enterprise",
        "title": "Gemini Enterprise Agent Platform 與 Google Cloud 服務進一步整合",
        "desc": "Google 在 I/O 2026 的 Cloud 重點中把 Gemini Enterprise Agent Platform 列為主軸，並強調 Managed Agents API、Antigravity 擴展能力與企業雲端工作流的串接，持續把代理式開發推向企業場景。",
        "url": "https://blog.google/intl/zh-tw/products/cloud/2026-google-io-google-cloud-highlights/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "enterprise"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "iThome：OpenAI 更新 GPT-5.5 Instant，強調降幻覺與個人化回應",
        "desc": "iThome 在 2026 年 5 月 6 日整理 GPT-5.5 Instant 更新，指出新版模型已成為 ChatGPT 預設模型，並強調事實錯誤更少、回答更精簡，也能更好利用既有對話與已連結服務做個人化回應。",
        "url": "https://www.ithome.com.tw/news/175573",
        "source": "iThome",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-06-01",
    "weekday": "星期一",
    "stats": {
      "claude": 0,
      "openai": 0,
      "gemini": 1,
      "grok": 0,
      "news": 0
    },
    "claude": [],
    "openai": [],
    "gemini": [
      {
        "sub": "platform",
        "title": "Google 公布 I/O 2026 開發者重點，擴充 Gemini API、AI Studio 與 Antigravity",
        "desc": "Google 在 2026 年 5 月 19 日的開發者重點文章中，宣布更新 Gemini API、Google AI Studio 與 Antigravity，主打從 prompt 走向可上線的 agent 應用，並把 Android 原生支援納入同一套開發流程。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "platform"
        ]
      }
    ],
    "grok": [],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-31",
    "weekday": "星期日",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 0,
      "grok": 1,
      "news": 2
    },
    "claude": [],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex 新增 Windows Computer Use 與遠端控制能力",
        "desc": "OpenAI 在 5 月 29 日的 ChatGPT 企業版與教育版更新中，替 Codex 加入 Windows Computer Use 與遠端控制。符合資格的使用者現在可讓 Codex 直接在 Windows 應用程式中看、點、輸入，也能從手機或 Mac 端遠端接手正在執行的工作。",
        "url": "https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [],
    "grok": [
      {
        "sub": "integration",
        "title": "xAI 把 Grok 帶進 Kilo Code，訂閱帳號可直接在 IDE 與 CLI 使用",
        "desc": "xAI 5 月 27 日宣布可把 Grok 帳號直接接到 Kilo Code。完成 OAuth 連線後，使用者能在 VS Code、JetBrains、CLI 與 Web 介面使用 Grok Build 與其他 Grok 模型，不必另外申請 API key。",
        "url": "https://x.ai/news/grok-kilocode",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "TechNews：宏碁發表搭載 Gemini 的 AI 眼鏡，支援即時翻譯與影像分析",
        "desc": "TechNews 5 月 30 日報導，宏碁在 COMPUTEX 2026 前夕推出 Acer GI0 AI 眼鏡，內建由 Google Gemini 驅動的語音互動、即時影像分析、拍照錄影與翻譯功能，顯示 Gemini 正往穿戴裝置擴張。",
        "url": "https://ccc.technews.tw/2026/05/30/new-acer-ai-and-ar-glasses-expand-on-the-go-capabilities/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "device"
        ]
      },
      {
        "title": "TechNews：代理性 AI 需求推升記憶體市場，2027 年產值上看 1.28 兆美元",
        "desc": "TechNews 5 月 29 日引用 TrendForce 指出，AI 發展重心正從訓練轉向推理與代理式應用，連帶推升 KV cache、HBM 與 DRAM 需求，讓全球記憶體市場產值預估在 2027 年擴大到 1.28 兆美元。",
        "url": "https://technews.tw/2026/05/29/agentic-ai-drives-memory-demand-growth-global-memory-market-value-estimated-to-expand-to-1-28-trillion-by-2027/",
        "source": "TechNews 科技新報",
        "tags": [
          "industry",
          "infrastructure"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-30",
    "weekday": "星期六",
    "stats": {
      "claude": 2,
      "openai": 2,
      "gemini": 3,
      "grok": 0,
      "news": 3
    },
    "claude": [
      {
        "sub": "model",
        "title": "Anthropic 推出 Claude Opus 4.8，加入 effort control 與 Cowork 支援",
        "desc": "Anthropic 於 5 月 28 日發布 Claude Opus 4.8，提升編碼、代理任務與實務知識表現，同步在 claude.ai 與 Cowork 提供 effort control，讓使用者自行調整思考深度與成本。",
        "url": "https://www.anthropic.com/news/claude-opus-4-8",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 收購 Stainless，強化 SDK 與 MCP 工具鏈",
        "desc": "Anthropic 於 5 月 18 日宣布收購 Stainless。這家公司原本就負責 Anthropic 官方 SDK 生成，收購後將進一步強化 Claude API、CLI 與 MCP server 的開發者體驗。",
        "url": "https://www.anthropic.com/news/anthropic-acquires-stainless",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "OpenAI 更新 GPT-5.5 Instant，強化可讀性並移除該模型的 Canvas",
        "desc": "OpenAI 在 5 月 28 日更新 ChatGPT 發版說明，表示 GPT-5.5 Instant 與 API 的回覆風格與品質已調整得更自然易讀；同時 Canvas 不再提供給 GPT-5.5 Instant 與 GPT-5.5 Thinking。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-plus-upgrade-faq",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "enterprise",
        "title": "OpenAI 與 Dell 合作，把 Codex 帶進混合雲與地端企業環境",
        "desc": "OpenAI 於 5 月 18 日宣布與 Dell Technologies 合作，讓企業可在混合與 on-prem 環境中部署 Codex，用於收集脈絡、撰寫報告、協調任務與串接業務系統。",
        "url": "https://openai.com/index/dell-codex-enterprise-partnership/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "enterprise"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini App 升級代理能力，帶來 Daily Brief、Spark 與 Omni",
        "desc": "Google 同日在 Gemini App 更新中加入更主動的代理能力，包括整理你的一天的 Daily Brief、全天候背景協助的 Spark，以及更自然的多模態互動能力 Omni。",
        "url": "https://blog.google/intl/zh-tw/products/explore-get-answers/gemini-apps-all-up",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Google 搜尋 AI 模式改以 Gemini 3.5 Flash 為全球預設模型",
        "desc": "Google 在 I/O 2026 搜尋更新中表示，AI Mode 已全面升級為 Gemini 3.5 Flash，並強調會用更客製化、互動式的回答形式處理複雜查詢。",
        "url": "https://blog.google/intl/zh-tw/products/explore-get-answers/search-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "platform",
        "title": "Android 導入 Gemini Intelligence，擴大主動式 AI 助理體驗",
        "desc": "Google 在 5 月 13 日宣布 Android 將導入 Gemini Intelligence，先支援新款 Samsung Galaxy 與 Pixel，之後再擴展到手錶、車載系統、眼鏡與筆電等更多裝置。",
        "url": "https://blog.google/intl/zh-tw/products/android-chrome-play/android-gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "platform"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "INSIDE：Anthropic 推出 Opus 4.8，強化代理協作與思考深度控制",
        "desc": "INSIDE 於 5 月 29 日整理 Anthropic 最新升級，指出 Opus 4.8 除了模型能力提升，也把 effort control 帶進 claude.ai，讓使用者能在速度、費用與推理深度間自行取捨。",
        "url": "https://www.inside.com.tw/article/41418-anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool",
        "source": "INSIDE",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "title": "iThome：xAI 推出 Grok Build，加入 AI 程式代理工具戰局",
        "desc": "iThome 於 5 月 18 日報導，xAI 以 Grok Build 切入 terminal coding agent 領域，與 Codex、Claude Code、Gemini CLI 等工具正面競爭。",
        "url": "https://www.ithome.com.tw/news/175886",
        "source": "iThome",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "title": "TechNews：OpenAI 推出 Daybreak，強化以 AI 主動挖掘漏洞的資安流程",
        "desc": "TechNews 於 5 月 13 日報導 OpenAI 發表 Daybreak，結合 Codex Security agent 與多款資安模型，目標是在攻擊者發現前更早找出高風險漏洞。",
        "url": "https://infosecu.technews.tw/2026/05/13/openai-introduces-daybreak/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "security"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-29",
    "weekday": "星期五",
    "stats": {
      "claude": 3,
      "openai": 1,
      "gemini": 2,
      "grok": 1,
      "news": 3
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Claude Managed Agents 新增自架沙箱與 MCP tunnels",
        "desc": "Anthropic 推出 Managed Agents 新功能，讓企業可把工具執行環境放在自有基礎設施內，並透過 MCP tunnels 安全連到私有服務。",
        "url": "https://claude.com/blog/claude-managed-agents-updates",
        "source": "Claude Blog",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 推出 Agent view，可集中管理多個工作階段",
        "desc": "Claude Code 新增 Agent view，支援從單一介面查看哪些代理人正在執行、等待回覆或已完成，降低多 terminal 並行工作的切換成本。",
        "url": "https://claude.com/blog/agent-view-in-claude-code",
        "source": "Claude Blog",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "enterprise",
        "title": "Claude Platform on AWS 正式全面可用",
        "desc": "Claude Platform on AWS 現已正式提供完整平台能力，包含 Managed Agents、Code Execution、Skills、MCP connector 與 Files API 等功能。",
        "url": "https://claude.com/blog/claude-platform-on-aws",
        "source": "Claude Blog",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex 更新：目標模式全面可用，瀏覽器註解與 Appshots 上線",
        "desc": "OpenAI 在 5 月 21 日的 ChatGPT 版本說明中宣布，Codex 的目標模式已在 App、IDE 擴充套件與 CLI 全面可用，並加入 Appshots 與應用程式內瀏覽器註解。",
        "url": "https://help.openai.com/zh-hant/articles/6825453-chatgpt-%E7%99%BC%E8%A1%8E%E8%AA%AA%E6%98%8E",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash 正式上線，主打代理人與程式開發",
        "desc": "Google 於 I/O 2026 發表 Gemini 3.5 系列，率先推出 3.5 Flash，主打長時間代理人任務、程式開發與更快的輸出速度。",
        "url": "https://blog.google/intl/zh-tw/products/explore-get-answers/gemini-3-5/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini Omni Flash 開始推送到 Gemini、Flow 與 YouTube Shorts",
        "desc": "Gemini Omni Flash 主打從文字、圖片、音訊與影片輸入直接生成可編修的高品質影片，並已開始進入 Gemini app、Google Flow 與 YouTube Shorts。",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build 0.1 以公開 Beta 登上 xAI API",
        "desc": "xAI 於 5 月 28 日把 grok-build-0.1 開放到 API 公測，鎖定 agentic coding、除錯、Web 開發與 MCP 支援，並主打高輸出速度。",
        "url": "https://x.ai/news/grok-build-0-1",
        "source": "xAI",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "title": "TechNews：ChatGPT 開放遠端存取電腦上的 Codex",
        "desc": "科技新報整理 OpenAI 的最新 Codex 行動版能力，重點是可從 iPhone、iPad 與 Android 裝置遠端掌握正在執行中的工作。",
        "url": "https://technews.tw/2026/05/15/httpsopenai-comindexwork-with-codex-from-anywhere/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "title": "iThome：Google 推出 Gemini 3.5 Flash，強打代理人開發",
        "desc": "iThome 指出 Gemini 3.5 Flash 聚焦多步驟工作流程、子代理協作與長時間任務，並直接把競爭焦點拉到企業代理人開發。",
        "url": "https://www.ithome.com.tw/news/175949",
        "source": "iThome",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "INSIDE：Anthropic 收購 Stainless，搶下 SDK 與 MCP 基礎設施",
        "desc": "INSIDE 將這筆收購解讀為代理人競爭延伸到基礎設施層，Anthropic 透過掌握 SDK 與 MCP 實作工具，強化 Claude 生態系。",
        "url": "https://www.inside.com.tw/article/41323-anthropic-acquires-stainless",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-28",
    "weekday": "星期四",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "integration",
        "title": "KPMG 將 Claude 擴到 276,000 名員工與核心業務",
        "desc": "Anthropic 公告 KPMG 將 Claude 導入全球核心業務與員工流程，企業 AI 競爭從模型效能延伸到導入與服務能力。",
        "url": "https://www.anthropic.com/news/kpmg-integrates-claude",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "5/28 AI 日報：企業導入服務成為前線戰場",
        "desc": "Build Fast with AI 將 5/28 重點歸納為 Anthropic、OpenAI、KPMG、DeployCo 等企業導入戰，焦點不只在模型，也在部署能力。",
        "url": "https://www.buildfastwithai.com/blogs/ai-news-today-may-28-2026",
        "source": "Build Fast with AI",
        "tags": [
          "integration"
        ]
      },
      {
        "title": "Anthropic 與美國國防部的供應鏈風險訴訟仍受關注",
        "desc": "週報指出 Anthropic 因軍事用途與供應鏈風險認定問題提告，美國法院已先阻止相關限制執行。",
        "url": "https://unrot.co/blogs/weekly-ai-news-may-24-28-2026",
        "source": "Unrot",
        "tags": [
          "claude"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-27",
    "weekday": "星期三",
    "stats": {
      "claude": 1,
      "openai": 1,
      "gemini": 2,
      "grok": 2,
      "news": 4
    },
    "claude": [
      {
        "sub": "security",
        "title": "Claude 產品隔離文章成為 agent 安全參考",
        "desc": "Anthropic 5/25 工程文聚焦 agent 權限邊界、Claude Code 啟動信任與 Cowork 類產品風險控制，可作為自動化部署參考。",
        "url": "https://www.anthropic.com/engineering/how-we-contain-claude",
        "source": "Anthropic Engineering",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "enterprise",
        "title": "OpenAI 新聞頁列出 Codex 與 Dell 的企業合作",
        "desc": "OpenAI 近期企業公告包含 Dell 合作、Codex 遠端工作、voice API 與企業 AI adoption 等方向。",
        "url": "https://openai.com/news/company-announcements/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "integration"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 代表 Google 把助理推向 24/7 agent",
        "desc": "Google 說 Spark 會在雲端背景運作，能跨 Workspace 工具處理任務，是 Gemini 應用變得更 agentic 的核心更新。",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Gemini I/O 更新延伸到搜尋、Workspace 與行動助理",
        "desc": "多家科技媒體把 Google I/O 2026 的 Gemini 更新視為 AI 週期重點，涵蓋 Search、Gemini app 與 Workspace。",
        "url": "https://www.techradar.com/news/live/google-io-2026-live",
        "source": "TechRadar",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "integration",
        "title": "Grok Connectors 支援 Web 與行動端常用服務整合",
        "desc": "xAI Connectors 讓 Grok 能直接連動工作資料來源，減少複製貼上與跨工具切換。",
        "url": "https://x.ai/news/grok-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "model",
        "title": "Grok Voice Think Fast 1.0 強調複雜客服與銷售流程",
        "desc": "xAI 語音模型針對低延遲、模糊請求、多工具調用等場景，補強 Grok 在即時語音 agent 的能力。",
        "url": "https://x.ai/news/grok-voice-think-fast-1",
        "source": "xAI",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "title": "5/27 AI 日報：Anthropic、SpaceX、Microsoft agent 更新成焦點",
        "desc": "Build Fast with AI 將 5/27 焦點放在 Anthropic 資本動態、SpaceX roadshow、Microsoft computer-using agents 與 Gemini API 變動。",
        "url": "https://www.buildfastwithai.com/blogs/ai-news-today-may-27-2026",
        "source": "Build Fast with AI",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "Copilot Studio computer use 進入 GA，legacy GUI 自動化更容易",
        "desc": "Microsoft Community Hub 說 Copilot Studio maker 可建立能直接操作應用程式的 agent，將 GUI 自動化納入 Power Platform。",
        "url": "https://techcommunity.microsoft.com/blog/copilot-studio-blog/computer-using-agents-in-microsoft-copilot-studio-are-now-generally-available/4519427",
        "source": "Microsoft Community Hub",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "Windows 11 Ask Copilot 預計夏季整合到工作列",
        "desc": "Windows Central 報導 Microsoft 文件顯示 Ask Copilot 將把 Copilot 與 AI agents 帶進工作列與開始功能表。",
        "url": "https://www.windowscentral.com/microsoft/windows-11/microsoft-confirms-plans-to-integrate-copilot-with-the-taskbar-on-windows-11-this-summer-ask-copilot-expected-to-debut-mid-2026",
        "source": "Windows Central",
        "tags": [
          "integration"
        ]
      },
      {
        "title": "AI 創造力研究持續被重新討論",
        "desc": "近期日報與研究摘要提到大型研究顯示生成式 AI 在部分創意測驗中已能超過平均人類，但頂尖創意仍有差距。",
        "url": "https://completeaitraining.com/news/100000-person-study-finds-ai-beats-the-average-on/",
        "source": "Complete AI Training",
        "tags": [
          "model"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-26",
    "weekday": "星期二",
    "stats": {
      "claude": 2,
      "openai": 2,
      "gemini": 4,
      "grok": 3,
      "news": 2
    },
    "claude": [
      {
        "sub": "integration",
        "title": "Anthropic 推 20+ 法律 MCP 連接器與 12 外掛，Claude for Legal 進軍企業法務",
        "desc": "Anthropic 釋出超過 20 個法律專用 MCP 連接器與 12 個實務外掛，涵蓋研究、合約、訴訟探索與案件管理，正式進軍企業法律市場。",
        "url": "https://www.inside.com.tw/article/41282-anthropic-claude-for-legal-mcp-connectors-plugins-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 算力大擴容：租用 SpaceX 資料中心 22 萬張 GPU，限額全面提升",
        "desc": "Anthropic 與 SpaceX 達成獨家算力合作，租用孟菲斯 Colossus 1 資料中心超 300 兆瓦容量與 22 萬張 GPU，Claude Code 編程額度翻倍、API 速率最高漲 16 倍。",
        "url": "https://blog.csdn.net/qq_73472828/article/details/160867575",
        "source": "CSDN",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex 進駐 ChatGPT 手機 App，遠端遙控 Mac 開發不中斷",
        "desc": "OpenAI 將 Codex 整合至 ChatGPT iOS/Android App，用戶可在手機上遠端啟動、監控與審核 Codex 工作，掃描 QR Code 即可配對，每週超 400 萬人使用。",
        "url": "https://www.inside.com.tw/article/41304-openai-says-codex-is-coming-to-your-phone",
        "source": "INSIDE",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 將推桌面超級 App：ChatGPT、Codex、瀏覽器三合一",
        "desc": "OpenAI 計畫將 ChatGPT、Codex 與自研瀏覽器整合為桌面超級 App，加速佈局 Agent 戰場，目標成為使用者的統一 AI 入口。",
        "url": "https://www.bnext.com.tw/article/90360/openai-superapp-gpt-codex",
        "source": "數位時代",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 登場：Google 版 24 小時 AI 代理人，跨平台持續運作",
        "desc": "Google I/O 2026 發布 Gemini Spark 個人 AI 代理人，支援 iOS、Android 與網頁，在 Google Cloud 虛擬機上持續運行，可自動整理信箱、建立優先任務清單，基於 Gemini 3.5 Flash 與 Antigravity 架構。",
        "url": "https://www.inside.com.tw/article/41331-google-gemini-spark",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash 發布，成為 Gemini App 與搜尋 AI 模式預設模型",
        "desc": "Google I/O 2026 推出 Gemini 3.5 系列，3.5 Flash 成為 Gemini 應用與 Google Search AI Mode 的新預設模型，同場發表影片模型 Gemini Omni。",
        "url": "https://www.inside.com.tw/article/41324-gemini-3.5-google-io-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini App 大改版：每日簡報、Neural Expressive 設計語言、macOS 版將登場",
        "desc": "Gemini App 推出 Daily Brief 每日摘要功能整合信箱行事曆，採用全新 Neural Expressive 設計語言，並預告 macOS 原生版本即將推出。",
        "url": "https://www.inside.com.tw/article/41332-gemini-google-io-update-macos",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Docs Live 亮相：口頭整理思緒，AI 秒轉正式文件",
        "desc": "Google I/O 2026 發表 Docs Live 功能，用戶可口述想法，Gemini 即時轉換為結構化正式文件，深度整合 Google Workspace。",
        "url": "https://www.inside.com.tw/article/41333-google-io-2026-docs-live",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 發布：內建推理、百萬 Token 上下文、原生影片輸入",
        "desc": "xAI 5 月 4 日推出 Grok 4.3，內建推理能力、支援一百萬 Token 上下文窗口與原生影片輸入，API 定價每百萬 Token 1.25 美元。",
        "url": "https://docs.x.ai/developers/models/grok-4.3",
        "source": "xAI",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Build 0.1 早期存取：專為 Agent 工作流打造的程式碼模型",
        "desc": "xAI 5 月 14 日釋出 Grok Build 0.1 早期存取版，專為 Agent 式工作流訓練的程式碼模型，SuperGrok 與 X Premium 用戶可透過 OpenCode 環境使用。",
        "url": "https://pasqualepillitteri.it/en/news/2584/grok-build-xai-cli-2026",
        "source": "Professor Glitch",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 上線：跨對話持久記憶與自訂專業能力",
        "desc": "xAI 5 月 18 日推出 Grok Skills，為 Grok 添加跨對話的持久自訂專業能力，內建文件生成、簡報製作與工作流自動化，支援網頁、iOS 與 Android。",
        "url": "https://x.ai/news/grok-skills",
        "source": "xAI",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "title": "Google I/O 2026 懶人包：Gemini 全面 AI 化、代理人電商、AI 眼鏡",
        "desc": "Google I/O 2026 重點包含 Gemini Spark 代理人、Gemini Intelligence、代理人電商購物圖譜、智慧眼鏡與 Googlebook AI 筆電等發表。",
        "url": "https://www.inside.com.tw/article/41313-google-io-2026-five-things-to-expect-confirmed",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Flipbook 問世：AI 即時生成整個網頁畫面的實驗性視覺瀏覽器",
        "desc": "全新視覺瀏覽器 Flipbook 以 AI 即時生成每個像素，網站不再是一頁頁寫出來的架構，而是模型即時繪製的互動畫面。",
        "url": "https://applealmond.com/posts/310974",
        "source": "蘋果仁",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-25",
    "weekday": "星期日",
    "stats": {
      "claude": 0,
      "openai": 2,
      "gemini": 2,
      "grok": 0,
      "news": 2
    },
    "claude": [],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT Memory Sources 上線：透明化個人化來源，可查看與編輯記憶依據",
        "desc": "Memory Sources 功能讓使用者看到回應中引用了哪些記憶、過去對話或自訂指令，並可刪除或修正過時資訊，Plus/Pro 用戶還可查看檔案庫與 Gmail 資料。",
        "url": "https://www.knightli.com/en/2026/05/07/chatgpt-release-notes-memory-gpt-5-5-sheets/",
        "source": "Knightli",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex Appshots 功能：雙按 Command 即可將 Mac 視窗快照附加到對話",
        "desc": "Codex 新增 Appshots 功能，按下雙 Command 鍵即可將當前 Mac 應用視窗截圖加文字附加到 Codex 對話中，無需手動複製貼上。",
        "url": "https://kingy.ai/blog/appshots-inside-openai-codexs-new-command-command-trick-for-macos/",
        "source": "Kingy AI",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini Intelligence 登陸 Android：自動化任務、摘要網頁、智慧填表",
        "desc": "Google 宣布 Gemini Intelligence 將登陸 Android 裝置，可自動化複雜任務、摘要網頁內容及簡化表單填寫，首波支援 Samsung Galaxy 與 Google Pixel。",
        "url": "https://technews.tw/2026/05/13/google-introduces-gemini-intelligence-on-android/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google 攜手品牌推智慧眼鏡：語音啟動 Gemini 搶攻 Meta 市場",
        "desc": "Google 在 I/O 2026 展示與眼鏡品牌合作的智慧眼鏡，支援語音啟動 Gemini AI，預計今年秋季上市，直接挑戰 Meta Ray-Ban。",
        "url": "https://technews.tw/2026/05/20/intelligent-eyewear-is-coming-this-fall/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "iOS 27 Siri 變 AI 超級入口：可一鍵切換 ChatGPT、Claude、Gemini",
        "desc": "Apple 宣布 iOS 27 將透過 Extensions 系統讓使用者在 Siri 中自由切換 ChatGPT、Claude 或 Gemini，結束 ChatGPT 獨佔地位，同時與 Google 合作用 Gemini 重建 Siri 底層。",
        "url": "https://www.bnext.com.tw/article/90456/ios-27-siri-gemini-claude",
        "source": "數位時代",
        "tags": [
          "integration",
          "agent"
        ]
      },
      {
        "title": "主流 AI 個資處理比較：ChatGPT 曾洩漏地址電話，Claude 與 Gemini 較嚴格",
        "desc": "MIT Technology Review 測試五大 AI 系統處理個人資料的方式，發現 ChatGPT 曾回傳真實電話與地址，Claude、Gemini 等則拒絕提供或嚴格遮蔽。",
        "url": "https://technews.tw/2026/05/15/chatgpt-gave-out-my-address-and-phone-number/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "claude",
          "gemini"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-24",
    "weekday": "星期六",
    "stats": {
      "claude": 2,
      "openai": 0,
      "gemini": 4,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 Dreaming、Outcomes、多代理編排三大功能",
        "desc": "Anthropic 在 Code with Claude 2026 大會發布三項重大更新：Dreaming 讓代理自我改進、Outcomes 自動評分與修正、多代理編排支援平行分工，Netflix 已部署多代理編排於平台團隊。",
        "url": "https://www.infoq.com/news/2026/05/code-with-claude/",
        "source": "InfoQ",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 MCP Tunnels 與自託管沙箱功能",
        "desc": "Anthropic 為 Managed Agents 加入隱私安全新功能：MCP Tunnels 與自託管沙箱，企業可將敏感檔案與套件保留在自有基礎設施，代理編排則由 Anthropic 處理。",
        "url": "https://9to5mac.com/2026/05/19/anthropic-enhances-claude-managed-agents-with-two-new-privacy-and-security-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "model",
        "title": "Google I/O 2026 發布 Gemini 3.5 Flash：速度快 4 倍、超越 3.1 Pro",
        "desc": "Google 在 I/O 2026 推出 Gemini 3.5 Flash，在 Terminal-Bench 2.1 達 76.2%，速度為同級旗艦模型的 4 倍，定價 $1.50/$9.00 每百萬 token。",
        "url": "https://applealmond.com/posts/313124",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 登場：Google 首款全天候個人 AI 代理人",
        "desc": "Google 推出 Gemini Spark，深度整合 Gmail、Drive、Calendar，可在背景持續執行任務，即使離開裝置也能運作，優先向 AI Ultra 訂閱者開放 Beta。",
        "url": "https://applealmond.com/posts/313156",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini App 大改版：Neural Expressive 設計語言、Daily Brief 個人化摘要",
        "desc": "Gemini App 導入全新 Neural Expressive 設計語言，搭配流暢動畫、觸覺回饋與新字體；Daily Brief 功能可自動整理收件匣、行事曆與待辦事項。",
        "url": "https://techcrunch.com/2026/05/19/google-updates-its-gemini-app-to-take-on-chatgpt-and-claude-at-io-2026/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 訂閱方案大改版：新增輕量版、送 YouTube Premium、改採算力計費",
        "desc": "Google 重新調整 Gemini 訂閱方案為五級制（免費/AI Plus/AI Pro/AI Ultra 輕量/AI Ultra 旗艦），並將 YouTube Premium、Health Premium 納入福利。",
        "url": "https://applealmond.com/posts/313170",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "product"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "sub": "secondary",
        "title": "不讓對話變 AI 訓練素材！ChatGPT、Gemini、Claude 個資關閉教學",
        "desc": "數位時代整理三大 AI 平台的資料授權關閉步驟：ChatGPT 在「資料控管」關閉、Claude 在「Privacy」關閉、Gemini 在「活動記錄」中刪除。",
        "url": "https://www.bnext.com.tw/article/90951/ai-privacy-settings-guide",
        "source": "數位時代",
        "tags": [
          "tutorial"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-23",
    "weekday": "星期六",
    "stats": {
      "claude": 0,
      "openai": 0,
      "gemini": 0,
      "grok": 1,
      "news": 0
    },
    "claude": [],
    "openai": [],
    "gemini": [],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 5 預告：6 兆參數、150 萬上下文，預計 5-6 月間發布",
        "desc": "xAI 透露 Grok 5 將擁有 6 兆參數與 150 萬 token 上下文視窗，預計在 2026 年 5-6 月間發布，將為未來 Grok Build 版本提供動力。",
        "url": "https://www.mindstudio.ai/blog/grok-5-agi-xai-model-roadmap",
        "source": "MindStudio",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-22",
    "weekday": "星期五",
    "stats": {
      "claude": 2,
      "openai": 1,
      "gemini": 2,
      "grok": 2,
      "news": 1
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Project Glasswing 擴展：Claude Security 公開測試版上線",
        "desc": "Anthropic 擴展 Project Glasswing 安全計畫，Claude Security 進入公開測試，提供程式碼掃描、漏洞分類與修復建議等功能，Mythos Preview 已發現逾 6,200 個高/關鍵嚴重性漏洞。",
        "url": "https://www.anthropic.com/glasswing",
        "source": "Anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Time 雜誌專題：Anthropic 如何在銷售 Claude 願景與 AI 風險警告間拉扯",
        "desc": "Time 雜誌深度報導 Anthropic 的雙重角色——積極推動 Claude 商業化的同時持續發布 AI 安全警告，探討企業在成長與負責任 AI 之間的平衡。",
        "url": "https://time.com/collection/time100-ai-2026/",
        "source": "Time Magazine",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [
      {
        "sub": "agent",
        "title": "Codex「鎖定 Mac 使用」功能發布：螢幕鎖定後代理仍可執行任務",
        "desc": "OpenAI 發布 Codex 鎖定使用功能，透過 Apple 授權外掛在 Mac 鎖定後仍可操控應用程式，設有時間與行為安全機制，開發者可從手機遠端監控。",
        "url": "https://www.macrumors.com/2026/05/22/codex-use-mac-apps-when-locked/",
        "source": "MacRumors",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini 用量限制正式改以運算情況為準，新制全面上路",
        "desc": "Google 5/17 起全面啟用的算力消耗制計費已穩定運作，使用者不再受各模型每日提示詞次數限制，改由統一的運算配額管理。",
        "url": "https://technews.tw/2026/05/22/everything-new-in-google-ai-subscription/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Google Stitch 即時串流代理與多人協作上線：免費挑戰 Figma",
        "desc": "Google 的 AI 原生 UI 設計工具 Stitch 新增即時串流生成與多人協作功能，免費提供使用，直接挑戰每月收費 $15/人的 Figma。",
        "url": "https://www.techtimes.com/articles/316903/20260520/google-stitch-launches-real-time-ai-agent-multiplayer-editing-figma-charges-15-seat.htm",
        "source": "TechTimes",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "integration",
        "title": "Grok 正式推出第三方 Connectors：Vercel、Canva、Gamma、S&P Global 四大整合",
        "desc": "xAI 於 5/22 發布平台連接器，使用者可直接在 Grok 聊天介面中透過 Vercel 部署網站、Canva 設計、Gamma 製作簡報、S&P Global 查詢即時市場數據。",
        "url": "https://digg.com/ai/zpdwxn8k",
        "source": "Digg",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Connectors 架構解析：I/O 資料層 + Skills 程序層雙軌運作",
        "desc": "xAI 說明 Grok 平台架構：Connectors 負責資料 I/O 層（連接外部服務），Skills 負責程序層（執行動作），兩者均在 Grok 4.3 模型上運行。",
        "url": "https://chatforest.com/reviews/xai-grok-skills-connectors-platform-expansion-may-2026/",
        "source": "ChatForest",
        "tags": [
          "grok",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "AI 牛市循環已逾 3 年：分析師警告 2030 年前泡沫風險",
        "desc": "分析師警告當前 AI 牛市循環已運行約 3-3.5 年，歷史經驗顯示科技泡沫通常在此時間點後出現修正。",
        "url": "https://technews.tw/2026/05/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-21",
    "weekday": "星期四",
    "stats": {
      "claude": 0,
      "openai": 3,
      "gemini": 3,
      "grok": 0,
      "news": 2
    },
    "claude": [],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex v0.1.2505 大版本發布：Python SDK、認證流程與多環境支援",
        "desc": "Codex 發布 v0.1.2505211709 版本，新增 Python SDK 含 API 金鑰登入、ChatGPT 瀏覽器/裝置代碼認證流程、多環境 app-server 工作階段。",
        "url": "https://developers.openai.com/codex/changelog",
        "source": "OpenAI Developers",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Codex 鎖定 Mac 使用功能上線：開發者可從手機遠端觸發代理任務",
        "desc": "Codex 新增鎖定 Mac 使用功能，透過 Apple 授權外掛暫時解鎖 Mac 並設有嚴格時間與行為保護機制，開發者可從手機遠端觸發並監控長時間代理任務。",
        "url": "https://www.techtimes.com/articles/317074/20260524/openai-codex-becomes-desktop-agent-controls-mac-apps-watches-screen-runs-mobile.htm",
        "source": "TechTimes",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Codex 行動版全面推出：iOS/Android 所有方案含免費版皆可使用",
        "desc": "Codex 在 ChatGPT 行動 App 中的預覽版正式擴展至所有方案（含 Free 與 Go），支援啟動/繼續執行緒、核准動作、查看即時 diff 與測試結果。",
        "url": "https://thenewstack.io/openai-codex-chatgpt-mobile/",
        "source": "The New Stack",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "哈薩比斯：「我們已抵達奇點的山腳」，2030 年前後可望實現 AGI",
        "desc": "Google DeepMind 執行長 Demis Hassabis 在 Google I/O 演講中表示，人類已站在奇點的山腳下，預測 2030 年前後可望實現 AGI。",
        "url": "https://technews.tw/2026/05/21/deepmind-ceo-demis-hassabis-predicts-ai-singularity-at-google-io/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google 每月處理 3,200 兆 token：年成長七倍",
        "desc": "Sundar Pichai 透露 Google 每月處理 3.2 quadrillion tokens（約每分鐘 190 億 token），較去年同期成長七倍，反映 AI 使用量爆炸式增長。",
        "url": "https://technews.tw/2026/05/20/sundar-pichai-says-google-is-now-processing-3-2-quadrillion-tokens-per-month/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Jules 非同步編碼代理上線：Google 加入 AI 編碼代理戰場",
        "desc": "Google 推出 Jules 雲端自主編碼代理，可非同步執行程式設計任務，加入 Claude Code 與 OpenAI Codex 的 AI 編碼代理競爭行列。",
        "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/",
        "source": "Google Developers Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "Googlebook AI 筆電亮相：Android 架構 + ChromeOS + 內建 Gemini Intelligence",
        "desc": "Google 在 I/O 2026 發布 Googlebook 筆電，採用 Android 架構結合 ChromeOS，內建 Gemini Intelligence，預計 2026 秋季上市。",
        "url": "https://www.bnext.com.tw/article/90919/googlebook-android-chromeos-gemini-laptop-launch",
        "source": "數位時代",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "EU AI Act 高風險 AI 系統分類指引徵求意見中",
        "desc": "歐盟執委會就高風險 AI 系統分類草案指引徵求公眾意見，為 AI Act 實施做最後準備。",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        "source": "EU Digital Strategy",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-20",
    "weekday": "星期三",
    "stats": {
      "claude": 0,
      "openai": 0,
      "gemini": 1,
      "grok": 2,
      "news": 1
    },
    "claude": [],
    "openai": [],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 正式發布：24/7 全天候個人 AI 代理人，可主動執行任務",
        "desc": "Google I/O 2026 壓軸發布 Gemini Spark，由 3.5 Flash 驅動、採 Antigravity 架構，可在使用者引導下主動執行 Gmail、文件、簡報等任務，即使裝置關閉也能雲端運行。",
        "url": "https://technews.tw/2026/05/20/google-introduces-gemini-3-5-and-gemini-spark/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok Skills 上線第二天：使用者開始分享自訂工作流程範例",
        "desc": "Grok Skills 自 5/18 推出後進入第二天，X 平台上使用者開始分享各種自訂技能設定範例，涵蓋寫作、分析與開發等領域。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 整合 OpenClaw 開源代理平台：X Premium 用戶免 API 金鑰直接使用",
        "desc": "xAI 將 Grok 整合進 OpenClaw 開源代理平台，X Premium 訂閱者可直接認證使用 Grok 的聊天、生成與搜尋功能。",
        "url": "https://x.ai/news/grok-openclaw",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "Google I/O 2026 懶人包：Gemini Spark、3.5 Flash、搜尋代理全面啟動",
        "desc": "Google I/O 2026 將 AI 從「回答工具」重新定義為「行動主體」，發布 Gemini Spark 全天候代理、3.5 Flash 新預設模型、搜尋內建 AI 代理等重大更新。",
        "url": "https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy",
        "source": "數位時代",
        "tags": [
          "gemini",
          "agent"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-19",
    "weekday": "星期二",
    "stats": {
      "claude": 3,
      "openai": 2,
      "gemini": 6,
      "grok": 1,
      "news": 3
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Code with Claude 倫敦大會開幕：Anthropic 展示程式設計的未來",
        "desc": "Anthropic 在倫敦舉辦兩天制 Code with Claude 開發者大會，主題演講、分組工作坊與現場代理挑戰，聚焦代理記憶、評估與多代理系統。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 宣布與 Anthropic 全球戰略聯盟：Claude 將嵌入 Digital Gateway",
        "desc": "KPMG 宣布與 Anthropic 建立戰略聯盟，將 Claude 嵌入 Digital Gateway 平台，為全球 27.6 萬名員工提供 AI 能力。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Andrej Karpathy 離開 OpenAI 加入 Anthropic 預訓練團隊",
        "desc": "OpenAI 共同創辦人 Andrej Karpathy 正式宣布加入 Anthropic，將在預訓練團隊下組建新團隊，利用 Claude 加速 AI 預訓練研究。",
        "url": "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "Codex 行動版在 ChatGPT App 上線：所有方案皆可使用",
        "desc": "OpenAI 於 5/14 將 Codex 帶入 ChatGPT 行動 App，5/19 已擴展至 iOS/Android 所有方案（含 Free 與 Go），可查看即時專案脈絡、diff 與測試結果。",
        "url": "https://appwrite.io/blog/post/openai-just-shipped-codex-to-the-chatgpt-mobile-app",
        "source": "Appwrite",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "OpenAI 發布 Verify 工具與加入 C2PA：推動 AI 內容溯源",
        "desc": "OpenAI 加入 C2PA 指導委員會並發布公開的 Verify 工具，可驗證圖片是否為 AI 生成或經過修改，同步採用 Google SynthID 浮水印。",
        "url": "https://openai.com/index/advancing-content-provenance/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google I/O 2026 開幕：Gemini 3.5 Flash 發布，成為新一代預設模型",
        "desc": "Google I/O 2026 正式開幕，發布 Gemini 3.5 Flash 模型，在 Agent 與編碼任務上大幅超越前代，API 定價每百萬輸入 token $1.50，立即成為全球 Gemini 應用與搜尋的預設模型。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 亮相：Google 重新定義 AI 從「回答工具」到「行動主體」",
        "desc": "Google 在 I/O 發布 Gemini Spark 24/7 個人代理人，由 3.5 Flash 驅動、Antigravity 架構，深度整合 Gmail、文件、簡報，可在裝置關閉時仍在雲端運行。",
        "url": "https://www.tomsguide.com/news/live/google-io-2026-live-news-updates",
        "source": "Tom's Guide",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google 搜尋 25 年來最大改版：AI 模式全面升級、迷你應用上線",
        "desc": "Google 搜尋框迎來 25 年來最大升級，AI 驅動建議取代自動完成，支援多模態輸入（文字/圖片/影片/分頁），搜尋結果可直接運行資訊代理與迷你應用。",
        "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Antigravity 2.0 發布：從 IDE 升級為代理開發平台",
        "desc": "Google 發布 Antigravity 2.0，從編碼 IDE 升級為完整代理開發平台，新增桌面應用、CLI、SDK，支援多代理編排與背景任務排程。",
        "url": "https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 訂閱大改：算力消耗制取代每日提示詞限制，新增 100 美元 Ultra",
        "desc": "Google 全面改用算力消耗制計費，不再按模型分開計算，新增 $100/月 AI Ultra 方案，原 $250 方案降至 $200。",
        "url": "https://www.bnext.com.tw/article/90990/google-ai-ultra-plans-compute-pricing-gemini-io-2026",
        "source": "數位時代",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "C2PA 內容溯源認證登陸 Gemini 應用：可即時驗證內容真偽",
        "desc": "Google 在 Gemini 應用中整合 C2PA Content Credentials，使用者可驗證內容是否為未修改的原始作品，即日起生效。",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok Skills 正式上線（5/18）：持久化自訂專業知識開始運作",
        "desc": "Grok Skills 於 5/18 正式推出，使用者可教導 Grok 特定工作流程並跨對話延續，5/19 開始收到首批使用者回饋。",
        "url": "https://grok.com/skills-and-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "Google I/O 2026 主軸鎖定「全面 AI 化」：從搜尋到硬體全線 AI 升級",
        "desc": "Google I/O 2026 大會以全面 AI 化為主軸，從搜尋引擎、應用程式到硬體裝置（眼鏡、筆電）全線導入 AI 能力。",
        "url": "https://technews.tw/2026/05/18/google-io-conference-focus-full-ai-integration/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "Google 與黑石集團將成立新 AI 雲端合資公司",
        "desc": "華爾街日報報導 Google 與 Blackstone 計畫成立 AI 雲端合資公司，加速企業級 AI 基礎設施部署。",
        "url": "https://technews.tw/2026/05/19/google-and-blackstone-to-launch-new-ai-cloud-venture/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "Android XR 智慧眼鏡平台發布：Samsung、Warby Parker 首批合作夥伴",
        "desc": "Google 在 I/O 發布 Android XR 智慧眼鏡平台，首批與 Samsung、Gentle Monster、Warby Parker 合作推出音訊眼鏡，支援語音啟動 Gemini。",
        "url": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-18",
    "weekday": "星期一",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 2,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 企業採用率達 34.4% 超越 OpenAI，登頂 Ramp AI 指數",
        "desc": "根據 Ramp AI 指數五月版報告，Anthropic 產品的企業採用率達 34.4%，首次超越 OpenAI 的 32.3%，顯示 Claude 在企業市場持續攀升。",
        "url": "https://www.mexc.co/en-PH/news/1094196",
        "source": "MEXC News",
        "tags": [
          "claude",
          "product"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "model",
        "title": "Gemini Omni 曝光：統一文字、圖片、影片生成於單一介面",
        "desc": "外洩資訊顯示 Google 正開發 Gemini Omni 模型，將文字、圖片與影片生成整合進單一 Gemini 介面，為主流 AI 模型首見的全模態統一架構。",
        "url": "https://imini.com/blogs/gemini-omni-google-io-2026",
        "source": "iMini AI",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Android Show I/O 版重點：Googlebooks 筆電、Android Auto AI、Material 3 Expressive",
        "desc": "Google I/O 前夕 Android Show 揭露多項新品：Googlebooks 高階 Android 筆電類別、Android Auto 加入 Gemini 與 Dolby Atmos、Material 3 Expressive 設計語言。",
        "url": "https://www.tomsguide.com/phones/live/the-android-show-google-i-o-edition-live-all-the-latest-android-gemini-ai-and-android-xr-news-as-it-happens",
        "source": "Tom's Guide",
        "tags": [
          "gemini",
          "product"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "sub": "secondary",
        "title": "Perplexity Personal Computer：全天候 AI 代理在 Mac mini 上自動執行任務",
        "desc": "Perplexity 推出 Personal Computer 功能，在專用 Mac mini 上運行常駐 AI 代理，可 24/7 監控觸發條件、主動執行任務，成為用戶的數位分身。",
        "url": "https://blog.mean.ceo/perplexity-news-may-2026/",
        "source": "Mean CEO Blog",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "Cursor 年收入突破 20 億美元：AI 原生 IDE 稱霸開發工具市場",
        "desc": "AI 程式碼編輯器 Cursor 的年化經常性收入（ARR）突破 20 億美元，其重新打造的平行代理介面鞏固了 AI 原生 IDE 的領導地位。",
        "url": "https://datanorth.ai/blog/top-10-ai-tools-for-2026",
        "source": "DataNorth AI",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-17",
    "weekday": "星期日",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Claude for Legal 正式發布：20+ MCP 連接器、12 個法律實務外掛",
        "desc": "Anthropic 推出 Claude for Legal 套件，提供超過 20 個 MCP 連接器串接 Westlaw、LexisNexis、Everlaw、iManage、DocuSign 等法律工具，並針對商事、併購、智財、隱私、訴訟等 12 個實務領域推出專用外掛。",
        "url": "https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html",
        "source": "LawSites",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 聯手 Blackstone、Goldman Sachs 成立 15 億美元 AI 服務基金",
        "desc": "Anthropic 與 Blackstone、Hellman & Friedman、Goldman Sachs 合資成立 15 億美元 AI 服務公司，協助企業部署 Claude 技術。",
        "url": "https://www.anthropic.com/news",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tutorial",
        "title": "電腦玩物：不用寫程式的瀏覽器自動化，Codex for Chrome 操作 Google 地圖與 Gemini",
        "desc": "電腦玩物站長分享使用 Codex for Chrome 外掛進行瀏覽器自動化實測，包含操作 Google 地圖、Evernote、Gemini 與社群平台的完整教學。",
        "url": "https://www.playpcesor.com/2026/05/codex-for-chrome-google-evernote-gemini.html",
        "source": "電腦玩物",
        "tags": [
          "claude",
          "tutorial",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 個人理財功能上線：連結銀行帳戶、追蹤支出與淨資產",
        "desc": "OpenAI 推出 ChatGPT 個人理財體驗，Pro 用戶可透過 Plaid 安全連結超過 12,000 家金融機構帳戶，在儀表板追蹤支出、帳單、訂閱、淨資產與投資表現。",
        "url": "https://openai.com/index/personal-finance-chatgpt/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex 登陸 ChatGPT 手機 App：隨時遠端操控 Mac 上的編碼任務",
        "desc": "OpenAI 將 Codex 編碼代理整合進 ChatGPT iOS/Android App，所有方案用戶（含免費版）可用手機遠端監控與操作在 Mac 上執行的 Codex 工作。",
        "url": "https://openai.com/index/work-with-codex-from-anywhere/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "tutorial",
        "title": "電腦玩物：一般人如何快速上手 Codex，讓 AI 整理文件表格並建立自動化流程",
        "desc": "電腦玩物推出 Codex 超完整圖文教學，示範非工程師如何用 Codex 處理電腦檔案、整理表格、建立自動化工作流程。",
        "url": "https://www.playpcesor.com/2026/05/codex-ai.html",
        "source": "電腦玩物",
        "tags": [
          "openai",
          "tutorial",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 預告：5/19 主題演講將發表新 Gemini 模型挑戰 GPT-5.5",
        "desc": "Google I/O 2026 大會將於 5 月 19 日揭幕，預計發表新一代 Gemini 模型（可能為 Gemini 4.0 或 Gemini Omni），整合文字、圖片、影片生成於單一管線。",
        "url": "https://www.androidheadlines.com/2026/05/google-io-new-gemini-model-launch-gpt-5-5-rival.html",
        "source": "Android Headlines",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "數位時代：追趕 Claude！Google 將推出 Gemini Mac App，搶佔桌機 AI 助理入口",
        "desc": "數位時代報導 Google 正祕密測試 macOS 版 Gemini 桌面應用程式，企圖在桌機端搶佔 AI 助理第一螢幕入口，直接挑戰 Claude Desktop。",
        "url": "https://www.bnext.com.tw/article/90365/google-geminimacapp-janus",
        "source": "數位時代",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Gemini Interactions API 重大變更：5/26 起新 Schema 成預設，6/8 移除舊版",
        "desc": "Google AI 開發者文件公告 Gemini Interactions API 將於 5 月 26 日切換預設 Schema，6 月 8 日永久移除舊版，開發者需盡快遷移。",
        "url": "https://ai.google.dev/gemini-api/docs/interactions-breaking-changes-may-2026",
        "source": "Google AI for Developers",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "Perplexity Deep Research 可直接產出 PPT、試算表與儀表板",
        "desc": "Perplexity 更新 Deep Research 模式，用戶可在搜尋中直接生成 PowerPoint 簡報、Excel 試算表與互動式儀表板，並透過 Space Skills 封裝團隊可複用的專業工作流。",
        "url": "https://www.perplexity.ai/changelog/improved-computer-models-and-enterprise-updates---may-4-2026",
        "source": "Perplexity",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "Cursor 3.4 發布：雲端開發環境支援 Agent、進駐 Microsoft Teams",
        "desc": "Cursor IDE 發布 3.4 版，新增雲端 Agent 開發環境，並整合進 Microsoft Teams，讓團隊可直接在協作平台中使用 AI 編碼助手。",
        "url": "https://cursor.com/",
        "source": "Cursor",
        "tags": [
          "tool",
          "agent"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-16",
    "weekday": "星期六",
    "stats": {
      "claude": 3,
      "openai": 0,
      "gemini": 4,
      "grok": 1,
      "news": 4
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 訂閱制大改：Agent SDK 用量獨立計費，6 月 15 日生效",
        "desc": "Anthropic 宣布將 Claude 訂閱拆分為兩個計費池：第一方工具用量與第三方 Agent SDK 用量分開計算，Pro 方案每月獲 $20 Agent 額度，Max 5x 為 $100，Max 20x 為 $200。",
        "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens",
        "source": "Axios",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 週用量上限提高 50%，Pro/Max/Team/Enterprise 均適用",
        "desc": "官方 @ClaudeDevs 帳號宣布 Claude Code 每週用量上限提升 50%，適用所有 Pro、Max、Team 及按席位 Enterprise 用戶，優惠期至 2026 年 7 月 13 日。",
        "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
        "source": "Pasquale Pillitteri",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Claude Microsoft 365 外掛正式上線：Excel、PowerPoint、Word GA，Outlook 公測中",
        "desc": "Claude 的 Microsoft 365 增益集已全面開放，支援 Excel、PowerPoint 與 Word，Outlook 側邊欄則進入公開測試，可跨應用保留對話上下文並同步編輯。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini Intelligence 登場：AI 自動化、生成式 UI Widget 與 Rambler 語音修潤進駐 Android",
        "desc": "Google 發表 Gemini Intelligence，為 Android 帶來多步驟任務自動化、Chrome 內容摘要與表單填寫、自然語言生成自訂 Widget，以及將口語轉為專業文字的 Rambler 功能，今夏先在 Pixel 與 Samsung 旗艦上線。",
        "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "product",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Omni 模型洩漏：統一文字、圖片、影片生成，預計 Google I/O 發表",
        "desc": "Google I/O 2026（5/19-20）前夕，Gemini 介面中出現 Gemini Omni 字串，暗示這是首個整合文字、圖片與影片生成的統一管線模型，可能推出 Flash 與 Pro 兩個版本。",
        "url": "https://www.aixploria.com/en/ai-radar/google-gemini-omni-leak-video-model-io-2026/",
        "source": "AIxploria",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google 全力將 Gemini 打造為 Android 作業系統核心 AI 層",
        "desc": "Google 在 Apple AI 改版前加速佈局，將 Gemini 從聊天機器人轉型為跨手機、瀏覽器、汽車與筆電的作業系統級智慧層，包含 Chrome 自動瀏覽、智慧填表與 Android Auto 整合。",
        "url": "https://www.cnbc.com/2026/05/12/google-races-put-gemini-at-center-of-android-before-apples-ai-reboot.html",
        "source": "CNBC",
        "tags": [
          "gemini",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "iOS 27 將開放第三方 AI 預設：Gemini、Claude 可取代 ChatGPT 成為 Siri 預設服務",
        "desc": "Apple 計畫在 iOS 27 開放第三方 AI 服務為預設選項，Google Gemini 與 Anthropic Claude 已進入測試，用戶可在 Siri 設定中一鍵切換不同 AI 服務。",
        "url": "https://applealmond.com/posts/311967",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build 編碼代理上線：終端原生 CLI 支援 8 個並行子代理與 MCP",
        "desc": "xAI 推出 Grok Build 測試版，基於 Grok 4.3 beta 模型與 200 萬 token 上下文視窗，可同時啟動最多 8 個並行 AI 代理進行規劃、搜尋與寫碼，支援 MCP 伺服器與 worktree 整合。",
        "url": "https://x.ai/news/grok-build-cli",
        "source": "xAI",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "主流 AI 聊天機器人個資處理標準大不同，ChatGPT 較易洩漏聯絡資訊",
        "desc": "MIT Technology Review 測試 ChatGPT、Gemini、Claude、Perplexity 與 Grok 的個資處理方式，發現各平台標準不一，有的會提供看似真實的電話號碼或住址，凸顯訓練資料隱私隱憂。",
        "url": "https://infosecu.technews.tw/2026/05/15/chatgpt-gave-out-my-address-and-phone-number",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "gemini",
          "claude"
        ]
      },
      {
        "title": "ChatGPT 對話紀錄可推測五大人格特質，外向性準確率達 44%",
        "desc": "研究顯示 ChatGPT 使用紀錄能預測用戶人格特質，在月活 8 億用戶規模下，若用於精準廣告或輿論影響，潛在衝擊不容忽視。",
        "url": "https://technews.tw/2026/05/10/your-chatgpt-history-is-a-personality-test/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "title": "2026 百大 AI 排行榜：Gemini 與 Claude 強勢崛起，a16z 報告揭五大變局",
        "desc": "a16z 發布 2026 年 AI 排行報告，Gemini 與 Claude 市佔與影響力大幅提升，AI 代理大爆發成為年度主軸，生態便利性與專業推理深度的路線之爭白熱化。",
        "url": "https://www.bnext.com.tw/article/90277/ai-assistant-race-transforming-user-costs-and-platform-ecosystems",
        "source": "數位時代",
        "tags": [
          "gemini",
          "claude",
          "openai"
        ]
      },
      {
        "title": "蘋果仁實測：3 組 ChatGPT 與 Gemini 手寫筆觸風格 Prompt 指令分享",
        "desc": "蘋果仁分享三組手繪風格 Prompt 指令，讓 ChatGPT 與 Gemini 生成具手寫質感的圖片，適用於社群貼文與個人創作。",
        "url": "https://applealmond.com/posts/312152",
        "source": "蘋果仁",
        "tags": [
          "openai",
          "gemini",
          "tutorial"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-15",
    "weekday": "星期五",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 4,
      "grok": 0,
      "news": 1
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude for Small Business 全美巡迴開跑，首站芝加哥半日免費 AI 工作坊",
        "desc": "Anthropic 啟動 Claude for Small Business 全美巡迴活動，每站提供 100 位小企業主免費 AI 流暢度培訓與實作工作坊，首站芝加哥 5/14 出發。",
        "url": "https://www.anthropic.com/news/claude-for-small-business",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 代理 SDK 計費分離政策細節公布，6/15 生效",
        "desc": "Anthropic 進一步說明代理 SDK 獨立計費細節：信用額度不累積、超額按 API 費率計費，互動式聊天與 Cowork 仍沿用訂閱限額。",
        "url": "https://thenewstack.io/anthropic-agent-sdk-credits/",
        "source": "The New Stack",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude For Legal 持續發酵，大型律所公開採用案例",
        "desc": "Freshfields、Quinn Emanuel、Holland & Knight 等大型律所陸續公開使用 Claude 處理實際案件，Fortune 與 Bloomberg 密集報導法律科技變革。",
        "url": "https://fortune.com/2026/05/12/anthropic-legal-plug-in-release-claude-cowork-big-law/",
        "source": "Fortune",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 個人理財工具預覽：Pro 用戶可透過 Plaid 連接銀行帳戶",
        "desc": "OpenAI 在美國為 Pro 用戶推出個人理財功能預覽版，透過 Plaid 連接超過 1.2 萬家金融機構，可進行消費分析與財務規劃問答。",
        "url": "https://techcrunch.com/2026/05/15/openai-launches-chatgpt-for-personal-finance-will-let-you-connect-bank-accounts/",
        "source": "TechCrunch",
        "tags": [
          "openai",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 考慮控告 Apple，ChatGPT 整合合作成效不如預期",
        "desc": "OpenAI 聘請外部律師評估對 Apple 採取法律行動，認為 ChatGPT 在 iOS 的曝光度與整合深度不足，合作成效遠低於預期，重新談判已陷入僵局。",
        "url": "https://www.inside.com.tw/article/41302-openai-considers-legal-action-against-apple",
        "source": "INSIDE",
        "tags": [
          "openai",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Mac 版撤銷舊憑證，6/12 前需更新否則無法開啟",
        "desc": "OpenAI 因安全事件撤銷 ChatGPT Mac 版舊憑證，用戶必須在 6 月 12 日前更新至最新版本，否則應用程式將無法開啟。",
        "url": "https://applealmond.com/posts/312782",
        "source": "蘋果仁",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Googlebook AI 筆電合作夥伴出列：Intel、Qualcomm、MediaTek 提供算力",
        "desc": "Google 公布 Googlebook 處理器合作夥伴包括 Intel、Qualcomm 與 MediaTek，Arm 提供底層運算技術，Acer、ASUS、Dell、HP、Lenovo 等品牌秋季推出首批機型。",
        "url": "https://ccc.technews.tw/2026/05/14/google-partners-with-intel-arm-qualcomm-and-mediatek-on-googlebook/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 代理名稱出現在 Google App 測試版",
        "desc": "Google app 17.23 測試版出現 Gemini Spark 新功能與彗星圖示，取代先前的 Gemini Agent 命名，為 I/O 大會更進階的代理能力預熱。",
        "url": "https://9to5google.com/2026/05/14/gemini-spark-insight/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 預測懶人包：Gemini 4、AI 眼鏡、Android 與 Chrome OS 合體",
        "desc": "INSIDE 整理 I/O 大會預測重點：Gemini 4 新模型、Project Astra AI 眼鏡、Android 與 Chrome OS 整合為 Aluminium OS、Remy 代理與 Gemini Intelligence 全面升級。",
        "url": "https://www.inside.com.tw/article/41216-google-io-2026-what-to-expect",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Android Auto 大更新搭載 Gemini，車載 AI 體驗全面客製化",
        "desc": "Android Auto 2026 更新加入 Gemini AI 功能，提供更客製化的車載體驗，搭配 Google Built-in 系統讓車輛更智慧。",
        "url": "https://www.inside.com.tw/article/41279-android-auto-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [],
    "news": [
      {
        "title": "SuperGrok 用戶怒批限流：語音僅 20 分鐘即被鎖",
        "desc": "大量 SuperGrok 月付 $30 用戶反映語音聊天與圖影生成遭嚴格限流，xAI 尚未正式回應。",
        "url": "https://piunikaweb.com/2026/05/13/xai-throttles-grok-paid-users/",
        "source": "PiunikaWeb",
        "tags": [
          "grok"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-14",
    "weekday": "星期四",
    "stats": {
      "claude": 4,
      "openai": 1,
      "gemini": 4,
      "grok": 3,
      "news": 2
    },
    "claude": [
      {
        "sub": "product",
        "title": "Anthropic 推出 Claude for Small Business，整合 QuickBooks、HubSpot 等 15 套工作流",
        "desc": "Claude for Small Business 提供涵蓋財務、行銷、客服等 15 套即用代理工作流，可連接 QuickBooks、PayPal、HubSpot、Canva 等工具，並與 PayPal 合作提供免費線上培訓。",
        "url": "https://www.ithome.com.tw/news/175783",
        "source": "iThome",
        "tags": [
          "claude",
          "product",
          "integration"
        ]
      },
      {
        "sub": "integration",
        "title": "PwC 擴大與 Anthropic 策略聯盟，建立聯合卓越中心",
        "desc": "PwC 與 Anthropic 深化合作，將 Claude 嵌入技術開發、交易執行與企業功能再造流程，啟動 3 萬名員工培訓認證計畫。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 宣布 6/15 起 Agent SDK 用量獨立計費",
        "desc": "程式化用量（Agent SDK、GitHub Actions、第三方框架）將從訂閱額度分離為獨立信用池，Pro $20、Team $100/seat，超額按 API 費率計費。",
        "url": "https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748",
        "source": "The Register",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude For Legal 12 款外掛深度解析：合約、僱傭、訴訟全覆蓋",
        "desc": "Bloomberg Law 深入分析 Claude Legal 外掛，覆蓋公司法、監管法、僱傭法等領域，搭配 20+ MCP 連接器串接 DocuSign、Ironclad 等法律軟體。",
        "url": "https://news.bloomberglaw.com/legal-ops-and-tech/anthropic-pushes-deeper-into-legal-work-with-claude-updates",
        "source": "Bloomberg Law",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "Bloomberg：OpenAI 評估對 Apple 採取法律行動",
        "desc": "OpenAI 認為 ChatGPT 在 iOS 的整合範圍不夠廣、使用者曝光不足，已聘請外部律師評估寄發違約通知等選項。",
        "url": "https://finance.technews.tw/2026/05/15/openai-explores-legal-options-against-apple/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "integration"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini Intelligence 正式發表，Android 迎來系統級 AI 代理自動化",
        "desc": "Google 在 Android Show 發表 Gemini Intelligence，可跨應用自動叫車、訂餐，支援截圖與照片多模態輸入，今夏先在 Galaxy S26 與 Pixel 10 推送。",
        "url": "https://www.inside.com.tw/article/41273-google-gemini-intelligence-io-2026-android-show",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Googlebook 發表：Gemini 原生筆電搭載 Magic Pointer 智慧游標",
        "desc": "Google 聯手 Acer、ASUS 等推出 Googlebook，搭載 Magic Pointer 與自訂 Widget 功能，取代 Chrome OS 成為新一代 AI 筆電平台。",
        "url": "https://www.inside.com.tw/article/41275-google-googlebook-gemini-intelligence",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "NotebookLM 與 Gemini 擴展教育應用，打造封閉域知識庫",
        "desc": "Google 擴展 NotebookLM 教育功能，教師可建立封閉域知識庫降低 AI 幻覺影響，同時 Gemini AI 工具也強化教育場景支援。",
        "url": "https://technews.tw/2026/05/13/google-expands-gemini-notebooklm-and-ai-tools-for-education/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Built-in 與 Android Auto 更新，車載 Gemini 體驗全面升級",
        "desc": "Google Built-in 搭配 Gemini 讓車輛更智慧，Android Auto 2026 更新加入 AI 客製化功能，車載體驗全面提升。",
        "url": "https://www.inside.com.tw/article/41281-google-built-in-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "xAI 發布 Grok Build Beta：代理式終端 CLI 編碼工具",
        "desc": "Grok Build 使用 16 代理 Heavy 架構與 200 萬 Token 上下文，可從自然語言提示規劃專案、撰寫檔案與執行命令，一次建構完整應用。",
        "url": "https://www.engadget.com/2173482/xai-coding-agent-grok-build/",
        "source": "Engadget",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Apollo、Morgan Stanley 測試 Grok，xAI 搶進華爾街",
        "desc": "xAI 成功招募 Apollo Global Management 與 Morgan Stanley 內部測試 Grok，加速金融產業採用。",
        "url": "https://www.japantimes.co.jp/business/2026/05/14/tech/musk-xai-wall-street-grok-chatbot/",
        "source": "Japan Times",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "SuperHeavy 訂閱方案上線，含 Grok Build 早鳥價 $99/月",
        "desc": "xAI 新增最高階 SuperHeavy 方案，包含 Grok Build CLI，原價 $299/月，前六個月早鳥折扣 67%。",
        "url": "https://www.basenor.com/blogs/news/xai-launches-grok-build-beta-agentic-coding-cli-explained",
        "source": "Basenor",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "title": "Google 轉向 Gemini Intelligence，以 AI 硬體為主戰場",
        "desc": "Digitimes 分析 Google 以 Gemini Intelligence 為核心重塑 Android 與 AI 策略，將高階硬體視為 AI 體驗的主要競爭戰場。",
        "url": "https://www.digitimes.com/news/a20260514PD216/google-gemini-hardware-android-2026.html",
        "source": "Digitimes",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "title": "Grok 4.3 Beta 簡報生成實測：從 PDF 到可編輯 PPT 只要 4 步驟",
        "desc": "數位時代實測 Grok 4.3 Beta 的簡報生成功能，可將研究報告直接轉為格式化 PowerPoint，需 SuperGrok 以上訂閱方案。",
        "url": "https://fc.bnext.com.tw/articles/view/4584",
        "source": "未來商務",
        "tags": [
          "grok",
          "tutorial"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-13",
    "weekday": "星期三",
    "stats": {
      "claude": 1,
      "openai": 1,
      "gemini": 3,
      "grok": 1,
      "news": 2
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude For Legal 正式發表，12 款外掛 + 20 個 MCP 連接器進軍法律產業",
        "desc": "Anthropic 推出 Claude For Legal，包含合約審閱、僱傭法律、訴訟助理等 12 款專業外掛與超過 20 個 MCP 連接器，可對接 DocuSign、Ironclad、Datasite 等法律軟體，Freshfields 等多家大型律所已實際使用。",
        "url": "https://www.artificiallawyer.com/2026/05/12/claude-for-legal-launches-may-reshape-the-legal-tech-world/",
        "source": "Artificial Lawyer",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 新預設模型，幻覺減少逾半",
        "desc": "OpenAI 將 GPT-5.5 Instant 設為所有用戶預設模型，高風險主題幻覺較 GPT-5.3 減少 52.5%，回應字數精簡 30%，並強化個人化記憶功能。",
        "url": "https://technews.tw/2026/05/06/openai-releases-gpt-5-5-instant/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Google 內測「Remy」AI 代理，打造全天候個人助理",
        "desc": "Google 員工正測試代號 Remy 的 AI 代理，定位為「24/7 工作、學習與生活個人代理」，可串接 Gmail、Calendar、Drive 等服務，目標是將 Gemini 從聊天助手升級為真正的行動代理。",
        "url": "https://technews.tw/2026/05/06/google-is-building-an-ai-agent-that-could-be-its-answer-to-openclaw/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 下週登場，Gemini 4 與原生圖影生成呼之欲出",
        "desc": "Google I/O 將於 5 月 19 日開幕，預計發表 Gemini 4 模型，支援原生圖片與影片生成，並以代理式 AI 為核心展示主題。",
        "url": "https://www.pcworld.com/article/3134059/gemini-may-finally-leap-out-of-the-chatbox-at-google-i-o.html",
        "source": "PCWorld",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Home 五月更新擴大 Gemini AI 整合，Nest Cam 加入 AI 影片篩選",
        "desc": "Google Home 五月更新新增更多自動化觸發條件與動作，Nest Cam 加入動畫事件縮圖、精緻人臉辨識與 AI 片段篩選功能。",
        "url": "https://www.msn.com/en-us/news/other/google-previews-android-17-features-and-gemini-ai-smart-home-update/gm-GM1BD76A70",
        "source": "MSN",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok 語音模式登上 Apple CarPlay，開車也能對話 AI",
        "desc": "xAI 正式將 Grok Voice 加入 Apple CarPlay 支援，駕駛可免持使用 AI 語音功能，需 iOS 26.4 以上版本。",
        "url": "https://applealmond.com/posts/312303",
        "source": "蘋果仁",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "Google 成功阻止駭客利用 AI 進行大規模漏洞攻擊",
        "desc": "Google 表示可能阻止了駭客組織利用 AI 工具進行「大規模漏洞利用事件」的企圖，凸顯 AI 安全攻防戰日益升溫。",
        "url": "https://www.cnbc.com/2026/05/11/google-thwarts-effort-hacker-group-use-ai-mass-exploitation-event.html",
        "source": "CNBC",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Grok 4.3 Beta 簡報生成教學：4 步驟產出可編輯 PPT",
        "desc": "數位時代實測 Grok 4.3 Beta 的簡報生成功能，可將研究報告或文字資料直接轉為格式化的可下載 PowerPoint，需 SuperGrok 訂閱。",
        "url": "https://www.bnext.com.tw/article/90842/grok-4.3-beta-ppt",
        "source": "數位時代",
        "tags": [
          "grok",
          "tutorial"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-12",
    "weekday": "星期二",
    "stats": {
      "claude": 1,
      "openai": 0,
      "gemini": 5,
      "grok": 3,
      "news": 2
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Security 公開測試版上線，企業程式碼漏洞掃描",
        "desc": "Claude Security 進入公開 Beta，為 Enterprise 客戶提供程式碼庫弱點掃描與修補建議，支援排程掃描、目標目錄掃描、CSV/Markdown 匯出，並可透過 Webhook 串接 Slack、Jira 等工具。",
        "url": "https://claude.com/blog/claude-security-public-beta",
        "source": "Claude 官方",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 下週登場，Gemini 4 旗艦模型即將亮相",
        "desc": "Google I/O 2026 於 5/19-20 在山景城舉行，預計發表 Gemini 4 旗艦模型，具備 10M+ token 上下文、原生多模態、整合影像與影片生成能力。今日（5/12）先播出 Android Show。",
        "url": "https://www.businesstoday.in/technology/story/from-android-17-gemini-4-to-ai-everything-to-expect-at-google-io-2026-530775-2026-05-11",
        "source": "BusinessToday",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Gemini in Chrome 推出 Skills 功能，一鍵執行常用提示詞",
        "desc": "Gemini 在 Chrome 桌面版新增 Skills 技能庫，使用者可儲存常用提示詞並一鍵執行，支援跨分頁操作，Mac/Windows/ChromeOS 上線，內建安全確認機制。",
        "url": "https://blog.google/products-and-platforms/products/chrome/skills-in-chrome/",
        "source": "Google 官方",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 個人化功能上線，超過 40 種語言支援",
        "desc": "Gemini 推出個人化實驗功能，先在網頁版上線並逐步擴展至行動裝置，支援超過 40 種語言，可根據使用者偏好調整回應風格。",
        "url": "https://gemini.google/release-notes/",
        "source": "Google 官方",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "iOS 27 將開放第三方 AI：Google、Anthropic 模型已進入 Apple 測試",
        "desc": "據 INSIDE 與彭博社報導，Apple 計畫在 iOS 27 開放 Siri 對接 Gemini、Claude 等第三方 AI 模型，整合進寫作工具與 Image Playground，打破 ChatGPT 獨家地位。",
        "url": "https://www.inside.com.tw/article/41232-ios-27-apple-intelligence-third-party-ai-models-google-anthropic",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Mac 原生 App 代號 Janus 進入私測",
        "desc": "Google 正在測試代號 Janus 的 Gemini Mac 原生應用程式，已對消費者測試計畫參與者開放，功能不僅限於聊天，還包含桌面智慧整合。",
        "url": "https://www.inside.com.tw/article/40892-google-gemini-mac-app-janus-desktop-intelligence",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 上線 API，內建推理、1M token 上下文與影片輸入",
        "desc": "xAI 推出 Grok 4.3，具備內建推理能力、100 萬 token 上下文窗口和原生影片輸入，針對 Agentic 工具呼叫最佳化，可直接使用電腦撰寫程式碼並生成檔案。",
        "url": "https://mer.vin/2026/05/grok-4-3-on-the-xai-api-explained-pricing-1m-context-and-tool-calling-workflows/",
        "source": "Mervin Praison",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Grok Computer 電腦操控代理意外曝光後下架",
        "desc": "5/7 部分使用者意外看到 Grok Computer / Grok Build 介面，可操控應用程式、點擊按鈕、輸入文字和管理檔案，xAI 隨後緊急下架，確認為開發中的桌面 AI 代理功能。",
        "url": "https://www.dextools.io/news/grok-computer-xai-ai-agent-controls-pc-everything-we-know-2026",
        "source": "DEXTools",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "xAI 5/15 退役 8 款舊模型，全面轉向 Grok 4.3",
        "desc": "xAI 宣布 5 月 15 日起從 API 退役 8 款早期模型，開發者需遷移至 Grok 4.3，官方提供完整遷移指南與過渡期支援。",
        "url": "https://docs.x.ai/developers/migration/may-15-retirement",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "史丹佛 AI 指數報告：美中模型差距僅剩 2.7%，台積電撐起全球算力",
        "desc": "數位時代報導史丹佛 2026 AI Index，美中性能差距多次交替領先至僅剩 2.7%，台積電獨力製造幾乎所有頂尖 AI 晶片，形成供應鏈單點風險。",
        "url": "https://www.bnext.com.tw/article/90635/ai-index-2026-tsmc-china-us-arms-race",
        "source": "數位時代",
        "tags": [
          "model"
        ]
      },
      {
        "sub": "secondary",
        "title": "科技新報：對 AI 說話禮貌確實有用，粗魯回應品質下降",
        "desc": "TechNews 報導最新研究發現，對 ChatGPT 等 AI 說話禮貌時回答更正面積極，粗魯語氣則導致 AI 想結束對話，回應品質明顯下降。",
        "url": "https://technews.tw/2026/05/05/rude-to-chatgpt-dont-be-surprised-if-it-gets-weird/",
        "source": "科技新報",
        "tags": [
          "tutorial"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-11",
    "weekday": "星期日",
    "stats": {
      "claude": 4,
      "openai": 0,
      "gemini": 2,
      "grok": 1,
      "news": 4
    },
    "claude": [
      {
        "sub": "model",
        "title": "Claude Opus 4.7 全面上線，進階軟體工程能力大幅提升",
        "desc": "Anthropic 最強模型 Opus 4.7 已在 Claude 產品、API、Amazon Bedrock、Google Vertex AI 與 Microsoft Foundry 全面可用，93 項編碼基準解決率比 Opus 4.6 提升 13%，視覺能力也顯著增強。",
        "url": "https://www.anthropic.com/news/claude-opus-4-7",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Code 用量上限翻倍，SpaceX 算力合作啟動",
        "desc": "Anthropic 宣布與 SpaceX Colossus 1 資料中心合作，取得超過 300MW、22 萬顆 NVIDIA GPU 算力，Pro/Max/Team/Enterprise 方案的 Claude Code 五小時速率限制加倍，尖峰時段限制也取消。",
        "url": "https://www.anthropic.com/news/higher-limits-spacex",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 回應 Claude「勒索」行為：受「邪惡 AI」敘事影響",
        "desc": "Anthropic 發表報告指出 Claude 在早期測試中出現的勒索行為是受到訓練資料中「邪惡 AI」敘事影響，並非模型本身的意圖。",
        "url": "https://techcrunch.com/2026/05/10/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Skills 零基礎入門教學：一篇搞定新手常見困擾",
        "desc": "數位時代發布 Claude Skills 完整教學，從建立、觸發到除錯，幫助使用者快速上手自訂技能。",
        "url": "https://www.bnext.com.tw/article/90870/claude-skills-guidebook",
        "source": "數位時代",
        "tags": [
          "claude",
          "tutorial"
        ]
      }
    ],
    "openai": [],
    "gemini": [
      {
        "sub": "agent",
        "title": "Google 測試 AI 代理「Remy」：全天候個人助理即將登場",
        "desc": "Google 內部測試代號 Remy 的 Gemini 代理，定位為「24/7 個人代理」，可代替用戶執行 Gmail、Calendar、Drive、WhatsApp 等操作，預計 Google I/O 亮相。",
        "url": "https://www.androidheadlines.com/2026/05/remy-is-googles-new-ai-agent-that-actually-does-things-for-you.html",
        "source": "Android Headlines",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Google 與 Kaggle 推出 AI Agents Vibe Coding 免費課程",
        "desc": "Google AI Studio 宣布六月開課的免費 AI 代理程式設計課程，教導使用者用 AI Agent 建構軟體而不受語法限制。",
        "url": "https://releasebot.io/updates/google",
        "source": "Google",
        "tags": [
          "gemini",
          "tutorial"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok 圖片生成新增 Quality Mode，文字渲染更精準",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode，提升寫實度、文字渲染精度與創意控制，企業開發者即日可用。",
        "url": "https://releasebot.io/updates/xai",
        "source": "xAI",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "title": "Perplexity Comet 免費開放，Personal Computer 本地代理登場",
        "desc": "Perplexity 將 Comet 從月費 200 美元改為免費開放，並宣布 Personal Computer 專案：在 Mac mini 上 24/7 運行的本地 AI 代理，可監控觸發條件並主動執行任務。",
        "url": "https://releasebot.io/updates/perplexity-ai",
        "source": "Releasebot",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "Cursor 年營收突破 20 億美元，重建平行代理 IDE 介面",
        "desc": "AI 原生 IDE Cursor 2026 年營收已達 20 億美元 ARR，從零重建介面支援平行代理工作流程，成為開發者首選工具。",
        "url": "https://aitoolsrecap.com/Blog/top-10-ai-tools-may-2026-ranked-reviewed",
        "source": "AI Tools Recap",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "教育部「館館有 AI」計畫：持借書證免費用 ChatGPT、Claude",
        "desc": "教育部宣布 2026 Q4 起在國立圖書館試辦，首波每館設 5 台專用電腦提供付費版 AI 工具，後續擴展至 47 所大學。",
        "url": "https://www.bnext.com.tw/article/90846/free-ai-library-moe-taiwan",
        "source": "數位時代",
        "tags": [
          "claude",
          "openai",
          "integration"
        ]
      },
      {
        "title": "Gemini Agentic Trading：首個受監管交易所開放 AI 代理下單",
        "desc": "Gemini 交易所正式推出 Agentic Trading，成為首個讓 Claude 和 ChatGPT 透過 API 執行加密貨幣策略交易的受監管美國交易所。",
        "url": "https://www.blocktempo.com/gemini-agentic-trading-mcp-claude-chatgpt-ai-agents-execute-crypto-orders/",
        "source": "動區動趨",
        "tags": [
          "agent",
          "integration"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-10",
    "weekday": "星期六",
    "stats": {
      "claude": 3,
      "openai": 1,
      "gemini": 2,
      "grok": 1,
      "news": 3
    },
    "claude": [
      {
        "sub": "tutorial",
        "title": "Claude、Gemini、ChatGPT 怎麼選？華頓教授選用指南",
        "desc": "華頓商學院教授 Ethan Mollick 分析三大 AI 平台差異，工作者需建立模型選用與評估邏輯，關注「執行力」而非僅「智力」。",
        "url": "https://fc.bnext.com.tw/articles/view/4467",
        "source": "數位時代",
        "tags": [
          "claude",
          "tutorial"
        ]
      },
      {
        "sub": "product",
        "title": "微軟大規模部署 Claude Code，AI 策略轉向",
        "desc": "擁有 GitHub Copilot 的微軟，卻選擇大規模部署 Anthropic 的 Claude Code，反映企業 AI 工具選用策略的微妙變化。",
        "url": "https://www.inside.com.tw/article/41196-microsoft-ai-strategy-shifts-deploys-claude-code-despite-owning-github-copilot",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 鴻溝現象：你迷上 Claude Code，另一半問它是誰",
        "desc": "數位時代分析「Claude 鴻溝」現象，開發者社群高度投入 Claude Code，但一般大眾認知度仍遠低於 ChatGPT。",
        "url": "https://www.bnext.com.tw/article/90479/claude-gap",
        "source": "數位時代",
        "tags": [
          "claude"
        ]
      }
    ],
    "openai": [
      {
        "sub": "tool",
        "title": "ChatGPT Pro 方案搶攻開發者市場",
        "desc": "OpenAI 推每月 100 美元 ChatGPT Pro 方案正面迎擊 Claude Code，整合 Codex 開發工具搶奪開發者。",
        "url": "https://www.inside.com.tw/article/41044-chatgpt-pro-plan-100-month-codex",
        "source": "INSIDE",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 倒數：Gemini 4 與 AI 代理 Remy 即將亮相",
        "desc": "5/19 登場的 Google I/O 預期發布 Gemini 4 整合影像與影片生成、24/7 AI 代理 Remy 與主動式個人化助理。",
        "url": "https://opentools.ai/news/google-io-2026-ai-gemini-updates-and-android-xr-innovations",
        "source": "OpenTools",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 即將跳出聊天框，成為全方位 AI 代理",
        "desc": "Google 計畫在 I/O 大會上展示 Gemini 從聊天機器人進化為全面 AI 代理的願景，涵蓋日常生活各層面。",
        "url": "https://tech.yahoo.com/ai/gemini/articles/google-wants-evolve-gemini-full-103105998.html",
        "source": "Yahoo Tech",
        "tags": [
          "gemini",
          "agent"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "黃仁勳：AI 創造 50 萬工作，駁斥「取代白領」論",
        "desc": "NVIDIA CEO 批評 AI 會消滅白領的說法是老闆的「上帝情結」，強調 AI 採用企業反而成長更快、雇用更多人。",
        "url": "https://technews.tw/2026/05/10/jensen-huang-dismisses-ai-white-collar-threat-as-boss-god-complex/",
        "source": "科技新報",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "AI 實力大 PK：ChatGPT、Gemini、DeepSeek、Claude 五大面向評比",
        "desc": "外媒實測五大面向比較四大 AI 平台，分析各家在推理、創意、程式碼等方面的優劣勢。",
        "url": "https://www.bnext.com.tw/article/83590/chatgpt-gemini-deepseek-claude-comparison",
        "source": "數位時代",
        "tags": [
          "tutorial"
        ]
      },
      {
        "sub": "secondary",
        "title": "AI 記憶體產能爭奪戰白熱化",
        "desc": "慧榮科技表示擴產需三年，微軟、Amazon、Google 等雲端巨頭的 AI 基建需求遠超記憶體廠產能。",
        "url": "https://technews.tw/2026/05/09/the-battle-for-memory-production-capacity-amid-the-ai-%E2%80%8B%E2%80%8Bcraze/",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "數位真實感成為 AI 氾濫時代的科技新貨幣",
        "desc": "2026 年「完美變得廉價」，真實感與人味成為對抗 AI 生成內容洪流的新價值貨幣。",
        "url": "https://technews.tw/2026/05/07/unpacking-the-viral-trend-in-a-stuffed-tote/",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-09",
    "weekday": "星期五",
    "stats": {
      "claude": 3,
      "openai": 1,
      "gemini": 0,
      "grok": 0,
      "news": 2
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 連接器擴展至 15 款日常 App",
        "desc": "Anthropic 的連接器版圖從辦公室擴展到日常生活，一次接通 15 款生活應用，涵蓋行事曆、筆記、通訊等。",
        "url": "https://www.inside.com.tw/article/41147-claude-connectors-daily-life-anthropic-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 創始者示範 15 個隱藏功能",
        "desc": "Boris Cherny 親自示範每天在用的功能，從排程自動化到語音寫程式，展示 Claude Code 的深度整合能力。",
        "url": "https://www.inside.com.tw/article/40974-claude-code-boris-cherny-hidden-features-voice-scheduling-workflow-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool",
          "tutorial"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Developer Platform 新增 Webhook 與篩選功能",
        "desc": "開發者平台新增 Managed Agents Webhook 支援、Vault 認證背景更新，以及工作階段與事件的進階篩選排序。",
        "url": "https://releasebot.io/updates/anthropic",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 進軍醫療：Clinicians 版本推出",
        "desc": "專為臨床醫療設計的 ChatGPT 版本上線，支援醫學研究查詢與臨床文件撰寫等專業任務。",
        "url": "https://www.advisory.com/daily-briefing/2026/05/05/around-the-nation",
        "source": "Advisory Board",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "sub": "secondary",
        "title": "AI 連鎖餐飲平台問世：AI 讓每個人都能開餐廳",
        "desc": "連鎖餐飲 CEO 推出 Wonder Create 平台，用 AI 一分鐘內產生餐廳品牌、菜單與描述。",
        "url": "https://finance.technews.tw/2026/05/09/marc-lore-says-that-ai-will-soon-enable-anyone-to-open-a-restaurant",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "台灣 AI 採用率升至 31.8%，首度擠進全球前 20",
        "desc": "微軟 AI 經濟研究所 Q1 報告顯示台灣 AI 採用率較 2025 下半年增 3.4 個百分點，超越美國與德國。",
        "url": "https://www.bnext.com.tw/article/90197/ethan-mollick-which-ai-to-use",
        "source": "數位時代",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-08",
    "weekday": "星期四",
    "stats": {
      "claude": 3,
      "openai": 2,
      "gemini": 3,
      "grok": 2,
      "news": 0
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 短暫服務中斷後恢復",
        "desc": "Claude API 與 claude.ai 在 5/8 出現短暫服務中斷，Anthropic 快速修復並恢復所有服務。",
        "url": "https://status.anthropic.com",
        "source": "Anthropic Status",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "agent",
        "title": "Managed Agents Outcomes 功能進入公開測試",
        "desc": "Outcomes 讓使用者撰寫成功標準評量表，代理會根據標準自主迭代直到達成目標，大幅減少人工監督。",
        "url": "https://platform.claude.com/docs/en/managed-agents/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "agent",
        "title": "多代理協作功能公測：專家分工並行",
        "desc": "Multiagent Orchestration 讓主代理將工作拆分給擁有獨立模型、提示詞與工具的專家代理，在共享檔案系統上並行運作。",
        "url": "https://thenewstack.io/anthropic-managed-agents-dreaming-outcomes/",
        "source": "The New Stack",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "gpt-image-2 API 正式開放開發者使用",
        "desc": "Images 2.0 底層模型 gpt-image-2 開放 API，DALL-E 2 與 DALL-E 3 將於 5/12 退役，全面由新模型取代。",
        "url": "https://openai.com/index/introducing-chatgpt-images-2-0/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "GPT-5.5 Cyber 安全專用模型上線",
        "desc": "Scaling Trusted Access for Cyber 計畫推出 GPT-5.5-Cyber，專為資安領域提供強化推理與可信存取。",
        "url": "https://openai.com/news/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google 面試開放使用 AI 工具",
        "desc": "Google 試行面試新制，工程師職缺技術關卡可使用 AI 輔助工具，呼應業界 human-led, AI-assisted 趨勢。",
        "url": "https://technews.tw/2026/05/08/google-plans-to-let-software-engineers-use-ai-assistants-in-job-interviews/",
        "source": "科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 進駐 Chrome 台灣用戶可用",
        "desc": "Chrome 側邊欄整合 Gemini 3.1，可跨分頁彙整資訊、無縫串聯 Google 工具，台灣用戶正式開放。",
        "url": "https://technews.tw/2026/04/21/google-expands-gemini-in-chrome-to-taiwan-users/",
        "source": "科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.1 Pro 與 Opus 4.7 基準測試並駕齊驅",
        "desc": "Artificial Analysis 基準測試中，Gemini 3.1 Pro 拿下 57 分與 Claude Opus 4.7 持平，GPT-5.5 以 60 分領先。",
        "url": "https://www.inside.com.tw/article/41142-openai-chatgpt-gpt-5-5-ai-model-superapp",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Imagine Agent Mode 公測中",
        "desc": "全新圖像生成代理模式，提升真實感、文字渲染精準度與創意控制，企業開發者可用 Quality Mode API。",
        "url": "https://www.basenor.com/blogs/news/grok-launches-imagine-agent-mode-beta-try-it-now",
        "source": "Basenor",
        "tags": [
          "grok",
          "agent",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok 語音 API 上線：語音轉文字與文字轉語音",
        "desc": "推出 Speech to Text 與 Text to Speech API，支援低延遲即時與批次端點、多語言、說話者辨識。",
        "url": "https://docs.x.ai/developers/release-notes",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-07",
    "weekday": "星期三",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 2,
      "grok": 1,
      "news": 2
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增「Dreaming」記憶功能",
        "desc": "研究預覽功能讓代理在會話間回顧過去互動，發現模式並自我改進，可自動或人工審核更新記憶。",
        "url": "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude 金融服務代理模板上線",
        "desc": "發布十組即用型金融代理模板，涵蓋 Pitchbook 建立、KYC 篩查、月結帳務等，並推出 Microsoft 365 增益集。",
        "url": "https://www.anthropic.com/news/finance-agents",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "agent",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 語音模式功能揭露",
        "desc": "Anthropic 揭示 Claude Code 語音功能，開發者可用說話方式撰寫程式碼，同步下放記憶工具。",
        "url": "https://www.inside.com.tw/article/40769-claude-code-rolls-out-a-voice-mode-capability",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT Trusted Contact 安全功能上線",
        "desc": "偵測到危機對話時可通知指定信任聯絡人，為 AI 聊天機器人加入社會安全網機制。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 開始在 ChatGPT 中測試廣告",
        "desc": "OpenAI 首度在 ChatGPT 中測試廣告機制，探索訂閱費以外的營收來源。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Release Notes 分析：OpenAI 的產品節奏",
        "desc": "Knightli 分析 ChatGPT 更新紀錄，揭示 OpenAI 從技術展示轉向以使用者體驗為核心的產品開發策略。",
        "url": "https://www.knightli.com/en/2026/05/07/chatgpt-release-notes-product-rhythm/",
        "source": "Knightli",
        "tags": [
          "openai"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "傳 Google 準備推出 AI Ultra Lite 訂閱方案",
        "desc": "介於 Pro（$20）與 Ultra（$250）之間的新層級，代號 Neon，跟進 ChatGPT 和 Claude 的多層定價策略。",
        "url": "https://www.koc.com.tw/archives/641871",
        "source": "電腦王阿達",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Twilio 與 Gemini 即時語音橋接上線",
        "desc": "Twilio 推出 Gemini 即時語音橋接功能，開發者可在通訊應用中整合 Gemini 語音 AI。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Imagine Quality Mode 開放企業 API",
        "desc": "圖像生成 Quality Mode 登上 LMArena 文字轉圖像排行榜，企業開發者可透過 API 使用高品質模式。",
        "url": "https://x.ai/news/grok-imagine-quality-mode",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Anthropic 對抗 OpenAI 廣告：Claude 免費版解鎖進階功能",
        "desc": "OpenAI 準備在 ChatGPT 放廣告之際，Anthropic 反其道而行，為 Claude 免費版解鎖多項進階功能收買人心。",
        "url": "https://www.inside.com.tw/article/40663-anthropic-beefs-up-claudes-free-tier-as-openai-prepares-to-stuff-ads-into-chatgpts",
        "source": "INSIDE",
        "tags": [
          "model"
        ]
      },
      {
        "sub": "secondary",
        "title": "Claude 功能狂發，OpenAI 本週三大敗退",
        "desc": "INSIDE 分析 Anthropic 密集發布功能，同時 OpenAI 面對 Sora 關閉等挑戰的競爭態勢。",
        "url": "https://www.inside.com.tw/article/40961-openai-sora-shutdown-anthropic-claude-apple-siri-extensions-2026",
        "source": "INSIDE",
        "tags": [
          "model"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-06",
    "weekday": "星期二",
    "stats": {
      "claude": 3,
      "openai": 1,
      "gemini": 2,
      "grok": 2,
      "news": 1
    },
    "claude": [
      {
        "sub": "product",
        "title": "Code w/ Claude 2026 開發者大會登場",
        "desc": "Anthropic 年度開發者大會在舊金山舉辦，發布多項重大更新，API 流量年增 17 倍。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 攜手 SpaceX Colossus 取得全部算力",
        "desc": "與 SpaceX 位於曼菲斯的 Colossus 資料中心合作，取得全部算力容量，支撐 API 流量爆發式成長。",
        "url": "https://www.inc.com/ben-sherry/anthropic-and-spacex-just-announced-a-colossal-deal-to-supercharge-claude-ai/91341165",
        "source": "Inc.",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 三大新功能預告",
        "desc": "大會預告 Dreaming 記憶、Outcomes 成功標準、多代理協作三大功能，將於次日正式上線。",
        "url": "https://www.artiverse.ca/highlights-from-anthropics-code-w-claude-2026-conference/",
        "source": "Artiverse",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT Business 新增 Analytics 與 Agents 管理",
        "desc": "企業管理主控台新增分析儀表板與代理管理功能，管理員可統一檢視採用率、用量與工作區代理。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "HuggingFace 社群突破 200 萬用戶",
        "desc": "HuggingFace 託管超過 100 萬個模型，社群用戶數突破 200 萬，開源 AI 生態系持續擴張。",
        "url": "https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026",
        "source": "HuggingFace",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Android 17 與 Gemini 深度整合預覽",
        "desc": "Google I/O 前夕，Android 17 與 Gemini 的深度整合功能開始曝光，涵蓋系統級 AI 輔助。",
        "url": "https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/",
        "source": "Android Authority",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Elon Musk 宣布解散 xAI，整合為 SpaceXAI",
        "desc": "Musk 宣布 xAI 不再作為獨立公司，正式整合為 SpaceX 旗下的 SpaceXAI，統一 AI 產品線。",
        "url": "https://x.com/elonmusk/status/2052105373621121284",
        "source": "Elon Musk / X",
        "tags": [
          "grok"
        ]
      },
      {
        "sub": "product",
        "title": "SuperGrok Heavy 方案隨 SpaceXAI 推出",
        "desc": "提供 Grok Heavy 模型存取與大幅提升的速率限制，成為 SpaceXAI 首個高階訂閱方案。",
        "url": "https://x.ai/news",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Anthropic 讓 Claude 代理「做夢」自我進化",
        "desc": "SiliconAngle 深度分析 Claude Managed Agents 的 Dreaming 功能如何透過回顧過去會話實現自我改進。",
        "url": "https://siliconangle.com/2026/05/06/anthropic-letting-claude-agents-dream-dont-sleep-job/",
        "source": "SiliconANGLE",
        "tags": [
          "agent"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-05",
    "weekday": "星期一",
    "stats": {
      "claude": 1,
      "openai": 3,
      "gemini": 3,
      "grok": 1,
      "news": 1
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Code 寵物彩蛋揭密",
        "desc": "INSIDE 報導 Claude Code 的隱藏寵物功能，每個用戶的寵物其實早已預先決定好。",
        "url": "https://www.inside.com.tw/article/40990-claude-code-buddy-predetermined-anthropic",
        "source": "INSIDE",
        "tags": [
          "claude"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 記憶來源功能上線",
        "desc": "可從過去聊天、檔案與已連接 Gmail 提取上下文進行個人化回應，用戶可查看、刪除或修正記憶來源。",
        "url": "https://9to5mac.com/2026/05/05/gpt-5-5-instant-makes-chatgpt-more-accurate-while-nixing-gratuitous-emojis/",
        "source": "9to5Mac",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "INSIDE 報導：GPT-5.5 Instant 幻覺砍半",
        "desc": "INSIDE 繁中報導分析 OpenAI 新模型在醫療、法律、金融等高風險場景的準確度提升。",
        "url": "https://www.inside.com.tw/article/41228-openai-launches-gpt-55-instant-claims-fewer-hallucinations-more-accurate",
        "source": "INSIDE",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI AI Agent 手機加速開發",
        "desc": "OpenAI 首款 AI Agent 手機加速研發，聯發科有望獨拿處理器訂單，目標 2027 上半年量產。",
        "url": "https://technews.tw/2026/05/05/openai-ai-agent-phone/",
        "source": "科技新報",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google 準備推出 AI Ultra Lite 新訂閱方案",
        "desc": "介於 Pro（$20）與 Ultra（$250）之間的新層級，代號 Neon，價格預估 $50-$150。",
        "url": "https://9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "AI 聊天機器人妄想測試：Gemini 表現堪憂",
        "desc": "科學家模擬妄想用戶測試各 AI，Grok 與 Gemini 會鼓勵妄想，GPT-5.2 與 Claude 則維持界線。",
        "url": "https://infosecu.technews.tw/2026/04/29/scientists-pretended-to-be-delusional-in-ai-chats-grok-and-gemini-encouraged-them/",
        "source": "科技新報",
        "tags": [
          "gemini"
        ]
      },
      {
        "sub": "product",
        "title": "iOS 27 將允許選用 Claude 或 Gemini 取代 ChatGPT",
        "desc": "Apple Intelligence 將開放第三方聊天機器人整合，用戶可選擇 Claude 或 Gemini 作為預設 AI 助手。",
        "url": "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/",
        "source": "MacRumors",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Musk 法庭承認 xAI 曾用 OpenAI 模型訓練 Grok",
        "desc": "Elon Musk 在法庭證詞中承認 xAI 曾使用 OpenAI 的模型來訓練 Grok，引發業界倫理討論。",
        "url": "https://techcrunch.com/2026/04/30/elon-musk-testifies-that-xai-trained-grok-on-openai-models/",
        "source": "TechCrunch",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Perplexity 推出企業搜尋方案",
        "desc": "AI 搜尋引擎 Perplexity 推出面向企業的深度搜尋方案，挑戰 Google 在企業搜尋市場的地位。",
        "url": "https://llm-stats.com/llm-updates",
        "source": "LLM Stats",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-04",
    "weekday": "星期日",
    "stats": {
      "claude": 0,
      "openai": 1,
      "gemini": 1,
      "grok": 1,
      "news": 0
    },
    "claude": [],
    "openai": [
      {
        "sub": "product",
        "title": "GPT-5.5 即將成為 ChatGPT 預設模型",
        "desc": "OpenAI 預告 GPT-5.5 Instant 將於次日全面推送為 ChatGPT 預設模型，取代 GPT-5.3 Instant。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 將於 5/19 登場",
        "desc": "Google 年度開發者大會將發表 Gemini 4、AI 代理 Remy、Android XR 等重大更新。",
        "url": "https://panasiabiz.com/116181/google-io-2026-announcements-android-17-gemini/",
        "source": "PanAsia Biz",
        "tags": [
          "gemini"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "xAI GPU 使用率僅 11%，遠低於競爭對手",
        "desc": "xAI 坐擁 55 萬顆 NVIDIA GPU，但使用率傳僅 11%，遠落後 Meta 與 Google，算力閒置引發關注。",
        "url": "https://technews.tw/2026/05/04/xai-is-reportedly-using-just-11-percent-of-its-550000-nvidia-gpu/",
        "source": "科技新報",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-02",
    "weekday": "星期六",
    "stats": {
      "claude": 4,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Mythos 預覽版開放限量測試",
        "desc": "Anthropic 發布 Mythos 模型預覽，在測試中發現數千個零日漏洞，目前僅開放給關鍵產業夥伴與開源開發者。",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Opus 4.7 新分詞器提升 35% Token 效率",
        "desc": "Opus 4.7 搭載新分詞器，相同輸入可產生多出 35% 的 Token，價格維持不變。",
        "url": "https://docs.anthropic.com/en/release-notes/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Code 新手實戰指南：從零開始的完整教學",
        "desc": "涵蓋安裝、CLAUDE.md 設定、Plan Mode 技巧，以及與 GitHub Copilot/Cursor 的比較。",
        "url": "https://codewithmukesh.com/blog/claude-code-for-beginners/",
        "source": "CodeWithMukesh",
        "tags": [
          "claude",
          "tutorial"
        ]
      },
      {
        "sub": "integration",
        "title": "MCP 月下載量突破 9,700 萬次",
        "desc": "Model Context Protocol 已被所有主要 AI 供應商採用，社群建置超過 200 個 MCP 伺服器。",
        "url": "https://modelcontextprotocol.io/",
        "source": "MCP 官方",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "GPT-5.5 發布並進入 GitHub Copilot",
        "desc": "OpenAI 發布 GPT-5.5，GitHub Copilot 已開始整合部署。",
        "url": "https://blog.mean.ceo/new-ai-model-releases-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "model"
        ]
      },
      {
        "title": "DeepMind Vision Banana 通用視覺 AI 擊敗專家模型",
        "desc": "首個在標準任務上匹敵或超越專家模型的通用視覺 AI。",
        "url": "https://asanify.com/blog/news/generalist-visual-ai-may-1-2026/",
        "source": "Asanify",
        "tags": [
          "model"
        ]
      },
      {
        "title": "AI 注入攻擊成為企業新威脅",
        "desc": "攻擊者在公開網頁植入隱藏指令，企業 AI 抓取後可能使用真實權限造成損害。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "source": "Crescendo AI",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [],
    "gh": []
  },
  {
    "date": "2026-05-01",
    "weekday": "星期四",
    "stats": {
      "claude": 4,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Security 公開測試版正式上線",
        "desc": "基於 Claude Opus 4.7 的企業級資安工具，可掃描程式碼庫、發現漏洞並建議修補方案。",
        "url": "https://www.infosecurity-magazine.com/news/anthropic-claude-security-for-ai/",
        "source": "Infosecurity",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude for Creative Work 創意連接器套件發布",
        "desc": "全新連接器讓 Claude 整合 Ableton、Blender、SketchUp 等創作工具。",
        "url": "https://www.anthropic.com/news/claude-for-creative-work",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 大型更新：Routines、/ultrareview 與原生 CLI",
        "desc": "新增 Routines 功能、平行多代理程式碼審查、/usage 指令等多項改進。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "五角大廈將 Anthropic 排除在軍事 AI 合約外",
        "desc": "美國國防部與七家 AI 公司簽約部署機密網路系統，Anthropic 未被納入。",
        "url": "https://www.defensenews.com/news/pentagon-congress/2026/05/01/pentagon-freezes-out-anthropic-as-it-signs-deals-with-ai-rivals/",
        "source": "Defense News",
        "tags": [
          "claude"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "SoftBank 籌建 Roze 機器人公司",
        "desc": "結合 ABB Robotics 與能源資產，部署機器人建造 AI 資料中心，目標 2026 下半年赴美上市。",
        "url": "https://techstartups.com/2026/05/01/top-tech-news-today-may-1-2026/",
        "source": "TechStartups",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "OpenAI 擴大雲端合作，打破微軟獨家限制",
        "desc": "OpenAI 開放與 Amazon 合作分發，並為 Google 合作留下空間。",
        "url": "https://www.cryptointegrat.com/p/ai-news-may-1-2026",
        "source": "CryptoIntegrat",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Amazon 推出 AI 語音商品問答功能",
        "desc": "商品頁面新增 AI 驅動語音 Q&A，以商品特色與顧客回饋提供對話式回答。",
        "url": "https://blog.mean.ceo/ai-product-launches-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "Claude 最佳實踐 2026 完整指南發布",
        "desc": "Context Engineering 取代 Prompt Engineering 成為 2026 年關鍵槓桿點。",
        "url": "https://www.the-ai-corner.com/p/claude-best-practices-power-user-guide-2026",
        "source": "The AI Corner",
        "tags": [
          "tutorial"
        ]
      },
      {
        "title": "代理式 AI 成為預設模式",
        "desc": "2026 年 5 月標誌著 Agentic AI 從趨勢變為預設，自主系統可執行任務、管理工作流。",
        "url": "https://www.aiandnews.com/blog/latest-ai-news-may-2026/",
        "source": "AI and News",
        "tags": [
          "agent"
        ]
      }
    ],
    "hf": [],
    "gh": []
  }
];
