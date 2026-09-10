import subprocess
import time
import sys
from playwright.sync_api import sync_playwright

http_server = subprocess.Popen([sys.executable, "-m", "http.server", "8089"], cwd="/home/thanh-nam/web_uliss")
time.sleep(1.2)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        print("1. Loading page...")
        page.goto("http://localhost:8089")
        page.wait_for_timeout(1000)

        print("2. Logging in as guest...")
        page.evaluate("APP.loginAsGuest()")
        page.wait_for_timeout(500)

        print("3. Navigating to Chapter 4...")
        page.evaluate("APP.navigateTo('ch4')")
        page.wait_for_timeout(1500)

        page.wait_for_selector("#challenge11Section", timeout=8000)

        # Check stage titles
        headings = page.locator("#challenge11Section .flex.items-center.space-x-2 h3").all_text_contents()
        print("Found stage headings:", headings)

        assert len(headings) >= 4, f"Expected at least 4 stage headings, got {len(headings)}"
        assert headings[0] == "Nghỉ ngơi và phục hồi cảm xúc", f"Stage 1 heading wrong: {headings[0]}"
        assert headings[1] == "Trở về với hiện tại", f"Stage 2 heading wrong: {headings[1]}"
        assert headings[2] == "Hãy tin vào chính bạn", f"Stage 3 heading wrong: {headings[2]}"
        assert headings[3] == "Đồng điệu với chính mình", f"Stage 4 heading wrong: {headings[3]}"

        # Check badges
        badges = page.locator("#challenge11Section .flex.items-center.space-x-2 span.bg-pink-100").all_text_contents()
        print("Found stage badges:", badges)
        assert badges[0] == "Chặng 1"
        assert badges[1] == "Chặng 2"
        assert badges[2] == "Chặng 3"
        assert badges[3] == "Chặng 4"

        # Check that no heading contains "Chặng"
        for i, h in enumerate(headings[:4]):
            assert not h.startswith("Chặng"), f"Heading {i+1} still contains 'Chặng': {h}"

        # Take screenshot of challenge section
        page.locator("#challenge11Section").screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_chapter4_stages.png")
        print("Screenshot saved to test_chapter4_stages.png")
        print("SUCCESS: All stage assertions passed perfectly!")
        browser.close()
finally:
    http_server.terminate()
