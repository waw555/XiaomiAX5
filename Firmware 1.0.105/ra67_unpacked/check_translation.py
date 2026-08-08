#!/usr/bin/env python3
"""Проверка комплектности отдельного overlay русской локализации RA67."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent
OVERLAY = ROOT / "translation_ru"
EXPECTED_VERSION = "1.0.105-ru.2"

errors: list[str] = []
version = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
if version != EXPECTED_VERSION:
    errors.append(f"версия {version!r}, ожидалась {EXPECTED_VERSION!r}")
if not OVERLAY.is_dir():
    errors.append("нет отдельного каталога translation_ru")

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
print(f"Русская локализация {version}: overlay готов к копированию")
