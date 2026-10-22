// Quantum Tech Investing - Institutional Interactive Application Controller

const AppState = {
  currentSection: 'overview',
  stockCategory: 'all',
  stockModality: 'all',
  stockSort: 'revenue-desc',
  searchQuery: '',
  selectedCompareIds: ['ionq', 'qnt', 'qbts', 'rgti'],
  activeModalStockId: null,
  activeModalTab: 'overview',
  paperCategory: 'all',
  activeArenaModality: 'all',
  activeTechPediaId: 'all',
  liveData: window.QUANTUM_LIVE_DATA || null,
  liveTableCategory: 'all',
  liveTableSort: 'advantage-desc',
  liveArxivDomain: 'all'
};

const CategoryMeta = {
  'pure-compute': { label: '純量子電腦/系統', badgeClass: 'badge-pure-compute' },
  'pure-pqc': { label: '量子加密 / PQC 純股', badgeClass: 'badge-pure-pqc' },
  'big-tech': { label: '科技巨頭量子與超算', badgeClass: 'badge-big-tech' },
  'enterprise-pqc': { label: '企業資安與 PQC 晶片', badgeClass: 'badge-enterprise-pqc' }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStockControls();
  initLiveAnalyticsControls();
  renderStocksGrid();
  renderTechPediaSection();
  renderModalityArena();
  renderCompareTable();
  renderEtfsSection();
  renderPreIpoSection();
  renderPapersSection();
  renderIndicatorsSection();
  initMoscaCalculator();
  loadLiveQuantumDataJson();

  if (window.QuantumCharts) {
    window.QuantumCharts.initAll();
  }
});

// Helper to format Debt-to-EBITDA concisely for compact cards
function formatCompactDebtEbitda(fin) {
  if (!fin) return 'N/A';
  if (fin.debt_to_ebitda_ratio === 0) return '0.00x (零負債)';
  if (fin.debt_to_ebitda_ratio !== null && fin.debt_to_ebitda_ratio > 0) {
    return `${fin.debt_to_ebitda_ratio.toFixed(2)}x`;
  }
  return `研發期 (負債 ${fin.total_debt_fmt || '$0'})`;
}

// ============================================================================
// NAVIGATION & SECTION SWITCHING
// ============================================================================
function initNavigation() {
  const navButtons = document.querySelectorAll('[data-nav-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav-target');
      switchSection(target);
    });
  });
}

function switchSection(sectionId) {
  AppState.currentSection = sectionId;

  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    if (btn.getAttribute('data-nav-target') === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.app-section').forEach(sec => {
    if (sec.id === `section-${sectionId}`) {
      sec.classList.remove('hidden');
    } else {
      sec.classList.add('hidden');
    }
  });

  if (sectionId === 'overview' || sectionId === 'etfs') {
    setTimeout(() => {
      if (window.QuantumCharts) window.QuantumCharts.initAll();
    }, 60);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.switchSection = switchSection;

// ============================================================================
// STOCK DIRECTORY CONTROLS, FILTERING & SORTING
// ============================================================================
function initStockControls() {
  document.querySelectorAll('[data-cat-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.stockCategory = btn.getAttribute('data-cat-filter');
      document.querySelectorAll('[data-cat-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderStocksGrid();
    });
  });

  const searchInput = document.getElementById('stockSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      renderStocksGrid();
    });
  }

  const sortSelect = document.getElementById('stockSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.stockSort = e.target.value;
      renderStocksGrid();
    });
  }
}

function getFilteredStocks() {
  let list = [...window.QUANTUM_DATA.stocks];

  if (AppState.stockCategory !== 'all') {
    list = list.filter(s => s.category === AppState.stockCategory);
  }

  if (AppState.searchQuery) {
    const q = AppState.searchQuery;
    list = list.filter(s =>
      s.ticker.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.modality.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.flagshipProduct.toLowerCase().includes(q) ||
      s.subCategories.some(sc => sc.toLowerCase().includes(q))
    );
  }

  list.sort((a, b) => {
    switch (AppState.stockSort) {
      case 'revenue-desc':
        return b.revenueNum - a.revenueNum;
      case 'yoy-desc':
        return b.revenueYoYNum - a.revenueYoYNum;
      case 'cash-desc':
        return b.cashNum - a.cashNum;
      case 'fidelity-desc':
        return b.fidelityNum - a.fidelityNum;
      case 'mcap-desc':
        return b.marketCapNum - a.marketCapNum;
      default:
        return 0;
    }
  });

  return list;
}

