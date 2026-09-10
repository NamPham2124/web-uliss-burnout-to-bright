import subprocess
import time
import sys
from playwright.sync_api import sync_playwright

http_server = subprocess.Popen([sys.executable, "-m", "http.server", "8088"], cwd="/home/thanh-nam/web_uliss")
time.sleep(1.2)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        
        print("1. Loading page...")
        page.goto("http://localhost:8088")
        page.wait_for_timeout(1000)
        
        print("Logging in as guest...")
        page.evaluate("APP.loginAsGuest()")
        page.wait_for_timeout(500)
            
        print("2. Navigating to Chapter 3...")
        page.evaluate("APP.navigateTo('ch3')")
        page.wait_for_timeout(1500)
        
        drop_zone = page.locator("#backpackDropZone")
        assert drop_zone.is_visible(), "Backpack drop zone not visible!"
        print("Backpack drop zone is visible!")
        
        backpack_section = page.locator("#backpackSection")
        backpack_section.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_backpack_initial.png")
        print("Saved test_backpack_initial.png")
        
        print("3. Testing 'Gắn cả 5 nguồn lực'...")
        page.locator("text='Gắn cả 5 nguồn lực'").click()
        page.wait_for_timeout(1000)
        
        counter_text = page.locator("text='Đã trang bị 5/5 nguồn lực'")
        assert counter_text.is_visible(), "Counter 5/5 not visible!"
        print("All 5 accessories equipped successfully!")
        
        backpack_section.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_backpack_all_on.png")
        print("Saved test_backpack_all_on.png")
        
        print("4. Testing 'Tháo rời làm lại'...")
        page.locator("text='Tháo rời làm lại'").click()
        page.wait_for_timeout(1000)
        
        counter_zero = page.locator("text='Đã trang bị 0/5 nguồn lực'")
        assert counter_zero.is_visible(), "Counter 0/5 not visible!"
        print("Unequipped all successfully!")
        
        backpack_section.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_backpack_all_off.png")
        print("Saved test_backpack_all_off.png")
        
        print("5. Testing click to equip keychain & bottle...")
        page.locator("text='+ Gắn Móc khóa ngôi sao'").first.click()
        page.wait_for_timeout(1000)
        page.locator("text='+ Gắn Bình nước'").first.click()
        page.wait_for_timeout(1000)
        
        counter_two = page.locator("text='Đã trang bị 2/5 nguồn lực'")
        assert counter_two.is_visible(), "Counter 2/5 not visible!"
        print("Equipped 2 items successfully!")
        
        print("6. Testing sync to Câu 3...")
        page.locator("text='Áp dụng nguồn lực này cho Câu 3'").first.click()
        page.wait_for_timeout(1000)
        
        ans3_val = page.locator("#lusiAns3").input_value()
        print(f"Câu 3 value: {ans3_val}")
        assert len(ans3_val) > 0, "Câu 3 answer not populated!"
        
        backpack_section.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_backpack_custom_equipped.png")
        print("Saved test_backpack_custom_equipped.png")
        
        print("7. Testing Drag and Drop from tray to backpack...")
        page.evaluate("""() => {
            const dataTransfer = new DataTransfer();
            dataTransfer.setData('text/plain', 'umbrella');
            const dropZone = document.getElementById('backpackDropZone');
            const event = new DragEvent('drop', {
                dataTransfer: dataTransfer,
                bubbles: true,
                cancelable: true
            });
            dropZone.dispatchEvent(event);
        }""")
        page.wait_for_timeout(1000)
        
        counter_three = page.locator("text='Đã trang bị 3/5 nguồn lực'")
        assert counter_three.is_visible(), "Counter 3/5 not visible after drag and drop!"
        print("Drag and drop simulation passed! Counter is 3/5!")
        
        browser.close()
        print("ALL TESTS PASSED SUCCESSFULLY! 🎉")

finally:
    http_server.terminate()
