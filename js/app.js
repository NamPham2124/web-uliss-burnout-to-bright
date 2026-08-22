/**
 * App Controller, Router & Event Orchestrator
 * From Burnout to Burn Bright — Trường ĐH Ngoại ngữ, ĐHQGHN (ULIS - VNU)
 */

window.APP = {
  state: {
    currentUser: null,
    activePage: 'home',
    authError: null,
    dndSelectedStickerId: null,
    notifActiveTab: 'notifs',
    searchQuery: '',
    pomodoro: {
      timer: null,
      timeLeft: 25 * 60,
      isRunning: false
    }
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
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        this.navigateTo(hash, false);
      }
    });

    // Check initial hash
    const initialHash = window.location.hash.replace('#', '').trim();
    if (initialHash) {
      this.state.activePage = initialHash;
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

    // 5. Initial Render
    this.render();
    console.log("Burn Bright App fully initialized.");
  },

  // =========================================================================
  // 2. NAVIGATION & ROUTING
  // =========================================================================
  navigateTo: function(pageId, updateHash = true) {
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

    // Record last activity if authenticated
    if (this.state.currentUser && ['ch1', 'ch2', 'ch3', 'ch4'].includes(pageId)) {
      const titles = {
        ch1: 'Chương 1: Bài Test Đánh giá Burnout',
        ch2: 'Chương 2: Mô hình Tảng băng trôi',
        ch3: 'Chương 3: Kéo thả & Pomodoro',
        ch4: 'Chương 4: Thử thách 11 Ngày & Video'
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
      this.navigateTo('login');
      return;
    }
    const last = window.SERVICES.Progress.getLastActiveActivity(this.state.currentUser.id);
    this.showToast(`Đang đưa bạn đến: ${last.title}`, 'info');
    this.navigateTo(last.path || 'ch1');
  },

  toggleMobileNav: function() {
    const drawer = document.getElementById('mobileNavDrawer');
    if (drawer) {
      drawer.classList.toggle('hidden');
    }
  },

  // =========================================================================
  // 3. AUTHENTICATION HANDLERS
  // =========================================================================
  handleLogin: function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;

    const res = window.SERVICES.Auth.login(email, password);
    if (res.success) {
      this.state.currentUser = res.user;
      this.state.authError = null;
      this.state.loginEmailDraft = null;
      window.SERVICES.EmailNotification.checkAllTriggers(res.user.id);
      this.showToast(`Chào mừng ${res.user.name} đã quay trở lại!`, 'success');
      this.navigateTo('dashboard');
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
      this.navigateTo('dashboard');
    } else {
      this.state.authError = res.message;
      this.render();
    }
  },

  loginAsGuest: function() {
    const guest = window.SERVICES.Auth.loginGuest();
    this.state.currentUser = guest;
    this.state.authError = null;
    this.showToast('Đã đăng nhập dưới quyền Bạn Đọc Khách!', 'info');
    this.navigateTo('ch1');
  },

  logout: function() {
    window.SERVICES.Auth.logout();
    this.state.currentUser = null;
    this.showToast('Đã đăng xuất tài khoản.', 'info');
    this.navigateTo('home');
  },

  // =========================================================================
  // 4. CHAPTER 1 HANDLERS (Assessment & Scoring)
  // =========================================================================
  calculateBurnoutScore: function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const form = (e && e.target && e.target.tagName === 'FORM') ? e.target : document.getElementById('burnoutForm');
    let totalScore = 0;
    let count = 0;
    const answers = [];

    for (let i = 0; i < 12; i++) {
      const selected = form ? form.querySelector(`input[name="q_${i}"]:checked`) : document.querySelector(`input[name="q_${i}"]:checked`);
      if (selected && selected.value) {
        const num = parseInt(selected.value);
        totalScore += num;
        answers.push(num);
        count++;
      }
    }

    if (count < 12) {
      this.showToast('Vui lòng trả lời đầy đủ tất cả 12 câu hỏi.', 'warning');
      return;
    }

    const avgScore = totalScore / 12;
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

      // Record Streak Meaningful Activity
      const streakRes = window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Bài Test Burnout");
      this.showToast(streakRes.message || 'Đã ghi nhận điểm số Burnout!', 'success');
    }

    const container = document.getElementById('testResultContainer');
    if (container) {
      container.classList.remove('hidden');
      container.innerHTML = COMPONENTS.renderTestResultContent(testResult);
      container.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // =========================================================================
  // 5. CHAPTER 2 HANDLERS (Reading Sections & Iceberg Tool)
  // =========================================================================
  toggleSectionRead: function(sectionId) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu tiến độ đọc.', 'info');
      return;
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    let read = userData.progress.ch2.readSections || [];

    if (read.includes(sectionId)) {
      read = read.filter(id => id !== sectionId);
    } else {
      read.push(sectionId);
      if (read.length >= 3) {
        window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Đọc trọn vẹn lý thuyết Chương 2");
      }
    }

    userData.progress.ch2.readSections = read;
    userData.progress.ch2.completed = (read.length >= 3);
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  addIcebergItem: function(type) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu tảng băng cá nhân.', 'info');
      return;
    }
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
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    input.value = '';
    this.showToast(`Đã thêm mục vào phần ${type === 'floating' ? 'Nổi' : 'Chìm'}!`, 'success');
    this.render();
  },

  removeIcebergItem: function(type, itemText) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    if (!userData.progress.ch2.iceberg) return;

    userData.progress.ch2.iceberg[type] = userData.progress.ch2.iceberg[type].filter(i => i !== itemText);
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  resetIceberg: function() {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch2.iceberg = {
      floating: [...APP_DATA.chapters[1].exercise.defaultFloating],
      submerged: [...APP_DATA.chapters[1].exercise.defaultSubmerged]
    };
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast('Đã khôi phục tảng băng về mặc định.', 'info');
    this.render();
  },

  // =========================================================================
  // 6. CHAPTER 3 HANDLERS (Lusi Case, Drag & Drop, Pomodoro, Energy Map)
  // =========================================================================
  handleLusiQuizAnswer: function(questionId, optIdx) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.lusiAnswers = userData.progress.ch3.lusiAnswers || {};
    userData.progress.ch3.lusiAnswers[questionId] = optIdx;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  // Drag and Drop (Mouse)
  onDragStart: function(e, stickerId) {
    e.dataTransfer.setData('text/plain', stickerId);
    e.dataTransfer.effectAllowed = 'move';
    const el = document.getElementById(`sticker_${stickerId}`);
    if (el) el.classList.add('is-dragging');
  },

  onDragOver: function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
  },

  onDragLeave: function(e) {
    e.currentTarget.classList.remove('drag-over');
  },

  onDrop: function(e, targetSlotId) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const stickerId = e.dataTransfer.getData('text/plain');
    if (!stickerId) return;

    this.executePairing(stickerId, targetSlotId);
  },

  // Drag and Drop (Touch / Mobile Click selection)
  selectStickerForMobilePair: function(stickerId) {
    if (this.state.dndSelectedStickerId === stickerId) {
      this.state.dndSelectedStickerId = null;
    } else {
      this.state.dndSelectedStickerId = stickerId;
      this.showToast('Đã chọn sticker! Hãy chạm vào giải pháp bên phải để ghép.', 'info');
    }
    this.render();
  },

  pairWithTarget: function(targetSlotId) {
    if (!this.state.dndSelectedStickerId) return;
    const stickerId = this.state.dndSelectedStickerId;
    this.executePairing(stickerId, targetSlotId);
    this.state.dndSelectedStickerId = null;
  },

  executePairing: function(stickerId, targetSlotId) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu kết quả bài tập.', 'info');
      return;
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.dndState = userData.progress.ch3.dndState || { pairs: {}, isCompleted: false, score: 0 };

    // Remove if previously paired elsewhere
    for (let key in userData.progress.ch3.dndState.pairs) {
      if (userData.progress.ch3.dndState.pairs[key] === stickerId) {
        delete userData.progress.ch3.dndState.pairs[key];
      }
    }

    userData.progress.ch3.dndState.pairs[targetSlotId] = stickerId;
    userData.progress.ch3.dndState.isCompleted = false; // Reset verification state until user clicks Check
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    this.render();
  },

  unpairSlot: function(targetSlotId) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    if (!userData.progress.ch3.dndState?.pairs) return;

    delete userData.progress.ch3.dndState.pairs[targetSlotId];
    userData.progress.ch3.dndState.isCompleted = false;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.render();
  },

  checkDnDPairs: function() {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu tiến độ.', 'info');
      return;
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    const dndState = userData.progress.ch3.dndState || { pairs: {} };
    const pairs = dndState.pairs || {};

    const totalSlots = window.APP_DATA.chapters[2].dndExercise.pairs.length;
    let score = 0;

    for (let slotId in pairs) {
      if (pairs[slotId] === slotId) {
        score++;
      }
    }

    dndState.isCompleted = true;
    dndState.score = score;
    userData.progress.ch3.dndState = dndState;
    userData.progress.ch3.completed = (score >= 4);
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    if (score >= 4) {
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành Bài tập Kéo thả Chuyển hóa");
      this.showToast(`Chúc mừng! Bạn đã ghép đúng ${score}/${totalSlots} cặp!`, 'success');
    } else {
      this.showToast(`Bạn ghép đúng ${score}/${totalSlots} cặp. Hãy xem lại những chỗ báo đỏ nhé!`, 'warning');
    }

    this.render();
  },

  resetDnD: function() {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.dndState = { pairs: {}, isCompleted: false, score: 0 };
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast('Đã đặt lại bài tập kéo thả.', 'info');
    this.render();
  },

  // Pomodoro
  togglePomodoro: function() {
    const btn = document.getElementById('pomoStartBtn');
    if (this.state.pomodoro.isRunning) {
      clearInterval(this.state.pomodoro.timer);
      this.state.pomodoro.isRunning = false;
      if (btn) btn.innerText = 'Tiếp tục';
      this.showToast('Đã tạm dừng Pomodoro.', 'info');
    } else {
      this.state.pomodoro.isRunning = true;
      if (btn) btn.innerText = 'Tạm dừng';
      this.showToast('Bắt đầu phiên Pomodoro tập trung 25 phút!', 'success');

      this.state.pomodoro.timer = setInterval(() => {
        this.state.pomodoro.timeLeft--;
        this.updatePomodoroDisplay();

        if (this.state.pomodoro.timeLeft <= 0) {
          clearInterval(this.state.pomodoro.timer);
          this.state.pomodoro.isRunning = false;
          this.state.pomodoro.timeLeft = 25 * 60;

          if (this.state.currentUser) {
            const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
            userData.progress.ch3.pomodoroSessions = (userData.progress.ch3.pomodoroSessions || 0) + 1;
            window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
            window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Hoàn thành 1 phiên Pomodoro");
          }

          this.showToast('🎉 Tuyệt vời! Bạn đã hoàn thành 1 phiên Pomodoro tập trung!', 'success');
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
    this.showToast('Đã đặt lại đồng hồ Pomodoro.', 'info');
  },

  updatePomodoroDisplay: function() {
    const mins = Math.floor(this.state.pomodoro.timeLeft / 60);
    const secs = this.state.pomodoro.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const disp = document.getElementById('pomoDisplay');
    const count = document.getElementById('pomoSessionCount');
    if (disp) disp.innerText = timeStr;
    if (count && this.state.currentUser) {
      const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
      count.innerText = `Đã xong: ${userData.progress?.ch3?.pomodoroSessions || 0} phiên`;
    }
  },

  // 24-Hour Energy Map
  cycleEnergySlot: function(hour) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu bản đồ năng lượng.', 'info');
      return;
    }
    const colors = ['green', 'yellow', 'red'];
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch3.energyMap = userData.progress.ch3.energyMap || {};

    const current = userData.progress.ch3.energyMap[hour] || 'green';
    const nextIdx = (colors.indexOf(current) + 1) % colors.length;
    const nextColor = colors[nextIdx];

    userData.progress.ch3.energyMap[hour] = nextColor;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    this.render();
  },

  // =========================================================================
  // 7. CHAPTER 4 HANDLERS (Video, 11-Day Challenge, Value Flower)
  // =========================================================================
  onVideoTimeUpdate: function(videoEl) {
    if (!videoEl || !videoEl.duration) return;
    if (videoEl.currentTime / videoEl.duration >= 0.8) {
      this.markVideoComplete();
    }
  },

  onVideoEnded: function() {
    this.markVideoComplete();
  },

  handleVideoError: function(videoEl) {
    const fallback = document.getElementById('videoErrorFallback');
    if (fallback) fallback.classList.remove('hidden');
  },

  markVideoComplete: function() {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    if (!userData.progress.ch4.videoCompleted) {
      userData.progress.ch4.videoCompleted = true;
      window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, "Xem Video Thiền thở & Phục hồi");
      this.showToast('✓ Bạn đã hoàn thành Video bài học Chương 4!', 'success');
    }
  },

  markVideoCompleteManual: function() {
    this.markVideoComplete();
    this.render();
  },

  toggleChallengeDay: function(dayNum) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu tiến độ thử thách 11 ngày.', 'info');
      return;
    }
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};

    const curr = userData.progress.ch4.challenge11Days[dayNum] || { completed: false, note: '' };
    curr.completed = !curr.completed;
    userData.progress.ch4.challenge11Days[dayNum] = curr;

    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);

    if (curr.completed) {
      window.SERVICES.Streak.recordActivity(this.state.currentUser.id, `Hoàn thành Thử thách Ngày ${dayNum}`);
      this.showToast(`🔥 Đã hoàn thành Ngày ${dayNum}! Ngọn lửa kiên cường đang lớn dần!`, 'success');
    }

    this.render();
  },

  saveChallengeNote: function(dayNum, text) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};

    const curr = userData.progress.ch4.challenge11Days[dayNum] || { completed: false, note: '' };
    curr.note = text;
    userData.progress.ch4.challenge11Days[dayNum] = curr;

    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
  },

  saveValueFlowerPetal: function(petalIndex, text) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.progress.ch4.valueFlower = userData.progress.ch4.valueFlower || {};
    userData.progress.ch4.valueFlower[petalIndex] = text;
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
  },

  // =========================================================================
  // 8. FUTURE LETTER HANDLERS (Pink / Green Theme)
  // =========================================================================
  handleCreateFutureLetter: function(e) {
    e.preventDefault();
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để gửi thư.', 'warning');
      return;
    }

    const recipient = document.getElementById('letRecipient')?.value;
    const unlockDate = document.getElementById('letUnlockDate')?.value;
    const content = document.getElementById('letContent')?.value;
    const signature = document.getElementById('letSignature')?.value;

    const res = window.SERVICES.FutureLetter.createLetter(this.state.currentUser.id, {
      recipient,
      unlockDate,
      content,
      signature
    });

    if (res.success) {
      this.showToast(res.message, 'success');
      this.render();
    } else {
      this.showToast(res.message, 'warning');
    }
  },

  openLetterModal: function(letterId) {
    if (!this.state.currentUser) return;
    const res = window.SERVICES.FutureLetter.openLetter(this.state.currentUser.id, letterId, false);
    if (res.success) {
      this.openModal(COMPONENTS.renderLetterViewModal(res.letter));
      this.render();
    } else {
      this.showToast(res.message, 'warning');
    }
  },

  testUnlockLetter: function(letterId) {
    if (!this.state.currentUser) return;
    const res = window.SERVICES.FutureLetter.openLetter(this.state.currentUser.id, letterId, true);
    if (res.success) {
      this.showToast('✨ Mở khóa thử nghiệm (QA Fast-Forward) thành công!', 'success');
      this.openModal(COMPONENTS.renderLetterViewModal(res.letter));
      this.render();
    }
  },

  // =========================================================================
  // 9. FAVORITES HANDLERS
  // =========================================================================
  toggleFavorite: function(item) {
    if (!this.state.currentUser) {
      this.showToast('Vui lòng đăng nhập để lưu mục yêu thích.', 'info');
      return;
    }
    const res = window.SERVICES.Favorites.toggleFavorite(this.state.currentUser.id, item);
    this.showToast(res.message, 'info');
    this.render();
  },

  removeFavorite: function(favId) {
    if (!this.state.currentUser) return;
    const userData = window.SERVICES.Auth.getUserData(this.state.currentUser.id);
    userData.favorites = (userData.favorites || []).filter(f => f.id !== favId);
    window.SERVICES.Auth.saveUserData(this.state.currentUser.id, userData);
    this.showToast('Đã xóa khỏi danh sách Yêu thích.', 'info');
    this.render();
  },

  // =========================================================================
  // 10. MODALS, SEARCH & NOTIFICATION CENTER
  // =========================================================================
  openModal: function(contentHtml) {
    const container = document.getElementById('modalContainer');
    if (container) {
      container.innerHTML = contentHtml;
      container.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  },

  closeModal: function() {
    const container = document.getElementById('modalContainer');
    if (container) {
      container.classList.add('hidden');
      container.innerHTML = '';
      document.body.classList.remove('overflow-hidden');
    }
  },

  openStreakModal: function() {
    if (!this.state.currentUser) {
      this.navigateTo('login');
      return;
    }
    const streakInfo = window.SERVICES.Streak.getStreakInfo(this.state.currentUser.id);
    this.openModal(COMPONENTS.renderStreakModal(streakInfo));
  },

  openSearchModal: function() {
    const results = window.SERVICES.Search.search(this.state.searchQuery || '');
    this.openModal(COMPONENTS.renderSearchModal(this.state.searchQuery, results));
    setTimeout(() => {
      document.getElementById('globalSearchInput')?.focus();
    }, 50);
  },

  handleSearchInput: function(query) {
    this.state.searchQuery = query;
    const results = window.SERVICES.Search.search(query);
    const container = document.getElementById('modalContainer');
    if (container) {
      container.innerHTML = COMPONENTS.renderSearchModal(query, results);
      const input = document.getElementById('globalSearchInput');
      if (input) {
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
      }
    }
  },

  navigateToSearchResult: function(chapterId) {
    this.closeModal();
    this.navigateTo(chapterId);
  },

  openNotificationModal: function() {
    if (!this.state.currentUser) {
      this.navigateTo('login');
      return;
    }
    const activeTab = this.state.notifActiveTab || 'notifs';
    const notifs = window.SERVICES.EmailNotification.getNotifications(this.state.currentUser.id);
    const emailLogs = window.SERVICES.EmailNotification.getEmailLogs(this.state.currentUser.id);
    this.openModal(COMPONENTS.renderNotificationModal(this.state.currentUser, notifs, emailLogs, activeTab));
  },

  switchNotifTab: function(tabName) {
    this.state.notifActiveTab = tabName;
    this.openNotificationModal();
  },

  markAllNotifsRead: function() {
    if (!this.state.currentUser) return;
    window.SERVICES.EmailNotification.markAllAsRead(this.state.currentUser.id);
    this.openNotificationModal();
    this.render();
  },

  triggerTestEmail: function() {
    if (!this.state.currentUser) return;
    window.SERVICES.EmailNotification.sendMockEmail(this.state.currentUser.id, {
      type: 'test',
      subject: '💌 [Thử nghiệm] Bản tin Chăm sóc Sức khỏe Tinh thần Burn Bright',
      title: '💌 Bản tin kiểm thử email',
      message: 'Chúc mừng bạn! Hệ thống Email Notification đã hoạt động hoàn hảo và sẵn sàng tích hợp SMTP.'
    });
    this.showToast('Đã gửi email mô phỏng thành công!', 'success');
    this.state.notifActiveTab = 'emails';
    this.openNotificationModal();
  },

  // =========================================================================
  // 11. TOAST NOTIFICATIONS
  // =========================================================================
  showToast: function(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-700' : type === 'warning' ? 'bg-amber-600' : 'bg-slate-900';
    toast.className = `text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl ${bg} flex items-center space-x-2.5 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto`;
    toast.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'} text-base"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // =========================================================================
  // 12. CENTRAL RENDER ENGINE
  // =========================================================================
  render: function() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    const user = this.state.currentUser;
    const userProgress = user ? window.SERVICES.Auth.getUserData(user.id) : null;
    const streakInfo = user ? window.SERVICES.Streak.getStreakInfo(user.id) : { count: 0, activeToday: false, history: [] };
    const overallProgress = user ? window.SERVICES.Progress.getOverallProgress(user.id) : 0;
    const unreadNotifs = (userProgress?.notifications || []).filter(n => !n.isRead).length;
    const favsCount = (userProgress?.favorites || []).length;

    const navHtml = COMPONENTS.renderNavbar(user, this.state.activePage, streakInfo, unreadNotifs, favsCount);
    let contentHtml = '';

    switch (this.state.activePage) {
      case 'home':
        contentHtml = COMPONENTS.renderHomePage(user, overallProgress, streakInfo);
        break;
      case 'intro':
        contentHtml = COMPONENTS.renderProjectIntroPage();
        break;
      case 'login':
        contentHtml = COMPONENTS.renderLoginPage(this.state.authError, this.state.loginEmailDraft);
        break;
      case 'register':
        contentHtml = COMPONENTS.renderRegisterPage(this.state.authError);
        break;
      case 'ch1':
      case 'chuong-1-nhan-dien':
        contentHtml = COMPONENTS.renderChapter1(user, userProgress, window.SERVICES.Favorites.isFavorite(user?.id, 'ch1'), this.state.activeTestResult);
        break;
      case 'ch2':
      case 'chuong-2-giai-ma':
        contentHtml = COMPONENTS.renderChapter2(user, userProgress, window.SERVICES.Favorites.isFavorite(user?.id, 'ch2'));
        break;
      case 'ch3':
      case 'chuong-3-chuyen-hoa':
        contentHtml = COMPONENTS.renderChapter3(user, userProgress, window.SERVICES.Favorites.isFavorite(user?.id, 'ch3'), this.state.dndSelectedStickerId);
        break;
      case 'ch4':
      case 'chuong-4-tai-tao':
        contentHtml = COMPONENTS.renderChapter4(user, userProgress, window.SERVICES.Favorites.isFavorite(user?.id, 'ch4'));
        break;
      case 'future-letter':
        contentHtml = COMPONENTS.renderFutureLetterPage(user, userProgress);
        break;
      case 'favorites':
        contentHtml = COMPONENTS.renderFavoritesPage(user, userProgress?.favorites || []);
        break;
      case 'dashboard':
        contentHtml = COMPONENTS.renderDashboardPage(user, userProgress);
        break;
      default:
        contentHtml = COMPONENTS.renderHomePage(user, overallProgress, streakInfo);
    }

    appEl.innerHTML = `
      ${navHtml}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1">
        ${contentHtml}
      </main>
      <footer class="border-t border-emerald-100 bg-white/70 backdrop-blur-md py-8 text-center text-xs text-slate-500 mt-16 space-y-2">
        <div class="font-bold text-slate-700">From Burnout to Burn Bright — Trường Đại học Ngoại ngữ, ĐHQGHN</div>
        <div>Dự án Chăm sóc Sức khỏe Tinh thần & Phòng chống Kiệt sức Học tập Sinh viên (ULIS - VNU)</div>
      </footer>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  APP.init();
});