function renderStocksGrid() {
  const container = document.getElementById('stocksGridContainer');
  const countBadge = document.getElementById('stockResultCount');
  if (!container) return;

  const stocks = getFilteredStocks();
  if (countBadge) countBadge.textContent = `共 ${stocks.length} 檔標的`;

  if (stocks.length === 0) {
    container.innerHTML = `
      <div class="col-span-full quantum-card p-10 text-center text-slate-400">
        找不到符合條件的量子或後量子密碼股票，請嘗試調整關鍵字或篩選分類。
      </div>
    `;
    return;
  }

  container.innerHTML = stocks.map(s => {
    const meta = CategoryMeta[s.category] || { label: s.category, badgeClass: 'badge-pure-compute' };
    const isCompared = AppState.selectedCompareIds.includes(s.id);
    const fin = AppState.liveData?.stocks_financials?.[s.ticker];

    return `
      <div class="quantum-card p-5 flex flex-col justify-between">
        <div>
          <!-- Top Header -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-num text-xl font-bold text-white tracking-tight">${s.ticker}</span>
                <span class="text-[11px] font-mono-num px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.07]">${s.exchange}</span>
                <span class="text-[11px] px-2.5 py-0.5 rounded-full font-medium ${meta.badgeClass}">${meta.label}</span>
              </div>
              <h3 class="text-xs font-medium text-slate-400 mt-1">${s.name}</h3>
            </div>
            <div class="text-right shrink-0">
              <div class="font-mono-num text-base font-bold text-white">${s.marketCap}</div>
              <div class="font-mono-num text-[11px] text-slate-400">$${s.price.toFixed(2)}</div>
            </div>
          </div>

          <!-- Technical Modality & Flagship Strip -->
          <div class="mb-3.5 pb-3 border-b border-white/[0.06] text-xs">
            <div class="text-slate-200 font-medium">${s.modality}</div>
            <div class="text-slate-400 mt-0.5 truncate" title="${s.flagshipProduct}">${s.flagshipProduct}</div>
          </div>

          <!-- Clean 2x2 Key Financial & Technical Panel -->
          <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.05] grid grid-cols-2 gap-x-4 gap-y-3 mb-3.5 text-xs">
            <div>
              <div class="text-[11px] text-slate-400">最新營收 / 年增率</div>
              <div class="font-mono-num font-semibold text-white mt-0.5">${s.revenue.split('(')[0]}</div>
              <div class="font-mono-num text-[11px] text-emerald-400">${s.revenueYoY.split('(')[0]}</div>
            </div>
            <div>
              <div class="text-[11px] text-slate-400">現金儲備 (Cash)</div>
              <div class="font-mono-num font-semibold text-white mt-0.5">${s.cashReserves.split('(')[0]}</div>
              <div class="text-[11px] text-slate-400 truncate" title="${s.runway}">${s.runway}</div>
            </div>
            <div class="pt-2 border-t border-white/[0.05]">
              <div class="text-[11px] text-slate-400">毛利率 / Debt-to-EBITDA</div>
              <div class="font-mono-num font-semibold text-white mt-0.5">
                毛利 ${fin?.gross_margin_display || 'N/A'}
              </div>
              <div class="font-mono-num text-[11px] text-slate-400 truncate" title="${fin?.leverage_status || ''}">
                ${formatCompactDebtEbitda(fin)}
              </div>
            </div>
            <div class="pt-2 border-t border-white/[0.05]">
              <div class="text-[11px] text-slate-400">保真度 / 綜合優勢分</div>
              <div class="font-mono-num font-semibold text-white mt-0.5 truncate" title="${s.twoQubitFidelity}">${s.twoQubitFidelity.split('(')[0]}</div>
              <div class="font-mono-num text-[11px] text-indigo-300">
                優勢評分 ${fin?.overall_advantage_score || '—'} / 100
              </div>
            </div>
          </div>

          <!-- Summary -->
          <p class="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
            ${s.summary}
          </p>
        </div>

        <!-- Bottom Action Bar -->
        <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <button
            onclick="openStockModal('${s.id}')"
            class="flex-1 py-2 px-3 rounded-lg bg-[#161922] hover:bg-[#1c202b] border border-white/[0.09] text-slate-200 hover:text-white text-xs font-medium transition flex items-center justify-center gap-1.5"
          >
            <span>完整研報與論文 (${s.papers.length})</span>
            <span>→</span>
          </button>
          <button
            onclick="toggleCompareStock('${s.id}')"
            class="py-2 px-3 rounded-lg text-xs font-medium border transition ${
              isCompared
                ? 'bg-indigo-500/20 border-indigo-400/40 text-indigo-200'
                : 'bg-transparent border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/[0.16]'
            }"
            title="加入並排 PK 比較表"
          >
            ${isCompared ? '✓ 已在比較台' : '+ PK 比較'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// STOCK DEEP-DIVE MODAL (營收、新聞、前景、論文、技術優勢完整視窗)
// ============================================================================
window.openStockModal = function(stockId, tab = 'overview') {
  const stock = window.QUANTUM_DATA.stocks.find(s => s.id === stockId);
  if (!stock) return;

  AppState.activeModalStockId = stockId;
  AppState.activeModalTab = tab;

  const modal = document.getElementById('stockDetailModal');
  const content = document.getElementById('stockDetailModalContent');
  if (!modal || !content) return;

  const meta = CategoryMeta[stock.category] || { label: stock.category, badgeClass: 'badge-pure-compute' };
  const fin = AppState.liveData?.stocks_financials?.[stock.ticker];

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 border-b border-white/[0.08] bg-[#0d0f15] flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="font-mono-num text-2xl font-extrabold text-white">${stock.ticker}</span>
          <span class="text-xs px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">${stock.exchange}</span>
          <span class="text-xs px-3 py-0.5 rounded-full font-medium ${meta.badgeClass}">${meta.label}</span>
          <span class="text-xs px-2.5 py-0.5 rounded bg-white/[0.06] text-slate-200 border border-white/[0.1]">${stock.outlook.rating}</span>
        </div>
        <h2 class="text-base font-medium text-slate-300 mt-1">${stock.name} — 機構級投資與技術全景剖析</h2>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-right">
          <div class="text-xs text-slate-400">總市值 / 參考股價</div>
          <div class="font-mono-num text-xl font-bold text-white">${stock.marketCap} <span class="text-sm font-normal text-slate-400">($${stock.price})</span></div>
        </div>
        <button onclick="closeStockModal()" class="px-3 py-1.5 rounded-lg bg-[#161922] hover:bg-[#1c202b] border border-white/[0.1] text-slate-300 hover:text-white text-xs transition">
          ✕ 關閉
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <div class="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
      <!-- 1. Executive Summary -->
      <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.07]">
        <div class="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-1">核心定位與護城河總覽</div>
        <p class="text-sm text-slate-200 leading-relaxed">${stock.summary}</p>
      </div>

      <!-- Economic & Technical Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="text-slate-400">最新營收 &amp; 年增率</div>
          <div class="font-mono-num text-sm font-bold text-white mt-1">${stock.revenue}</div>
          <div class="text-emerald-400 mt-0.5">YoY: ${stock.revenueYoY}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="text-slate-400">yfinance 毛利率 &amp; 負債比</div>
          <div class="font-mono-num text-sm font-bold text-white mt-1">毛利率: ${fin?.gross_margin_display || 'N/A'}</div>
          <div class="text-slate-300 mt-0.5">Debt/EBITDA: ${fin?.debt_to_ebitda_display || 'N/A'}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="text-slate-400">帳上現金儲備与跑道</div>
          <div class="font-mono-num text-sm font-bold text-white mt-1">${stock.cashReserves}</div>
          <div class="text-slate-400 mt-0.5">${stock.runway}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="text-slate-400">雙量子位元閘保真度 / 速度</div>
          <div class="font-mono-num text-sm font-bold text-white mt-1">${stock.twoQubitFidelity}</div>
          <div class="text-slate-400 mt-0.5">速度: ${stock.gateSpeed}</div>
        </div>
      </div>

      <!-- 2. Technical Advantages -->
      <div class="p-5 rounded-xl bg-[#161922] border border-white/[0.06]">
        <h3 class="text-sm font-bold text-white mb-3">技術優勢與架構護城河 (Technical Moat &amp; Architecture)</h3>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
          ${stock.technicalAdvantages.map(adv => `
            <li class="flex items-start gap-2.5">
              <span class="text-indigo-400 font-bold mt-0.5">▸</span>
              <span class="leading-relaxed">${adv}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 3. Outlook: Bull Case, Bear Case & Catalysts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-emerald-400">
          <h4 class="text-sm font-bold text-white mb-2">看多邏輯與商業前景 (Bull Thesis)</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">${stock.outlook.bullCase}</p>
          <div class="text-xs font-semibold text-slate-200 mb-1.5">2026–2027 關鍵催化劑：</div>
          <ul class="space-y-1 text-xs text-slate-400">
            ${stock.outlook.catalysts2026_2027.map(c => `<li>• ${c}</li>`).join('')}
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-amber-400">
          <h4 class="text-sm font-bold text-white mb-2">潛在風險與挑戰 (Key Risks &amp; Bear Case)</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">${stock.outlook.bearCase}</p>
          <div class="text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
            <strong>在手訂單 / RPO：</strong>${stock.bookingsOrBacklog}
          </div>
        </div>
      </div>

      <!-- 4. Key Academic Papers -->
      <div class="p-5 rounded-xl bg-[#161922] border border-white/[0.06]">
        <h3 class="text-sm font-bold text-white mb-3">代表性學術論文與里程碑實證 (Peer-Reviewed Papers)</h3>
        <div class="space-y-2.5">
          ${stock.papers.map(p => `
            <div class="p-3.5 rounded-lg bg-[#11131a] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-[11px] font-mono-num px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">${p.journal} (${p.year})</span>
                  <span class="text-xs sm:text-sm font-semibold text-white">${p.title}</span>
                </div>
                <p class="text-xs text-slate-400 mt-1">${p.highlight}</p>
              </div>
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-medium transition">
                查閱論文 ↗
              </a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 5. Latest News & Milestones -->
      <div class="p-5 rounded-xl bg-[#161922] border border-white/[0.06]">
        <h3 class="text-sm font-bold text-white mb-3">最新重大新聞、併購與合約動態</h3>
        <div class="space-y-2">
          ${stock.news.map(n => `
            <div class="p-3 rounded-lg bg-[#11131a] border border-white/[0.05] flex items-start justify-between gap-3">
              <div class="flex items-start gap-3">
                <span class="font-mono-num text-xs px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 shrink-0 mt-0.5">${n.date}</span>
                <div>
                  <div class="text-xs font-medium text-white">${n.title}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">來源: ${n.source}</div>
                </div>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 shrink-0">${n.impact}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeStockModal = function() {
  const modal = document.getElementById('stockDetailModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
};

// ============================================================================
// SIDE-BY-SIDE STOCK COMPARISON MATRIX (並排 PK 比較台)
// ============================================================================
window.toggleCompareStock = function(stockId) {
  const idx = AppState.selectedCompareIds.indexOf(stockId);
  if (idx >= 0) {
    if (AppState.selectedCompareIds.length <= 1) {
      alert('請至少保留 1 檔股票於比較台中！');
      return;
    }
    AppState.selectedCompareIds.splice(idx, 1);
  } else {
    if (AppState.selectedCompareIds.length >= 4) {
      AppState.selectedCompareIds.shift();
    }
    AppState.selectedCompareIds.push(stockId);
  }
  renderStocksGrid();
  renderCompareTable();
};

function renderCompareTable() {
  const container = document.getElementById('compareMatrixContainer');
  const selectorBar = document.getElementById('compareSelectorPills');
  if (!container) return;

  if (selectorBar) {
    selectorBar.innerHTML = window.QUANTUM_DATA.stocks.map(s => {
      const active = AppState.selectedCompareIds.includes(s.id);
      return `
        <button
          onclick="toggleCompareStock('${s.id}')"
          class="px-3 py-1 rounded-lg text-xs font-mono-num transition ${
            active
              ? 'bg-white text-slate-950 font-bold'
              : 'bg-[#161922] border border-white/[0.07] text-slate-400 hover:text-white'
          }"
        >
          ${active ? '✓ ' : '+ '}${s.ticker}
        </button>
      `;
    }).join('');
  }

  const selected = AppState.selectedCompareIds
    .map(id => window.QUANTUM_DATA.stocks.find(s => s.id === id))
    .filter(Boolean);

  const rows = [
    { label: '公司名稱 / 交易所', render: s => `<span class="font-semibold text-white">${s.name}</span> <span class="text-xs text-slate-400">(${s.exchange})</span>` },
    { label: '總市值 / 參考股價', render: s => `<span class="font-mono-num text-white font-bold">${s.marketCap}</span> <span class="text-xs text-slate-400">($${s.price})</span>` },
    { label: '最新營收 (Revenue)', render: s => `<span class="font-mono-num text-white font-semibold">${s.revenue}</span>` },
    { label: '營收年增率 (YoY)', render: s => `<span class="font-mono-num text-emerald-400">${s.revenueYoY}</span>` },
    { label: 'yfinance 毛利率 (Gross Margin)', render: s => `<span class="font-mono-num text-white font-bold">${(AppState.liveData?.stocks_financials?.[s.ticker]?.gross_margin_display) || 'N/A'}</span>` },
    { label: 'Debt-to-EBITDA 與財務槓桿', render: s => `<div class="font-mono-num text-white font-semibold">${(AppState.liveData?.stocks_financials?.[s.ticker]?.debt_to_ebitda_display) || 'N/A'}</div><div class="text-[11px] text-slate-400 mt-0.5">${(AppState.liveData?.stocks_financials?.[s.ticker]?.leverage_status) || ''}</div>` },
    { label: '現金儲備與跑道', render: s => `<div class="font-mono-num text-white font-semibold">${s.cashReserves}</div><div class="text-[11px] text-slate-400">${s.runway}</div>` },
    { label: '在手訂單 / RPO', render: s => `<span class="text-xs text-slate-300">${s.bookingsOrBacklog}</span>` },
    { label: '物理技術路線 (Modality)', render: s => `<span class="text-xs text-slate-200 font-medium">${s.modality}</span>` },
    { label: '主力硬體 / 產品', render: s => `<span class="text-xs text-slate-300">${s.flagshipProduct}</span>` },
    { label: '雙量子閘保真度 / 安全等級', render: s => `<span class="font-mono-num text-xs text-white font-semibold">${s.twoQubitFidelity}</span>` },
    { label: '邏輯位元與量子糾錯 (QEC)', render: s => `<div class="text-xs text-slate-200">${s.logicalQubits}</div><div class="text-[11px] text-slate-400 mt-0.5">${s.errorCorrection}</div>` },
    { label: '量子加密 / 後量子密碼定位', render: s => `<span class="text-xs text-slate-300">${s.pqcOrCryptoRole}</span>` },
    { label: '綜合優勢評分 / 研報', render: s => `<div class="font-mono-num text-xs text-indigo-300 font-bold mb-1.5">優勢總分：${(AppState.liveData?.stocks_financials?.[s.ticker]?.overall_advantage_score) || '—'} / 100</div><button onclick="openStockModal('${s.id}')" class="px-3 py-1 rounded-lg bg-[#161922] hover:bg-[#1c202b] border border-white/[0.1] text-slate-200 text-xs transition">開啟完整研報 →</button>` }
  ];

  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-white/[0.08] bg-[#161922]">
            <th class="p-3.5 text-xs font-semibold text-slate-400 w-44">比較維度 / 指標</th>
            ${selected.map(s => `
              <th class="p-3.5 min-w-[220px]">
                <div class="flex items-center justify-between">
                  <span class="font-mono-num text-base font-bold text-white">${s.ticker}</span>
                  <button onclick="toggleCompareStock('${s.id}')" class="text-xs text-slate-500 hover:text-slate-300">移除 ✕</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-white/[0.05] text-sm">
          ${rows.map(r => `
            <tr class="hover:bg-white/[0.02] transition">
              <td class="p-3.5 text-xs font-medium text-slate-400 bg-[#0d0f15]/60">${r.label}</td>
              ${selected.map(s => `<td class="p-3.5 align-top">${r.render(s)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ============================================================================
// ETF SECTION RENDERER
// ============================================================================
function renderEtfsSection() {
  const container = document.getElementById('etfCardsContainer');
  if (!container) return;

  container.innerHTML = window.QUANTUM_DATA.etfs.map(etf => `
    <div class="quantum-card-static p-6 space-y-5">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
        <div>
          <div class="flex items-center gap-2.5">
            <span class="font-mono-num text-2xl font-bold text-white">${etf.ticker}</span>
            <span class="text-xs px-2.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">${etf.exchange}</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full badge-pure-compute">成立於 ${etf.inceptionDate}</span>
          </div>
          <h3 class="text-base font-bold text-slate-200 mt-1">${etf.name}</h3>
          <p class="text-xs text-slate-400 mt-0.5">追蹤指數 / 策略：${etf.underlyingIndex}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] text-center min-w-[105px]">
            <div class="text-[11px] text-slate-400">資產規模 (AUM)</div>
            <div class="font-mono-num text-sm font-bold text-white mt-0.5">${etf.aum.split(' ')[0]}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] text-center min-w-[90px]">
            <div class="text-[11px] text-slate-400">總費用率</div>
            <div class="font-mono-num text-sm font-bold text-white mt-0.5">${etf.expenseRatio}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] text-center min-w-[100px]">
            <div class="text-[11px] text-slate-400">近 1 年報酬</div>
            <div class="font-mono-num text-sm font-bold text-emerald-400 mt-0.5">${etf.oneYearReturn}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] text-center min-w-[110px]">
            <div class="text-[11px] text-slate-400">5 年年化 (CAGR)</div>
            <div class="font-mono-num text-sm font-bold text-white mt-0.5">${etf.fiveYearCagr.split(' ')[0]}</div>
          </div>
        </div>
      </div>

      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${etf.summary}</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="text-xs font-bold text-white mb-2.5">核心成分股與量子權重代表</div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-slate-400 border-b border-white/[0.07]">
                  <th class="pb-2 text-left">代號</th>
                  <th class="pb-2 text-left">公司名稱</th>
                  <th class="pb-2 text-right">參考權重</th>
                  <th class="pb-2 text-left pl-3">在指數中之角色</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/[0.05]">
                ${etf.topHoldings.map(h => `
                  <tr>
                    <td class="py-2 font-mono-num font-bold text-white">${h.ticker}</td>
                    <td class="py-2 text-slate-300">${h.name}</td>
                    <td class="py-2 font-mono-num text-right text-slate-200">${h.weight}</td>
                    <td class="py-2 pl-3 text-slate-400">${h.role}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] text-xs space-y-1.5">
            <div><span class="text-slate-400">加權與再平衡機制：</span><span class="text-slate-200">${etf.weightingMethod}</span></div>
            <div><span class="text-slate-400">純量子標的佔比：</span><span class="text-white font-medium">${etf.purePlayAllocation}</span></div>
          </div>
          <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-emerald-400 text-xs">
            <div class="font-bold text-white mb-1">投資優勢 (Pros)</div>
            <ul class="space-y-1 text-slate-300">
              ${etf.pros.map(p => `<li>• ${p}</li>`).join('')}
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-amber-400 text-xs">
            <div class="font-bold text-white mb-1">注意事項 (Cons)</div>
            <ul class="space-y-1 text-slate-300">
              ${etf.cons.map(c => `<li>• ${c}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// SEC PROSPECTUS DEEP-DIVE & PRE-IPO UNICORN PIPELINE RENDERER
// ============================================================================
function renderPreIpoSection() {
  const pa = window.QUANTUM_DATA.prospectusAnalysis;

  // 1. Render Active SEC Filings (S-1 / S-4 / Pre-Filing)
  const activeFilingsEl = document.getElementById('prospectusActiveFilingsContainer');
  if (activeFilingsEl && pa?.activeFilings) {
    activeFilingsEl.innerHTML = pa.activeFilings.map(f => `
      <div class="quantum-card-static p-6 flex flex-col justify-between space-y-4">
        <div class="space-y-4">
          <div class="flex flex-wrap items-start justify-between gap-2 border-b border-white/[0.07] pb-3.5">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="text-base sm:text-lg font-bold text-white">${f.company}</h4>
                <span class="text-[11px] font-mono-num px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-400/25 font-semibold">${f.proposedTicker}</span>
              </div>
              <div class="text-xs text-slate-400 mt-1">${f.dealPath}</div>
            </div>
            <span class="text-[11px] font-mono-num px-2.5 py-1 rounded bg-[#161922] text-slate-200 border border-white/[0.08]">${f.filingType}</span>
          </div>

          <!-- Prospectus Core Financial Metrics Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="text-[11px] text-slate-400">目標估值 / 定價結構</div>
              <div class="font-mono-num font-bold text-white mt-0.5">${f.targetValuation}</div>
            </div>
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="text-[11px] text-slate-400">SEC 遞件與審查時程</div>
              <div class="font-mono-num font-semibold text-slate-200 mt-0.5">${f.filingDate}</div>
            </div>
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="text-[11px] text-slate-400">FY2025 招股書揭露營收</div>
              <div class="font-mono-num font-semibold text-emerald-400 mt-0.5">${f.fy25Revenue}</div>
            </div>
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="text-[11px] text-slate-400">2026 最新期中營收進度</div>
              <div class="font-mono-num font-semibold text-slate-200 mt-0.5">${f.h1_2026Revenue}</div>
            </div>
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] sm:col-span-2">
              <div class="text-[11px] text-slate-400">損益表淨虧損與累計赤字 (Net Loss &amp; Accumulated Deficit)</div>
              <div class="font-mono-num text-rose-300 mt-0.5">${f.netLossAndDeficit}</div>
            </div>
            <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] sm:col-span-2">
              <div class="text-[11px] text-slate-400">現金部位、SPAC 信託與過橋融資 / 承銷團</div>
              <div class="text-slate-200 mt-0.5">${f.cashAndProceeds}</div>
              <div class="text-[11px] text-slate-400 mt-1">${f.underwritersOrSponsor}</div>
            </div>
          </div>

          <!-- Going Concern / Audit Opinion Box -->
          <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 ${f.goingConcernFlag ? 'border-l-amber-400' : 'border-l-emerald-400'} text-xs">
            <div class="font-bold ${f.goingConcernFlag ? 'text-amber-300' : 'text-emerald-300'} mb-1">
              ${f.goingConcernFlag ? '⚠️ 招股書審計意見與流動性風險提示 (Going Concern & Liquidity)' : '✅ 招股書財務體質與交割保護條款'}
            </div>
            <p class="text-slate-300 leading-relaxed">${f.goingConcernText}</p>
          </div>

          <!-- Pros & Risks from Prospectus -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.05] space-y-1.5">
              <div class="font-bold text-emerald-400">招股書核心亮點 (Bull Case)</div>
              ${f.pros.map(p => `<div class="text-slate-300 leading-relaxed">• ${p}</div>`).join('')}
            </div>
            <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.05] space-y-1.5">
              <div class="font-bold text-rose-400">招股書風險揭露 (Risk Factors)</div>
              ${f.risks.map(r => `<div class="text-slate-300 leading-relaxed">• ${r}</div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Bottom Verdict -->
        <div class="pt-3 border-t border-white/[0.07] text-xs font-medium text-white">
          ${f.verdict}
        </div>
      </div>
    `).join('');
  }

  // 2. Render 2026 Newly Listed 6-Company SEC Prospectus Benchmark Table
  const benchEl = document.getElementById('prospectusBenchmarksContainer');
  if (benchEl && pa?.recent2026Benchmarks) {
    benchEl.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-white/[0.08] bg-[#161922] text-slate-400">
              <th class="py-3 px-4 font-semibold">股票代號 &amp; 公司</th>
              <th class="py-3 px-3 font-semibold">SEC 招股書型態與生效時間</th>
              <th class="py-3 px-3 font-semibold">FY25 招股書營收</th>
              <th class="py-3 px-3 font-semibold">簽約 Bookings / 2026 財測</th>
              <th class="py-3 px-3 font-semibold">招股書揭露虧損規模</th>
              <th class="py-3 px-3 font-semibold">IPO / SPAC 募資與現金</th>
              <th class="py-3 px-4 font-semibold min-w-[240px]">招股書關鍵投資啟示</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.05]">
            ${pa.recent2026Benchmarks.map(b => `
              <tr class="hover:bg-white/[0.02] transition align-top">
                <td class="py-3.5 px-4">
                  <div class="font-mono-num font-bold text-sm text-white">${b.ticker}</div>
                  <div class="text-slate-400 mt-0.5">${b.company}</div>
                </td>
                <td class="py-3.5 px-3">
                  <span class="font-mono-num px-2 py-0.5 rounded bg-white/[0.05] text-slate-200 border border-white/[0.08]">${b.filingType}</span>
                  <div class="text-slate-400 mt-1 leading-relaxed">${b.effectiveAndListDate}</div>
                </td>
                <td class="py-3.5 px-3 font-mono-num font-bold text-emerald-400">${b.fy25Revenue}</td>
                <td class="py-3.5 px-3 font-mono-num text-slate-200 leading-relaxed">${b.bookingsOrGuidance}</td>
                <td class="py-3.5 px-3 font-mono-num text-rose-300 leading-relaxed">${b.lossMetric}</td>
                <td class="py-3.5 px-3 font-mono-num text-slate-200 leading-relaxed">${b.proceedsAndCash}</td>
                <td class="py-3.5 px-4 text-slate-300 leading-relaxed">${b.keyProspectusInsight}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 3. Render Institutional Prospectus Due-Diligence Checklist
  const checkEl = document.getElementById('prospectusChecklistContainer');
  if (checkEl && pa?.checklistRules) {
    checkEl.innerHTML = `
      <div class="space-y-4">
        <div>
          <div class="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Institutional SEC Filing Due Diligence</div>
          <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">機構投資人審閱量子公司 SEC 招股書 (S-1 / S-4 / F-4) 的 5 大避坑與淘金法則</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          ${pa.checklistRules.map((rule, idx) => `
            <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}">
              <div class="font-bold text-white mb-1.5">${rule.title}</div>
              <p class="text-slate-300 leading-relaxed">${rule.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 3B. Render Firstrade Broker Orderability & Restrictions Guide
  const ftEl = document.getElementById('firstradeGuideContainer');
  if (ftEl && pa?.firstradeGuide) {
    ftEl.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.07] pb-3.5">
          <div>
            <div class="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Broker Execution &amp; Orderability Check</div>
            <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">Firstrade (第一證券) 下單實測：哪些追蹤標的無法下單、需改代號或受交易限制？</h3>
          </div>
          <span class="text-[11px] font-mono-num px-2.5 py-1 rounded bg-[#161922] border border-white/[0.08] text-slate-300">2026/10 交易規則實測</span>
        </div>
        <div class="space-y-3 text-xs">
          ${pa.firstradeGuide.map(g => `
            <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              <div class="lg:col-span-4 space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="font-bold text-white">${g.category}</span>
                  <span class="text-[11px] px-2 py-0.5 rounded border ${g.statusColor}">${g.statusBadge}</span>
                </div>
                <div class="font-mono-num text-slate-200 whitespace-pre-line leading-relaxed pt-1">${g.tickers}</div>
              </div>
              <div class="lg:col-span-5 text-slate-300 whitespace-pre-line leading-relaxed">
                <span class="text-slate-400 font-semibold block mb-0.5">無法下單 / 限制原因：</span>${g.reason}
              </div>
              <div class="lg:col-span-3 text-slate-200 whitespace-pre-line leading-relaxed bg-[#11131a] p-3 rounded-lg border border-white/[0.05]">
                <span class="text-indigo-300 font-semibold block mb-0.5">💡 Firstrade 實戰替代方案：</span>${g.workaround}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. Render Full 12 Pre-IPO & Pending Listing Unicorns Grid
  const container = document.getElementById('preIpoGridContainer');
  if (!container) return;

  container.innerHTML = window.QUANTUM_DATA.preIpoPipeline.map(item => `
    <div class="quantum-card p-6 flex flex-col justify-between space-y-4">
      <div>
        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold text-white">${item.name}</h3>
              <span class="text-[11px] font-mono-num px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">${item.expectedTicker}</span>
            </div>
            <div class="text-xs text-slate-400 mt-1">狀態：${item.status}</div>
          </div>
          <div class="text-right">
            <div class="text-[11px] text-slate-400">IPO 準備度</div>
            <div class="font-mono-num text-base font-bold text-white">${item.ipoReadinessScore} / 100</div>
          </div>
        </div>

        <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
          <div class="h-full bg-indigo-400" style="width: ${item.ipoReadinessScore}%"></div>
        </div>

        <div class="grid grid-cols-2 gap-2.5 mb-4 text-xs">
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
            <div class="text-slate-400">最新估值 (Valuation)</div>
            <div class="font-mono-num font-bold text-white mt-0.5">${item.latestValuation}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06]">
            <div class="text-slate-400">預計上市時間窗</div>
            <div class="font-mono-num font-semibold text-slate-200 mt-0.5">${item.expectedTimeline}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] col-span-2">
            <div class="text-slate-400">累積募資與核心股東 (Key Backers)</div>
            <div class="text-slate-200 mt-0.5">${item.totalFunding} — <span class="text-slate-400">${item.parentOrBackers}</span></div>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.05] text-xs space-y-1.5 mb-4">
          <div><span class="text-slate-400">核心技術路線：</span><span class="text-white font-medium">${item.modality}</span></div>
          <div><span class="text-slate-400">旗艦系統與指標：</span><span class="text-slate-300">${item.flagshipSystem}</span></div>
          <div><span class="text-slate-400">密碼/軟體與護城河：</span><span class="text-slate-300">${item.cryptoOrSoftware}</span></div>
        </div>

        <div class="space-y-1.5 text-xs text-slate-400">
          ${item.highlights.map(h => `
            <div class="flex items-start gap-2">
              <span class="text-indigo-400">▸</span>
              <span class="leading-relaxed text-slate-300">${h}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// MOSCA'S THEOREM INTERACTIVE CALCULATOR
// ============================================================================
function initMoscaCalculator() {
  const xInput = document.getElementById('moscaX');
  const yInput = document.getElementById('moscaY');
  const zInput = document.getElementById('moscaZ');
  if (!xInput || !yInput || !zInput) return;

  const updateMosca = () => {
    const x = parseInt(xInput.value, 10) || 0;
    const y = parseInt(yInput.value, 10) || 0;
    const z = parseInt(zInput.value, 10) || 1;

    document.getElementById('moscaXVal').textContent = `${x} 年`;
    document.getElementById('moscaYVal').textContent = `${y} 年`;
    document.getElementById('moscaZVal').textContent = `${z} 年 (${2026 + z} 年)`;

    const sum = x + y;
    const resultBox = document.getElementById('moscaResultBox');
    if (!resultBox) return;

    if (sum >= z) {
      resultBox.className = 'p-4 rounded-xl bg-[#161922] border border-white/[0.08] border-l-2 border-l-rose-400';
      resultBox.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-white">高度風險：X + Y (${sum} 年) ≥ Z (${z} 年) — 已處於「現在竊取、未來解密 (HNDL)」暴露期</span>
          <span class="font-mono-num text-xs px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">超標 ${sum - z} 年</span>
        </div>
        <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
          攻擊者現在攔截儲存的傳統 RSA/ECC 加密封包，將在保密期限屆滿前被 ${2026 + z} 年問世的容錯量子電腦解開。建議立即導入 <strong>Cloudflare (NET)、IBM Quantum Safe、SEALSQ (LAES) 或 Palo Alto Networks (PANW)</strong> 進行 NIST FIPS 203 (ML-KEM) 升級。
        </p>
      `;
    } else {
      resultBox.className = 'p-4 rounded-xl bg-[#161922] border border-white/[0.08] border-l-2 border-l-emerald-400';
      resultBox.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-white">尚有緩衝：X + Y (${sum} 年) &lt; Z (${z} 年) — 距離最後強制遷移期限尚餘 ${z - sum} 年</span>
          <span class="font-mono-num text-xs px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">安全餘裕 ${z - sum} 年</span>
        </div>
        <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
          建議於 ${2026 + (z - sum)} 年前啟動密碼物料清單 (CBOM) 盤點，以符合美國 CNSA 2.0 於 2030 年全面淘汰傳統公鑰密碼之規範。
        </p>
      `;
    }
  };

  xInput.addEventListener('input', updateMosca);
  yInput.addEventListener('input', updateMosca);
  zInput.addEventListener('input', updateMosca);
  updateMosca();
}

// ============================================================================
// PAPERS & INDICATORS RENDERER
// ============================================================================
function renderPapersSection() {
  const container = document.getElementById('papersLibraryContainer');
  if (!container) return;

  container.innerHTML = window.QUANTUM_DATA.papersLibrary.map(p => `
    <div class="quantum-card p-5 flex flex-col justify-between gap-3">
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-[11px] px-2.5 py-0.5 rounded-full badge-pure-compute font-medium">${p.category}</span>
          <span class="font-mono-num text-xs text-slate-400">${p.date} · ${p.journal}</span>
        </div>
        <h3 class="text-sm sm:text-base font-bold text-white leading-snug mb-1">${p.title}</h3>
        <div class="text-xs text-slate-400 mb-3">機構：${p.institution} — ${p.authors}</div>

        <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.06] text-xs font-mono-num text-slate-200 mb-3">
          關鍵數據：${p.keyMetrics}
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">
          <strong class="text-white">投資啟示：</strong>${p.investmentTakeaway}
        </p>
      </div>
      <div class="pt-3 border-t border-white/[0.06] flex justify-end">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-xs px-3 py-1.5 rounded-lg bg-[#161922] hover:bg-[#1c202b] border border-white/[0.1] text-slate-200 font-medium transition">
          閱讀原始論文 ↗
        </a>
      </div>
    </div>
  `).join('');
}

function renderIndicatorsSection() {
  const techContainer = document.getElementById('techIndicatorsContainer');
  const econContainer = document.getElementById('econIndicatorsContainer');

  if (techContainer) {
    techContainer.innerHTML = window.QUANTUM_DATA.indicatorsGuide.technical.map(ind => `
      <div class="quantum-card-static p-5 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h4 class="text-sm font-bold text-white">${ind.name}</h4>
          <span class="text-xs font-mono-num px-2.5 py-0.5 rounded bg-[#161922] text-slate-300 border border-white/[0.07]">${ind.benchmark}</span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">${ind.meaning}</p>
        <div class="text-xs text-slate-200 pt-1">代表領先標的：<span class="font-mono-num">${ind.leaders}</span></div>
      </div>
    `).join('');
  }

  if (econContainer) {
    econContainer.innerHTML = window.QUANTUM_DATA.indicatorsGuide.economic.map(ind => `
      <div class="quantum-card-static p-5 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h4 class="text-sm font-bold text-white">${ind.name}</h4>
          <span class="text-xs font-mono-num px-2.5 py-0.5 rounded bg-[#161922] text-slate-300 border border-white/[0.07]">${ind.benchmark}</span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">${ind.meaning}</p>
        <div class="text-xs text-slate-200 pt-1">代表領先標的：<span class="font-mono-num">${ind.leaders}</span></div>
      </div>
    `).join('');
  }
}

// ============================================================================
// MODALITY PEER-GROUP ARENA RENDERER (技術流派分類與同類橫向評比擂台)
// ============================================================================
window.setArenaModality = function(modId) {
  AppState.activeArenaModality = modId;
  renderModalityArena();
};

function renderModalityArena() {
  const pillBar = document.getElementById('arenaFilterPills');
  const container = document.getElementById('modalityArenaContainer');
  if (!container || !window.QUANTUM_DATA.modalityArena) return;

  const arenas = window.QUANTUM_DATA.modalityArena;

  if (pillBar) {
    const allBtn = `
      <button
        onclick="setArenaModality('all')"
        class="filter-pill ${AppState.activeArenaModality === 'all' ? 'active' : ''} px-3.5 py-1.5 rounded-lg text-xs"
      >
        全部 8 大流派總覽
      </button>
    `;
    const modBtns = arenas.map(a => `
      <button
        onclick="setArenaModality('${a.id}')"
        class="filter-pill ${AppState.activeArenaModality === a.id ? 'active' : ''} px-3.5 py-1.5 rounded-lg text-xs"
      >
        ${a.name.replace(/^\d+\.\s*/, '').split(' (')[0]}
      </button>
    `).join('');
    pillBar.innerHTML = allBtn + modBtns;
  }

  const visibleArenas = AppState.activeArenaModality === 'all'
    ? arenas
    : arenas.filter(a => a.id === AppState.activeArenaModality);

  container.innerHTML = visibleArenas.map(arena => `
    <div class="quantum-card-static p-6 space-y-5">
      <!-- Arena Header -->
      <div class="border-b border-white/[0.07] pb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-white">${arena.name}</h3>
          <p class="text-xs text-indigo-300 mt-1">${arena.tagline}</p>
        </div>
        <div class="text-xs px-3 py-1.5 rounded-lg bg-[#161922] border border-white/[0.07] text-slate-300 shrink-0">
          運作環境：<span class="text-white font-medium">${arena.operatingTemp}</span>
        </div>
      </div>

      <!-- Physics & Pros/Cons Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06]">
          <div class="font-bold text-white mb-1.5">底層物理與操控原理</div>
          <p class="text-slate-400 leading-relaxed">${arena.physicsPrinciple}</p>
        </div>
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-emerald-400">
          <div class="font-bold text-white mb-1.5">核心技術優勢 (Pros)</div>
          <p class="text-slate-300 leading-relaxed">${arena.corePros}</p>
        </div>
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-amber-400">
          <div class="font-bold text-white mb-1.5">主要工程瓶頸 (Cons)</div>
          <p class="text-slate-300 leading-relaxed">${arena.coreCons}</p>
        </div>
      </div>

      <!-- Verdict Banner -->
      <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.07] text-xs text-slate-300 leading-relaxed">
        <strong class="text-white">同類競爭格局總評：</strong>${arena.verdictSummary}
      </div>

      <!-- Intra-Category Peer Comparison Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-white/[0.08] text-slate-400">
              <th class="py-3 px-3 min-w-[135px]">同類競爭標的</th>
              <th class="py-3 px-3 min-w-[135px]">同類地位評級</th>
              <th class="py-3 px-3 min-w-[195px]">具體技術架構與差異化</th>
              <th class="py-3 px-3 min-w-[195px]">保真度 / 量子位元 / 認證指標</th>
              <th class="py-3 px-3 min-w-[185px]">營收 / 訂單 / 現金實力</th>
              <th class="py-3 px-3 min-w-[160px]">四維度同類評分</th>
              <th class="py-3 px-3 min-w-[210px]">同類橫向 PK 點評</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.05]">
            ${arena.peers.map(peer => `
              <tr class="hover:bg-white/[0.02] transition align-top">
                <td class="py-3.5 px-3">
                  <div class="font-mono-num text-sm font-bold text-white">${peer.ticker}</div>
                  <div class="font-medium text-slate-300 mt-0.5">${peer.name}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">${peer.status}</div>
                </td>
                <td class="py-3.5 px-3">
                  <span class="inline-block px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.09] text-slate-200 font-medium leading-snug">
                    ${peer.peerRank}
                  </span>
                </td>
                <td class="py-3.5 px-3 text-slate-300 leading-relaxed">${peer.architecture}</td>
                <td class="py-3.5 px-3 font-mono-num text-slate-200 leading-relaxed">${peer.fidelityAndQubits}</td>
                <td class="py-3.5 px-3 text-slate-300 leading-relaxed">${peer.commercialTraction}</td>
                <td class="py-3.5 px-3">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-slate-400">綜合總分</span>
                    <span class="font-mono-num font-bold text-sm text-white">${peer.scores.total}</span>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div class="h-full bg-indigo-400" style="width: ${peer.scores.total}%"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[11px] text-slate-400 font-mono-num">
                    <span>保真 <b class="text-slate-200">${peer.scores.fidelity}</b></span>
                    <span>擴展 <b class="text-slate-200">${peer.scores.scalability}</b></span>
                    <span>商業 <b class="text-slate-200">${peer.scores.commercial}</b></span>
                    <span>資金 <b class="text-slate-200">${peer.scores.cash}</b></span>
                  </div>
                </td>
                <td class="py-3.5 px-3 text-slate-400 leading-relaxed">${peer.comparisonNote}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// AUTOMATED YFINANCE (GROSS MARGIN / DEBT-TO-EBITDA) & ARXIV ADVANTAGE ENGINE
// ============================================================================
function initLiveAnalyticsControls() {
  const catFilter = document.getElementById('liveTableCategoryFilter');
  if (catFilter) {
    catFilter.addEventListener('change', (e) => {
      AppState.liveTableCategory = e.target.value;
      renderLiveFinancialsTable();
    });
  }

  const sortSelect = document.getElementById('liveTableSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.liveTableSort = e.target.value;
      renderLiveFinancialsTable();
    });
  }
}

// ============================================================================
// TECH-PEDIA: POPULAR-SCIENCE GUIDE & PAPER-BACKED EVOLUTIONARY LINEAGES
// ============================================================================
window.setTechPediaLineage = function(id) {
  AppState.activeTechPediaId = id;
  renderTechPediaSection();
};

function renderTechPediaSection() {
  const pillBar = document.getElementById('techPediaFilterPills');
  const container = document.getElementById('techPediaContainer');
  if (!container || !window.QUANTUM_DATA.techLineages) return;

  const lineages = window.QUANTUM_DATA.techLineages;

  if (pillBar) {
    const allBtn = `
      <button
        onclick="setTechPediaLineage('all')"
        class="filter-pill ${AppState.activeTechPediaId === 'all' ? 'active' : ''} px-3.5 py-1.5 rounded-lg text-xs"
      >
        全部 7 大技術路線脈絡
      </button>
    `;
    const itemBtns = lineages.map(l => `
      <button
        onclick="setTechPediaLineage('${l.id}')"
        class="filter-pill ${AppState.activeTechPediaId === l.id ? 'active' : ''} px-3.5 py-1.5 rounded-lg text-xs"
      >
        ${l.shortName}
      </button>
    `).join('');
    pillBar.innerHTML = allBtn + itemBtns;
  }

  const visible = AppState.activeTechPediaId === 'all'
    ? lineages
    : lineages.filter(l => l.id === AppState.activeTechPediaId);

  const livePapersAll = AppState.liveData?.latest_arxiv_papers || [];

  container.innerHTML = visible.map(l => {
    const liveModalityPapers = livePapersAll.filter(p => p.modality_id === l.id);

    return `
      <div class="quantum-card-static p-6 sm:p-7 space-y-6">
        <!-- 1. Lineage Header & Representative Tickers -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-white">${l.name}</h3>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1.5">
              <span>已上市代表美股：<strong class="font-mono-num text-white">${l.representativeStocks}</strong></span>
              <span>·</span>
              <span>未上市代表獨角獸：<strong class="text-slate-200">${l.representativePreIpo}</strong></span>
            </div>
          </div>
          <button onclick="setArenaModality('${l.id === 'pqc-crypto' ? 'pqc-crypto' : l.id}'); switchSection('modality-arena')" class="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#161922] hover:bg-[#1c202b] border border-white/[0.1] text-slate-200 text-xs font-medium transition">
            查看此路線同類公司橫向評比 →
          </button>
        </div>

        <!-- 2. Popular-Science Analogy & Core Intuition (白話科普比喻) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-indigo-400">
            <div class="text-xs font-bold text-white mb-1.5">💡 一分鐘白話科普比喻（零物理背景也能秒懂）</div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${l.analogy}</p>
          </div>
          <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] border-l-2 border-l-emerald-400">
            <div class="text-xs font-bold text-white mb-1.5">🎯 為什麼科學家與科技巨頭選擇這條路？</div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${l.whyEasyToUnderstand}</p>
          </div>
        </div>

        <!-- 3. How It Works: 3-Step Physical Mechanism -->
        <div class="space-y-2.5">
          <div class="text-xs font-semibold uppercase tracking-wider text-slate-400">底層運作三部曲：如何編碼、如何執行邏輯閘、如何讀出答案</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="font-mono-num text-[11px] text-indigo-300 font-semibold mb-1">STEP 01 · QUBIT ENCODING</div>
              <div class="font-bold text-white mb-1.5">如何定義 |0⟩ 與 |1⟩？</div>
              <p class="text-slate-300 leading-relaxed whitespace-pre-line">${l.howItWorks.qubitEncoding}</p>
            </div>
            <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="font-mono-num text-[11px] text-indigo-300 font-semibold mb-1">STEP 02 · QUANTUM GATES</div>
              <div class="font-bold text-white mb-1.5">如何操控與產生糾纏？</div>
              <p class="text-slate-300 leading-relaxed whitespace-pre-line">${l.howItWorks.gateMechanism}</p>
            </div>
            <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06]">
              <div class="font-mono-num text-[11px] text-indigo-300 font-semibold mb-1">STEP 03 · MEASUREMENT</div>
              <div class="font-bold text-white mb-1.5">如何讀出運算結果？</div>
              <p class="text-slate-300 leading-relaxed whitespace-pre-line">${l.howItWorks.readoutMethod}</p>
            </div>
          </div>
        </div>

        <!-- 4. Engineering Specifications & Current Bottleneck -->
        <div class="p-4 rounded-xl bg-[#161922] border border-white/[0.06] space-y-3 text-xs">
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 pb-3 border-b border-white/[0.06]">
            <div>
              <div class="text-[11px] text-slate-400">相干時間 / 壽命</div>
              <div class="font-mono-num font-semibold text-white mt-0.5">${l.engineeringSpecs.coherenceTime}</div>
            </div>
            <div>
              <div class="text-[11px] text-slate-400">雙閘保真度 / 標準</div>
              <div class="font-mono-num font-semibold text-emerald-400 mt-0.5">${l.engineeringSpecs.twoQubitFidelity}</div>
            </div>
            <div>
              <div class="text-[11px] text-slate-400">邏輯閘操作速度</div>
              <div class="font-mono-num font-semibold text-white mt-0.5">${l.engineeringSpecs.gateSpeed}</div>
            </div>
            <div>
              <div class="text-[11px] text-slate-400">位元連通結構</div>
              <div class="font-medium text-slate-200 mt-0.5">${l.engineeringSpecs.connectivity}</div>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <div class="text-[11px] text-slate-400">運作環境需求</div>
              <div class="font-medium text-slate-200 mt-0.5">${l.engineeringSpecs.operatingEnv}</div>
            </div>
          </div>
          <div class="text-slate-300 leading-relaxed">
            <strong class="text-amber-300">當前工程瓶頸與擴展解法：</strong>${l.currentBottleneck}
          </div>
        </div>

        <!-- 5. Paper-Backed Evolutionary Timeline (整條技術線的發展脈絡與里程碑論文佐證) -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-white">📜 整條技術線發展脈絡與奠基/突破論文佐證 (Evolutionary Timeline)</h4>
            <span class="text-[11px] text-slate-400">點擊各階段右側按鈕可直接查閱原始期刊論文</span>
          </div>

          <div class="relative pl-5 border-l border-white/[0.12] space-y-4">
            ${l.timeline.map(step => `
              <div class="relative p-4 rounded-xl bg-[#161922] border border-white/[0.06] hover:border-white/[0.14] transition">
                <span class="absolute -left-[25px] top-5 w-2.5 h-2.5 rounded-full bg-indigo-400 ring-4 ring-[#11131a]"></span>
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1.5">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="font-mono-num text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-400/30">${step.year}</span>
                    <span class="text-sm font-bold text-white">${step.stage}</span>
                  </div>
                  <a href="${step.paperUrl}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center gap-1 text-xs px-3 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition font-medium">
                    <span>佐證論文 (${step.journal.split(' ')[0]})</span>
                    <span>↗</span>
                  </a>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed mb-2">${step.milestone}</p>
                <div class="text-[11px] font-mono-num text-slate-400 bg-[#11131a] px-3 py-1.5 rounded-lg border border-white/[0.05]">
                  📄 論文文獻：<span class="text-slate-200">${step.paperTitle}</span> — <em>${step.journal}</em>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Live Auto-Updated arXiv Progress for This Modality -->
        <div class="p-4 rounded-xl bg-[#0d0f15] border border-white/[0.07] space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <h4 class="text-xs sm:text-sm font-bold text-white">此技術路線最新 arXiv 論文進度追蹤（由 Python 自動同步更新）</h4>
            </div>
            <span class="text-[11px] font-mono-num text-slate-400">資料源：data/quantum_live_data.json</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${liveModalityPapers.length > 0 ? liveModalityPapers.map(p => `
              <div class="p-3.5 rounded-xl bg-[#161922] border border-white/[0.06] flex flex-col justify-between gap-2">
                <div>
                  <div class="flex items-center justify-between text-[11px] font-mono-num text-slate-400 mb-1">
                    <span>arXiv:${p.arxiv_id}</span>
                    <span>${p.published}</span>
                  </div>
                  <div class="text-xs font-bold text-white leading-snug mb-1">${p.title}</div>
                  <div class="text-[11px] text-slate-400 mb-1.5">${p.authors}</div>
                  <p class="text-[11px] text-slate-300 leading-relaxed">${p.summary}</p>
                </div>
                <div class="pt-2 border-t border-white/[0.05] flex justify-end gap-2 text-[11px]">
                  <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-indigo-300 hover:text-white transition">arXiv 摘要 ↗</a>
                  <a href="${p.pdf_url || p.url}" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition">PDF 全文 ↗</a>
                </div>
              </div>
            `).join('') : `
              <div class="text-xs text-slate-400 col-span-2">目前正在同步此技術路線最新 arXiv 預印本...</div>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

async function loadLiveQuantumDataJson() {
  try {
    const resp = await fetch('data/quantum_live_data.json', { cache: 'no-store' });
    if (resp.ok) {
      const json = await resp.json();
      AppState.liveData = json;
    }
  } catch (err) {
    if (window.QUANTUM_LIVE_DATA) {
      AppState.liveData = window.QUANTUM_LIVE_DATA;
    }
  }

  renderLiveAnalyticsAll();
  renderTechPediaSection();
  renderStocksGrid();
  renderCompareTable();
}

function renderLiveAnalyticsAll() {
  if (!AppState.liveData) return;

  const updatedBadge = document.getElementById('liveJsonUpdatedAt');
  if (updatedBadge) {
    updatedBadge.textContent = AppState.liveData.updated_at || '2026-10-19 UTC';
  }

  renderLiveModalityVerdicts();
  renderLiveFinancialsTable();
  renderLiveArxivFeed();
}

function renderLiveModalityVerdicts() {
  const container = document.getElementById('liveModalityVerdictsContainer');
  if (!container || !AppState.liveData?.modality_advantage_rankings) return;

  const list = AppState.liveData.modality_advantage_rankings;
  container.innerHTML = list.map((item, idx) => `
    <div class="quantum-card-static p-5 space-y-3.5">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="inline-flex items-center gap-2 text-[11px] font-mono-num px-2.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
            <span class="text-white font-bold">#${idx + 1}</span>
            <span>·</span>
            <span>${item.commercial_horizon}</span>
          </div>
          <h4 class="text-base font-bold text-white mt-2">${item.category_name}</h4>
        </div>
        <div class="text-right shrink-0">
          <div class="text-[11px] text-slate-400">商轉優勢指數</div>
          <div class="font-mono-num text-lg font-bold text-white">${item.readiness_score} <span class="text-xs font-normal text-slate-400">/ 100</span></div>
        </div>
      </div>

      <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-indigo-400" style="width: ${item.readiness_score}%"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.05]">
          <div class="text-slate-400 font-medium mb-0.5">純量子 / 純 PQC 首選標的</div>
          <div class="text-slate-200 leading-snug">${item.pure_play_leader}</div>
        </div>
        <div class="p-3 rounded-xl bg-[#161922] border border-white/[0.05]">
          <div class="text-slate-400 font-medium mb-0.5">科技與資安巨頭首選標的</div>
          <div class="text-slate-200 leading-snug">${item.enterprise_leader}</div>
        </div>
      </div>

      <p class="text-xs text-slate-400 leading-relaxed">
        <strong class="text-slate-200">勝出關鍵分析：</strong>${item.why_it_wins}
      </p>
    </div>
  `).join('');
}

function renderLiveFinancialsTable() {
  const container = document.getElementById('liveFinancialsTableContainer');
  if (!container || !AppState.liveData?.stocks_financials) return;

  let rows = Object.values(AppState.liveData.stocks_financials);

  if (AppState.liveTableCategory !== 'all') {
    rows = rows.filter(r => r.category === AppState.liveTableCategory);
  }

  rows.sort((a, b) => {
    switch (AppState.liveTableSort) {
      case 'gm-desc':
        return (b.gross_margin_pct ?? -999) - (a.gross_margin_pct ?? -999);
      case 'cash-desc':
        return (b.total_cash_raw ?? 0) - (a.total_cash_raw ?? 0);
      case 'yoy-desc':
        return (b.revenue_growth_yoy_pct ?? -999) - (a.revenue_growth_yoy_pct ?? -999);
      case 'advantage-desc':
      default:
        return (b.overall_advantage_score ?? 0) - (a.overall_advantage_score ?? 0);
    }
  });

  container.innerHTML = `
    <table class="w-full text-left border-collapse text-xs">
      <thead>
        <tr class="border-b border-white/[0.08] text-slate-400">
          <th class="py-3 px-3">排名 / 代號</th>
          <th class="py-3 px-3">技術路線分類</th>
          <th class="py-3 px-3 text-right">總市值 / 股價</th>
          <th class="py-3 px-3 text-right">毛利率 (Gross Margin)</th>
          <th class="py-3 px-3">Debt-to-EBITDA 槓桿評估</th>
          <th class="py-3 px-3 text-right">總負債 / EBITDA</th>
          <th class="py-3 px-3 text-right">帳上總現金</th>
          <th class="py-3 px-3">綜合競爭優勢評分 &amp; 核心護城河</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/[0.05]">
        ${rows.map((r, idx) => `
          <tr class="hover:bg-white/[0.02] transition align-top">
            <td class="py-3.5 px-3">
              <div class="flex items-center gap-2">
                <span class="font-mono-num text-[11px] text-slate-500">#${idx + 1}</span>
                <span class="font-mono-num text-sm font-bold text-white">${r.ticker}</span>
              </div>
              <div class="text-slate-400 mt-0.5">${r.name}</div>
            </td>
            <td class="py-3.5 px-3 text-slate-300">${r.modality}</td>
            <td class="py-3.5 px-3 text-right font-mono-num">
              <div class="font-bold text-white">${r.market_cap_fmt}</div>
              <div class="text-[11px] text-slate-400">$${r.price}</div>
            </td>
            <td class="py-3.5 px-3 text-right font-mono-num">
              <span class="px-2 py-0.5 rounded font-semibold ${
                (r.gross_margin_pct || 0) >= 65
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25'
                  : 'bg-white/[0.05] text-white border border-white/[0.08]'
              }">
                ${r.gross_margin_display}
              </span>
            </td>
            <td class="py-3.5 px-3">
              <div class="font-mono-num font-semibold text-white">${r.debt_to_ebitda_display}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">${r.leverage_status}</div>
            </td>
            <td class="py-3.5 px-3 text-right font-mono-num">
              <div class="text-slate-300">負債 ${r.total_debt_fmt}</div>
              <div class="text-slate-500">EBITDA ${r.ebitda_fmt}</div>
            </td>
            <td class="py-3.5 px-3 text-right font-mono-num font-semibold text-white">${r.total_cash_fmt}</td>
            <td class="py-3.5 px-3 min-w-[240px]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] text-slate-300 font-medium">${r.advantage_tier.split(' (')[0]}</span>
                <span class="font-mono-num font-bold text-sm text-white">${r.overall_advantage_score}</span>
              </div>
              <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1.5">
                <div class="h-full bg-indigo-400" style="width: ${r.overall_advantage_score}%"></div>
              </div>
              <p class="text-[11px] text-slate-400 leading-relaxed">${r.key_edge_summary}</p>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

window.setLiveArxivDomain = function(domain) {
  AppState.liveArxivDomain = domain;
  renderLiveArxivFeed();
};

function renderLiveArxivFeed() {
  const pillContainer = document.getElementById('liveArxivFilterPills');
  const container = document.getElementById('liveArxivPapersContainer');
  if (!container || !AppState.liveData?.latest_arxiv_papers) return;

  const papers = AppState.liveData.latest_arxiv_papers;
  const domains = ['all', 'Quantum Hardware / QEC', 'Quantum Encryption (QKD/QRNG)', 'Post-Quantum Crypto (PQC)', 'Quantum AI / Hybrid'];
  const domainLabels = {
    'all': '全部論文',
    'Quantum Hardware / QEC': '量子硬體與糾錯',
    'Quantum Encryption (QKD/QRNG)': '量子加密 (QKD/QRNG)',
    'Post-Quantum Crypto (PQC)': '後量子密碼 (PQC)',
    'Quantum AI / Hybrid': '量子 AI 與混合超算'
  };

  if (pillContainer) {
    pillContainer.innerHTML = domains.map(d => `
      <button
        onclick="setLiveArxivDomain('${d}')"
        class="filter-pill ${AppState.liveArxivDomain === d ? 'active' : ''} px-3 py-1 rounded-lg text-xs"
      >
        ${domainLabels[d] || d}
      </button>
    `).join('');
  }

  const visible = AppState.liveArxivDomain === 'all'
    ? papers
    : papers.filter(p => p.domain_tag === AppState.liveArxivDomain);

  container.innerHTML = visible.map(p => `
    <div class="p-5 rounded-xl bg-[#161922] border border-white/[0.06] flex flex-col justify-between gap-3">
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-[11px] px-2.5 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08] font-medium">
            ${p.domain_tag || p.topic_stream}
          </span>
          <span class="font-mono-num text-xs text-slate-400">arXiv:${p.arxiv_id} · ${p.published}</span>
        </div>
        <h4 class="text-sm font-bold text-white leading-snug mb-1">${p.title}</h4>
        <div class="text-xs text-slate-400 mb-2">${p.authors}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${p.summary}</p>
      </div>
      <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
        <div class="flex flex-wrap gap-1">
          ${(p.categories || []).map(c => `<span class="px-2 py-0.5 rounded bg-[#11131a] text-slate-400 font-mono-num">${c}</span>`).join('')}
        </div>
        <div class="flex gap-2">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition">
            arXiv 摘要 ↗
          </a>
          <a href="${p.pdf_url || p.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition">
            PDF 全文 ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}
