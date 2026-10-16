"""Daily entry point.

Phase 1: writes a heartbeat file so we can confirm the GitHub Action works end to end.
Later phases add steps here in order: universe -> OHLCV -> indicators -> scores -> backtests.
"""

import json
from datetime import datetime, timedelta, timezone

from .config import DATA_DIR, IST_OFFSET_MINUTES


def write_status() -> dict:
    ist = timezone(timedelta(minutes=IST_OFFSET_MINUTES))
    now = datetime.now(ist)
    status = {
        "last_run_ist": now.strftime("%Y-%m-%d %H:%M:%S"),
        "phase": 1,
        "steps_completed": ["heartbeat"],
    }
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / "status.json").write_text(json.dumps(status, indent=2) + "\n", encoding="utf-8")
    return status


def main() -> None:
    status = write_status()
    print(f"Pipeline OK at {status['last_run_ist']} IST")


if __name__ == "__main__":
    main()
