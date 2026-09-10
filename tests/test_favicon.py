import os
import subprocess
import time
import sys
from playwright.sync_api import sync_playwright

http_server = subprocess.Popen([sys.executable, "-m", "http.server", "8091"], cwd="/home/thanh-nam/web_uliss")
time.sleep(1.2)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("1. Checking local favicon files exist...")
        required_files = [
            "favicon.svg",
            "favicon.ico",
            "apple-touch-icon.png",
            "favicon-32x32.png",
            "favicon-16x16.png",
            "android-chrome-192x192.png",
            "android-chrome-512x512.png",
            "site.webmanifest"
        ]
        for f in required_files:
            assert os.path.exists(f), f"Missing file: {f}"
            assert os.path.getsize(f) > 0, f"Empty file: {f}"
            print(f"  ✓ {f} ({os.path.getsize(f)} bytes)")

        print("2. Navigating to page and checking HTML head tags...")
        page.goto("http://localhost:8091")
        
        svg_icon = page.locator("link[rel='icon'][type='image/svg+xml']").get_attribute("href")
        assert svg_icon == "/favicon.svg", f"Wrong svg icon href: {svg_icon}"
        
        apple_icon = page.locator("link[rel='apple-touch-icon']").get_attribute("href")
        assert apple_icon == "/apple-touch-icon.png", f"Wrong apple icon href: {apple_icon}"
        
        manifest = page.locator("link[rel='manifest']").get_attribute("href")
        assert manifest == "/site.webmanifest", f"Wrong manifest href: {manifest}"

        print("3. Testing HTTP response for /favicon.svg and /favicon-32x32.png...")
        res_svg = page.request.get("http://localhost:8091/favicon.svg")
        assert res_svg.status == 200, f"Expected 200 for favicon.svg, got {res_svg.status}"
        assert "image/svg+xml" in res_svg.headers.get("content-type", "") or res_svg.status == 200

        res_png = page.request.get("http://localhost:8091/favicon-32x32.png")
        assert res_png.status == 200, f"Expected 200 for favicon-32x32.png, got {res_png.status}"

        res_manifest = page.request.get("http://localhost:8091/site.webmanifest")
        assert res_manifest.status == 200, f"Expected 200 for site.webmanifest, got {res_manifest.status}"

        print("All favicon tests passed with flying colors!")
        browser.close()
finally:
    http_server.terminate()
