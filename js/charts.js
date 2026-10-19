// Quantum Tech Investing - Institutional Chart.js Visualizations (Refined Dark Palette)

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
            backgroundColor: 'rgba(99, 102, 241, 0.85)',
            borderColor: '#818cf8',
            borderWidth: 1,
            borderRadius: 5,
            yAxisID: 'y'
          },
          {
            label: '帳上現金與短期投資 ($M USD)',
            data: cash,
            backgroundColor: 'rgba(148, 163, 184, 0.25)',
            borderColor: 'rgba(148, 163, 184, 0.6)',
            borderWidth: 1,
            borderRadius: 5,
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
            labels: { color: '#cbd5e1', usePointStyle: true, padding: 16, font: { size: 11 } }
          },
          tooltip: {
            backgroundColor: '#11131a',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              afterBody: (items) => {
                const idx = items[0].dataIndex;
                const st = purePlays[idx];
                return [
                  `公司: ${st.name}`,
                  `總市值: ${st.marketCap} (股價 ~$${st.price})`,
                  `營收成長: ${st.revenueYoY}`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#e2e8f0', font: { weight: '600', size: 11 } }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: { display: true, text: '年度營收 ($M USD)', color: '#94a3b8', font: { size: 11 } },
            grid: { color: 'rgba(255, 255, 255, 0.04)' }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: { display: true, text: '現金儲備 ($M USD)', color: '#94a3b8', font: { size: 11 } },
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
      { label: 'IonQ / Oxford Ionics EQC (IONQ)', fidelity: 99.99, errorRate: 0.01, modality: '離子阱' },
      { label: 'Quantinuum Helios 98Q (QNT)', fidelity: 99.921, errorRate: 0.079, modality: '離子阱' },
      { label: 'Google Willow 105Q (GOOGL)', fidelity: 99.90, errorRate: 0.10, modality: '超導' },
      { label: 'IBM Heron R3 156Q (IBM)', fidelity: 99.80, errorRate: 0.20, modality: '超導' },
      { label: 'IQM Radiance 150Q (IQMX)', fidelity: 99.60, errorRate: 0.40, modality: '超導' },
      { label: 'QuEra 48 Logical Qubits (Pre-IPO)', fidelity: 99.55, errorRate: 0.45, modality: '中性原子' },
      { label: 'Rigetti Cepheus 108Q (RGTI)', fidelity: 99.50, errorRate: 0.50, modality: '超導' },
      { label: 'Infleqtion Sqale (INFQ)', fidelity: 99.50, errorRate: 0.50, modality: '中性原子' },
      { label: 'Pasqal Orion (PSQL)', fidelity: 99.50, errorRate: 0.50, modality: '中性原子' },
      { label: 'Xanadu Aurora (XNDU)', fidelity: 99.40, errorRate: 0.60, modality: '光量子' }
    ];

    if (this.fidelityBubbleChart) this.fidelityBubbleChart.destroy();

    this.fidelityBubbleChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: hardwareSystems.map(h => h.label),
        datasets: [
          {
            label: '雙量子位元閘保真度 (%)',
            data: hardwareSystems.map(h => h.fidelity),
            backgroundColor: hardwareSystems.map(h =>
              h.fidelity >= 99.9 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(99, 102, 241, 0.7)'
            ),
            borderColor: hardwareSystems.map(h =>
              h.fidelity >= 99.9 ? '#34d399' : '#818cf8'
            ),
            borderWidth: 1,
            borderRadius: 5
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
            backgroundColor: '#11131a',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.12)',
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
            title: { display: true, text: '雙量子位元閘保真度 (%) — 綠色代表突破 99.9% 高保真門檻', color: '#94a3b8', font: { size: 11 } },
            grid: { color: 'rgba(255, 255, 255, 0.04)' }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#cbd5e1', font: { size: 11 } }
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
          '純量子硬體與軟體 (24%)',
          '科技巨頭量子與超算 (25%)',
          '後量子密碼與資安 (18%)',
          '半導體、極低溫與光學鏈 (33%)'
        ],
        datasets: [
          {
            data: [24, 25, 18, 33],
            backgroundColor: [
              '#6366f1',
              '#38bdf8',
              '#34d399',
              '#475569'
            ],
            borderColor: '#11131a',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '66%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94a3b8', padding: 10, font: { size: 11 }, usePointStyle: true }
          }
        }
      }
    });
  }
};
