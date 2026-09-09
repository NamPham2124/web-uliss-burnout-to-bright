/**
 * App Controller, Router & Event Orchestrator
 * From Burnout to Burn Bright — Trường ĐH Ngoại ngữ, ĐHQGHN (ULIS - VNU)
 */

window.APP = {
  state: {
    currentUser: null,
    activePage: 'home',
    authTab: 'login',
    authError: null,
    loginEmailDraft: '',
    dndSelectedStickerId: null,
    notifActiveTab: 'notifs',
    searchQuery: '',
    fullscreenExerciseId: null,
    pomodoro: {
      timer: null,
      timeLeft: 25 * 60,
      isRunning: false,
      sessionsCompleted: 0
    },
    adminAnalyticsFilter: 'all',
    adminAnalyticsSearch: ''
  },

  // =========================================================================
  // 1. LIFECYCLE & INITIALIZATION
  // =========================================================================
  init: function() {
    // 1. Load active user from storage
    this.state.currentUser = window.SERVICES.Auth.getActiveUser();

    // 2. Check scheduled notifications & reminders if authenticated
    if (this.state.currentUser) {
      window.SERVICES.EmailNotification.checkAllTriggers(this.state.currentUser.id);
    }

    // 3. Listen to URL Hash changes
    window.addEventListener('hashchange', () => {
      if (!this.state.currentUser) return;
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && hash !== this.state.activePage) {
        this.navigateTo(hash, false);
      }
    });

    // Check initial hash if authenticated
    if (this.state.currentUser) {
      const initialHash = window.location.hash.replace('#', '').trim();
      if (initialHash) {
        this.state.activePage = initialHash;
      }
    }

    // 4. Modal container background click listener
    const modalContainer = document.getElementById('modalContainer');
    if (modalContainer) {
      modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
          this.closeModal();
        }
      });
    }

    // 5. Fullscreen change listener
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && this.state.fullscreenExerciseId) {
        this.exitExerciseFullscreen(false);
      }
    });

    // Escape key listener for fullscreen
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.fullscreenExerciseId) {
        this.exitExerciseFullscreen(true);
      }
    });

    // 6. Theme Initialization
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}

    // 7. Initial Render
    this.render();
    console.log("Burn Bright App fully initialized.");
  },

  // =========================================================================
  // 2. NAVIGATION & ROUTING
  // =========================================================================
  navigateTo: function(pageId, updateHash = true) {
    if (!this.state.currentUser) {
      if (pageId === 'register' || pageId === 'login') {
        this.state.authTab = pageId;
      }
      this.render();
      return;
    }

    if (pageId === 'admin') {
      if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
        this.showToast('Khu vực này chỉ dành riêng cho tài khoản Quản trị viên (Admin)!', 'warning');
        return;
      }
    }

    this.state.activePage = pageId;
    this.state.dndSelectedStickerId = null;
    this.state.authError = null;

    if (updateHash) {
      window.location.hash = pageId;
    }

    // Close mobile nav drawer if open
    const drawer = document.getElementById('mobileNavDrawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }

    // Record last activity
    if (['ch1', 'ch2', 'ch3', 'ch4'].includes(pageId)) {
      const titles = {
        ch1: 'Chương 1: Bài Test Đánh giá Burnout',
        ch2: 'Chương 2: Mô hình Tảng băng trôi',
        ch3: 'Chương 3: Kéo thả & Pomodoro',
        ch4: 'Chương 4: Thử thách 11 Ngày & Thư Tương Lai'
      };
      window.SERVICES.Progress.recordLastActivity(this.state.currentUser.id, {
        chapterId: parseInt(pageId.replace('ch', '')),
        title: titles[pageId] || 'Bài học',
        path: pageId
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  },

  resumeLearning: function() {
    if (!this.state.currentUser) {
      this.render();
      return;
    }
    const last = window.SERVICES.Progress.getLastActiveActivity(this.state.currentUser.id);
    this.showToast(`Đang đưa bạn đến: ${last.title}`, 'info');
    this.navigateTo(last.path || 'ch1');
  },

  scrollToDay11: function() {
    const el = document.getElementById('day11FutureLetterSection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  },

  toggleMobileNav: function() {
    const drawer = document.getElementById('mobileNavDrawer');
    if (drawer) {
      drawer.classList.toggle('hidden');
    }
  },

  toggleTheme: function() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch(e) {}
    const themeIcon = document.getElementById('themeToggleIcon');
    if (themeIcon) {
      themeIcon.className = isDark ? 'fas fa-sun text-amber-400' : 'fas fa-moon text-slate-600';
    }
    this.showToast(isDark ? 'Đã bật chế độ Tối (Dark Mode)' : 'Đã chuyển sang chế độ Sáng (Light Mode)', 'info');
  },

  toggleFullScreen: function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
      this.showToast('Đã chuyển sang chế độ Toàn màn hình', 'info');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.showToast('Đã thoát chế độ Toàn màn hình', 'info');
      }
    }
  },

  // =========================================================================
  // 3. AUTHENTICATION HANDLERS (FIRST GATE)
  // =========================================================================
  switchAuthTab: function(tab) {
    this.state.authTab = tab;
    this.state.authError = null;
    this.render();
  },

  handleLogin: function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;

    const res = window.SERVICES.Auth.login(email, password);
    if (res.success) {
      this.state.currentUser = res.user;
      this.state.authError = null;
      this.state.loginEmailDraft = '';
      window.SERVICES.EmailNotification.checkAllTriggers(res.user.id);
      this.showToast(`Chào mừng ${res.user.name} đến với Burn Bright!`, 'success');
      this.navigateTo('home');
    } else {
      this.state.authError = res.message;
      this.state.loginEmailDraft = email;
      this.render();
    }
  },

  handleRegister: function(e) {
    e.preventDefault();
    const name = document.getElementById('regName')?.value;
    const email = document.getElementById('regEmail')?.value;
    const password = document.getElementById('regPassword')?.value;
    const role = document.getElementById('regRole')?.value;

    const res = window.SERVICES.Auth.register({ name, email, password, role });
    if (res.success) {
      this.state.currentUser = res.user;
      this.state.authError = null;
      this.showToast(`Tài khoản đã được tạo thành công! Chào mừng ${res.user.name}!`, 'success');
      this.navigateTo('home');
    } else {
      this.state.authError = res.message;
      this.render();
    }
  },

  loginAsGuest: function() {
    const guest = window.SERVICES.Auth.loginGuest();
    this.state.currentUser = guest;
    this.state.authError = null;
    this.showToast('Đã mở khóa toàn bộ nền tảng dưới quyền Bạn Đọc Khách!', 'info');
    this.navigateTo('home');
  },

  logout: function() {
    window.SERVICES.Auth.logout();
    this.state.currentUser = null;
    window.SERVICES.Audio.pause();
    this.showToast('Đã đăng xuất tài khoản.', 'info');
    this.render();
  },

  // =========================================================================
  // 4. GENTLE AMBIENT BACKGROUND MUSIC CONTROLS
  // =========================================================================
  toggleAudioPlay: function() {
    const isPlaying = window.SERVICES.Audio.toggle();
    const state = window.SERVICES.Audio.getState();
    if (isPlaying) {
      this.showToast(`🎵 Đang phát: ${state.trackInfo.name}`, 'info');
    } else {
      this.showToast('Đã tạm dừng nhạc nền.', 'info');
    }
    this.render();
  },

  setAudioVolume: function(val) {
    window.SERVICES.Audio.setVolume(val);
  },

  changeAudioTrack: function(trackKey) {
    window.SERVICES.Audio.setTrack(trackKey);
    const state = window.SERVICES.Audio.getState();
    this.showToast(`🎵 Đã đổi sang: ${state.trackInfo.name}`, 'info');
    this.render();
  },

  // =========================================================================
  // 5. FULLSCREEN FOCUS MODE FOR EXERCISES
  // =========================================================================
  toggleExerciseFullscreen: function(exerciseId, title) {
    const el = document.getElementById(exerciseId);
    if (!el) return;

    if (this.state.fullscreenExerciseId === exerciseId) {
      this.exitExerciseFullscreen(true);
      return;
    }

    // Exit any existing
    if (this.state.fullscreenExerciseId) {
      this.exitExerciseFullscreen(false);
    }

    this.state.fullscreenExerciseId = exerciseId;
    el.classList.add('fullscreen-exercise-active');

    // Inject zen toolbar
    const tbContainer = document.getElementById('zenToolbar_' + exerciseId);
    if (tbContainer) {
      tbContainer.innerHTML = COMPONENTS.renderFullscreenZenToolbar(exerciseId, title);
    }

    // Request browser fullscreen if available
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (e) {}

    this.showToast(`Đã bật Chế độ Tập trung Toàn Màn Hình cho: ${title}`, 'success');
  },

  exitExerciseFullscreen: function(requestBrowserExit = true) {
    if (this.state.fullscreenExerciseId) {
      const el = document.getElementById(this.state.fullscreenExerciseId);
      if (el) {
        el.classList.remove('fullscreen-exercise-active');
      }
      const tbContainer = document.getElementById('zenToolbar_' + this.state.fullscreenExerciseId);
      if (tbContainer) {
        tbContainer.innerHTML = '';
      }
      this.state.fullscreenExerciseId = null;
    }

    if (requestBrowserExit && document.fullscreenElement) {
      try {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (e) {}
    }
  },

  // =========================================================================
  // 6. CHAPTER 1 HANDLERS (Assessment & Scoring)
  // =========================================================================
  calculateBurnoutScore: function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const form = (e && e.target && e.target.tagName === 'FORM') ? e.target : document.getElementById('burnoutForm');
    const questions = window.APP_DATA.chapters[0].quiz.questions;
    let totalScore = 0;
    let count = 0;
    const answers = [];

    for (let i = 0; i < questions.length; i++) {
      const selected = form ? form.querySelector(`input[name="q_${i}"]:checked`) : document.querySelector(`input[name="q_${i}"]:checked`);
      if (selected && selected.value) {
        const num = parseInt(selected.value);
        totalScore += num;
        answers.push(num);
        count++;
      }
    }

    if (count < questions.length) {
      this.showToast(`Vui lòng trả lời đầy đủ tất cả ${questions.length} câu hỏi.`, 'warning');
      return;
    }

    const avgScore = totalScore / questions.length;
    const testResult = {
      score: avgScore,
      answers: answers,
      timestamp: new Date().toISOString()
    };
    this.state.activeTestResult = testResult;

    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch1.testResult = testResult;
      userData.progress.ch1.completed = true;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

      // Sync test result to Supabase Cloud
      if (window.SERVICES.Supabase) {
        window.SERVICES.Supabase.syncBurnoutResult(this.state.currentUser.id, avgScore, answers);
      }

      // Record Streak Activity
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Bài Test SBI 9 Câu");
      this.showToast('Đã lưu kết quả đánh giá Academic Burnout chuẩn hóa!', 'success');
    }

    const container = document.getElementById('testResultContainer');
    if (container) {
      container.classList.remove('hidden');
      container.innerHTML = COMPONENTS.renderTestResultContent(testResult);
      container.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // =========================================================================
  // CHAPTER 3 HANDLERS (Backpack, Pressure Valve, Canvas, Grounding, Emotion Stop)
  // =========================================================================
  setBackpackWeight: function(percent) {
    const textEl = document.getElementById('backpackWeightText');
    if (textEl) textEl.innerText = percent + '%';
    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.backpackWeight = percent;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    }
    this.showToast(`Đã chọn mức tải trọng ba lô: ${percent}%`, 'info');
  },

  selectBackpackAccessory: function(accId) {
    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.selectedAccessory = accId;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    }
    this.render();
  },

  saveLusiAnswer: function(qId, val) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.lusiAnswers = userData.progress.ch3.lusiAnswers || {};
    userData.progress.ch3.lusiAnswers[qId] = val;
    userData.progress.ch3.completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Phân tích tình huống Lusi & Thuyết Lazarus");
    this.showToast('Đã lưu câu trả lời bài tập Chiếc ba lô của Lusi!', 'success');
  },

  setBackpackItemCategory: function(itemId, category) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.backpackCategories = userData.progress.ch3.backpackCategories || {};
    userData.progress.ch3.backpackCategories[itemId] = category;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  addCustomBackpackItem: function() {
    const input = document.getElementById('customBackpackItemInput');
    const catSelect = document.getElementById('customBackpackItemCat');
    const val = input?.value?.trim();
    const cat = catSelect?.value || 'keep';

    if (!val) {
      this.showToast('Vui lòng nhập điều bạn muốn sắp xếp.', 'warning');
      return;
    }

    const newId = 'custom_' + Date.now();
    window.APP_DATA.chapters[2].lusiBackpackExercise.classificationItems.push({
      id: newId,
      text: val,
      defaultCategory: cat
    });

    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.backpackCategories = userData.progress.ch3.backpackCategories || {};
      userData.progress.ch3.backpackCategories[newId] = cat;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    }

    if (input) input.value = '';
    this.showToast(`Đã thêm vào ngăn ${cat.toUpperCase()} của ba lô!`, 'success');
    this.render();
  },

  saveLusiEncouragement: function(val) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.lusiAnswers = userData.progress.ch3.lusiAnswers || {};
    userData.progress.ch3.lusiAnswers.encouragement = val;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Viết lời nhắn động viên cho Lusi");
    this.showToast('Đã lưu lời nhắn động viên ấm áp của bạn!', 'success');
  },

  // Handlers for "Chiếc Van Xả Áp Lực"
  setWaterLevel: function(percent, label, color) {
    const bottleEl = document.getElementById('bottleWaterFill');
    const fillEl = document.getElementById('waterTankFill');
    const textEl = document.getElementById('waterLevelPercentText');
    const labelEl = document.getElementById('waterLevelLabelText');

    if (bottleEl) {
      bottleEl.style.height = percent + '%';
      bottleEl.style.backgroundColor = color;
    }
    if (fillEl) {
      fillEl.style.width = percent + '%';
      fillEl.style.backgroundColor = color;
    }
    if (textEl) textEl.innerText = percent + '%';
    if (labelEl) labelEl.innerText = label;

    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.waterLevel = { percent, label, timestamp: new Date().toISOString() };
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    }
    this.showToast(`Đã ghi nhận mức nước cảm xúc: ${percent}% — ${label}`, 'info');
  },

  switchValveTab: function(tabId) {
    document.querySelectorAll('.valve-tab-content').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`valveContent_${tabId}`);
    if (target) target.classList.remove('hidden');

    if (tabId === 'draw') {
      setTimeout(() => this.initEmotionCanvas(), 60);
    }
  },

  initEmotionCanvas: function() {
    const canvas = document.getElementById('emotionCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    this.state.canvasContext = ctx;
    this.state.canvasColor = this.state.canvasColor || '#1e293b';

    let drawing = false;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (canvas.width / rect.width),
        y: (clientY - rect.top) * (canvas.height / rect.height)
      };
    };

    const startDraw = (e) => {
      drawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      if (e.touches) e.preventDefault();
    };

    const draw = (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.strokeStyle = this.state.canvasColor || '#1e293b';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      if (e.touches) e.preventDefault();
    };

    const stopDraw = (e) => {
      drawing = false;
      if (e.touches) e.preventDefault();
    };

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    canvas.onmouseup = stopDraw;
    canvas.onmouseleave = stopDraw;

    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;
  },

  setCanvasColor: function(color) {
    this.state.canvasColor = color;
    this.showToast(`Đã chọn màu nét vẽ!`, 'info');
  },

  clearEmotionCanvas: function() {
    const canvas = document.getElementById('emotionCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.showToast('Đã xóa bảng vẽ!', 'info');
    }
  },

  saveEmotionCanvas: function() {
    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.canvasDrawn = true;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Vẽ giải tỏa cảm xúc ở Chiếc Van Xả");
    }
    this.showToast('🎨 Tuyệt vời! Bạn đã hoàn thành bức vẽ giải tỏa cảm xúc!', 'success');
  },

  saveValveNotepad: function(text) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.valveNotepad = text;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Viết giải tỏa cảm xúc ở Chiếc Van Xả");
    this.showToast('Đã lưu góc viết tự do xả van của bạn!', 'success');
  },

  saveValveTalkNote: function(text) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.valveTalkNote = text;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast('Đã lưu lời muốn chia sẻ của bạn!', 'success');
  },

  saveGroundingInputs: function() {
    if (!this.state.currentUser) return;
    const inputs = {};
    for (let i = 1; i <= 5; i++) {
      const el = document.getElementById(`groundingInput_${i}`);
      if (el) inputs[i] = el.value.trim();
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.groundingInputs = inputs;
    userData.progress.ch3.groundingCompleted = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Bài Tập Nối Đất 5-4-3-2-1");
    this.showToast('🌿 Tuyệt vời! Bạn đã hoàn thành bài tập Nối Đất 5 Giác Quan và đưa tâm trí trở về hiện tại!', 'success');
  },

  finishValveRelease: function(feeling, newPercent) {
    this.setWaterLevel(newPercent, feeling, '#10b981');
    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.completed = true;
      userData.progress.ch3.finalFeeling = feeling;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Xả van áp lực thành công");
    }
    this.showToast(`🎉 Van áp lực đã được mở an toàn! Cảm nhận hiện tại: "${feeling}".`, 'success');
  },

  setAfterWaterLevel: function(percent) {
    this.state.valveAfterPercent = percent;
    const disp = document.getElementById('valveAfterPercentDisplay');
    if (disp) disp.innerText = percent + '%';

    [10, 20, 30, 40, 50, 60, 80].forEach(p => {
      const btn = document.getElementById(`afterLevelBtn_${p}`);
      if (btn) {
        if (p === percent) {
          btn.className = "px-2.5 py-1.5 rounded-xl border text-xs font-extrabold transition-all bg-emerald-600 text-white border-emerald-700 shadow-sm scale-105";
        } else {
          btn.className = "px-2.5 py-1.5 rounded-xl border text-xs font-extrabold transition-all bg-white text-slate-700 border-slate-200 hover:bg-emerald-50";
        }
      }
    });

    const badge = document.getElementById('valveDiffBadge');
    if (badge && this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      const before = userData.progress?.ch3?.waterLevel?.percent || 65;
      if (before > percent) {
        badge.innerText = `Giảm ${before - percent}%`;
        badge.className = "ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900";
      } else {
        badge.innerText = "Đang duy trì";
        badge.className = "ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700";
      }
    }
    this.showToast(`Đã chọn mức nước sau bài tập: ${percent}%`, 'info');
  },

  updateValveFeelingsState: function() {
    // Collect checked feelings
    const selected = Array.from(document.querySelectorAll('input[name="valveFeelings"]:checked')).map(cb => cb.value);
    this.state.valveStep4Feelings = selected;
  },

  saveValveStep4Complete: function() {
    if (!this.state.currentUser) return;
    const selectedBoxes = Array.from(document.querySelectorAll('input[name="valveFeelings"]:checked')).map(cb => cb.value);
    const otherCheck = document.getElementById('valveFeelingOtherCheck');
    const otherInp = document.getElementById('valveStep4OtherInput');
    let otherText = '';
    if (otherCheck && otherCheck.checked && otherInp) {
      otherText = otherInp.value.trim();
    }

    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    const percent = this.state.valveAfterPercent !== undefined ? this.state.valveAfterPercent : (userData.progress.ch3.valveStep4?.percent || 20);
    
    userData.progress.ch3.valveStep4 = {
      percent: percent,
      feelings: selectedBoxes,
      otherText: otherText,
      completed: true,
      updatedAt: new Date().toISOString()
    };
    userData.progress.ch3.completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Kiểm tra lại chiếc bình cảm xúc (Bước 4)");
    
    // Also update main water fill in bottle if present
    const bottleEl = document.getElementById('bottleWaterFill');
    if (bottleEl) {
      bottleEl.style.height = percent + '%';
      bottleEl.style.backgroundColor = '#10b981';
    }
    const textEl = document.getElementById('waterLevelPercentText');
    if (textEl) textEl.innerText = percent + '%';
    const labelEl = document.getElementById('waterLevelLabelText');
    if (labelEl) labelEl.innerText = selectedBoxes.length > 0 ? selectedBoxes.join(', ') : 'Đã xả van cảm xúc an toàn';

    this.showToast(`🎉 Đã lưu kết quả kiểm tra chiếc bình cảm xúc! Mực nước hiện tại còn ${percent}%.`, 'success');
  },

  saveEmotionStopJournal: function() {
    if (!this.state.currentUser) return;
    const data = {};
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`emStop_${i}`);
      if (el) data['q' + i] = el.value.trim();
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3 = userData.progress.ch3 || {};
    userData.progress.ch3.emotionStopData = data;
    userData.progress.ch3.completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Nhật Ký Trạm Dừng Cảm Xúc");
    this.showToast('💙 Đã lưu lại Nhật ký Trạm Dừng Cảm Xúc 8 bước của bạn!', 'success');
  },

  saveValveReleaseMethod: function(methodName) {
    if (this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      userData.progress.ch3 = userData.progress.ch3 || {};
      userData.progress.ch3.valveMethod = methodName;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Thực hiện Xả Áp Lực");
    }
    this.showToast(`Đã chọn phương thức mở van: ${methodName}. Hãy dành vài phút thả lỏng nhé!`, 'success');
  },

  toggleGroundingCheck: function(senseNum) {
    const cb = document.getElementById(`grounding_${senseNum}`);
    if (cb && cb.checked) {
      this.showToast(`✓ Tuyệt vời! Đã hoàn thành bước nối đất ${senseNum}.`, 'success');
      if (this.state.currentUser) {
        window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Kỹ thuật Nối Đất 5-4-3-2-1");
      }
    }
  },

  // =========================================================================
  // 7. CHAPTER 2 HANDLERS (Iceberg Model Tool & Memory Reflection)
  // =========================================================================
  saveMemoryReflection: function() {
    if (!this.state.currentUser) return;
    const input = document.getElementById('memoryExerciseInput');
    const val = input?.value?.trim();
    if (!val) {
      this.showToast('Vui lòng chia sẻ đôi điều về ngày mệt mỏi ấy nhé.', 'warning');
      return;
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch2 = userData.progress.ch2 || {};
    userData.progress.ch2.memoryReflection = val;
    userData.progress.ch2.completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Chia sẻ cảm xúc 'Một ngày kiệt sức nhất'");
    this.showToast('Đã lưu dòng suy nghĩ của bạn!', 'success');
  },

  addIcebergItem: function(type) {
    if (!this.state.currentUser) return;
    const inputId = type === 'floating' ? 'floatingInput' : 'submergedInput';
    const input = document.getElementById(inputId);
    const val = input?.value?.trim();

    if (!val) return;

    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch2.iceberg = userData.progress.ch2.iceberg || {
      floating: [...APP_DATA.chapters[1].exercise.defaultFloating],
      submerged: [...APP_DATA.chapters[1].exercise.defaultSubmerged]
    };

    userData.progress.ch2.iceberg[type].push(val);
    userData.progress.ch2.icebergModified = true;
    userData.progress.ch2.completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    if (input) input.value = '';
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Cập nhật Mô hình Tảng Băng Trôi");
    this.showToast(`Đã thêm vào ${type === 'floating' ? 'Phần Nổi' : 'Phần Chìm'} của Tảng Băng!`, 'success');
    this.render();
  },

  removeIcebergItem: function(type, itemText) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    if (!userData.progress.ch2.iceberg) return;

    userData.progress.ch2.iceberg[type] = userData.progress.ch2.iceberg[type].filter(i => i !== itemText);
    userData.progress.ch2.icebergModified = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  // =========================================================================
  // 8. CHAPTER 3 HANDLERS (Drag & Drop, Pomodoro, Energy Map)
  // =========================================================================
  onDragStart: function(e, stickerId) {
    e.dataTransfer.setData('text/plain', stickerId);
    this.state.dndSelectedStickerId = stickerId;
    const el = document.getElementById(`sticker_${stickerId}`);
    if (el) el.classList.add('is-dragging');
  },

  onDragOver: function(e) {
    e.preventDefault();
    const zone = e.currentTarget;
    if (zone && !zone.classList.contains('correct-match')) {
      zone.classList.add('drag-over');
    }
  },

  onDragLeave: function(e) {
    const zone = e.currentTarget;
    if (zone) zone.classList.remove('drag-over');
  },

  onDrop: function(e, dropId) {
    e.preventDefault();
    const zone = e.currentTarget;
    if (zone) zone.classList.remove('drag-over');

    const stickerId = e.dataTransfer.getData('text/plain') || this.state.dndSelectedStickerId;
    this.processDndMatch(stickerId, dropId);
  },

  onStickerClick: function(stickerId) {
    const el = document.getElementById(`sticker_${stickerId}`);
    if (this.state.dndSelectedStickerId === stickerId) {
      this.state.dndSelectedStickerId = null;
      if (el) el.classList.remove('selected-for-drop');
    } else {
      document.querySelectorAll('.draggable-item').forEach(d => d.classList.remove('selected-for-drop'));
      this.state.dndSelectedStickerId = stickerId;
      if (el) el.classList.add('selected-for-drop');
      this.showToast('Đã chọn sticker! Bây giờ chạm vào Giải pháp tương ứng bên phải để ghép cặp.', 'info');
    }
  },

  onDropZoneClick: function(dropId) {
    if (!this.state.dndSelectedStickerId) return;
    this.processDndMatch(this.state.dndSelectedStickerId, dropId);
    this.state.dndSelectedStickerId = null;
    document.querySelectorAll('.draggable-item').forEach(d => d.classList.remove('selected-for-drop'));
  },

  processDndMatch: function(stickerId, dropId) {
    if (!this.state.currentUser) return;
    if (!stickerId || !dropId) return;

    const pairs = APP_DATA.chapters[2].dndExercise.pairs;
    const targetPair = pairs.find(p => p.id === dropId);

    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.dndState = userData.progress.ch3.dndState || { pairs: {}, isCompleted: false, score: 0 };

    if (stickerId === dropId) {
      userData.progress.ch3.dndState.pairs[dropId] = stickerId;
      const matchedCount = Object.keys(userData.progress.ch3.dndState.pairs).length;
      userData.progress.ch3.dndState.score = matchedCount;

      if (matchedCount >= 6) {
        userData.progress.ch3.dndState.isCompleted = true;
        userData.progress.ch3.completed = true;
        window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Bài Tập Kéo Thả Chuyển Hóa");
        this.showToast("🎉 Xuất sắc! Bạn đã ghép đúng toàn bộ 6 cặp chuyển hóa cảm xúc!", "success");
      } else {
        this.showToast(`✓ Chính xác! ${targetPair.explanation}`, "success");
      }

      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
      this.render();
    } else {
      const zone = document.getElementById(`dropzone_${dropId}`);
      if (zone) {
        zone.classList.add('incorrect-match');
        setTimeout(() => zone.classList.remove('incorrect-match'), 600);
      }
      this.showToast("Chưa chính xác, bạn hãy đọc kỹ lại giải pháp và thử lại nhé!", "warning");
    }
  },

  handleLusiAnswer: function(qId, val) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.lusiAnswers = userData.progress.ch3.lusiAnswers || {};
    userData.progress.ch3.lusiAnswers[qId] = val;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast('Đã ghi nhận câu trả lời tình huống Lusi.', 'info');
  },

  togglePomodoro: function() {
    const btn = document.getElementById('pomoStartBtn');
    if (this.state.pomodoro.isRunning) {
      clearInterval(this.state.pomodoro.timer);
      this.state.pomodoro.isRunning = false;
      if (btn) btn.innerText = 'Tiếp tục';
    } else {
      this.state.pomodoro.isRunning = true;
      if (btn) btn.innerText = 'Tạm dừng';
      this.state.pomodoro.timer = setInterval(() => {
        this.state.pomodoro.timeLeft--;
        this.updatePomodoroDisplay();

        if (this.state.pomodoro.timeLeft <= 0) {
          clearInterval(this.state.pomodoro.timer);
          this.state.pomodoro.isRunning = false;
          this.state.pomodoro.sessionsCompleted++;
          this.state.pomodoro.timeLeft = 25 * 60;

          if (this.state.currentUser) {
            const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
            userData.progress.ch4 = userData.progress.ch4 || {};
            userData.progress.ch4.pomodoroSessions = (userData.progress.ch4.pomodoroSessions || 0) + 1;
            window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
            window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành 1 Phiên Pomodoro 25p");
          }

          this.showToast('🍅 Chúc mừng! Bạn đã hoàn thành 1 phiên Pomodoro tập trung 25 phút!', 'success');
          this.updatePomodoroDisplay();
        }
      }, 1000);
    }
  },

  resetPomodoro: function() {
    clearInterval(this.state.pomodoro.timer);
    this.state.pomodoro.isRunning = false;
    this.state.pomodoro.timeLeft = 25 * 60;
    const btn = document.getElementById('pomoStartBtn');
    if (btn) btn.innerText = 'Bắt đầu (25p)';
    this.updatePomodoroDisplay();
  },

  updatePomodoroDisplay: function() {
    const mins = Math.floor(this.state.pomodoro.timeLeft / 60);
    const secs = this.state.pomodoro.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const disp = document.getElementById('pomoDisplay');
    const count = document.getElementById('pomoSessionCount');
    if (disp) disp.innerText = timeStr;
    if (count) count.innerText = `Đã xong: ${this.state.pomodoro.sessionsCompleted} phiên`;
  },

  cycleEnergySlot: function(hour) {
    if (!this.state.currentUser) return;
    const colors = ['green', 'yellow', 'red'];
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4 = userData.progress.ch4 || {};
    userData.progress.ch4.energyMap = userData.progress.ch4.energyMap || {};

    const current = userData.progress.ch4.energyMap[hour] || 'green';
    const nextIdx = (colors.indexOf(current) + 1) % colors.length;
    const nextColor = colors[nextIdx];

    userData.progress.ch4.energyMap[hour] = nextColor;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    const slot = document.getElementById(`slot_${hour}`);
    if (slot) {
      slot.className = `energy-slot p-2.5 rounded-xl border text-center font-bold text-xs transition-all shadow-sm ${
        nextColor === 'green' ? 'bg-emerald-500 text-white border-emerald-600' :
        nextColor === 'yellow' ? 'bg-amber-500 text-white border-amber-600' :
        'bg-rose-500 text-white border-rose-600'
      }`;
    }
  },

  // =========================================================================
  // 9. CHAPTER 4 HANDLERS (Video, 11-Day Challenge, Value Flower & Future Letter)
  // =========================================================================
  onVideoTimeUpdate: function(video) {
    if (!this.state.currentUser || !video.duration) return;
    const percent = Math.round((video.currentTime / video.duration) * 100);
    if (percent > 80) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      if (!userData.progress.ch4.videoCompleted) {
        userData.progress.ch4.videoCompleted = true;
        window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
        window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Xem Video Hướng Dẫn Tái Tạo Năng Lượng");
        this.showToast("✓ Đã hoàn thành xem video bài học thiền thở!", "success");
      }
    }
  },

  onVideoEnded: function() {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.videoCompleted = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Video Tái Tạo Năng Lượng");
    this.render();
  },

  handleVideoError: function(video) {
    console.warn("Video stream load fallback activated.");
  },

  toggleChallengeDay: function(dayNum) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};

    if (!userData.progress.ch4.challenge11Days[dayNum]) {
      userData.progress.ch4.challenge11Days[dayNum] = { completed: false, note: '' };
    }
    userData.progress.ch4.challenge11Days[dayNum].completed = !userData.progress.ch4.challenge11Days[dayNum].completed;

    const doneCount = Object.values(userData.progress.ch4.challenge11Days).filter(c => c.completed).length;
    if (userData.progress.ch4.challenge11Days[dayNum].completed) {
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, `Hoàn thành Ngày ${dayNum} trong Thử Thách 11 Ngày`);
      this.showToast(`✓ Đã hoàn thành nhiệm vụ Ngày ${dayNum}! (${doneCount}/11 Ngày)`, 'success');
    }

    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  saveChallengeDayAnswers: function(dayNum, ansObj) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4 = userData.progress.ch4 || {};
    userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};
    userData.progress.ch4.challenge11Days[dayNum] = userData.progress.ch4.challenge11Days[dayNum] || { completed: false };
    Object.assign(userData.progress.ch4.challenge11Days[dayNum], ansObj);
    userData.progress.ch4.challenge11Days[dayNum].completed = true;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    window.SERVICES.Streak.recordActivity(this.state.currentUser.id, `Hoàn thành bài tập Ngày ${dayNum}`);
    this.showToast(`✓ Đã lưu câu trả lời và ghi nhận hoàn thành Ngày ${dayNum}!`, 'success');
    this.render();
  },

  saveChallengeNote: function(dayNum, text) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};

    if (!userData.progress.ch4.challenge11Days[dayNum]) {
      userData.progress.ch4.challenge11Days[dayNum] = { completed: false, note: '' };
    }
    userData.progress.ch4.challenge11Days[dayNum].note = text;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
  },

  saveValueFlowerPetal: function(idx, val) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.valueFlower = userData.progress.ch4.valueFlower || {};
    userData.progress.ch4.valueFlower[idx] = val;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast(`Đã lưu Cánh hoa giá trị ${idx}: ${val}`, 'info');
  },

  handleCreateFutureLetter: function(e) {
    e.preventDefault();
    if (!this.state.currentUser) return;

    const recipient = document.getElementById('letRecipient')?.value;
    const unlockDate = document.getElementById('letUnlockDate')?.value;
    const targetEmail = document.getElementById('letTargetEmail')?.value;
    const content = document.getElementById('letContent')?.value;
    const signature = document.getElementById('letSignature')?.value;

    const res = window.SERVICES.FutureLetter.createLetter(this.state.currentUser.id, {
      recipient,
      unlockDate,
      targetEmail,
      content,
      signature
    });

    if (res.success) {
      this.showToast(res.message, 'success');
      this.render();
      this.scrollToDay11();
    } else {
      this.showToast(res.message, 'warning');
    }
  },

  // =========================================================================
  // 10. FAVORITES & MODAL HANDLERS
  // =========================================================================
  toggleFavorite: function(item) {
    if (!this.state.currentUser) return;
    const res = window.SERVICES.Favorites.toggleFavorite(this.state.currentUser.id, item);
    this.showToast(res.message, res.isFav ? 'success' : 'info');
    this.render();
  },

  openStreakModal: function() {
    if (!this.state.currentUser) return;
    const info = window.SERVICES.Streak.getStreakInfo(this.state.currentUser.id);
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    modal.innerHTML = `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-orange-200 text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-orange-100 text-orange-500 text-3xl flex items-center justify-center mx-auto shadow-md">
          <i class="fas fa-fire"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 font-serif-title">Chuỗi Streak Của Bạn</h3>
        <div class="text-4xl font-extrabold text-orange-600 font-serif-title">${info.count} Ngày Liên Tiếp</div>
        <p class="text-xs text-slate-600 leading-relaxed">
          ${info.activeToday ? '🔥 Bạn đã hoàn thành hoạt động hôm nay và duy trì ngọn lửa kiên cường!' : '⚠️ Bạn chưa ghi nhận hoạt động nào hôm nay. Hãy làm một bài test, đọc bài học hoặc viết thư để duy trì streak nhé!'}
        </p>
        <button onclick="APP.closeModal()" class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md">
          Đóng
        </button>
      </div>
    `;
    modal.classList.remove('hidden');
  },

  openNotificationModal: function() {
    if (!this.state.currentUser) return;
    const notifs = window.SERVICES.EmailNotification.getNotifications(this.state.currentUser.id);
    const emailLogs = window.SERVICES.EmailNotification.getEmailLogs(this.state.currentUser.id);
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    modal.innerHTML = `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-emerald-200 space-y-4 max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div class="flex items-center space-x-2">
            <i class="fas fa-inbox text-emerald-600 text-lg"></i>
            <h3 class="text-base font-bold text-slate-900">Hộp Thư & Thông Báo Email</h3>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-600 text-sm">×</button>
        </div>

        <div class="space-y-3">
          ${emailLogs.length === 0 ? `
            <div class="text-center py-6 text-xs text-slate-400">Chưa có thông báo nào trong hộp thư.</div>
          ` : emailLogs.map(em => `
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div class="flex justify-between items-center text-[10px] text-slate-500">
                <span>Tới: <strong>${em.toEmail}</strong></span>
                <span>${em.sentAt}</span>
              </div>
              <div class="text-xs font-bold text-slate-900">${em.title || em.subject}</div>
              <p class="text-[11px] text-slate-600 leading-relaxed">${em.body}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
  },

  previewLetterModal: function(letterId) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    const letter = (userData.futureLetters || []).find(l => l.id === letterId);
    if (!letter) return;

    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    const status = window.SERVICES.FutureLetter.checkLetterStatus(letter);

    modal.innerHTML = `
      <div class="future-letter-envelope rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-2 border-pink-300 space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-pink-200">
          <span class="text-xs font-bold text-pink-800 uppercase">Phong Bì Niêm Phong Sáp</span>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-600 text-sm">×</button>
        </div>

        <div class="text-center space-y-2 py-3">
          <div class="wax-seal mx-auto"><i class="fas fa-stamp"></i></div>
          <h3 class="text-base font-bold text-slate-900 font-serif-title">${letter.recipient}</h3>
          <div class="text-xs text-pink-700 font-semibold">${status.label}</div>
          <div class="text-[11px] text-slate-500">Email nhận: <strong>${letter.targetEmail || 'Email sinh viên'}</strong></div>
        </div>

        <div class="p-4 rounded-2xl bg-white/90 border border-pink-200 text-xs text-slate-700 italic leading-relaxed line-clamp-4">
          "${letter.content}"
        </div>

        <div class="flex justify-between items-center pt-2">
          <span class="text-xs font-bold text-pink-900">With Love, ${letter.signature}</span>
          <button onclick="APP.closeModal()" class="bg-pink-600 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md">
            Đóng phong bì
          </button>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
  },

  openSearchModal: function() {
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    modal.innerHTML = `
      <div class="glass-modal rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-emerald-200 space-y-4">
        <div class="flex items-center space-x-2 pb-2 border-b border-slate-100">
          <i class="fas fa-search text-emerald-600"></i>
          <input type="text" id="searchInput" oninput="APP.handleSearchInput(this.value)" placeholder="Tìm kiếm bài test, tảng băng, pomodoro, thư tương lai..." 
                 class="w-full bg-transparent text-sm font-semibold focus:outline-none text-slate-800">
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-600 text-sm">×</button>
        </div>

        <div id="searchResultsContainer" class="space-y-2 max-h-60 overflow-y-auto text-xs text-slate-500">
          Gõ từ khóa để tìm kiếm nhanh trong toàn bộ khóa học...
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => document.getElementById('searchInput')?.focus(), 50);
  },

  handleSearchInput: function(query) {
    const results = window.SERVICES.Search.search(query);
    const container = document.getElementById('searchResultsContainer');
    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = '<div class="text-slate-400 py-2">Không tìm thấy nội dung phù hợp.</div>';
      return;
    }

    container.innerHTML = results.map(r => `
      <div onclick="APP.navigateTo('${r.chapterId}'); APP.closeModal();" class="p-2.5 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors space-y-0.5 border border-transparent hover:border-emerald-200">
        <div class="font-bold text-slate-800 text-xs">${r.title}</div>
        <div class="text-[10px] text-emerald-600 font-semibold">${r.chapterTitle}</div>
        <p class="text-[11px] text-slate-500 line-clamp-1">${r.snippet}</p>
      </div>
    `).join('');
  },

  // =========================================================================
  // 11. DATABASE & REGISTERED USERS MANAGEMENT (ADMIN ONLY)
  // =========================================================================
  openDatabaseModal: function(tab = 'accounts') {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
      this.showToast('Khu vực này chỉ dành riêng cho tài khoản Quản trị viên (Admin)!', 'warning');
      return;
    }
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    const users = window.SERVICES.Auth.getAllUsersWithStats();
    const sbCfg = window.SERVICES.Supabase.getConfig();

    modal.innerHTML = COMPONENTS.renderDatabaseModal(users, tab, sbCfg);
    modal.classList.remove('hidden');
  },

  switchDatabaseTab: function(tab) {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) return;
    this.openDatabaseModal(tab);
  },

  viewUserDetails: function(userId) {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) return;
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    const users = window.SERVICES.Auth.getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const udata = window.SERVICES.Auth.getUserData(userId);
    modal.innerHTML = COMPONENTS.renderUserDetailsModal(user, udata);
  },

  toggleUserAdminRole: function(userId) {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
      this.showToast('Chỉ Quản trị viên mới có quyền điều chỉnh vai trò tài khoản!', 'danger');
      return;
    }
    const users = window.SERVICES.Auth.getUsers();
    const targetUser = users.find(u => u.id === userId);
    if (!targetUser) return;
    if (targetUser.id === 'usr_admin') {
      this.showToast('Không thể thay đổi quyền của tài khoản Admin gốc!', 'warning');
      return;
    }

    const currentlyAdmin = window.SERVICES.Auth.isAdmin(targetUser);
    targetUser.role = currentlyAdmin ? "Sinh viên ULIS - ĐHQGHN" : "Quản trị viên";
    window.SERVICES.Auth.saveUsers(users);

    this.showToast(`Đã ${currentlyAdmin ? 'gỡ quyền Admin của' : 'thăng cấp Admin cho'} ${targetUser.name}!`, 'success');
    this.openDatabaseModal('accounts');
    this.render();
  },

  deleteUserAccount: function(userId, userName) {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
      this.showToast('Chỉ Quản trị viên mới có quyền xóa tài khoản!', 'danger');
      return;
    }
    if (!confirm(`Bạn có chắc chắn muốn xóa tài khoản "${userName}" và toàn bộ bài làm/thư của sinh viên này khỏi CSDL?`)) {
      return;
    }

    window.SERVICES.Auth.deleteUser(userId);
    this.showToast(`Đã xóa tài khoản ${userName} khỏi CSDL.`, 'info');
    this.openDatabaseModal('accounts');
    this.render();
  },

  exportDatabaseJson: function() {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
      this.showToast('Chỉ Quản trị viên mới có quyền xuất file CSDL!', 'danger');
      return;
    }
    window.SERVICES.Auth.exportDatabaseJson();
    this.showToast('✓ Đã xuất toàn bộ Cơ Sở Dữ Liệu sinh viên thành file JSON!', 'success');
  },

  testSupabaseConnection: async function() {
    if (!this.state.currentUser || !window.SERVICES.Auth.isAdmin(this.state.currentUser)) return;
    const url = document.getElementById('sbUrlInput')?.value;
    const key = document.getElementById('sbKeyInput')?.value;

    this.showToast('Đang kiểm tra kết nối đến Supabase Cloud...', 'info');
    const res = await window.SERVICES.Supabase.testConnection(url, key);

    if (res.success) {
      this.showToast(res.message, 'success');
    } else {
      this.showToast(res.message, 'warning');
    }
    this.openDatabaseModal('supabase');
  },

  closeModal: function() {
    const modal = document.getElementById('modalContainer');
    if (modal) modal.classList.add('hidden');
  },

  // =========================================================================
  // 11. TOAST NOTIFICATIONS
  // =========================================================================
  showToast: function(message, type = 'info') {
    const container = document.getElementById('toastContainer') || document.body;
    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-700' : type === 'warning' ? 'bg-amber-600' : 'bg-slate-800';
    toast.className = `text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl ${bg} flex items-center space-x-2 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto max-w-sm`;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-info-circle'} text-base"></i><span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);
    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // =========================================================================
  // 12. ADMIN ANALYTICS CONTROLLER & CHART ORCHESTRATION
  // =========================================================================
  setAnalyticsFilter: function(filter) {
    this.state.adminAnalyticsFilter = filter;
    this.render();
  },

  setAnalyticsSearch: function(val) {
    this.state.adminAnalyticsSearch = val;
    if (this.state.activePage === 'admin') {
      this.render();
    }
  },

  exportAnalyticsCsv: function() {
    window.SERVICES.Analytics.exportCsvReport();
    this.showToast('✓ Đã xuất file báo cáo Excel (CSV) thành công!', 'success');
  },

  openSendEncouragementModal: function(userId) {
    const user = window.SERVICES.Auth.getUsers().find(u => u.id === userId);
    if (!user) return;
    const udata = window.SERVICES.Auth.getUserData(userId);
    const student = {
      ...user,
      testScore: udata.progress?.ch1?.testResult?.score || null
    };
    const modal = document.getElementById('modalContainer');
    if (!modal) return;
    modal.innerHTML = COMPONENTS.renderEncouragementModal(student);
    modal.classList.remove('hidden');
  },

  sendEncouragementMessage: function(userId, title, message) {
    const res = window.SERVICES.Analytics.sendSupportMessage(userId, title, message);
    if (res.success) {
      this.closeModal();
      this.showToast('✓ Đã gửi thông điệp động viên đến sinh viên!', 'success');
    } else {
      this.showToast(res.message || 'Lỗi gửi tin nhắn', 'warning');
    }
  },

  initAdminCharts: function(stats) {
    if (typeof Chart === 'undefined') {
      console.warn("Chart.js is not loaded yet");
      return;
    }

    if (window._adminChartInstances) {
      window._adminChartInstances.forEach(c => {
        try { c.destroy(); } catch (e) {}
      });
    }
    window._adminChartInstances = [];

    // 1. Burnout Severity Donut Chart
    const ctx1 = document.getElementById('chartBurnoutSeverity')?.getContext('2d');
    if (ctx1) {
      const c1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: [
            'Ổn định / Khỏe mạnh (<2.0)',
            'Chớm mệt mỏi (2.0-2.9)',
            'Kiệt sức trung bình (3.0-3.9)',
            'Báo động đỏ (≥4.0)'
          ],
          datasets: [{
            data: [
              stats.severity.healthy,
              stats.severity.mild,
              stats.severity.moderate,
              stats.severity.critical
            ],
            backgroundColor: ['#10b981', '#f59e0b', '#f97316', '#f43f5e'],
            hoverOffset: 6,
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Nunito', size: 11, weight: 'bold' } } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const total = stats.testCount || 1;
                  const val = context.raw || 0;
                  const pct = Math.round((val / total) * 100);
                  return ` ${context.label}: ${val} sinh viên (${pct}%)`;
                }
              }
            }
          },
          cutout: '62%'
        }
      });
      window._adminChartInstances.push(c1);
    }

    // 2. Chapter Funnel Progress Bar Chart
    const ctx2 = document.getElementById('chartChapterFunnel')?.getContext('2d');
    if (ctx2) {
      const c2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['C1: Nhận diện', 'C2: Giải mã', 'C3: Xả van', 'C4: Tái tạo'],
          datasets: [
            {
              label: 'Tiến độ hoàn thành TB (%)',
              data: [
                stats.chapterStats.ch1.avgPercent,
                stats.chapterStats.ch2.avgPercent,
                stats.chapterStats.ch3.avgPercent,
                stats.chapterStats.ch4.avgPercent
              ],
              backgroundColor: ['#10b981', '#06b6d4', '#f59e0b', '#ec4899'],
              borderRadius: 8
            },
            {
              label: 'Sinh viên hoàn tất',
              data: [
                stats.chapterStats.ch1.completedCount,
                stats.chapterStats.ch2.completedCount,
                stats.chapterStats.ch3.completedCount,
                stats.chapterStats.ch4.completedCount
              ],
              backgroundColor: ['#047857', '#0891b2', '#d97706', '#be185d'],
              borderRadius: 8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Nunito', size: 11 } } }
          },
          scales: {
            y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } }
          }
        }
      });
      window._adminChartInstances.push(c2);
    }

    // 3. 11-Day Challenge Retention Chart
    const ctx3 = document.getElementById('chartChallenge11Days')?.getContext('2d');
    if (ctx3) {
      const c3 = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: stats.challengeStats.map(d => `Ngày ${d.day}`),
          datasets: [{
            label: 'Số sinh viên hoàn thành',
            data: stats.challengeStats.map(d => d.count),
            backgroundColor: '#ec4899',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } }
          }
        }
      });
      window._adminChartInstances.push(c3);
    }

    // 4. Audience Distribution Doughnut Chart
    const ctx4 = document.getElementById('chartAudienceDist')?.getContext('2d');
    if (ctx4) {
      const c4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
          labels: ['Sinh viên ULIS', 'ĐHQGHN khác', 'Đại học khác', 'Khách / Khác'],
          datasets: [{
            data: [
              stats.roleStats.ulis,
              stats.roleStats.vnu,
              stats.roleStats.otherUni,
              stats.roleStats.guest
            ],
            backgroundColor: ['#059669', '#3b82f6', '#8b5cf6', '#94a3b8'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Nunito', size: 11, weight: 'bold' } } }
          },
          cutout: '62%'
        }
      });
      window._adminChartInstances.push(c4);
    }
  },

  // =========================================================================
  // 13. ROOT RENDER FUNCTION
  // =========================================================================
  render: function() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    // IF NOT LOGGED IN: ONLY RENDER THE AUTH GATE SCREEN!
    if (!this.state.currentUser) {
      appEl.innerHTML = COMPONENTS.renderAuthGate(this.state.authTab, this.state.authError, this.state.loginEmailDraft);
      return;
    }

    // IF LOGGED IN: RENDER FULL APPLICATION
    const userId = this.state.currentUser.id;
    const userData = window.SERVICES.Auth.getUserData(userId);
    const streakInfo = window.SERVICES.Streak.getStreakInfo(userId);
    const overall = window.SERVICES.Progress.getOverallProgress(userId);
    const unreadNotifs = (userData.notifications || []).filter(n => !n.isRead).length;
    const favsCount = (userData.favorites || []).length;
    const audioState = window.SERVICES.Audio.getState();

    const isFav = window.SERVICES.Favorites.isFavorite(userId, this.state.activePage);

    const navHtml = COMPONENTS.renderNavbar(this.state.currentUser, this.state.activePage, streakInfo, unreadNotifs, favsCount, audioState);
    const floatingAudioHtml = COMPONENTS.renderFloatingAudioWidget(audioState);

    let contentHtml = '';
    switch (this.state.activePage) {
      case 'home':
        contentHtml = COMPONENTS.renderHomePage(this.state.currentUser, overall, streakInfo);
        break;
      case 'intro':
        contentHtml = COMPONENTS.renderProjectIntroPage();
        break;
      case 'ch1':
        contentHtml = COMPONENTS.renderChapter1(this.state.currentUser, userData, isFav);
        break;
      case 'ch2':
        contentHtml = COMPONENTS.renderChapter2(this.state.currentUser, userData, isFav);
        break;
      case 'ch3':
        contentHtml = COMPONENTS.renderChapter3(this.state.currentUser, userData, isFav);
        break;
      case 'ch4':
        contentHtml = COMPONENTS.renderChapter4(this.state.currentUser, userData, isFav);
        break;
      case 'favorites':
        contentHtml = COMPONENTS.renderFavoritesPage(this.state.currentUser, userData.favorites || []);
        break;
      case 'dashboard':
        contentHtml = COMPONENTS.renderDashboardPage(this.state.currentUser, userData, streakInfo);
        break;
      case 'admin':
        if (!window.SERVICES.Auth.isAdmin(this.state.currentUser)) {
          this.state.activePage = 'home';
          contentHtml = COMPONENTS.renderHomePage(this.state.currentUser, overall, streakInfo);
        } else {
          const stats = window.SERVICES.Analytics.getOverviewStats();
          contentHtml = COMPONENTS.renderAdminAnalyticsPage(stats, this.state.adminAnalyticsFilter, this.state.adminAnalyticsSearch);
          setTimeout(() => {
            this.initAdminCharts(stats);
          }, 60);
        }
        break;
      default:
        contentHtml = COMPONENTS.renderHomePage(this.state.currentUser, overall, streakInfo);
    }

    appEl.innerHTML = `
      ${navHtml}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        ${contentHtml}
      </main>
      ${floatingAudioHtml}
      <footer class="border-t border-emerald-100 bg-white/60 py-8 text-center text-xs text-slate-500 mt-16 space-y-2">
        <div class="font-bold text-slate-700">From Burnout to Burn Bright — Trường Đại học Ngoại ngữ, ĐHQGHN</div>
        <div>Đại học Quốc gia Hà Nội (ULIS - VNU) • Chăm sóc sức khỏe tinh thần sinh viên</div>
      </footer>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  APP.init();
});
