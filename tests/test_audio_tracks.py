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
        
        print("Logging in as guest...")
        page.evaluate("APP.loginAsGuest()")
        page.wait_for_timeout(500)
        
        # Check floating audio player exists
        player = page.locator("#floatingAudioPlayer")
        assert player.is_visible(), "Floating audio player is not visible!"
        print("Floating audio player is visible!")
        
        # Check track title has Senbonzakura
        track_title = page.locator("text='Senbonzakura (Violin Cover)'").first
        assert track_title.is_visible(), "Senbonzakura title not visible!"
        print("Initial track is Senbonzakura (Violin Cover)!")
        
        # Take screenshot of the player widget
        player.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_audio_widget_initial.png")
        print("Saved test_audio_widget_initial.png")
        
        # Switch to Counting Stars
        print("2. Switching to Counting Stars...")
        page.evaluate("APP.changeAudioTrack('counting_stars')")
        page.wait_for_timeout(500)
        cs_title = page.locator("text='Counting Stars (Violin Cover)'").first
        assert cs_title.is_visible(), "Counting Stars title not visible!"
        print("Counting Stars (Violin Cover) is selected!")
        
        # Switch to We Don't Talk Anymore
        print("3. Switching to We Don't Talk Anymore...")
        page.evaluate("APP.changeAudioTrack('we_dont_talk_anymore')")
        page.wait_for_timeout(500)
        wdta_title = page.locator("text='We Don\'t Talk Anymore (Violin Cover)'").first
        assert wdta_title.is_visible(), "We Don't Talk Anymore title not visible!"
        print("We Don't Talk Anymore (Violin Cover) is selected!")
        
        # Test toggle play
        print("4. Testing toggle audio play...")
        page.evaluate("APP.toggleAudioPlay()")
        page.wait_for_timeout(500)
        
        playing_badge = page.locator("text='Đang phát'").first
        assert playing_badge.is_visible(), "Playing badge not visible!"
        print("Audio play state is active (Đang phát)!")
        
        player.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_audio_widget_playing.png")
        print("Saved test_audio_widget_playing.png")
        
        # Test Next Track button
        print("5. Testing next audio track...")
        page.evaluate("APP.nextAudioTrack()")
        page.wait_for_timeout(500)
        state = page.evaluate("window.SERVICES.Audio.getState()")
        print("Next track is now:", state["currentTrack"], "-", state["trackInfo"]["name"])
        
        # Test minimize
        print("6. Testing minimize...")
        page.locator("button[title='Thu nhỏ trình phát nhạc']").click()
        page.wait_for_timeout(500)
        min_btn = page.locator("button[title*='Mở trình phát nhạc']")
        assert min_btn.is_visible(), "Minimized audio bubble not visible!"
        print("Audio widget minimized into floating bubble!")
        
        page.screenshot(path="/home/thanh-nam/.gemini/antigravity-cli/brain/b11d19d8-8cb9-429a-a2e3-54b01329dc1a/scratch/test_audio_widget_minimized.png")
        print("Saved test_audio_widget_minimized.png")
        
        # Restore widget
        min_btn.click()
        page.wait_for_timeout(500)
        assert page.locator("#floatingAudioPlayer").is_visible(), "Restored audio widget not visible!"
        print("Audio widget restored successfully!")
        
        browser.close()
        print("ALL AUDIO TESTS PASSED! 🎉")

finally:
    http_server.terminate()
