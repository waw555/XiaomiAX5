#!/usr/bin/env python3
"""Проверка комплектности отдельного overlay русской локализации RA67."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent
OVERLAY = ROOT / "translation_ru"
ORIGINAL = ROOT / "original"
ROOTFS = ROOT / "rootfs"
EXPECTED_VERSION = "1.0.105-ru.3"

errors: list[str] = []
version = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
if version != EXPECTED_VERSION:
    errors.append(f"версия {version!r}, ожидалась {EXPECTED_VERSION!r}")
if not OVERLAY.is_dir():
    errors.append("нет отдельного каталога translation_ru")
if not ORIGINAL.is_dir():
    errors.append("нет отдельного каталога original для отката")

expected_originals = {
    path.relative_to(OVERLAY)
    for path in OVERLAY.rglob("*")
    if path.is_file() and (ROOTFS / path.relative_to(OVERLAY)).is_file()
}
actual_originals = {
    path.relative_to(ORIGINAL) for path in ORIGINAL.rglob("*") if path.is_file()
}
for relative in sorted(expected_originals - actual_originals):
    errors.append(f"нет оригинала для отката {relative}")
for relative in sorted(actual_originals - expected_originals):
    errors.append(f"лишний файл в original: {relative}")
for relative in sorted(expected_originals & actual_originals):
    if (ORIGINAL / relative).read_bytes() != (ROOTFS / relative).read_bytes():
        errors.append(f"оригинал не совпадает с rootfs: {relative}")

entries = [OVERLAY / "www" / name for name in ("index.html", "init.html", "main.html")]
for entry in entries:
    if not entry.is_file():
        errors.append(f"нет точки входа {entry.relative_to(ROOT)}")
        continue
    html = entry.read_text(encoding="utf-8")
    for asset in re.findall(r"/static/js/([^\"'\s>]+\.js)", html):
        if not (OVERLAY / "www/static/js" / asset).is_file():
            errors.append(f"{entry.name} ссылается на отсутствующий {asset}")

required = [
    OVERLAY / "www/static/js/manifest.6852692a66908daf7a55.js",
    OVERLAY / "www/static/js/main.7a365016a11525facf1b.js",
    OVERLAY / "www/static/js/init.69d3c3412093717fdb4b.js",
    OVERLAY / "usr/lib/lua/luci/view/web/inc/agreement_RU.htm",
    OVERLAY / "usr/lib/lua/luci/view/web/inc/privacy_RU.htm",
    OVERLAY / "usr/lib/lua/luci/view/web/setting/wifi.htm",
    OVERLAY / "usr/lib/lua/luci/view/web/setting/wan.htm",
]
for path in required:
    if not path.is_file():
        errors.append(f"нет обязательного файла {path.relative_to(ROOT)}")

if errors:
    print("Локализация не прошла проверку:", *errors, sep="\n- ")
    sys.exit(1)
print(
    f"Русская локализация {version}: overlay и {len(actual_originals)} "
    "оригиналов для отката готовы к копированию"
)
