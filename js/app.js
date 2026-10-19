// Quantum Tech Investing - Main Interactive Application Controller

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
  liveData: window.QUANTUM_LIVE_DATA || null,
  liveTableCategory: 'all',
  liveTableSort: 'advantage-desc',
  liveArxivDomain: 'all'
};

const CategoryMeta = {
  'pure-compute': { label: '純量子電腦硬體/系統', badgeClass: 'badge-pure-compute' },
  'pure-pqc': { label: '量子加密 / 後量子密碼純股', badgeClass: 'badge-pure-pqc' },
  'big-tech': { label: '科技巨頭量子與超算', badgeClass: 'badge-big-tech' },
  'enterprise-pqc': { label: '企業資安與 PQC 晶片大廠', badgeClass: 'badge-enterprise-pqc' }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStockControls();
  initLiveAnalyticsControls();
  renderStocksGrid();
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
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

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

    return `
      <div class="quantum-card p-5 flex flex-col justify-between relative group">
        <div>
          <!-- Top Header -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-num text-xl font-bold text-white tracking-tight">${s.ticker}</span>
                <span class="text-xs px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700">${s.exchange}</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full font-medium ${meta.badgeClass}">${meta.label}</span>
              </div>
              <h3 class="text-sm font-medium text-slate-300 mt-1">${s.name}</h3>
            </div>
            <div class="text-right">
              <div class="font-mono-num text-lg font-semibold text-sky-400">${s.marketCap}</div>
              <div class="text-[11px] text-slate-400">參考價 ~$${s.price.toFixed(2)}</div>
            </div>
          </div>

          <!-- Subcategory Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${s.subCategories.map(tag => `
              <span class="text-[11px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-700/70">${tag}</span>
            `).join('')}
          </div>

          <!-- Core Technical Modality -->
          <div class="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 mb-3 text-xs">
            <div class="text-slate-400 mb-0.5">技術路線與核心產品：</div>
            <div class="text-sky-300 font-medium leading-snug">${s.modality}</div>
            <div class="text-slate-300 mt-1 truncate" title="${s.flagshipProduct}">⚡ ${s.flagshipProduct}</div>
          </div>

          <!-- Key Financial & Tech Grid -->
          <div class="grid grid-cols-2 gap-2.5 mb-3 text-xs">
            <div class="p-2 rounded bg-slate-900/55 border border-slate-800/60">
              <div class="text-slate-400">最新營收 / 年增率</div>
              <div class="font-mono-num font-semibold text-emerald-400 mt-0.5">${s.revenue.split('(')[0]}</div>
              <div class="text-[11px] text-emerald-300/90">YoY: ${s.revenueYoY}</div>
            </div>
            <div class="p-2 rounded bg-slate-900/55 border border-slate-800/60">
              <div class="text-slate-400">現金儲備 (War Chest)</div>
              <div class="font-mono-num font-semibold text-purple-300 mt-0.5">${s.cashReserves.split('(')[0]}</div>
              <div class="text-[11px] text-slate-400 truncate" title="${s.runway}">${s.runway}</div>
            </div>
            <div class="p-2 rounded bg-slate-900/55 border border-slate-800/60">
              <div class="text-slate-400">yfinance 毛利率 / 負債比</div>
              <div class="font-mono-num font-semibold text-amber-300 mt-0.5">
                毛利: ${(AppState.liveData?.stocks_financials?.[s.ticker]?.gross_margin_display) || 'N/A'}
              </div>
              <div class="text-[11px] text-slate-300 truncate" title="${(AppState.liveData?.stocks_financials?.[s.ticker]?.leverage_status) || ''}">
                Debt/EBITDA: ${(AppState.liveData?.stocks_financials?.[s.ticker]?.debt_to_ebitda_display) || 'N/A'}
              </div>
            </div>
            <div class="p-2 rounded bg-slate-900/55 border border-slate-800/60">
              <div class="text-slate-400">雙閘保真度 / 優勢評分</div>
              <div class="font-mono-num font-semibold text-sky-300 mt-0.5 truncate" title="${s.twoQubitFidelity}">${s.twoQubitFidelity.split('(')[0]}</div>
              <div class="text-[11px] text-emerald-300 font-mono-num">
                優勢分: ${(AppState.liveData?.stocks_financials?.[s.ticker]?.overall_advantage_score) || '—'} / 100
              </div>
            </div>
          </div>

          <!-- Summary -->
          <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
            ${s.summary}
          </p>
        </div>

        <!-- Bottom Action Bar -->
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button
            onclick="openStockModal('${s.id}')"
            class="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-sky-500/20 to-indigo-500/20 hover:from-sky-500/35 hover:to-indigo-500/35 border border-sky-400/40 text-sky-300 text-xs font-semibold transition flex items-center justify-center gap-1.5"
          >
            <span>深度研報・論文・新聞 (${s.papers.length}篇)</span>
            <span>→</span>
          </button>
          <button
            onclick="toggleCompareStock('${s.id}')"
            class="py-2 px-3 rounded-lg text-xs font-medium border transition ${
              isCompared
                ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                : 'bg-slate-900/70 border-slate-700 text-slate-300 hover:border-sky-400/50'
            }"
            title="加入並排 PK 比較表"
          >
            ${isCompared ? '✓ 已在 PK 台' : '+ PK 比較'}
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

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 border-b border-slate-800 bg-slate-950/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="font-mono-num text-2xl font-extrabold text-white">${stock.ticker}</span>
          <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${stock.exchange}</span>
          <span class="text-xs px-3 py-0.5 rounded-full font-medium ${meta.badgeClass}">${meta.label}</span>
          <span class="text-xs px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">${stock.outlook.rating}</span>
        </div>
        <h2 class="text-lg font-semibold text-slate-200 mt-1">${stock.name} — 機構級投資與技術全景剖析</h2>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-right">
          <div class="text-xs text-slate-400">總市值 / 參考股價</div>
          <div class="font-mono-num text-xl font-bold text-sky-400">${stock.marketCap} <span class="text-sm font-normal text-slate-300">($${stock.price})</span></div>
        </div>
        <button onclick="closeStockModal()" class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition">
          ✕ 關閉
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <div class="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
      <!-- 1. Executive Summary & Core KPI Cards -->
      <div class="p-4 rounded-xl bg-gradient-to-r from-sky-950/50 via-slate-900/80 to-purple-950/40 border border-sky-500/30">
        <div class="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">核心定位與護城河總覽</div>
        <p class="text-sm text-slate-200 leading-relaxed">${stock.summary}</p>
      </div>

      <!-- Economic & Technical Metrics 6-Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">最新營收 (Revenue) & 年增率</div>
          <div class="font-mono-num text-base font-bold text-emerald-400 mt-1">${stock.revenue}</div>
          <div class="text-xs text-emerald-300 mt-0.5">成長動能: ${stock.revenueYoY}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">帳上現金儲備 (Cash & Liquidity)</div>
          <div class="font-mono-num text-base font-bold text-purple-300 mt-1">${stock.cashReserves}</div>
          <div class="text-xs text-slate-300 mt-0.5">資金跑道: ${stock.runway}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">在手訂單 (Bookings / RPO Backlog)</div>
          <div class="text-xs font-medium text-amber-300 mt-1 leading-snug">${stock.bookingsOrBacklog}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">雙量子位元閘保真度 / 安全等級</div>
          <div class="font-mono-num text-sm font-bold text-sky-300 mt-1">${stock.twoQubitFidelity}</div>
          <div class="text-xs text-slate-400 mt-0.5">閘操作速度: ${stock.gateSpeed}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">邏輯量子位元與糾錯架構 (QEC)</div>
          <div class="text-xs font-medium text-slate-200 mt-1 leading-snug">${stock.logicalQubits}</div>
          <div class="text-[11px] text-sky-400 mt-0.5">糾錯方案: ${stock.errorCorrection}</div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs text-slate-400">量子加密 (QKD) / 後量子密碼 (PQC) 定位</div>
          <div class="text-xs font-medium text-emerald-300 mt-1 leading-snug">${stock.pqcOrCryptoRole}</div>
        </div>
      </div>

      <!-- 2. Technical Advantages -->
      <div class="quantum-card-static p-5">
        <h3 class="text-base font-bold text-sky-300 mb-3 flex items-center gap-2">
          <span>🔬</span> 技術優勢與架構護城河 (Technical Moat & Architecture)
        </h3>
        <ul class="space-y-2.5 text-sm text-slate-200">
          ${stock.technicalAdvantages.map(adv => `
            <li class="flex items-start gap-2.5">
              <span class="text-sky-400 font-bold mt-0.5">▸</span>
              <span class="leading-relaxed">${adv}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 3. Outlook: Bull Case, Bear Case & Catalysts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
          <h4 class="text-sm font-bold text-emerald-400 mb-2">📈 看多邏輯與商業前景 (Bull Thesis)</h4>
          <p class="text-xs text-slate-200 leading-relaxed mb-3">${stock.outlook.bullCase}</p>
          <div class="text-xs font-semibold text-emerald-300 mb-1.5">2026–2027 關鍵催化劑 (Catalysts)：</div>
          <ul class="space-y-1 text-xs text-slate-300">
            ${stock.outlook.catalysts2026_2027.map(c => `<li>• ${c}</li>`).join('')}
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-rose-950/25 border border-rose-500/30">
          <h4 class="text-sm font-bold text-rose-400 mb-2">⚠️ 潛在風險與挑戰 (Key Risks & Bear Case)</h4>
          <p class="text-xs text-slate-200 leading-relaxed">${stock.outlook.bearCase}</p>
        </div>
      </div>

      <!-- 4. Key Academic Papers -->
      <div class="quantum-card-static p-5">
        <h3 class="text-base font-bold text-purple-300 mb-3 flex items-center gap-2">
          <span>📄</span> 代表性學術論文與里程碑實證 (Peer-Reviewed Papers & Whitepapers)
        </h3>
        <div class="space-y-3">
          ${stock.papers.map(p => `
            <div class="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono-num px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">${p.journal} (${p.year})</span>
                  <span class="text-sm font-semibold text-white">${p.title}</span>
                </div>
                <p class="text-xs text-slate-300 mt-1.5">${p.highlight}</p>
              </div>
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="shrink-0 px-3 py-1.5 rounded bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 text-xs font-medium transition">
                查閱論文 ↗
              </a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 5. Latest News & Milestones -->
      <div class="quantum-card-static p-5">
        <h3 class="text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
          <span>📰</span> 最新重大新聞、併購與合約動態 (Recent News & Deals)
        </h3>
        <div class="space-y-2.5">
          ${stock.news.map(n => `
            <div class="p-3 rounded-lg bg-slate-900/75 border border-slate-800/80 flex items-start justify-between gap-3">
              <div class="flex items-start gap-3">
                <span class="font-mono-num text-xs px-2 py-0.5 rounded bg-slate-800 text-sky-300 shrink-0 mt-0.5">${n.date}</span>
                <div>
                  <div class="text-xs font-medium text-slate-100">${n.title}</div>
                  <div class="text-[11px] text-slate-400 mt-0.5">來源: ${n.source}</div>
                </div>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 shrink-0">${n.impact}</span>
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
          class="px-3 py-1 rounded-full text-xs font-mono-num transition ${
            active
              ? 'bg-sky-500/30 border border-sky-400 text-white font-bold shadow'
              : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-slate-200'
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
    { label: '總市值 / 參考股價', render: s => `<span class="font-mono-num text-sky-400 font-bold">${s.marketCap}</span> <span class="text-xs text-slate-400">($${s.price})</span>` },
    { label: '最新營收 (Revenue)', render: s => `<span class="font-mono-num text-emerald-400 font-semibold">${s.revenue}</span>` },
    { label: '營收年增率 (YoY)', render: s => `<span class="font-mono-num text-emerald-300">${s.revenueYoY}</span>` },
    { label: 'yfinance 毛利率 (Gross Margin)', render: s => `<span class="font-mono-num text-amber-300 font-bold">${(AppState.liveData?.stocks_financials?.[s.ticker]?.gross_margin_display) || 'N/A'}</span>` },
    { label: 'Debt-to-EBITDA 與財務槓桿', render: s => `<div class="font-mono-num text-sky-300 font-semibold">${(AppState.liveData?.stocks_financials?.[s.ticker]?.debt_to_ebitda_display) || 'N/A'}</div><div class="text-[11px] text-slate-400">${(AppState.liveData?.stocks_financials?.[s.ticker]?.leverage_status) || ''}</div>` },
    { label: '現金儲備與跑道', render: s => `<div class="font-mono-num text-purple-300 font-semibold">${s.cashReserves}</div><div class="text-[11px] text-slate-400">${s.runway}</div>` },
    { label: '在手訂單 / RPO', render: s => `<span class="text-xs text-amber-200">${s.bookingsOrBacklog}</span>` },
    { label: '物理技術路線 (Modality)', render: s => `<span class="text-xs text-sky-300 font-medium">${s.modality}</span>` },
    { label: '主力硬體 / 產品', render: s => `<span class="text-xs text-slate-200">${s.flagshipProduct}</span>` },
    { label: '雙量子閘保真度 / 安全等級', render: s => `<span class="font-mono-num text-xs text-sky-300 font-semibold">${s.twoQubitFidelity}</span>` },
    { label: '邏輯位元與量子糾錯 (QEC)', render: s => `<div class="text-xs text-slate-200">${s.logicalQubits}</div><div class="text-[11px] text-slate-400 mt-0.5">${s.errorCorrection}</div>` },
    { label: '量子加密 / 後量子密碼定位', render: s => `<span class="text-xs text-emerald-300">${s.pqcOrCryptoRole}</span>` },
    { label: '綜合優勢評分 / 研報', render: s => `<div class="font-mono-num text-xs text-emerald-400 font-bold mb-1">優勢總分：${(AppState.liveData?.stocks_financials?.[s.ticker]?.overall_advantage_score) || '—'} / 100</div><button onclick="openStockModal('${s.id}')" class="px-3 py-1 rounded bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs hover:bg-sky-500/35">開啟完整研報 →</button>` }
  ];

  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-slate-800 bg-slate-900/90">
            <th class="p-3.5 text-xs font-semibold text-slate-400 w-44">比較維度 / 指標</th>
            ${selected.map(s => `
              <th class="p-3.5 min-w-[220px]">
                <div class="flex items-center justify-between">
                  <span class="font-mono-num text-lg font-extrabold text-sky-400">${s.ticker}</span>
                  <button onclick="toggleCompareStock('${s.id}')" class="text-xs text-slate-500 hover:text-rose-400">移除 ✕</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/70 text-sm">
          ${rows.map(r => `
            <tr class="hover:bg-slate-900/40 transition">
              <td class="p-3.5 text-xs font-medium text-slate-400 bg-slate-950/40">${r.label}</td>
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
    <div class="quantum-card p-6 space-y-5">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div class="flex items-center gap-2.5">
            <span class="font-mono-num text-2xl font-extrabold text-sky-400">${etf.ticker}</span>
            <span class="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${etf.exchange}</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full badge-pure-compute">成立於 ${etf.inceptionDate}</span>
          </div>
          <h3 class="text-lg font-bold text-white mt-1">${etf.name}</h3>
          <p class="text-xs text-slate-400 mt-0.5">追蹤指數 / 策略：${etf.underlyingIndex}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <div class="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center min-w-[110px]">
            <div class="text-[11px] text-slate-400">資產規模 (AUM)</div>
            <div class="font-mono-num text-base font-bold text-white mt-0.5">${etf.aum.split(' ')[0]}</div>
          </div>
          <div class="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center min-w-[95px]">
            <div class="text-[11px] text-slate-400">總費用率</div>
            <div class="font-mono-num text-base font-bold text-amber-300 mt-0.5">${etf.expenseRatio}</div>
          </div>
          <div class="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center min-w-[105px]">
            <div class="text-[11px] text-slate-400">近 1 年報酬</div>
            <div class="font-mono-num text-base font-bold text-emerald-400 mt-0.5">${etf.oneYearReturn}</div>
          </div>
          <div class="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center min-w-[115px]">
            <div class="text-[11px] text-slate-400">5 年年化 (CAGR)</div>
            <div class="font-mono-num text-base font-bold text-sky-400 mt-0.5">${etf.fiveYearCagr.split(' ')[0]}</div>
          </div>
        </div>
      </div>

      <p class="text-sm text-slate-200 leading-relaxed">${etf.summary}</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-slate-900/75 border border-slate-800">
          <div class="text-xs font-bold text-sky-300 mb-2.5">📊 核心成分股與量子權重代表 (Key Quantum & PQC Holdings)</div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-slate-400 border-b border-slate-800">
                  <th class="pb-2 text-left">代號</th>
                  <th class="pb-2 text-left">公司名稱</th>
                  <th class="pb-2 text-right">參考權重</th>
                  <th class="pb-2 text-left pl-3">在指數中之角色</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60">
                ${etf.topHoldings.map(h => `
                  <tr>
                    <td class="py-2 font-mono-num font-bold text-sky-400">${h.ticker}</td>
                    <td class="py-2 text-slate-200">${h.name}</td>
                    <td class="py-2 font-mono-num text-right text-emerald-300">${h.weight}</td>
                    <td class="py-2 pl-3 text-slate-400">${h.role}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900/75 border border-slate-800 text-xs space-y-2">
            <div><span class="text-slate-400">加權與再平衡機制：</span><span class="text-slate-200 font-medium">${etf.weightingMethod}</span></div>
            <div><span class="text-slate-400">純量子標的佔比：</span><span class="text-sky-300 font-medium">${etf.purePlayAllocation}</span></div>
          </div>
          <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
            <div class="font-bold text-emerald-400 mb-1.5">✓ 投資優勢 (Pros)</div>
            <ul class="space-y-1 text-slate-200">
              ${etf.pros.map(p => `<li>• ${p}</li>`).join('')}
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs">
            <div class="font-bold text-amber-400 mb-1.5">⚠ 注意事項 (Cons)</div>
            <ul class="space-y-1 text-slate-200">
              ${etf.cons.map(c => `<li>• ${c}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// PRE-IPO UNICORN PIPELINE RENDERER (未來可能上市之潛力獨角獸)
// ============================================================================
function renderPreIpoSection() {
  const container = document.getElementById('preIpoGridContainer');
  if (!container) return;

  container.innerHTML = window.QUANTUM_DATA.preIpoPipeline.map(item => `
    <div class="quantum-card p-6 flex flex-col justify-between space-y-4">
      <div>
        <!-- Header -->
        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-extrabold text-white">${item.name}</h3>
              <span class="text-xs font-mono-num px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">${item.expectedTicker}</span>
            </div>
            <div class="text-xs text-amber-300 font-medium mt-1">狀態：${item.status}</div>
          </div>
          <div class="text-right">
            <div class="text-[11px] text-slate-400">IPO 準備度指標</div>
            <div class="font-mono-num text-lg font-bold text-emerald-400">${item.ipoReadinessScore} / 100</div>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
          <div class="h-full bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400 progress-glow" style="width: ${item.ipoReadinessScore}%"></div>
        </div>

        <!-- Key Valuation & Timeline Grid -->
        <div class="grid grid-cols-2 gap-2.5 mb-4 text-xs">
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <div class="text-slate-400">最新估值 (Valuation)</div>
            <div class="font-mono-num font-bold text-sky-300 mt-0.5">${item.latestValuation}</div>
          </div>
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <div class="text-slate-400">預計上市時間窗 (IPO Window)</div>
            <div class="font-mono-num font-bold text-amber-300 mt-0.5">${item.expectedTimeline}</div>
          </div>
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 col-span-2">
            <div class="text-slate-400">累積募資與核心股東陣容 (Key Backers)</div>
            <div class="text-slate-200 font-medium mt-0.5">${item.totalFunding} — <span class="text-purple-300">${item.parentOrBackers}</span></div>
          </div>
        </div>

        <!-- Technical Modality -->
        <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 text-xs space-y-1.5 mb-4">
          <div><span class="text-slate-400">核心技術路線：</span><span class="text-sky-300 font-semibold">${item.modality}</span></div>
          <div><span class="text-slate-400">旗艦系統與指標：</span><span class="text-slate-200">${item.flagshipSystem}</span></div>
          <div><span class="text-slate-400">密碼/軟體與護城河：</span><span class="text-emerald-300">${item.cryptoOrSoftware}</span></div>
        </div>

        <!-- Bullet Highlights -->
        <div class="space-y-1.5 text-xs text-slate-300">
          ${item.highlights.map(h => `
            <div class="flex items-start gap-2">
              <span class="text-sky-400 font-bold">▸</span>
              <span class="leading-relaxed">${h}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// MOSCA'S THEOREM INTERACTIVE CALCULATOR (X + Y > Z 量子破解倒數計時器)
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
      resultBox.className = 'p-4 rounded-xl bg-rose-950/50 border border-rose-500/60 text-rose-200';
      resultBox.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-rose-400">🚨 高度危險：X + Y (${sum} 年) ≥ Z (${z} 年) — 已處於「現在竊取、未來解密 (HNDL)」暴露期！</span>
          <span class="font-mono-num text-xs px-2.5 py-1 rounded bg-rose-500/30 text-white">超標 ${sum - z} 年</span>
        </div>
        <p class="text-xs text-slate-200 mt-1.5 leading-relaxed">
          攻擊者現在攔截並側錄的傳統 RSA/ECC 加密資料，將在資料保密期限屆滿前被 ${2026 + z} 年問世的容錯量子電腦解開。該企業必須<strong>立即採用 Cloudflare (NET)、IBM Quantum Safe、SEALSQ (LAES) 或 Palo Alto Networks (PANW)</strong> 進行 NIST FIPS 203 (ML-KEM) 升級！
        </p>
      `;
    } else {
      resultBox.className = 'p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-200';
      resultBox.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-emerald-400">✅ 尚有緩衝：X + Y (${sum} 年) < Z (${z} 年) — 距離最後強制遷移期限尚餘 ${z - sum} 年</span>
          <span class="font-mono-num text-xs px-2.5 py-1 rounded bg-emerald-500/30 text-white">安全餘裕 ${z - sum} 年</span>
        </div>
        <p class="text-xs text-slate-200 mt-1.5 leading-relaxed">
          建議於 ${2026 + (z - sum)} 年前啟動密碼物料清單 (CBOM) 盤點（如 CrowdStrike / SandboxAQ），以符合美國 CNSA 2.0 2030 年全面淘汰傳統公鑰密碼之法規。
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
          <span class="text-xs px-2.5 py-0.5 rounded-full badge-pure-compute font-medium">${p.category}</span>
          <span class="font-mono-num text-xs text-slate-400">${p.date} | ${p.journal}</span>
        </div>
        <h3 class="text-base font-bold text-white leading-snug mb-1">${p.title}</h3>
        <div class="text-xs text-sky-400 font-medium mb-2.5">機構：${p.institution} — ${p.authors}</div>

        <div class="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono-num text-amber-300 mb-3">
          關鍵數據：${p.keyMetrics}
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">
          <strong class="text-emerald-400">投資啟示：</strong>${p.investmentTakeaway}
        </p>
      </div>
      <div class="pt-3 border-t border-slate-800/80 flex justify-end">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-xs px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/35 border border-sky-400/40 text-sky-300 font-medium transition">
          閱讀原始論文 (Nature / Science / arXiv) ↗
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
          <h4 class="text-sm font-bold text-sky-300">${ind.name}</h4>
          <span class="text-xs font-mono-num px-2.5 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-700">${ind.benchmark}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${ind.meaning}</p>
        <div class="text-xs text-emerald-300 pt-1">🏆 當前領先標的：${ind.leaders}</div>
      </div>
    `).join('');
  }

  if (econContainer) {
    econContainer.innerHTML = window.QUANTUM_DATA.indicatorsGuide.economic.map(ind => `
      <div class="quantum-card-static p-5 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h4 class="text-sm font-bold text-purple-300">${ind.name}</h4>
          <span class="text-xs font-mono-num px-2.5 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-700">${ind.benchmark}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${ind.meaning}</p>
        <div class="text-xs text-sky-300 pt-1">🏆 當前領先標的：${ind.leaders}</div>
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
        class="filter-pill ${AppState.activeArenaModality === 'all' ? 'active' : ''} px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300"
      >
        全部 8 大技術流派總覽
      </button>
    `;
    const modBtns = arenas.map(a => `
      <button
        onclick="setArenaModality('${a.id}')"
        class="filter-pill ${AppState.activeArenaModality === a.id ? 'active' : ''} px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300"
      >
        ${a.name.replace(/^\d+\.\s*/, '')}
      </button>
    `).join('');
    pillBar.innerHTML = allBtn + modBtns;
  }

  const visibleArenas = AppState.activeArenaModality === 'all'
    ? arenas
    : arenas.filter(a => a.id === AppState.activeArenaModality);

  container.innerHTML = visibleArenas.map(arena => `
    <div class="quantum-card-static p-6 space-y-5 border border-sky-500/25">
      <!-- Arena Header -->
      <div class="border-b border-slate-800 pb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <h3 class="text-xl font-extrabold text-white">${arena.name}</h3>
          <p class="text-xs font-semibold text-sky-400 mt-1">${arena.tagline}</p>
        </div>
        <div class="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
          🌡️ 運作環境：<span class="text-amber-300 font-medium">${arena.operatingTemp}</span>
        </div>
      </div>

      <!-- Physics & Pros/Cons Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="font-bold text-sky-300 mb-1.5">⚛️ 底層物理與操控原理</div>
          <p class="text-slate-300 leading-relaxed">${arena.physicsPrinciple}</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <div class="font-bold text-emerald-400 mb-1.5">✓ 該流派核心技術優勢 (Pros)</div>
          <p class="text-slate-200 leading-relaxed">${arena.corePros}</p>
        </div>
        <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30">
          <div class="font-bold text-rose-400 mb-1.5">⚠ 該流派主要工程瓶頸 (Cons)</div>
          <p class="text-slate-200 leading-relaxed">${arena.coreCons}</p>
        </div>
      </div>

      <!-- Verdict Banner -->
      <div class="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/50 via-slate-900/90 to-sky-950/50 border border-indigo-500/30 text-xs text-slate-200">
        <strong class="text-amber-300">🏅 同類競爭格局總評：</strong>${arena.verdictSummary}
      </div>

      <!-- Intra-Category Peer Comparison Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-slate-800 bg-slate-900/95 text-slate-300">
              <th class="p-3 min-w-[140px]">同類競爭標的</th>
              <th class="p-3 min-w-[140px]">同類地位評級</th>
              <th class="p-3 min-w-[200px]">具體技術架構與差異化</th>
              <th class="p-3 min-w-[200px]">保真度 / 量子位元 / 認證指標</th>
              <th class="p-3 min-w-[190px]">營收 / 訂單 / 現金實力</th>
              <th class="p-3 min-w-[165px]">四維度同類評分 (滿分100)</th>
              <th class="p-3 min-w-[220px]">同類橫向 PK 深度點評</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/70">
            ${arena.peers.map(peer => `
              <tr class="hover:bg-slate-900/50 transition align-top">
                <td class="p-3">
                  <div class="font-mono-num text-sm font-extrabold text-sky-400">${peer.ticker}</div>
                  <div class="font-semibold text-white mt-0.5">${peer.name}</div>
                  <div class="text-[11px] text-slate-400 mt-0.5">${peer.status}</div>
                </td>
                <td class="p-3">
                  <span class="inline-block px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/35 text-amber-300 font-semibold leading-snug">
                    ${peer.peerRank}
                  </span>
                </td>
                <td class="p-3 text-slate-200 leading-relaxed">${peer.architecture}</td>
                <td class="p-3 font-mono-num text-sky-300 leading-relaxed">${peer.fidelityAndQubits}</td>
                <td class="p-3 text-emerald-300 leading-relaxed">${peer.commercialTraction}</td>
                <td class="p-3">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-slate-400">綜合總分</span>
                    <span class="font-mono-num font-extrabold text-sm text-white">${peer.scores.total}</span>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400" style="width: ${peer.scores.total}%"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[11px] text-slate-400 font-mono-num">
                    <span>保真: <b class="text-slate-200">${peer.scores.fidelity}</b></span>
                    <span>擴展: <b class="text-slate-200">${peer.scores.scalability}</b></span>
                    <span>商業: <b class="text-slate-200">${peer.scores.commercial}</b></span>
                    <span>資金: <b class="text-slate-200">${peer.scores.cash}</b></span>
                  </div>
                </td>
                <td class="p-3 text-slate-300 leading-relaxed">${peer.comparisonNote}</td>
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

async function loadLiveQuantumDataJson() {
  try {
    const resp = await fetch('data/quantum_live_data.json', { cache: 'no-store' });
    if (resp.ok) {
      const json = await resp.json();
      AppState.liveData = json;
    }
  } catch (err) {
    // Fallback to window.QUANTUM_LIVE_DATA when opened via local file:// protocol
    if (window.QUANTUM_LIVE_DATA) {
      AppState.liveData = window.QUANTUM_LIVE_DATA;
    }
  }

  renderLiveAnalyticsAll();
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
    <div class="quantum-card p-5 space-y-3 border border-emerald-500/25">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="inline-flex items-center gap-1.5 text-[11px] font-mono-num px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span>勝出優勢排名 #${idx + 1}</span>
            <span>|</span>
            <span>${item.commercial_horizon}</span>
          </div>
          <h4 class="text-base font-extrabold text-white mt-1.5">${item.category_name}</h4>
        </div>
        <div class="text-right shrink-0">
          <div class="text-[11px] text-slate-400">商轉優勢指數</div>
          <div class="font-mono-num text-xl font-extrabold text-emerald-400">${item.readiness_score} / 100</div>
        </div>
      </div>

      <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400" style="width: ${item.readiness_score}%"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div class="text-sky-400 font-bold mb-0.5">⚡ 純量子 / 純 PQC 首選標的</div>
          <div class="text-slate-200 leading-snug">${item.pure_play_leader}</div>
        </div>
        <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div class="text-purple-400 font-bold mb-0.5">🌐 科技與資安巨頭首選標的</div>
          <div class="text-slate-200 leading-snug">${item.enterprise_leader}</div>
        </div>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed">
        <strong class="text-amber-300">為何此類別將獲取更大優勢與成效：</strong>${item.why_it_wins}
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
        <tr class="border-b border-slate-800 bg-slate-900/95 text-slate-300">
          <th class="p-3">排名 / 代號</th>
          <th class="p-3">技術路線分類</th>
          <th class="p-3 text-right">總市值 / 股價</th>
          <th class="p-3 text-right">毛利率 (Gross Margin)</th>
          <th class="p-3">Debt-to-EBITDA (負債/EBITDA)</th>
          <th class="p-3 text-right">總負債 / EBITDA</th>
          <th class="p-3 text-right">帳上總現金</th>
          <th class="p-3">綜合競爭優勢評分 &amp; 核心勝出原因</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800/70">
        ${rows.map((r, idx) => `
          <tr class="hover:bg-slate-900/50 transition align-top">
            <td class="p-3">
              <div class="flex items-center gap-2">
                <span class="font-mono-num text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">#${idx + 1}</span>
                <span class="font-mono-num text-sm font-extrabold text-sky-400">${r.ticker}</span>
              </div>
              <div class="font-semibold text-white mt-0.5">${r.name}</div>
            </td>
            <td class="p-3 text-sky-300 font-medium">${r.modality}</td>
            <td class="p-3 text-right font-mono-num">
              <div class="font-bold text-white">${r.market_cap_fmt}</div>
              <div class="text-[11px] text-slate-400">$${r.price}</div>
            </td>
            <td class="p-3 text-right font-mono-num">
              <span class="px-2 py-1 rounded font-bold ${
                (r.gross_margin_pct || 0) >= 65
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : (r.gross_margin_pct || 0) >= 50
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }">
                ${r.gross_margin_display}
              </span>
            </td>
            <td class="p-3">
              <div class="font-mono-num font-bold text-amber-300">${r.debt_to_ebitda_display}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">${r.leverage_status}</div>
            </td>
            <td class="p-3 text-right font-mono-num">
              <div class="text-rose-300">負債: ${r.total_debt_fmt}</div>
              <div class="text-slate-400">EBITDA: ${r.ebitda_fmt}</div>
            </td>
            <td class="p-3 text-right font-mono-num font-bold text-purple-300">${r.total_cash_fmt}</td>
            <td class="p-3 min-w-[250px]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-semibold text-emerald-400">${r.advantage_tier}</span>
                <span class="font-mono-num font-extrabold text-sm text-white">${r.overall_advantage_score} 分</span>
              </div>
              <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1.5">
                <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400" style="width: ${r.overall_advantage_score}%"></div>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed">${r.key_edge_summary}</p>
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
    'all': '全部最新論文',
    'Quantum Hardware / QEC': '⚛️ 量子電腦硬體與糾錯',
    'Quantum Encryption (QKD/QRNG)': '📡 量子加密 (QKD/QRNG)',
    'Post-Quantum Crypto (PQC)': '🔐 後量子密碼學 (PQC)',
    'Quantum AI / Hybrid': '🤖 量子 AI 與混合超算'
  };

  if (pillContainer) {
    pillContainer.innerHTML = domains.map(d => `
      <button
        onclick="setLiveArxivDomain('${d}')"
        class="filter-pill ${AppState.liveArxivDomain === d ? 'active' : ''} px-3 py-1 rounded-full text-xs font-medium text-slate-300"
      >
        ${domainLabels[d] || d}
      </button>
    `).join('');
  }

  const visible = AppState.liveArxivDomain === 'all'
    ? papers
    : papers.filter(p => p.domain_tag === AppState.liveArxivDomain);

  container.innerHTML = visible.map(p => `
    <div class="quantum-card p-5 flex flex-col justify-between gap-3">
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
            ${p.domain_tag || p.topic_stream}
          </span>
          <span class="font-mono-num text-xs text-slate-400">arXiv:${p.arxiv_id} | ${p.published}</span>
        </div>
        <h4 class="text-sm font-bold text-white leading-snug mb-1">${p.title}</h4>
        <div class="text-xs text-sky-400 mb-2">${p.authors}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${p.summary}</p>
      </div>
      <div class="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div class="flex flex-wrap gap-1">
          ${(p.categories || []).map(c => `<span class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono-num">${c}</span>`).join('')}
        </div>
        <div class="flex gap-2">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/35 text-sky-300 border border-sky-400/40 font-medium">
            arXiv 摘要 ↗
          </a>
          <a href="${p.pdf_url || p.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/35 text-purple-300 border border-purple-400/40 font-medium">
            PDF 全文 ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}


