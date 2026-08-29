/**
 * Core Business Logic Services for From Burnout to Burn Bright (ULIS - VNU)
 */

window.SERVICES = {

  // ==========================================
  // 1. AUTH SERVICE & MULTI-USER STORAGE
  // ==========================================
  Auth: {
    USERS_KEY: "bb_users_db",
    ACTIVE_USER_KEY: "bb_active_user",

    getUsers: function() {
      try {
        const data = localStorage.getItem(this.USERS_KEY);
        if (data) return JSON.parse(data);
      } catch (e) {
        console.error("Error reading users db", e);
      }
      const initialUsers = [
        {
          id: "usr_guest",
          name: "Bạn Đọc Khách",
          email: "khach@ulis.vnu.edu.vn",
          password: "password123",
          role: "Khách trải nghiệm",
          createdAt: "2026-08-01T00:00:00.000Z"
        },
        {
          id: "usr_demo",
          name: "Nguyễn Thu Hà",
          email: "thuha.ulis@vnu.edu.vn",
          password: "password123",
          role: "Sinh viên ULIS - ĐHQGHN",
          createdAt: "2026-08-10T00:00:00.000Z"
        }
      ];
      localStorage.setItem(this.USERS_KEY, JSON.stringify(initialUsers));
      return initialUsers;
    },

    saveUsers: function(users) {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    },

    getActiveUser: function() {
      try {
        const user = localStorage.getItem(this.ACTIVE_USER_KEY);
        return user ? JSON.parse(user) : null;
      } catch (e) {
        return null;
      }
    },

    setActiveUser: function(user) {
      if (user) {
        localStorage.setItem(this.ACTIVE_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.ACTIVE_USER_KEY);
      }
    },

    register: function(data) {
      const name = (data.name || "").trim();
      const email = (data.email || "").trim().toLowerCase();
      const password = (data.password || "").trim();
      const role = data.role || "Sinh viên ULIS";

      if (!name) {
        return { success: false, message: "Vui lòng nhập Họ và Tên của bạn." };
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: "Địa chỉ email không đúng định dạng." };
      }
      if (!password || password.length < 6) {
        return { success: false, message: "Mật khẩu phải có độ dài tối thiểu 6 ký tự." };
      }

      const users = this.getUsers();
      const existing = users.find(u => u.email.toLowerCase() === email);
      if (existing) {
        return { success: false, message: "Email này đã được đăng ký trên hệ thống. Vui lòng đăng nhập!" };
      }

      const newUser = {
        id: "usr_" + Date.now(),
        name: name,
        email: email,
        password: password,
        role: role,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      this.saveUsers(users);
      this.setActiveUser(newUser);

      // Initialize default user data
      this.getUserData(newUser.id);

      return { success: true, user: newUser };
    },

    login: function(email, password) {
      const cleanEmail = (email || "").trim().toLowerCase();
      const cleanPass = (password || "").trim();

      if (!cleanEmail || !cleanPass) {
        return { success: false, message: "Vui lòng nhập đầy đủ Email và Mật khẩu." };
      }

      const users = this.getUsers();
      const user = users.find(u => u.email.toLowerCase() === cleanEmail);

      if (!user || user.password !== cleanPass) {
        return { success: false, message: "Email hoặc mật khẩu không chính xác." };
      }

      this.setActiveUser(user);
      return { success: true, user: user };
    },

    loginGuest: function() {
      const users = this.getUsers();
      let guest = users.find(u => u.id === "usr_guest");
      if (!guest) {
        guest = {
          id: "usr_guest",
          name: "Bạn Đọc Khách",
          email: "khach@ulis.vnu.edu.vn",
          password: "password123",
          role: "Khách trải nghiệm",
          createdAt: new Date().toISOString()
        };
        users.push(guest);
        this.saveUsers(users);
      }
      this.setActiveUser(guest);
      return guest;
    },

    logout: function() {
      this.setActiveUser(null);
    },

    getUserData: function(userId) {
      if (!userId) return this.getDefaultUserData();
      const key = "bb_userdata_" + userId;
      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          const parsed = JSON.parse(stored);
          return Object.assign(this.getDefaultUserData(), parsed);
        }
      } catch (e) {
        console.error("Failed to load user data", e);
      }
      const initial = this.getDefaultUserData();
      this.saveUserData(userId, initial);
      return initial;
    },

    saveUserData: function(userId, data) {
      if (!userId) return;
      const key = "bb_userdata_" + userId;
      localStorage.setItem(key, JSON.stringify(data));
    },

    getDefaultUserData: function() {
      const today = new Date().toISOString().split("T")[0];
      return {
        progress: {
          lastActiveActivity: {
            chapterId: 1,
            title: "Chương 1: Bài Test Đánh giá Burnout",
            path: "ch1",
            timestamp: Date.now()
          },
          ch1: {
            testResult: null,
            completed: false
          },
          ch2: {
            readSections: [],
            iceberg: {
              floating: ["Deadline dồn dập", "Mất ngủ mệt mỏi", "Uể oải mỗi sáng", "Dễ cáu gắt"],
              submerged: ["Kỳ vọng từ gia đình", "Nỗi sợ bị tụt hậu", "Áp lực phải hoàn hảo", "Chưa biết từ chối"]
            },
            completed: false
          },
          ch3: {
            dndState: {
              pairs: {},
              isCompleted: false,
              score: 0
            },
            lusiAnswers: {},
            pomodoroSessions: 0,
            energyMap: {},
            completed: false
          },
          ch4: {
            videoCompleted: false,
            videoProgress: 0,
            challenge11Days: {},
            valueFlower: {},
            completed: false
          }
        },
        streak: {
          count: 1,
          lastActivityDate: today,
          history: [today]
        },
        favorites: [],
        futureLetters: [],
        notifications: [],
        emailLogs: [],
        sentEmailCooldowns: {}
      };
    }
  },

  // ==========================================
  // 2. DAILY STREAK SERVICE
  // ==========================================
  Streak: {
    recordActivity: function(userId, activityName) {
      if (!userId) return { streak: 0, incremented: false };
      const userData = window.SERVICES.Auth.getUserData(userId);
      const streak = userData.streak || { count: 0, lastActivityDate: null, history: [] };

      const today = new Date().toISOString().split("T")[0];
      const lastDate = streak.lastActivityDate;

      let incremented = false;
      let msg = "";

      if (!lastDate) {
        streak.count = 1;
        streak.lastActivityDate = today;
        streak.history = [today];
        incremented = true;
        msg = "🔥 Chúc mừng! Bạn đã bắt đầu chuỗi Streak 1 ngày!";
      } else if (lastDate === today) {
        incremented = false;
        msg = `🔥 Hoạt động "${activityName}" đã được ghi nhận. Chuỗi hôm nay: ${streak.count} ngày!`;
      } else {
        const lastTime = new Date(lastDate + "T00:00:00").getTime();
        const todayTime = new Date(today + "T00:00:00").getTime();
        const diffDays = Math.round((todayTime - lastTime) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          streak.count += 1;
          incremented = true;
          msg = `🔥 Rực rỡ! Bạn đã tăng chuỗi Streak lên ${streak.count} ngày liên tiếp!`;
        } else {
          streak.count = 1;
          incremented = true;
          msg = `🔥 Bắt đầu lại chuỗi Streak mới: 1 ngày! Hãy duy trì mỗi ngày nhé!`;
        }
        streak.lastActivityDate = today;
        if (!streak.history.includes(today)) {
          streak.history.push(today);
        }
      }

      userData.streak = streak;
      window.SERVICES.Auth.saveUserData(userId, userData);

      return {
        streak: streak.count,
        incremented: incremented,
        message: msg
      };
    },

    getStreakInfo: function(userId) {
      if (!userId) return { count: 0, activeToday: false, history: [] };
      const userData = window.SERVICES.Auth.getUserData(userId);
      const streak = userData.streak || { count: 0, lastActivityDate: null, history: [] };
      const today = new Date().toISOString().split("T")[0];
      return {
        count: streak.count || 0,
        activeToday: streak.lastActivityDate === today,
        history: streak.history || []
      };
    }
  },

  // ==========================================
  // 3. PROGRESS & RESUME LEARNING SERVICE
  // ==========================================
  Progress: {
    recordLastActivity: function(userId, activity) {
      if (!userId) return;
      const userData = window.SERVICES.Auth.getUserData(userId);
      userData.progress.lastActiveActivity = {
        chapterId: activity.chapterId || 1,
        title: activity.title || "Tiếp tục học",
        path: activity.path || "ch1",
        timestamp: Date.now()
      };
      window.SERVICES.Auth.saveUserData(userId, userData);
    },

    getLastActiveActivity: function(userId) {
      if (!userId) return { chapterId: 1, title: "Chương 1: Nhận diện Burnout", path: "ch1" };
      const userData = window.SERVICES.Auth.getUserData(userId);
      return userData.progress?.lastActiveActivity || { chapterId: 1, title: "Chương 1: Nhận diện Burnout", path: "ch1" };
    },

    calculateChapterProgress: function(userId, chapterId) {
      if (!userId) return 0;
      const userData = window.SERVICES.Auth.getUserData(userId);
      const p = userData.progress;
      if (!p) return 0;

      if (chapterId === 1 || chapterId === "ch1") {
        return p.ch1?.testResult ? 100 : 0;
      }
      if (chapterId === 2 || chapterId === "ch2") {
        const readCount = (p.ch2?.readSections || []).length;
        const icebergModified = (p.ch2?.iceberg?.floating || []).length >= 4;
        let percent = Math.min(100, Math.round((readCount / 3) * 70) + (icebergModified ? 30 : 0));
        return percent;
      }
      if (chapterId === 3 || chapterId === "ch3") {
        const dndDone = p.ch3?.dndState?.isCompleted ? 50 : 0;
        const pomoOrEnergy = (p.ch3?.pomodoroSessions > 0 || Object.keys(p.ch3?.energyMap || {}).length > 0) ? 50 : 0;
        return Math.min(100, dndDone + pomoOrEnergy);
      }
      if (chapterId === 4 || chapterId === "ch4") {
        const videoDone = p.ch4?.videoCompleted ? 20 : 0;
        const challengeDone = Object.values(p.ch4?.challenge11Days || {}).filter(c => c.completed).length;
        const challengePercent = Math.round((challengeDone / 11) * 40);
        const flowerDone = Object.values(p.ch4?.valueFlower || {}).filter(v => v && v.trim()).length >= 3 ? 20 : 0;
        const letterDone = (userData.futureLetters || []).length > 0 ? 20 : 0;
        return Math.min(100, videoDone + challengePercent + flowerDone + letterDone);
      }
      return 0;
    },

    getOverallProgress: function(userId) {
      if (!userId) return 0;
      const c1 = this.calculateChapterProgress(userId, 1);
      const c2 = this.calculateChapterProgress(userId, 2);
      const c3 = this.calculateChapterProgress(userId, 3);
      const c4 = this.calculateChapterProgress(userId, 4);
      return Math.round((c1 + c2 + c3 + c4) / 4);
    }
  },

  // ==========================================
  // 4. FAVORITES SERVICE
  // ==========================================
  Favorites: {
    getFavorites: function(userId) {
      if (!userId) return [];
      const userData = window.SERVICES.Auth.getUserData(userId);
      return userData.favorites || [];
    },

    isFavorite: function(userId, itemId) {
      if (!userId) return false;
      const favs = this.getFavorites(userId);
      return favs.some(f => f.id === itemId);
    },

    toggleFavorite: function(userId, item) {
      if (!userId) return { isFav: false, message: "Vui lòng đăng nhập để lưu mục yêu thích." };
      const userData = window.SERVICES.Auth.getUserData(userId);
      let favs = userData.favorites || [];
      const index = favs.findIndex(f => f.id === item.id);

      let isFav = false;
      let msg = "";

      if (index >= 0) {
        favs.splice(index, 1);
        isFav = false;
        msg = "Đã bỏ khỏi danh sách Yêu thích.";
      } else {
        favs.push({
          id: item.id,
          title: item.title,
          chapterId: item.chapterId,
          category: item.category || "Bài học & Công cụ",
          snippet: item.snippet || "",
          path: item.path || "home",
          savedAt: new Date().toISOString()
        });
        isFav = true;
        msg = "Đã lưu vào danh sách Yêu thích!";
      }

      userData.favorites = favs;
      window.SERVICES.Auth.saveUserData(userId, userData);
      return { isFav: isFav, message: msg, favorites: favs };
    }
  },

  // ==========================================
  // 5. FUTURE LETTER SERVICE (INTEGRATED IN CH4)
  // ==========================================
  FutureLetter: {
    getLetters: function(userId) {
      if (!userId) return [];
      const userData = window.SERVICES.Auth.getUserData(userId);
      return userData.futureLetters || [];
    },

    createLetter: function(userId, letterData) {
      if (!userId) return { success: false, message: "Vui lòng đăng nhập để gửi thư." };

      const recipient = (letterData.recipient || "Gửi Tôi trong Tương lai").trim();
      const content = (letterData.content || "").trim();
      const signature = (letterData.signature || "").trim();
      const unlockDate = letterData.unlockDate;
      const targetEmail = (letterData.targetEmail || "").trim();
      const mood = letterData.mood || "hopeful";

      if (!content || content.length < 10) {
        return { success: false, message: "Nội dung bức thư cần ít nhất 10 ký tự." };
      }
      if (!unlockDate) {
        return { success: false, message: "Vui lòng chọn ngày mở thư trong tương lai." };
      }

      const todayStr = new Date().toISOString().split("T")[0];
      if (unlockDate <= todayStr) {
        return { success: false, message: "Mốc thời gian gửi thư phải là một ngày trong tương lai (sau hôm nay)." };
      }

      const userData = window.SERVICES.Auth.getUserData(userId);
      const activeUser = window.SERVICES.Auth.getActiveUser() || { name: "Bạn đọc", email: "sinhvien@vnu.edu.vn" };
      const finalEmail = targetEmail || activeUser.email || "sinhvien@vnu.edu.vn";

      const newLetter = {
        id: "let_" + Date.now(),
        recipient: recipient,
        content: content,
        signature: signature || activeUser.name || "Chính tôi",
        unlockDate: unlockDate,
        targetEmail: finalEmail,
        mood: mood,
        createdAt: new Date().toISOString(),
        sealed: true,
        isOpened: false,
        status: "scheduled"
      };

      userData.futureLetters = userData.futureLetters || [];
      userData.futureLetters.unshift(newLetter);

      // Auto-complete Day 11 of Challenge in Chapter 4
      userData.progress = userData.progress || {};
      userData.progress.ch4 = userData.progress.ch4 || {};
      userData.progress.ch4.challenge11Days = userData.progress.ch4.challenge11Days || {};
      userData.progress.ch4.challenge11Days[11] = {
        completed: true,
        note: `Đã niêm phong lá thư gửi ngày ${unlockDate} tới email: ${finalEmail}`
      };

      window.SERVICES.Auth.saveUserData(userId, userData);

      // Add scheduled email log & notification
      window.SERVICES.EmailNotification.sendMockEmail(userId, {
        type: "letter_scheduled",
        subject: `💌 [Đã lên lịch] Bức thư gửi tôi ngày ${unlockDate}`,
        title: "💌 Đã Lên Lịch Gửi Thư Về Mail",
        message: `Hệ thống đã niêm phong sáp và lên lịch gửi bức thư tới hòm thư ${finalEmail} vào ngày ${unlockDate}. Chúc bạn luôn giữ vững niềm tin!`,
        ctaText: "Xem Thư Niêm Phong",
        ctaPath: "ch4"
      });

      // Streak meaningful activity
      window.SERVICES.Streak.recordActivity(userId, "Niêm phong Thư Tương Lai (Chương 4)");

      return {
        success: true,
        letter: newLetter,
        message: `💌 Bức thư đã được niêm phong thành công! Hệ thống sẽ gửi về email ${finalEmail} vào ngày ${unlockDate}.`
      };
    },

    checkLetterStatus: function(letter) {
      const now = new Date();
      const unlockTime = new Date(letter.unlockDate + "T00:00:00");
      const diffMs = unlockTime.getTime() - now.getTime();

      if (diffMs <= 0 || letter.isOpened) {
        return {
          isLocked: false,
          daysLeft: 0,
          label: "Đã đến ngày mở thư!"
        };
      }

      const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return {
        isLocked: true,
        daysLeft: daysLeft,
        label: `Còn ${daysLeft} ngày nữa (${letter.unlockDate}) - Sẽ gửi tới ${letter.targetEmail || 'Email của bạn'}`
      };
    },

    openLetter: function(userId, letterId, forceOpen) {
      if (!userId) return { success: false };
      const userData = window.SERVICES.Auth.getUserData(userId);
      const letter = (userData.futureLetters || []).find(l => l.id === letterId);

      if (!letter) return { success: false, message: "Không tìm thấy thư." };

      const status = this.checkLetterStatus(letter);
      if (status.isLocked && !forceOpen) {
        return { success: false, message: "Bức thư vẫn đang được niêm phong bảo mật cho đến ngày hẹn!" };
      }

      letter.isOpened = true;
      window.SERVICES.Auth.saveUserData(userId, userData);
      return { success: true, letter: letter };
    }
  },

  // ==========================================
  // 6. EMAIL NOTIFICATION SERVICE
  // ==========================================
  EmailNotification: {
    getNotifications: function(userId) {
      if (!userId) return [];
      const userData = window.SERVICES.Auth.getUserData(userId);
      return userData.notifications || [];
    },

    getEmailLogs: function(userId) {
      if (!userId) return [];
      const userData = window.SERVICES.Auth.getUserData(userId);
      return userData.emailLogs || [];
    },

    markAsRead: function(userId, notifId) {
      if (!userId) return;
      const userData = window.SERVICES.Auth.getUserData(userId);
      const notif = (userData.notifications || []).find(n => n.id === notifId);
      if (notif) notif.isRead = true;
      window.SERVICES.Auth.saveUserData(userId, userData);
    },

    markAllAsRead: function(userId) {
      if (!userId) return;
      const userData = window.SERVICES.Auth.getUserData(userId);
      (userData.notifications || []).forEach(n => n.isRead = true);
      window.SERVICES.Auth.saveUserData(userId, userData);
    },

    sendMockEmail: function(userId, options) {
      if (!userId) return;
      const userData = window.SERVICES.Auth.getUserData(userId);
      const activeUser = window.SERVICES.Auth.getActiveUser() || { name: "Sinh viên", email: "student@vnu.edu.vn" };

      const now = new Date();
      const notifId = "notif_" + Date.now();
      const emailLogId = "email_" + Date.now();

      const notifItem = {
        id: notifId,
        type: options.type || "general",
        title: options.title || "Thông báo từ Burn Bright",
        message: options.message || "",
        ctaText: options.ctaText || "Xem ngay",
        ctaPath: options.ctaPath || "home",
        createdAt: now.toISOString(),
        isRead: false
      };

      const emailLogItem = {
        id: emailLogId,
        toEmail: options.toEmail || activeUser.email,
        toName: activeUser.name,
        subject: options.subject || options.title,
        title: options.title || options.subject,
        body: options.message,
        type: options.type,
        sentAt: now.toLocaleTimeString("vi-VN") + " " + now.toLocaleDateString("vi-VN"),
        status: "Delivered (Simulated)"
      };

      userData.notifications = userData.notifications || [];
      userData.notifications.unshift(notifItem);

      userData.emailLogs = userData.emailLogs || [];
      userData.emailLogs.unshift(emailLogItem);

      window.SERVICES.Auth.saveUserData(userId, userData);
      return { notif: notifItem, email: emailLogItem };
    },

    checkAllTriggers: function(userId) {
      if (!userId) return;
      const userData = window.SERVICES.Auth.getUserData(userId);
      const today = new Date().toISOString().split("T")[0];
      userData.sentEmailCooldowns = userData.sentEmailCooldowns || {};

      // 1. Streak Reminder check
      const streakKey = "streak_" + today;
      const streakInfo = window.SERVICES.Streak.getStreakInfo(userId);
      if (!streakInfo.activeToday && !userData.sentEmailCooldowns[streakKey]) {
        this.sendMockEmail(userId, {
          type: "streak",
          subject: "🔥 Bạn sắp mất streak hôm nay! Hãy ghé thăm Burn Bright",
          title: "🔥 Lời nhắc duy trì Streak",
          message: "Đừng để ngọn lửa thói quen tốt bị ngắt quãng. Hãy dành 5 phút hoàn thành một hoạt động nhỏ hôm nay nhé!",
          ctaText: "Duy trì Streak",
          ctaPath: "dashboard"
        });
        userData.sentEmailCooldowns[streakKey] = Date.now();
      }

      // 2. Future Letter Reminder check
      (userData.futureLetters || []).forEach(letter => {
        const letterKey = "letter_" + letter.id + "_" + today;
        if (letter.unlockDate <= today && !letter.isOpened && !userData.sentEmailCooldowns[letterKey]) {
          this.sendMockEmail(userId, {
            type: "letter",
            toEmail: letter.targetEmail,
            subject: "💌 Lá thư từ quá khứ của bạn đã đến ngày mở!",
            title: "💌 Bức Thư Tương Lai Đã Sẵn Sàng",
            message: `Bức thư bạn gửi gắm vào ngày ${new Date(letter.createdAt).toLocaleDateString("vi-VN")} đã đến thời khắc mở niêm phong (${letter.unlockDate}). Hãy mở đọc những lời nhắn gửi chân thành từ chính mình!`,
            ctaText: "Xem Thư Ngay",
            ctaPath: "ch4"
          });
          userData.sentEmailCooldowns[letterKey] = Date.now();
        }
      });

      window.SERVICES.Auth.saveUserData(userId, userData);
    }
  },

  // ==========================================
  // 7. GENTLE AMBIENT BACKGROUND MUSIC SERVICE
  // ==========================================
  Audio: {
    ctx: null,
    isPlaying: false,
    currentTrack: "healing_piano",
    volume: 0.35,
    masterGain: null,
    synthInterval: null,
    noiseNode: null,

    tracks: {
      healing_piano: {
        id: "healing_piano",
        name: "Giai điệu Chữa Lành & Piano Dịu Êm",
        icon: "fa-music",
        desc: "Hòa âm êm ái xoa dịu mỏi mệt não bộ"
      },
      solfeggio_432: {
        id: "solfeggio_432",
        name: "Tần số Solfeggio 432Hz Thiền Định",
        icon: "fa-spa",
        desc: "Tần số rung động tái tạo năng lượng tích cực"
      },
      zen_nature: {
        id: "zen_nature",
        name: "Tiếng Suối Nguồn & Không Gian Xanh",
        icon: "fa-leaf",
        desc: "Âm thanh tự nhiên giúp tăng khả năng tập trung"
      }
    },

    init: function() {
      try {
        const savedTrack = localStorage.getItem("bb_audio_track");
        if (savedTrack && this.tracks[savedTrack]) this.currentTrack = savedTrack;
        const savedVol = localStorage.getItem("bb_audio_volume");
        if (savedVol !== null) this.volume = parseFloat(savedVol);
      } catch (e) {
        console.error("Audio init error", e);
      }
    },

    ensureContext: function() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    },

    playChordNote: function(freq, time, duration = 3.5, type = "sine") {
      if (!this.ctx || !this.isPlaying) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, time);

        // Gentle envelope
        gain.gain.setValueAtTime(0.001, time);
        gain.gain.exponentialRampToValueAtTime(0.12, time + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + duration);
      } catch (e) {
        console.error("Note play error", e);
      }
    },

    startSynthLoop: function() {
      this.stopSynthLoop();
      this.ensureContext();

      if (this.currentTrack === "solfeggio_432") {
        // Continuous 432Hz Drone with gentle 528Hz harmonics
        const playDrone = () => {
          if (!this.isPlaying || !this.ctx) return;
          const now = this.ctx.currentTime;
          this.playChordNote(432, now, 6.0, "sine");
          this.playChordNote(216, now, 6.0, "triangle");
          this.playChordNote(528, now + 1.0, 5.0, "sine");
        };
        playDrone();
        this.synthInterval = setInterval(playDrone, 5500);
      } else if (this.currentTrack === "zen_nature") {
        // Pentatonic peaceful chords mimicking nature windchimes
        const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
        const playChime = () => {
          if (!this.isPlaying || !this.ctx) return;
          const now = this.ctx.currentTime;
          const note1 = scale[Math.floor(Math.random() * scale.length)];
          const note2 = scale[Math.floor(Math.random() * scale.length)];
          this.playChordNote(note1, now, 4.0, "triangle");
          this.playChordNote(note2, now + 0.6, 4.0, "sine");
        };
        playChime();
        this.synthInterval = setInterval(playChime, 2800);
      } else {
        // Default: Healing Piano (Warm gentle chord progressions: Cmaj7 -> Fmaj7 -> G -> Am7)
        const progressions = [
          [261.63, 329.63, 392.00, 493.88], // Cmaj7
          [174.61, 220.00, 261.63, 329.63], // Fmaj7
          [196.00, 246.94, 293.66, 349.23], // G7
          [220.00, 261.63, 329.63, 392.00]  // Am7
        ];
        let progIdx = 0;
        const playProg = () => {
          if (!this.isPlaying || !this.ctx) return;
          const now = this.ctx.currentTime;
          const chord = progressions[progIdx % progressions.length];
          progIdx++;
          chord.forEach((freq, idx) => {
            this.playChordNote(freq, now + idx * 0.35, 4.5, "sine");
            this.playChordNote(freq * 0.5, now + idx * 0.35, 4.5, "triangle");
          });
        };
        playProg();
        this.synthInterval = setInterval(playProg, 4000);
      }
    },

    stopSynthLoop: function() {
      if (this.synthInterval) {
        clearInterval(this.synthInterval);
        this.synthInterval = null;
      }
    },

    play: function(trackKey) {
      if (trackKey && this.tracks[trackKey]) {
        this.currentTrack = trackKey;
        try { localStorage.setItem("bb_audio_track", trackKey); } catch (e) {}
      }
      this.ensureContext();
      this.isPlaying = true;
      this.startSynthLoop();
      return true;
    },

    pause: function() {
      this.isPlaying = false;
      this.stopSynthLoop();
    },

    toggle: function() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
      return this.isPlaying;
    },

    setVolume: function(val) {
      this.volume = Math.max(0, Math.min(1, parseFloat(val)));
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      }
      try { localStorage.setItem("bb_audio_volume", this.volume.toString()); } catch (e) {}
    },

    setTrack: function(trackKey) {
      if (this.tracks[trackKey]) {
        this.currentTrack = trackKey;
        try { localStorage.setItem("bb_audio_track", trackKey); } catch (e) {}
        if (this.isPlaying) {
          this.startSynthLoop();
        }
      }
    },

    getState: function() {
      return {
        isPlaying: this.isPlaying,
        currentTrack: this.currentTrack,
        trackInfo: this.tracks[this.currentTrack] || this.tracks.healing_piano,
        volume: this.volume
      };
    }
  },

  // ==========================================
  // 8. SEARCH SERVICE
  // ==========================================
  Search: {
    search: function(query) {
      if (!query || !query.trim()) return [];
      const clean = query.trim().toLowerCase();
      const items = window.APP_DATA.searchIndex || [];

      return items.filter(item => {
        const matchTitle = (item.title || "").toLowerCase().includes(clean);
        const matchSnippet = (item.snippet || "").toLowerCase().includes(clean);
        const matchKeywords = (item.keywords || []).some(k => k.toLowerCase().includes(clean));
        return matchTitle || matchSnippet || matchKeywords;
      });
    }
  }
};

// Initialize audio service preferences
window.SERVICES.Audio.init();
