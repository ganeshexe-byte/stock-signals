# Stock Signals

A free, open-source stock **scanner and signal engine for Indian markets (NSE)**.
It scores stocks for **intraday, swing and long-term** setups using technicals, fundamentals and
options data (PCR, OI, max pain, Greeks), shows them on interactive charts with custom indicators,
and **backtests every signal** so each pick comes with its historical win rate.

> **Status:** Phase 1 (project skeleton). See [ROADMAP.md](./ROADMAP.md) for the plan and
> [PROGRESS.md](./PROGRESS.md) for exactly where we stopped.

## Important disclaimer

This project is for **education and research only**. It is **not investment advice**, and it does not
place trades. Past performance and backtests do not guarantee future results. In India, publicly
recommending securities requires SEBI Research Analyst registration, so if you ever make this
public, present outputs as scanner/screener results with clear disclaimers and get legal advice first.

## Architecture

```
stock-signals/
├── web/              Next.js + TypeScript + Tailwind website (charts, scanner tables)
├── data-pipeline/    Python jobs: fetch data, compute indicators, score, backtest
├── data/             Output of the daily jobs (JSON/CSV), committed by GitHub Actions
├── .github/workflows Daily data job + web CI
├── ROADMAP.md        Phases and tasks
└── PROGRESS.md       Living log so any new chat/session can resume instantly
```

Data flow: **GitHub Actions (free, daily) -> Python pipeline -> `data/*.json` -> Next.js site on Vercel (free)**.
No paid server, no database needed at the start.

## Run it locally

Website:

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

Data pipeline:

```bash
cd data-pipeline
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python -m pipeline.run_daily
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Phase 1: project skeleton"
git branch -M main
git remote add origin https://github.com/<your-username>/stock-signals.git
git push -u origin main
```

Then in GitHub: **Settings -> Actions -> General -> Workflow permissions -> Read and write permissions**
(the daily job commits fresh data back to the repo).

## Resuming work in a new chat

Open [PROGRESS.md](./PROGRESS.md), paste it plus the current phase from [ROADMAP.md](./ROADMAP.md)
into the new chat, and say "continue from here".
