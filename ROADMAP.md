# Roadmap

Goal: a free, transparent stock scanner for Indian markets that scores **intraday, swing and long-term**
setups, shows them on charts with custom indicators, and backtests every signal.

Principles
- Zero running cost: GitHub Actions + Vercel + free data sources.
- Transparent scoring: every score shows its components, never a black box.
- Backtest everything: a signal without a historical win rate does not ship.
- Output is a **scanner/screener**, not personal advice (see disclaimer in README).

Legend: [ ] todo, [~] in progress, [x] done

## Phase 1 - Project skeleton
- [x] Repo structure (web, data-pipeline, data, workflows)
- [x] Next.js + TypeScript + Tailwind app with landing page
- [x] Python pipeline package with a heartbeat job
- [x] GitHub Actions: daily data job + web CI
- [x] README, ROADMAP, PROGRESS, disclaimer

## Phase 2 - Stock universe and daily data
- [ ] Download the NSE equity list and the F&O eligible list (`data/universe.json`)
- [ ] Flag each stock: `fno: true/false`, sector, market cap bucket
- [ ] Fetch daily OHLCV for the whole universe (yfinance first, NSE bhavcopy as backup)
- [ ] Store as compact files per symbol in `data/ohlcv/`
- [ ] Data quality checks (missing days, splits/bonus adjustments)

## Phase 3 - Chart page
- [ ] Lightweight Charts candlestick page for any symbol (`/stock/[symbol]`)
- [ ] Symbol search, timeframe switcher
- [ ] Built-in indicators: SMA/EMA, RSI, MACD, Bollinger, Supertrend, VWAP
- [ ] **Custom indicator builder**: write a small formula/JS function and plot it on the chart
- [ ] Save custom indicators in the browser (localStorage)

## Phase 4 - Swing and long-term scoring engine
- [ ] Technical score: trend, momentum, volume, breakout/pullback patterns, relative strength vs Nifty
- [ ] Fundamental score: ROE/ROCE, debt, growth, valuation, promoter holding (free sources)
- [ ] Combine into a transparent score with a visible breakdown
- [ ] Daily "Top swing picks" and "Long-term watchlist" pages

## Phase 5 - Options layer (F&O stocks)
- [ ] Option chain ingestion (broker API or NSE)
- [ ] PCR (OI and volume), OI buildup/unwinding, max pain
- [ ] Black-Scholes Greeks and IV calculation in-house
- [ ] Options-based features feed into the score

## Phase 6 - Backtesting and intraday
- [ ] Backtest engine: run each rule over history, report win rate, average return, max drawdown
- [ ] Show the backtest stats next to every signal
- [ ] Live data via a free broker API (Upstox / Angel One SmartAPI / Fyers)
- [ ] Intraday scanner: opening range breakout, VWAP reclaim, volume spikes

## Phase 7 - Polish and deploy
- [ ] Deploy to Vercel
- [ ] Disclaimers, about page, methodology page
- [ ] Performance pass, mobile layout, dark mode
- [ ] Legal review before any public launch

## Later ideas
- Alerts (Telegram/email) for scanner matches
- Portfolio watchlists
- Paper-trading tracker to measure live signal quality
