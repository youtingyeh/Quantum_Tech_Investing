// Quantum Tech Investing - Comprehensive Intelligence Database (Verified October 2026 Edition)
// Audited against live October 2026 market data:
// - Quantinuum (NASDAQ: QNT) completed IPO on June 4, 2026 ($60 IPO price, $1.68B raised, ~$9.6B market cap)
// - IQM Quantum Computers (NASDAQ: IQMX) completed SPAC merger on July 2, 2026 (~$4.42B market cap)
// - Infleqtion (NYSE: INFQ) completed SPAC merger on Feb 17, 2026 (~$1.98B market cap)
// - Xanadu (NASDAQ: XNDU) completed SPAC merger on Mar 27, 2026 (~$925M market cap)
// - Pasqal (NASDAQ: PSQL) completed SPAC merger on Aug 28, 2026 (~$1.20B market cap)
// - Horizon Quantum (NASDAQ: HQ) completed SPAC merger on Mar 20, 2026 (~$677M market cap)
// - Pre-IPO section strictly contains companies still privately held as of October 2026 (PsiQuantum, SandboxAQ, Classiq, QuEra, Atom Computing, SEEQC, Alice & Bob, Riverlane, PQShield, Diraq).

window.QUANTUM_DATA = {
  lastUpdated: "2026-10-19",
  macroMetrics: {
    globalPublicFunding: "$48.5B+",
    purePlayTotalCash: "$8.8B+ (含 QNT IPO 募資 $1.68B 與 IONQ $3.3B)",
    nistPqcStandards: "FIPS 203 / 204 / 205 / 206",
    cnsa20Deadline: "2030 (全面強制淘汰傳統 RSA/ECC)",
    record2QFidelity: "99.9915% (IonQ / Oxford Ionics) & 99.921% (Quantinuum QNT)",
    recordLogicalQubits: "48 Logical Qubits (QuEra) / Below-Threshold d=7 (Google Willow)"
  },

  // ============================================================================
  // 1. PUBLICLY TRADED US STOCKS (已上市美股：量子電腦、量子加密、後量子密碼標的)
  // ============================================================================
  stocks: [
    {
      id: "ionq",
      ticker: "IONQ",
      exchange: "NYSE",
      name: "IonQ, Inc.",
      category: "pure-compute",
      subCategories: ["量子電腦硬體", "量子網路 (QKD)", "離子阱龍頭"],
      modality: "離子阱 (Trapped-Ion: ¹³³Ba⁺ / ¹⁷¹Yb⁺ + 電磁晶片控制 EQC)",
      price: 31.38,
      marketCap: "$12.73B",
      marketCapNum: 12730,
      revenue: "$130.0M (FY2025)",
      revenueNum: 130.0,
      revenueYoY: "+202%",
      revenueYoYNum: 202,
      bookingsOrBacklog: "商業企業客戶佔比 >60%；AFRL 與歐洲主權量子中心長約",
      cashReserves: "$3,300M (~$3.3B)",
      cashNum: 3300,
      runway: "充裕至 2030+ (無短期增資壓力)",
      flagshipProduct: "IonQ Tempo (#AQ 64) / Forte Enterprise (#AQ 35) / IDQ QKD",
      physicalQubits: 100,
      logicalQubits: "Walking Cat qLDPC 架構 (2,514 實體 → 110 邏輯量子位元藍圖)",
      twoQubitFidelity: "99.99% (Oxford Ionics EQC) / 99.9% (Tempo Ba⁺)",
      fidelityNum: 99.99,
      gateSpeed: "~100–600 µs (高保真全連通 All-to-All)",
      errorCorrection: "qLDPC 廣義自行車碼 (Walking Cat Architecture, ~22:1 壓縮比)",
      pqcOrCryptoRole: "2025 年收購 ID Quantique (IDQ) 與 Qubitekk，整合 QKD 量子金鑰分發、QRNG 量子亂數晶片與量子網路互連",
      summary: "全球首家年營收突破 1 億美元且市值最高的純量子運算上市公司（~$12.7B）。2025 年透過一連串戰略併購（Oxford Ionics、ID Quantique、Lightsynq、Qubitekk），完成「電控離子阱晶片 + 光子互連 + 量子安全通訊網路」垂直整合。",
      technicalAdvantages: [
        "全連通架構 (All-to-All Connectivity)：任意兩顆離子皆可直接執行邏輯閘，無需像超導晶片耗費大量 SWAP 閘。",
        "收購 Oxford Ionics 取得電子量子位元控制 (EQC)：將原本笨重的雷射光學控制轉移至標準半導體晶圓廠 (Infineon) 製造的微波天線晶片，雙量子位元保真度突破 99.99% (Four Nines)，SPAM 保真度達 99.9993%。",
        "轉向鋇離子 (¹³³Ba⁺) 平台 (IonQ Tempo)：使用可見光波段取代紫外光，大幅降低光纖損耗與相位雜訊，提前達成 #AQ 64 里程碑。",
        "Lightsynq 光子互連與量子記憶體：支援模組化多晶片 (Multi-chiplet) 光學互連，解決單一離子阱容量上限問題。"
      ],
      outlook: {
        rating: "核心龍頭 (Core Leader)",
        bullCase: "現金部位高達 33 億美元，不僅是純量子股營收冠軍 ($130M)，更透過收購 ID Quantique 直接切入已有穩定現金流的量子加密 (QKD/QRNG) 市場；Oxford Ionics 的標準晶圓代工製程解決了離子阱擴展性痛點。",
        bearCase: "市值逾 127 億美元，隨 Quantinuum (QNT) 於 2026 年 6 月上市後面臨直接同業估值比較；離子阱閘速（微秒級）較超導慢，需仰賴高密度 qLDPC 糾錯碼彌補時脈差距。",
        catalysts2026_2027: [
          "整合 Oxford Ionics EQC 技術之 256+ 量子位元晶片流片",
          "美國空軍研究實驗室 (AFRL) 量子網路節點交付",
          "Tempo #AQ 64 系統於 AWS Braket 與企業端全面商業化"
        ]
      },
      news: [
        {
          date: "2026-09",
          title: "成功展示單顆標準 CPU 即時解碼 408 顆邏輯量子位元，延遲開銷僅 0.02%",
          source: "IonQ Research / IEEE",
          impact: "正面突破"
        },
        {
          date: "2025-09",
          title: "以 10.75 億美元完成收購英國離子阱晶片商 Oxford Ionics，創下 99.99% 雙量子閘世界紀錄",
          source: "SEC Filing / Company PR",
          impact: "重大併購"
        },
        {
          date: "2025-05",
          title: "完成收購瑞士量子加密先驅 ID Quantique (約 2.5 億美元) 與哈佛光子互連新創 Lightsynq",
          source: "IonQ Investor Relations",
          impact: "版圖擴張"
        }
      ],
      papers: [
        {
          title: "The Walking Cat Architecture: Fault-Tolerant Quantum Computing with Trapped Ions and qLDPC Codes",
          journal: "arXiv:2604.19481",
          year: "2026",
          url: "https://arxiv.org/abs/2604.19481",
          highlight: "110 頁容錯藍圖：以 2,514 顆實體離子建構 110 顆邏輯量子位元，每日可執行 100 萬次 T-Gate。"
        },
        {
          title: "Cardinally-Constrained Portfolio Optimization on a 64-Qubit Barium Trapped-Ion Processor",
          journal: "arXiv:2602.23976 (with Kipu Quantum)",
          year: "2026",
          url: "https://arxiv.org/abs/2602.23976",
          highlight: "於 64 量子位元 Tempo 原型機執行 S&P 500 250 檔資產組合最佳化 (BF-DCQO)。"
        }
      ]
    },
    {
      id: "qnt",
      ticker: "QNT",
      exchange: "NASDAQ",
      name: "Quantinuum Inc.",
      category: "pure-compute",
      subCategories: ["離子阱 QCCD 霸主", "2026/06 傳統 IPO 上市", "量子真亂數加密 (Quantum Origin)"],
      modality: "離子阱 QCCD (Trapped-Ion: ¹³⁷Ba⁺ 運算離子 + ¹⁷¹Yb⁺ 同情冷卻動態環形穿梭架構)",
      price: 34.50,
      marketCap: "$9.60B",
      marketCapNum: 9600,
      revenue: "$30.0M (FY2026 財測中位數 $28M–$32M / Q2'26 單季 $8.0M)",
      revenueNum: 30.0,
      revenueYoY: "+279% (Q2'26 YoY)",
      revenueYoYNum: 279,
      bookingsOrBacklog: "Oracle 直接採購 Helios 整機系統；微軟 Azure Quantum、摩根大通、Amgen 與日本理研 (RIKEN) 長期合約",
      cashReserves: "$1,950M+ (2026/06 IPO 募資 $16.8 億美元 + 2025 私募 $6 億)",
      cashNum: 1950,
      runway: "極度充裕至 2030+",
      flagshipProduct: "Helios (98Q 鋇離子處理器) / System Model H2 (56Q, QV 2²¹) / Quantum Origin PQC/QRNG",
      physicalQubits: 98,
      logicalQubits: "Helios 支援 50+ 高保真邏輯位元；H2 與微軟合作實證 12 顆邏輯量子位元 (錯誤率比實體低 800 倍)",
      twoQubitFidelity: "99.921% (Helios 98Q 全系統平均雙量子閘保真度)",
      fidelityNum: 99.921,
      gateSpeed: "~100 µs (動態環形儲存與無損離子穿梭 QCCD)",
      errorCorrection: "主動症候群提取 (Active Syndrome Extraction) + Color / Steane / qLDPC Codes",
      pqcOrCryptoRole: "旗下 Quantum Origin 是全球唯一透過量子糾纏貝爾測試驗證之商用加密金鑰強化與 QRNG 平台，已與各大 HSM 與防火牆整合",
      summary: "由 Honeywell Quantum Solutions 與劍橋量子 (Cambridge Quantum) 合併而成，於 **2026 年 6 月 4 日正式在 Nasdaq 完成傳統 IPO 掛牌上市（代號 QNT，IPO 發行價 $60，募資高達 16.8 億美元）**。Q2 2026 營收暴增 279% 至 800 萬美元，並獲甲骨文 (Oracle) 採購 Helios 整機系統，與 IonQ 並列全球離子阱雙雄。",
      technicalAdvantages: [
        "QCCD 離子穿梭與同情冷卻 (Sympathetic Cooling)：Helios 處理器結合 98 顆鋇離子 (¹³⁷Ba⁺) 與鐿離子冷卻，達成 99.921% 平均雙量子閘保真度（錯誤率僅 7.9×10⁻⁴）。",
        "連續多年刷新 Quantum Volume 世界紀錄 (QV 2²¹)：在微軟 Azure Quantum 邏輯位元實驗中實現 800 倍錯誤率降低，完成人類首次結合邏輯位元、HPC 與 AI 的催化劑化學模擬。",
        "軟硬一體全棧生態：擁有全球廣泛使用的 TKET 量子編譯器、InQuanto 量子化學軟體、lambeq 生成式量子 AI 與 Quantum Origin 量子加密金鑰平台。"
      ],
      outlook: {
        rating: "機構首選離子阱與容錯邏輯位元霸主 (Institutional Flagship Pure-Play)",
        bullCase: "2026 年 6 月透過正規 IPO（非 SPAC）募集 16.8 億美元，獲 Morgan Stanley、JPMorgan、NVIDIA 與 Oracle 強力背書；股價自上市初期高點 $86.79 回檔至 ~$34.50（市值 ~$9.6B），相較 IonQ ($12.7B) 具備顯著估值吸引力。",
        bearCase: "IPO 股票獎酬費用與高強度研發投入使短期 GAAP 淨虧損較大；上市滿半年後需留意閉鎖期解禁籌碼波動。",
        catalysts2026_2027: [
          "Oracle 採購之 Helios 98Q 系統正式交付認列營收，推升 FY26 營收達 $28M–$32M 指引",
          "下一代 Apollo 通用容錯量子電腦（目標數千顆實體離子、數百顆邏輯位元）架構推進",
          "納入主要科技指數與 QTUM ETF 核心權重配置"
        ]
      },
      news: [
        {
          date: "2026-08",
          title: "公布上市後首份 Q2 2026 財報：單季營收年增 279% 達 800 萬美元，獲 Oracle 採購 Helios 主機並上調全年財測至 2,800–3,200 萬美元",
          source: "Quantinuum Q2 2026 10-Q / Investing.com",
          impact: "財報超預期"
        },
        {
          date: "2026-06",
          title: "於 2026 年 6 月 4 日以每股 $60.00 在 Nasdaq 正式掛牌上市 (Ticker: QNT)，擴大發行募資高達 16.8 億美元",
          source: "Nasdaq / Quantinuum PR",
          impact: "世紀 IPO"
        }
      ],
      papers: [
        {
          title: "Demonstration of fault-tolerant universal quantum gate operations on trapped-ion logical qubits",
          journal: "Nature / Quantinuum & Microsoft",
          year: "2024",
          url: "https://www.quantinuum.com",
          highlight: "於 H2 處理器展示主動症候群提取 (Active Syndrome Extraction) 與容錯邏輯閘，錯誤率降低 800 倍。"
        },
        {
          title: "Helios: A 98-Qubit Barium Trapped-Ion Quantum Processor with All-to-All Connectivity",
          journal: "Quantinuum Technical Architecture Report",
          year: "2025",
          url: "https://www.quantinuum.com",
          highlight: "採用環形交匯離子阱與 ¹³⁷Ba⁺ 離子，實現 99.921% 平均雙量子位元閘保真度。"
        }
      ]
    },
    {
      id: "qbts",
      ticker: "QBTS",
      exchange: "NYSE",
      name: "D-Wave Quantum Inc.",
      category: "pure-compute",
      subCategories: ["量子退火商業化", "雙軌閘模型佈局", "組合最佳化"],
      modality: "超導量子退火 (Quantum Annealing - Zephyr 20向連通拓撲) + 雙軌超導邏輯閘 (Gate-Model)",
      price: 12.74,
      marketCap: "$4.65B",
      marketCapNum: 4650,
      revenue: "$24.6M (FY2025) / H1'26 簽約訂單 (Bookings) $35.5M",
      revenueNum: 24.6,
      revenueYoY: "+179% (FY25 營收) / +1,120% (H1'26 Bookings)",
      revenueYoYNum: 179,
      bookingsOrBacklog: "H1 2026 Bookings 達 $35.5M；剩餘履約義務 (RPO Backlog) 暴增 668% 至 $40.7M",
      cashReserves: "$320M+",
      cashNum: 320,
      runway: "至 2028+ (邁向自由現金流損益兩平)",
      flagshipProduct: "Advantage2 (Zephyr 20-way Topology, 4,800+ Qubits) / Leap 雲端與 Stride 混合求解器",
      physicalQubits: 4800,
      logicalQubits: "退火系統不適用傳統邏輯位元；收購 QCI 開發內建錯誤檢測之 Dual-Rail 邏輯閘量子位元",
      twoQubitFidelity: "N/A (退火系統以能量尺度 +40%、相干時間 2x、雜訊降低 4x 衡量)",
      fidelityNum: 99.2,
      gateSpeed: "微秒級退火週期 (Annealing Time ~ns–µs)",
      errorCorrection: "Zephyr 20-way 高連通度縮短鏈長 + Dual-Rail Cavity Erasure Qubits (閘模型)",
      pqcOrCryptoRole: "應用於國防防空飛彈排程 (Anduril/Davidson)、金融反詐欺與電信網路最佳化",
      summary: "全球唯一同時掌握「商用超導量子退火」與「雙軌超導邏輯閘」的量子運算公司。2025 年於《Science》發表在磁性材料非平衡量子模擬上超越 Frontier 超級電腦百萬年的實證量子優勢，2026 上半年訂單 (Bookings) 暴增超過 11 倍，市值躍居純量子股前段班（~$4.65B）。",
      technicalAdvantages: [
        "全球首個獲《Science》同行審查認證之實用物理模擬量子優勢 (2025 年 3 月)：數分鐘內完成自旋玻璃非平衡動力學模擬，Frontier 超算需耗時百萬年。",
        "Zephyr 拓撲結構 (Advantage2)：每個量子位元具備 20 向連通度 (20-way connectivity)，能量尺度提升 40%，相干時間倍增，能嵌入比前代複雜 3 倍的工業級最佳化問題。",
        "整機銷售高單價商業模式：義大利倫巴底超算中心 (€10M)、佛羅里達大西洋大學 ($20M) 等直接採購 Advantage2 主機，推升 RPO 積壓訂單達 $40.7M。",
        "收購耶魯衍生新創 Quantum Circuits Inc. (QCI)：切入雙軌共振腔 (Dual-Rail Cavity) 容錯邏輯閘量子電腦，將主導錯誤轉換為易於偵測的擦除錯誤 (Erasure Error)。"
      ],
      outlook: {
        rating: "商用落地領先者 (Commercial Adoption Leader)",
        bullCase: "不需等到 2030 年容錯量子電腦問世，D-Wave 的量子退火機已能立即解決物流、排程、國防飛彈防禦與材料模擬問題，且整機銷售訂單在 2026 年呈現爆發式成長。",
        bearCase: "量子退火無法執行 Shor 演算法或通用量子化學模擬；整機交付認列營收存在時間差（Bookings 高但單季 GAAP 營收波動較大）。",
        catalysts2026_2027: [
          "佛羅里達大西洋大學 ($20M) 與歐美研究機構 Advantage2 主機裝機認列營收",
          "與 Anduril 及 Davidson Technologies 擴大美國國防部飛彈防禦合作",
          "整合 QCI 技術之首款 Dual-Rail 邏輯閘處理器原型發布"
        ]
      },
      news: [
        {
          date: "2026-08",
          title: "2026 上半年 Bookings 達 3,550 萬美元 (年增 1,120%)，未完成履約訂單 (RPO) 創 4,070 萬美元新高",
          source: "D-Wave Q2 2026 Earnings",
          impact: "訂單爆發"
        },
        {
          date: "2026-02",
          title: "佛羅里達大西洋大學 (FAU) 簽署 2,000 萬美元協議採購 Advantage2 量子電腦系統",
          source: "Company PR",
          impact: "重大合約"
        },
        {
          date: "2025-03",
          title: "《Science》重磅刊登 D-Wave 論文：於磁性材料量子模擬實證超越 Frontier 超級電腦之量子優勢",
          source: "Science Magazine",
          impact: "學術里程碑"
        }
      ],
      papers: [
        {
          title: "Beyond-Classical Computation in Quantum Simulation",
          journal: "Science (Vol. 387, March 12, 2025)",
          year: "2025",
          url: "https://www.science.org/doi/10.1126/science.ado6285",
          highlight: "於 Advantage2 原型機完成 3D 自旋玻璃非平衡量子相變模擬，Frontier 超算需耗時近百萬年。"
        }
      ]
    },
    {
      id: "iqmx",
      ticker: "IQMX",
      exchange: "NASDAQ",
      name: "IQM Quantum Computers Oyj",
      category: "pure-compute",
      subCategories: ["歐洲超導量子龍頭", "2026/07 上市", "自有晶圓廠與超算整合"],
      modality: "超導量子位元 (Superconducting Transmon + 可調耦合器與星狀共振腔架構)",
      price: 9.28,
      marketCap: "$4.42B",
      marketCapNum: 4420,
      revenue: "$35.0M+ (歐洲與亞洲國家級超算中心整機銷售)",
      revenueNum: 35.0,
      revenueYoY: "+115%",
      revenueYoYNum: 115,
      bookingsOrBacklog: "德國 LRZ (萊布尼茨超算中心)、芬蘭 VTT、西班牙 BSC、韓國與台灣國家研究機構整機交付合約",
      cashReserves: "$380M+",
      cashNum: 380,
      runway: "至 2029+",
      flagshipProduct: "IQM Radiance (54Q & 150Q 商用超導主機) / IQM Spark (5Q 教育科研機) / IQM Star 架構",
      physicalQubits: 150,
      logicalQubits: "IQM Star 結合中央共振腔實現超導長程耦合以支援高編碼率 qLDPC 糾錯碼",
      twoQubitFidelity: "99.5% – 99.7% (CZ Gate)",
      fidelityNum: 99.6,
      gateSpeed: "~20–40 ns",
      errorCorrection: "超導星狀拓撲 (Star Topology) + 表面碼與 qLDPC 雙軌糾錯",
      pqcOrCryptoRole: "為歐亞主權超級電腦中心提供本地端 (On-Premise) 量子算力與加密分析測試平台",
      summary: "總部位於芬蘭的歐洲超導量子電腦整機銷售龍頭，於 **2026 年 7 月 2 日完成與 Real Asset Acquisition Corp. 合併並以 ADS 形式登陸 Nasdaq（代號 IQMX，目前市值約 $4.42B）**。在芬蘭埃斯波擁有專屬超導量子晶圓廠，累計已向全球超級電腦中心交付最多台商用本地端超導量子電腦。",
      technicalAdvantages: [
        "全球本地端 (On-Premise) 超算整合出貨冠軍：已將 54Q 與 150Q Radiance 系統直接裝入德國 LRZ、芬蘭 VTT 等頂級 HPC 超算機房。",
        "IQM Star 非局域超導耦合架構：利用中央微波諧振器連接多顆超導量子位元，突破傳統平面超導僅能鄰近耦合的限制，大幅降低邏輯位元開銷。",
        "歐洲自有量子晶圓代工廠：從矽晶圓蝕刻、低溫封裝到整機組裝完全自主掌握，受惠歐盟主權量子法案。"
      ],
      outlook: {
        rating: "歐亞超算整機交付霸主 (On-Premise Supercomputing Leader)",
        bullCase: "不同於僅賣雲端分鐘數的廠商，IQM 直接向各國政府超算中心出售單價數百萬至上千萬歐元的實體量子電腦，營收能見度極高。",
        bearCase: "在超導路線上仍需與資金雄厚的 Google 及 IBM 競逐千位元級容錯系統。",
        catalysts2026_2027: [
          "150 量子位元 IQM Radiance 系統於歐洲與亞太超算中心驗收認列營收",
          "與 NVIDIA CUDA-Q 深度整合之混合超算機櫃交付"
        ]
      },
      news: [
        {
          date: "2026-07",
          title: "於 2026 年 7 月 2 日正式在 Nasdaq 掛牌交易 (Ticker: IQMX)，成為首家在美股主要交易所上市的歐洲超導量子電腦公司",
          source: "Nasdaq / The Quantum Insider",
          impact: "新股上市"
        }
      ],
      papers: [
        {
          title: "Star-Topology Superconducting Quantum Processors for Low-Overhead Fault Tolerance",
          journal: "IQM Quantum Architecture Whitepaper / PRX Quantum",
          year: "2025",
          url: "https://www.meetiqm.com",
          highlight: "展示透過中心諧振腔實現全連通超導量子閘與高效率 qLDPC 編碼。"
        }
      ]
    },
    {
      id: "rgti",
      ticker: "RGTI",
      exchange: "NASDAQ",
      name: "Rigetti Computing, Inc.",
      category: "pure-compute",
      subCategories: ["量子電腦硬體", "超導模組化晶片", "自有晶圓廠"],
      modality: "超導量子位元 (Superconducting Transmon - 模組化多晶片 Tiled Chiplets)",
      price: 11.80,
      marketCap: "$4.08B",
      marketCapNum: 4080,
      revenue: "$19.2M (2026 年化預估 / Q2'26 單季 $5.14M)",
      revenueNum: 19.2,
      revenueYoY: "+185% (Q2'26 YoY)",
      revenueYoYNum: 185,
      bookingsOrBacklog: "印度 C-DAC、英國 NQCC 與美國超算中心 Novera QPU 硬體訂單 + CHIPS 法案最高 $100M 意向書",
      cashReserves: "$541.3M (零負債)",
      cashNum: 541.3,
      runway: "至 2028–2029 年",
      flagshipProduct: "Cepheus-1-108Q (108 量子位元多晶片) / Novera 9Q 本地端 QPU",
      physicalQubits: 108,
      logicalQubits: "支援 Surface Code 平面格點，與 Riverlane 合作即時糾錯解碼",
      twoQubitFidelity: "99.5% (36Q 晶片中位數) / 99.0% (108Q 全系統) / 99.9% (24ns 實驗室原型)",
      fidelityNum: 99.5,
      gateSpeed: "24–28 ns (超高速絕熱 CZ 閘)",
      errorCorrection: "Adiabatic CZ 原生閘直接相容 Surface Code 與奇偶校驗編譯器",
      pqcOrCryptoRole: "專注於超導量子處理器硬體與混合雲端算力供應",
      summary: "全美少數擁有自有量子積體電路晶圓廠 (Fab-1) 的純超導量子電腦公司（市值 ~$4.08B）。透過 ABAA 製程與模組化多晶片拼接技術 (Tiled Chiplets)，於 2026 年初推出 108 量子位元 Cepheus-1-108Q，並獲廣達電腦 (Quanta) 戰略入股。",
      technicalAdvantages: [
        "自有晶圓廠 Fab-1 與 ABAA 退火專利：室溫交流偏壓輔助退火 (ABAA) 大幅提升約瑟夫森接面 (Josephson Junction) 頻率精準度與多晶片良率。",
        "模組化多晶片拼接 (Multi-Chiplet Tiling)：Cepheus 架構將多個 9Q/36Q 晶片透過超導凸塊互連拼接至 108Q，並正邁向 336Q (Lyra 架構)。",
        "24 奈秒超高速邏輯閘：浮動可調耦合器 (Floating Tunable Coupler) 實現完全消除待機殘留 ZZ 串擾，原型雙量子位元閘保真度達 99.9%。",
        "Novera QPU 硬體直銷模式：直接向國家實驗室、大學與研究機構銷售 9Q 本地端量子處理器，創造可預測的硬體收入。"
      ],
      outlook: {
        rating: "高成長硬體挑戰者 (High-Beta Challenger)",
        bullCase: "超導路線與 Google、IBM 同源，邏輯閘速度比離子阱快上千倍（24ns）；資產負債表擁有 $5.41 億現金且零負債，又有廣達電腦戰略合作與美國商務部 CHIPS 法案補助加持。",
        bearCase: "直接面臨 Google Willow、IBM Heron/Nighthawk 與歐洲 IQM (IQMX) 的競爭；多晶片跨邊界耦合保真度仍略低於單晶片內部。",
        catalysts2026_2027: [
          "Lyra 336 量子位元系統研發與低溫封裝驗證",
          "美國商務部 CHIPS Act 最高 1 億美元正式撥款落地",
          "與廣達電腦 (Quanta) 合作開發機櫃級超導控制伺服器"
        ]
      },
      news: [
        {
          date: "2026-08",
          title: "Q2 2026 營收年增 185% 達 514 萬美元，現金部位擴充至 5.41 億美元且無計息負債",
          source: "Rigetti Q2 2026 10-Q",
          impact: "財報亮眼"
        },
        {
          date: "2026-03",
          title: "108 量子位元多晶片系統 Cepheus-1-108Q 正式於 AWS Braket 與 Azure Quantum 上線",
          source: "Company PR",
          impact: "產品發布"
        },
        {
          date: "2025-05",
          title: "Quantum Machines 使用 OPX1000 控制器於 Novera 9Q 晶片獨立驗證 99.5% 雙量子閘保真度",
          source: "Quantum Machines / Rigetti",
          impact: "技術驗證"
        }
      ],
      papers: [
        {
          title: "High-Fidelity Adiabatic CZ Gates with Symmetric Floating Tunable Couplers",
          journal: "arXiv:2604.05048",
          year: "2026",
          url: "https://arxiv.org/abs/2604.05048",
          highlight: "展示對稱浮動可調耦合器架構，實現殘留 ZZ=0 抵消與 24–28ns 下 99.9% 原型保真度。"
        },
        {
          title: "Alternating-Bias Assisted Annealing of Amorphous Oxide Tunnel Junctions for Superconducting Qubits",
          journal: "Nature Communications Materials",
          year: "2024",
          url: "https://www.nature.com/articles/s43246-024-00590-3",
          highlight: "ABAA 製程突破，精準調控約瑟夫森接面電阻分佈，奠定多晶片量產基礎。"
        }
      ]
    },
    {
      id: "infq",
      ticker: "INFQ",
      exchange: "NYSE",
      name: "Infleqtion, Inc. (ColdQuanta)",
      category: "pure-compute",
      subCategories: ["中性原子量子電腦", "量子原子鐘與感測", "2026/02 上市"],
      modality: "中性原子 (Neutral Atom - 銣/銫光學晶格) + 量子射頻與原子鐘感測",
      price: 9.09,
      marketCap: "$1.98B",
      marketCapNum: 1980,
      revenue: "$38.0M (含政府國防感測與量子軟體營收)",
      revenueNum: 38.0,
      revenueYoY: "+85%",
      revenueYoYNum: 85,
      bookingsOrBacklog: "美國國防部無 GPS 導航原子鐘、DARPA、NASA、英國 NQCC 與日本量子中心訂單",
      cashReserves: "$520M (2026/02 合併上市募資逾 $550M)",
      cashNum: 520,
      runway: "至 2029+",
      flagshipProduct: "Sqale 中性原子量子電腦 / Tiqker 光學原子鐘 / SuperstaQ 跨平台編譯器",
      physicalQubits: 1600,
      logicalQubits: "支援動態光學鑷子重構與擦除轉換糾錯",
      twoQubitFidelity: "99.5% (CZ Rydberg Gate)",
      fidelityNum: 99.5,
      gateSpeed: "~200–500 ns (里德堡激發態交互作用)",
      errorCorrection: "可重構原子陣列 + SuperstaQ 編譯層錯誤緩解",
      pqcOrCryptoRole: "Tiqker 量子光學原子鐘提供電信與金融加密網路抗干擾高精準授時 (PNT)",
      summary: "原名 ColdQuanta，於 **2026 年 2 月 17 日與 Churchill Capital Corp X 完成合併在 NYSE 掛牌上市（代號 INFQ，目前股價 ~$9.09、市值 ~$1.98B）**。不僅開發 Sqale 中性原子量子電腦，更在可立即商業化變現的「量子光學原子鐘 (Tiqker)」與「量子射頻感測器」居全球領先地位。",
      technicalAdvantages: [
        "運算 + 感測雙引擎變現：商用機架式光學原子鐘 Tiqker 已部署於無 GPS 環境之國防導航與資料中心同步，提供即期硬體營收。",
        "高密度中性原子玻璃腔體封裝 (Glass Cell Packaging)：核心物理腔體體積小、真空維持度高，具備邁向數千顆中性原子陣列的擴展性。",
        "SuperstaQ 軟體編譯器：能將量子線路針對不同底層硬體脈衝層級最佳化，提升實質演算法執行深度 2 至 10 倍。"
      ],
      outlook: {
        rating: "中性原子與量子感測雙棲代表 (Listed Neutral-Atom & Sensing Leader)",
        bullCase: "2026 年 2 月完成超過 5.5 億美元募資上市，現金極為充沛；量子原子鐘與 RF 感測器不受容錯量子電腦時程限制，已獲歐美軍方大量採購。",
        bearCase: "在純量子運算邏輯量子位元展示上，面臨未上市同業 QuEra 與 Atom Computing 的激烈競爭。",
        catalysts2026_2027: [
          "Sqale 中性原子系統擴展至 100+ 邏輯量子位元",
          "美英澳 AUKUS 聯盟量子導航與原子鐘大規模部署合約"
        ]
      },
      news: [
        {
          date: "2026-02",
          title: "於 2026 年 2 月 17 日正式在紐約證交所掛牌交易 (NYSE: INFQ)，總募資逾 5.5 億美元",
          source: "NYSE / Infleqtion PR",
          impact: "新股上市"
        }
      ],
      papers: [
        {
          title: "SuperstaQ: Deep Optimization of Quantum Programs via Pulse-Level Compilation",
          journal: "IEEE International Conference on Quantum Computing and Engineering",
          year: "2024",
          url: "https://infleqtion.com",
          highlight: "透過脈衝級脈絡編譯大幅降低中性原子與超導系統之雙量子閘誤差。"
        }
      ]
    },
    {
      id: "qubt",
      ticker: "QUBT",
      exchange: "NASDAQ",
      name: "Quantum Computing Inc. (QCi)",
      category: "pure-compute",
      subCategories: ["室溫光量子", "薄膜鈮酸鋰 (TFLN) 晶圓代工", "量子感測與光學"],
      modality: "室溫光量子熵運算 (Photonic Entropy Quantum Computing) + TFLN 光子積體電路",
      price: 6.37,
      marketCap: "$1.50B",
      marketCapNum: 1500,
      revenue: "$22.5M (FY2026 財測中位數 / Q2'26 單季 $5.6M)",
      revenueNum: 22.5,
      revenueYoY: "+8,900% (收購整併與晶圓廠投產帶動)",
      revenueYoYNum: 850,
      bookingsOrBacklog: "70%–80% 合約來自美國聯邦與國防機構 (NASA Goddard, NASA Langley 等)",
      cashReserves: "$1,300M (~$1.3B)",
      cashNum: 1300,
      runway: "極度充裕至 2030+ (現金接近總市值 85%)",
      flagshipProduct: "Dirac-3 室溫熵量子最佳化機 / 亞利桑那 Tempe 6吋 TFLN 光子晶圓廠",
      physicalQubits: 0,
      logicalQubits: "採用連續光脈衝高維度量子態 (QuDit / Entropy States)，支援數千變數 QUBO",
      twoQubitFidelity: "N/A (非閘模型，採室溫非線性光學耗散態收斂)",
      fidelityNum: 95.0,
      gateSpeed: "室溫光速傳播 (無需極低溫稀釋製冷機)",
      errorCorrection: "能量耗散自然收斂至基態 (Dissipative Ground-State Convergence)",
      pqcOrCryptoRole: "旗下 NuCrypt 與 TFLN 調變器提供量子光通訊、QKD 收發模組與糾纏光源",
      summary: "主打室溫運作的「熵量子電腦 (Dirac-3)」與全美首座商用 6 吋薄膜鈮酸鋰 (TFLN) 光子晶圓廠（目前股價 ~$6.37、市值 ~$1.50B，而帳上現金與投資高達 ~$1.3B）。透過亞利桑那州 Tempe Fab 1 投產及併購 Luminar Semiconductor 與 NHanced Semiconductors，轉型為美國本土光量子與高速光通訊晶片製造商。",
      technicalAdvantages: [
        "全美首座商用 150mm (6吋) 薄膜鈮酸鋰 (TFLN) 晶圓代工廠 (Tempe, Arizona)：TFLN 具備極佳電光係數與超低光損耗，是光量子晶片與 AI 資料中心 1.6T/3.2T 光收發模組的核心材料。",
        "Dirac-3 室溫運作免冷凍：無需昂貴的液態氦稀釋製冷機，功耗僅如一般伺服器，即可安裝於標準電信機房或國防移動載具。",
        "NASA 實戰驗證：連續獲得 NASA 戈達德 (Goddard) 合成孔徑雷達 (InSAR) 相位展開合約，以及 NASA 蘭利 (Langley) 衛星光達 (LiDAR) 日光雜訊濾除合約。",
        "先進 2.5D/3D 光電共封裝 (CPO)：收購 NHanced Semiconductors 強化美國國防本土化光電異質整合封裝能力。"
      ],
      outlook: {
        rating: "高現金含量光子晶圓代工股 (Deep Cash-Backed Photonic Foundry)",
        bullCase: "總市值約 15 億美元中就有高達 13 億美元是現金與短期投資，下檔具備強大淨現金支撐；TFLN 光子晶圓廠同時受惠量子與 AI 光通訊需求。",
        bearCase: "Dirac-3 屬於專用型光學最佳化機而非通用容錯量子電腦；需持續觀察併購整合後的有機獲利能力。",
        catalysts2026_2027: [
          "Tempe TFLN Fab 1 產能放量與 Fab 2 先進光電封裝擴產",
          "美國國防部與情報機構光達感測與安全光通訊續約"
        ]
      },
      news: [
        {
          date: "2026-08",
          title: "Q2 2026 營收躍升至 560 萬美元，現金與投資部位達 13 億美元，全年營收指引 2,000–2,500 萬美元",
          source: "QCi Q2 2026 Earnings",
          impact: "營收轉折"
        },
        {
          date: "2025-05",
          title: "位於亞利桑那州 Tempe 的全美首座商用薄膜鈮酸鋰 (TFLN) 光子晶片廠 Fab 1 正式落成啟用",
          source: "Company PR",
          impact: "產能落地"
        }
      ],
      papers: [
        {
          title: "Entropy Quantum Computing for Large-Scale Combinatorial Optimization and InSAR Phase Unwrapping",
          journal: "QCi Technical Whitepaper & NASA Goddard Benchmark",
          year: "2025",
          url: "https://quantumcomputinginc.com",
          highlight: "展示室溫耗散光學網路處理合成孔徑雷達干涉影像重構之效能優勢。"
        }
      ]
    },
    {
      id: "psql",
      ticker: "PSQL",
      exchange: "NASDAQ",
      name: "Pasqal Holding SA",
      category: "pure-compute",
      subCategories: ["中性原子量子電腦", "諾貝爾獎團隊", "2026/08 上市"],
      modality: "中性原子 (Neutral Atom - 銣/鍶光學鑷子陣列)",
      price: 5.82,
      marketCap: "$1.20B",
      marketCapNum: 1200,
      revenue: "$26.5M (歐洲 HPC 超算中心整機交付與雲端服務)",
      revenueNum: 26.5,
      revenueYoY: "+110%",
      revenueYoYNum: 110,
      bookingsOrBacklog: "法國 GENCI、德國 Jülich 超算中心、沙烏地 Aramco 與南韓企業合約",
      cashReserves: "$360M+",
      cashNum: 360,
      runway: "至 2029+",
      flagshipProduct: "Orion / Fresnel 1,000+ Qubit 中性原子量子處理器",
      physicalQubits: 1110,
      logicalQubits: "開發中 (目標 2026–2027 實現 100+ 邏輯量子位元)",
      twoQubitFidelity: "99.5%",
      fidelityNum: 99.5,
      gateSpeed: "~300 ns",
      errorCorrection: "2D/3D 動態重構原子陣列 qLDPC 與表面碼",
      pqcOrCryptoRole: "專注於量子模擬、能源電網最佳化與金融風險定價",
      summary: "由 2022 年諾貝爾物理學獎得主 Alain Aspect 共同創立的歐洲中性原子量子電腦龍頭，於 **2026 年 8 月 28 日透過與 Bleichroeder Acquisition Corp II 合併在 Nasdaq 掛牌上市（代號 PSQL，目前股價 ~$5.82、市值 ~$1.20B）**。已突破 1,000 顆實體量子位元，並向歐洲多個國家級超級電腦中心交付實體主機。",
      technicalAdvantages: [
        "諾貝爾物理學獎基因：共同創辦人 Alain Aspect 為量子糾纏實驗先驅，技術團隊深耕雷射冷卻與里德堡原子操控逾 20 年。",
        "突破千顆量子位元規模：單一真空腔體內已展示超過 1,000 顆中性原子陣列，同時支援類比量子模擬 (Analog Mode) 與數位邏輯閘模式 (Digital Gate Mode)。",
        "歐洲主權量子首選供應商：在法國 Massy 與加拿大 Sherbrooke 設有量產工廠，已交付多台 HPC 整合主機。"
      ],
      outlook: {
        rating: "歐洲主權量子與中性原子代表 (European Sovereign Neutral-Atom Leader)",
        bullCase: "直接受惠歐盟與中東主權基金對非美系依賴之量子基礎設施採購；上市後帳上現金逾 3.6 億美元，市值回調至 12 億美元具備高性價比。",
        bearCase: "在美國本土國防訂單競爭上不如 IonQ、Quantinuum 或 Infleqtion 具地緣優勢。",
        catalysts2026_2027: [
          "10,000 顆實體量子位元藍圖推進與數位容錯邏輯閘升級",
          "沙烏地阿拉伯 Aramco 與歐洲能源巨頭工業部署擴展"
        ]
      },
      news: [
        {
          date: "2026-08",
          title: "於 2026 年 8 月 28 日完成與 Bleichroeder Acquisition Corp II 合併並於 Nasdaq 掛牌上市 (Ticker: PSQL)",
          source: "Nasdaq / Pasqal PR",
          impact: "新股上市"
        }
      ],
      papers: [
        {
          title: "Quantum computing with neutral atoms: Passing the 1,000-qubit milestone",
          journal: "Pasqal / Institut d'Optique Technical Report",
          year: "2024",
          url: "https://www.pasqal.com",
          highlight: "於單一光學晶格系統中成功捕獲並操控超過 1,000 顆中性原子。"
        }
      ]
    },
    {
      id: "xndu",
      ticker: "XNDU",
      exchange: "NASDAQ / TSX",
      name: "Xanadu Quantum Technologies Ltd.",
      category: "pure-compute",
      subCategories: ["光量子電腦", "PennyLane 量子機器學習軟體", "2026/03 上市"],
      modality: "連續變數光量子 (Photonic Squeeze-State / GKP Qubits - 模組化光纖網路)",
      price: 3.06,
      marketCap: "$925M",
      marketCapNum: 925,
      revenue: "$21.0M (雲端算力、政府專案與企業 QML 合作)",
      revenueNum: 21.0,
      revenueYoY: "+92%",
      revenueYoYNum: 92,
      bookingsOrBacklog: "加拿大政府、德國 DLR、汽車與製藥大廠 (Porsche, 電池材料模擬) 合約",
      cashReserves: "$460M",
      cashNum: 460,
      runway: "至 2029+",
      flagshipProduct: "Aurora 模組化室溫機櫃光量子電腦 / PennyLane 開源量子機器學習框架",
      physicalQubits: 84,
      logicalQubits: "GKP (Gottesman-Kitaev-Preskill) 玻色編碼抗光子損耗架構",
      twoQubitFidelity: "99.4% (光學分束與測量誘導邏輯閘)",
      fidelityNum: 99.4,
      gateSpeed: "MHz–GHz 高速光脈衝時脈",
      errorCorrection: "GKP Bosonic Code + 3D 簇態容錯光纖延遲迴路",
      pqcOrCryptoRole: "原生光纖網路介面可直接與量子通訊網路 (QKD) 無縫串接",
      summary: "於 **2026 年 3 月 27 日透過與 Crane Harbor Acquisition 合併在 Nasdaq 與多倫多證交所上市（代號 XNDU，目前股價 ~$3.06、市值 ~$9.25 億美元）**。不僅於《Nature》發表全球首部可透過標準光纖模組化擴展的機櫃型光量子電腦「Aurora」，其開發的「PennyLane」更是全球量子機器學習 (QML) 領域市佔率最高的開源軟體框架。",
      technicalAdvantages: [
        "Aurora 模組化機櫃架構：除了光子偵測器需低溫外，核心運算晶片與光纖延遲線皆在室溫機櫃運作，可透過標準電信光纖串聯數千台伺服器機櫃。",
        "PennyLane 軟體生態系護城河：如同量子界的 PyTorch，支援微分量子編程，深度整合 NVIDIA cuQuantum、AWS Braket 與各大硬體後端。",
        "GKP 玻色容錯量子位元：在單一光學模式中編碼網格態，具備對抗光子損失的原生糾錯能力。"
      ],
      outlook: {
        rating: "光量子與 QML 軟體價值型標的 (Photonic & QML Software Value Play)",
        bullCase: "SPAC 上市後股價修正至 ~$3.06（市值約 $925M），但帳上現金高達 ~$460M（佔市值近半），同時握有 Aurora 硬體與 PennyLane 軟體霸權。",
        bearCase: "光學元件與晶片耦合損耗 (Optical Loss) 仍是達成高容錯門檻的最大工程挑戰。",
        catalysts2026_2027: [
          "Aurora 第二代低損耗氮化矽晶片升級",
          "PennyLane 與 NVIDIA CUDA-Q 企業級混合 AI 授權擴展"
        ]
      },
      news: [
        {
          date: "2026-03",
          title: "於 2026 年 3 月 27 日完成與 Crane Harbor Acquisition 合併，正式登陸 Nasdaq 與 TSX (Ticker: XNDU)",
          source: "Nasdaq / Xanadu PR",
          impact: "新股上市"
        },
        {
          date: "2025-01",
          title: "於《Nature》發表全球首部模組化、可透過光纖網路擴展之機櫃型光量子電腦 Aurora",
          source: "Nature",
          impact: "技術突破"
        }
      ],
      papers: [
        {
          title: "Scaling and networking a modular photonic quantum computer (Aurora)",
          journal: "Nature (Jan 2025)",
          year: "2025",
          url: "https://www.nature.com/articles/s41586-024-08406-9",
          highlight: "展示由 4 個獨立伺服器機櫃、35 顆光子晶片與 13 公里光纖組成的模組化光量子電腦。"
        }
      ]
    },
    {
      id: "hq",
      ticker: "HQ",
      exchange: "NASDAQ",
      name: "Horizon Quantum Holdings",
      category: "pure-compute",
      subCategories: ["量子編譯與自動化開發軟體", "跨硬體作業系統", "2026/03 上市"],
      modality: "硬體無關量子軟體編譯平台 (Triple Alpha IDE + 自建多硬體整合測試機房)",
      price: 13.20,
      marketCap: "$677M",
      marketCapNum: 677,
      revenue: "$8.5M (企業軟體授權與新加坡/歐洲主權研發合約)",
      revenueNum: 8.5,
      revenueYoY: "+140%",
      revenueYoYNum: 140,
      bookingsOrBacklog: "新加坡國家量子辦公室 (NQO)、製藥與金融衍生品蒙地卡羅加速合約",
      cashReserves: "$145M",
      cashNum: 145,
      runway: "至 2029 (輕資產高毛利軟體為主)",
      flagshipProduct: "Triple Alpha (將傳統 C++/Python 程式碼自動轉譯為量子演算法之開發環境)",
      physicalQubits: 0,
      logicalQubits: "支援跨超導 (Rigetti/IQM)、離子阱與中性原子之自動邏輯閘合成與錯誤緩解",
      twoQubitFidelity: "N/A (純軟體編譯與多硬體整合層)",
      fidelityNum: 98.5,
      gateSpeed: "自動化量子線路深度壓縮最高達 70%",
      errorCorrection: "內建自動化量子糾錯編碼合成器",
      pqcOrCryptoRole: "協助金融機構與國防單位模擬 Shor/Grover 演算法對既有加密協定之實質威脅",
      summary: "由知名量子物理學家 Joe Fitzsimons 創立於新加坡的量子軟體先驅，於 **2026 年 3 月 20 日與 dMY Squared Technology Group 完成合併在 Nasdaq 掛牌上市（代號 HQ，目前股價 ~$13.20、市值 ~$6.77 億美元）**。核心產品「Triple Alpha」能讓不懂量子力學的一般軟體工程師直接將古典程式碼自動編譯為量子演算法。",
      technicalAdvantages: [
        "自動演算法合成 (Automated Algorithm Synthesis)：解決全球量子演算法工程師極度短缺的痛點，自動辨識古典程式中的矩陣與迴圈並替換為量子加速子程序。",
        "新加坡自建混合硬體實驗室：直接整合 Rigetti、Maybell 與 Quantum Machines 硬體進行底層韌體最佳化。"
      ],
      outlook: {
        rating: "稀缺純量子軟體上市公司 (Pure-Play Quantum Software)",
        bullCase: "美股極少數純量子軟體與編譯器標的，上市後股價表現強勁穩健（~$13.20，高於 SPAC $10 發行價）。",
        bearCase: "大型企業全面採購量子軟體授權仍需等待容錯硬體普及。",
        catalysts2026_2027: [
          "Triple Alpha 商業版正式向全球雲端開發者開放訂閱",
          "亞太與中東主權量子雲平台軟體授權大單"
        ]
      },
      news: [
        {
          date: "2026-03",
          title: "於 2026 年 3 月 20 日完成與 dMY Squared 合併並正式在 Nasdaq 掛牌交易 (Ticker: HQ)",
          source: "Nasdaq / Horizon Quantum PR",
          impact: "新股上市"
        }
      ],
      papers: [
        {
          title: "Automated Quantum Subroutine Synthesis from Classical High-Level Code (Triple Alpha)",
          journal: "Horizon Quantum Technical Report",
          year: "2025",
          url: "https://www.horizonquantum.com",
          highlight: "將古典數值分析程式碼自動映射為具備量子振幅估計加速之量子邏輯線路。"
        }
      ]
    },

    // ==========================================================================
    // QUANTUM CRYPTOGRAPHY & POST-QUANTUM CRYPTOGRAPHY (PQC) PURE-PLAYS
    // ==========================================================================
    {
      id: "laes",
      ticker: "LAES",
      exchange: "NASDAQ",
      name: "SEALSQ Corp",
      category: "pure-pqc",
      subCategories: ["後量子密碼晶片 (PQC)", "硬體信任根 (RoT)", "RISC-V 安全微控制器"],
      modality: "後量子密碼半導體 (NIST FIPS 203 ML-KEM / FIPS 204 ML-DSA 硬體加速晶片)",
      price: 1.95,
      marketCap: "$440M",
      marketCapNum: 440,
      revenue: "$22.3M (2026 年化 / H1'26 營收 $11.15M, +131% YoY)",
      revenueNum: 22.3,
      revenueYoY: "+131% (H1'26 YoY)",
      revenueYoYNum: 131,
      bookingsOrBacklog: "至 2029 年累計簽約與設計導入管道 (Pipeline) 超過 $225M",
      cashReserves: "$490M (~$485M–$495M)",
      cashNum: 490,
      runway: "極度充裕 (帳上現金 ~$490M 甚至高於目前總市值 ~$440M！)",
      flagshipProduct: "QS7001 Quantum Shield (RISC-V PQC 安全晶片) / QVault TPM / Quantum Highway",
      physicalQubits: 0,
      logicalQubits: "N/A (內嵌格基密碼 Lattice-based ML-KEM / ML-DSA 硬體協同處理器)",
      twoQubitFidelity: "N/A (符合 Common Criteria EAL5+ 與 FIPS 140-3 Level 3 安全認證)",
      fidelityNum: 99.9,
      gateSpeed: "硬體加速簽章與金鑰封裝較純軟體快 10–50 倍",
      errorCorrection: "抗側信道攻擊 (Side-Channel Attack Protection) 與抗故障注入設計",
      pqcOrCryptoRole: "純度最高的美股後量子密碼 (PQC) 半導體設計商，提供智慧電錶、國防無人機、車聯網與醫療設備防量子破解安全晶片",
      summary: "瑞士資安集團 WISeKey 分拆上市的後量子密碼 (PQC) 半導體純股。旗下 QS7001 與 QVault TPM 直接在 RISC-V 晶片硬體層實作 NIST FIPS 203 (ML-KEM) 與 FIPS 204 (ML-DSA) 標準。2026 上半年營收年增 131%，且目前市值約 $4.4 億美元，低於其帳上近 $4.9 億美元的現金儲備（負企業價值 Negative EV）。",
      technicalAdvantages: [
        "硬體級 NIST PQC 加速 (QS7001)：傳統物聯網與邊緣晶片記憶體不足以負荷格基密碼 (Lattice PQC) 龐大的公鑰與簽章運算，QS7001 透過專用硬體加速器完美解決功耗與延遲問題。",
        "SEALSQ–WISeKey Quantum Highway™：串聯瑞士、法國、西班牙與印度的主權半導體與後量子 PKI 安全基礎設施。",
        "超過 2.25 億美元長約管道：隨著歐盟 Cyber Resilience Act 與美國 CNSA 2.0 強制要求硬體具備後量子韌性，客戶進入大規模換機潮。"
      ],
      outlook: {
        rating: "深度價值後量子密碼晶片純股 (Deep-Value Pure-Play PQC Chip Stock)",
        bullCase: "市值（~$440M）低於帳上現金（~$490M），營收正以 131% 速度成長且握有 $225M 訂單管道，兼具極高安全邊際與 PQC 硬體換機潮爆發力。",
        bearCase: "歷史增資導致流通股數增加，壓抑短期每股股價表現；在標準安全元件市場需與 NXP、Infineon 競爭。",
        catalysts2026_2027: [
          "QS7001 晶片大規模量產出貨予歐美智慧電網與國防客戶",
          "西班牙與印度主權後量子半導體封測合資廠落地"
        ]
      },
      news: [
        {
          date: "2026-07",
          title: "公布 H1 2026 營收達 1,115 萬美元 (年增 131%)，現金儲備達 4.9 億美元，多年期訂單管道突破 2.25 億美元",
          source: "SEALSQ H1 2026 Financial Update",
          impact: "財報強勁"
        },
        {
          date: "2025-11",
          title: "正式推出內建 NIST ML-KEM 與 ML-DSA 硬體加速之 QS7001 抗量子安全晶片",
          source: "Company PR",
          impact: "核心產品"
        }
      ],
      papers: [
        {
          title: "NIST FIPS 203 (ML-KEM) & FIPS 204 (ML-DSA) Hardware Implementation on RISC-V Secure Elements",
          journal: "SEALSQ QUASARS Architecture Whitepaper",
          year: "2025",
          url: "https://www.sealsq.com",
          highlight: "針對硬體抗側信道能量分析攻擊 (SPA/DPA) 之晶格密碼加速架構。"
        }
      ]
    },
    {
      id: "arqq",
      ticker: "ARQQ",
      exchange: "NASDAQ",
      name: "Arqit Quantum Inc.",
      category: "pure-pqc",
      subCategories: ["對稱金鑰協議軟體", "量子加密 SaaS", "電信與國防安全"],
      modality: "對稱金鑰協議軟體 (Symmetric Key Agreement - QuantumCloud / NetworkSecure)",
      price: 14.02,
      marketCap: "$270M",
      marketCapNum: 270,
      revenue: "$1.0M (FY2026 初步營收)",
      revenueNum: 1.0,
      revenueYoY: "+89%",
      revenueYoYNum: 89,
      bookingsOrBacklog: "Vodafone / Tomorrow Street、Intel、Babcock 與北約 (NATO) 網路安全試點合約",
      cashReserves: "$51.0M",
      cashNum: 51.0,
      runway: "約 18–24 個月 (已大幅削減衛星資本支出)",
      flagshipProduct: "QuantumCloud / NetworkSecure 動態對稱金鑰產生平台",
      physicalQubits: 0,
      logicalQubits: "N/A (基於 AES-256 動態對稱金鑰協商，免疫 Shor 演算法並抵禦 Grover 演算法)",
      twoQubitFidelity: "N/A (符合 NSA CSfC 對稱金鑰預共享標準 RFC 8784)",
      fidelityNum: 95.0,
      gateSpeed: "毫秒級軟體端點金鑰生成 (無公鑰基礎設施延遲)",
      errorCorrection: "零信任多點認證與一次性動態混洗金鑰",
      pqcOrCryptoRole: "放棄昂貴的低軌量子衛星計畫後，全面轉型為純軟體 SaaS 對稱金鑰協議供應商，協助電信商與 VPN 立即升級抗量子加密",
      summary: "英國量子加密軟體公司（目前股價 ~$14.02、市值 ~$2.7 億美元）。放棄了早期高資本支出的低軌量子衛星計畫，轉型為純軟體 SaaS 模式（QuantumCloud）。其技術能讓終端設備在標準網際網路上動態生成高強度對稱金鑰 (AES-256)，無需依賴高運算負載的公鑰密碼或專用光纖 QKD 硬體。",
      technicalAdvantages: [
        "輕量級對稱金鑰協議：Grover 演算法對對稱加密僅能提供平方根加速，因此 256-bit 對稱金鑰在量子時代依然絕對安全；Arqit 解決了對稱金鑰在傳統網路上難以安全分發的痛點。",
        "相容現有防火牆與 VPN 標準 (RFC 8784)：已與 Fortinet、Juniper、Intel IPsec 整合，企業不需汰換路由器即可啟用抗量子 VPN。",
        "純軟體高毛利轉型：砍除衛星製造與發射開支後，營運費用大幅下降。"
      ],
      outlook: {
        rating: "高波動轉機型軟體股 (Turnaround SaaS Play)",
        bullCase: "市值小、股權集中，一旦獲得大型電信商或英國/北約國防部全面部署合約，軟體授權營收具備極大彈性。",
        bearCase: "FY2026 營收僅約 100 萬美元，商業化變現速度較慢；多數企業目前優先採用免費開源的 NIST ML-KEM 公鑰演算法。",
        catalysts2026_2027: [
          "Vodafone 企業安全網路服務商業化分成放量",
          "中東與英國國防部主權加密網路採購案"
        ]
      },
      news: [
        {
          date: "2026-10",
          title: "公布 FY2026 初步營收成長近倍至約 100 萬美元，帳上現金維持 5,100 萬美元",
          source: "Arqit Trading Update",
          impact: "營運更新"
        }
      ],
      papers: [
        {
          title: "Dynamic Symmetric Key Agreement for Post-Quantum Network Security (RFC 8784 Integration)",
          journal: "Arqit Cryptography Whitepaper",
          year: "2024",
          url: "https://arqit.uk",
          highlight: "證明透過無狀態中繼生成端對端對稱金鑰之形式化安全模型。"
        }
      ]
    },
    {
      id: "wkey",
      ticker: "WQEY",
      exchange: "NASDAQ (2026/10/05 由 WKEY 變更為 WQEY)",
      name: "WISeQey Corp. (原 WISeKey International / WKEY)",
      category: "pure-pqc",
      subCategories: ["太空量子信任根衛星", "後量子物聯網生態", "SEALSQ 控股母公司"],
      modality: "低軌奈米衛星後量子金鑰分發 (WISeSat.Space) + PQC 硬體生態",
      price: 9.15,
      marketCap: "$68M",
      marketCapNum: 68,
      revenue: "$22.8M (2026 年化 / H1'26 合併營收 $11.4M, +116% YoY)",
      revenueYoY: "+116%",
      revenueYoYNum: 116,
      revenueNum: 22.8,
      bookingsOrBacklog: "透過控股子公司 SEALSQ 與 WISeSat 衛星物聯網服務共享龐大訂單池",
      cashReserves: "$500M+ (合併報表含子公司 SEALSQ 現金部位)",
      cashNum: 500,
      runway: "極度充裕",
      flagshipProduct: "WISeSat 低軌抗量子加密衛星星座 / Quantum Space Orbital Cloud (QSOC)",
      physicalQubits: 0,
      logicalQubits: "N/A (太空硬體信任根 Quantum RootKey + NIST PQC)",
      twoQubitFidelity: "N/A",
      fidelityNum: 98.0,
      gateSpeed: "低軌衛星直連終端 (Direct-to-Device PQC IoT)",
      errorCorrection: "太空隔離抗實體篡改硬體安全模組 (HSM)",
      pqcOrCryptoRole: "結合 SpaceX 發射之低軌奈米衛星與 SEALSQ 抗量子晶片，打造太空定錨之「Quantum RootKey」全球安全通訊網",
      summary: "瑞士網路安全與物聯網控股母公司（持有 SEALSQ 多數控制權）。⚠️【Firstrade 下單重要提醒】公司於 2026 年 10 月 1 日完成自瑞士遷冊至英屬維京群島 (BVI) 並更名為 WISeQey Corp.，原美國存託憑證代號 WKEY 已於 2026 年 10 月 5 日終止交易（每 1 股舊 WKEY ADS 換發 0.5 股新普通股），在 Firstrade 輸入舊代號 WKEY 無法下單，必須改輸入新代號 WQEY！",
      technicalAdvantages: [
        "太空級硬體信任根 (Quantum Space Orbital Cloud)：將根憑證與金鑰儲存在外太空低軌衛星中，免受地面資料中心物理入侵或海底光纜竊聽威脅。",
        "顯著的母子控股折價：WQEY (原 WKEY) 本身市值僅約 $6,800 萬美元，卻控股市值近 $4 億美元的 SEALSQ (LAES)，同時擁有 WISeSat 太空業務與 SEALCOIN 物聯網微支付生態。"
      ],
      outlook: {
        rating: "太空後量子通訊與深度控股折價股 (Space PQC & Deep Holding Discount)",
        bullCase: "母公司市值遠低於其持有的 SEALSQ 股權價值與合併現金部位；低軌衛星抗量子物聯網題材具備高度稀缺性。",
        bearCase: "集團控股架構較複雜，成交量主要集中在子公司 LAES；剛完成 WKEY → WQEY 代號轉換，短期需留意流動性。",
        catalysts2026_2027: [
          "WISeSat 新一批次後量子衛星搭乘 SpaceX Transporter 發射升空",
          "2026/10/05 完成 WISeQey (NASDAQ: WQEY) 遷冊與普通股直接掛牌，消除過往 ADS 託管費與結構折價"
        ]
      },
      news: [
        {
          date: "2026-10",
          title: "完成 BVI 遷冊重組為 WISeQey Corp.，自 2026 年 10 月 5 日起於 Nasdaq 正式啟用新交易代號 WQEY（原 WKEY 終止交易）",
          source: "Nasdaq Trader & Company PR",
          impact: "代號變更"
        },
        {
          date: "2026-08",
          title: "H1 2026 集團合併營收達 1,140 萬美元 (年增 116%)，加速部署 Quantum Space Orbital Cloud",
          source: "WISeKey H1 2026 Report",
          impact: "財報成長"
        }
      ],
      papers: [
        {
          title: "Space-Anchored Post-Quantum Root of Trust for Global IoT Infrastructures",
          journal: "WISeSat.Space Technical Brief",
          year: "2025",
          url: "https://www.wisekey.com",
          highlight: "結合低軌 CubeSat 與 QS7001 PQC 晶片之天地一體化金鑰管理架構。"
        }
      ]
    },

    // ==========================================================================
    // BIG TECH QUANTUM & PQC TITANS (科技巨頭與企業資安 PQC 領頭羊)
    // ==========================================================================
    {
      id: "googl",
      ticker: "GOOGL",
      exchange: "NASDAQ",
      name: "Alphabet Inc. (Google Quantum AI)",
      category: "big-tech",
      subCategories: ["超導容錯里程碑", "表面碼突破門檻", "科技巨頭"],
      modality: "超導量子位元 (Superconducting Transmon - Willow 105Q 平面格點)",
      price: 212.50,
      marketCap: "$2,620B",
      marketCapNum: 2620000,
      revenue: "$365B+ (集團年營收 / 年度研發支出 >$48B)",
      revenueNum: 365000,
      revenueYoY: "+14%",
      revenueYoYNum: 14,
      bookingsOrBacklog: "Google Cloud 與全球頂尖科研機構合作",
      cashReserves: "$98,000M+",
      cashNum: 98000,
      runway: "無限 (自由現金流巨獸)",
      flagshipProduct: "Willow 105-Qubit 超導處理器 / Cirq / Chrome & Cloud 預設 ML-KEM PQC",
      physicalQubits: 105,
      logicalQubits: "首次實證「低於表面碼糾錯門檻 (Below-Threshold Surface Code)」，碼距 d=3→5→7 錯誤率指數減半",
      twoQubitFidelity: "99.9%+ (同時雙量子位元閘錯誤率 <0.1%)",
      fidelityNum: 99.9,
      gateSpeed: "~25 ns (T1 相干時間提升 5 倍至 ~100 µs)",
      errorCorrection: "Surface Code (d=7 實現每增加一階碼距，邏輯錯誤率降低 2.14 倍，邏輯位元壽命超過實體位元 2.4 倍)",
      pqcOrCryptoRole: "Chrome 瀏覽器與 Google Cloud 全球率先預設啟用 X25519MLKEM768 後量子加密，保護數十億用戶免受 HNDL 攻擊",
      summary: "全球量子糾錯 (QEC) 領域的絕對領頭羊。105 量子位元「Willow」晶片登上《Nature》，人類史上首次實驗證明當表面碼網格擴大（3x3 到 5x5 到 7x7）時，邏輯錯誤率呈現指數級下降，正式跨越困擾物理學界 30 年的容錯門檻。",
      technicalAdvantages: [
        "跨越 30 年容錯量子糾錯聖杯 (Below-Threshold QEC)：證明增加更多實體量子位元不再增加雜訊，反而能指數級壓低錯誤率（Λ = 2.14）。",
        "驚人的 RCS 算力基準：Willow 在 5 分鐘內完成的隨機線路取樣運算，Frontier 超級電腦需要 10²⁵ 年（超過宇宙年齡百億倍）才能完成。",
        "全棧 PQC 部署先驅：Google Chrome 與內部 Borg 通訊已全面升級 NIST ML-KEM，並戰略投資中性原子新創 QuEra。"
      ],
      outlook: {
        rating: "全球量子容錯技術標竿 (Global Fault-Tolerance Benchmark)",
        bullCase: "技術實力全球第一，擁有無限研發資金與自研 TPU/AI 協同解碼能力，是穩健投資人參與量子革命的最安全核心持股。",
        bearCase: "量子部門佔 Alphabet 整體營收比重極低，股價主要由搜尋廣告、雲端與 Gemini AI 驅動。",
        catalysts2026_2027: [
          "展示具備容錯邏輯量子閘運算 (Logical Gate Operations) 之 Generation-5 晶片",
          "邁向 1,000 顆實體量子位元單一高保真模組里程碑"
        ]
      },
      news: [
        {
          date: "2025-02",
          title: "Google Quantum AI 戰略領投中性原子獨角獸 QuEra 2.3 億美元融資，雙軌佈局超導與中性原子",
          source: "Reuters / Google",
          impact: "戰略投資"
        },
        {
          date: "2024-12",
          title: "發表 105 量子位元 Willow 晶片並刊登於《Nature》，首次實現低於表面碼門檻之指數級量子糾錯",
          source: "Nature / Google Blog",
          impact: "歷史性突破"
        }
      ],
      papers: [
        {
          title: "Quantum error correction below the surface code threshold",
          journal: "Nature 636, 308–315 (Dec 9, 2024)",
          year: "2024",
          url: "https://www.nature.com/articles/s41586-024-08449-y",
          highlight: "量子運算史上最重要論文之一：於 Willow 晶片實證碼距由 3 擴至 7 時，邏輯錯誤率每次減半。"
        }
      ]
    },
    {
      id: "ibm",
      ticker: "IBM",
      exchange: "NYSE",
      name: "IBM Corporation (IBM Quantum & Quantum Safe)",
      category: "big-tech",
      subCategories: ["超導量子系統", "NIST PQC 標準共同發明人", "Qiskit 軟體生態"],
      modality: "超導量子位元 (Heron R2/R3 156Q & Nighthawk R2 方形格點 + Quantum System Two)",
      price: 235.40,
      marketCap: "$218B",
      marketCapNum: 218000,
      revenue: "$64.5B (集團營收 / 累積量子簽約金額突破 $1B+)",
      revenueNum: 64500,
      revenueYoY: "+6%",
      revenueYoYNum: 6,
      bookingsOrBacklog: "全球逾 250 家企業、銀行、國防與超算中心加入 IBM Quantum Network",
      cashReserves: "$14,800M",
      cashNum: 14800,
      runway: "無限 (高股息藍籌巨頭)",
      flagshipProduct: "Quantum System Two / Heron R3 (156Q) & Nighthawk R2 / Qiskit 1.x / IBM Quantum Safe",
      physicalQubits: 468,
      logicalQubits: "採用高密度雙變數自行車碼 (Bivariate Bicycle Gross Codes, 144 實體 → 12 邏輯位元)，2029 Starling 目標 200 邏輯位元",
      twoQubitFidelity: "99.8% (Heron R2/R3 錯誤率 ~0.1–0.2%)",
      fidelityNum: 99.8,
      gateSpeed: "~50 ns (Nighthawk R2 支援每秒 >100,000 線路吞吐量)",
      errorCorrection: "qLDPC Gross Code (比傳統表面碼節省 90% 實體量子位元開銷)",
      pqcOrCryptoRole: "全球後量子密碼標準之王：NIST 四大正式標準中，有 3 項（FIPS 203 ML-KEM、FIPS 204 ML-DSA、FIPS 206 FN-DSA）由 IBM Research 主導共同發明！",
      summary: "全球商業化最完整、生態系最龐大的量子電腦與後量子密碼雙料巨頭。不僅開源軟體 Qiskit 是全球量子開發者的絕對標準，NIST 公布的後量子密碼標準更有四分之三出自 IBM 實驗室，並已內建於全球金融業核心 IBM z16/z17 大型主機中。",
      technicalAdvantages: [
        "NIST PQC 標準制定者：主導開發 CRYSTALS-Kyber (FIPS 203)、CRYSTALS-Dilithium (FIPS 204) 與 Falcon (FIPS 206)，直接收割全球銀行與政府「Quantum Safe」轉型顧問與軟體大單。",
        "qLDPC Gross Code 重大理論突破 (《Nature》)：僅需 288 顆實體量子位元即可保護 12 顆邏輯量子位元，比傳統表面碼減少近 10 倍硬體成本。",
        "Nighthawk R2 方形格點與快速重置：支援每秒超過 10 萬次線路執行（比 Heron 快 25 倍），可運行 5,000 至 15,000 閘深度之實用量子線路。",
        "Quantum System Two 全球部署：已於美國紐約、德國、日本神戶（與 RIKEN 富岳超算連接）、西班牙完成模組化主機裝機。"
      ],
      outlook: {
        rating: "企業級量子運算與 PQC 轉型首選藍籌 (Enterprise Quantum & PQC King)",
        bullCase: "唯一同時在「量子硬體部署」、「Qiskit 軟體標準」與「NIST PQC 金融主機資安」三大領域皆具壟斷級地位的巨頭，累積量子相關簽約已破 10 億美元。",
        bearCase: "大型藍籌股股價爆發力不如小型純量子股。",
        catalysts2026_2027: [
          "Flamingo 多晶片量子互連與 Kookaburra 處理器發布",
          "全球金融業因應歐美法規採購 IBM Quantum Safe Remediator 軟體潮"
        ]
      },
      news: [
        {
          date: "2026-06",
          title: "發布 Nighthawk R2 處理器架構，引入高速耗散重置技術，線路吞吐量提升 25 倍達每秒 10 萬次以上",
          source: "IBM Quantum Blog",
          impact: "硬體升級"
        },
        {
          date: "2024-08",
          title: "NIST 正式頒布首批三項後量子密碼標準 (FIPS 203/204/205)，其中兩項核心演算法由 IBM 共同發明",
          source: "NIST / IBM",
          impact: "標準確立"
        }
      ],
      papers: [
        {
          title: "High-threshold and low-overhead fault-tolerant quantum memory (Gross Codes)",
          journal: "Nature 627, 778–782 (March 2024)",
          year: "2024",
          url: "https://www.nature.com/articles/s41586-024-07107-7",
          highlight: "提出雙變數自行車 qLDPC 碼 (Gross Code)，以 1/10 的實體量子位元數量達成與表面碼相當之糾錯能力。"
        }
      ]
    },
    {
      id: "msft",
      ticker: "MSFT",
      exchange: "NASDAQ",
      name: "Microsoft Corp. (Azure Quantum)",
      category: "big-tech",
      subCategories: ["拓撲量子位元 (Majorana 1)", "Azure 邏輯量子位元虛擬化", "科技巨頭"],
      modality: "拓撲導體量子位元 (Topological Qubits - Majorana 1 砷化銦/鋁異質結構) + 合作夥伴邏輯位元虛擬化",
      price: 468.00,
      marketCap: "$3,480B",
      marketCapNum: 3480000,
      revenue: "$265B+ (集團年營收)",
      revenueNum: 265000,
      revenueYoY: "+15%",
      revenueYoYNum: 15,
      bookingsOrBacklog: "Azure Quantum Elements 結合 AI 與量子模擬服務全球化工與製藥巨頭 (Unilever, 3M 等)",
      cashReserves: "$78,000M+",
      cashNum: 78000,
      runway: "無限",
      flagshipProduct: "Majorana 1 拓撲量子晶片 (8Q 驗證，百萬位元藍圖) / Azure Quantum Qubit Virtualization",
      physicalQubits: 8,
      logicalQubits: "與 Atom Computing 創造 24 顆糾纏邏輯量子位元；與 Quantinuum (QNT) 創造 12 顆高保真邏輯量子位元 (錯誤率降 800 倍)",
      twoQubitFidelity: "99.9%+ (於 Quantinuum H2 邏輯位元層級)",
      fidelityNum: 99.9,
      gateSpeed: "微波干涉單發奇偶校驗讀取 (Single-shot parity measurement)",
      errorCorrection: "拓撲硬體級保護 (馬約拉納零能模 MZMs) + 4D 幾何/Floquet 糾錯碼",
      pqcOrCryptoRole: "Windows Server、Azure 雲端與 SymCrypt 密碼庫全面導入 NIST ML-KEM 與 ML-DSA 支援",
      summary: "採取「自研顛覆性拓撲量子晶片 + 雲端邏輯量子位元虛擬化軟體」雙線戰略。2025 年 2 月於《Nature》重磅發表歷時 17 年研發的首款拓撲核心處理器「Majorana 1」，並入選 DARPA 實用規模量子電腦最終驗證階段。",
      technicalAdvantages: [
        "Majorana 1 拓撲導體 (Topoconductor) 晶片：利用砷化銦 (InAs) 與鋁超導奈米線創造馬約拉納零能模 (MZM)，在物理硬體層天然抵抗位元翻轉與相位雜訊，目標在手掌大小晶片容納 100 萬顆量子位元。",
        "Qubit-Virtualization 邏輯位元軟體系統：可疊加在 Quantinuum（離子阱）或 Atom Computing（中性原子）硬體上，將錯誤率降低 800 倍，已成功創造並糾纏 24 顆邏輯量子位元。",
        "Azure Quantum Elements：將生成式 AI、高效能運算 (HPC) 與邏輯量子線路無縫整合，加速催化劑與電池材料研發。"
      ],
      outlook: {
        rating: "顛覆性拓撲路線與雲端平台巨頭 (Topological Moonshot & Cloud Platform)",
        bullCase: "若 Majorana 拓撲量子位元按 DARPA 時程放大成功，將直接跳過超導與離子阱繁瑣的糾錯開銷，一舉統治百萬量子位元時代。",
        bearCase: "學術界對馬約拉納零能模與安德烈夫束縛態 (Andreev bound states) 的區分仍有嚴格檢視，量產時間表較長。",
        catalysts2026_2027: [
          "與 Atom Computing 聯合推出首台商用 24+ 邏輯量子位元整機系統 (Magne / QuNorth)",
          "DARPA US2QC 計畫拓撲邏輯量子位元階段性審查結果"
        ]
      },
      news: [
        {
          date: "2025-02",
          title: "發表全球首款拓撲核心量子晶片 Majorana 1 並刊登《Nature》，獲選進入 DARPA 容錯量子電腦最終階段",
          source: "Nature / Microsoft",
          impact: "重大突破"
        },
        {
          date: "2024-11",
          title: "與 Atom Computing 合作創下 24 顆糾纏邏輯量子位元紀錄，並開放商用整機預訂",
          source: "Microsoft Azure Blog",
          impact: "商業化里程碑"
        }
      ],
      papers: [
        {
          title: "Interferometric single-shot parity measurement in InAs–Al hybrid devices (Majorana 1)",
          journal: "Nature (Feb 19, 2025)",
          year: "2025",
          url: "https://www.nature.com/articles/s41586-024-08445-2",
          highlight: "展示基於拓撲導體異質結構之微秒級單發奇偶校驗測量，奠定拓撲量子運算基礎。"
        }
      ]
    },
    {
      id: "nvda",
      ticker: "NVDA",
      exchange: "NASDAQ",
      name: "NVIDIA Corporation (CUDA-Q & NVAQC)",
      category: "big-tech",
      subCategories: ["QPU-GPU 混合超算", "即時量子糾錯解碼", "量子生態最大軍火商"],
      modality: "混合量子-古典加速平台 (CUDA-Q / cuQuantum / NVQLink 超低延遲互連)",
      price: 158.90,
      marketCap: "$3,880B",
      marketCapNum: 3880000,
      revenue: "$160B+ (集團年營收)",
      revenueNum: 160000,
      revenueYoY: "+75%",
      revenueYoYNum: 75,
      bookingsOrBacklog: "全球國家級量子超算中心 (日本 ABCI-Q、德國 Jülich、美國 NERSC) 全面採用 Grace Hopper/Blackwell + CUDA-Q",
      cashReserves: "$45,000M+",
      cashNum: 45000,
      runway: "無限",
      flagshipProduct: "CUDA-Q 混合編程平台 / cuQuantum 模擬 SDK / NVAQC (波士頓加速量子研究中心)",
      physicalQubits: 0,
      logicalQubits: "CUDA-Q Logical 提供跨硬體即時量子糾錯解碼 (Real-Time QEC Syndrome Decoding)",
      twoQubitFidelity: "N/A (賦能所有量子硬體廠商達成微秒級即時解碼)",
      fidelityNum: 99.9,
      gateSpeed: "NVQLink 支援亞微秒級 (<1 µs) QPU-GPU 雙向資料吞吐",
      errorCorrection: "AI 神經網路量子糾錯解碼器 (AI-powered QEC Decoders on Blackwell GPUs)",
      pqcOrCryptoRole: "BlueField-3/4 DPU 內建線速後量子加密 (PQC TLS/IPsec) 硬體卸載引擎，保護資料中心東西向流量",
      summary: "不自己製造 QPU，卻成為整個量子產業不可或缺的「鏟子與軍火商」。於波士頓成立 NVAQC（NVIDIA 加速量子研究中心），透過 CUDA-Q 與 NVQLink 將 Grace Blackwell 超算與 Quantinuum (QNT)、QuEra、IonQ、Rigetti 緊密耦合，因為任何容錯量子電腦都需要海量 GPU 在微秒內完成即時糾錯解碼！",
      technicalAdvantages: [
        "容錯量子糾錯的算力瓶頸守門人：量子位元在數十微秒內就會退相干，必須仰賴緊鄰 QPU 的 NVIDIA GPU 執行即時神經網路解碼 (Real-time Syndrome Decoding)。",
        "CUDA-Q 跨平台統一標準：支援超導、離子阱、中性原子與光量子，已成為全球國家級超算中心混合量子-古典運算的預設作業系統。",
        "NVentures 廣泛戰略投資：已直接入股 Quantinuum (QNT)、PsiQuantum、QuEra、Alice & Bob，無論哪種物理路線勝出，NVIDIA 皆是最大贏家。"
      ],
      outlook: {
        rating: "量子混合超算基礎設施壟斷者 (Hybrid Quantum-GPU Monopoly)",
        bullCase: "每賣出一台實用級量子電腦，背後都必須搭配數十至數百櫃 NVIDIA Grace Blackwell 超算來負責模擬、校準與即時糾錯解碼。",
        bearCase: "純量子營收佔 NVIDIA 龐大 AI 伺服器營收比例仍小。",
        catalysts2026_2027: [
          "NVIDIA Quantum Day 年度大會與 NVAQC 首波混合容錯解碼成果發表",
          "日本產業技術綜合研究所 (AIST) ABCI-Q 量子超算全面商轉"
        ]
      },
      news: [
        {
          date: "2025-03",
          title: "於 GTC 首屆 Quantum Day 宣布成立波士頓 NVAQC 加速量子研究中心，攜手 Quantinuum 與 QuEra",
          source: "NVIDIA GTC",
          impact: "生態里程碑"
        },
        {
          date: "2025-09",
          title: "旗下創投 NVentures 同步參與 Quantinuum 與 PsiQuantum 巨額融資",
          source: "Financial Times / NVIDIA",
          impact: "戰略投資"
        }
      ],
      papers: [
        {
          title: "Scalable Neural Network Decoders for Fault-Tolerant Quantum Error Correction with CUDA-Q",
          journal: "NVIDIA Research / IEEE Quantum",
          year: "2025",
          url: "https://developer.nvidia.com/cuda-q",
          highlight: "利用 Tensor Core 加速表面碼與 qLDPC 碼之即時解碼吞吐量。"
        }
      ]
    },
    {
      id: "amzn",
      ticker: "AMZN",
      exchange: "NASDAQ",
      name: "Amazon.com, Inc. (AWS Ocelot & Braket)",
      category: "big-tech",
      subCategories: ["玻色貓量子位元 (Ocelot)", "AWS Braket 量子雲", "科技巨頭"],
      modality: "超導玻色貓態量子位元 (Bosonic Cat Qubits - Ocelot 晶片)",
      price: 224.00,
      marketCap: "$2,360B",
      marketCapNum: 2360000,
      revenue: "$650B+ (集團年營收)",
      revenueNum: 650000,
      revenueYoY: "+11%",
      revenueYoYNum: 11,
      bookingsOrBacklog: "AWS Braket 為全球企業接觸 IonQ、Rigetti、QuEra、IQM 之最大雲端入口",
      cashReserves: "$88,000M+",
      cashNum: 88000,
      runway: "無限",
      flagshipProduct: "AWS Ocelot 玻色貓態量子晶片 / Amazon Braket 雲端平台 / AWS KMS PQC",
      physicalQubits: 14,
      logicalQubits: "Ocelot 展示首顆整合式玻色糾錯邏輯位元，可減少高達 90% 實體量子位元開銷",
      twoQubitFidelity: "99.5%+ (非對稱偏置雜訊通道，位元翻轉壽命趨近 1 秒)",
      fidelityNum: 99.5,
      gateSpeed: "~100 ns",
      errorCorrection: "Bosonic Cat Qubit (硬體原生抑制位元翻轉) + 一維外部重複碼修正相位翻轉",
      pqcOrCryptoRole: "AWS Key Management Service (KMS)、AWS Certificate Manager 與 S3 已全面實作混合 ML-KEM 後量子 TLS 加密",
      summary: "2025 年 2 月於《Nature》發表自研首款量子晶片「Ocelot」，採用獨特的「玻色貓態量子位元 (Bosonic Cat Qubits)」，在物理硬體層直接壓抑位元翻轉錯誤近千倍，使容錯量子電腦所需的實體量子位元與冷卻硬體成本一口氣降低高達 90%。",
      technicalAdvantages: [
        "Ocelot 玻色貓態晶片減少 90% 硬體成本：傳統超導需同時修正在 X 與 Z 軸的錯誤（2D 表面碼需上千顆實體位元換 1 顆邏輯位元）；Ocelot 利用微波共振腔貓態自然消滅位元翻轉（壽命近 1 秒），只需簡單的一維碼修相位錯誤。",
        "Amazon Braket 雲端市集：匯聚 IonQ、Rigetti、QuEra、IQM 等各大硬體，掌握企業用戶真實演算法工作負載數據。"
      ],
      outlook: {
        rating: "高效率玻色糾錯與雲端通路霸主 (Bosonic Efficiency & Cloud Leader)",
        bullCase: "Ocelot 證明 AWS 不僅是通路商，更握有能大幅壓低量子資料中心造價 90% 的自研貓態晶片技術。",
        bearCase: "Ocelot 仍處於首代多晶片堆疊驗證階段。",
        catalysts2026_2027: [
          "Caltech AWS 量子中心發表第二代擴展型 Ocelot 邏輯陣列",
          "AWS Braket Direct 企業專屬算力預留服務成長"
        ]
      },
      news: [
        {
          date: "2025-02",
          title: "發表首款自研玻色貓態量子晶片 Ocelot 並刊登《Nature》，可降低 90% 量子糾錯硬體資源消耗",
          source: "Nature / AWS",
          impact: "自研晶片突破"
        }
      ],
      papers: [
        {
          title: "Hardware-efficient quantum error correction via concatenated bosonic qubits (Ocelot)",
          journal: "Nature (Feb 27, 2025) / arXiv:2409.13025",
          year: "2025",
          url: "https://arxiv.org/abs/2409.13025",
          highlight: "利用鉭超導微腔貓態與緩衝模塊實現位元翻轉壽命接近 1 秒，大幅簡化外層糾錯碼。"
        }
      ]
    },
    {
      id: "hon",
      ticker: "HON",
      exchange: "NASDAQ",
      name: "Honeywell International (Quantinuum QNT 控股母公司)",
      category: "big-tech",
      subCategories: ["控股 Quantinuum (QNT)", "低溫與航太量子感測", "工業巨頭"],
      modality: "離子阱 QCCD 架構 (透過控股已於 2026/06 上市之子公司 Quantinuum NASDAQ: QNT)",
      price: 228.50,
      marketCap: "$148B",
      marketCapNum: 148000,
      revenue: "$39.5B (集團營收)",
      revenueNum: 39500,
      revenueYoY: "+5%",
      revenueYoYNum: 5,
      bookingsOrBacklog: "持有已上市子公司 Quantinuum (NASDAQ: QNT，市值 ~$9.6B) 之控制性股權 + 航太量子慣性導航業務",
      cashReserves: "$10,500M",
      cashNum: 10500,
      runway: "無限",
      flagshipProduct: "控股 Quantinuum (QNT) + Honeywell 航太光學陀螺儀與量子磁力導航感測器",
      physicalQubits: 98,
      logicalQubits: "透過控股子公司 Quantinuum (QNT) 推進 Helios 與 Apollo 容錯架構",
      twoQubitFidelity: "99.921% (Quantinuum Helios)",
      fidelityNum: 99.921,
      gateSpeed: "~100 µs",
      errorCorrection: "Active Syndrome Extraction",
      pqcOrCryptoRole: "結合 Quantinuum Quantum Origin 為工業控制系統 (ICS)、智慧建築與航太通訊導入後量子加密防護",
      summary: "於 **2026 年 6 月 4 日成功將旗下離子阱巨頭 Quantinuum 推上 Nasdaq 獨立掛牌上市（代號 QNT，IPO 募資 16.8 億美元）**。Honeywell 仍保有對 Quantinuum 的多數控股權，並直接供應離子阱晶片超高真空腔體製造與國防航太量子導航感測器。",
      technicalAdvantages: [
        "成功孵化並控股 Quantinuum (NASDAQ: QNT)：直接享有 QNT 獨立上市後的股權增值與技術協同效應。",
        "美國本土離子阱晶圓製造支援：Honeywell 自有微機電 (MEMS) 與超高真空精密製造產線是 Quantinuum 離子阱晶片的核心製造後盾。"
      ],
      outlook: {
        rating: "穩健工業藍籌兼 QNT 控股母公司 (Blue-Chip Parent of QNT)",
        bullCase: "隨著 Quantinuum (`QNT`) 已於 2026 年 6 月獨立上市，追求純量子高彈性的投資人可直接買進 `QNT`，而偏好低波動與配息的機構則可透過 `HON` 穩健參與。",
        bearCase: "工業集團體量龐大，若想純粹交易量子題材，直接投資已上市的 `QNT` 純度更高。",
        catalysts2026_2027: [
          "Honeywell 航太分拆計畫與 Quantinuum (QNT) 持股市值重估"
        ]
      },
      news: [
        {
          date: "2026-06",
          title: "旗下子公司 Quantinuum 成功以每股 $60 於 Nasdaq 完成 16.8 億美元 IPO 上市 (Ticker: QNT)",
          source: "Honeywell / Nasdaq",
          impact: "分拆上市完成"
        }
      ],
      papers: [
        {
          title: "Demonstration of fault-tolerant universal quantum gate operations on trapped-ion logical qubits",
          journal: "Nature / Quantinuum & Honeywell",
          year: "2024",
          url: "https://www.quantinuum.com",
          highlight: "於 H2 處理器展示主動症候群提取與容錯邏輯閘。"
        }
      ]
    },

    // ==========================================================================
    // ENTERPRISE CYBERSECURITY & SEMICONDUCTOR PQC LEADERS
    // ==========================================================================
    {
      id: "net",
      ticker: "NET",
      exchange: "NYSE",
      name: "Cloudflare, Inc.",
      category: "enterprise-pqc",
      subCategories: ["全球最大 PQC 流量防護網", "零信任抗量子 VPN", "網路資安龍頭"],
      modality: "後量子混合金鑰交換網路 (NIST X25519MLKEM768 Default TLS 1.3)",
      price: 118.40,
      marketCap: "$40.5B",
      marketCapNum: 40500,
      revenue: "$2.15B",
      revenueNum: 2150,
      revenueYoY: "+28%",
      revenueYoYNum: 28,
      bookingsOrBacklog: "全球超過 38% 人類 HTTPS 加密網頁流量已由 Cloudflare 以後量子密碼保護",
      cashReserves: "$1,950M",
      cashNum: 1950,
      runway: "正向自由現金流",
      flagshipProduct: "Cloudflare One (Zero Trust PQC) / Post-Quantum TLS 1.3 Edge Network",
      physicalQubits: 0,
      logicalQubits: "N/A (軟體定義全球邊緣節點 ML-KEM / ML-DSA 部署)",
      twoQubitFidelity: "N/A",
      fidelityNum: 99.9,
      gateSpeed: "零延遲邊緣 PQC 交握 (<2ms 額外開銷)",
      errorCorrection: "混合古典 X25519 + 後量子 ML-KEM-768 雙重防護",
      pqcOrCryptoRole: "全球商業部署規模第一的後量子密碼 (PQC) 網路巨頭，協助銀行與政府立即阻斷「現在竊取、未來解密 (HNDL)」攻擊",
      summary: "全球後量子密碼 (PQC) 商業落地最快的資安與雲端網路公司。通過 Cloudflare 全球邊緣網路的人類 HTTPS 流量中，已有超過 38% 預設採用 NIST 標準化的 `X25519MLKEM768` 後量子加密，並將 PQC 全面整合進 Cloudflare One 零信任內網通道。",
      technicalAdvantages: [
        "全球最大規模 PQC 實戰驗證：每秒處理數千萬次 ML-KEM 後量子金鑰交換，為 IETF 與 NIST 提供核心傳輸層效能基準。",
        "無痛零信任升級：企業客戶無需重寫後端舊系統程式碼，只要掛載於 Cloudflare 零信任網關後，外網流量即自動升級為抗量子加密。"
      ],
      outlook: {
        rating: "企業 PQC 升級最直接受惠資安股 (Top Enterprise PQC Beneficiary)",
        bullCase: "美國聯邦機構與金融業被要求於 2026–2030 年完成 PQC 網路升級，Cloudflare 成為企業最省時省力的首選閘道。",
        bearCase: "估值倍數在資安股中偏高。",
        catalysts2026_2027: [
          "推出支援 ML-DSA / FN-DSA 後量子數位簽章之自動化憑證鏈服務",
          "聯邦政府 FedRAMP High 抗量子零信任標案放量"
        ]
      },
      news: [
        {
          date: "2025-03",
          title: "宣布全球超過 38% 經過 Cloudflare 的人類網頁流量已完成 NIST X25519MLKEM768 後量子加密升級",
          source: "Cloudflare Radar",
          impact: "產業標竿"
        }
      ],
      papers: [
        {
          title: "Deploying Post-Quantum TLS 1.3 (X25519MLKEM768) at Internet Scale",
          journal: "Cloudflare Research / IETF TLS Working Group",
          year: "2025",
          url: "https://blog.cloudflare.com",
          highlight: "分析上億次真實連線中大型後量子金鑰封包分片對網路延遲之影響與最佳化。"
        }
      ]
    },
    {
      id: "panw",
      ticker: "PANW",
      exchange: "NASDAQ",
      name: "Palo Alto Networks, Inc.",
      category: "enterprise-pqc",
      subCategories: ["抗量子次世代防火牆", "密碼敏捷性轉換代理", "網路資安龍頭"],
      modality: "企業級後量子 VPN 與密碼轉換代理 (PAN-OS Quantum-Safe Cipher Translation)",
      price: 392.00,
      marketCap: "$128B",
      marketCapNum: 128000,
      revenue: "$9.2B",
      revenueNum: 9200,
      revenueYoY: "+16%",
      revenueYoYNum: 16,
      bookingsOrBacklog: "RPO 積壓訂單超過 $12.7B",
      cashReserves: "$6,800M",
      cashNum: 6800,
      runway: "高自由現金流率 (>37%)",
      flagshipProduct: "PAN-OS 12.1 Quantum-Safe NGFW / Strata Cloud Manager PQC 盤點",
      physicalQubits: 0,
      logicalQubits: "N/A",
      twoQubitFidelity: "N/A",
      fidelityNum: 99.5,
      gateSpeed: "第 5 代防火牆硬體 ASIC 線速加解密",
      errorCorrection: "RFC 8784 / RFC 9370 多重混合金鑰交換 (IKEv2 PQC)",
      pqcOrCryptoRole: "提供「抗量子密碼轉換代理 (Cipher Translation Proxy)」，讓無法改寫程式碼的銀行老舊主機也能對外建立 NIST PQC 安全連線",
      summary: "全球企業防火牆與網路安全龍頭。在 PAN-OS 中全面導入抗量子 IPsec VPN 與獨家的「後量子密碼轉換代理」功能，並透過 Strata Cloud Manager 自動掃描企業內網所有脆弱的傳統 RSA/ECC 憑證，驅動第 5 代硬體防火牆換機潮。",
      technicalAdvantages: [
        "Quantum-Safe Cipher Translation Proxy：替銀行與政府內部無法升級的 Legacy 應用終止外部 ML-KEM 連線，解決企業遷移 PQC 最大痛點。",
        "硬體防火牆升級週期：高吞吐量 PQC 運算帶動 PA-5400 / PA-5500 系列高階硬體採購。"
      ],
      outlook: {
        rating: "企業網路 PQC 硬體升級核心受惠者 (Enterprise Network PQC Leader)",
        bullCase: "全球財星 500 大企業進行 CNSA 2.0 與 NIST PQC 合規改造時，直接透過現有 PANW 防火牆加購授權與升級硬體。",
        bearCase: "屬大型穩健資安股，非純量子高彈性小股。",
        catalysts2026_2027: [
          "美國國安局 CNSA 2.0 網路設備合規採購潮啟動"
        ]
      },
      news: [
        {
          date: "2025-08",
          title: "發布全套 Quantum Readiness 解決方案，支援 PAN-OS 後量子密碼自動盤點與代理轉換",
          source: "Palo Alto Networks PR",
          impact: "產品推出"
        }
      ],
      papers: [
        {
          title: "Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2) for PQC",
          journal: "IETF RFC 9370 Implementation Guide",
          year: "2024",
          url: "https://www.paloaltonetworks.com",
          highlight: "定義企業級站對站 VPN 混合後量子金鑰交換架構。"
        }
      ]
    },
    {
      id: "lscc",
      ticker: "LSCC",
      exchange: "NASDAQ",
      name: "Lattice Semiconductor Corp.",
      category: "enterprise-pqc",
      subCategories: ["抗量子 FPGA 晶片", "伺服器韌體信任根", "CNSA 2.0 硬體防護"],
      modality: "低功耗後量子安全控制 FPGA (MachXO5-NX TDQ & Sentry Stack)",
      price: 62.30,
      marketCap: "$8.6B",
      marketCapNum: 8600,
      revenue: "$580M",
      revenueNum: 580,
      revenueYoY: "+12%",
      revenueYoYNum: 12,
      bookingsOrBacklog: "打入北美四大雲端 CSP 與主流 AI 伺服器主板安全控制晶片 (PFR)",
      cashReserves: "$160M",
      cashNum: 160,
      runway: "穩定獲利與正向現金流",
      flagshipProduct: "MachXO5-NX TDQ (支援完整 CNSA 2.0 ML-DSA / ML-KEM 韌體保護) / Lattice Sentry",
      physicalQubits: 0,
      logicalQubits: "N/A",
      twoQubitFidelity: "N/A",
      fidelityNum: 99.5,
      gateSpeed: "硬體邏輯閘級即時韌體簽章驗證",
      errorCorrection: "NIST SP 800-193 平台韌體保護與恢復 (PFR)",
      pqcOrCryptoRole: "其名稱「Lattice」恰與後量子「晶格密碼 (Lattice Cryptography)」同名，更是全球 AI 伺服器與資料中心主板實作 CNSA 2.0 抗量子安全開機 (Secure Boot) 的關鍵 FPGA 供應商",
      summary: "低功耗可編程邏輯晶片 (FPGA) 領導廠商。由於後量子密碼標準仍在持續演進，具備「可重新編程 (Crypto-Agility)」特性的 FPGA 成為資料中心伺服器、5G 基地台與國防設備防範量子破解的首選硬體信任根 (Root of Trust)。",
      technicalAdvantages: [
        "密碼敏捷性 (Crypto-Agility)：不同於固定電路的 ASIC，Lattice FPGA 可透過韌體更新即時修補或升級新的後量子演算法（如 ML-DSA、ML-KEM、LMS、XMSS）。",
        "AI 伺服器主板標配：每台高階 AI 伺服器主板皆需搭載平台韌體保護 (PFR) 控制晶片，MachXO5-NX TDQ 率先符合美國國安局 CNSA 2.0 規範。"
      ],
      outlook: {
        rating: "伺服器與國防 PQC 硬體信任根核心晶片股 (Crypto-Agile FPGA Leader)",
        bullCase: "受惠資料中心伺服器安全開機強制要求支援 CNSA 2.0 (ML-DSA-87 / LMS)，帶動高單價安全 FPGA 出貨。",
        bearCase: "工業與通訊半導體庫存週期波動影響短期營收。",
        catalysts2026_2027: [
          "新一代 AI 伺服器平台全面導入 CNSA 2.0 合規 MachXO5-NX TDQ 晶片"
        ]
      },
      news: [
        {
          date: "2025-06",
          title: "推出支援完整 CNSA 2.0 後量子密碼套件 (ML-DSA / ML-KEM) 之 MachXO5-NX TDQ 安全控制 FPGA 與 Sentry 5.0",
          source: "Lattice Semiconductor PR",
          impact: "晶片發表"
        }
      ],
      papers: [
        {
          title: "Achieving Crypto-Agility and CNSA 2.0 Compliance in Server Platform Root-of-Trust with Low-Power FPGAs",
          journal: "Lattice Security Architecture Whitepaper",
          year: "2025",
          url: "https://www.latticesemi.com",
          highlight: "展示於 28nm FD-SOI FPGA 實作抗量子位元流驗證與安全雙重開機。"
        }
      ]
    },
    {
      id: "crwd",
      ticker: "CRWD",
      exchange: "NASDAQ",
      name: "CrowdStrike Holdings, Inc.",
      category: "enterprise-pqc",
      subCategories: ["端點密碼資產盤點", "AI 資安龍頭", "PKI 與後量子遷移"],
      modality: "端點密碼敏捷性探測與 PQC 遷移管理 (Falcon for IT + Keyfactor AgileSec)",
      price: 378.00,
      marketCap: "$93.0B",
      marketCapNum: 93000,
      revenue: "$4.3B",
      revenueNum: 4300,
      revenueYoY: "+29%",
      revenueYoYNum: 29,
      bookingsOrBacklog: "ARR 年度經常性收入突破 $4.2B+",
      cashReserves: "$4,100M",
      cashNum: 4100,
      runway: "強勁自由現金流 (>30% FCF Margin)",
      flagshipProduct: "CrowdStrike Falcon 平台 (整合 Post-Quantum Cryptography 資產發現與風險評估)",
      physicalQubits: 0,
      logicalQubits: "N/A",
      twoQubitFidelity: "N/A",
      fidelityNum: 99.0,
      gateSpeed: "毫秒級全球端點遙測",
      errorCorrection: "自動識別脆弱 RSA/ECC 憑證與端點後量子 TLS 保護",
      pqcOrCryptoRole: "利用已安裝在全球數千萬台企業終端與伺服器的 Falcon 探針，自動化建立「密碼物料清單 (CBOM)」，協助 CISO 找出所有易受量子破解的舊加密資產",
      summary: "全球端點與雲端工作負載安全龍頭。企業邁向後量子密碼的第一步是「盤點哪些系統還在使用舊版 RSA/ECC (Cryptographic Discovery)」，CrowdStrike 透過既有 Falcon 單一代理程式與 Keyfactor 整合，直接為企業產生密碼物料清單 (CBOM) 與遷移藍圖。",
      technicalAdvantages: [
        "免額外安裝探針的 CBOM 盤點：企業無需額外購置掃描器，直接透過既有 Falcon 感測器即可清查全公司主機上的脆弱加密協定。",
        "Falcon Agent 內部通訊 PQC 化：感測器與雲端威脅圖譜間的通訊率先導入抗量子加密。"
      ],
      outlook: {
        rating: "企業端點密碼盤點 (CBOM) 平台龍頭 (Endpoint Crypto-Agility Leader)",
        bullCase: "NIST 與白宮 OMB 備忘錄要求所有聯邦機構與關鍵基礎設施定期提交自動化密碼資產清單 (CBOM)，成為 Falcon for IT 模組強力銷售動能。",
        bearCase: "PQC 為其龐大資安平台之附加模組。",
        catalysts2026_2027: [
          "美國聯邦機構與金融業強制 CBOM 密碼資產申報合規潮"
        ]
      },
      news: [
        {
          date: "2025-07",
          title: "強化 Falcon 平台後量子密碼 (PQC) 可視性與加密資產盤點能力，加速企業 CNSA 2.0 轉型",
          source: "CrowdStrike Marketplace",
          impact: "功能擴充"
        }
      ],
      papers: [
        {
          title: "Automated Cryptographic Bill of Materials (CBOM) Discovery Across Enterprise Endpoints",
          journal: "CrowdStrike & Keyfactor Technical Guide",
          year: "2025",
          url: "https://www.crowdstrike.com",
          highlight: "解決大型跨國企業內部隱藏憑證與硬編碼 RSA 金鑰之自動化治理。"
        }
      ]
    }
  ],

  // ============================================================================
  // 2. QUANTUM & NEXT-GEN COMPUTING ETFS (量子電腦與前瞻科技美股 ETF)
  // ============================================================================
  etfs: [
    {
      ticker: "QTUM",
      name: "Defiance Quantum ETF",
      exchange: "NYSE Arca",
      issuer: "Defiance ETFs",
      inceptionDate: "2018-09-04",
      aum: "$5.4B ($52億–$56億美元)",
      expenseRatio: "0.40%",
      secYield: "0.95%",
      ytdReturn: "+32.4%",
      oneYearReturn: "+42.8%",
      fiveYearCagr: "+26.4% (年化報酬率)",
      underlyingIndex: "BlueStar Quantum Computing and Machine Learning Index (BQTUM)",
      weightingMethod: "改良式等權重 (Modified Equal-Weighted，半年再平衡，單一成分股初始權重上限約 1.5%–2.5%)",
      holdingsCount: 85,
      purePlayAllocation: "約 18%–25% (涵蓋 IONQ, QNT, QBTS, RGTI, IQMX, INFQ, QUBT, XNDU, PSQL 等)",
      summary: "全球規模最大、流動性最佳且歷史最悠久的純正量子運算與機器學習主題 ETF。資產管理規模 (AUM) 已突破 54 億美元。採用「改良式等權重」設計，避免被微軟、Google、NVIDIA 等兆元巨頭壟斷權重，讓投資人能實質參與 IonQ、Quantinuum (QNT)、D-Wave、Rigetti 等純量子中小型股的爆發性漲幅，同時享有半導體與 AI 巨頭的下檔支撐。",
      topHoldings: [
        { ticker: "IONQ", name: "IonQ, Inc.", weight: "3.10%", role: "離子阱量子電腦與量子網路龍頭" },
        { ticker: "QNT", name: "Quantinuum Inc.", weight: "2.95%", role: "2026/06 新上市離子阱 QCCD 霸主" },
        { ticker: "QBTS", name: "D-Wave Quantum", weight: "2.75%", role: "量子退火與最佳化系統" },
        { ticker: "RGTI", name: "Rigetti Computing", weight: "2.50%", role: "模組化超導量子處理器" },
        { ticker: "NET", name: "Cloudflare", weight: "2.10%", role: "全球最大 PQC 後量子加密網路" },
        { ticker: "NVDA", name: "NVIDIA Corp.", weight: "1.95%", role: "CUDA-Q 混合量子超算與解碼" },
        { ticker: "GOOGL", name: "Alphabet Inc.", weight: "1.85%", role: "Willow 容錯表面碼突破" },
        { ticker: "IBM", name: "IBM Corp.", weight: "1.80%", role: "Quantum System Two & NIST PQC 標準" },
        { ticker: "HON", name: "Honeywell International", weight: "1.70%", role: "控股 Quantinuum (QNT) 母公司" },
        { ticker: "LSCC", name: "Lattice Semiconductor", weight: "1.65%", role: "後量子安全控制 FPGA" }
      ],
      pros: [
        "一籃子囊括所有主流物理路線（離子阱、超導、中性原子、光量子、拓撲）與後量子密碼晶片，免除單一技術路線押錯寶風險。",
        "等權重再平衡機制會自動在純量子小型股暴漲後部分獲利了結、並在低檔回補，5 年年化報酬率高達 +26.4%。",
        "0.40% 總費用率在主題型科技 ETF 中相當低廉，且規模逾 50 億美元無清算風險。"
      ],
      cons: [
        "約有 70%–75% 成分股為廣義 AI 晶片、光學元件與超算概念股，若追求 100% 純量子暴漲彈性，需搭配個別純股（如 IONQ, QNT, QBTS, RGTI）配置。"
      ]
    },
    {
      ticker: "SPRX",
      name: "Spear Alpha ETF",
      exchange: "NASDAQ",
      issuer: "Spear Invest",
      inceptionDate: "2021-08-03",
      aum: "$185M",
      expenseRatio: "0.75%",
      secYield: "0.00%",
      ytdReturn: "+29.1%",
      oneYearReturn: "+38.5%",
      fiveYearCagr: "+18.9%",
      underlyingIndex: "主動式管理 (Active Management - 聚焦工業突破科技、量子安全、資料中心光互連與太空)",
      weightingMethod: "主動選股集中持倉 (Top 10 持股佔比逾 55%)",
      holdingsCount: 28,
      purePlayAllocation: "高集中度配置於後量子資安 (Cloudflare, Palo Alto, CrowdStrike) 與量子算力硬體供應鏈 (NVIDIA, Coherent, Marvell)",
      summary: "由知名科技產業分析師 Ivana Delevska 主動管理的突破性科技 ETF，將「後量子網路安全 (PQC Cybersecurity)」、「光學互連光子晶片」與「量子-古典混合算力」列為核心投資支柱。",
      topHoldings: [
        { ticker: "NVDA", name: "NVIDIA Corp.", weight: "9.40%", role: "CUDA-Q 與 AI 超算" },
        { ticker: "NET", name: "Cloudflare", weight: "7.80%", role: "後量子 TLS 邊緣網路" },
        { ticker: "COHR", name: "Coherent Corp.", weight: "6.50%", role: "量子雷射光學與光收發模組" },
        { ticker: "CRWD", name: "CrowdStrike", weight: "6.10%", role: "端點密碼敏捷性管理" },
        { ticker: "PANW", name: "Palo Alto Networks", weight: "5.40%", role: "抗量子防火牆與 VPN" }
      ],
      pros: [
        "主動管理靈活調整，重倉受惠於量子光學元件與 PQC 資安軟體的高獲利成長股。"
      ],
      cons: [
        "管理費 0.75% 較高，且純量子硬體小型股比重低於 QTUM。"
      ]
    },
    {
      ticker: "CIBR",
      name: "First Trust NASDAQ Cybersecurity ETF",
      exchange: "NASDAQ",
      issuer: "First Trust",
      inceptionDate: "2015-07-07",
      aum: "$8.2B",
      expenseRatio: "0.59%",
      secYield: "0.35%",
      ytdReturn: "+21.5%",
      oneYearReturn: "+28.9%",
      fiveYearCagr: "+16.2%",
      underlyingIndex: "Nasdaq CTA Cybersecurity Index",
      weightingMethod: "流動性調整市值加權",
      holdingsCount: 33,
      purePlayAllocation: "專注於受惠 NIST PQC 與美國政府 CNSA 2.0 強制升級潮之大型資安與加密基礎設施股",
      summary: "若投資人看好「量子威脅帶動的全球企業加密升級潮 (PQC Migration)」勝過高波動的量子電腦硬體製造，CIBR 完整涵蓋 Cloudflare、Palo Alto Networks、CrowdStrike、Cisco、Thales 與 CyberArk 等所有 PQC 轉型核心受惠股。",
      topHoldings: [
        { ticker: "CRWD", name: "CrowdStrike Holdings", weight: "8.50%", role: "端點 CBOM 密碼盤點" },
        { ticker: "PANW", name: "Palo Alto Networks", weight: "8.20%", role: "抗量子 NGFW 與 VPN" },
        { ticker: "FTNT", name: "Fortinet", weight: "7.60%", role: "結合 Arqit 與 NIST PQC 之安全設備" },
        { ticker: "CSCO", name: "Cisco Systems", weight: "7.40%", role: "量子網路交換器與 PQC 路由器" },
        { ticker: "NET", name: "Cloudflare", weight: "6.20%", role: "預設 X25519MLKEM768 防護" }
      ],
      pros: [
        "成分股皆具穩定現金流與高獲利，直接收割 2026–2030 全球政府與金融機構 PQC 合規預算。"
      ],
      cons: [
        "不包含純量子電腦 (QPU) 製造商。"
      ]
    }
  ],

  // ============================================================================
  // 3. PRE-IPO QUANTUM & PQC UNICORN PIPELINE (截至 2026/10 尚未上市之純未上市獨角獸)
  // ============================================================================
  // 3A. SEC PROSPECTUS DEEP-DIVE (S-1 / S-4 / F-4 招股書深度拆解與對照分析)
  // ============================================================================
  prospectusAnalysis: {
    activeFilings: [
      {
        id: "filing-seeqc",
        company: "SEEQC, Inc.",
        proposedTicker: "NASDAQ: SEQC",
        filingType: "SEC Form S-1 / S-1/A (File No. 333-297133)",
        filingDate: "2026-06-29 首遞 S-1 → 2026-09/10 更新 S-1/A",
        dealPath: "傳統承銷 IPO（2026/08/25 終止原 Allegro $1B SPAC Form S-4，轉向獨立 S-1 掛牌）",
        underwritersOrSponsor: "主承銷商：Cantor Fitzgerald、BTIG（協辦：Needham & Co.、Craig-Hallum）",
        targetValuation: "待定價 (原 S-4 估值 ~$1.0B；S-1 採機構詢價圈購)",
        fy25Revenue: "$4.16M ($4,157K, +420% YoY vs FY24 ~$0.8M)",
        h1_2026Revenue: "$1.80M (+23.7% YoY vs H1 2025 $1.46M)",
        netLossAndDeficit: "FY25 淨虧損 $(12.2M) | H1 2026 淨虧損 $(9.61M) | 累計赤字 $(65.3M)",
        cashAndProceeds: "帳上現金 $18.1M (截至 2026/06/30，較 Q1 $23.1M 減少) | 原 $64.9M SPAC PIPE 已隨協議終止取消",
        goingConcernFlag: true,
        goingConcernText: "獨立審計師出具「繼續經營能力重大疑慮 (Going Concern Warning)」：現有 $18.1M 現金不足以支應未來 12 個月資本支出與研發燒錢，高度仰賴本次 S-1 IPO 募資成功。",
        pros: [
          "技術稀缺性極高：全球唯一擁有專屬多層超導晶圓代工廠（紐約 Elmsford）的「單磁通量子 (SFQ) 10mK 極低溫數位控制晶片」商，解決百萬位元機櫃 I/O 線路散熱瓶頸。",
          "放棄高贖回風險的 SPAC，改由 Cantor 與 BTIG 主導傳統 S-1 承銷上市，機構定價將更透明紮實。",
          "與 NVIDIA (極低溫 QPU-GPU 超高速互連)、IBM 及 DARPA 擁有實質工程研發合約。"
        ],
        risks: [
          "現金跑道吃緊：截至 2026 年中現金僅剩 $18.1M，上半年淨虧損擴大至 $(9.61M)，若 IPO 延宕將面臨過橋融資壓力。",
          "客戶集中度極高：S-1 風險揭露指出歷史營收 ($4.16M) 高度集中於少數美國政府機構與主要量子策略夥伴。"
        ],
        verdict: "🛠️ 超導控制晶片關鍵「賣鏟人」— 建議待 S-1 最終發行價區間公布、確認募資總額大於 $50M 解除現金警報後再行佈局。"
      },
      {
        id: "filing-eigenq",
        company: "EigenQ, Inc. (EigenQ Holdings, Inc.)",
        proposedTicker: "NASDAQ: EIGQ / EIGQW (現 SPAC 代號: SVAQ)",
        filingType: "SEC Form S-4 註冊聲明暨初步招股書",
        filingDate: "2026-08 秘密遞交 → 2026-09-28 正式公開 Form S-4",
        dealPath: "與 Silicon Valley Acquisition Corp. (NASDAQ: SVAQ) 進行 de-SPAC 業務合併（預計 2026 Q4 交割）",
        underwritersOrSponsor: "SPAC 發起人：Silicon Valley Acquisition Corp. (SVAQ)",
        targetValuation: "備考企業價值 (Pro Forma EV) ~$3.0B (30 億美元)",
        fy25Revenue: "早期商業化階段 (2025 年創立，營收規模尚處初期導入期)",
        h1_2026Revenue: "早期商業化階段 (Form S-4 揭露以政府與企業 PQC 先導部署為主)",
        netLossAndDeficit: "研發與安全架構擴張期，處於營業虧損與負自由現金流狀態",
        cashAndProceeds: "SVAQ 信託現金 ~$215M (視贖回率而定) + 上市前 $45M 優先擔保可轉債 (2026/09) + $5M 次順位票據 (2026/10)",
        goingConcernFlag: true,
        goingConcernText: "處於早期高研發投入階段，持續性營業虧損與負營運現金流需仰賴 $50M 上市前票據融資與 SVAQ 合併交割資金支撐。",
        pros: [
          "卡位美國政府 CNSA 2.0 強制升級潮，提供硬體信任根級後量子密碼 (Hardware-Rooted PQC)、量子安全通訊與分散式量子網路。",
          "交割前已成功向機構募集 $45M 優先擔保可轉債與 $5M 無擔保票據，確保商業化推廣不斷炊。"
        ],
        risks: [
          "估值嚴重偏高風險：2025 年成立之新創即在 Form S-4 開出高達 $3.0B 的備考企業價值（甚至高於已年營收逾 $30M 的 Infleqtion 與 IQM），完全建立在遠期預測而非歷史實績。",
          "可轉債與認股權證稀釋壓力：$45M 優先擔保可轉債附帶大量認股權證，若 de-SPAC 時散戶贖回率過高，掛牌後恐面臨較大轉股拋壓。"
        ],
        verdict: "⚠️ 高估值 PQC 主題 SPAC — 題材契合後量子資安熱潮，但 $3.0B 估值缺乏當期營收支撐，切勿於合併交割初期盲目追高。"
      },
      {
        id: "filing-kqc",
        company: "KQC Quantum, Inc. (Korea Quantum Computing)",
        proposedTicker: "NASDAQ: KQC (現 SPAC 代號: CHAR)",
        filingType: "Definitive BCA & SEC Form S-4 招股書程序",
        filingDate: "2026-10 簽署最終業務合併協議 (預計 2027 H1 完成交割)",
        dealPath: "與 Charlton Aria Acquisition Corp. (NASDAQ: CHAR) 進行 de-SPAC 業務合併",
        underwritersOrSponsor: "SPAC 發起人：Charlton Aria Acquisition Corp. (CHAR)",
        targetValuation: "投前股權估值 $80M (每股 $11.00) | 備考合併後股權估值 ~$215M",
        fy25Revenue: "企業量子中介軟體與後量子 HSM 安全專案收入（於 Form S-4 完整揭露）",
        h1_2026Revenue: "2026 年中推出 Qubiteer™ AI 混合量子平台 Beta 版，商業專案加速認列",
        netLossAndDeficit: "輕資產軟體與資安整合模式，資本支出與燒錢率遠低於硬體製造商",
        cashAndProceeds: "CHAR 信託帳戶持有 ~$93.5M (截至 2026/09) | 設有 $30M 最低現金交割條件 (Minimum Cash Condition)",
        goingConcernFlag: false,
        goingConcernText: "交易設有 $30M 最低現金交割保護門檻，且原股東 100% 股權留存展延 (100% Equity Rollover，合併後持股 37%–47%)，利益與公開市場高度綁定。",
        pros: [
          "估值極為務實划算：相較動輒 $1B–$3B 的歐美量子 SPAC，KQC 投前股權估值僅 $80M、備考估值 $215M，安全邊際顯著。",
          "雙引擎商業落地：同時擁有「Qubiteer™ AI 驅動跨硬體量子最佳化平台」與「QuantumSpan 後量子密碼資產審計 + HSM 硬體安全模組」。",
          "頂級韓國財閥與金融客戶背書：已完成浦項鋼鐵 (POSCO Holdings 電池材料)、釜山交通公社 (軌道排程)、韓國企業銀行 (IBK) 與 LS ITC 實戰專案。"
        ],
        risks: [
          "區域市場集中度：目前商業合約高度集中於南韓大型財閥與公營機構，登陸 Nasdaq 後需證明具備拓展北美與全球市場的能力。",
          "不自研底層 QPU 硬體：扮演「硬體中立中介層」角色，算力底座需仰賴 IBM、IonQ、D-Wave 等第三方量子硬體。"
        ],
        verdict: "💎 低估值亞洲量子軟體與 PQC 黑馬 — $80M 投前估值搭配 POSCO 與 IBK 等真實企業客戶，是準上市陣營中性價比極高的中小型標的。"
      },
      {
        id: "filing-classiq",
        company: "Classiq Technologies",
        proposedTicker: "洽談掛牌中 (華爾街 SPAC / S-1 雙軌評估)",
        filingType: "Pre-Filing / 投行盡職調查與招股書籌備階段",
        filingDate: "2026 下半年深入談判中 (目標 2027 掛牌)",
        dealPath: "正與華爾街投行洽談大型 SPAC 合併或傳統 S-1 IPO（同時保留私募增資彈性）",
        underwritersOrSponsor: "既有策略股東：HPE、Samsung Next、HSBC、SoftBank、Intesa Sanpaolo",
        targetValuation: "目標上市估值 $2.0B – $5.0B",
        fy25Revenue: "企業級量子 EDA 軟體授權與雲端平台訂閱（累計私募融資 >$110M）",
        h1_2026Revenue: "隨 NVIDIA CUDA-Q、Microsoft Azure 與 AWS Braket 深度整合高速成長",
        netLossAndDeficit: "高毛利純軟體 EDA 商業模式，無晶圓廠或極低溫硬體重資本折舊負擔",
        cashAndProceeds: "帳上私募資金充裕（累計募資逾 $110M），無迫切現金斷炊壓力",
        goingConcernFlag: false,
        goingConcernText: "純軟體高毛利架構，財務體質穩健，上市目的主要為擴大全球企業銷售與併購垂直演算法團隊。",
        pros: [
          "被譽為「量子界的 Cadence / Synopsys」：當量子電腦規模突破百顆邏輯位元，人類無法手繪量子邏輯閘，必須依賴 Classiq 自動將高階數學模型合成並壓縮為最省量子閘的線路。",
          "硬體中立紅利：無論離子阱、超導或中性原子誰勝出，所有企業開發者都需要量子電路編譯與合成軟體。"
        ],
        risks: [
          "目標估值 ($2B–$5B) 對於純量子軟體商而言偏高（對比已上市之量子軟體股 Horizon Quantum HQ 市值僅約 $275M），需觀察最終招股書揭露之 ARR 年度經常性收入規模。"
        ],
        verdict: "⭐ 量子 EDA 軟體龍頭 — 密切追蹤其正式向 SEC 公開遞交 S-1 或 S-4 招股書時揭露之 ARR 與毛利率數據。"
      }
    ],
    recent2026Benchmarks: [
      {
        ticker: "QNT",
        company: "Quantinuum Inc.",
        filingType: "SEC Form S-1",
        effectiveAndListDate: "2026/02/17 秘密遞交 → 2026/05/08 公開 S-1 → 2026/06/04 IPO ($60/股)",
        fy25Revenue: "$30.9M (+34% YoY)",
        bookingsOrGuidance: "FY25 簽約 Bookings $79.3M (Book-to-Bill 2.56x)",
        lossMetric: "FY25 淨虧損 $(192.6M) | Q1 26 淨虧損 $(136.6M)",
        proceedsAndCash: "IPO 募資 $1.68B (發行 2,800 萬股) | 現金 ~$1.95B+",
        keyProspectusInsight: "招股書證明頂級離子阱主機（如 Oracle 採購之 Helios）已具備近 $8,000 萬美元年簽約力，Honeywell 於 IPO 後仍維持 ~54% 絕對控股。"
      },
      {
        ticker: "INFQ",
        company: "Infleqtion, Inc.",
        filingType: "SEC Form S-4",
        effectiveAndListDate: "2025/10/29 秘密遞交 → 2026/01/06 公開 S-4 → 2026/02/12 合併過關",
        fy25Revenue: "$32.5M",
        bookingsOrGuidance: "FY26 官方財測指引 $40.0M",
        lossMetric: "FY25 營業虧損 $(35.3M) (較 FY24 $(53.0M) 大幅收斂) | Non-GAAP 淨損 $(24.6M)",
        proceedsAndCash: "合併前現金僅 $11.9M → Churchill X 合併 + $125M PIPE 帶來逾 $540M 總募資額",
        keyProspectusInsight: "S-4 揭露量子原子鐘與 RF 感測器已帶來穩定國防現金流，使全年營業現金流出控制在僅 $(24.1M)，為虧損收斂最快的純量子股。"
      },
      {
        ticker: "IQMX",
        company: "IQM Quantum Computers",
        filingType: "SEC Form F-4",
        effectiveAndListDate: "2026/06 F-4 生效 → 與 Real Asset Acquisition (RAAQ) 完成合併",
        fy25Revenue: "€31.0M (~$36.0M USD)",
        bookingsOrGuidance: "FY26 全年營收指引 €42M – €47M (H1 26 已認列 €8.9M)",
        lossMetric: "H1 2026 營業虧損 €(60.5M) (因擴建芬蘭自有超導晶圓廠)",
        proceedsAndCash: "含 $146M+ PIPE 機構增資，合併備考現金達 $465M+",
        keyProspectusInsight: "F-4 展現歐洲主權超算中心「整機買斷 (On-Premise)」模式的威力，營收規模在 2026 新上市陣營中高居第一。"
      },
      {
        ticker: "XNDU",
        company: "Xanadu Quantum Technologies",
        filingType: "SEC Form F-4",
        effectiveAndListDate: "2026/01 公開 F-4 → 2026/03 與 Crane Harbor (CHAC) 完成合併",
        fy25Revenue: "Q1 26 $2.83M / Q2 26 $1.51M (+42.5% YoY)",
        bookingsOrGuidance: "受惠美國 DARPA QBI Stage B 里程碑合約與 PennyLane 企業授權",
        lossMetric: "Q2 2026 營業虧損 $(29.99M) | Q2 淨虧損 $(42.05M)",
        proceedsAndCash: "Q2 2026 帳上現金 $312.8M + $300M Yorkville 備用股權融資額度",
        keyProspectusInsight: "F-4 審計報告曾列有合併前「繼續經營疑慮 (Going Concern)」，但透過 de-SPAC 與 $300M SEPA 額度已徹底解除流動性風險。"
      },
      {
        ticker: "PSQL",
        company: "Pasqal Holding SA",
        filingType: "SEC Form F-4",
        effectiveAndListDate: "2026/08 F-4 生效 → 2026/08/27 與 Bleichroeder II 完成合併",
        fy25Revenue: "€16.5M (含 €7.2M 政府研發補助)",
        bookingsOrGuidance: "H1 2026 營收 €4.87M (+14% YoY，其中 QPU 算力服務 €3.9M, +34% YoY)",
        lossMetric: "FY25 淨虧損 >€(92M) | H1 26 營業虧損 €(59.2M) (含 €27.3M SBC 與 €10.2M 上市費)",
        proceedsAndCash: "2026/08/27 交割後帳上現金達 €312.9M (~$360M USD)",
        keyProspectusInsight: "閱讀 F-4 必須拆解收入結構：€16.5M 總收入中有 €7.2M 為政府補助，但高毛利的 QPU 服務收入正以 +34% YoY 加速成長。"
      },
      {
        ticker: "HQ",
        company: "Horizon Quantum Holdings",
        filingType: "SEC Form F-4",
        effectiveAndListDate: "2026/02/17 F-4 生效 (333-292737) → 2026/03/20 與 dMY Squared 合併",
        fy25Revenue: "早期研發階段 (無顯著商業營收)",
        bookingsOrGuidance: "於愛爾蘭都柏林建置混合量子硬體測試床 (採購 IonQ 系統整合 Triple Alpha IDE)",
        lossMetric: "歷史年燒錢率極低 ($7M–$9M/年) | Q1 26 營業虧損 $(6.5M)、Adjusted EBITDA $(4.1M)",
        proceedsAndCash: "含 $111.9M PIPE 共募資 ~$120M | Q1 26 帳上現金 $96.6M",
        keyProspectusInsight: "F-4 顯示純軟體商極度精簡的資本消耗：創立至上市前累計僅花費 ~$29M，$96.6M 現金足以支撐超過 8 年研發跑道。"
      }
    ],
    checklistRules: [
      {
        title: "法則 1：拆解「真實商業營收」vs.「政府補助與工程合約」",
        detail: "閱讀量子招股書損益表時，切勿只看頂行總收入。例如 Pasqal 的 Form F-4 揭露 FY25 €16.5M 收入中包含 €7.2M 政府補助；SEEQC 的 Form S-1 揭露 $4.16M 集中於少數政府工程合約。具備高估值溢價的必須是「可重複銷售的主機訂單與雲端 QPU 算力訂閱」。"
      },
      {
        title: "法則 2：緊盯「Bookings (簽約訂單) / RPO」與「Book-to-Bill 比值」",
        detail: "量子電腦主機單價高達 $1,000 萬至 $2,000 萬美元，從簽約到機房驗收認列 GAAP 營收需時 9–18 個月。Quantinuum 在 Form S-1 中 FY25 帳面營收為 $30.9M，但簽約 Bookings 高達 $79.3M（Book-to-Bill 2.56x），這才是支撐百億市值的關鍵先行指標。"
      },
      {
        title: "法則 3：核查審計師「繼續經營疑慮 (Going Concern)」與「PIPE 機構鎖倉比例」",
        detail: "SEEQC (Form S-1/A, 現金僅 $18.1M)、Xanadu 與 Infleqtion 在上市前招股書中皆曾被會計師註記 Going Concern 警告。在 SPAC 合併案（如 S-4 / F-4）中，散戶贖回率常高達 70%–95%，唯有具備高額機構 PIPE 承諾（如 Infleqtion $125M PIPE、IQM $146M PIPE、Horizon $112M PIPE）或最低現金交割條款（如 KQC $30M 門檻），才能確保上市後不斷炊。"
      },
      {
        title: "法則 4：警惕「零營收卻開出數十億美元估值」的 SPAC 泡沫與可轉債稀釋",
        detail: "對比 2026 已上市硬體三強 QNT ($30.9M 營收)、INFQ ($32.5M 營收)、IQMX (~$36M 營收)，若一家剛成立、尚無顯著商業營收的公司在 Form S-4 開出 $3.0B 估值（如 EigenQ），且伴隨大量附認股權證之優先擔保可轉債，交割後往往面臨劇烈的估值修正與轉股賣壓。"
      },
      {
        title: "法則 5：還原 Non-GAAP 真實燒錢率（剔除一次性上市費與 SBC 股權獎勵）",
        detail: "量子招股書的帳面 GAAP 淨虧損往往被「一次性 SPAC 併購顧問費」與「里程碑股份基礎給付 (SBC)」大幅誇大。例如 Pasqal H1 2026 營業虧損 €59.2M 中，高達 €37.5M 為非現金 SBC (€27.3M) 與上市費用 (€10.2M)；投資人應直接查閱「營業活動現金流量 (Operating Cash Outflow)」以計算真實現金跑道。"
      }
    ],
    firstradeGuide: [
      {
        category: "🔄 舊代號已失效・須改用新代號下單",
        statusBadge: "改輸入新代號即可買賣",
        statusColor: "text-amber-300 bg-amber-500/15 border-amber-400/25",
        tickers: "舊代號 WKEY ❌ → 請改輸入 WQEY ✅\n舊 SPAC 代號 CCCX / CHAC / DMYY / RAAQ / BBCQ ❌ → 請改輸入 INFQ / XNDU / HQ / IQMX / PSQL ✅",
        reason: "1. WISeKey 已於 2026/10/01 完成自瑞士遷冊至英屬維京群島 (BVI) 並更名為 WISeQey Corp.，原 ADS 代號 WKEY 於 2026/10/05 正式自 Nasdaq 終止下市（每 1 股舊 WKEY 換發 0.5 股新普通股），在 Firstrade 輸入 WKEY 會顯示無法下單，必須改輸入新代號 WQEY。\n2. 2026 年完成合併之 5 檔量子 SPAC 原代號皆已註銷，須直接輸入合併後正股代號。",
        workaround: "在 Firstrade 搜尋欄直接輸入 WQEY、INFQ、XNDU、HQ、IQMX、PSQL 即可正常免佣金買賣。"
      },
      {
        category: "⏳ 準上市招股書階段・新代號尚未掛牌",
        statusBadge: "新代號無法下單",
        statusColor: "text-rose-300 bg-rose-500/15 border-rose-400/25",
        tickers: "SEQC (SEEQC, Form S-1/A) ❌\nEIGQ (EigenQ, Form S-4) ❌ → 可先買 SVAQ ✅\nKQC (KQC Quantum, Form S-4) ❌ → 可先買 CHAR ✅",
        reason: "1. SEEQC (SEQC) 處於傳統 S-1 IPO 承銷詢價階段，尚未正式敲鐘掛牌，且 Firstrade 不支援美股 S-1 IPO 新股抽籤申購。\n2. EigenQ (EIGQ) 與 KQC Quantum (KQC) 尚處於 SEC Form S-4 審查與股東投票前階段，新代號尚未啟用。",
        workaround: "• SEQC：須等待 Nasdaq 正式定價掛牌首日開盤後再於次級市場下單。\n• EIGQ / KQC：若欲於合併交割前卡位，可在 Firstrade 直接買入其 SPAC 母體普通股 SVAQ（對應 EigenQ）或 CHAR（對應 KQC）。"
      },
      {
        category: "🚫 Firstrade 平台明文禁止買入之衍生性標的（權證 Warrants / 權利 Rights）",
        statusBadge: "Firstrade 禁止買入",
        statusColor: "text-rose-300 bg-rose-500/15 border-rose-400/25",
        tickers: "HQWWW、PSQLW、INFQ.WS、IONQ.WS、QBTS.WT、ARQQW、SVAQW / EIGQW、CHARR ❌",
        reason: "根據 Firstrade 官方交易規範，平台已全面停止接受任何上市權證 (Warrants，字尾 W / WS / WT) 與權利 (Rights，字尾 R) 的新建買入委託（若原持有僅能以限價單賣出平倉，申請履約須人工收費 $25）。",
        workaround: "在 Firstrade 請一律下單 4 字母普通股（如 HQ、PSQL、INFQ、IONQ、QBTS、ARQQ、SVAQ、CHAR）；若一定要交易高槓桿量子權證，須改用 Interactive Brokers (IBKR) 或 Charles Schwab。"
      },
      {
        category: "🔒 純私有未上市獨角獸（9 家）與海外原股（5 字母 F 尾碼 OTC）",
        statusBadge: "未上市 / 禁止買入",
        statusColor: "text-rose-300 bg-rose-500/15 border-rose-400/25",
        tickers: "PsiQuantum、SandboxAQ、Classiq、QuEra、Atom Computing、Alice & Bob、Riverlane、PQShield、Diraq ❌\n以及所有 5 字母 F 結尾之海外 OTC 原股 ❌",
        reason: "1. 上述 9 家獨角獸尚未向 SEC 遞交公開上市申請，僅於 Forge Global / Nasdaq Private Market 供合格機構交易。\n2. Firstrade 禁止線上買賣 5 字母 F 結尾之外國發行 OTC 股票（平倉須收 $75 清算費）。",
        workaround: "可於 Firstrade 買入其上市母公司或核心戰略股東間接佈局：如透過 GOOGL 參與 QuEra 與 SandboxAQ；透過 MSFT 參與 Atom Computing；透過 NVDA 參與 PsiQuantum 與 QuEra。"
      },
      {
        category: "⚠️ 可正常下單但受「低價股 (<$3 / <$1) 保證金與限價單規則」限制之標的",
        statusBadge: "可下單・限現股/限價",
        statusColor: "text-emerald-300 bg-emerald-500/15 border-emerald-400/25",
        tickers: "LAES (SEALSQ, 現價 ~$1.64) ✅\nXNDU (Xanadu, 現價 ~$2.84) ✅\n其餘 21 檔美股 (IONQ, QNT, QBTS, RGTI, IQMX, INFQ, PSQL, HQ, QUBT, ARQQ, WQEY, 巨頭群) & 3 檔 ETF (QTUM, SPRX, CIBR) 皆可正常下單 ✅",
        reason: "Firstrade 針對股價低於 $3.00 之標的（如 LAES、XNDU）要求 100% 現股保證金（不可融資買進、不可放空）；且一旦股價跌破 $1.00，系統將強制要求「單筆最低買入 100 股、僅限使用限價單 (Limit Order)、且禁止盤前盤後交易」。",
        workaround: "於 Firstrade 下單 LAES、XNDU、ARQQ、WQEY 等小型量子股時，建議直接使用「正規交易時段 (Regular Hours) + 限價單 (Limit Order)」現股買入。"
      }
    ]
  },

  // ============================================================================
  // 3B. PRE-IPO QUANTUM & PQC UNICORN PIPELINE (截至 2026/10 準備上市與未上市獨角獸)
  // ============================================================================
  preIpoPipeline: [
    {
      id: "seeqc",
      name: "SEEQC, Inc.",
      status: "📄 已公開遞交 SEC Form S-1/A 招股書 (File No. 333-297133，衝刺 Nasdaq 掛牌)",
      expectedTicker: "NASDAQ: SEQC (已遞交 S-1/A)",
      expectedTimeline: "2026 Q4 – 2027 Q1",
      latestValuation: "S-1 詢價圈購中 (原 2026/01 S-4 協議估值 ~$1.0B)",
      totalFunding: "$150M+ 私募 + Cantor Fitzgerald & BTIG 領銜承銷 S-1 IPO",
      parentOrBackers: "EQT Ventures、Booz Allen Ventures、LG Technology Ventures、Merck (M Ventures)",
      modality: "超導單磁通量子數位控制晶片 (Digital SFQ Superconducting Control & Readout Chip)",
      flagshipSystem: "10mK 極低溫 3D 堆疊 SFQ 數位控制與讀取晶片（取代室溫龐大微波機櫃）",
      cryptoOrSoftware: "與 NVIDIA 合作極低溫 QPU-GPU 超高速數位互連；S-1 揭露 FY25 營收 $4.16M (+420% YoY)",
      ipoReadinessScore: 95,
      highlights: [
        "【招股書進度】2026 年 6 月 29 日正式向 SEC 遞交傳統 IPO 招股書 Form S-1，並於 2026 年 8 月 25 日合意終止原 Allegro Merger Corp. SPAC 協議，全心由 Cantor 與 BTIG 承銷推進 Nasdaq 直接掛牌 (代號 SEQC)。",
        "【招股書財務揭露】FY2025 營收達 $4.16M（較 FY24 ~$0.8M 暴增 420%），H1 2026 營收 $1.80M (+23.7% YoY)；FY25 淨虧損 $(12.2M)、H1 2026 淨虧損 $(9.61M)。",
        "【招股書風險提示】截至 2026/06/30 帳上現金為 $18.1M、累計赤字 $(65.3M)，審計師出具「繼續經營疑慮 (Going Concern)」提示，亟需透過本次 S-1 IPO 補充資本以擴充紐約超導晶圓廠產能。"
      ]
    },
    {
      id: "eigenq",
      name: "EigenQ, Inc.",
      status: "📄 已公開遞交 SEC Form S-4 招股書 (與 SVAQ 合併，預計 2026 Q4 掛牌)",
      expectedTicker: "NASDAQ: EIGQ (現 SPAC: SVAQ)",
      expectedTimeline: "2026 Q4",
      latestValuation: "$3.0B (Form S-4 備考企業價值 Pro Forma EV)",
      totalFunding: "SVAQ 信託 ~$215M + 上市前 $45M 優先擔保可轉債 + $5M 次順位票據",
      parentOrBackers: "Silicon Valley Acquisition Corp. (NASDAQ: SVAQ) 與機構可轉債投資人",
      modality: "硬體信任根級後量子密碼 (Hardware-Rooted PQC) 與量子安全網路基礎設施",
      flagshipSystem: "NIST PQC 合規硬體安全架構、分散式量子安全通訊與金鑰管理系統",
      cryptoOrSoftware: "鎖定美國國防與關鍵基礎設施之抗量子加密遷移與量子安全通訊網路",
      ipoReadinessScore: 94,
      highlights: [
        "【招股書進度】繼 2026 年 8 月秘密遞件後，於 **2026 年 9 月 28 日正式向 SEC 公開遞交 Form S-4 招股書**，預計 2026 Q4 完成股東投票並更名為 EigenQ Holdings, Inc. (NASDAQ: EIGQ / EIGQW)。",
        "【招股書財務與資本結構】Form S-4 揭露備考企業價值高達 $3.0B；為充實交割前營運資金，於 2026 年 9–10 月陸續簽署 $45M 優先擔保可轉債與 $5M 無擔保票據。",
        "【招股書風險提示】公司於 2025 年成立，仍處於早期商業化與研發虧損階段，$3.0B 估值高度仰賴遠期 PQC 市場預測，投資人需留意可轉債轉股稀釋與 SPAC 贖回率。"
      ]
    },
    {
      id: "kqc-quantum",
      name: "KQC Quantum (Korea Quantum Computing)",
      status: "📄 已簽署最終 SPAC 合併協議・提交 SEC Form S-4 中 (與 CHAR 合併)",
      expectedTicker: "NASDAQ: KQC (現 SPAC: CHAR)",
      expectedTimeline: "2027 H1",
      latestValuation: "投前股權估值 $80M | 備考合併後股權估值 ~$215M",
      totalFunding: "Charlton Aria (CHAR) 信託帳戶 ~$93.5M (設 $30M 最低現金交割門檻)",
      parentOrBackers: "Charlton Aria Acquisition Corp. (NASDAQ: CHAR)、韓國金融與產業創投群",
      modality: "AI 驅動混合量子中介軟體 (Qubiteer™) + 後量子資安審計與 HSM 硬體安全模組",
      flagshipSystem: "Qubiteer™ 跨硬體量子最佳化平台 / QuantumSpan 加密資產盤點與 PQC 遷移系統",
      cryptoOrSoftware: "硬體中立企業級量子應用整合商，已落地韓國鋼鐵、交通與銀行業商業合約",
      ipoReadinessScore: 91,
      highlights: [
        "【招股書進度】2026 年 10 月正式與 Charlton Aria Acquisition Corp. (NASDAQ: CHAR) 簽署最終業務合併協議，正提交 SEC Form S-4 招股書，預計 2027 H1 以代號 KQC 掛牌。",
        "【招股書估值與條款優勢】投前股權估值僅 $80M（每股 $11.00）、備考估值 $215M，定價極為務實；且現有 KQC 股東 **100% 股權留存展延 (100% Rollover)**，搭配 $30M 最低現金交割條件。",
        "【商業實績佐證】已完成浦項鋼鐵 (POSCO Holdings 二次電池材料模擬)、釜山交通公社 (城市軌道排程)、韓國企業銀行 (IBK) 與 LS ITC 等指標型客戶專案。"
      ]
    },
    {
      id: "psiquantum",
      name: "PsiQuantum",
      status: "未上市頭號獨角獸 (Series E 完成，僅於次級私募市場交易)",
      expectedTicker: "尚未掛牌 (預估 2027+ S-1 IPO)",
      expectedTimeline: "2027 – 2028",
      latestValuation: "$7.0B – $10.0B (Series E 估值 $7B，次級私募市場估值破 $10B)",
      totalFunding: "$2.3B+ (含 BlackRock 領投之 $10 億美元 Series E + 美澳政府逾 $11 億補助)",
      parentOrBackers: "BlackRock、Temasek (淡馬錫)、Baillie Gifford、NVIDIA (NVentures)、Microsoft M12、Founders Fund",
      modality: "矽光子容錯量子電腦 (Silicon Photonics - GlobalFoundries 300mm 晶圓廠量產)",
      flagshipSystem: "Omega 光子晶片組 (整合單光子源、超導單光子偵測器與鈦酸鋇 BTO 超高速光開關)",
      cryptoOrSoftware: "專注於一步到位打造百萬量子位元級商用容錯量子電腦 (Utility-Scale FTQC)",
      ipoReadinessScore: 92,
      highlights: [
        "隨著 Quantinuum (QNT) 於 2026 年 6 月完成上市，PsiQuantum 正式成為全球估值最高的「未上市」純量子電腦獨角獸。",
        "跳過 NISQ 小型實驗機階段，直接利用 GlobalFoundries 紐約 Fab 8 標準 12 吋 (300mm) 半導體晶圓廠量產「Omega」矽光子量子晶片。",
        "2025 年初於《Nature》發表晶圓代工廠量產之高良率光量子晶片數據，引入鈦酸鋇 (BTO) 薄膜超低損耗電光開關。",
        "手握全球最大規模的主權政府建造專案：澳洲布里斯本 (A$9.4億，預計 2027 運轉) 與美國芝加哥伊利諾量子園區 ($5億美元州政府補助)。"
      ]
    },
    {
      id: "sandboxaq",
      name: "SandboxAQ",
      status: "未上市準 IPO 獨角獸 (Alphabet 分拆獨立)",
      expectedTicker: "尚未掛牌 (預估 2027 S-1 IPO)",
      expectedTimeline: "2027",
      latestValuation: "$5.75B (Series E 投後估值)",
      totalFunding: "$950M+",
      parentOrBackers: "Alphabet (Google 母公司分拆)、Eric Schmidt (董事長)、NVIDIA、T. Rowe Price、Breyer Capital、Ray Dalio",
      modality: "後量子密碼管理平台 (AQtive Guard) + 大型定量模型 (Large Quantitative Models, LQMs)",
      flagshipSystem: "AQtive Guard (FedRAMP 認證 PQC 自動盤點與修復) / AQBioSim (新藥研發) / AQNav (量子地磁導航)",
      cryptoOrSoftware: "美國國防部、空軍、大型銀行與跨國藥廠採用之企業級 PQC 資安與定量 AI 軟體巨頭",
      ipoReadinessScore: 90,
      highlights: [
        "2022 年自 Google 母公司 Alphabet 獨立分拆，由前 Google 執行長 Eric Schmidt 擔任董事長。",
        "不賭單一量子硬體，而是以「AQtive Guard」切入美國國防部與金融機構的後量子密碼 (PQC) 自動化遷移市場。",
        "開創「大型定量模型 (LQM)」：不同於一般基於文字的 LLM，LQM 基於物理與量子化學方程式，在 GPU 與量子模擬器上進行新藥分子模擬與無 GPS 量子磁力導航 (AQNav)。"
      ]
    },
    {
      id: "classiq",
      name: "Classiq Technologies",
      status: "未上市・華爾街 SPAC / IPO 招股書深入談判中",
      expectedTicker: "洽談掛牌中 (目標估值 $2B–$5B)",
      expectedTimeline: "2026 Q4 – 2027",
      latestValuation: "目標上市估值 $2.0B – $5.0B",
      totalFunding: "$110M+ (HPE、三星、匯豐銀行 HSBC、Intesa Sanpaolo、SoftBank 參投)",
      parentOrBackers: "Hewlett Packard Pathfinder、Samsung Next、HSBC、Entrée Capital、Team8",
      modality: "量子軟體自動化模型合成與電路編譯作業系統 (Quantum Algorithm Design Platform)",
      flagshipSystem: "Classiq Platform (高階功能模型自動轉譯為最佳化量子邏輯閘線路)",
      cryptoOrSoftware: "被譽為「量子界的 Cadence / Synopsys (EDA)」，與 NVIDIA、微軟、AWS 深度整合",
      ipoReadinessScore: 88,
      highlights: [
        "以色列量子軟體龍頭，2026 年正與華爾街投行深入洽談透過 SPAC 合併或傳統 IPO 上市（目標估值 20 億至 50 億美元）。",
        "就像晶片設計需要 EDA 軟體才能排布百億顆電晶體，當量子電腦邁向數千顆量子位元時，人類無法手繪量子邏輯閘，必須仰賴 Classiq 平台自動合成並壓縮量子線路。"
      ]
    },
    {
      id: "quera",
      name: "QuEra Computing",
      status: "未上市高速成長獨角獸 (哈佛/MIT 衍生)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027",
      latestValuation: "$1.5B – $2.0B+",
      totalFunding: "$280M+ (含 Google 與 SoftBank 領投之 $2.3 億美元融資)",
      parentOrBackers: "Google Quantum AI、SoftBank Vision Fund 2、NVIDIA (NVentures)、Rakuten",
      modality: "中性原子 (Neutral Atom - 銣原子 ⁸⁷Rb 動態光學鑷子分區架構)",
      flagshipSystem: "Aquila (256Q on AWS Braket) / 48 邏輯量子位元容錯處理器 (Oberon / Equinox 藍圖)",
      cryptoOrSoftware: "Bloqade (中性原子開源脈衝與橫向邏輯閘編程框架)",
      ipoReadinessScore: 85,
      highlights: [
        "由哈佛大學 Mikhail Lukin 與 MIT 團隊創立，於《Nature》發表震撼全球的「48 顆邏輯量子位元」論文。",
        "分區可重構架構 (Zoned Architecture)：利用光學鑷子在運算中途動態移動整排邏輯量子位元進行橫向糾纏閘 (Transversal Gates)，大幅降低糾錯成本。",
        "同時獲得 Google Quantum AI 與 NVIDIA 兩大巨頭真金白銀入股支持。"
      ]
    },
    {
      id: "atom-computing",
      name: "Atom Computing",
      status: "未上市擴張期 (2026 年中完成 Series C 融資)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027",
      latestValuation: "$1.2B+",
      totalFunding: "$300M+ (2026 年中完成 Series C + 美國商務部 CHIPS Act 補助意向)",
      parentOrBackers: "Microsoft (戰略商用夥伴)、Third Point Ventures、Cisco Investments、DCVC、Innovation Endeavors",
      modality: "中性原子核自旋 (Neutral Atom Nuclear Spin in ¹⁷¹Yb)",
      flagshipSystem: "1,180 實體量子位元光學晶格系統 / 與微軟合作之 Magne 商用邏輯量子電腦 (24–28 邏輯位元)",
      cryptoOrSoftware: "結合 Microsoft Azure Quantum Qubit-Virtualization 系統直接對外銷售整機",
      ipoReadinessScore: 82,
      highlights: [
        "全球首家突破 1,000 顆量子位元大關的通用閘模型公司（1,180 顆中性鐿原子）。",
        "利用鐿-171 (¹⁷¹Yb) 的核自旋編碼量子資訊，相干時間長達 40 秒以上，支援線路中途測量與失落原子即時補充。",
        "與微軟共同創下 24 顆全糾纏邏輯量子位元紀錄，並獲得丹麥 QuNorth 等主權基金商用整機訂單。"
      ]
    },
    {
      id: "alice-and-bob",
      name: "Alice & Bob",
      status: "未上市 (Series B 完成，歐洲玻色貓量子位元龍頭)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027 – 2028",
      latestValuation: "$350M+ (完成 €100M Series B + NVentures 增資)",
      totalFunding: "€130M+ (~$145M)",
      parentOrBackers: "Bpifrance、卡達投資局 (QIA)、NVIDIA (NVentures)、AVP",
      modality: "超導玻色貓態量子位元 (Superconducting Bosonic Cat Qubits)",
      flagshipSystem: "Helium / Boson 系列貓態處理器 → 目標 2030 Graphene 100 邏輯位元系統",
      cryptoOrSoftware: "與 AWS Ocelot 同屬「貓量子位元 (Cat Qubits)」陣營，自主消滅位元翻轉錯誤",
      ipoReadinessScore: 74,
      highlights: [
        "全球最早專注於「玻色貓量子位元」的新創，已實驗證明單顆貓量子位元的位元翻轉壽命可延長至數分鐘級別。",
        "結合 LDPC 糾錯碼後，打造 100 顆高保真邏輯量子位元僅需約 1,500–2,000 顆實體貓量子位元，比傳統表面碼減少最高 60–200 倍硬體面積。"
      ]
    },
    {
      id: "riverlane",
      name: "Riverlane",
      status: "未上市 (Series C 完成，全球量子糾錯 QEC 作業系統霸主)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027",
      latestValuation: "$450M+",
      totalFunding: "$120M+ (含 $75M Series C)",
      parentOrBackers: "Planet First Partners、劍橋大學、英國國家安全戰略投資基金 (NSSIF)、Rigetti 與 Infleqtion 合作夥伴",
      modality: "即時量子糾錯硬體解碼晶片與作業系統 (Deltaflow.OS & Local Clustering Decoder)",
      flagshipSystem: "Deltaflow 專用 FPGA/ASIC 低延遲量子糾錯解碼堆疊",
      cryptoOrSoftware: "量子電腦界的「錯誤校正晶片標準商」，客戶涵蓋 Rigetti、Infleqtion、QuEra、OQC 與國家實驗室",
      ipoReadinessScore: 78,
      highlights: [
        "專攻容錯量子電腦最關鍵的瓶頸——「即時量子糾錯解碼器 (Real-Time QEC Decoder)」。",
        "2025 年底於《Nature Communications》發表 Local Clustering Decoder (LCD)，在 Google Willow 實驗數據集上展示僅 16 微秒的超低解碼延遲與極省面積之 FPGA/ASIC 實作。"
      ]
    },
    {
      id: "pqshield",
      name: "PQShield",
      status: "未上市 (牛津大學衍生 PQC 矽智財龍頭)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027",
      latestValuation: "$300M+",
      totalFunding: "$65M+ (Addition、Chevron Tech Ventures、Legal & General 領投)",
      parentOrBackers: "Addition、Oxford Science Enterprises、Chevron、NXP、AMD 合作夥伴",
      modality: "後量子密碼半導體矽智財 (PQC Hardware & Software IP Cores - NIST FIPS 203/204/205)",
      flagshipSystem: "PQPlatform-Hardware / PQCryptoLib (供應晶片設計商嵌入 SoC 與安全元件)",
      cryptoOrSoftware: "後量子密碼界的「ARM」，授權 PQC 硬體 IP 予 AMD、Microchip、NXP、Collins Aerospace 與 Lattice",
      ipoReadinessScore: 75,
      highlights: [
        "深度參與 NIST 後量子密碼標準制定，提供經過 Common Criteria 與 FIPS 驗證的商業級矽智財 (RTL IP Cores)。",
        "商業模式類似 ARM 的授權費與權利金模式，隨著全球車用晶片、手機 SoC 與資料中心晶片強制內建 NIST PQC，授權收入高速成長。"
      ]
    },
    {
      id: "diraq",
      name: "Diraq",
      status: "未上市 (澳洲矽基自旋量子位元龍頭)",
      expectedTicker: "尚未掛牌",
      expectedTimeline: "2027 – 2028",
      latestValuation: "$300M+",
      totalFunding: "$135M+ (含澳洲國家重建基金 NRFC 與 Allectus Capital 投資)",
      parentOrBackers: "新南威爾斯大學 (UNSW)、Allectus Capital、National Reconstruction Fund (NRFC)、GlobalFoundries 夥伴",
      modality: "矽基 CMOS 量子點電子自旋 (Silicon CMOS Spin Qubits)",
      flagshipSystem: "直接利用標準半導體 CMOS 電晶體製程於單一晶片製造數百萬顆矽自旋量子位元",
      cryptoOrSoftware: "與 GlobalFoundries 及 imec 合作，使用現有成熟矽晶圓廠製程生產超過 99% 保真度之自旋位元",
      ipoReadinessScore: 72,
      highlights: [
        "每顆矽自旋量子位元尺寸僅約 50–100 奈米（比超導量子位元小上萬倍），理論上可在單一平方公分晶片塞入數百萬顆量子位元。",
        "已在標準 CMOS 代工產線實證超過 99% 的雙量子位元閘保真度，且可在較高溫度（~1K 甚至更高）運作，大幅降低冷卻成本。"
      ]
    }
  ],

  // ============================================================================
  // 4. LANDMARK ACADEMIC PAPERS (2024-2026 必讀關鍵量子論文資料庫)
  // ============================================================================
  papersLibrary: [
    {
      id: "paper-willow",
      title: "Quantum error correction below the surface code threshold",
      authors: "Google Quantum AI (Hartmut Neven, Julian Kelly et al.)",
      institution: "Google (GOOGL)",
      journal: "Nature 636, 308–315",
      date: "2024-12-09",
      category: "量子糾錯 (QEC)",
      url: "https://www.nature.com/articles/s41586-024-08449-y",
      keyMetrics: "105 Qubits | 碼距 d=3→5→7 | 邏輯錯誤率抑制因子 Λ = 2.14 | T1 ≈ 100 µs",
      investmentTakeaway: "正式終結「量子位元越多、雜訊越大」的質疑。實驗證實只要雙量子閘保真度突破門檻（>99.9%），擴大表面碼網格就能指數級壓低錯誤率，確立 2029–2030 百萬位元容錯電腦的可行性。"
    },
    {
      id: "paper-dwave-science",
      title: "Beyond-Classical Computation in Quantum Simulation",
      authors: "Andrew D. King, Alberto Nocera, Mohammad H. Amin et al.",
      institution: "D-Wave Quantum (QBTS)",
      journal: "Science (Vol. 387, Issue 6739)",
      date: "2025-03-12",
      category: "實用量子優勢 (Quantum Advantage)",
      url: "https://www.science.org/doi/10.1126/science.ado6285",
      keyMetrics: "Advantage2 Zephyr 拓撲 | 數分鐘完成 3D 自旋玻璃淬火動力學 vs Frontier 超算 10⁶ 年",
      investmentTakeaway: "不同於無實際商業價值的隨機線路取樣 (RCS)，這是首次在真實物理磁性材料非平衡相變模擬上擊敗全球最強古典超級電腦 Frontier，直接帶動 D-Wave 主機銷售訂單爆發。"
    },
    {
      id: "paper-msft-majorana",
      title: "Interferometric single-shot parity measurement in InAs–Al hybrid devices",
      authors: "Microsoft Azure Quantum (Chetan Nayak et al.)",
      institution: "Microsoft (MSFT)",
      journal: "Nature",
      date: "2025-02-19",
      category: "拓撲量子位元 (Topological)",
      url: "https://www.nature.com/articles/s41586-024-08445-2",
      keyMetrics: "Majorana 1 拓撲導體 | 微秒級單發奇偶校驗測量 | 外部磁場與閘極電壓拓撲相區驗證",
      investmentTakeaway: "展示微軟耗資數十億美元研發的「拓撲導體 (Topoconductor)」讀取機制，成功入選美國國防高等研究計畫署 (DARPA) US2QC 計畫最終階段。"
    },
    {
      id: "paper-aws-ocelot",
      title: "Hardware-efficient quantum error correction via concatenated bosonic qubits",
      authors: "AWS Center for Quantum Computing (Oskar Painter, Fernando Brandão et al.)",
      institution: "Amazon AWS (AMZN)",
      journal: "Nature / arXiv:2409.13025",
      date: "2025-02-27",
      category: "玻色貓量子位元 (Cat Qubits)",
      url: "https://arxiv.org/abs/2409.13025",
      keyMetrics: "Ocelot 晶片 | 位元翻轉壽命趨近 1 秒 | 減少 90% 糾錯實體量子位元開銷",
      investmentTakeaway: "證明透過非對稱雜訊抑制（貓態抑制位元翻轉 + 一維重複碼修相位翻轉），可將建造容錯量子電腦的硬體與冷卻成本大幅削減 90%。"
    },
    {
      id: "paper-ibm-gross",
      title: "High-threshold and low-overhead fault-tolerant quantum memory",
      authors: "Sergey Bravyi, Andrew Cross, Jay Gambetta et al.",
      institution: "IBM Quantum (IBM)",
      journal: "Nature 627, 778–782",
      date: "2024-03-27",
      category: "量子糾錯 (qLDPC)",
      url: "https://www.nature.com/articles/s41586-024-07107-7",
      keyMetrics: " [[144, 12, 12]] Gross Code | 288 實體位元編碼 12 邏輯位元 | 節省 ~90% 實體位元",
      investmentTakeaway: "IBM 2029 Starling 容錯系統的核心理論基石，透過雙變數自行車低密度奇偶校驗碼 (qLDPC) 打破傳統 2D 表面碼的高昂實體位元消耗。"
    },
    {
      id: "paper-ionq-walkingcat",
      title: "The Walking Cat Architecture: Fault-Tolerant Quantum Computing with Trapped Ions",
      authors: "IonQ Fault-Tolerant Architecture Team",
      institution: "IonQ (IONQ)",
      journal: "arXiv:2604.19481",
      date: "2026-04-22",
      category: "離子阱容錯架構",
      url: "https://arxiv.org/abs/2604.19481",
      keyMetrics: "2,514 實體離子 → 110 邏輯量子位元 | 每日執行 1,000,000 次 T-Gate | 22:1 壓縮比",
      investmentTakeaway: "發揮離子阱「全連通」優勢，搭配高編碼率 qLDPC 碼，僅需約 2,500 顆實體離子即可達成超過百顆邏輯量子位元之深層化學與密碼演算法。"
    },
    {
      id: "paper-quera-logical",
      title: "Logical quantum processor based on reconfigurable atom arrays",
      authors: "Dolev Bluvstein, Mikhail D. Lukin et al.",
      institution: "Harvard / MIT / QuEra Computing",
      journal: "Nature 626, 58–65",
      date: "2024-02-01",
      category: "中性原子邏輯位元",
      url: "https://www.nature.com/articles/s41586-023-06927-3",
      keyMetrics: "280 實體中性原子 → 48 邏輯量子位元 | 橫向糾纏閘 (Transversal CNOT) | 動態光學鑷子分區",
      investmentTakeaway: "引爆全球中性原子投資熱潮的代表作，證明光學鑷子可整排移動原子實現無需額外接線的 3D/非局域糾錯碼。"
    },
    {
      id: "paper-xanadu-aurora",
      title: "Scaling and networking a modular photonic quantum computer",
      authors: "Xanadu Quantum Technologies Team",
      institution: "Xanadu (XNDU)",
      journal: "Nature",
      date: "2025-01-22",
      category: "模組化光量子",
      url: "https://www.nature.com/articles/s41586-024-08406-9",
      keyMetrics: "Aurora 系統 | 35 顆光子晶片 | 13 公里光纖互連 | 4 機櫃室溫模組化運行",
      investmentTakeaway: "展示光量子電腦如何像傳統雲端資料中心一樣，透過標準光纖將多個機櫃串聯擴充為單一大型量子電腦。"
    },
    {
      id: "paper-rgti-coupler",
      title: "High-Fidelity Adiabatic CZ Gates with Symmetric Floating Tunable Couplers",
      authors: "Rigetti Hardware Engineering Team",
      institution: "Rigetti Computing (RGTI)",
      journal: "arXiv:2604.05048",
      date: "2026-04-08",
      category: "超導硬體設計",
      url: "https://arxiv.org/abs/2604.05048",
      keyMetrics: "Cepheus 108Q 架構 | 24–28 ns 閘時間 | 99.9% 原型雙量子閘保真度 | 殘留 ZZ = 0",
      investmentTakeaway: "解決固定頻率超導位元間的串擾問題，使 Rigetti 模組化拼接晶片能穩定輸出高保真原生 CZ 閘以支援表面碼。"
    },
    {
      id: "paper-nist-pqc",
      title: "NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA) Standards",
      authors: "National Institute of Standards and Technology (NIST) & IBM / PQShield Co-Authors",
      institution: "NIST / IBM / SEALSQ / Cloudflare",
      journal: "Federal Information Processing Standards",
      date: "2024-08-13",
      category: "後量子密碼標準 (PQC)",
      url: "https://csrc.nist.gov/projects/post-quantum-cryptography",
      keyMetrics: "ML-KEM (晶格金鑰封裝) | ML-DSA (晶格數位簽章) | SLH-DSA (無狀態雜湊簽章)",
      investmentTakeaway: "全球資訊安全史上最大規模的底層密碼學汰換法令，強制引爆 2025–2035 年數百億美元的軟硬體升級預算。"
    }
  ],

  // ============================================================================
  // 5. TECHNICAL & ECONOMIC INDICATORS GLOSSARY (技術與經濟指標深度解析)
  // ============================================================================
  indicatorsGuide: {
    technical: [
      {
        name: "雙量子位元閘保真度 (2-Qubit Gate Fidelity)",
        formula: "F_{2Q} = 1 - \\epsilon_{2Q}",
        benchmark: "容錯門檻：>99.0% (Surface Code) | 頂尖商業水準：99.9%–99.99% (Three to Four Nines)",
        meaning: "量子電腦最重要的單一硬體品質指標！單純堆疊實體量子位元數量若保真度不足，只會產生垃圾雜訊。當保真度從 99.0% 提升至 99.9%（錯誤率從 1% 降至 0.1%），組成 1 顆邏輯量子位元所需的實體位元數量可從數千顆驟降至百顆以內。",
        leaders: "IonQ / Oxford Ionics (99.99%), Quantinuum QNT Helios (99.921%), Google Willow (99.9%+), Rigetti Prototype (99.9%)"
      },
      {
        name: "邏輯量子位元 (Logical Qubits) vs. 實體量子位元 (Physical Qubits)",
        formula: "N_{\\text{logical}} = \\frac{N_{\\text{physical}}}{\\text{Code Overhead } (d^2 \\text{ or qLDPC ratio})}",
        benchmark: "NISQ 時代看實體位元；2025–2030 容錯時代只看「具備糾錯能力的邏輯量子位元」與「邏輯錯誤率抑制因子 (Λ > 1)」",
        meaning: "實體量子位元極易受熱雜訊與電磁干擾而退相干。必須將數十至數百顆實體位元透過糾錯碼（如表面碼 Surface Code 或 qLDPC 碼）編碼為 1 顆「邏輯量子位元」，才能執行百萬至十億步深度的實用化學與密碼破解演算法。",
        leaders: "QuEra (48 Logical Qubits), Microsoft + Atom Computing (24 Logical Qubits), Quantinuum QNT (12–50 Logical Qubits), Google Willow (d=7 Below-Threshold)"
      },
      {
        name: "演算法量子位元 (#AQ) 與量子體積 (Quantum Volume, QV)",
        formula: "\\text{QV} = 2^n, \\quad \\#\\text{AQ} = N \\implies \\text{可成功執行 } N \\text{ 寬度、} N^2 \\text{ 深度之量子線路}",
        benchmark: "IonQ Tempo: #AQ 64 | Quantinuum QNT H2: QV 2²¹ (2,097,152)",
        meaning: "衡量量子系統整體表現（綜合考慮位元數、連通度、保真度與編譯器效率）的系統級指標。#AQ 每增加 1，代表可探索的希爾伯特空間翻倍；當 #AQ 達到 64，傳統超級電腦已無法以暴力法精確模擬其狀態向量。",
        leaders: "IonQ (#AQ 64), Quantinuum QNT (QV 2²¹)"
      },
      {
        name: "邏輯閘速度 (Gate Speed) 與 CLOPS (每秒線路層操作數)",
        formula: "\\text{Throughput} \\propto \\frac{1}{\\tau_{\\text{gate}} + \\tau_{\\text{reset}} + \\tau_{\\text{readout}}}",
        benchmark: "超導與光量子：10–50 ns | 中性原子：200–500 ns | 離子阱：100–600 µs",
        meaning: "決定量子電腦「算得多快」。離子阱雖然保真度與連通度極高，但單次閘操作較慢（微秒級）；超導與光量子速度極快（奈秒級），但需克服跨晶片連通與低溫控制線散熱限制。",
        leaders: "IBM Nighthawk R2 (>100,000 circuits/sec), Rigetti Cepheus (24–28 ns CZ gate), IQM Radiance (20–40 ns), Xanadu Aurora (GHz 光脈衝)"
      },
      {
        name: "NIST 後量子密碼安全等級 (FIPS 203 / 204 / 205 Security Levels)",
        formula: "X + Y > Z \\quad (\\text{Mosca's Theorem})",
        benchmark: "ML-KEM-768 (AES-192 等級) / ML-KEM-1024 & ML-DSA-87 (CNSA 2.0 最高機密 AES-256 等級)",
        meaning: "當資料保密年限 (X) + 企業遷移升級時間 (Y) > 容錯量子電腦破解 RSA 的時間 (Z)，駭客現在側錄的加密流量未來將被完全解開 (Harvest Now, Decrypt Later)。因此全球政府要求 2030 年前全面完成遷移。",
        leaders: "IBM (演算法發明人), Cloudflare (38% 全球流量部署), SEALSQ (QS7001 硬體晶片), Lattice (CNSA 2.0 FPGA)"
      }
    ],
    economic: [
      {
        name: "簽約訂單 (Bookings) 與剩餘履約義務 (RPO Backlog)",
        formula: "\\text{RPO} = \\text{已簽約未認列合約總額}",
        benchmark: "IonQ 營收 $130M | Quantinuum FY26E $28M–$32M (Oracle 購機) | D-Wave RPO $40.7M (+668% YoY) | SEALSQ 管道 >$225M",
        meaning: "由於量子電腦主機（如 Quantinuum Helios、D-Wave Advantage2、IQM Radiance、Rigetti Novera）單價高達數百萬至兩千萬美元，從簽約、機房低溫改建到驗收認列 GAAP 營收往往需 6–18 個月，因此 Bookings 與 RPO 是領先觀察真實需求的最關鍵財務指標。",
        leaders: "IonQ (IONQ), Quantinuum (QNT), D-Wave Quantum (QBTS), IQM (IQMX), SEALSQ (LAES)"
      },
      {
        name: "現金儲備與燒錢跑道 (Cash War Chest & Liquidity Runway)",
        formula: "\\text{Runway (Years)} = \\frac{\\text{Cash & Marketable Securities}}{\\text{Annual Free Cash Flow Burn}}",
        benchmark: "安全水位：>3 年跑道（足以支撐至 2028–2030 容錯商業化拐點而不需折價增資稀釋股權）",
        meaning: "量子硬體研發屬於極高資本密集產業。2025–2026 年純量子股完成大規模 IPO 與機構增資：IonQ 握有 $3.3B、Quantinuum (QNT) 握有 $1.95B+、QCi 握有 $1.3B、Rigetti 握有 $541M、Infleqtion 握有 $520M、SEALSQ 握有 $490M，消除了短期破產風險。",
        leaders: "IonQ ($3.3B), Quantinuum QNT ($1.95B+), QCi ($1.3B), Rigetti ($541M), Infleqtion ($520M), SEALSQ ($490M)"
      },
      {
        name: "政府國防標案與非稀釋性補助佔比 (DARPA QBI / CHIPS Act)",
        formula: "\\text{Non-Dilutive Funding} = \\text{DARPA Stage A/B/C} + \\text{CHIPS Act} + \\text{AFRL / Sovereign Deals}",
        benchmark: "DARPA 量子基準測試倡議 (QBI) 單一入選廠商最高可獲數億美元研發經費",
        meaning: "獲得美國國防部 (DARPA、AFRL)、能源部 (DOE) 或歐洲/日本主權超算中心採購，不僅提供不稀釋股東權益的現金流，更代表其底層硬體通過國家級物理學家的最嚴苛盡職調查。",
        leaders: "Microsoft, PsiQuantum, Quantinuum (QNT), IonQ (IONQ), Rigetti (RGTI), IQM (IQMX), Pasqal (PSQL)"
      }
    ]
  },

  // ============================================================================
  // 6. MODALITY CLASSIFICATION & INTRA-CATEGORY PEER ARENA (技術流派分類與同類橫向評比)
  // ============================================================================
  modalityArena: [
    {
      id: "trapped-ion",
      name: "1. 離子阱量子電腦 (Trapped-Ion)",
      tagline: "保真度與全連通之王 — 唯一誕生兩家百億級上市龍頭的黃金賽道",
      physicsPrinciple: "利用超高真空腔體內的電磁場懸浮帶電原子離子（如 ¹³³Ba⁺、¹³⁷Ba⁺、¹⁷¹Yb⁺），透過精準雷射或晶片內建微波天線 (EQC) 操控超精細結構能階，並藉由庫侖靜電斥力實現任意兩顆離子間的集體振動模式糾纏。",
      operatingTemp: "室溫真空腔體至 ~4K–10K 低溫晶片阱（無需 10mK 巨型稀釋製冷機）",
      corePros: "天然全連通 (All-to-All Connectivity)、雙量子位元閘保真度全球最高 (99.92%–99.99%)、相干時間長達數十秒至數分鐘、支援高編碼率 qLDPC 糾錯碼。",
      coreCons: "單次邏輯閘速度較慢 (100–600 µs，比超導慢約千倍)；單一線性阱超過百顆離子後需靠「QCCD 離子穿梭」或「光子互連」跨模組擴充。",
      verdictSummary: "離子阱是目前商業營收最高、邏輯量子位元品質最穩定的技術流派。IONQ 在「標準矽晶圓代工微波控制 (EQC) + QKD 網路併購」領先；QNT (Quantinuum) 則在「98Q Helios 整機平均保真度 + 容錯邏輯閘實證 + 量子化學軟體」拔得頭籌。",
      peers: [
        {
          ticker: "IONQ",
          name: "IonQ, Inc.",
          status: "NYSE 上市 ($12.73B)",
          architecture: "鋇離子 ¹³³Ba⁺ (Tempo) + Oxford Ionics 電控晶片 (EQC) + Lightsynq 光子互連",
          fidelityAndQubits: "99.99% (EQC 峰值) / 99.9% (Tempo) | #AQ 64 | Walking Cat 110 邏輯位元藍圖",
          commercialTraction: "FY25 營收 $130.0M (+202%) | 現金 ~$3.3B | 併購 IDQ 切入 QKD",
          scores: { fidelity: 99, scalability: 93, commercial: 97, cash: 99, total: 96 },
          peerRank: "🏆 同類併購生態與營收規模冠軍",
          comparisonNote: "收購 Oxford Ionics 後徹底解決過去雷射光學對準難以擴充至萬顆離子的痛點，可用英飛凌標準半導體產線製造離子阱，且帳上 $3.3B 現金傲視全場。"
        },
        {
          ticker: "QNT",
          name: "Quantinuum Inc.",
          status: "NASDAQ 上市 ($9.60B, 2026/06 IPO)",
          architecture: "鋇離子 ¹³⁷Ba⁺ 運算 + 鐿離子 ¹⁷¹Yb⁺ 同情冷卻 (QCCD 動態環形穿梭 Helios)",
          fidelityAndQubits: "99.921% (98Q 全系統平均) | QV 2²¹ | 已實證 12–50 邏輯位元 (錯誤率降 800 倍)",
          commercialTraction: "FY26E $28M–$32M (Q2 +279%) | 現金 ~$1.95B+ | Oracle 直接採購 Helios 主機",
          scores: { fidelity: 98, scalability: 91, commercial: 93, cash: 95, total: 95 },
          peerRank: "🏆 同類整機容錯成熟度與性價比冠軍",
          comparisonNote: "在大型整機 (98Q Helios) 的全系統實測保真度與主動量子糾錯演示上領先全球；市值 ($9.6B) 低於 IonQ ($12.7B)，具備相對估值優勢。"
        },
        {
          ticker: "HON",
          name: "Honeywell International",
          status: "NASDAQ 上市 ($148B 工業母公司)",
          architecture: "控股 Quantinuum (QNT) 過半股權 + 提供超高真空離子阱 MEMS 晶圓代工",
          fidelityAndQubits: "共享 Quantinuum Helios 98Q 技術成果 + 自研航太量子慣性導航感測器",
          commercialTraction: "集團營收 $39.5B | 享有 QNT 持股市值與航太國防量子感測雙重收益",
          scores: { fidelity: 95, scalability: 90, commercial: 94, cash: 98, total: 92 },
          peerRank: "🛡️ 低波動藍籌母公司首選",
          comparisonNote: "適合不敢承受純量子股單日劇烈波動、希望領取穩定股息同時參與 Quantinuum 成長的保守型資金。"
        }
      ]
    },
    {
      id: "superconducting",
      name: "2. 超導邏輯閘量子電腦 (Superconducting Gate-Model)",
      tagline: "奈秒級極速與表面碼容錯先鋒 — 科技巨頭重金押注的主流賽道",
      physicsPrinciple: "在接近絕對零度 (~10–15 mK) 下，電流通過鋁/鈮/鉭超導約瑟夫森接面形成無電阻非線性諧振器 (Transmon)，利用微波脈衝以 20–50 奈秒超高速操控人造原子能階。",
      operatingTemp: "10–15 mK (必須配置昂貴的液態氦稀釋製冷機 Dilution Refrigerator)",
      corePros: "邏輯閘速度極快 (20–50 ns，比離子阱快上千倍)、半導體微影製程相容度高、Google Willow 已於 2024 年底在《Nature》實證跨越表面碼容錯門檻。",
      coreCons: "僅支援平面鄰近位元耦合（需大量 SWAP 閘或發展雙變數 qLDPC / 星狀共振腔）、極低溫冷卻同軸電纜散熱限制單一製冷機位元上限。",
      verdictSummary: "巨頭組由 Google (Willow 表面碼霸主) 與 IBM (qLDPC Gross Code 與 Qiskit 生態霸主) 雙雄爭霸；純量子上市股則由歐洲整機出貨王 IQM (IQMX) 與美國模組化拼接代表 Rigetti (RGTI) 正面交鋒。",
      peers: [
        {
          ticker: "GOOGL",
          name: "Alphabet (Google Quantum AI)",
          status: "NASDAQ 巨頭 ($2,620B)",
          architecture: "Willow 105Q 平面方形格點 + 可調耦合器",
          fidelityAndQubits: "99.9%+ (2Q 錯誤率 <0.1%) | 全球首證 d=3→5→7 邏輯錯誤率指數減半 (Λ=2.14)",
          commercialTraction: "集團無限現金流支持 | 戰略投資中性原子 QuEra",
          scores: { fidelity: 98, scalability: 94, commercial: 90, cash: 100, total: 96 },
          peerRank: "👑 超導物理與表面碼糾錯絕對標竿",
          comparisonNote: "Willow 晶片是目前人類在超導量子糾錯上最嚴謹、最領先的實驗成果，T1 相干時間提升至 ~100 µs。"
        },
        {
          ticker: "IBM",
          name: "IBM Corporation",
          status: "NYSE 巨頭 ($218B)",
          architecture: "Heron R3 (156Q) & Nighthawk R2 方形格點 + Quantum System Two 模組化機櫃",
          fidelityAndQubits: "99.8% 保真度 | Nighthawk R2 每秒 >10 萬線路 | qLDPC Gross Code 省 90% 實體位元",
          commercialTraction: "累積量子簽約突破 $1B+ | Qiskit 全球市佔第一 | 主導 3 項 NIST PQC 標準",
          scores: { fidelity: 95, scalability: 96, commercial: 99, cash: 98, total: 96 },
          peerRank: "👑 超導商業化簽約額與軟體生態總冠軍",
          comparisonNote: "以雙變數自行車碼 (Gross Code) 解決超導表面碼太耗實體位元的弱點，2029 Starling 系統直指 200 邏輯位元。"
        },
        {
          ticker: "IQMX",
          name: "IQM Quantum Computers",
          status: "NASDAQ 上市 ($4.42B, 2026/07 上市)",
          architecture: "IQM Radiance (54Q / 150Q) + IQM Star 中心諧振腔非局域耦合架構",
          fidelityAndQubits: "99.5%–99.7% 保真度 | 150 實體位元 | 星狀拓撲支援高效率 qLDPC 糾錯",
          commercialTraction: "營收 $35M+ (+115%) | 德國 LRZ、芬蘭 VTT、西班牙與亞洲國家超算中心整機出貨王",
          scores: { fidelity: 91, scalability: 90, commercial: 92, cash: 88, total: 90 },
          peerRank: "🏆 純超導股本地端整機銷售冠軍",
          comparisonNote: "相比 Rigetti，IQM 在歐洲與亞洲國家級超算中心的整機交付營收規模更大，且擁有 IQM Star 長程耦合專利。"
        },
        {
          ticker: "RGTI",
          name: "Rigetti Computing",
          status: "NASDAQ 上市 ($4.08B)",
          architecture: "Cepheus-1-108Q (4x 晶片模組化拼接) + Novera 9Q + ABAA 製程",
          fidelityAndQubits: "99.5% (36Q) / 99.0% (108Q) / 99.9% (24ns 原型) | 絕熱 CZ 原生閘",
          commercialTraction: "年化營收 ~$19.2M (Q2 +185%) | 現金 $541.3M (零負債) | 廣達入股 + CHIPS 法案支持",
          scores: { fidelity: 90, scalability: 91, commercial: 86, cash: 92, total: 89 },
          peerRank: "⚡ 美國本土純超導模組化拼接首選",
          comparisonNote: "現金部位 ($541M) 比 IQM 更雄厚且為美國本土國防/CHIPS 法案核心受惠者，多晶片拼接技術具長期擴展優勢。"
        },
        {
          ticker: "SEEQC (未上市)",
          name: "SEEQC",
          status: "Pre-IPO 私有 (~$1.0B 估值，2026/08 終止原 SPAC)",
          architecture: "超導單磁通量子 (SFQ) 10mK 數位控制晶片 (與 QPU 3D 異質整合)",
          fidelityAndQubits: "非獨立 QPU 競爭者，而是替超導 QPU 解決『千條同軸電纜散熱瓶頸』之低溫控制晶片",
          commercialTraction: "與 NVIDIA、IBM、Booz Allen 深度合作",
          scores: { fidelity: 89, scalability: 95, commercial: 82, cash: 80, total: 86 },
          peerRank: "🔧 超導極低溫數位控制晶片獨特軍火商",
          comparisonNote: "任何超導電腦要從 1,000 位元擴至 100,000 位元都必須將控制電路搬進冷卻機內，SEEQC 掌握此關鍵 SFQ 專利。"
        }
      ]
    },
    {
      id: "neutral-atom",
      name: "3. 中性原子量子電腦 (Neutral-Atom)",
      tagline: "千位元高擴展性與動態光學鑷子黑馬 — 2024–2026 學術突破最密集的流派",
      physicsPrinciple: "利用雷射光學晶格與可移動光學鑷子 (Optical Tweezers) 在真空玻璃腔內排列不帶電的銣 (⁸⁷Rb)、鍶 (⁸⁸Sr) 或鐿 (¹⁷¹Yb) 原子。平時原子互不干擾（相干時間極長），需執行邏輯閘時才用雷射激發至高能階「里德堡態 (Rydberg State)」產生偶極交互作用。",
      operatingTemp: "室溫真空腔體（透過雷射多普勒與蒸發冷卻原子本身，機房無需大型液態氦製冷機）",
      corePros: "單一腔體極易擴充至 1,000–10,000 顆原子、光學鑷子可在運算中途「整排移動原子」直接執行橫向糾纏邏輯閘 (Transversal Gates)。",
      coreCons: "雙量子閘保真度 (~99.5%) 目前略低於離子阱與頂尖超導；原子裝填與螢光成像讀取速度較慢（毫秒級）。",
      verdictSummary: "目前呈現「兩家已上市 (INFQ, PSQL) + 兩家未上市頂級獨角獸 (QuEra, Atom Computing)」的四強格局。INFQ 靠量子原子鐘商業變現最強；PSQL 估值最便宜且稱霸歐洲；QuEra 與 Atom Computing 則在邏輯量子位元數 (48Q & 24Q) 領先。",
      peers: [
        {
          ticker: "INFQ",
          name: "Infleqtion (ColdQuanta)",
          status: "NYSE 上市 ($1.98B, 2026/02 上市)",
          architecture: "Sqale 1,600Q 中性原子陣列 + Tiqker 光學原子鐘 + SuperstaQ 編譯器",
          fidelityAndQubits: "99.5% 保真度 | 1,600 實體原子位元 | 脈衝級編譯優化",
          commercialTraction: "營收 $38.0M (+85%) | 現金 ~$520M | 美英澳國防無 GPS 導航原子鐘大單",
          scores: { fidelity: 90, scalability: 94, commercial: 94, cash: 92, total: 93 },
          peerRank: "🏆 已上市中性原子營收與國防感測雙棲王",
          comparisonNote: "同時擁有中性原子電腦與即刻變現的商用光學原子鐘，帳上 $520M 現金讓其在公開市場最具底氣。"
        },
        {
          ticker: "PSQL",
          name: "Pasqal Holding SA",
          status: "NASDAQ 上市 ($1.20B, 2026/08 上市)",
          architecture: "Orion / Fresnel 1,110+ 中性銣/鍶原子陣列 (類比 + 數位邏輯閘雙模)",
          fidelityAndQubits: "99.5% 保真度 | 1,110 實體原子 | 2026–2027 推進百顆邏輯位元",
          commercialTraction: "營收 $26.5M (+110%) | 現金 $360M+ | 法德國家超算中心與沙烏地 Aramco 主機交付",
          scores: { fidelity: 90, scalability: 93, commercial: 91, cash: 89, total: 91 },
          peerRank: "🏆 諾貝爾獎背書與最高性價比中性原子股",
          comparisonNote: "共同創辦人為諾貝爾獎得主 Alain Aspect，市值僅 $1.20B（含 $360M 現金），是佈局中性原子最便宜的上市門票。"
        },
        {
          ticker: "QuEra (未上市)",
          name: "QuEra Computing",
          status: "Pre-IPO 獨角獸 ($1.5B–$2.0B+ 估值)",
          architecture: "哈佛/MIT 動態分區重構架構 (Zoned Architecture: 儲存區 / 糾纏區 / 讀出區)",
          fidelityAndQubits: "99.55% 保真度 | 全球最高 48 顆邏輯量子位元實證 (《Nature》)",
          commercialTraction: "獲 Google Quantum AI 與 SoftBank 領投 $2.3 億 | AWS Braket 主力中性原子機",
          scores: { fidelity: 94, scalability: 96, commercial: 89, cash: 90, total: 94 },
          peerRank: "👑 中性原子邏輯位元與容錯架構學術之王",
          comparisonNote: "48 邏輯量子位元論文奠定其在容錯中性原子的龍頭地位，未來一旦 IPO 必成機構瘋搶標的。"
        },
        {
          ticker: "Atom (未上市)",
          name: "Atom Computing",
          status: "Pre-IPO 獨角獸 ($1.2B+ 估值)",
          architecture: "中性鐿原子 (¹⁷¹Yb) 核自旋量子位元 (相干時間 >40 秒)",
          fidelityAndQubits: "99.5%+ | 1,180 實體位元 | 與微軟合作創下 24 顆全糾纏邏輯量子位元",
          commercialTraction: "與微軟聯合銷售商用整機 Magne (獲丹麥 QuNorth 主權採購) | 2026 完成 Series C",
          scores: { fidelity: 93, scalability: 95, commercial: 90, cash: 88, total: 92 },
          peerRank: "👑 微軟 Azure Quantum 欽點商用硬體夥伴",
          comparisonNote: "核自旋相干時間超長且支援線路中途失落原子即時補充，與微軟深度綁定帶來強大商用出海口。"
        }
      ]
    },
    {
      id: "photonic",
      name: "4. 光量子電腦 (Photonic Quantum Computing)",
      tagline: "標準晶圓代工廠量產與室溫光纖網路化 — 直通百萬量子位元資料中心",
      physicsPrinciple: "以光子 (Photon) 作為量子位元，利用氮化矽 (SiN)、矽光子或薄膜鈮酸鋰 (TFLN) 波導晶片進行分束干涉與電光調變，透過單光子偵測或連續變數壓縮態 (GKP States) 執行運算。",
      operatingTemp: "核心運算晶片與光纖網路為「完全室溫」；僅超導奈米線單光子偵測器 (SNSPD) 需 ~1.5K–4K 輕度冷卻（QUBT 則完全室溫）",
      corePros: "光子在室溫光纖中完全沒有熱退相干問題、可直接利用台積電/格羅方德 12 吋晶圓廠量產、天生具備透過電信光纖串聯多台機櫃的能力。",
      coreCons: "光子在波導與光纖接頭中的「光學損耗 (Photon Loss)」是最大敵人；通用閘模型需仰賴極高效率單光子源與超高速電光開關。",
      verdictSummary: "光量子陣營分為三大子路線：PsiQuantum（未上市，12吋晶圓廠離散單光子融合理論）、Xanadu (XNDU，已上市，連續變數 GKP 態 + PennyLane 軟體)、以及 QCi (QUBT，已上市，室溫非線性光學熵最佳化 + TFLN 代工)。",
      peers: [
        {
          ticker: "PsiQuantum (未上市)",
          name: "PsiQuantum",
          status: "Pre-IPO 頭號獨角獸 ($7B–$10B 估值)",
          architecture: "GlobalFoundries 300mm 晶圓廠量產 Omega 矽光子晶片 + 鈦酸鋇 (BTO) 超高速光開關",
          fidelityAndQubits: "Fusion-Based QC 容錯架構 | 跳過小型機，直接建造芝加哥與布里斯本百萬位元資料中心",
          commercialTraction: "募資逾 $2.3B (BlackRock, NVIDIA) + 美澳政府逾 $11 億建廠補助",
          scores: { fidelity: 92, scalability: 98, commercial: 88, cash: 97, total: 95 },
          peerRank: "👑 全球估值最高未上市量子獨角獸",
          comparisonNote: "唯一真正把量子晶片放進標準 12 吋半導體代工廠大規模流片的公司，一步到位鎖定百萬位元容錯系統。"
        },
        {
          ticker: "XNDU",
          name: "Xanadu Quantum Technologies",
          status: "NASDAQ / TSX 上市 ($925M, 2026/03 上市)",
          architecture: "Aurora 4 機櫃光纖模組化系統 + 連續變數 GKP 玻色壓縮態 + PennyLane 軟體",
          fidelityAndQubits: "99.4%+ | 84Q 模組化 (35 顆光子晶片 + 13km 光纖互連登上《Nature》)",
          commercialTraction: "營收 $21.0M (+92%) | 現金 $460M (佔市值近 50%) | PennyLane 統治全球 QML 生態",
          scores: { fidelity: 90, scalability: 95, commercial: 90, cash: 91, total: 92 },
          peerRank: "🏆 已上市通用光量子與 QML 軟體首選",
          comparisonNote: "市值僅 $9.25 億卻坐擁 $4.6 億現金與《Nature》認證的 Aurora 機櫃架構，同時掌握 PennyLane 軟體護城河。"
        },
        {
          ticker: "QUBT",
          name: "Quantum Computing Inc. (QCi)",
          status: "NASDAQ 上市 ($1.50B)",
          architecture: "Dirac-3 室溫非線性光學熵運算機 + 亞利桑那 Tempe 6 吋薄膜鈮酸鋰 (TFLN) 晶圓廠",
          fidelityAndQubits: "專用型高維度光脈衝耗散最佳化 (非通用邏輯閘) | 100% 室溫免冷卻",
          commercialTraction: "FY26E $20M–$25M | 現金 ~$1.3B (佔市值逾 85%) | 獲 NASA Goddard 與 Langley 合約",
          scores: { fidelity: 84, scalability: 88, commercial: 89, cash: 96, total: 89 },
          peerRank: "🏆 美國本土 TFLN 光子晶圓代工與高現金比代表",
          comparisonNote: "投資核心在於其高達 $1.3B 的現金部位與全美首座商用 TFLN 光子晶圓廠（同時受惠 AI 光收發模組與量子光學）。"
        }
      ]
    },
    {
      id: "cat-topological",
      name: "5. 玻色貓態與拓撲量子位元 (Cat Qubits & Topological)",
      tagline: "硬體級物理糾錯革命 — 將容錯量子電腦硬體成本砍掉 90% 的降維打擊",
      physicsPrinciple: "傳統量子位元需同時修正「位元翻轉 (Bit-flip, X錯誤)」與「相位翻轉 (Phase-flip, Z錯誤)」，導致 1 顆邏輯位元需消耗上千顆實體位元。玻色貓態 (Cat Qubits) 利用微波共振腔中相位相反的相干態疊加，在物理層自主消滅位元翻轉；拓撲量子位元則利用馬約拉納零能模 (MZM) 編織非阿貝爾任意子，從拓撲幾何層面免疫局部干擾。",
      operatingTemp: "10–20 mK 極低溫",
      corePros: "將量子糾錯所需的實體位元與冷卻控制線開銷暴降 90% 以上，是通往緊湊型百萬位元容錯電腦的捷徑。",
      coreCons: "技術難度極高：拓撲導體材料製備嚴苛，玻色貓態則剛完成首代多晶片概念驗證。",
      verdictSummary: "由兩大雲端霸主微軟 (MSFT — Majorana 1 拓撲晶片) 與亞馬遜 (AMZN — Ocelot 玻色貓態晶片) 領軍，加上法國新創 Alice & Bob。",
      peers: [
        {
          ticker: "MSFT",
          name: "Microsoft (Majorana 1)",
          status: "NASDAQ 巨頭 ($3,480B)",
          architecture: "砷化銦-鋁 (InAs-Al) 拓撲導體異質結構 (馬約拉納零能模 MZMs)",
          fidelityAndQubits: "8Q 拓撲核心晶片登上《Nature》(2025/02) | 單晶片百萬位元藍圖 | 入選 DARPA 最終階段",
          commercialTraction: "Azure Quantum 同時整合 Quantinuum 與 Atom Computing 邏輯位元服務全球企業",
          scores: { fidelity: 94, scalability: 99, commercial: 95, cash: 100, total: 96 },
          peerRank: "👑 拓撲量子位元全球唯一霸主",
          comparisonNote: "歷時 17 年研發的 Majorana 1 一旦完成千位元陣列擴展，將改寫整個量子硬體競爭規則。"
        },
        {
          ticker: "AMZN",
          name: "Amazon AWS (Ocelot)",
          status: "NASDAQ 巨頭 ($2,360B)",
          architecture: "鉭超導微腔玻色貓態量子位元 (Bosonic Cat Qubits) + 一維外部相位糾錯碼",
          fidelityAndQubits: "位元翻轉壽命趨近 1 秒 (提升千倍) | 減少 90% 糾錯實體位元開銷 (《Nature》2025/02)",
          commercialTraction: "AWS Braket 為全球最大量子雲平台入口",
          scores: { fidelity: 93, scalability: 95, commercial: 94, cash: 100, total: 95 },
          peerRank: "👑 玻色貓態糾錯晶片雲端巨頭",
          comparisonNote: "Ocelot 證明 AWS 能以 1/10 的硬體成本在資料中心部署容錯量子伺服器。"
        },
        {
          ticker: "Alice & Bob (未上市)",
          name: "Alice & Bob",
          status: "Pre-IPO 獨角獸 (~$350M+ 估值)",
          architecture: "Helium / Graphene 超導玻色貓態處理器 + LDPC 糾錯碼",
          fidelityAndQubits: "單顆貓量子位元位元翻轉壽命達數分鐘級別 | 目標 2,000 實體位元造出 100 邏輯位元",
          commercialTraction: "完成 €100M Series B 融資，獲 NVIDIA NVentures 與法國國開行支持",
          scores: { fidelity: 92, scalability: 93, commercial: 82, cash: 85, total: 88 },
          peerRank: "🏆 純玻色貓態新創技術先驅",
          comparisonNote: "專注於貓量子位元時間最久的純新創團隊，技術指標與 AWS Ocelot 並駕齊驅。"
        }
      ]
    },
    {
      id: "annealing",
      name: "6. 量子退火與專用組合最佳化 (Quantum Annealing)",
      tagline: "不需等待 2030 年 — 今日已大規模商轉並獲《Science》認證量子優勢",
      physicsPrinciple: "不執行通用邏輯閘，而是將複雜商業最佳化問題（物流路徑、排班、飛彈防禦分派、自旋玻璃材料）映射為伊辛模型 (Ising Model / QUBO) 的能量地景，利用量子穿隧效應直接穿越高窄能量障壁找到全域最優解。",
      operatingTemp: "15 mK (D-Wave 超導退火) 或 室溫 (QCi 光學耗散最佳化)",
      corePros: "量子位元數已達 4,800–7,000+ 顆、對雜訊容忍度高、已能處理百萬變數級別真實企業與國防問題。",
      coreCons: "屬於專用型系統，無法執行 Shor 大數分解演算法或通用化學分子模擬。",
      verdictSummary: "D-Wave (QBTS) 在此賽道擁有絕對壟斷地位，2025 年《Science》論文更讓其從商業最佳化跨足基礎材料物理模擬。",
      peers: [
        {
          ticker: "QBTS",
          name: "D-Wave Quantum Inc.",
          status: "NYSE 上市 ($4.65B)",
          architecture: "Advantage2 (Zephyr 20向連通拓撲, 4,800+ Qubits) + Dual-Rail 邏輯閘雙軌研發",
          fidelityAndQubits: "能量尺度 +40%、雜訊降 4 倍 | 《Science》實證幾分鐘完成 Frontier 超算需百萬年之磁性模擬",
          commercialTraction: "FY25 營收 $24.6M | H1'26 訂單 Bookings $35.5M (+1,120%) | RPO 積壓訂單 $40.7M",
          scores: { fidelity: 92, scalability: 96, commercial: 96, cash: 89, total: 94 },
          peerRank: "👑 全球量子退火唯一霸主與訂單成長王",
          comparisonNote: "2026 上半年訂單暴增逾 11 倍（含 FAU $2,000 萬美元購機案），是短期商業訂單爆發力最強的純量子股。"
        }
      ]
    },
    {
      id: "hybrid-software-qec",
      name: "7. 混合量子超算、QEC 解碼與自動化編譯軟體層",
      tagline: "不論哪種物理路線勝出都必買的「量子鏟子與作業系統」",
      physicsPrinciple: "容錯量子電腦運作時，每秒產生數十 GB 的奇偶校驗症候群數據 (Syndrome Data)，必須在量子位元退相干前（數微秒內）由超低延遲 GPU 或專用 FPGA/ASIC 解碼器完成錯誤修正；同時上層演算法需透過自動化編譯器將高階數學模型壓縮為底層脈衝。",
      operatingTemp: "室溫資料中心機櫃 (透過超低延遲光纖/同軸線與 QPU 連接)",
      corePros: "完全免疫「單一硬體物理路線押錯寶」風險，毛利率高，且隨所有量子硬體位元數成長而倍數受惠。",
      coreCons: "純量子軟體小型股短期營收規模仍受限於全球已安裝 QPU 總台數。",
      verdictSummary: "硬體解碼與混合超算由 NVIDIA (NVDA) 與未上市 Riverlane 統治；純量子編譯軟體則由 2026/03 新上市的 Horizon Quantum (HQ) 與準上市獨角獸 Classiq 領軍。",
      peers: [
        {
          ticker: "NVDA",
          name: "NVIDIA (CUDA-Q & NVAQC)",
          status: "NASDAQ 巨頭 ($3,880B)",
          architecture: "CUDA-Q 混合編程平台 + cuQuantum 模擬器 + NVQLink 亞微秒級 QPU-GPU 互連",
          fidelityAndQubits: "支援所有主流 QPU (Quantinuum, IonQ, QuEra, IQM, Rigetti) 之 AI 神經網路即時糾錯解碼",
          commercialTraction: "全球國家級量子超算中心標配 | NVentures 入股 Quantinuum、PsiQuantum、QuEra",
          scores: { fidelity: 99, scalability: 100, commercial: 100, cash: 100, total: 99 },
          peerRank: "👑 全球量子混合超算與解碼算力絕對壟斷者",
          comparisonNote: "每一台容錯量子電腦背後都必須配屬一整排 NVIDIA Grace Blackwell 超算負責即時解碼與混合運算。"
        },
        {
          ticker: "HQ",
          name: "Horizon Quantum Holdings",
          status: "NASDAQ 上市 ($677M, 2026/03 上市)",
          architecture: "Triple Alpha 自動化量子軟體開發環境 (將 C++/Python 自動合成為量子演算法)",
          fidelityAndQubits: "支援跨超導、離子阱、中性原子之自動邏輯閘合成與最高 70% 線路深度壓縮",
          commercialTraction: "營收 $8.5M (+140%) | 現金 $145M | 上市後股價穩健站上 ~$13.20",
          scores: { fidelity: 89, scalability: 93, commercial: 86, cash: 86, total: 88 },
          peerRank: "🏆 美股唯一已上市純量子編譯器軟體股",
          comparisonNote: "市值僅 $6.77 億美元，為公開市場稀缺的「純量子軟體 (Hardware-Agnostic)」投資標的。"
        },
        {
          ticker: "Classiq (未上市)",
          name: "Classiq Technologies",
          status: "Pre-IPO 洽談上市中 ($2B–$5B 目標估值)",
          architecture: "高階功能模型量子電路自動合成平台（量子界的 Cadence / Synopsys EDA）",
          fidelityAndQubits: "可為數千位元複雜量子演算法自動生成最省邏輯閘之壓縮線路",
          commercialTraction: "獲 HPE、三星、HSBC、SoftBank 投資，全球數百家企業與大學採用",
          scores: { fidelity: 92, scalability: 96, commercial: 91, cash: 88, total: 92 },
          peerRank: "👑 未上市量子 EDA 軟體頭號獨角獸",
          comparisonNote: "正與華爾街投行洽談以 20 億至 50 億美元估值上市，將與 HQ 形成軟體雙雄。"
        },
        {
          ticker: "Riverlane (未上市)",
          name: "Riverlane",
          status: "Pre-IPO 獨角獸 ($450M+ 估值)",
          architecture: "Deltaflow.OS 即時量子糾錯作業系統 + Local Clustering Decoder (LCD 專用 FPGA/ASIC)",
          fidelityAndQubits: "於 Google Willow 數據集實證 16 µs 超低延遲即時表面碼解碼 (《Nature Comms》)",
          commercialTraction: "完成 $75M Series C | Rigetti、Infleqtion、QuEra、OQC 與英國國家實驗室採用",
          scores: { fidelity: 95, scalability: 95, commercial: 89, cash: 87, total: 92 },
          peerRank: "👑 專用量子糾錯解碼晶片 (QEC ASIC) 霸主",
          comparisonNote: "專攻 QEC 解碼延遲痛點，是多家硬體商邁向容錯時代的共同底層供應商。"
        }
      ]
    },
    {
      id: "pqc-qkd",
      name: "8. 後量子密碼 (PQC) 與量子加密 (QKD / QRNG) 陣營評比",
      tagline: "2026–2030 法規強制換機潮 — 比量子電腦硬體更早收割百億美元資安預算",
      physicsPrinciple: "分為兩大技術流派：(1) 後量子密碼學 (PQC)：基於晶格數學難題 (NIST FIPS 203 ML-KEM / FIPS 204 ML-DSA) 或雜湊函數 (FIPS 205)，可運行於現有網際網路與安全晶片；(2) 量子物理加密 (QKD / QRNG)：利用單光子不可複製定理分發金鑰或利用量子穿隧產生真亂數。",
      operatingTemp: "室溫晶片、伺服器、邊緣網路與低軌衛星",
      corePros: "受美國 CNSA 2.0、NIST 標準與歐盟 CRA 法規強制要求於 2030 年前全面升級，商業訂單已經進入高速認列期。",
      coreCons: "純軟體對稱金鑰小廠若無硬體信任根或大型雲端通路護城河，易受免費開源 NIST 演算法擠壓。",
      verdictSummary: "純 PQC 半導體首選 SEALSQ (LAES，現金高於市值且成長 131%)；伺服器 PQC FPGA 首選 Lattice (LSCC)；雲端與網路 PQC 首選 Cloudflare (NET)、IBM 與 Palo Alto (PANW)。",
      peers: [
        {
          ticker: "LAES",
          name: "SEALSQ Corp",
          status: "NASDAQ 上市 ($440M 純 PQC 晶片股)",
          architecture: "QS7001 RISC-V 硬體內嵌 NIST FIPS 203 (ML-KEM) & FIPS 204 (ML-DSA) 加速引擎 + QVault TPM",
          fidelityAndQubits: "Common Criteria EAL5+ & FIPS 140-3 Level 3 認證 | 硬體加速較純軟體快 10–50 倍",
          commercialTraction: "H1'26 營收 $11.15M (+131%) | 現金 ~$490M (高於總市值 $440M！) | 訂單管道 >$225M",
          scores: { fidelity: 94, scalability: 94, commercial: 92, cash: 99, total: 95 },
          peerRank: "🏆 純後量子密碼 (PQC) 半導體首選標的",
          comparisonNote: "唯一純度 100% 且帳上現金 ($490M) 大於總市值 ($440M) 的高速成長後量子晶片股，具備極高安全邊際。"
        },
        {
          ticker: "NET / PANW / CRWD",
          name: "Cloudflare / Palo Alto / CrowdStrike",
          status: "NYSE & NASDAQ 資安三巨頭",
          architecture: "NET: 全球 38% 網頁流量預設 X25519MLKEM768 | PANW: PQC 密碼轉換代理防火牆 | CRWD: 端點 CBOM 盤點",
          fidelityAndQubits: "符合 NIST FIPS 203/204 與 IETF RFC 9370 / 8784 企業級零信任標準",
          commercialTraction: "年營收數十億美元、自由現金流利潤率 >30%，直接收割全球財星 500 大企業 PQC 升級預算",
          scores: { fidelity: 96, scalability: 99, commercial: 99, cash: 98, total: 98 },
          peerRank: "👑 企業級網路與端點 PQC 商業落地霸主",
          comparisonNote: "大型機構配置後量子資安最穩健、流動性最佳的獲利成長股組合。"
        },
        {
          ticker: "LSCC",
          name: "Lattice Semiconductor",
          status: "NASDAQ 上市 ($8.6B 半導體大廠)",
          architecture: "MachXO5-NX TDQ 低功耗安全控制 FPGA + Sentry 5.0 韌體堆疊",
          fidelityAndQubits: "完整支援美國國安局 CNSA 2.0 (ML-DSA-87 / ML-KEM / LMS) 伺服器主板安全開機 (PFR)",
          commercialTraction: "年營收 $580M | 北美四大雲端 CSP 與 AI 伺服器主板硬體信任根標配",
          scores: { fidelity: 95, scalability: 95, commercial: 94, cash: 90, total: 94 },
          peerRank: "🏆 AI 伺服器主板抗量子 FPGA 硬體霸主",
          comparisonNote: "FPGA 的可重新編程特性完美契合企業『密碼敏捷性 (Crypto-Agility)』硬體換機潮。"
        },
        {
          ticker: "WKEY / ARQQ",
          name: "WISeKey ($62M) & Arqit ($270M)",
          status: "NASDAQ 小型加密純股",
          architecture: "WKEY: 控股 SEALSQ + WISeSat 低軌抗量子衛星 | ARQQ: QuantumCloud 動態對稱金鑰 SaaS",
          fidelityAndQubits: "太空硬體信任根 (WKEY) vs. RFC 8784 對稱金鑰協商 (ARQQ)",
          commercialTraction: "WKEY H1'26 合併營收 $11.4M (+116%) 具深度母子折價；ARQQ FY26 營收 ~$1.0M 轉型純軟體",
          scores: { fidelity: 86, scalability: 88, commercial: 83, cash: 85, total: 85 },
          peerRank: "⚡ 小市值高彈性太空 PQC 與對稱加密代表",
          comparisonNote: "WKEY 市值僅 $6,200 萬美元卻控股市值 $4.4 億的 SEALSQ，具備顯著控股折價；ARQQ 則看電信與國防 SaaS 轉機。"
        }
      ]
    }
  ],

  // ============================================================================
  // 7. QUANTUM TECH POPULAR-SCIENCE GUIDE & PAPER-BACKED EVOLUTIONARY LINEAGES
  //    (量子電腦與密碼各技術路線科普原理、完整演進時間軸與里程碑論文佐證)
  // ============================================================================
  techLineages: [
    {
      id: "trapped-ion",
      name: "1. 離子阱量子電腦 (Trapped-Ion Quantum Computing)",
      shortName: "離子阱 (Trapped-Ion)",
      representativeStocks: "IONQ (IonQ), QNT (Quantinuum), HON (Honeywell)",
      representativePreIpo: "Universal Quantum, EleQtron",
      analogy: "想像在超高真空中，用電磁場把一排帶正電的原子（如鐿離子 ¹⁷¹Yb⁺ 或鋇離子 ¹³⁷Ba⁺）像珍珠項鍊般懸浮在半空中，再用極度精準的雷射脈衝或晶片電極去「撥動」每一顆原子並讓它們透過庫侖靜電斥力產生共振糾纏。",
      whyEasyToUnderstand: "大自然創造的每一顆同位素原子都是 100% 完全一模一樣的「天然完美量子位元」，沒有人工製造晶片的尺寸公差或材料缺陷，因此離子阱天生擁有全球最高的閘保真度（>99.99%）與長達數十秒的記憶時間（相干時間）。",
      howItWorks: {
        qubitEncoding: "利用單一帶電離子內部極其穩定的兩個超精細電子能階（Hyperfine Clock States）分別代表 |0⟩ 與 |1⟩。",
        gateMechanism: "照射特定頻率的雷射（或透過 EQC 矽晶片電極施加微差微波電壓），使兩顆離子同時產生微小集體振動（聲子模態 Phonon Mode），藉此完成雙量子位元糾纏閘 (Mølmer–Sørensen Gate)。",
        readoutMethod: "狀態選擇性螢光讀出法：打入一束探測雷射，若離子處於 |1⟩ 態會發出數千顆光子（亮態），處於 |0⟩ 態則完全不發光（暗態），由高靈敏度光電感測器拍照即可達到 99.99% 讀出準確率。"
      },
      engineeringSpecs: {
        coherenceTime: "10 秒 – 100+ 秒 (極長)",
        twoQubitFidelity: "99.921% (QNT Helios) – 99.9915% (IonQ Oxford Ionics)",
        gateSpeed: "100 – 600 微秒 (µs)",
        connectivity: "全連通 (All-to-All，任意兩顆離子可直接糾纏)",
        operatingEnv: "超高真空腔體 (UHV)，溫和低溫 (4K–10K) 或室溫"
      },
      currentBottleneck: "邏輯閘操作速度（微秒級）比超導位元（奈秒級）慢約 1,000 倍；且單一線性離子阱超過 50–100 顆離子後振動模態過於擁擠，必須依賴「QCCD 二維晶片離子穿梭」與「光子互連網路 (Photonic Interconnects)」跨晶片擴展。",
      timeline: [
        {
          year: "1995",
          stage: "理論與實驗奠基 (諾貝爾獎級突破)",
          milestone: "Cirac 與 Zoller 提出利用冷卻離子集體振動模態實作受控邏輯閘之理論；同年 NIST 的 Monroe 與 Wineland 團隊在實驗室成功演示人類史上第一個離子量子邏輯閘（Wineland 後獲 2012 諾貝爾物理獎）。",
          paperTitle: "Quantum Computations with Cold Trapped Ions / Demonstration of a Fundamental Quantum Logic Gate",
          journal: "Physical Review Letters 74, 4091 & PRL 75, 4714 (1995)",
          paperUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4091"
        },
        {
          year: "2021",
          stage: "QCCD 量子電荷耦合穿梭架構問世",
          milestone: "Honeywell Quantum Solutions（後合併為 Quantinuum）在《Nature》發表 QCCD 架構，證實可在晶片表面透過電極將離子自由移動、交換位置並進行中途測量而不破壞量子相干性。",
          paperTitle: "Demonstration of the trapped-ion quantum CCD computer architecture",
          journal: "Nature 592, 209–213 (2021)",
          paperUrl: "https://www.nature.com/articles/s41586-021-03318-4"
        },
        {
          year: "2023",
          stage: "非阿貝爾拓撲任意子首次在離子阱合成",
          milestone: "Quantinuum 與哈佛大學團隊在 H2 處理器上首次透過動態線路創造並編織非阿貝爾任意子 (Non-Abelian Anyons)，證明離子阱高連通度可模擬極複雜拓撲物態。",
          paperTitle: "Creation of Non-Abelian Topological Order and Anyons on a Trapped-Ion Processor",
          journal: "Nature 618, 264–270 (2023)",
          paperUrl: "https://www.nature.com/articles/s41586-023-05954-4"
        },
        {
          year: "2024",
          stage: "邏輯量子位元錯誤率比實體位元降低 800 倍",
          milestone: "Quantinuum (QNT) 與微軟 (MSFT) 利用 H2 處理器與主動症候群萃取技術，創造出邏輯錯誤率比底層實體位元低 800 倍的容錯邏輯量子位元，開啟 Level-2 彈性量子計算。",
          paperTitle: "Demonstration of logical qubits and repeated error correction with 800x error reduction",
          journal: "arXiv:2404.02280 / Microsoft & Quantinuum (2024)",
          paperUrl: "https://arxiv.org/abs/2404.02280"
        },
        {
          year: "2025–2026",
          stage: "邁入「四個九 (99.99%)」保真度與 48 邏輯位元商轉",
          milestone: "IonQ 收購之 Oxford Ionics 透過標準半導體製程 EQC 電子量子控制創下 99.9915% 雙閘保真度世界紀錄；Quantinuum 發布 98 位元 Helios 系統（支援 48 顆糾錯邏輯位元）並於 2026 年 6 月完成 Nasdaq 上市 (QNT)。",
          paperTitle: "High-Fidelity Electronic Qubit Control in Standard CMOS Silicon Ion Traps & Helios 98Q Architecture",
          journal: "Physical Review Letters / Quantinuum Technical Whitepaper (2025–2026)",
          paperUrl: "https://arxiv.org/abs/2407.07694"
        }
      ]
    },
    {
      id: "superconducting",
      name: "2. 超導邏輯閘量子電腦 (Superconducting Circuit Qubits)",
      shortName: "超導邏輯閘 (Superconducting)",
      representativeStocks: "GOOGL (Google), IBM, IQMX (IQM), RGTI (Rigetti)",
      representativePreIpo: "SEEQC, Oxford Quantum Circuits (OQC)",
      analogy: "如果離子阱是「撥動天然原子」，超導量子電腦就是「用半導體微影技術在藍寶石或矽晶圓上蝕刻出微型人造原子」。當冷卻到接近絕對零度（10 毫開爾文，比外太空還冷 200 倍）時，鋁或鈮金屬線圈電阻瞬間歸零，電流可以同時順時針與逆時針流動，形成量子疊加態。",
      whyEasyToUnderstand: "超導量子位元本質上是微波頻段（4–8 GHz）的非線性 LC 諧振電路。因為直接透過同軸電纜輸入微波脈衝操控，它的邏輯閘速度高達 20–50 奈秒（每秒可執行上千萬次操作），是所有固態硬體中運算時脈最快、與現代半導體製造最契合的主流路線。",
      howItWorks: {
        qubitEncoding: "利用「約瑟夫森結 (Josephson Junction，兩層超導體夾一層奈米氧化鋁絕緣層)」構成 Transmon 非線性諧振器，將最低兩個量子化微波能量態定義為 |0⟩ 與 |1⟩。",
        gateMechanism: "透過微波控制線送入數十奈秒的精準微波脈衝（單量子閘），並透過可調諧耦合器 (Tunable Coupler，如 Google Willow / Rigetti Ankaa) 或交叉共振 (Cross-Resonance，如 IBM Heron) 讓相鄰位元產生糾纏。",
        readoutMethod: "色散微波讀出法 (Dispersive Readout)：每個量子位元連接一個讀出諧振腔，發射微波探測反射相位的微小偏移即可高速判讀 |0⟩ 或 |1⟩。"
      },
      engineeringSpecs: {
        coherenceTime: "100 微秒 – 500 微秒 (µs)",
        twoQubitFidelity: "99.5% (RGTI) – 99.8% (IBM Heron) – 99.9% (Google Willow)",
        gateSpeed: "20 – 50 奈秒 (ns，極快)",
        connectivity: "平面鄰近網格連通 (Nearest-Neighbor Grid / Heavy-Hex)",
        operatingEnv: "10–15 mK 極低溫稀釋製冷機 (Dilution Refrigerator)"
      },
      currentBottleneck: "因為是人造微小電路，每顆位元的微小製造差異會導致頻率飄移與兩能階系統缺陷 (TLS Defects)；此外每顆位元都需要獨立微波同軸線通往極低溫腔體，單一製冷機受限於冷卻功率與配線密度（約數千顆位元上限），需靠「多晶片模組拼接 (Chiplets)」與「極低溫 CMOS 控制晶片 (如 SEEQC)」突破。",
      timeline: [
        {
          year: "1999–2007",
          stage: "從首顆超導位元到 Transmon 抗雜訊架構誕生",
          milestone: "1999 年日本 NEC 中村泰信演示首顆超導庫侖島位元；2007 年耶魯大學 Schoelkopf 與 Girvin 團隊發明 Transmon 架構，透過並聯大電容將電荷雜訊敏感度指數級壓低，成為今日 Google、IBM、Rigetti 的共同底座。",
          paperTitle: "Charge-insensitive qubit design derived from the Cooper pair box (Transmon)",
          journal: "Physical Review A 76, 042319 (2007)",
          paperUrl: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.76.042319"
        },
        {
          year: "2012",
          stage: "表面碼 (Surface Code) 容錯糾錯理論確立",
          milestone: "Fowler、Martinis 等人完整建立二維鄰近連通網格上的「表面碼」量子糾錯藍圖，證明只要實體閘保真度超過 ~99% 門檻，即可透過二維棋盤陣列合成任意長壽命的邏輯位元。",
          paperTitle: "Surface codes: Towards practical large-scale quantum computation",
          journal: "Physical Review A 86, 032324 (2012)",
          paperUrl: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.86.032324"
        },
        {
          year: "2019",
          stage: "Google Sycamore 53 位元首次演示「量子霸權」",
          milestone: "Google Quantum AI 在《Nature》發表 53 位元 Sycamore 處理器，於 200 秒內完成隨機線路取樣任務，開啟 NISQ（含雜訊中尺度量子）世代。",
          paperTitle: "Quantum supremacy using a programmable superconducting processor",
          journal: "Nature 574, 505–510 (2019)",
          paperUrl: "https://www.nature.com/articles/s41586-019-1666-5"
        },
        {
          year: "2024.03",
          stage: "IBM 發表高效率 qLDPC (Gross Code) 量子糾錯碼",
          milestone: "IBM 在《Nature》提出雙變數腳踏車低密度奇偶校驗碼 (Bivariate Bicycle qLDPC Codes)，僅需 288 顆實體超導位元即可保護 12 顆邏輯位元，比傳統表面碼節省近 90% 硬體開銷。",
          paperTitle: "High-threshold and low-overhead fault-tolerant quantum memory",
          journal: "Nature 627, 778–782 (2024)",
          paperUrl: "https://www.nature.com/articles/s41586-024-07107-7"
        },
        {
          year: "2024.12–2026",
          stage: "Google Willow 跨越表面碼糾錯門檻 (Below-Threshold QEC)",
          milestone: "Google 105 位元 Willow 晶片在《Nature》實證：當表面碼網格從 3x3 擴展至 5x5 與 7x7 時，邏輯錯誤率每次減半（Λ = 2.14），並使邏輯位元壽命超越單一實體位元 2.4 倍，正式打通邁向百萬位元容錯主機的物理道路。",
          paperTitle: "Quantum error correction below the surface code threshold",
          journal: "Nature 636, 308–315 (2024/2025)",
          paperUrl: "https://www.nature.com/articles/s41586-024-08449-y"
        }
      ]
    },
    {
      id: "neutral-atom",
      name: "3. 中性原子陣列量子電腦 (Neutral-Atom Tweezers & Rydberg Arrays)",
      shortName: "中性原子 (Neutral-Atom)",
      representativeStocks: "INFQ (Infleqtion), PSQL (Pasqal)",
      representativePreIpo: "QuEra Computing, Atom Computing, Planqc",
      analogy: "想像用上千道高度聚焦的雷射光束當作「微米級光學夾子（Optical Tweezers，2018 諾貝爾物理獎技術）」，在玻璃真空腔裡抓起上千顆不帶電的銣 (⁸⁷Rb)、鍶 (⁸⁸Sr) 或鐿 (¹⁷¹Yb) 原子排成整齊棋盤。更神奇的是，在計算過程中，光學夾子可以直接載著原子在空中穿梭移動去跟遠處的原子配對糾纏！",
      whyEasyToUnderstand: "因為中性原子平常不帶電，彼此可以靠得很近卻互不干擾，單一玻璃腔體就能輕鬆塞進 1,000 到 10,000 顆原子；而當需要兩顆原子產生邏輯閘時，只需用雷射把電子激發到極大的「里德堡態 (Rydberg State)」，原子半徑瞬間膨脹數百倍產生強烈偶極交互作用（里德堡阻塞效應），完成超高速橫向糾纏。",
      howItWorks: {
        qubitEncoding: "利用鹼土金屬原子（如 ¹⁷¹Yb）極穩定的原子核自旋態 (Nuclear Spin) 或鹼金屬原子的超精細基態編碼 |0⟩ 與 |1⟩，相干時間長達數十秒。",
        gateMechanism: "里德堡阻塞閘 (Rydberg Blockade Gate)：用紫外/藍光雷射將相鄰兩顆原子激發至高主量子數里德堡態，利用強偶極作用在 200–400 奈秒內完成雙量子閘；並透過聲光偏轉器 (AOD) 移動光學鑷子實現全區動態連通。",
        readoutMethod: "CMOS/EMCCD 高速科學相機對整個二維原子陣列進行無損螢光成像拍照，一次同時讀出上千顆原子的狀態。"
      },
      engineeringSpecs: {
        coherenceTime: "5 秒 – 40+ 秒",
        twoQubitFidelity: "99.5% – 99.55% (QuEra / Atom / Infleqtion)",
        gateSpeed: "200 – 500 奈秒 (ns)",
        connectivity: "動態可重構連通 (藉由光學鑷子空中穿梭實現全區橫向邏輯閘)",
        operatingEnv: "光學磁光阱雷射冷卻 (真空腔體外圍為室溫光學桌，無需大型極低溫製冷機)"
      },
      currentBottleneck: "原子裝填 (Atom Loading) 與相機螢光讀出時間較慢（毫秒級），導致每秒鐘能執行的線路重複率 (Shot Rate) 低於超導；目前正透過「連續原子補充池 (Continuous Reloading)」與「分區無損讀出」克服。",
      timeline: [
        {
          year: "2000",
          stage: "里德堡阻塞 (Rydberg Blockade) 量子邏輯閘理論提出",
          milestone: "Jaksch、Cirac、Zoller 與 Lukin 等人提出利用冷中性原子的里德堡偶極阻塞效應執行快速雙量子位元糾纏閘，奠定中性原子量子計算的物理基礎。",
          paperTitle: "Fast Quantum Gates for Neutral Atoms",
          journal: "Physical Review Letters 85, 2208 (2000)",
          paperUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.85.2208"
        },
        {
          year: "2017",
          stage: "51 顆中性原子無缺陷光學鑷子陣列問世",
          milestone: "哈佛大學 Mikhail Lukin 與サSubir Sachdev 團隊（QuEra 創辦團隊）與法國 Institut d'Optique 團隊（Pasqal 創辦團隊）利用聲光偏轉器實現無缺陷二維/一維中性原子陣列。",
          paperTitle: "Probing many-body dynamics on a 51-atom quantum simulator",
          journal: "Nature 551, 579–584 (2017)",
          paperUrl: "https://www.nature.com/articles/nature24622"
        },
        {
          year: "2022",
          stage: "動態移動光學鑷子實現可重構量子處理器",
          milestone: "Bluvstein 等人在《Nature》展示在保持量子相干性的前提下，用光學鑷子載著糾纏原子在二維空間高速穿梭移動，徹底打破固態晶片固定布線的限制。",
          paperTitle: "A quantum processor based on coherent transport of entangled atom arrays",
          journal: "Nature 604, 451–456 (2022)",
          paperUrl: "https://www.nature.com/articles/s41586-022-04592-6"
        },
        {
          year: "2023.12",
          stage: "48 顆邏輯量子位元與橫向容錯邏輯閘震驚學界",
          milestone: "哈佛大學、QuEra、MIT 與 NIST 團隊利用 280 顆實體中性原子同時編碼出 48 顆邏輯量子位元，並透過整排移動原子在單一步驟完成橫向 CNOT 邏輯閘，登上《Nature》。",
          paperTitle: "Logical quantum processor based on reconfigurable atom arrays",
          journal: "Nature 626, 58–65 (2024)",
          paperUrl: "https://www.nature.com/articles/s41586-023-06927-3"
        },
        {
          year: "2024.11–2026",
          stage: "突破千顆實體原子與 24 顆全糾纏邏輯位元商轉",
          milestone: "Atom Computing 與微軟演示 24 顆邏輯位元糾纏與邏輯魔術態傳送；Infleqtion (NYSE: INFQ) 與 Pasqal (NASDAQ: PSQL) 於 2026 年相繼在美股掛牌並推進 1,600+ 原子陣列。",
          paperTitle: "Demonstration of 24 logical qubits with logical entanglement on neutral-atom arrays",
          journal: "arXiv:2411.10423 (Atom Computing & Microsoft, 2024/2025)",
          paperUrl: "https://arxiv.org/abs/2411.10423"
        }
      ]
    },
    {
      id: "photonic",
      name: "4. 光量子電腦與矽光子互連 (Photonic & Linear Optical / GKP Quantum Computing)",
      shortName: "光量子 (Photonic)",
      representativeStocks: "XNDU (Xanadu), QUBT (Quantum Computing Inc.)",
      representativePreIpo: "PsiQuantum ($7B–$10B), Quandela, ORCA Computing",
      analogy: "其他技術路線都是把量子位元「關在原地」等待操控，光量子電腦則是讓光子（光的最小粒子）在奈米矽光子晶片波導與標準電信光纖中以光速飛行，透過分光鏡 (Beam Splitters)、相位調變器與單光子偵測器在飛行途中直接完成量子干涉與糾錯。",
      whyEasyToUnderstand: "光子在室溫光纖中完全不會受到環境熱雜訊干擾（無需把整個運算光路放進 mK 級製冷機），而且光子晶片可以直接交由 GlobalFoundries 等成熟 12 吋半導體晶圓廠大批量製造，再像現代 AI 伺服器一樣用光纖把上千個機櫃串聯成百萬位元量子資料中心！",
      howItWorks: {
        qubitEncoding: "分為兩大主流：① 雙軌離散光子編碼（Dual-Rail Encoding，如 PsiQuantum，以光子走哪一條波導代表 |0⟩ 或 |1⟩）；② 連續變數 GKP 壓縮光態編碼（Gottesman–Kitaev–Preskill Squeezed States，如 Xanadu，在單一光模態的相空間網格中內建抗損耗糾錯）。",
        gateMechanism: "基於測量的量子計算 (MBQC / Fusion-Based QC)：先在矽光子或氮化矽晶片上產生大型三維糾纏簇態 (Cluster State)，接著對光子進行干涉與融合測量 (Fusion Measurements) 來推進邏輯閘運算。",
        readoutMethod: "利用超導奈米線單光子偵測器 (SNSPD，僅此偵測器需 1K–4K 冷卻) 或光子數解析偵測器 (PNRD) 進行近乎 99%+ 效率的光子計數測量。"
      },
      engineeringSpecs: {
        coherenceTime: "光子在低損耗光纖中無熱退相干（受限於光波導傳播損耗）",
        twoQubitFidelity: "99.4%+ (晶片融合與壓縮態干涉保真度)",
        gateSpeed: "MHz – GHz 級光速時脈 (奈秒至皮秒級)",
        connectivity: "全光纖網路化連通 (可跨晶片、跨機櫃長距離光纖互連)",
        operatingEnv: "光子晶片與光纖網路為室溫運作；僅光子偵測器需 1.5K–4K 液氦冷卻"
      },
      currentBottleneck: "光子在矽波導、晶片耦合器與光開關中傳播時會發生「光子損耗 (Photon Loss / Attenuation)」，一旦光子消失即代表位元遺失；因此必須將晶圓級波導損耗壓低至 <0.05 dB/cm 並提升 GKP 壓縮度 (>12 dB)。",
      timeline: [
        {
          year: "2001",
          stage: "KLM 線性光學量子計算與 GKP 玻色糾錯碼雙雙奠基",
          milestone: "Knill、Laflamme 與 Milburn 在《Nature》證明僅靠線性光學元件（分光鏡、相移器）與單光子偵測即可實現通用量子計算；同年 Gottesman、Kitaev 與 Preskill 提出 GKP 網格玻色碼。",
          paperTitle: "A scheme for efficient quantum computation with linear optics / Encoding a qubit in an oscillator",
          journal: "Nature 409, 46–52 (2001) & Physical Review A 64, 012310 (2001)",
          paperUrl: "https://www.nature.com/articles/35051009"
        },
        {
          year: "2022",
          stage: "Xanadu Borealis 室溫可編程光量子處理器實現量子優勢",
          milestone: "Xanadu 在《Nature》發表 Borealis 光量子處理器，利用時間多工壓縮光態在 36 微秒內完成高斯玻色取樣，而經典超算需耗時 9,000 年。",
          paperTitle: "Quantum computational advantage with a programmable photonic processor",
          journal: "Nature 606, 75–81 (2022)",
          paperUrl: "https://www.nature.com/articles/s41586-022-04725-x"
        },
        {
          year: "2023",
          stage: "PsiQuantum 提出融合基量子計算 (FBQC) 容錯架構",
          milestone: "PsiQuantum 團隊發表 Fusion-Based Quantum Computation 架構，大幅降低光量子電腦對大型光學延遲線與動態切換開關的需求，為百萬位元矽光子晶圓廠量產鋪路。",
          paperTitle: "Fusion-based quantum computation",
          journal: "Nature Communications 14, 1070 (2023)",
          paperUrl: "https://www.nature.com/articles/s41467-023-36493-1"
        },
        {
          year: "2025.01–2026",
          stage: "Xanadu Aurora 全球首台模組化光纖網路光量子電腦問世",
          milestone: "Xanadu (NASDAQ: XNDU) 在《Nature》發表 Aurora 系統，將 35 顆光子晶片透過 13 公里標準電信光纖在室溫下串聯成 4 機櫃模組化系統；PsiQuantum 亦於 2025 在《Nature》公布 Omega 12 吋晶圓量產光子晶片組。",
          paperTitle: "Scaling and networking a modular photonic quantum computer (Xanadu Aurora) / A manufacturable platform for photonic quantum computing (PsiQuantum)",
          journal: "Nature 638, 912–919 & Nature 639 (2025)",
          paperUrl: "https://www.nature.com/articles/s41586-024-08406-9"
        }
      ]
    },
    {
      id: "topological-cat",
      name: "5. 拓撲馬約拉納與玻色貓量子位元 (Topological Majorana & Bosonic Cat Qubits)",
      shortName: "拓撲 & 玻色貓位元",
      representativeStocks: "MSFT (Microsoft Majorana 1), AMZN (AWS Ocelot)",
      representativePreIpo: "Alice & Bob (法國玻色貓位元獨角獸)",
      analogy: "傳統超導或離子阱位元就像在狂風中走鋼索，需要動用 1,000 顆實體位元去保護 1 顆邏輯位元；而「拓撲量子位元」就像在繩子上打一個死結（只要繩子不斷，怎麼晃動結都不會消失），「玻色貓量子位元」則像一個自動回正的不倒翁，從硬體物理底層直接消弭 90% 的錯誤！",
      whyEasyToUnderstand: "量子計算有兩種錯誤：位元翻轉（0 變 1）與相位翻轉（+ 變 -）。玻色貓量子位元（AWS Ocelot / Alice & Bob）透過雙光子驅動超導諧振腔，讓位元翻轉錯誤率隨光子數增加呈「指數級歸零」，使糾錯碼只需處理單一方向的相位錯誤，將硬體成本暴降 90%！微軟的拓撲導體（Majorana 1）則利用馬約拉納零模的空間非局域性，讓局部環境雜訊根本無法同時干擾成對的準粒子。",
      howItWorks: {
        qubitEncoding: "【拓撲位元 (MSFT)】：在砷化銦-鋁 (InAs-Al) 拓撲超導奈米線兩端生成馬約拉納零模 (MZMs)，以費米子奇偶性 (Fermion Parity) 編碼 |0⟩ 與 |1⟩。\n【玻色貓位元 (AMZN / Alice & Bob)】：在鉭金屬超導微波諧振腔中創造振幅相反的兩個相干態疊加（|α⟩ ± |-α⟩，即薛丁格的貓態）。",
        gateMechanism: "【拓撲位元】：無需旋轉脆弱的連續角度，僅需透過量子點對不同對的馬約拉納零模進行微秒級數位測量（Measurement-Based Braiding）即可完成受拓撲保護的邏輯閘。\n【玻色貓位元】：結合偏置保護 (Bias-Preserving) CNOT 閘與極簡的一維重複碼 (Repetition Code)。",
        readoutMethod: "微秒級單次微波量子電容干涉測量法 (Single-Shot Interferometric Parity Readout)。"
      },
      engineeringSpecs: {
        coherenceTime: "玻色貓位元翻轉壽命達 1 秒 – 10+ 秒（比傳統超導長一萬倍）",
        twoQubitFidelity: "硬體內建偏置雜訊抑制（節省 90% 量子糾錯實體位元開銷）",
        gateSpeed: "100 奈秒 – 1 微秒",
        connectivity: "平面二維晶格（僅需一維重複碼或極小碼距表面碼）",
        operatingEnv: "10 mK 極低溫稀釋製冷機"
      },
      currentBottleneck: "拓撲位元對半導體-超導體異質介面原子級純度要求極為嚴苛，目前微軟甫完成 8 位元 Tetron 拓撲核心驗證，尚待擴展至百位元陣列；玻色貓位元則需進一步提升相位翻轉閘保真度。",
      timeline: [
        {
          year: "2001–2003",
          stage: "Kitaev 提出一維拓撲馬約拉納鏈與非阿貝爾任意子容錯理論",
          milestone: "物理學家 Alexei Kitaev 提出在拓撲超導奈米線兩端可出現不成對的馬約拉納零模 (Majorana Zero Modes)，其非局域拓撲性質可天然抵抗局部環境退相干。",
          paperTitle: "Unpaired Majorana fermions in quantum wires / Fault-tolerant quantum computation by anyons",
          journal: "Physics-Uspekhi 44, 131 (2001) & Annals of Physics 303, 2–30 (2003)",
          paperUrl: "https://arxiv.org/abs/cond-mat/0010440"
        },
        {
          year: "2014–2020",
          stage: "玻色貓量子位元 (Bosonic Cat Qubits) 理論與雙光子耗散穩定化",
          milestone: "法國 ENS / Inria 的 Mazyar Mirrahimi（Alice & Bob 共同創辦人）與耶魯大學團隊提出利用雙光子驅動與耗散工程，在超導諧振腔中穩定保護薛丁格貓態並指數級抑制位元翻轉。",
          paperTitle: "Dynamically protected cat-qubits: a new paradigm for universal quantum computation",
          journal: "New Journal of Physics 16, 045014 (2014)",
          paperUrl: "https://iopscience.iop.org/article/10.1088/1367-2630/16/4/045014"
        },
        {
          year: "2024.05",
          stage: "Alice & Bob 實證玻色貓位元翻轉壽命突破 10 秒大關",
          milestone: "法國獨角獸 Alice & Bob 在《Nature》發表宏觀位元翻轉時間超過 10 秒的玻色貓量子位元，比傳統超導位元提升四個數量級。",
          paperTitle: "Quantum control of a cat qubit with bit-flip times exceeding ten seconds",
          journal: "Nature 629, 778–783 (2024)",
          paperUrl: "https://www.nature.com/articles/s41586-024-07294-3"
        },
        {
          year: "2025.02",
          stage: "微軟 Majorana 1 拓撲晶片與亞馬遜 AWS Ocelot 貓位元晶片雙雙登上《Nature》",
          milestone: "2025 年 2 月，微軟 (MSFT) 在《Nature》發表 InAs-Al 拓撲導體單次費米子奇偶測量與 Majorana 1 路線圖；同月亞馬遜 (AMZN) 在《Nature》發表首款整合玻色貓位元糾錯之 Ocelot 晶片，證實可降低 90% 糾錯位元開銷。",
          paperTitle: "Interferometric single-shot parity measurement in InAs–Al hybrid devices (MSFT) / Hardware-efficient quantum error correction using concatenated bosonic qubits (AWS Ocelot)",
          journal: "Nature (Feb 2025)",
          paperUrl: "https://www.nature.com/articles/s41586-024-08445-2"
        }
      ]
    },
    {
      id: "annealing",
      name: "6. 量子退火與絕熱最佳化專用機 (Quantum Annealing & Adiabatic Computing)",
      shortName: "量子退火 (Annealing)",
      representativeStocks: "QBTS (D-Wave Quantum)",
      representativePreIpo: "Qilimanjaro (歐洲退火新創)",
      analogy: "如果通用邏輯閘量子電腦是一步一步執行加減乘除指令的 CPU，那麼「量子退火機」就像把一顆彈珠放進有上億個山谷的複雜高低地形模型中。傳統電腦必須一座山一座山慢慢爬才能找到最低谷（最佳解），而量子退火機直接利用「量子穿隧效應 (Quantum Tunneling)」讓系統直接穿牆過壁，在幾微秒內滑入全局能量最低谷！",
      whyEasyToUnderstand: "量子退火不需要控制單一邏輯閘的精確相位，而是將商業問題（如全球港口貨櫃排程、5G 基地台頻譜分配、新材料自旋結構）直接映射成伊辛模型 (Ising Hamiltonian) 的能量地形。因此它能輕鬆做到 4,800 到 7,000+ 顆超導量子位元規模，是今日唯一已經在商業現場大規模收費運轉並擁有近 80% 毛利率的量子硬體。",
      howItWorks: {
        qubitEncoding: "利用超導磁通量子位元 (Superconducting Flux Qubits / rf-SQUID)，以微小超導環路中順時針與逆時針產生的磁通量方向代表自旋向上 (+1) 與向下 (-1)。",
        gateMechanism: "絕熱演化與量子穿隧：先施加橫向磁場使所有位元處於均勻量子疊加態，隨後逐漸減弱橫向場並開啟代表問題約束的縱向耦合場，系統透過量子穿隧自動演化至基態。",
        readoutMethod: "退火結束瞬間透過直流超導量子干涉儀 (DC-SQUID) 磁強計一次讀出數千顆位元的最終自旋方向。"
      },
      engineeringSpecs: {
        coherenceTime: "非相干與相干退火雙模式（退火時間可快至數奈秒）",
        twoQubitFidelity: "4,800+ Qubits | 20-Way Zephyr 高連通拓撲 (Advantage2)",
        gateSpeed: "微秒至毫秒級完整最佳化問題求解",
        connectivity: "Zephyr 拓撲（每顆位元可與 20 顆鄰近位元直接耦合）",
        operatingEnv: "12–15 mK 極低溫稀釋製冷機（功耗僅 ~12–25 kW，遠低於傳統超算）"
      },
      currentBottleneck: "量子退火屬於專用型架構，專精於組合最佳化 (QUBO)、取樣與自旋磁性材料模擬，無法直接執行需要深層相干邏輯閘的 Shor 質因數分解演算法；因此 D-Wave (QBTS) 於 2026 年收購 Quantum Circuits Inc. 展開「退火 + 雙軌超導邏輯閘」雙引擎佈局。",
      timeline: [
        {
          year: "1998–2000",
          stage: "量子退火 (Quantum Annealing) 與絕熱量子計算理論誕生",
          milestone: "日本東京工業大學 Kadowaki 與 Nishimori 提出利用橫場伊辛模型中的量子穿隧效應求解組合最佳化問題；2000 年 MIT Farhi 等人提出絕熱量子計算框架。",
          paperTitle: "Quantum annealing in the transverse Ising model",
          journal: "Physical Review E 58, 5355 (1998)",
          paperUrl: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.58.5355"
        },
        {
          year: "2011",
          stage: "D-Wave 驗證人造超導自旋系統中的宏觀量子退火",
          milestone: "D-Wave 團隊在《Nature》發表首篇實驗證明超導磁通量子位元陣列中存在量子穿隧退火機制，並推出全球首台商用量子退火機 D-Wave One。",
          paperTitle: "Quantum annealing with manufactured spins",
          journal: "Nature 473, 194–198 (2011)",
          paperUrl: "https://www.nature.com/articles/nature10012"
        },
        {
          year: "2023",
          stage: "5,000 位元相干量子退火模擬三維自旋玻璃相變",
          milestone: "D-Wave 在《Nature》展示在 5,000 顆位元的 Advantage 系統上進行奈秒級超快相干量子退火，觀測到純粹由量子糾纏驅動的三維自旋玻璃臨界動力學。",
          paperTitle: "Coherent quantum annealing in a programmable 2,000-qubit Ising chain / 3D spin glasses",
          journal: "Nature 617, 61–66 (2023)",
          paperUrl: "https://www.nature.com/articles/s41586-023-05867-2"
        },
        {
          year: "2025.03–2026",
          stage: "Advantage2 獲《Science》認證實現磁性材料模擬「超越經典超算百萬年」",
          milestone: "D-Wave (NYSE: QBTS) 在《Science》發表里程碑論文，證實 Advantage2 處理器在短短數分鐘內完成的磁性材料非平衡量子淬火模擬，若使用全球最強經典超算 Frontier 需耗時近百萬年與全地球年發電量。",
          paperTitle: "Beyond-Classical Computation in Quantum Simulation",
          journal: "Science Vol. 387, Issue 6739 (2025)",
          paperUrl: "https://www.science.org/doi/10.1126/science.ado6285"
        }
      ]
    },
    {
      id: "pqc-crypto",
      name: "7. 量子加密 (QKD/QRNG) 與後量子密碼學 (Post-Quantum Cryptography, PQC)",
      shortName: "量子加密 & 後量子密碼 (PQC)",
      representativeStocks: "IBM, NET, PANW, CRWD, LSCC, LAES (SEALSQ), ARQQ, WKEY, IONQ (IDQ)",
      representativePreIpo: "SandboxAQ ($5.75B), PQShield, Quantropi",
      analogy: "當未來的容錯量子電腦（配備 Shor 演算法）像一把萬能鑰匙能瞬間撬開今日所有的 RSA 與橢圓曲線 (ECC) 門鎖時，人類有兩條防禦路線：①「後量子密碼學 (PQC)」是設計一把連量子電腦都算不出來的超高維度數學迷宮鎖（如 500 維度的晶格問題），直接安裝在現有電腦、手機與伺服器上；②「量子金鑰分發 (QKD)」則是把鑰匙寫在單一光子上透過光纖傳送，只要駭客偷看一眼，光子狀態就會立刻改變並發出警報！",
      whyEasyToUnderstand: "為什麼不用等 2030 年量子電腦造出來才買抗量子資安股？因為駭客現在正在執行「現在竊取、未來解密 (Harvest Now, Decrypt Later, HNDL)」——今天先在網路上攔截並複製銀行、政府與醫療機構的加密檔案，鎖進硬碟等幾年後量子電腦問世再一次解開。因此美國 NIST 已於 2024–2025 正式頒布 FIPS 203/204/205 法規，強制全球雲端、防火牆、晶片與物聯網立刻全面升級！",
      howItWorks: {
        qubitEncoding: "【PQC 數學防護】：基於「模晶格帶誤差學習問題 (Module-LWE，對應 FIPS 203 ML-KEM 與 FIPS 204 ML-DSA)」或「無狀態雜湊樹 (FIPS 205 SLH-DSA)」。\n【QKD / QRNG 物理防護】：基於海森堡測不準原理與單光子不可複製定理 (No-Cloning Theorem)。",
        gateMechanism: "【PQC 運算】：在伺服器 CPU、安全 FPGA (如 Lattice LSCC) 或抗量子安全晶片 (如 SEALSQ LAES QS7001) 中執行高速多項式數論轉換 (NTT) 矩陣運算。\n【QKD 傳輸】：透過光纖或低軌衛星發射偏振/相位編碼單光子或糾纏光子對。",
        readoutMethod: "PQC 透過 TLS 1.3 網路握手協定完成毫秒級零信任驗證；QKD 則透過比對公開基底之量子位元錯誤率 (QBER) 偵測是否存在竊聽。"
      },
      engineeringSpecs: {
        coherenceTime: "PQC 金鑰可抵抗容錯量子電腦長達數十年以上之攻擊",
        twoQubitFidelity: "NIST FIPS 203 (ML-KEM) / FIPS 204 (ML-DSA) / CNSA 2.0 最高國安等級認證",
        gateSpeed: "ML-KEM-768 網路金鑰交換僅需 ~0.1 毫秒（比傳統 RSA 快且無損網速）",
        connectivity: "PQC 100% 相容全球現有網際網路與雲端；QKD 適用於主權光纖專線與衛星骨幹",
        operatingEnv: "全室溫標準資料中心、端點電腦、智慧卡與物聯網晶片"
      },
      currentBottleneck: "PQC 數位簽章（如 ML-DSA 與 SLH-DSA）的公鑰與簽章體積比傳統 ECC 大約 20–40 倍，對老舊物聯網設備、汽車 ECU 與低頻寬衛星構成記憶體與延遲壓力，因此亟需專用硬體加速晶片（如 LAES、LSCC）與自動化密碼盤點工具（CBOM，如 PANW、SandboxAQ）。",
      timeline: [
        {
          year: "1984 & 1994",
          stage: "BB84 量子密碼協議誕生 & Shor 演算法宣告傳統公鑰密碼死刑",
          milestone: "1984 年 Bennett 與 Brassard 提出人類首個量子金鑰分發協議 (BB84)；1994 年 Peter Shor 提出可在多項式時間內分解大整數與求解離散對數的量子演算法，證明容錯量子電腦將徹底瓦解 RSA 與 ECC。",
          paperTitle: "Quantum cryptography: Public key distribution and coin tossing (BB84) / Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer (Shor)",
          journal: "IEEE ICCSSP (1984) & SIAM Journal on Computing 26, 1484 (1997)",
          paperUrl: "https://epubs.siam.org/doi/10.1137/S0097539795293172"
        },
        {
          year: "2005",
          stage: "Oded Regev 提出 LWE（帶誤差學習）晶格密碼學理論（哥德爾獎突破）",
          milestone: "密碼學家 Oded Regev 提出 Learning With Errors (LWE) 問題，並嚴格證明破解 LWE 的平均難度等同於最壞情況下求解高維度晶格最短向量問題，成為今日 NIST FIPS 203/204 的數學基石。",
          paperTitle: "On lattices, learning with errors, random linear codes, and cryptography",
          journal: "Journal of the ACM 56(6), Article 34 (STOC 2005 / JACM 2009)",
          paperUrl: "https://dl.acm.org/doi/10.1145/1568318.1568324"
        },
        {
          year: "2018–2022",
          stage: "IBM Research 與學界聯盟設計 CRYSTALS-Kyber 與 CRYSTALS-Dilithium",
          milestone: "IBM 蘇黎世實驗室與歐美密碼學家提出基於模晶格 (Module-LWE) 的高效金鑰封裝 Kyber 與數位簽章 Dilithium，在 NIST 全球歷時 6 年的後量子密碼競賽中脫穎而出。",
          paperTitle: "CRYSTALS – Kyber: a CCA-secure module-lattice-based KEM",
          journal: "IEEE European Symposium on Security and Privacy (EuroS&P 2018)",
          paperUrl: "https://ieeexplore.ieee.org/document/8406610"
        },
        {
          year: "2024.08–2026",
          stage: "NIST 正式頒布 FIPS 203 / 204 / 205 標準，全球進入強制遷移商轉期",
          milestone: "美國 NIST 正式發布首批聯邦後量子密碼標準（ML-KEM、ML-DSA、SLH-DSA）；截至 2026 年，Cloudflare (NET) 已將全球 38% HTTPS 流量升級為後量子加密，SEALSQ (LAES) 與 Lattice (LSCC) 抗量子晶片全面量產出貨。",
          paperTitle: "NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA) Official Standards",
          journal: "National Institute of Standards and Technology (NIST, 2024–2026)",
          paperUrl: "https://csrc.nist.gov/pubs/fips/203/final"
        }
      ]
    }
  ]
};


