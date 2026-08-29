/**
 * Component renderers for ULIS "From Burnout to Burn Bright"
 */

window.COMPONENTS = {

  // =========================================================================
  // 1. AUTH GATE COMPONENT (HIỂN THỊ ĐẦU TIÊN KHI CHƯA ĐĂNG NHẬP)
  // =========================================================================
  renderAuthGate: function(activeTab = 'login', errorMsg = null, emailDraft = '') {
    const info = window.APP_DATA.projectInfo;

    return `
      <div class="min-h-screen flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <!-- Ambient decorative blobs -->
        <div class="absolute -right-24 -top-24 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
        <div class="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl -z-10"></div>
        <div class="absolute right-1/3 bottom-10 w-72 h-72 bg-teal-100/40 rounded-full blur-2xl -z-10"></div>

        <!-- Top Branding Header -->
        <div class="max-w-4xl mx-auto w-full text-center space-y-3 pt-4">
          <div class="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-sm">
            <i class="fas fa-university text-emerald-600"></i>
            <span>Dự án Nghiên cứu & Chăm sóc Sức khỏe Tinh thần — ULIS - VNU</span>
          </div>

          <div class="flex items-center justify-center space-x-3 cursor-pointer">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-200 animate-float">
              <i class="fas fa-fire-flame-curved"></i>
            </div>
            <div class="text-left">
              <h1 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 bg-clip-text text-transparent font-serif-title leading-tight">
                From Burnout to <span class="text-emerald-600">Burn Bright</span>
              </h1>
              <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Trường Đại học Ngoại ngữ — Đại học Quốc gia Hà Nội</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto italic">
            "${info.quote}"
          </p>
        </div>

        <!-- Main Auth Gate Card -->
        <div class="max-w-lg mx-auto w-full my-6 glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-white/90 relative">
          <!-- Auth Mode Toggle Tabs -->
          <div class="flex rounded-2xl bg-slate-100/80 p-1 mb-6 border border-slate-200">
            <button onclick="APP.switchAuthTab('login')" 
                    class="flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'login' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
              <i class="fas fa-sign-in-alt mr-1"></i> Đăng Nhập
            </button>
            <button onclick="APP.switchAuthTab('register')" 
                    class="flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'register' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
              <i class="fas fa-user-plus mr-1"></i> Đăng Ký
            </button>
          </div>

          ${errorMsg ? `
            <div class="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center space-x-2">
              <i class="fas fa-exclamation-circle text-rose-500 text-sm"></i>
              <span>${errorMsg}</span>
            </div>
          ` : ''}

          <!-- Form Content -->
          ${activeTab === 'login' ? `
            <!-- LOGIN FORM -->
            <form onsubmit="APP.handleLogin(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email / Mã Sinh Viên</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-envelope"></i></span>
                  <input type="email" id="loginEmail" required value="${emailDraft || 'thuha.ulis@vnu.edu.vn'}" placeholder="sinhvien@vnu.edu.vn" 
                         class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-lock"></i></span>
                  <input type="password" id="loginPassword" required value="password123" placeholder="••••••••" 
                         class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                </div>
                <div class="flex justify-between items-center mt-1">
                  <span class="text-[11px] text-slate-400">Tài khoản mẫu: thuha.ulis@vnu.edu.vn (Pass: password123)</span>
                </div>
              </div>

              <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
                <i class="fas fa-arrow-right-to-bracket"></i>
                <span>Đăng Nhập & Mở Khóa Nền Tảng</span>
              </button>
            </form>
          ` : `
            <!-- REGISTER FORM -->
            <form onsubmit="APP.handleRegister(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Họ và Tên</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-user"></i></span>
                  <input type="text" id="regName" required placeholder="Nguyễn Văn A" 
                         class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email Sinh Viên (Để nhận thư tương lai)</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-envelope"></i></span>
                  <input type="email" id="regEmail" required placeholder="student@vnu.edu.vn" 
                         class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu (Tối thiểu 6 ký tự)</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-lock"></i></span>
                  <input type="password" id="regPassword" required minlength="6" placeholder="••••••••" 
                         class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Đối tượng / Vai trò</label>
                <select id="regRole" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
                  <option value="Sinh viên ULIS - ĐHQGHN">Sinh viên Trường ĐH Ngoại ngữ (ULIS - VNU)</option>
                  <option value="Sinh viên ĐHQGHN">Sinh viên trường thành viên ĐHQGHN khác</option>
                  <option value="Sinh viên Đại học khác">Sinh viên Đại học khác</option>
                  <option value="Học sinh / Giảng viên">Học sinh / Giảng viên</option>
                </select>
              </div>

              <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
                <i class="fas fa-user-check"></i>
                <span>Tạo Tài Khoản & Bắt Đầu Học</span>
              </button>
            </form>
          `}

          <!-- Quick Guest Access Option -->
          <div class="relative my-5 text-center">
            <span class="bg-white px-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">Hoặc tiếp tục nhanh</span>
            <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 -z-10"></div>
          </div>

          <button onclick="APP.loginAsGuest()" class="w-full bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold py-3 rounded-xl border border-slate-200 hover:border-emerald-300 text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-sm">
            <i class="fas fa-user-clock text-emerald-600"></i>
            <span>Trải nghiệm nhanh dưới dạng Bạn Đọc Khách (1-Click)</span>
          </button>
        </div>

        <!-- Features Overview Grid -->
        <div class="max-w-4xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pb-4">
          <div class="p-3 rounded-2xl bg-white/70 border border-emerald-100 space-y-1">
            <i class="fas fa-stethoscope text-emerald-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Test Burnout 12 Câu</div>
            <div class="text-[10px] text-slate-500">Đo lường chỉ số kiệt sức</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/70 border border-sky-100 space-y-1">
            <i class="fas fa-icicles text-sky-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Mô hình Tảng Băng</div>
            <div class="text-[10px] text-slate-500">Bóc tách áp lực gốc rễ</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/70 border border-amber-100 space-y-1">
            <i class="fas fa-stopwatch text-amber-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Pomodoro & Kéo Thả</div>
            <div class="text-[10px] text-slate-500">Chuyển hóa năng lượng 24h</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/70 border border-teal-100 space-y-1">
            <i class="fas fa-envelope-open-text text-teal-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Thư Gửi Tương Lai</div>
            <div class="text-[10px] text-slate-500">Hẹn gửi mail tự động</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-xs text-slate-500 space-y-1">
          <div>Trường Đại học Ngoại ngữ — Đại học Quốc gia Hà Nội (ULIS - VNU)</div>
          <div class="text-[11px] text-slate-400">From Burnout to Burn Bright © 2026</div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 2. NAVBAR COMPONENT (KHI ĐÃ ĐĂNG NHẬP)
  // =========================================================================
  renderNavbar: function(user, activePage, streakInfo, unreadNotifsCount, favsCount, audioState) {
    const pages = [
      { id: 'home', label: 'Trang chủ', icon: 'fa-home' },
      { id: 'intro', label: 'Giới thiệu', icon: 'fa-info-circle' },
      { id: 'ch1', label: 'C1: Nhận diện', icon: 'fa-search' },
      { id: 'ch2', label: 'C2: Giải mã', icon: 'fa-puzzle-piece' },
      { id: 'ch3', label: 'C3: Chuyển hóa', icon: 'fa-sync-alt' },
      { id: 'ch4', label: 'C4: Tái tạo', icon: 'fa-seedling' },
      { id: 'favorites', label: 'Yêu thích', icon: 'fa-bookmark', badge: favsCount },
      { id: 'dashboard', label: 'Tiến độ', icon: 'fa-user-graduate' }
    ];

    const navItemsDesktop = pages.map(p => {
      const isActive = activePage === p.id;
      const activeClass = isActive 
        ? 'text-emerald-700 bg-emerald-50 font-bold border-b-2 border-emerald-600' 
        : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50';
      const badgeHtml = p.badge && p.badge > 0 ? `<span class="ml-1 px-1.5 py-0.2 rounded-full bg-amber-500 text-white text-[10px] font-bold">${p.badge}</span>` : '';
      return `
        <button onclick="APP.navigateTo('${p.id}')" 
                class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5 ${activeClass}">
          <i class="fas ${p.icon} text-emerald-500"></i>
          <span>${p.label}</span>
          ${badgeHtml}
        </button>
      `;
    }).join('');

    const navItemsMobile = pages.map(p => {
      const isActive = activePage === p.id;
      const activeClass = isActive 
        ? 'text-emerald-700 bg-emerald-100/70 font-bold' 
        : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50';
      const badgeHtml = p.badge && p.badge > 0 ? `<span class="ml-auto px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold">${p.badge}</span>` : '';
      return `
        <button onclick="APP.navigateTo('${p.id}'); APP.toggleMobileNav();" 
                class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center space-x-3 ${activeClass}">
          <i class="fas ${p.icon} text-emerald-500 w-5 text-center"></i>
          <span>${p.label}</span>
          ${badgeHtml}
        </button>
      `;
    }).join('');

    const streakCount = streakInfo?.count || 0;
    const isMusicPlaying = audioState?.isPlaying || false;

    return `
      <header class="sticky top-0 z-40 glass-nav shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Brand Logo -->
            <div class="flex items-center space-x-2.5 cursor-pointer select-none" onclick="APP.navigateTo('home')">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-lg shadow-md shadow-emerald-200 animate-float">
                <i class="fas fa-fire-flame-curved"></i>
              </div>
              <div>
                <span class="text-base font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 bg-clip-text text-transparent font-serif-title tracking-tight">Burn Bright</span>
                <span class="text-[9px] block text-emerald-600 font-bold uppercase tracking-wider">ULIS - VNU</span>
              </div>
            </div>

            <!-- Desktop Nav Items -->
            <nav class="hidden lg:flex items-center space-x-0.5">
              ${navItemsDesktop}
            </nav>

            <!-- Action Controls (Music, Search, Streak, Notif, User) -->
            <div class="flex items-center space-x-2 sm:space-x-3">
              <!-- Ambient Music Quick Toggle -->
              <button onclick="APP.toggleAudioPlay()" title="${isMusicPlaying ? 'Tắt nhạc thư giãn' : 'Bật nhạc thư giãn chữa lành'}"
                      class="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl border ${isMusicPlaying ? 'bg-emerald-100/80 text-emerald-800 border-emerald-300 shadow-sm' : 'bg-white/80 text-slate-500 border-slate-200 hover:bg-emerald-50'} transition-all text-xs font-bold">
                <i class="fas ${isMusicPlaying ? 'fa-volume-high text-emerald-600' : 'fa-music text-slate-400'}"></i>
                <span class="hidden sm:inline">${isMusicPlaying ? 'Nhạc êm dịu' : 'Nhạc nền'}</span>
                ${isMusicPlaying ? `
                  <div class="flex items-end space-x-0.5 h-3 ml-1">
                    <span class="w-0.5 bg-emerald-600 eq-bar-1"></span>
                    <span class="w-0.5 bg-emerald-600 eq-bar-2"></span>
                    <span class="w-0.5 bg-emerald-600 eq-bar-3"></span>
                  </div>
                ` : ''}
              </button>

              <!-- Search Quick Action -->
              <button onclick="APP.openSearchModal()" title="Tìm kiếm nội dung" 
                      class="p-2 rounded-xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors text-sm">
                <i class="fas fa-search"></i>
              </button>

              <!-- Streak Button -->
              <button onclick="APP.openStreakModal()" title="Chuỗi Streak hàng ngày" 
                      class="flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 transition-all font-bold text-xs">
                <i class="fas fa-fire text-orange-500"></i>
                <span>${streakCount}</span>
              </button>

              <!-- Notification Bell with Email Inbox Preview -->
              <button onclick="APP.openNotificationModal()" title="Thông báo & Hộp thư email" 
                      class="relative p-2 rounded-xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors text-sm">
                <i class="fas fa-bell"></i>
                ${unreadNotifsCount > 0 ? `<span class="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>` : ''}
              </button>

              <!-- User Profile & Logout -->
              <div class="flex items-center space-x-2 bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
                <div class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ${user ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div class="hidden sm:block text-left pr-1">
                  <div class="text-xs font-bold text-slate-800 leading-tight truncate max-w-[110px]">${user ? user.name : 'Sinh viên'}</div>
                  <div class="text-[10px] text-emerald-600 font-medium">${user ? user.role : 'Sinh viên ULIS'}</div>
                </div>
                <button onclick="APP.logout()" title="Đăng xuất khỏi tài khoản" class="text-slate-400 hover:text-rose-500 transition-colors p-1 text-xs">
                  <i class="fas fa-sign-out-alt"></i>
                </button>
              </div>

              <!-- Mobile Menu Toggle Button -->
              <button onclick="APP.toggleMobileNav()" class="lg:hidden text-slate-600 hover:text-emerald-600 p-2 rounded-lg">
                <i class="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Nav Drawer -->
        <div id="mobileNavDrawer" class="hidden lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1 shadow-lg">
          ${navItemsMobile}
        </div>
      </header>
    `;
  },

  // =========================================================================
  // 3. FLOATING AMBIENT AUDIO WIDGET
  // =========================================================================
  renderFloatingAudioWidget: function(audioState) {
    const isPlaying = audioState.isPlaying;
    const currentTrack = audioState.currentTrack;
    const tracks = window.SERVICES.Audio.tracks;

    return `
      <div class="audio-player-floating">
        <div class="glass-card rounded-2xl p-3 shadow-xl border border-emerald-200 flex items-center space-x-3 bg-white/95">
          <!-- Play / Pause Button -->
          <button onclick="APP.toggleAudioPlay()" 
                  class="w-10 h-10 rounded-xl ${isPlaying ? 'bg-emerald-600 text-white animate-pulse' : 'bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700'} flex items-center justify-center text-sm shadow-md transition-all">
            <i class="fas ${isPlaying ? 'fa-pause' : 'fa-play ml-0.5'}"></i>
          </button>

          <!-- Track Info & Controls -->
          <div class="space-y-1">
            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Nhạc nền thư giãn</span>
              ${isPlaying ? `
                <div class="flex items-end space-x-0.5 h-2.5">
                  <span class="w-0.5 bg-emerald-600 eq-bar-1"></span>
                  <span class="w-0.5 bg-emerald-600 eq-bar-2"></span>
                  <span class="w-0.5 bg-emerald-600 eq-bar-3"></span>
                  <span class="w-0.5 bg-emerald-600 eq-bar-4"></span>
                </div>
              ` : ''}
            </div>

            <!-- Track Selector Dropdown -->
            <select onchange="APP.changeAudioTrack(this.value)" class="text-xs font-bold text-slate-800 bg-transparent border-0 focus:outline-none cursor-pointer pr-2">
              ${Object.values(tracks).map(t => `
                <option value="${t.id}" ${t.id === currentTrack ? 'selected' : ''}>${t.name}</option>
              `).join('')}
            </select>
          </div>

          <!-- Volume Slider -->
          <div class="hidden sm:flex items-center space-x-1.5 pl-2 border-l border-slate-200">
            <i class="fas fa-volume-low text-slate-400 text-xs"></i>
            <input type="range" min="0" max="1" step="0.05" value="${audioState.volume}" 
                   oninput="APP.setAudioVolume(this.value)" 
                   class="w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600">
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 4. FULLSCREEN ZEN TOOLBAR HELPER
  // =========================================================================
  renderFullscreenButton: function(exerciseId, title) {
    return `
      <button onclick="APP.toggleExerciseFullscreen('${exerciseId}', '${title}')" 
              title="Mở toàn màn hình / Chế độ tập trung" 
              class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 font-bold text-xs border border-slate-200 transition-all flex items-center space-x-1.5 shadow-sm">
        <i class="fas fa-expand text-emerald-600"></i>
        <span>Toàn màn hình</span>
      </button>
    `;
  },

  renderFullscreenZenToolbar: function(exerciseId, title) {
    return `
      <div class="zen-focus-toolbar">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
            <i class="fas fa-spa"></i>
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">Chế độ tập trung (Zen Focus Mode)</span>
            <h3 class="text-sm sm:text-base font-bold text-white font-serif-title">${title}</h3>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <!-- Audio Toggle -->
          <button onclick="APP.toggleAudioPlay()" class="px-3 py-1.5 rounded-xl bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-emerald-500/30 text-xs font-bold flex items-center space-x-1.5 transition-all">
            <i class="fas fa-music"></i>
            <span class="hidden sm:inline">Nhạc êm dịu</span>
          </button>

          <!-- Exit Fullscreen Button -->
          <button onclick="APP.exitExerciseFullscreen()" class="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md transition-all">
            <i class="fas fa-compress"></i>
            <span>Thoát Toàn Màn Hình (Esc)</span>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 5. HERO / HOME PAGE COMPONENT
  // =========================================================================
  renderHomePage: function(user, overallProgress, streakInfo) {
    const info = window.APP_DATA.projectInfo;

    return `
      <div class="space-y-12 pb-16">
        <!-- Hero Banner -->
        <section class="relative overflow-hidden rounded-3xl glass-card p-8 sm:p-12 border border-white/80 shadow-xl">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
          <div class="absolute -left-20 -top-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>

          <div class="max-w-3xl space-y-6">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-200">
              <i class="fas fa-award text-emerald-600"></i>
              <span>Dự án Tâm lý Học đường Trường ĐH Ngoại ngữ - ĐHQGHN</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-title text-slate-900 leading-tight">
              From Burnout to <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Burn Bright</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              ${info.description}
            </p>

            <div class="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-sm font-medium italic flex items-start space-x-3">
              <i class="fas fa-quote-left text-amber-500 text-xl mt-0.5"></i>
              <div>
                <span>"${info.quote}"</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-2">
              <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all flex items-center space-x-2 text-sm">
                <i class="fas fa-stethoscope"></i>
                <span>Làm Test Đánh Giá Ngay</span>
              </button>
              <button onclick="APP.resumeLearning()" class="bg-white hover:bg-emerald-50 text-emerald-800 font-bold px-6 py-3.5 rounded-2xl border border-emerald-200 shadow-sm transition-all flex items-center space-x-2 text-sm">
                <i class="fas fa-play-circle text-emerald-500"></i>
                <span>Tiếp tục bài học dở</span>
              </button>
              <button onclick="APP.navigateTo('ch4'); setTimeout(() => APP.scrollToDay11(), 200);" class="bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold px-6 py-3.5 rounded-2xl border border-pink-200 shadow-sm transition-all flex items-center space-x-2 text-sm">
                <i class="fas fa-envelope-open-text text-pink-500"></i>
                <span>Thư Gửi Tôi Tương Lai (C4)</span>
              </button>
            </div>
          </div>
        </section>

        <!-- 4 Key Modules Cards Grid -->
        <section class="space-y-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-extrabold text-slate-900 font-serif-title">4 Chặng Hành Trình Phục Hồi</h2>
            <p class="text-slate-500 text-sm mt-1">Kết hợp lý thuyết chuẩn hóa tâm lý học cùng các công cụ bài tập tương tác</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${window.APP_DATA.chapters.map(ch => `
              <div onclick="APP.navigateTo('${ch.slug}')" class="glass-card rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-white/80 group flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center text-xl shadow-md">
                      <i class="fas ${ch.icon}"></i>
                    </div>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                      ${ch.badge}
                    </span>
                  </div>

                  <h3 class="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors font-serif-title">${ch.title}</h3>
                  <p class="text-xs font-semibold text-emerald-600 mb-2">${ch.subtitle}</p>
                  <p class="text-xs text-slate-500 leading-relaxed line-clamp-3">${ch.theory?.intro || ch.theory?.definition || 'Lý thuyết chuyên sâu kèm bài tập thực hành tương tác.'}</p>
                </div>

                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <span>Học & Làm Bài Tập</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Stats Bar -->
        <section class="glass-card rounded-2xl p-8 border border-white/80 shadow-md">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            ${info.stats.map(s => `
              <div class="space-y-1">
                <div class="text-3xl font-extrabold text-emerald-600 font-serif-title">${s.value}</div>
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  },

  // =========================================================================
  // 6. CHAPTER 1 COMPONENT (Nhận diện & Burnout Test)
  // =========================================================================
  renderChapter1: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[0];
    const quiz = ch.quiz;
    const progressObj = userProgress?.progress || userProgress;
    const testResult = progressObj?.ch1?.testResult || APP.state.activeTestResult;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 space-y-4 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center text-xl shadow-md">
              <i class="fas ${ch.icon}"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">${ch.badge}</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${ch.title}</h1>
              <p class="text-xs text-slate-500 mt-0.5">${ch.subtitle}</p>
            </div>
          </div>

          <button onclick="APP.toggleFavorite({ id: 'ch1', title: '${ch.title}', chapterId: 1, category: 'Bài học & Test', snippet: '${ch.subtitle}', path: 'ch1' })" 
                  class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto">
            <i class="fas ${isFav ? 'fa-bookmark text-amber-500' : 'fa-bookmark text-slate-400'}"></i>
            <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
          </button>
        </div>

        <!-- Theory Section -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-md border border-white/80">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-book-open text-emerald-600"></i>
            <span>1. Lý Thuyết: Nhận Diện Academic Burnout</span>
          </h2>

          <div class="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
            ${ch.theory.intro}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${ch.theory.manifestations.map(m => `
              <div class="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${m.color}">
                  <i class="fas ${m.icon}"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-xs sm:text-sm">${m.title}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${m.desc}</p>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-semibold">
            <i class="fas fa-info-circle text-amber-600 mr-1"></i>
            ${ch.theory.definition}
          </div>
        </div>

        <!-- Exercise / Interactive Quiz Section -->
        <div id="quizSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-emerald-200 relative">
          <!-- Fullscreen Toolbar placeholder if active -->
          <div id="zenToolbar_quizSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-clipboard-check text-emerald-600"></i>
                <span>2. Bài Tập Thực Hành: ${quiz.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${quiz.instructions}</p>
            </div>

            <!-- Fullscreen button -->
            ${COMPONENTS.renderFullscreenButton('quizSection', 'Bài Test 12 Câu Đánh Giá Academic Burnout')}
          </div>

          <!-- Questions List -->
          <form id="burnoutForm" onsubmit="APP.calculateBurnoutScore(event)" class="space-y-4">
            ${quiz.questions.map((q, qIdx) => {
              const savedAns = testResult?.answers?.[qIdx];
              return `
                <div class="p-4 rounded-2xl bg-white/80 border border-slate-200 space-y-3 shadow-sm">
                  <div class="text-xs sm:text-sm font-bold text-slate-800">${q}</div>
                  <div class="grid grid-cols-5 gap-1.5 sm:gap-2 text-center text-xs font-medium">
                    ${[1, 2, 3, 4, 5].map(score => `
                      <label class="quiz-option p-2 sm:p-2.5 rounded-xl border border-slate-200 flex flex-col items-center justify-center cursor-pointer ${savedAns === score ? 'selected' : ''}">
                        <input type="radio" name="q_${qIdx}" value="${score}" required ${savedAns === score ? 'checked' : ''} class="custom-checkbox mb-1">
                        <span class="text-[11px] font-bold text-slate-700">${score}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}

            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-200 text-sm transition-all flex items-center justify-center space-x-2">
              <i class="fas fa-calculator"></i>
              <span>Tính Điểm & Diễn Giải Kết Quả Chuẩn Hóa</span>
            </button>
          </form>

          <!-- Result Container -->
          <div id="testResultContainer" class="${testResult ? '' : 'hidden'} p-6 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-4 shadow-inner">
            ${testResult ? COMPONENTS.renderTestResultContent(testResult) : ''}
          </div>
        </div>
      </div>
    `;
  },

  renderTestResultContent: function(res) {
    const quiz = window.APP_DATA.chapters[0].quiz;
    const interpretation = quiz.resultsInterpretation.find(r => res.score >= r.min && res.score <= r.max) 
      || quiz.resultsInterpretation[2];

    return `
      <div class="text-center space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Kết quả Đánh giá của Bạn</span>
        <div class="text-4xl font-extrabold text-emerald-600 font-serif-title">${res.score.toFixed(2)} / 5.00</div>
        <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold ${interpretation.badgeColor}">
          <i class="fas ${interpretation.icon} mr-1"></i> ${interpretation.level}
        </div>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl mx-auto">${interpretation.message}</p>
        <div class="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium max-w-lg mx-auto">
          <strong>Lời khuyên dành cho bạn:</strong> ${interpretation.advice}
        </div>
        <div class="pt-2">
          <button onclick="APP.navigateTo('ch2')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md transition-all inline-flex items-center space-x-2">
            <span>Tiếp tục sang Chương 2: Giải mã</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 7. CHAPTER 2 COMPONENT (Giải mã & Iceberg Model Tool)
  // =========================================================================
  renderChapter2: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[1];
    const progressObj = userProgress?.progress || userProgress;
    const savedIceberg = progressObj?.ch2?.iceberg;

    const floatingItems = savedIceberg?.floating || ch.exercise.defaultFloating;
    const submergedItems = savedIceberg?.submerged || ch.exercise.defaultSubmerged;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 space-y-4 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center text-xl shadow-md">
              <i class="fas ${ch.icon}"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">${ch.badge}</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${ch.title}</h1>
              <p class="text-xs text-slate-500 mt-0.5">${ch.subtitle}</p>
            </div>
          </div>

          <button onclick="APP.toggleFavorite({ id: 'ch2', title: '${ch.title}', chapterId: 2, category: 'Bài học & Tảng Băng', snippet: '${ch.subtitle}', path: 'ch2' })" 
                  class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto">
            <i class="fas ${isFav ? 'fa-bookmark text-amber-500' : 'fa-bookmark text-slate-400'}"></i>
            <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
          </button>
        </div>

        <!-- Theory Section -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-md border border-white/80">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-lightbulb text-sky-600"></i>
            <span>1. Lý Thuyết: Bóc Tách Nguyên Nhân Kiệt Sức</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${ch.sections.map(s => `
              <div class="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-2 shadow-sm flex flex-col justify-between">
                <div class="space-y-2">
                  <h4 class="font-bold text-slate-900 text-xs sm:text-sm text-sky-800">${s.title}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">${s.content}</p>
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-sky-200 text-[11px] text-sky-900 font-medium italic mt-2">
                  💡 ${s.insight}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Iceberg Tool -->
        <div id="icebergSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-sky-200 relative">
          <!-- Fullscreen Toolbar placeholder if active -->
          <div id="zenToolbar_icebergSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">${ch.exercise.title}</h2>
              <p class="text-xs text-slate-500">${ch.exercise.description}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('icebergSection', 'Công cụ Mô hình Tảng Băng Trôi')}
          </div>

          <!-- Iceberg Graphic Display -->
          <div class="iceberg-container">
            <!-- Sky (Floating Part) -->
            <div class="iceberg-sky">
              <div class="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span><i class="fas fa-sun text-amber-500 mr-1"></i> Phần Nổi (Biểu hiện bề ngoài)</span>
                <span class="text-[10px] text-sky-600 font-normal">Chỉ là phần nhỏ câu chuyện</span>
              </div>
              <div id="floatingTagsContainer" class="flex flex-wrap gap-2">
                ${floatingItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-white/90 text-sky-900 font-bold text-xs shadow-sm border border-sky-200 flex items-center space-x-1">
                    <span>${item}</span>
                    <button onclick="APP.removeIcebergItem('floating', '${item}')" class="text-slate-400 hover:text-rose-500 ml-1">×</button>
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Waterline -->
            <div class="iceberg-waterline"></div>

            <!-- Water (Submerged Part) -->
            <div class="iceberg-water">
              <div class="text-[11px] font-bold text-sky-100 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span><i class="fas fa-water text-sky-300 mr-1"></i> Phần Chìm (Nguyên nhân gốc rễ)</span>
                <span class="text-[10px] text-sky-200 font-normal">Quyết định trạng thái & hành động</span>
              </div>
              <div id="submergedTagsContainer" class="flex flex-wrap gap-2">
                ${submergedItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-sky-950/70 text-sky-100 font-bold text-xs shadow-sm border border-sky-400/40 flex items-center space-x-1">
                    <span>${item}</span>
                    <button onclick="APP.removeIcebergItem('submerged', '${item}')" class="text-sky-300 hover:text-rose-300 ml-1">×</button>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Add Item Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700">Thêm Biểu hiện Phần Nổi:</label>
              <div class="flex space-x-2">
                <input type="text" id="floatingInput" placeholder="Ví dụ: Đau đầu, uể oải..." class="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                <button onclick="APP.addIcebergItem('floating')" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700">Thêm Nguyên nhân Phần Chìm:</label>
              <div class="flex space-x-2">
                <input type="text" id="submergedInput" placeholder="Ví dụ: Sợ thất bại, kỳ vọng..." class="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <button onclick="APP.addIcebergItem('submerged')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>
          </div>

          <div class="text-center pt-2">
            <button onclick="APP.navigateTo('ch3')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all inline-flex items-center space-x-2">
              <span>Sang Chương 3: Chuyển hóa</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 8. CHAPTER 3 COMPONENT (Chuyển hóa & Kéo thả + Pomodoro + Energy Map)
  // =========================================================================
  renderChapter3: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[2];
    const progressObj = userProgress?.progress || userProgress;
    const dndState = progressObj?.ch3?.dndState || { pairs: {}, isCompleted: false, score: 0 };
    const savedEnergyMap = progressObj?.ch3?.energyMap || {};
    const pomoCount = progressObj?.ch3?.pomodoroSessions || APP.state.pomodoro.sessionsCompleted || 0;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 space-y-4 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center text-xl shadow-md">
              <i class="fas ${ch.icon}"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">${ch.badge}</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${ch.title}</h1>
              <p class="text-xs text-slate-500 mt-0.5">${ch.subtitle}</p>
            </div>
          </div>

          <button onclick="APP.toggleFavorite({ id: 'ch3', title: '${ch.title}', chapterId: 3, category: 'Bài tập & Pomodoro', snippet: '${ch.subtitle}', path: 'ch3' })" 
                  class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto">
            <i class="fas ${isFav ? 'fa-bookmark text-amber-500' : 'fa-bookmark text-slate-400'}"></i>
            <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
          </button>
        </div>

        <!-- Case Study & Lusi Quiz -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-md border border-white/80">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-user-graduate text-amber-600"></i>
            <span>1. Nghiên Cứu Tình Huống: ${ch.theory.caseStudy.title}</span>
          </h2>

          <div class="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
            ${ch.theory.caseStudy.content}
          </div>

          <!-- Lusi Scenario Quiz -->
          <div class="space-y-4 pt-2">
            <h4 class="font-bold text-slate-900 text-sm">Phân tích tình huống của Lusi:</h4>
            ${ch.exercise.lusiQuiz.map((q, idx) => `
              <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div class="text-xs font-bold text-slate-800">${q.question}</div>
                <div class="space-y-1.5">
                  ${q.options.map((opt, optIdx) => `
                    <label class="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer p-1.5 hover:bg-amber-50 rounded-lg">
                      <input type="radio" name="${q.id}" value="${optIdx}" onchange="APP.handleLusiAnswer('${q.id}', ${optIdx})" class="custom-checkbox">
                      <span>${opt}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- DRAG AND DROP EXERCISE -->
        <div id="dndSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-amber-200 relative">
          <div id="zenToolbar_dndSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-hand-pointer text-amber-500"></i>
                <span>${ch.dndExercise.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.dndExercise.instruction}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('dndSection', 'Bài Tập Kéo Thả Chuyển Hóa Cảm Xúc')}
          </div>

          <!-- DND Board Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column: Problem Stickers -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Vấn đề / Áp lực kiệt sức</span>
                <span class="text-[10px] text-amber-600 font-normal">Kéo hoặc Chạm chọn</span>
              </h4>

              <div id="dndSourceList" class="space-y-2.5">
                ${ch.dndExercise.pairs.map(p => {
                  const isPaired = !!dndState.pairs[p.id];
                  return `
                    <div id="sticker_${p.id}" 
                         draggable="${!isPaired}" 
                         ondragstart="APP.onDragStart(event, '${p.id}')" 
                         onclick="APP.onStickerClick('${p.id}')"
                         class="draggable-item p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between ${isPaired ? 'paired' : ''}">
                      <div class="flex items-center space-x-2.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center">
                          <i class="fas fa-puzzle-piece"></i>
                        </span>
                        <span class="text-xs font-bold text-slate-800">${p.problem}</span>
                      </div>
                      <i class="fas fa-grip-vertical text-slate-300 text-xs"></i>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Right Column: Drop Targets -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Giải pháp & Chuyển hóa</span>
                <span class="text-[10px] text-emerald-600 font-bold">Điểm: ${dndState.score || 0} / 6</span>
              </h4>

              <div class="space-y-2.5">
                ${ch.dndExercise.pairs.map(p => {
                  const pairedStickerId = dndState.pairs[p.id];
                  const isMatched = pairedStickerId === p.id;
                  return `
                    <div id="dropzone_${p.id}" 
                         ondragover="APP.onDragOver(event)" 
                         ondragleave="APP.onDragLeave(event)" 
                         ondrop="APP.onDrop(event, '${p.id}')" 
                         onclick="APP.onDropZoneClick('${p.id}')"
                         class="drop-target-zone p-3 flex flex-col justify-center ${isMatched ? 'correct-match' : 'bg-slate-50/80'}">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-800">${p.solution}</span>
                        ${isMatched ? `<span class="text-xs font-bold text-emerald-600"><i class="fas fa-check-circle"></i> Đúng</span>` : `<span class="text-[10px] text-slate-400">Thả vào đây</span>`}
                      </div>
                      ${isMatched ? `<p class="text-[11px] text-emerald-700 mt-1 italic">${p.explanation}</p>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Pomodoro Interactive Tool -->
        <div id="pomodoroSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-amber-200 text-center relative">
          <div id="zenToolbar_pomodoroSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">
                <i class="fas fa-stopwatch text-amber-500 mr-2"></i> ${ch.theory.pomodoroInfo.title}
              </h2>
              <p class="text-xs text-slate-500">${ch.theory.pomodoroInfo.desc}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('pomodoroSection', 'Đồng hồ Pomodoro Quả Cà Chua')}
          </div>

          <!-- Timer Visual -->
          <div class="relative w-48 h-48 mx-auto flex items-center justify-center">
            <div class="w-44 h-44 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex flex-col items-center justify-center shadow-xl shadow-amber-200">
              <span id="pomoStatus" class="text-xs font-bold uppercase tracking-wider text-amber-100">Phiên Tập Trung</span>
              <span id="pomoDisplay" class="text-4xl font-extrabold font-serif-title my-1">25:00</span>
              <span id="pomoSessionCount" class="text-[11px] font-semibold text-amber-200">Đã xong: ${pomoCount} phiên</span>
            </div>
          </div>

          <!-- Controls -->
          <div class="flex justify-center space-x-3 pt-2">
            <button id="pomoStartBtn" onclick="APP.togglePomodoro()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md">
              Bắt đầu (25p)
            </button>
            <button onclick="APP.resetPomodoro()" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs">
              Đặt lại
            </button>
          </div>
        </div>

        <!-- Energy Map Tool -->
        <div id="energyMapSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-emerald-200 relative">
          <div id="zenToolbar_energyMapSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">${ch.exercise.energyMapTool.title}</h2>
              <p class="text-xs text-slate-500 max-w-xl">${ch.exercise.energyMapTool.desc}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('energyMapSection', 'Bản đồ Năng lượng 24 Hours')}
          </div>

          <!-- Legend -->
          <div class="flex justify-center space-x-4 text-xs font-bold">
            <span class="flex items-center space-x-1.5"><span class="w-3 h-3 rounded-full bg-emerald-500"></span><span>Xanh: Tốt</span></span>
            <span class="flex items-center space-x-1.5"><span class="w-3 h-3 rounded-full bg-amber-500"></span><span>Vàng: Mệt</span></span>
            <span class="flex items-center space-x-1.5"><span class="w-3 h-3 rounded-full bg-rose-500"></span><span>Đỏ: Kiệt sức</span></span>
          </div>

          <!-- 24-Hour Grid Slots -->
          <div class="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2 pt-4" id="energyGrid">
            ${[...Array(24).keys()].map(h => {
              const savedColor = savedEnergyMap?.[h] || 'green';
              const bgClasses = {
                green: 'bg-emerald-500 text-white border-emerald-600',
                yellow: 'bg-amber-500 text-white border-amber-600',
                red: 'bg-rose-500 text-white border-rose-600'
              };
              return `
                <div onclick="APP.cycleEnergySlot(${h})" 
                     class="energy-slot p-2.5 rounded-xl border text-center font-bold text-xs transition-all shadow-sm ${bgClasses[savedColor]}"
                     id="slot_${h}">
                  <div>${h}:00</div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="text-center pt-4">
            <button onclick="APP.navigateTo('ch4')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md inline-flex items-center space-x-2">
              <span>Sang Chương 4: Tái tạo</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 9. CHAPTER 4 COMPONENT (TÁI TẠO, 11 NGÀY & THƯ GỬI TƯƠNG LAI TÍCH HỢP)
  // =========================================================================
  renderChapter4: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[3];
    const days = ch.exercise.challenge11Days;
    const progressObj = userProgress?.progress || userProgress;
    const challengeState = progressObj?.ch4?.challenge11Days || {};
    const flowerState = progressObj?.ch4?.valueFlower || {};
    const videoCompleted = progressObj?.ch4?.videoCompleted || false;
    const letters = userProgress?.futureLetters || [];

    const completedDaysCount = Object.values(challengeState).filter(c => c.completed).length;
    const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 space-y-4 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center text-xl shadow-md">
              <i class="fas ${ch.icon}"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">${ch.badge}</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${ch.title}</h1>
              <p class="text-xs text-slate-500 mt-0.5">${ch.subtitle}</p>
            </div>
          </div>

          <button onclick="APP.toggleFavorite({ id: 'ch4', title: '${ch.title}', chapterId: 4, category: 'Bài học & Thử thách', snippet: '${ch.subtitle}', path: 'ch4' })" 
                  class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto">
            <i class="fas ${isFav ? 'fa-bookmark text-amber-500' : 'fa-bookmark text-slate-400'}"></i>
            <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
          </button>
        </div>

        <!-- Theory & Quote -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-md border border-white/80">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-seedling text-emerald-600"></i>
            <span>1. Lý Thuyết: Nuôi Dưỡng & Tái Tạo Giá Trị Nội Tại</span>
          </h2>

          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${ch.theory.intro}</p>

          <div class="p-6 rounded-2xl bg-emerald-800 text-white space-y-2 shadow-lg relative overflow-hidden">
            <div class="text-amber-300 text-base sm:text-lg font-serif-title italic">"${ch.theory.quote.text}"</div>
            <div class="text-xs font-bold text-emerald-200 text-right">— ${ch.theory.quote.author}</div>
          </div>
        </div>

        <!-- VIDEO SECTION -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-teal-200">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div>
              <h2 class="text-xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-play-circle text-teal-600"></i>
                <span>${ch.videoSection.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.videoSection.subtitle}</p>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full ${videoCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
              ${videoCompleted ? '✓ Đã hoàn thành' : 'Chưa xem'}
            </span>
          </div>

          <!-- Video Player -->
          <div class="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl aspect-video max-w-2xl mx-auto">
            <video id="ch4VideoPlayer" 
                   controls 
                   poster="${ch.videoSection.poster}"
                   ontimeupdate="APP.onVideoTimeUpdate(this)"
                   onended="APP.onVideoEnded()"
                   onerror="APP.handleVideoError(this)"
                   class="w-full h-full object-cover">
              <source src="${ch.videoSection.videoSrc}" type="video/mp4">
              Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
            </video>
          </div>
        </div>

        <!-- 11-DAY RECOVERY CHALLENGE TRACKER -->
        <div id="challenge11Section" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-emerald-200 relative">
          <div id="zenToolbar_challenge11Section"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">Thử Thách 11 Ngày — Tìm Lại Nhịp Thở</h2>
              <p class="text-xs text-slate-500 mt-1">Hoàn thành bài tập mỗi ngày để khôi phục nguồn năng lượng tự nhiên của bạn</p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="text-right">
                <span class="text-xs font-bold text-emerald-600 block">Tiến độ</span>
                <div class="text-lg font-extrabold text-slate-900">${completedDaysCount} / 11 Ngày</div>
              </div>
              ${COMPONENTS.renderFullscreenButton('challenge11Section', 'Thử Thách 11 Ngày Tìm Lại Nhịp Thở')}
            </div>
          </div>

          <!-- Challenge Days 1-10 List -->
          <div class="space-y-3.5">
            ${days.slice(0, 10).map(d => {
              const isDone = challengeState[d.day]?.completed || false;
              const savedNote = challengeState[d.day]?.note || '';
              return `
                <div class="p-4 sm:p-5 rounded-2xl border ${isDone ? 'bg-emerald-50/80 border-emerald-300' : 'bg-white border-slate-200'} space-y-3 transition-all">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <input type="checkbox" onchange="APP.toggleChallengeDay(${d.day})" ${isDone ? 'checked' : ''} class="custom-checkbox">
                      <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">${d.phase}</span>
                        <h4 class="font-bold text-slate-900 text-xs sm:text-sm">${d.title}</h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full ${isDone ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-100 text-slate-500'}">
                      ${isDone ? '✓ Đã hoàn thành' : 'Đang làm'}
                    </span>
                  </div>

                  <p class="text-xs text-slate-600 pl-7 sm:pl-8">${d.task}</p>

                  <div class="pl-7 sm:pl-8 pt-1 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span class="text-xs font-medium text-slate-500 whitespace-nowrap">${d.inputPrompt}</span>
                    <input type="text" value="${savedNote}" 
                           onchange="APP.saveChallengeNote(${d.day}, this.value)" 
                           placeholder="${d.placeholder}" 
                           class="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- VALUE FLOWER EXERCISE -->
        <div id="valueFlowerSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-white/80 relative">
          <div id="zenToolbar_valueFlowerSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-900 font-serif-title">${ch.exercise.valueFlower.title}</h2>
              <p class="text-xs text-slate-500">${ch.exercise.valueFlower.desc}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('valueFlowerSection', 'Bài Tập: Bông Hoa Giá Trị Bản Thân')}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            ${[1, 2, 3, 4, 5].map(i => {
              const val = flowerState[i] || '';
              return `
                <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 shadow-sm">
                  <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
                    ${i}
                  </div>
                  <span class="text-[10px] font-bold text-emerald-700 uppercase block">Cánh hoa ${i}</span>
                  <input type="text" id="petal_${i}" value="${val}"
                         onchange="APP.saveValueFlowerPetal(${i}, this.value)"
                         placeholder="Điểm mạnh ${i}" 
                         class="w-full text-center text-xs px-2.5 py-1.5 rounded-lg border border-emerald-200 bg-white font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- ========================================================================= -->
        <!-- NGÀY 11: THỬ THÁCH DU HÀNH THỜI GIAN — TO ME IN THE FUTURE (TÍCH HỢP TRONG C4) -->
        <!-- ========================================================================= -->
        <div id="day11FutureLetterSection" class="future-letter-envelope rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl border-2 border-pink-300 relative">
          <div id="zenToolbar_day11FutureLetterSection"></div>

          <!-- Section Banner -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-pink-200">
            <div>
              <span class="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-[10px] font-bold uppercase tracking-wider border border-pink-200">
                Chặng 4: Tái tạo hoàn toàn • Thử thách Ngày 11
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title mt-1">
                TO ME IN THE FUTURE <span class="text-pink-600">— Du Hành Thời Gian</span>
              </h2>
            </div>
            ${COMPONENTS.renderFullscreenButton('day11FutureLetterSection', 'Thư Gửi Tôi Trong Tương Lai (TO ME IN THE FUTURE)')}
          </div>

          <!-- Guided Questions (From PDF Page 40) -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white/90 border border-pink-200 space-y-2 shadow-sm">
            <h4 class="text-xs font-bold text-pink-800 uppercase flex items-center space-x-1.5">
              <i class="fas fa-compass text-pink-500"></i>
              <span>Câu hỏi gợi mở đồng hành cùng bạn (PDF Trang 40):</span>
            </h4>
            <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Ở hiện tại, cậu đang phải đối mặt với những áp lực gì?</li>
              <li>Cậu đã cố gắng như thế nào để đi qua khoảng thời gian khó khăn này?</li>
              <li>Hành trình đồng hành cùng <strong>"From Burnout to Burn Bright"</strong> đã mang lại cho cậu những trải nghiệm như thế nào?</li>
              <li>Nếu có thể gửi một lời nhắn đến bản thân trong tương lai, cậu sẽ nói gì?</li>
            </ul>
          </div>

          <!-- Letter Writing Paper (Styled like PDF Page 41) -->
          <form onsubmit="APP.handleCreateFutureLetter(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Dear (Người nhận)</label>
                <input type="text" id="letRecipient" required placeholder="Dear Tôi của tương lai..." value="Tôi của ngày mai"
                       class="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xs font-bold text-slate-800">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mốc thời gian gửi trong tương lai</label>
                <input type="date" id="letUnlockDate" required min="${tomorrowStr}" value="2030-10-20"
                       class="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xs font-bold text-slate-800">
                <span class="text-[10px] text-pink-600 mt-0.5 block">Ví dụ: 20/10/2030, 01/01/2028...</span>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email nhận thư tự động</label>
                <input type="email" id="letTargetEmail" required placeholder="sinhvien@vnu.edu.vn" value="${user ? user.email : ''}"
                       class="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xs font-bold text-slate-800">
                <span class="text-[10px] text-slate-400 mt-0.5 block">Hệ thống sẽ gửi thư về mail này</span>
              </div>
            </div>

            <!-- Letter Body (Ruled paper texture) -->
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nội dung bức thư</label>
              <textarea id="letContent" rows="7" required minlength="10" 
                        placeholder="Chào cậu, khi cậu đọc được bức thư này, chắc hẳn cậu đã đi qua một chặng đường dài. Cảm ơn cậu vì đã luôn kiên cường, không bỏ cuộc giữa những ngày giông bão..." 
                        class="w-full p-4 rounded-2xl letter-paper border border-pink-200 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"></textarea>
            </div>

            <!-- Footer: With Love & Action Button -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div class="flex items-center space-x-2">
                <span class="text-xs font-bold text-pink-900">With Love,</span>
                <input type="text" id="letSignature" placeholder="Tên của bạn" value="${user ? user.name : ''}" 
                       class="px-3 py-1.5 rounded-xl border border-pink-200 bg-white text-xs font-bold text-slate-800">
              </div>

              <button type="submit" class="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-pink-200 transition-all flex items-center justify-center space-x-2 text-xs sm:text-sm">
                <div class="wax-seal w-6 h-6 text-xs mr-1"><i class="fas fa-stamp"></i></div>
                <span>Niêm Phong Sáp & Lên Lịch Gửi Về Mail</span>
              </button>
            </div>
          </form>

          <!-- List of Sealed / Scheduled Future Letters -->
          ${letters.length > 0 ? `
            <div class="pt-6 border-t border-pink-200 space-y-3">
              <h4 class="text-xs font-bold text-pink-900 uppercase flex items-center justify-between">
                <span><i class="fas fa-box-archive mr-1 text-pink-500"></i> Hộp Thư Đã Niêm Phong Của Bạn (${letters.length})</span>
                <span class="text-[10px] text-pink-600 font-normal">Sẽ tự động gửi tới email khi đến ngày hẹn</span>
              </h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${letters.map(l => {
                  const status = window.SERVICES.FutureLetter.checkLetterStatus(l);
                  return `
                    <div class="p-4 rounded-2xl bg-white border border-pink-200 shadow-sm space-y-2 relative overflow-hidden">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-900">${l.recipient}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${status.isLocked ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                          ${status.isLocked ? '🔒 Đang Niêm Phong' : '📬 Đã Đến Hẹn'}
                        </span>
                      </div>

                      <div class="text-[11px] text-slate-600 flex items-center space-x-1">
                        <i class="fas fa-calendar-day text-pink-500"></i>
                        <span>Ngày hẹn mở: <strong>${l.unlockDate}</strong></span>
                      </div>

                      <div class="text-[11px] text-slate-500 flex items-center space-x-1">
                        <i class="fas fa-envelope text-teal-600"></i>
                        <span>Gửi tới: <strong>${l.targetEmail || user?.email}</strong></span>
                      </div>

                      <div class="pt-1 flex items-center justify-between">
                        <span class="text-[10px] text-pink-700 font-bold">${status.label}</span>
                        <button onclick="APP.previewLetterModal('${l.id}')" class="px-2.5 py-1 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-lg text-[10px] font-bold transition-colors">
                          <i class="fas fa-eye mr-1"></i> Xem phong bì
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 10. FAVORITES PAGE COMPONENT
  // =========================================================================
  renderFavoritesPage: function(user, favorites) {
    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div class="text-center space-y-2">
          <span class="px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            <i class="fas fa-bookmark text-amber-600 mr-1"></i> Kho Lưu Trữ Cá Nhân
          </span>
          <h1 class="text-3xl font-extrabold text-slate-900 font-serif-title">Mục Yêu Thích Của Bạn</h1>
          <p class="text-xs text-slate-500">Tất cả bài học, công cụ và kỹ thuật bạn đã đánh dấu để xem lại nhanh</p>
        </div>

        ${favorites.length === 0 ? `
          <div class="glass-card rounded-3xl p-12 text-center space-y-4 border border-white/80 shadow-md">
            <div class="w-16 h-16 rounded-full bg-amber-50 text-amber-500 text-2xl flex items-center justify-center mx-auto">
              <i class="fas fa-bookmark"></i>
            </div>
            <h3 class="text-base font-bold text-slate-800">Chưa có mục yêu thích nào</h3>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">Hãy bấm vào nút "Lưu Yêu thích" ở các chương học hoặc công cụ để lưu lại xem sau nhé!</p>
            <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md">
              Khám phá Chương 1
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${favorites.map(f => `
              <div class="glass-card rounded-2xl p-5 border border-white/80 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">${f.category}</span>
                    <button onclick="APP.toggleFavorite({ id: '${f.id}' })" class="text-amber-500 hover:text-rose-500 text-xs">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900">${f.title}</h3>
                  <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">${f.snippet}</p>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-[10px] text-slate-400">Đã lưu: ${new Date(f.savedAt).toLocaleDateString('vi-VN')}</span>
                  <button onclick="APP.navigateTo('${f.path}')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
                    <span>Mở ngay</span> <i class="fas fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },

  // =========================================================================
  // 11. USER DASHBOARD / PROGRESS COMPONENT
  // =========================================================================
  renderDashboardPage: function(user, userProgress, streakInfo) {
    if (!user) {
      return COMPONENTS.renderAuthGate();
    }

    const testScore = userProgress?.progress?.ch1?.testResult?.score || 0;
    const challengeDoneCount = Object.values(userProgress?.progress?.ch4?.challenge11Days || {}).filter(c => c.completed).length;
    const overall = window.SERVICES.Progress.getOverallProgress(user.id);
    const lettersCount = (userProgress?.futureLetters || []).length;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- User Info Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-full bg-emerald-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
              ${user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 font-serif-title">${user.name}</h1>
              <p class="text-xs font-semibold text-emerald-600">${user.role} • ${user.email}</p>
            </div>
          </div>

          <div class="flex items-center space-x-6 text-right">
            <div>
              <span class="text-xs font-bold text-orange-600 block"><i class="fas fa-fire mr-1"></i>Streak</span>
              <span class="text-2xl font-extrabold text-slate-900">${streakInfo.count} Ngày</span>
            </div>
            <div>
              <span class="text-xs font-bold text-slate-500 block">Tổng tiến độ</span>
              <span class="text-3xl font-extrabold text-emerald-600 font-serif-title">${overall}%</span>
            </div>
          </div>
        </div>

        <!-- 4 Chapter Progress Bars -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-white/80 shadow-md">
          <h3 class="text-base font-bold text-slate-900 font-serif-title">Tiến Độ Theo Từng Chương Học</h3>
          
          <div class="space-y-3">
            ${window.APP_DATA.chapters.map(ch => {
              const cp = window.SERVICES.Progress.calculateChapterProgress(user.id, ch.id);
              return `
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-bold">
                    <span class="text-slate-800">${ch.title}</span>
                    <span class="text-emerald-700">${cp}%</span>
                  </div>
                  <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r ${ch.color}" style="width: ${cp}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Stats Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card rounded-2xl p-6 border border-emerald-100 space-y-2">
            <span class="text-xs font-bold text-slate-500">Chỉ số Kiệt Sức (Chương 1)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${testScore ? testScore.toFixed(2) + ' / 5.0' : 'Chưa test'}</div>
            <p class="text-xs text-slate-500">${testScore ? 'Đã lưu từ bài đánh giá 12 câu' : 'Hãy làm bài test ở Chương 1'}</p>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-sky-100 space-y-2">
            <span class="text-xs font-bold text-slate-500">Thử thách 11 Ngày (Chương 4)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${challengeDoneCount} / 11 Ngày</div>
            <p class="text-xs text-slate-500">${Math.round((challengeDoneCount / 11) * 100)}% hoàn thành nhiệm vụ</p>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-pink-100 space-y-2">
            <span class="text-xs font-bold text-slate-500">Thư Gửi Tương Lai (Chương 4)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${lettersCount} Bức thư</div>
            <p class="text-xs text-slate-500">Đã lên lịch gửi về mail tự động</p>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 12. PROJECT INTRO PAGE COMPONENT
  // =========================================================================
  renderProjectIntroPage: function() {
    const info = window.APP_DATA.projectInfo;
    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <div class="text-center space-y-4">
          <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            Giới thiệu Dự án Nâng cao Sức khỏe Tinh thần
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 font-serif-title">${info.title}</h1>
          <p class="text-sm font-semibold text-emerald-600">${info.subtitle}</p>
        </div>

        <div class="glass-card rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl border border-white/80">
          <div class="flex items-center space-x-4 pb-6 border-b border-slate-100">
            <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 text-2xl flex items-center justify-center">
              <i class="fas fa-university"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900">${info.author}</h3>
              <p class="text-xs text-slate-500">Đơn vị chủ trì thực hiện dự án nghiên cứu & hỗ trợ sinh viên</p>
            </div>
          </div>

          <div class="prose max-w-none text-slate-700 space-y-4 text-xs sm:text-sm leading-relaxed">
            <h4 class="text-base font-bold text-slate-900">Lời nói đầu</h4>
            <p>
              Nếu bạn đang trải qua một giai đoạn áp lực trong hành trình học tập của mình — những bài tập dồn dập, các kỳ thi nối tiếp nhau, hoạt động ngoại khóa, nghiên cứu khoa học hay những băn khoăn về định hướng nghề nghiệp... khiến bạn cảm thấy mệt mỏi và dần mất đi động lực. Bạn đã từng thật sự nỗ lực rất nhiều, nhưng dần dần bạn cảm thấy mình mệt và trống rỗng - như thể ngọn lửa nhiệt huyết bên trong đang nhỏ dần đi lúc nào không hay.
            </p>
            <p>
              Đó chính là trạng thái kiệt sức trong học tập (<strong>Academic Burnout</strong>). Đây không phải là một điều gì quá xa lạ hay "bất thường". Trên thực tế, rất nhiều sinh viên đã và đang trải qua cảm giác này ở một thời điểm nào đó trong hành trình đại học của mình.
            </p>
            <p>
              Thấu hiểu được điều đó, chúng mình muốn tạo ra một <strong>không gian an toàn</strong>, nơi bạn có thể dừng chân, sạc lại năng lượng và lắng nghe bản thân. <em>"From Burnout to Burn Bright"</em> sẽ đồng hành cùng bạn nhìn lại hành trình của bản thân, gọi tên những cảm xúc nằm sâu bên trong và dần tìm lại sự kết nối với chính mình.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-3 shadow-lg">
            <div class="flex items-center space-x-2 text-amber-300 font-bold text-sm">
              <i class="fas fa-fire"></i>
              <span>Thông Điệp Cốt Lõi</span>
            </div>
            <p class="text-xs sm:text-sm font-medium leading-relaxed">
              "Hãy ghi nhớ rằng <strong>Burn Bright</strong> không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn."
            </p>
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transition-all text-sm inline-flex items-center space-x-3">
            <span>Bắt đầu Chương 1 Ngay</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }
};
