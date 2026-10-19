// Quantum Tech Investing - Interactive Chart.js Visualizations (Verified October 2026)

window.QuantumCharts = {
  revenueCashChart: null,
  fidelityBubbleChart: null,
  etfAllocationChart: null,

  initAll() {
    if (typeof Chart === 'undefined') return;
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', 'Noto Sans TC', sans-serif";
    this.renderRevenueCashChart();
    this.renderFidelityChart();
    this.renderEtfChart();
  },

  renderRevenueCashChart() {
    const ctx = document.getElementById('revenueCashChart');
    if (!ctx) return;

    const purePlays = window.QUANTUM_DATA.stocks.filter(
      s => s.category === 'pure-compute' || s.category === 'pure-pqc'
    );

    const labels = purePlays.map(s => s.ticker);
    const revenues = purePlays.map(s => s.revenueNum);
    const cash = purePlays.map(s => s.cashNum);

    if (this.revenueCashChart) this.revenueCashChart.destroy();

    this.revenueCashChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: '最新年化/年度營收 ($M USD)',
            data: revenues,
            backgroundColor: 'rgba(56, 189, 248, 0.85)',
            borderColor: '#38bdf8',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            label: '帳上現金與流動資金儲備 ($M USD)',
            data: cash,
            backgroundColor: 'rgba(168, 85, 247, 0.45)',
            borderColor: '#a855f7',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#e2e8f0', usePointStyle: true, padding: 16 }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#38bdf8',
            bodyColor: '#f1f5f9',
            borderColor: 'rgba(56, 189, 248, 0.35)',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              afterBody: (items) => {
                const idx = items[0].dataIndex;
                const st = purePlays[idx];
                return [
                  `公司: ${st.name}`,
                  `總市值: ${st.marketCap} (股價 ~$${st.price})`,
                  `營收成長: ${st.revenueYoY}`,
                  `跑道評估: ${st.runway}`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(51, 65, 85, 0.25)' },
            ticks: { color: '#f8fafc', font: { weight: 'bold' } }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: { display: true, text: '年度營收 ($M USD)', color: '#38bdf8' },
            grid: { color: 'rgba(51, 65, 85, 0.25)' }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: { display: true, text: '現金儲備 ($M USD)', color: '#c084fc' },
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  },

  renderFidelityChart() {
    const ctx = document.getElementById('fidelityBenchmarkChart');
    if (!ctx) return;

    const hardwareSystems = [
      { label: 'IonQ / Oxford Ionics EQC (NYSE: IONQ)', fidelity: 99.99, errorRate: 0.01, modality: '離子阱 (已上市)', color: '#38bdf8' },
      { label: 'Quantinuum Helios 98Q (NASDAQ: QNT)', fidelity: 99.921, errorRate: 0.079, modality: '離子阱 (2026/06 IPO)', color: '#22d3ee' },
      { label: 'Google Willow 105Q (NASDAQ: GOOGL)', fidelity: 99.90, errorRate: 0.10, modality: '超導 (已上市)', color: '#a855f7' },
      { label: 'IBM Heron R3 156Q (NYSE: IBM)', fidelity: 99.80, errorRate: 0.20, modality: '超導 (已上市)', color: '#818cf8' },
      { label: 'IQM Radiance 150Q (NASDAQ: IQMX)', fidelity: 99.60, errorRate: 0.40, modality: '超導 (2026/07 上市)', color: '#c084fc' },
      { label: 'QuEra 48 Logical Qubits (Pre-IPO)', fidelity: 99.55, errorRate: 0.45, modality: '中性原子 (未上市)', color: '#10b981' },
      { label: 'Rigetti Cepheus 108Q (NASDAQ: RGTI)', fidelity: 99.50, errorRate: 0.50, modality: '超導 (已上市)', color: '#f59e0b' },
      { label: 'Infleqtion Sqale (NYSE: INFQ)', fidelity: 99.50, errorRate: 0.50, modality: '中性原子 (2026/02 上市)', color: '#34d399' },
      { label: 'Pasqal Orion (NASDAQ: PSQL)', fidelity: 99.50, errorRate: 0.50, modality: '中性原子 (2026/08 上市)', color: '#6ee7b7' },
      { label: 'Xanadu Aurora (NASDAQ: XNDU)', fidelity: 99.40, errorRate: 0.60, modality: '光量子 (2026/03 上市)', color: '#f43f5e' }
    ];

    if (this.fidelityBubbleChart) this.fidelityBubbleChart.destroy();

    this.fidelityBubbleChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: hardwareSystems.map(h => h.label),
        datasets: [
          {
            label: '雙量子位元閘保真度 2-Qubit Gate Fidelity (%)',
            data: hardwareSystems.map(h => h.fidelity),
            backgroundColor: hardwareSystems.map(h => h.color + 'cc'),
            borderColor: hardwareSystems.map(h => h.color),
            borderWidth: 1.5,
            borderRadius: 6
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#38bdf8',
            bodyColor: '#f1f5f9',
            borderColor: 'rgba(56, 189, 248, 0.35)',
            borderWidth: 1,
            callbacks: {
              label: (item) => {
                const sys = hardwareSystems[item.dataIndex];
                return ` 保真度: ${sys.fidelity}% (錯誤率: ${sys.errorRate}%) | 路線: ${sys.modality}`;
              }
            }
          }
        },
        scales: {
          x: {
            min: 99.0,
            max: 100.0,
            title: { display: true, text: '雙量子位元閘保真度 (%) — 99.0% 為表面碼容錯基本門檻', color: '#38bdf8' },
            grid: { color: 'rgba(51, 65, 85, 0.25)' }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#e2e8f0', font: { size: 11 } }
          }
        }
      }
    });
  },

  renderEtfChart() {
    const ctx = document.getElementById('qtumPerformanceChart');
    if (!ctx) return;

    if (this.etfAllocationChart) this.etfAllocationChart.destroy();

    this.etfAllocationChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          '純量子硬體與軟體 (IONQ, QNT, QBTS, RGTI, IQMX 等)',
          '科技巨頭量子與混合超算 (NVDA, GOOGL, IBM, MSFT)',
          '後量子密碼與網路資安 (NET, PANW, LSCC, LAES)',
          '先進半導體、極低溫與光學供應鏈 (COHR, ASML, TSM 等)'
        ],
        datasets: [
          {
            data: [24, 25, 18, 33],
            backgroundColor: [
              'rgba(56, 189, 248, 0.85)',
              'rgba(168, 85, 247, 0.85)',
              'rgba(16, 185, 129, 0.85)',
              'rgba(245, 158, 11, 0.80)'
            ],
            borderColor: '#0b1120',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '64%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#cbd5e1', padding: 12, font: { size: 11 } }
          }
        }
      }
    });
  }
};
