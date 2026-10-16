# Progress Log

Update this file at the end of every work session. It is the single source of truth for resuming.

## Current status
- **Phase:** 1 (skeleton) complete. Next up: **Phase 2 - stock universe and daily data**.
- **Last updated:** 2026-10-16

## What exists
- `web/` - Next.js 15 + React 19 + TypeScript + Tailwind 4 app, landing page only
- `data-pipeline/` - Python package `pipeline` with `run_daily.py` (writes `data/status.json` heartbeat)
- `.github/workflows/daily-data.yml` - runs the pipeline on weekdays after market close (16:30 IST) and commits `data/`
- `.github/workflows/web-ci.yml` - typecheck and build the site on every push

## Decisions
- Scanner/screener framing, not buy/sell advice (SEBI Research Analyst rules)
- Charts: TradingView Lightweight Charts (free, open source), custom indicators coded by us
- Free stack: GitHub Actions for data jobs, Vercel for hosting, data stored as files in the repo
- Start with swing and long-term (daily data), add options layer, then intraday with live data

## Next session checklist
1. Create the GitHub repo and push this folder (commands are in README)
2. Enable Actions write permission (Settings -> Actions -> General)
3. Start Phase 2: build `pipeline/universe.py` to fetch the NSE equity list and F&O list

## Session log
- 2026-10-16: Planned the project, created the skeleton and roadmap.
