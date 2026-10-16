"""Shared paths and settings."""

from pathlib import Path

# Repo root = two levels above this file (data-pipeline/pipeline/config.py)
REPO_ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = REPO_ROOT / "data"
OHLCV_DIR = DATA_DIR / "ohlcv"

# Indian market timezone offset (IST = UTC+05:30)
IST_OFFSET_MINUTES = 330
