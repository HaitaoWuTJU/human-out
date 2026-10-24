#!/usr/bin/env python3
"""Validate catalog structure and the CSV export; standard library only."""
import csv
import json
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
rows = json.loads((ROOT / "data/tasks.json").read_text())
required = {"id", "year", "category", "task_zh", "task_en", "system", "evidence", "result_zh", "result_en", "limitations_zh", "limitations_en", "source_url", "checked_on"}
levels = {"champion", "professional", "tournament", "ranked", "benchmark", "solved", "amateur"}
categories = {"board", "cards", "videogame", "language", "perception", "robotics"}
assert rows, "Empty catalog"
assert len({r["id"] for r in rows}) == len(rows), "Duplicate ID"
for r in rows:
    assert set(r) == required, r.get("id")
    assert all(isinstance(v, str) and v.strip() for k, v in r.items() if k != "year"), r["id"]
    assert type(r["year"]) is int and 1900 <= r["year"] <= 2026, r["id"]
    assert r["evidence"] in levels and r["category"] in categories, r["id"]
    assert date.fromisoformat(r["checked_on"]).year >= r["year"], r["id"]
    u = urlparse(r["source_url"])
    assert u.scheme == "https" and u.netloc and not u.query, r["id"]
with (ROOT / "data/tasks.csv").open(newline="") as f:
    exported = list(csv.DictReader(f))
assert exported == [{k: str(v) for k, v in r.items()} for r in rows], "CSV drift"
for filename, task_key in [("README.md", "task_zh"), ("README.en.md", "task_en")]:
    text = (ROOT / filename).read_text()
    for r in rows:
        assert f'[{r[task_key]}]({r["source_url"]})' in text, (filename, r["id"])
print(f"OK: {len(rows)} records; JSON, CSV and README source links consistent.")
