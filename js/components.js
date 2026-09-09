/**
 * Component renderers for ULIS "From Burnout to Burn Bright"
 * Trang trí chuẩn theo trang bìa sổ tay Canva (Forest & Meadow, Animal Companions, Pastel Theme)
 * Tích hợp toàn bộ nội dung từ 78 Trang Sổ Tay Tâm Lý ULIS - VNU
 */

window.COMPONENTS = {

  // =========================================================================
  // 1. AUTH GATE COMPONENT (HIỂN THỊ ĐẦU TIÊN KHI CHƯA ĐĂNG NHẬP)
  // =========================================================================
  renderAuthGate: function(activeTab = 'login', errorMsg = null, emailDraft = '') {
    const info = window.APP_DATA.projectInfo;

    return `
      <div id="authGateSection" class="min-h-screen flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#f5fbf7] via-[#faf8f5] to-[#f0f8f4]">
        <!-- Ambient decorative foliage & sunlight blobs -->
        <div class="absolute -right-24 -top-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
        <div class="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl -z-10"></div>
        <div class="absolute right-1/3 bottom-10 w-80 h-80 bg-teal-100/40 rounded-full blur-2xl -z-10"></div>

        <!-- Top Branding Header -->
        <div class="max-w-5xl mx-auto w-full text-center space-y-3 pt-2">
          <div class="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold border border-emerald-300/80 shadow-sm">
            <i class="fas fa-university text-emerald-600"></i>
            <span>Dự án Nghiên cứu & Chăm sóc Sức khỏe Tinh thần — ULIS - VNU</span>
          </div>

          <div class="flex items-center justify-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-200 animate-float">
              <i class="fas fa-fire-flame-curved"></i>
            </div>
            <div class="text-left">
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent font-serif-title leading-tight">
                From Burnout to <span class="text-emerald-600">Burn Bright</span>
              </h1>
              <span class="text-[11px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block">Trường Đại học Ngoại ngữ — Đại học Quốc gia Hà Nội</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto italic">
            "${info.quote}"
          </p>
        </div>

        <!-- Main Auth Gate Card (Split Layout: Cover Art & Auth Form) -->
        <div class="max-w-5xl mx-auto w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left: Handbook Cover Showcase & Animal Companions -->
          <div class="lg:col-span-5 flex flex-col items-center text-center space-y-4">
            <div class="relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/95 max-w-[270px] sm:max-w-[300px] bg-white">
                <img src="${info.coverImage}" alt="${info.title}" class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-300" onerror="this.src='https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'">
                <div class="p-3 bg-white/95 border-t border-emerald-100">
                  <div class="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Ấn bản Sổ tay Đồng hành</div>
                  <div class="text-[10px] text-slate-500 font-medium">ULIS - VNU © 2026</div>
                </div>
              </div>
            </div>

            <!-- Cute Companions Badges -->
            <div class="w-full max-w-sm space-y-2">
              <div class="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-center space-x-1">
                <span>🐾 Những người bạn đồng hành</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                ${info.companions.map(c => `
                  <div class="px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center space-x-1.5 shadow-sm ${c.class}">
                    <span class="text-base">${c.icon}</span>
                    <div class="text-left">
                      <div class="font-extrabold text-[11px] leading-tight">${c.name}</div>
                      <div class="text-[9px] opacity-80 font-normal leading-tight">${c.role}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Login & Registration Card -->
          <div class="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-white/95 relative bg-white/90">
            <!-- Mode Toggle Tabs -->
            <div class="flex rounded-2xl bg-slate-100/90 p-1 mb-6 border border-slate-200">
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
                           class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu</label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-lock"></i></span>
                    <input type="password" id="loginPassword" required value="password123" placeholder="••••••••" 
                           class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-[11px] text-slate-400">Tài khoản mẫu: thuha.ulis@vnu.edu.vn (Pass: password123)</span>
                  </div>
                </div>

                <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
                  <i class="fas fa-arrow-right-to-bracket"></i>
                  <span>Đăng Nhập & Mở Khóa Sổ Tay</span>
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
                           class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email Sinh Viên (Dùng để nhận thư tương lai)</label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-envelope"></i></span>
                    <input type="email" id="regEmail" required placeholder="student@vnu.edu.vn" 
                           class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu (Tối thiểu 6 ký tự)</label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm"><i class="fas fa-lock"></i></span>
                    <input type="password" id="regPassword" required minlength="6" placeholder="••••••••" 
                           class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Đối tượng / Vai trò</label>
                  <select id="regRole" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold">
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
            <div class="relative my-4 text-center">
              <span class="bg-white px-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">Hoặc tiếp tục nhanh</span>
              <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 -z-10"></div>
            </div>

            <button onclick="APP.loginAsGuest()" class="w-full bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold py-3 rounded-xl border border-slate-200 hover:border-emerald-300 text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-sm">
              <i class="fas fa-user-clock text-emerald-600"></i>
              <span>Trải nghiệm nhanh dưới dạng Bạn Đọc Khách (1-Click)</span>
            </button>
          </div>
        </div>

        <!-- Theory Models Overview Grid (SBI, COR, Lazarus, Self-Compassion) -->
        <div class="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left pb-2">
          ${window.APP_DATA.projectInfo.theoryModels.map(m => `
            <div class="p-3.5 rounded-2xl bg-white/85 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-1.5 hover:shadow-md transition-all">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">
                  <i class="fas ${m.icon}"></i>
                </span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 font-serif-title">${m.name}</span>
              </div>
              <div class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">${m.author}</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">${m.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Footer -->
        <div class="text-center text-xs text-slate-500 space-y-1 pt-2">
          <div>Trường Đại học Ngoại ngữ — Đại học Quốc gia Hà Nội (ULIS - VNU)</div>
          <div class="text-[11px] text-slate-400">From Burnout to Burn Bright © 2026</div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 2. NAVBAR COMPONENT (Tiêu đề đầy đủ, Menu không viết tắt, Fullscreen & Dark Mode)
  // =========================================================================
  renderNavbar: function(user, activePage, streakInfo, unreadNotifsCount, favsCount, audioState) {
    const isPlaying = audioState && audioState.isPlaying;
    const isAdmin = window.SERVICES?.Auth?.isAdmin ? window.SERVICES.Auth.isAdmin(user) : false;
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

    return `
      <header class="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/90 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 shadow-sm transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            
            <!-- Left: Logo & Full Handbook Title -->
            <div class="flex items-center space-x-3 cursor-pointer" onclick="APP.navigateTo('home')">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white text-xl shadow-md shadow-emerald-200 animate-float">
                <i class="fas fa-fire-flame-curved"></i>
              </div>
              <div>
                <div class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-serif-title leading-tight flex items-center space-x-1.5">
                  <span>From Burnout to Burn Bright</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">ULIS</span>
                </div>
                <div class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">ĐH Ngoại ngữ - ĐHQGHN</div>
              </div>
            </div>

            <!-- Middle: Desktop Navigation Links (Không viết tắt là chữ C) -->
            <nav class="hidden lg:flex items-center space-x-1 text-xs font-bold">
              <button onclick="APP.navigateTo('home')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                <i class="fas fa-home mr-1"></i> TRANG CHỦ
              </button>

              <button onclick="APP.navigateTo('intro')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'intro' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                <i class="fas fa-book-open mr-1"></i> GIỚI THIỆU SỔ TAY
              </button>

              <button onclick="APP.navigateTo('ch1')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'ch1' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                CHƯƠNG 1
              </button>

              <button onclick="APP.navigateTo('ch2')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'ch2' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                CHƯƠNG 2
              </button>

              <button onclick="APP.navigateTo('ch3')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'ch3' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                CHƯƠNG 3
              </button>

              <button onclick="APP.navigateTo('ch4')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'ch4' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                CHƯƠNG 4
              </button>

              <button onclick="APP.navigateTo('favorites')" 
                      class="px-2.5 py-2 rounded-xl transition-all relative ${activePage === 'favorites' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                <i class="fas fa-bookmark mr-1"></i> MỤC YÊU THÍCH
                ${favsCount > 0 ? `<span class="ml-1 px-1.5 py-0.2 bg-amber-500 text-white rounded-full text-[9px]">${favsCount}</span>` : ''}
              </button>

              <button onclick="APP.navigateTo('dashboard')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'dashboard' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                <i class="fas fa-chart-line mr-1"></i> THEO DÕI TIẾN ĐỘ
              </button>

              ${isAdmin ? `
              <button onclick="APP.navigateTo('admin')" 
                      class="px-2.5 py-2 rounded-xl transition-all ${activePage === 'admin' ? 'bg-indigo-600 text-white font-extrabold shadow-sm' : 'text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/70 hover:bg-indigo-100 font-bold'}">
                <i class="fas fa-chart-pie mr-1"></i> THỐNG KÊ
              </button>
              ` : ''}
            </nav>

            <!-- Right: Interactive Controls (Fullscreen & Dark/Light Mode) -->
            <div class="flex items-center space-x-1.5 sm:space-x-2.5">
              
              <!-- Fullscreen Button -->
              <button onclick="APP.toggleFullScreen()" id="fullscreenToggleBtn" title="Chế độ toàn màn hình" 
                      class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-700 flex items-center justify-center transition-all text-xs border border-slate-200 dark:border-slate-700">
                <i class="fas fa-expand"></i>
              </button>

              <!-- Dark / Light Mode Toggle -->
              <button onclick="APP.toggleTheme()" id="themeToggleBtn" title="Chuyển chế độ Sáng / Tối" 
                      class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-amber-500 flex items-center justify-center transition-all text-xs border border-slate-200 dark:border-slate-700">
                <i id="themeToggleIcon" class="fas ${isDark ? 'fa-sun text-amber-400' : 'fa-moon'}"></i>
              </button>

              <!-- Search Modal Button -->
              <button onclick="APP.openSearchModal()" title="Tìm kiếm nhanh" 
                      class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-700 flex items-center justify-center transition-all text-xs border border-slate-200 dark:border-slate-700">
                <i class="fas fa-search"></i>
              </button>

              <!-- Sound / BGM Button -->
              <button onclick="APP.toggleAudioPlay()" title="Nhạc nền thư giãn nhẹ nhàng" 
                      class="px-2 sm:px-2.5 py-1.5 rounded-xl border flex items-center space-x-1.5 text-xs font-bold transition-all ${isPlaying ? 'bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'}">
                <i class="fas ${isPlaying ? 'fa-volume-high text-emerald-600' : 'fa-volume-xmark text-slate-400'}"></i>
                <span class="hidden md:inline">${isPlaying ? 'Nhạc: Bật' : 'Nhạc'}</span>
              </button>

              ${isAdmin ? `
              <!-- Database Modal Button (Admin Only) -->
              <button onclick="APP.openDatabaseModal('accounts')" title="Quản trị Cơ sở Dữ liệu & Tài khoản (Chỉ Admin)" 
                      class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 flex items-center justify-center transition-all text-xs border border-indigo-200 dark:border-indigo-800 shadow-sm">
                <i class="fas fa-database"></i>
              </button>
              ` : ''}

              <!-- User Profile & Logout -->
              <div class="flex items-center space-x-1.5 pl-1 border-l border-slate-200 dark:border-slate-700">
                <button onclick="APP.navigateTo('dashboard')" title="${user ? user.name : 'Người dùng'}" 
                        class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-emerald-200 hover:bg-emerald-700 transition-all">
                  ${user ? user.name.charAt(0).toUpperCase() : 'U'}
                </button>
                <button onclick="APP.logout()" title="Đăng xuất" 
                        class="text-slate-400 hover:text-rose-600 text-xs p-1.5 transition-colors">
                  <i class="fas fa-arrow-right-from-bracket"></i>
                </button>
              </div>

              <!-- Mobile Menu Toggle -->
              <button onclick="APP.toggleMobileNav()" class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <i class="fas fa-bars text-lg"></i>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobileNavMenu" class="hidden lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-4 py-3 space-y-1">
          <button onclick="APP.navigateTo('home'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-home mr-2 text-emerald-600"></i> TRANG CHỦ
          </button>
          <button onclick="APP.navigateTo('intro'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-book-open mr-2 text-emerald-600"></i> GIỚI THIỆU SỔ TAY
          </button>
          <button onclick="APP.navigateTo('ch1'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-search mr-2 text-emerald-600"></i> CHƯƠNG 1
          </button>
          <button onclick="APP.navigateTo('ch2'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-puzzle-piece mr-2 text-sky-600"></i> CHƯƠNG 2
          </button>
          <button onclick="APP.navigateTo('ch3'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-sync-alt mr-2 text-amber-600"></i> CHƯƠNG 3
          </button>
          <button onclick="APP.navigateTo('ch4'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-seedling mr-2 text-pink-600"></i> CHƯƠNG 4
          </button>
          <button onclick="APP.navigateTo('favorites'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-bookmark mr-2 text-amber-500"></i> MỤC YÊU THÍCH (${favsCount})
          </button>
          <button onclick="APP.navigateTo('dashboard'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800">
            <i class="fas fa-chart-line mr-2 text-teal-600"></i> THEO DÕI TIẾN ĐỘ
          </button>
          ${isAdmin ? `
          <button onclick="APP.navigateTo('admin'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/90 dark:bg-indigo-950/80 hover:bg-indigo-100">
            <i class="fas fa-chart-pie mr-2 text-indigo-600"></i> THỐNG KÊ QUẢN TRỊ
          </button>
          <button onclick="APP.openDatabaseModal('accounts'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/60 hover:bg-indigo-100">
            <i class="fas fa-database mr-2 text-indigo-600"></i> QUẢN TRỊ CƠ SỞ DỮ LIỆU
          </button>
          ` : ''}
        </div>
      </header>
    `;
  },

  // =========================================================================
  // 3. FLOATING AUDIO PLAYER WIDGET
  // =========================================================================
  renderFloatingAudioWidget: function(audioState) {
    const isPlaying = audioState && audioState.isPlaying;
    const currentTrack = audioState ? audioState.currentTrack : 'lofi';
    const volume = audioState ? Math.round(audioState.volume * 100) : 35;

    return `
      <div id="floatingAudioPlayer" class="fixed bottom-4 right-4 z-40 glass-card rounded-2xl p-3 border border-emerald-200 shadow-xl flex items-center space-x-3 transition-all duration-300">
        <button onclick="APP.toggleAudioPlay()" class="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-200 text-sm">
          <i class="fas ${isPlaying ? 'fa-pause' : 'fa-play'}"></i>
        </button>

        <div class="space-y-1">
          <div class="flex items-center space-x-2">
            <span class="text-[11px] font-bold text-slate-800 flex items-center">
              <i class="fas fa-music text-emerald-600 mr-1"></i> Nhạc Nền
            </span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full ${isPlaying ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}">
              ${isPlaying ? 'Đang phát' : 'Tạm dừng'}
            </span>
          </div>

          <div class="flex items-center space-x-2">
            <select onchange="APP.changeAudioTrack(this.value)" class="text-[10px] font-semibold bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500">
              <option value="lofi" ${currentTrack === 'lofi' ? 'selected' : ''}>Lo-fi Yên Bình</option>
              <option value="nature" ${currentTrack === 'nature' ? 'selected' : ''}>Tiếng Rừng Cây</option>
              <option value="piano" ${currentTrack === 'piano' ? 'selected' : ''}>Piano Dịu Êm</option>
            </select>

            <input type="range" min="0" max="100" value="${volume}" oninput="APP.setAudioVolume(this.value / 100)" class="w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" title="Âm lượng">
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 4. FULLSCREEN ZEN MODE BUTTON & TOOLBAR
  // =========================================================================
  renderFullscreenButton: function(exerciseId, title) {
    return `
      <button onclick="APP.toggleExerciseFullscreen('${exerciseId}', '${title}')" 
              class="zen-btn px-3 py-1.5 rounded-xl border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-bold transition-all flex items-center space-x-1.5 shadow-sm">
        <i class="fas fa-expand text-emerald-600"></i>
        <span>Toàn Màn Hình</span>
      </button>
    `;
  },

  renderFullscreenZenToolbar: function(exerciseId, title) {
    return `
      <div class="fullscreen-zen-toolbar flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm shadow">
            <i class="fas fa-spa"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-800">${title}</div>
            <div class="text-[10px] text-emerald-600">Không gian làm bài tập tập trung — Thoát bằng Esc</div>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button onclick="APP.toggleAudioPlay()" class="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-bold">
            <i class="fas fa-volume-high mr-1"></i> BGM
          </button>
          <button onclick="APP.exitExerciseFullscreen()" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-[11px] font-bold flex items-center space-x-1">
            <i class="fas fa-compress"></i>
            <span>Thoát Toàn Màn Hình</span>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 5. HOME PAGE COMPONENT (Trang trí theo trang bìa sổ tay & Chuẩn hóa yêu cầu)
  // =========================================================================
  renderHomePage: function(user, overallProgress, streakInfo) {
    const info = window.APP_DATA.projectInfo;

    return `
      <div class="space-y-12 pb-16">
        <!-- Hero Section: Split Layout with Handbook Cover Page -->
        <section id="heroSection" class="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-10 lg:p-12 border border-emerald-100 dark:border-slate-800 shadow-xl bg-gradient-to-br from-white/90 via-[#f7fbf8]/80 to-[#f2f8f4]/90 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-950/90">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
          <div class="absolute -left-20 -top-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left: Hero Text -->
            <div class="lg:col-span-7 space-y-5">
              <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                <i class="fas fa-university text-emerald-600"></i>
                <span>${info.badgeText}</span>
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-title text-slate-900 dark:text-white leading-tight">
                From Burnout to <span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Burn Bright</span>
              </h1>

              <p class="text-xs sm:text-sm font-extrabold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                ${info.subtitle}
              </p>

              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                ${info.description}
              </p>

              <!-- Central Quote Box -->
              <div class="p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium italic flex items-start space-x-3 shadow-sm">
                <i class="fas fa-quote-left text-amber-500 text-lg mt-0.5"></i>
                <div>
                  <span>"${info.quote}"</span>
                </div>
              </div>

              <!-- 5 Nhân vật đồng hành (Lusi nhân vật chính + các con vật bỏ từ Bé) -->
              <div class="space-y-2 pt-1">
                <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">🐾 5 Nhân vật đồng hành cùng bạn trong sổ tay:</span>
                <div class="flex flex-wrap gap-2">
                  ${info.companions.map(c => `
                    <span class="px-3 py-1.5 rounded-full border text-xs font-bold flex items-center space-x-1.5 shadow-sm ${c.class} dark:bg-slate-800 dark:border-slate-700">
                      <span>${c.icon}</span>
                      <span>${c.name}</span>
                      <span class="text-[10px] opacity-70 font-normal">(${c.role})</span>
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Right: Prominent Handbook Cover Display (Bỏ dòng chữ banner theo yêu cầu) -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center">
              <div class="relative group">
                <div class="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-white dark:bg-slate-800">
                  <img src="${info.coverImage}" alt="Trang bìa sổ tay From Burnout to Burn Bright" class="w-full max-w-[320px] h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-300">
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- Lời Ngỏ Từ Nhóm Tác Giả & Chuyên Gia -->
        <section class="space-y-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif-title">Lời ngỏ từ nhóm tác giả & chuyên gia</h2>
            <p class="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">Được nghiên cứu và xây dựng bài bản dựa trên nền tảng Tâm lý học trường học</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Expert Review Card -->
            <div class="glass-card rounded-2xl p-6 border border-emerald-100 dark:border-slate-800 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-sm flex-shrink-0">
                    <img src="${info.chuyenGiaImage}" alt="Chuyên gia" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Đánh giá chuyên môn</span>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white font-serif-title">Lời giới thiệu từ chuyên gia tâm lý học</h3>
                  </div>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic line-clamp-4">
                  "${info.chuyenGiaText.slice(0, 220)}..."
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Cố vấn Chuyên môn Tâm lý học</span>
                <button onclick="APP.navigateTo('intro')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center space-x-1">
                  <span>Đọc toàn văn</span> <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Preface Card -->
            <div class="glass-card rounded-2xl p-6 border border-amber-100 dark:border-slate-800 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-300 shadow-sm flex-shrink-0">
                    <img src="${info.loiMoDauImage}" alt="Lời mở đầu" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">Thư gửi sinh viên</span>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white font-serif-title">Lời mở đầu từ nhóm tác giả</h3>
                  </div>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic line-clamp-4">
                  "${info.loiMoDauText.slice(0, 220)}..."
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Nhóm Tác giả ULIS - VNU</span>
                <button onclick="APP.navigateTo('intro')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center space-x-1">
                  <span>Đọc toàn văn</span> <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- 4 Chặng Hành Trình Phục Hồi -->
        <section class="space-y-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif-title">4 Chặng hành trình phục hồi</h2>
            <p class="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">Kết hợp lý thuyết chuẩn hóa tâm lý học cùng các công cụ bài tập tương tác</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${window.APP_DATA.chapters.map(ch => `
              <div onclick="APP.navigateTo('${ch.slug}')" class="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-emerald-100 dark:border-slate-800 group flex flex-col justify-between bg-white/90 dark:bg-slate-900/90">
                <div>
                  <div class="relative h-44 overflow-hidden">
                    <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-sm">
                      ${ch.badge}
                    </div>
                  </div>

                  <div class="p-5 space-y-2">
                    <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors font-serif-title">${ch.title}</h3>
                    <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 leading-snug line-clamp-3">${ch.subtitle}</p>
                  </div>
                </div>

                <div class="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Khám phá & Làm bài tập</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Decorative Philosophy Section (Thay cho 4 ô stats khô cứng) -->
        <section class="rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-800 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900 shadow-sm text-center max-w-4xl mx-auto space-y-3">
          <div class="inline-flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            <i class="fas fa-sparkles text-amber-500"></i>
            <span>Thông điệp cốt lõi từ cuốn sổ tay</span>
          </div>
          <blockquote class="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 font-serif-title italic max-w-2xl mx-auto">
            “Burn Bright không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.”
          </blockquote>
          <p class="text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Hành trình phục hồi năng lượng học tập không bắt đầu bằng sự gượng ép, mà bắt đầu từ khoảnh khắc bạn cho phép mình được dừng lại, thấu hiểu và ôm lấy chính mình.
          </p>
        </section>
      </div>
    `;
  },

  // =========================================================================
  // 6. CHAPTER 1 COMPONENT (Nhận diện & Thang đo SBI 9 Câu)
  // =========================================================================
  renderChapter1: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[0];
    const quiz = ch.quiz;
    const progressObj = userProgress?.progress || userProgress;
    const testResult = progressObj?.ch1?.testResult || window.APP?.state?.activeTestResult || null;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header Banner with Cover Art -->
        <div class="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-lg">
          <div class="relative h-48 sm:h-56 bg-slate-900">
            <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover opacity-85">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div class="text-white space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500 text-white">${ch.badge}</span>
                <h1 class="text-2xl sm:text-3xl font-extrabold font-serif-title">${ch.title}</h1>
                <p class="text-xs sm:text-sm text-slate-200">${ch.subtitle}</p>
              </div>

              <button onclick="APP.toggleFavorite({ id: 'ch1', title: '${ch.title}', chapterId: 1, category: 'Bài học & SBI Test', snippet: '${ch.subtitle}', path: 'ch1' })" 
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 border-white text-slate-700 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Theory Section: Burnout vs Stress -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-white/80 bg-white/90">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-book-open text-emerald-600"></i>
            <span>1. Lý Thuyết: ${ch.theory.burnoutVsStress.title}</span>
          </h2>

          <div class="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold italic flex items-start space-x-3 shadow-sm">
            <i class="fas fa-quote-left text-amber-500 text-lg mt-0.5"></i>
            <div>
              <span>"${ch.theory.burnoutVsStress.quote}"</span>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3">
            <p>${ch.theory.intro}</p>
            <p>${ch.theory.burnoutVsStress.content}</p>
            <div class="text-[11px] text-slate-400 italic pt-1">Trích dẫn: ${ch.theory.burnoutVsStress.reference}</div>
          </div>

          <!-- 3 Manifestations Cards -->
          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-800">3 Biểu Hiện Điển Hình Của Academic Burnout:</h3>
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
          </div>
        </div>

        <!-- Standardized SBI Quiz Section -->
        <div id="quizSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-emerald-200 relative bg-white/95">
          <!-- Fullscreen Toolbar placeholder if active -->
          <div id="zenToolbar_quizSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">${quiz.reference}</span>
              <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-clipboard-check text-emerald-600"></i>
                <span>2. ${quiz.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${quiz.instructions}</p>
            </div>

            <!-- Fullscreen button -->
            ${COMPONENTS.renderFullscreenButton('quizSection', 'Thang đo Đánh Giá Academic Burnout (SBI)')}
          </div>

          <!-- Rating Scale Legend -->
          <div class="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-[11px] font-semibold text-emerald-900 flex flex-wrap gap-x-4 gap-y-1">
            ${quiz.scale.map(s => `<span><strong>${s.label.split(' - ')[0]}:</strong> ${s.label.split(' - ')[1]}</span>`).join('')}
          </div>

          <!-- Questions List -->
          <form id="burnoutForm" onsubmit="APP.calculateBurnoutScore(event)" class="space-y-4">
            ${quiz.questions.map((q, qIdx) => {
              const savedAns = testResult?.answers?.[qIdx];
              return `
                <div class="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-emerald-300 transition-colors">
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

            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-200 text-xs sm:text-sm transition-all flex items-center justify-center space-x-2">
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
        <div class="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium max-w-lg mx-auto text-left">
          <strong>💡 Lời khuyên dành cho bạn:</strong> ${interpretation.advice}
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
  // 7. CHAPTER 2 COMPONENT (Giải mã & Mô hình Tảng Băng Trôi chân thực)
  // =========================================================================
  renderChapter2: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[1];
    const progressObj = userProgress?.progress || userProgress;
    const savedIceberg = progressObj?.ch2?.iceberg;
    const savedMemory = progressObj?.ch2?.memoryReflection || '';

    const floatingItems = savedIceberg?.floating || ch.exercise.defaultFloating;
    const submergedItems = savedIceberg?.submerged || ch.exercise.defaultSubmerged;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header Banner with Cover Art -->
        <div class="glass-card rounded-3xl overflow-hidden border border-white/80 dark:border-slate-800 shadow-lg">
          <div class="relative h-48 sm:h-56 bg-slate-900">
            <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover opacity-85">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div class="text-white space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-500 text-white">${ch.badge}</span>
                <h1 class="text-2xl sm:text-3xl font-extrabold font-serif-title">${ch.title}</h1>
                <p class="text-xs sm:text-sm text-slate-200">${ch.subtitle}</p>
              </div>

              <button onclick="APP.toggleFavorite({ id: 'ch2', title: '${ch.title}', chapterId: 2, category: 'Bài học & Tảng Băng', snippet: '${ch.subtitle}', path: 'ch2' })" 
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 dark:bg-slate-800 border-white dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: "Một Ngày Kiệt Sức Nhất" Reflection Exercise -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-md border border-sky-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white font-serif-title flex items-center space-x-2">
            <i class="fas fa-cloud-moon text-sky-600"></i>
            <span>1. Khoảng lắng: Một ngày kiệt sức nhất</span>
          </h2>

          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${ch.theory.intro}</p>

          <div class="p-5 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 space-y-3">
            <div class="text-xs sm:text-sm font-bold text-sky-900 dark:text-sky-200">
              <i class="fas fa-pencil-alt text-sky-600 mr-1.5"></i>
              ${ch.theory.memoryExercise.prompt}
            </div>

            <textarea id="memoryExerciseInput" rows="3" placeholder="${ch.theory.memoryExercise.placeholder}" 
                      class="w-full p-3.5 rounded-xl border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">${savedMemory}</textarea>

            <div class="flex justify-end">
              <button onclick="APP.saveMemoryReflection()" class="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow transition-all flex items-center space-x-1.5">
                <i class="fas fa-save"></i>
                <span>Lưu dòng suy nghĩ</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 2: The Iceberg Model Theory & Graphic Illustration -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-white/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-full md:w-1/2 space-y-3">
              <span class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Cơ sở tâm lý học</span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white font-serif-title">${ch.theory.scientificSecret.title}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${ch.theory.scientificSecret.content}
              </p>
            </div>
            
            <div class="w-full md:w-1/2 flex justify-center">
              <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-sky-200 dark:border-slate-700 max-w-[280px]">
                <img src="${ch.icebergImage}" alt="Mô hình tảng băng trôi" class="w-full h-auto object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Interactive Iceberg Tool with SVG Realistic Iceberg -->
        <div id="icebergSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-sky-200 dark:border-slate-800 relative bg-white/95 dark:bg-slate-900/95">
          <div id="zenToolbar_icebergSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-serif-title">
                ${ch.exercise.title}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${ch.exercise.description}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('icebergSection', 'Công cụ Mô hình Tảng Băng Trôi')}
          </div>

          <!-- Step-by-step Detailed Guidance -->
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 flex items-start space-x-3">
            <i class="fas fa-lightbulb text-amber-500 text-base mt-0.5"></i>
            <div class="space-y-1">
              <div class="font-bold">Hướng dẫn khám phá tảng băng cảm xúc:</div>
              <p class="leading-relaxed">
                <strong>• Phần Nổi (trên mặt nước):</strong> Những biểu hiện triệu chứng bạn nhìn thấy hàng ngày (mất ngủ, trì hoãn, dễ cáu gắt, lướt điện thoại vô thức).<br>
                <strong>• Phần Chìm (dưới đáy đại dương):</strong> Những nguyên nhân sâu xa, nỗi sợ và kỳ vọng cốt lõi (sợ làm người khác thất vọng, ám ảnh điểm số, sợ bị tụt hậu).<br>
                <em>Hãy quan sát bức tranh tảng băng bên dưới và thêm / bớt các thẻ phù hợp với tâm trạng của bạn lúc này.</em>
              </p>
            </div>
          </div>

          <!-- Iceberg Graphic Display (Realistic Faceted Iceberg with Ocean Life) -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-300 dark:border-sky-800 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-950 min-h-[540px] flex flex-col justify-between p-4 sm:p-6">
            
            <!-- SVG Background: Realistic Iceberg Shape, Ocean Waves, Fish and Bubbles -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <svg class="w-full h-full" viewBox="0 0 600 520" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Sun in the sky -->
                <circle cx="510" cy="55" r="32" fill="#fef08a" opacity="0.75" />
                <circle cx="510" cy="55" r="55" fill="#fef9c3" opacity="0.3" />
                
                <!-- Clouds in sky -->
                <ellipse cx="120" cy="50" rx="45" ry="18" fill="#ffffff" opacity="0.7" />
                <ellipse cx="150" cy="45" rx="35" ry="16" fill="#ffffff" opacity="0.6" />

                <!-- Above Water Ice Mountain (Phần Nổi) -->
                <polygon points="260,35 320,35 395,190 180,190" fill="#e0f2fe" stroke="#bae6fd" stroke-width="2" />
                <polygon points="295,35 320,35 395,190 330,190" fill="#bae6fd" opacity="0.7" />
                <polygon points="260,35 295,120 240,190 180,190" fill="#ffffff" opacity="0.85" />
                <polygon points="295,35 340,110 330,190 295,120" fill="#7dd3fc" opacity="0.5" />
                
                <!-- Waterline Wave -->
                <path d="M0,185 C140,175 280,195 420,180 C500,175 560,188 600,185 L600,520 L0,520 Z" fill="#0284c7" fill-opacity="0.35" />
                <path d="M0,190 C120,198 270,180 410,194 C490,188 550,185 600,190 L600,520 L0,520 Z" fill="#0369a1" fill-opacity="0.5" />
                
                <!-- Colossal Submerged Ice Body (Phần Chìm) -->
                <polygon points="170,190 410,190 480,330 390,490 200,490 110,320" fill="#075985" stroke="#38bdf8" stroke-width="2.5" opacity="0.9" />
                <polygon points="260,190 410,190 480,330 350,370 270,490 200,490" fill="#0c4a6e" opacity="0.85" />
                <polygon points="170,190 260,190 280,350 200,490 110,320" fill="#0284c7" opacity="0.45" />
                
                <!-- Animated Ocean Life: Swimming Fish -->
                <g class="swimming-fish-1">
                  <path d="M 0,270 Q 16,264 26,270 Q 32,260 38,270 Q 32,280 26,270 Q 16,276 0,270 Z" fill="#f59e0b" opacity="0.9" />
                  <circle cx="21" cy="268" r="1.5" fill="#ffffff" />
                </g>
                <g class="swimming-fish-2">
                  <path d="M 0,410 Q 20,402 30,410 Q 36,398 42,410 Q 36,422 30,410 Q 20,418 0,410 Z" fill="#38bdf8" opacity="0.85" />
                  <circle cx="24" cy="407" r="1.5" fill="#ffffff" />
                </g>

                <!-- Soft Rising Bubbles -->
                <circle cx="190" cy="380" r="3" fill="#ffffff" class="bubble-rise-1" />
                <circle cx="420" cy="430" r="4.5" fill="#ffffff" class="bubble-rise-2" />
                <circle cx="250" cy="460" r="2.5" fill="#ffffff" class="bubble-rise-1" />
              </svg>
            </div>

            <!-- Foreground Content Layer -->
            <div class="relative z-10 space-y-6">
              
              <!-- Sky Section: Phần Nổi -->
              <div class="bg-white/85 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl p-4 border border-sky-200/90 dark:border-slate-700 shadow-md">
                <div class="text-xs font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span class="flex items-center"><i class="fas fa-sun text-amber-500 mr-1.5"></i> Phần Nổi (Triệu chứng bề ngoài bạn nhìn thấy)</span>
                  <span class="text-[10px] text-sky-600 dark:text-sky-400 font-semibold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950">Chỉ là phần nhỏ câu chuyện</span>
                </div>
                <div id="floatingTagsContainer" class="flex flex-wrap gap-2">
                  ${floatingItems.map(item => `
                    <span class="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-sky-900 dark:text-sky-100 font-bold text-xs shadow-sm border border-sky-300 dark:border-slate-600 flex items-center space-x-1.5 transition-all hover:scale-105">
                      <span>${item}</span>
                      <button onclick="APP.removeIcebergItem('floating', '${item}')" class="text-slate-400 hover:text-rose-500 ml-1 font-extrabold text-sm" title="Xóa">×</button>
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Underwater Section: Phần Chìm -->
              <div class="bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-sky-500/50 shadow-lg text-white">
                <div class="text-xs font-bold text-sky-200 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span class="flex items-center"><i class="fas fa-water text-cyan-300 mr-1.5"></i> Phần Chìm (Nguyên nhân gốc rễ, áp lực & nỗi sợ)</span>
                  <span class="text-[10px] text-cyan-200 font-semibold px-2 py-0.5 rounded-full bg-sky-900/80 border border-sky-700">Quyết định trạng thái & hành vi</span>
                </div>
                <div id="submergedTagsContainer" class="flex flex-wrap gap-2">
                  ${submergedItems.map(item => `
                    <span class="px-3 py-1.5 rounded-full bg-sky-900/80 text-sky-100 font-bold text-xs shadow border border-sky-400/50 flex items-center space-x-1.5 transition-all hover:scale-105">
                      <span>${item}</span>
                      <button onclick="APP.removeIcebergItem('submerged', '${item}')" class="text-sky-300 hover:text-rose-300 ml-1 font-extrabold text-sm" title="Xóa">×</button>
                    </span>
                  `).join('')}
                </div>
              </div>

            </div>
          </div>

          <!-- Add Item Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">Thêm Biểu hiện Phần Nổi:</label>
              <div class="flex space-x-2">
                <input type="text" id="floatingInput" placeholder="Ví dụ: Đau vai gáy, lướt mạng vô thức..." class="flex-1 px-3.5 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <button onclick="APP.addIcebergItem('floating')" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">Thêm Nguyên nhân Phần Chìm:</label>
              <div class="flex space-x-2">
                <input type="text" id="submergedInput" placeholder="Ví dụ: Sợ làm người khác thất vọng..." class="flex-1 px-3.5 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <button onclick="APP.addIcebergItem('submerged')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-end pt-2">
            <button onclick="APP.saveIcebergData()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center space-x-2">
              <i class="fas fa-check-circle"></i>
              <span>Lưu sơ đồ tảng băng vào tài khoản</span>
            </button>
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('ch3')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center space-x-2">
            <span>Sang Chương 3: Chuyển hóa & Chiếc Ba Lô Lusi</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 8. CHAPTER 3 COMPONENT (Chuyển hóa & Chiếc Van Xả Áp Lực)
  // =========================================================================
  renderChapter3: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[2];
    const progressObj = userProgress?.progress || userProgress;
    const ch3Progress = progressObj?.ch3 || {};
    const savedWaterLevel = ch3Progress?.waterLevel || { percent: 65, label: "Mình cảm thấy quá tải" };
    const savedValveMethod = ch3Progress?.valveMethod || "";
    const backpackWeight = ch3Progress?.backpackWeight || 75;
    const selectedAccessory = ch3Progress?.selectedAccessory || "umbrella";
    const backpackCategories = ch3Progress?.backpackCategories || {};
    const lusiAnswers = ch3Progress?.lusiAnswers || {};
    const groundingInputs = ch3Progress?.groundingInputs || {};
    const emotionStopData = ch3Progress?.emotionStopData || {};

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header Banner with Cover Art -->
        <div class="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-lg">
          <div class="relative h-48 sm:h-56 bg-slate-900">
            <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover opacity-85">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div class="text-white space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500 text-white">${ch.badge}</span>
                <h1 class="text-2xl sm:text-3xl font-extrabold font-serif-title">${ch.title}</h1>
                <p class="text-xs sm:text-sm text-slate-200">${ch.subtitle}</p>
              </div>

              <button onclick="APP.toggleFavorite({ id: 'ch3', title: '${ch.title}', chapterId: 3, category: 'Bài học & Chuyển hóa', snippet: '${ch.subtitle}', path: 'ch3' })" 
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 border-white text-slate-700 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: Lusi Story & Cognitive Appraisal Theory (Lazarus & Folkman 1984) -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-amber-100 bg-white/90">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-full md:w-3/5 space-y-4">
              <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Tình huống thực tế</span>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 font-serif-title">${ch.theory.lusiStory.title}</h3>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${ch.theory.lusiStory.content}</p>

              <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                <div class="text-xs font-bold text-amber-900 flex items-center space-x-1.5">
                  <i class="fas fa-brain text-amber-600"></i>
                  <span>${ch.theory.cognitiveAppraisal.title}</span>
                </div>
                <div class="text-xs text-slate-700 space-y-2">
                  <div class="p-2.5 rounded-xl bg-white/80 border border-amber-100">
                    <strong class="text-amber-900">1. Đánh giá sơ cấp (Primary appraisal):</strong>
                    <p class="mt-0.5 text-slate-600">${ch.theory.cognitiveAppraisal.step1}</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white/80 border border-amber-100">
                    <strong class="text-amber-900">2. Đánh giá thứ cấp (Secondary appraisal):</strong>
                    <p class="mt-0.5 text-slate-600">${ch.theory.cognitiveAppraisal.step2}</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900">
                    <strong class="text-emerald-800">💡 Chiến lược đối phó:</strong>
                    <p class="mt-0.5 text-slate-600">${ch.theory.cognitiveAppraisal.problemVsEmotion}</p>
                  </div>
                  <div class="text-[11px] text-slate-500 italic pt-0.5">
                    <strong>3. Tái đánh giá (Reappraisal):</strong> ${ch.theory.cognitiveAppraisal.reappraisal}
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-2/5 flex flex-col items-center justify-center space-y-3">
              <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200 max-w-[260px]">
                <img src="${ch.lusiImage}" alt="Câu chuyện của Lusi" class="w-full h-auto object-cover">
              </div>
              <span class="text-[11px] text-slate-500 italic text-center">Lusi — Bạn đồng hành cùng sinh viên ULIS</span>
            </div>
          </div>
        </div>

        <!-- Section 2: CHIẾC BA LÔ CỦA LUSI (Pages 28-37) -->
        <div id="backpackSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl border-2 border-amber-200 bg-white/95 relative">
          <div id="zenToolbar_backpackSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Trang 28–37 Sổ tay Canva</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-suitcase text-amber-500"></i>
                <span>${ch.lusiBackpackExercise.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.lusiBackpackExercise.instruction}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('backpackSection', 'Chiếc Ba Lô Của Lusi')}
          </div>

          <!-- Showcase Hình ảnh Chiếc ba lô của Lusi từ Sổ tay (Trang 28-37) -->
          <div class="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-teal-50/50 via-white to-amber-50/40 border border-teal-200 shadow-sm space-y-4">
            <div class="text-center space-y-1">
              <span class="text-[11px] font-extrabold text-teal-800 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center space-x-1">
                <i class="fas fa-toolbox text-teal-600"></i>
                <span>Minh Họa Sổ Tay Tâm Lý</span>
              </span>
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title">
                Bên ngoài chiếc balo — tôi đang có gì trong tay?
              </h3>
              <p class="text-xs text-slate-600 max-w-xl mx-auto">
                Bên cạnh áp lực trong chiếc ba lô nặng nề, Lusi vẫn có những nguồn lực có thể giúp bạn ấy vượt qua hành trình phía trước. Các phụ kiện bên ngoài tượng trưng cho những gì bạn đang có sẵn.
              </p>
            </div>

            <!-- Ảnh minh họa chiếc ba lô và 5 phụ kiện chính thức từ sổ tay -->
            <div class="flex justify-center pt-2">
              <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-teal-200 bg-white max-w-2xl w-full transition-transform hover:scale-[1.01] duration-300">
                <img src="${ch.lusiBackpackExercise.backpackImage || 'assets/lusi_backpack.png'}" 
                     alt="Bên ngoài chiếc balo - tôi đang có gì trong tay?" 
                     class="w-full h-auto object-contain cursor-pointer"
                     onclick="window.open('assets/lusi_backpack.png', '_blank')"
                     title="Bấm để xem ảnh phóng to">
              </div>
            </div>

            <div class="text-center text-[11px] text-slate-400 italic">
              (Chạm vào ảnh để phóng to • Bấm chọn các phụ kiện bên dưới để khám phá ý nghĩa tâm lý học)
            </div>

            <!-- 5 Nguồn lực phụ kiện gắn ngoài ba lô tương tác -->
            <div class="pt-2 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <i class="fas fa-key text-teal-600"></i>
                  <span>5 Phụ kiện hỗ trợ trên ba lô của Lusi (Chọn để khám phá nguồn lực)</span>
                </h4>
                <span class="text-[10px] text-teal-700 font-semibold">Chạm vào phụ kiện để xem</span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
                ${ch.lusiBackpackExercise.accessories.map(acc => {
                  const isSelected = selectedAccessory === acc.id;
                  return `
                    <div onclick="APP.selectBackpackAccessory('${acc.id}')" 
                         class="p-3 sm:p-3.5 rounded-2xl border text-center cursor-pointer transition-all flex flex-col justify-start items-center ${isSelected ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-300 shadow-md transform -translate-y-0.5' : 'bg-white border-slate-200 hover:bg-teal-50/50 hover:border-teal-200'}">
                      <div class="text-2xl mb-1">${acc.icon}</div>
                      <div class="text-xs font-extrabold text-slate-800">${acc.name}</div>
                      <div class="text-[10px] text-slate-600 mt-1 leading-snug break-words">${acc.meaning}</div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Chi tiết phụ kiện đang chọn -->
              ${(() => {
                const curAcc = ch.lusiBackpackExercise.accessories.find(a => a.id === selectedAccessory) || ch.lusiBackpackExercise.accessories[0];
                return `
                  <div class="p-4 rounded-2xl bg-teal-50/80 border border-teal-300 flex items-start space-x-3 text-xs shadow-sm">
                    <div class="text-3xl flex-shrink-0">${curAcc.icon}</div>
                    <div class="flex-1">
                      <div class="font-bold text-teal-900 text-sm flex items-center space-x-2">
                        <span>${curAcc.name}: Nguồn lực tiếp sức cho bạn</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-200 text-teal-800">Đang chọn</span>
                      </div>
                      <p class="text-slate-700 mt-1 leading-relaxed">${curAcc.meaning}</p>
                      <div class="mt-2.5 flex items-center space-x-2">
                        <button onclick="
                          const ans3 = document.getElementById('lusiAns3');
                          if (ans3) {
                            ans3.value = 'Mình chọn ${curAcc.name}: ${curAcc.meaning}. Đây là nguồn lực mình cảm thấy cần nhất hiện tại.';
                            APP.saveLusiAnswer('q3', ans3.value);
                          }
                        " class="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] inline-flex items-center space-x-1.5 shadow-sm transition-all">
                          <i class="fas fa-check-circle text-xs"></i>
                          <span>Áp dụng nguồn lực này cho Câu 3</span>
                        </button>
                        <span class="text-[10px] text-slate-500 italic">(Tự động điền vào Câu 3 bên dưới)</span>
                      </div>
                    </div>
                  </div>
                `;
              })()}
            </div>
          </div>

          <!-- Câu 1 & Câu 2: Nhận diện áp lực và Đánh giá ba lô -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <!-- Câu 1 -->
            <div class="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h4 class="text-xs font-bold text-slate-800 uppercase">Nhận diện áp lực đang đè nặng</h4>
              </div>
              <p class="text-xs text-slate-600">Những nhiệm vụ, deadline hay kỳ vọng nào đang khiến chiếc ba lô của bạn trĩu nặng nhất?</p>
              <textarea id="lusiAns1" rows="3" placeholder="Ví dụ: Bài tập nhóm môn Ngôn ngữ học ứng dụng, kỳ thi cuối kỳ, học bổng..." 
                        class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none">${lusiAnswers.q1 || ''}</textarea>
              <button onclick="APP.saveLusiAnswer('q1', document.getElementById('lusiAns1').value)" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm">
                Lưu câu trả lời 1
              </button>
            </div>

            <!-- Câu 2 -->
            <div class="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h4 class="text-xs font-bold text-slate-800 uppercase">Độ nặng ba lô hiện tại</h4>
              </div>
              <p class="text-xs text-slate-600">Nếu thang đo từ 0% đến 100%, chiếc ba lô của bạn đang nặng bao nhiêu?</p>
              
              <div class="flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Mức tải: <strong id="backpackWeightText">${backpackWeight}%</strong></span>
              </div>
              <div class="grid grid-cols-5 gap-1.5">
                ${[20, 40, 60, 80, 100].map(w => `
                  <button onclick="APP.setBackpackWeight(${w})" class="py-1.5 rounded-lg border text-xs font-bold transition-all ${backpackWeight === w ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-amber-50'}">
                    ${w}%
                  </button>
                `).join('')}
              </div>

              <input type="text" id="lusiAns2" value="${lusiAnswers.q2 || ''}" placeholder="Điều gì làm ba lô nặng nhất? (Ví dụ: Sự lo âu và thiếu ngủ...)" 
                     class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none">
              <button onclick="APP.saveLusiAnswer('q2', document.getElementById('lusiAns2').value)" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm">
                Lưu câu trả lời 2
              </button>
            </div>
          </div>

          <!-- Câu 3 & Câu 4: Phụ kiện cần nhất & Chiến lược đối phó -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <!-- Câu 3 -->
            <div class="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h4 class="text-xs font-bold text-slate-800 uppercase">Khám phá nguồn lực hỗ trợ</h4>
              </div>
              <p class="text-xs text-slate-600">Trong 5 phụ kiện của Lusi, bạn cảm thấy mình cần nhất phụ kiện nào lúc này và vì sao?</p>
              <textarea id="lusiAns3" rows="3" placeholder="Ví dụ: Mình cần Chiếc ô vì mình cần một người bạn lắng nghe và chia sẻ bớt nỗi lo..." 
                        class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none">${lusiAnswers.q3 || ''}</textarea>
              <button onclick="APP.saveLusiAnswer('q3', document.getElementById('lusiAns3').value)" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm">
                Lưu câu trả lời 3
              </button>
            </div>

            <!-- Câu 4 -->
            <div class="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">4</span>
                <h4 class="text-xs font-bold text-slate-800 uppercase">Chiến lược theo thuyết Lazarus (1984)</h4>
              </div>
              <p class="text-xs text-slate-600">Tình huống của bạn hiện tại cần ưu tiên chiến lược giải quyết vấn đề (Problem-focused) hay điều hòa cảm xúc (Emotion-focused)?</p>
              <textarea id="lusiAns4" rows="3" placeholder="Ví dụ: Mình cần chăm sóc cảm xúc trước (ngủ đủ giấc) rồi mới lập kế hoạch làm bài..." 
                        class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none">${lusiAnswers.q4 || ''}</textarea>
              <button onclick="APP.saveLusiAnswer('q4', document.getElementById('lusiAns4').value)" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm">
                Lưu câu trả lời 4
              </button>
            </div>
          </div>

          <!-- Câu 5: Bảng phân loại 3 ngăn chiếc ba lô: KEEP, ARRANGE, THROW -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">5</span>
                <h4 class="text-xs font-bold text-slate-800 uppercase">Sắp xếp 3 ngăn chiếc ba lô (KEEP - ARRANGE - THROW)</h4>
              </div>
              <span class="text-[10px] text-slate-500">Nhấp vào mũi tên để đổi ngăn phân loại</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Ngăn 1: KEEP -->
              <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-emerald-800 uppercase flex items-center space-x-1.5">
                    <i class="fas fa-heart text-emerald-600"></i>
                    <span>KEEP (Giữ lại)</span>
                  </span>
                  <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Nguồn lực quý</span>
                </div>
                <p class="text-[11px] text-slate-600">Những điều giúp bạn vững vàng, tạo động lực nội tại.</p>

                <div class="space-y-2 pt-1" id="backpackKeepList">
                  ${ch.lusiBackpackExercise.classificationItems.map(item => {
                    const cat = backpackCategories[item.id] || item.defaultCategory;
                    if (cat !== 'keep') return '';
                    return `
                      <div class="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-sm flex items-center justify-between text-xs">
                        <span class="font-medium text-slate-800">${item.text}</span>
                        <div class="flex space-x-1">
                          <button onclick="APP.setBackpackItemCategory('${item.id}', 'arrange')" title="Chuyển sang Arrange" class="text-amber-500 hover:text-amber-700 px-1">
                            <i class="fas fa-arrow-right text-[10px]"></i>
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Ngăn 2: ARRANGE -->
              <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-amber-800 uppercase flex items-center space-x-1.5">
                    <i class="fas fa-sliders text-amber-600"></i>
                    <span>ARRANGE (Sắp xếp lại)</span>
                  </span>
                  <span class="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Kế hoạch & Thói quen</span>
                </div>
                <p class="text-[11px] text-slate-600">Những điều cần chia nhỏ thời gian và tổ chức lại.</p>

                <div class="space-y-2 pt-1" id="backpackArrangeList">
                  ${ch.lusiBackpackExercise.classificationItems.map(item => {
                    const cat = backpackCategories[item.id] || item.defaultCategory;
                    if (cat !== 'arrange') return '';
                    return `
                      <div class="p-2.5 rounded-xl bg-white border border-amber-200 shadow-sm flex items-center justify-between text-xs">
                        <span class="font-medium text-slate-800">${item.text}</span>
                        <div class="flex space-x-1">
                          <button onclick="APP.setBackpackItemCategory('${item.id}', 'keep')" title="Chuyển sang Keep" class="text-emerald-600 hover:text-emerald-800 px-1">
                            <i class="fas fa-arrow-left text-[10px]"></i>
                          </button>
                          <button onclick="APP.setBackpackItemCategory('${item.id}', 'throw')" title="Chuyển sang Throw" class="text-rose-500 hover:text-rose-700 px-1">
                            <i class="fas fa-arrow-right text-[10px]"></i>
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Ngăn 3: THROW -->
              <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-300 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-rose-800 uppercase flex items-center space-x-1.5">
                    <i class="fas fa-trash text-rose-600"></i>
                    <span>THROW (Bỏ bớt)</span>
                  </span>
                  <span class="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">Gánh nặng dư thừa</span>
                </div>
                <p class="text-[11px] text-slate-600">Những nỗi sợ, dằn vặt và kỳ vọng vô hình cần buông bỏ.</p>

                <div class="space-y-2 pt-1" id="backpackThrowList">
                  ${ch.lusiBackpackExercise.classificationItems.map(item => {
                    const cat = backpackCategories[item.id] || item.defaultCategory;
                    if (cat !== 'throw') return '';
                    return `
                      <div class="p-2.5 rounded-xl bg-white border border-rose-200 shadow-sm flex items-center justify-between text-xs">
                        <span class="font-medium text-slate-800">${item.text}</span>
                        <div class="flex space-x-1">
                          <button onclick="APP.setBackpackItemCategory('${item.id}', 'arrange')" title="Chuyển sang Arrange" class="text-amber-500 hover:text-amber-700 px-1">
                            <i class="fas fa-arrow-left text-[10px]"></i>
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- Add custom item input -->
            <div class="pt-2 flex flex-wrap gap-2 items-center justify-between text-xs">
              <div class="flex gap-2 w-full sm:w-auto">
                <input type="text" id="customBackpackItemInput" placeholder="Thêm điều bạn muốn sắp xếp..." class="flex-1 sm:w-64 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-amber-400">
                <select id="customBackpackItemCat" class="px-2 py-2 rounded-xl border border-slate-200 text-xs font-semibold">
                  <option value="keep">Ngăn Keep (Giữ)</option>
                  <option value="arrange">Ngăn Arrange (Sắp xếp)</option>
                  <option value="throw">Ngăn Throw (Bỏ)</option>
                </select>
                <button onclick="APP.addCustomBackpackItem()" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold">Thêm</button>
              </div>
            </div>
          </div>

          <!-- Lời nhắn gửi Lusi & Chính mình -->
          <div class="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
            <h4 class="text-xs font-bold text-amber-900 uppercase">Lời nhắn động viên cho Lusi & cho chính bạn</h4>
            <textarea id="lusiEncouragementInput" rows="2" placeholder="Ví dụ: 'Cố lên Lusi, mọi việc rồi sẽ ổn thôi, hãy ngủ một giấc thật ngon và bắt đầu lại vào sáng mai...' " 
                      class="w-full p-3 rounded-xl border border-amber-200 text-xs bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none">${lusiAnswers.encouragement || ''}</textarea>
            <div class="flex justify-end">
              <button onclick="APP.saveLusiEncouragement(document.getElementById('lusiEncouragementInput').value)" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-sm">
                Lưu lời nhắn gửi
              </button>
            </div>
          </div>
        </div>

        <!-- Section 3: CÔNG CỤ ĐẶC BIỆT: CHIẾC VAN XẢ ÁP LỰC (Pages 38-41) -->
        <div id="pressureValveSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl border-2 border-amber-200 bg-white/95 relative">
          <div id="zenToolbar_pressureValveSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Trang 38–41 Sổ tay Canva</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-faucet-drip text-amber-500"></i>
                <span>${ch.pressureValveTool.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.pressureValveTool.subtitle}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('pressureValveSection', 'Công cụ Chiếc Van Xả Áp Lực')}
          </div>

          <!-- Step 1: Kiểm tra mực nước chiếc bình cảm xúc (Visual Bottle Jar) -->
          <div class="space-y-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-xl bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center">1</span>
              <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[0].title}</h4>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[0].desc}</p>

            <!-- Visual Bottle & Gauge Display -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6 py-3">
              <!-- Animated Bottle Jar -->
              <div class="flex flex-col items-center">
                <div class="emotional-bottle-cap"></div>
                <div class="emotional-bottle-container">
                  <div id="bottleWaterFill" class="bottle-water-fill" 
                       style="height: ${savedWaterLevel.percent}%; background-color: ${savedWaterLevel.percent > 80 ? '#ef4444' : savedWaterLevel.percent > 60 ? '#f97316' : savedWaterLevel.percent > 40 ? '#eab308' : '#10b981'};">
                  </div>
                </div>
              </div>

              <!-- Info and Level Selectors -->
              <div class="space-y-3 max-w-sm w-full">
                <div class="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div class="flex justify-between text-xs font-bold text-slate-700">
                    <span>Mực nước bình cảm xúc:</span>
                    <strong id="waterLevelPercentText" class="text-amber-600 text-sm">${savedWaterLevel.percent}%</strong>
                  </div>
                  <div id="waterLevelLabelText" class="text-xs text-slate-600 font-semibold">${savedWaterLevel.label}</div>
                </div>

                <!-- 5 Level Selectors -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button onclick="APP.setWaterLevel(90, 'Mình gần như không còn năng lượng (Cạn pin)', '#ef4444')" class="p-2 rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-800 text-left transition-all">
                    <div class="text-xs font-extrabold">81–100%</div>
                    <div class="text-[10px]">Cạn pin</div>
                  </button>
                  <button onclick="APP.setWaterLevel(70, 'Mình cảm thấy quá tải', '#f97316')" class="p-2 rounded-xl border border-orange-200 bg-orange-50/70 hover:bg-orange-100 text-orange-800 text-left transition-all">
                    <div class="text-xs font-extrabold">61–80%</div>
                    <div class="text-[10px]">Quá tải</div>
                  </button>
                  <button onclick="APP.setWaterLevel(50, 'Mình đang chịu khá nhiều áp lực', '#eab308')" class="p-2 rounded-xl border border-amber-200 bg-amber-50/70 hover:bg-amber-100 text-amber-800 text-left transition-all">
                    <div class="text-xs font-extrabold">41–60%</div>
                    <div class="text-[10px]">Khá áp lực</div>
                  </button>
                  <button onclick="APP.setWaterLevel(30, 'Mình bắt đầu thấy mệt', '#06b6d4')" class="p-2 rounded-xl border border-cyan-200 bg-cyan-50/70 hover:bg-cyan-100 text-cyan-800 text-left transition-all">
                    <div class="text-xs font-extrabold">21–40%</div>
                    <div class="text-[10px]">Bắt đầu mệt</div>
                  </button>
                  <button onclick="APP.setWaterLevel(15, 'Mình khá ổn', '#10b981')" class="p-2 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 text-left transition-all col-span-2 sm:col-span-1">
                    <div class="text-xs font-extrabold">0–20%</div>
                    <div class="text-[10px]">Khá ổn</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Mở van cảm xúc (Viết, Vẽ Canvas, Nói ra, Vận động) -->
          <div class="space-y-4 p-5 rounded-2xl bg-white border border-slate-200">
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-xl bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center">2</span>
              <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[1].title}</h4>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[1].desc}</p>

            <!-- 4 Release Tabs/Buttons -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${ch.pressureValveTool.steps[1].methods.map(m => `
                <button onclick="APP.switchValveTab('${m.id}')" id="valveTabBtn_${m.id}" 
                        class="p-3 rounded-2xl border text-left transition-all ${savedValveMethod === m.name ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-300' : 'bg-slate-50/70 border-slate-200 hover:bg-teal-50/50'}">
                  <div class="text-xs font-bold text-teal-800 flex items-center space-x-1.5">
                    <i class="fas ${m.icon}"></i>
                    <span>${m.name}</span>
                  </div>
                  <p class="text-[10px] text-slate-500 mt-1 line-clamp-2">${m.desc}</p>
                </button>
              `).join('')}
            </div>

            <!-- Tab 1: VIẾT (Notepad) -->
            <div id="valveContent_write" class="valve-tab-content p-4 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-teal-900"><i class="fas fa-pen-fancy mr-1"></i> Góc Viết Tự Do Xả Van</span>
                <span class="text-[10px] text-teal-700">Viết không phán xét, không cần chỉnh sửa ngữ pháp</span>
              </div>
              <textarea id="valveNotepadInput" rows="4" placeholder="Hãy trút hết những bực bội, mệt mỏi, áp lực hay những suy nghĩ rối bời trong đầu bạn vào đây..." 
                        class="w-full p-3 rounded-xl border border-teal-200 text-xs bg-white focus:ring-2 focus:ring-teal-400 focus:outline-none">${ch3Progress.valveNotepad || ''}</textarea>
              <div class="flex justify-end">
                <button onclick="APP.saveValveNotepad(document.getElementById('valveNotepadInput').value)" class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-sm">
                  Lưu góc viết xả van
                </button>
              </div>
            </div>

            <!-- Tab 2: VẼ (Interactive Drawing Canvas) -->
            <div id="valveContent_draw" class="valve-tab-content hidden p-4 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-teal-900"><i class="fas fa-palette mr-1"></i> Bảng Vẽ Giải Tỏa Cảm Xúc</span>
                <div class="flex items-center space-x-2">
                  <span class="text-[10px] text-slate-500">Màu nét:</span>
                  <button onclick="APP.setCanvasColor('#1e293b')" class="w-5 h-5 rounded-full bg-slate-800 border border-white shadow-sm"></button>
                  <button onclick="APP.setCanvasColor('#0284c7')" class="w-5 h-5 rounded-full bg-sky-600 border border-white shadow-sm"></button>
                  <button onclick="APP.setCanvasColor('#e11d48')" class="w-5 h-5 rounded-full bg-rose-600 border border-white shadow-sm"></button>
                  <button onclick="APP.setCanvasColor('#f59e0b')" class="w-5 h-5 rounded-full bg-amber-500 border border-white shadow-sm"></button>
                  <button onclick="APP.setCanvasColor('#10b981')" class="w-5 h-5 rounded-full bg-emerald-500 border border-white shadow-sm"></button>
                </div>
              </div>
              <div class="border-2 border-dashed border-teal-300 rounded-2xl overflow-hidden bg-white shadow-inner flex justify-center">
                <canvas id="emotionCanvas" width="600" height="260" class="emotion-canvas-board w-full max-w-[600px] h-[260px]"></canvas>
              </div>
              <div class="flex items-center justify-between pt-1">
                <button onclick="APP.clearEmotionCanvas()" class="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold">
                  <i class="fas fa-rotate-left mr-1"></i> Xóa bảng vẽ
                </button>
                <button onclick="APP.saveEmotionCanvas()" class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-sm">
                  <i class="fas fa-save mr-1"></i> Lưu tranh vẽ
                </button>
              </div>
            </div>

            <!-- Tab 3: NÓI RA -->
            <div id="valveContent_talk" class="valve-tab-content hidden p-4 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
              <span class="text-xs font-bold text-teal-900"><i class="fas fa-comments mr-1"></i> Mẫu Lời Thoại Mở Lời Khi Cần Chia Sẻ</span>
              <div class="space-y-2 text-xs text-slate-700">
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>💬 Với bạn bè:</strong> "Hôm nay mình cảm thấy hơi quá tải với bài vở, cậu có rảnh ngồi với mình một chút không? Mình không cần lời khuyên đâu, chỉ cần cậu nghe thôi."
                </div>
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>💬 Với thầy cô / Cố vấn:</strong> "Thưa thầy/cô, em đang gặp chút khó khăn trong việc cân bằng tiến độ đồ án với các môn học khác. Em có thể xin thầy/cô 10 phút để được hướng dẫn thêm không ạ?"
                </div>
              </div>
              <textarea id="valveTalkNoteInput" rows="2" placeholder="Ghi lại điều bạn muốn nói hoặc người bạn muốn nhắn tin..." class="w-full p-3 rounded-xl border border-teal-200 text-xs bg-white focus:ring-1 focus:ring-teal-400">${ch3Progress.valveTalkNote || ''}</textarea>
              <div class="flex justify-end">
                <button onclick="APP.saveValveTalkNote(document.getElementById('valveTalkNoteInput').value)" class="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold">Lưu ghi chú</button>
              </div>
            </div>

            <!-- Tab 4: VẬN ĐỘNG -->
            <div id="valveContent_move" class="valve-tab-content hidden p-4 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
              <span class="text-xs font-bold text-teal-900"><i class="fas fa-person-walking mr-1"></i> 4 Bài Tập Vận Động Nhanh Giải Phóng Áp Lực</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>1. Xoay vai & Thả lỏng cổ:</strong> Xoay tròn khớp vai 10 lần ra sau, nghiêng nhẹ đầu sang hai bên để giải phóng cơ bắp bị căng cứng do ngồi máy tính.
                </div>
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>2. Đi bộ 5 phút:</strong> Đứng dậy rời khỏi bàn học, đi chậm rãi quanh phòng hoặc ngoài hành lang, chú ý nhịp chân.
                </div>
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>3. Rửa mặt bằng nước mát:</strong> Cảm nhận sự tươi mát đánh thức các giác quan và hạ nhiệt độ cơ thể.
                </div>
                <div class="p-3 rounded-xl bg-white border border-teal-100">
                  <strong>4. Vươn vai hít thở sâu:</strong> Hít sâu bằng mũi trong 4 giây, giữ 2 giây, thở ra từ từ bằng miệng trong 6 giây.
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Kỹ thuật Nối Đất 5-4-3-2-1 với 5 ô input chi tiết -->
          <div class="space-y-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">3</span>
                <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[2].title}</h4>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">Kỹ thuật 5 Giác Quan</span>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[2].desc}</p>

            <div class="space-y-3 pt-2">
              ${ch.pressureValveTool.steps[2].items.map(it => `
                <div class="p-3 rounded-xl bg-white border border-emerald-200 shadow-sm space-y-1.5">
                  <div class="flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <span class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center flex-shrink-0">${it.num}</span>
                    <span>${it.sense}</span>
                  </div>
                  <input type="text" id="groundingInput_${it.num}" value="${groundingInputs[it.num] || ''}" placeholder="${it.placeholder}" 
                         class="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50/50 focus:bg-white focus:ring-1 focus:ring-emerald-500 focus:outline-none">
                </div>
              `).join('')}
            </div>

            <div class="flex justify-end pt-1">
              <button onclick="APP.saveGroundingInputs()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-1.5">
                <i class="fas fa-check"></i>
                <span>Lưu nhật ký Nối Đất 5-4-3-2-1</span>
              </button>
            </div>
          </div>

          <!-- Step 4: Kiểm tra lại chiếc bình -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-xl bg-slate-700 text-white font-extrabold text-xs flex items-center justify-center">4</span>
              <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[3].title}</h4>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[3].desc}</p>

            <div class="flex flex-wrap gap-2 pt-1">
              ${ch.pressureValveTool.steps[3].feelings.map(f => `
                <button onclick="APP.finishValveRelease('${f}', 20)" 
                        class="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-xs font-semibold text-slate-700 transition-all">
                  ✓ ${f}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Section 4: TRẠM DỪNG CẢM XÚC (Emotion Stop) -->
        <div id="emotionStopSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border-2 border-indigo-200 bg-white/95 relative">
          <div id="zenToolbar_emotionStopSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Bài tập chuyên sâu</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-hand-holding-heart text-indigo-500"></i>
                <span>${ch.emotionStopExercise.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.emotionStopExercise.subtitle}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('emotionStopSection', 'Trạm Dừng Cảm Xúc')}
          </div>

          <!-- 8 Bước tự sự chi tiết -->
          <div class="space-y-4">
            ${ch.emotionStopExercise.guidingQuestions.map(q => `
              <div class="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0">${q.num}</span>
                  <label class="text-xs font-bold text-slate-800">${q.text}</label>
                </div>
                <textarea id="emStop_${q.num}" rows="2" placeholder="Ghi lại suy nghĩ của bạn..." 
                          class="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none">${emotionStopData['q' + q.num] || ''}</textarea>
              </div>
            `).join('')}

            <div class="flex justify-end pt-2">
              <button onclick="APP.saveEmotionStopJournal()" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-200 flex items-center space-x-2">
                <i class="fas fa-bookmark"></i>
                <span>Lưu vào Nhật Ký Trạm Dừng Cảm Xúc</span>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('ch4')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center space-x-2">
            <span>Sang Chương 4: Tái tạo & Thử thách 11 Ngày</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },
  renderChapter4: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[3];
    const stages = ch.stages11Days;
    const progressObj = userProgress?.progress || userProgress;
    const ch4Progress = progressObj?.ch4 || {};
    const challengeState = ch4Progress?.challenge11Days || {};
    const letters = userProgress?.futureLetters || [];
    const energyMap = ch4Progress?.energyMap || {};
    const pomoCount = ch4Progress?.pomodoroSessions || window.APP?.state?.pomodoro?.sessionsCompleted || 0;

    const completedDaysCount = Object.values(challengeState).filter(c => c.completed).length;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header Banner with Cover Art -->
        <div class="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-lg">
          <div class="relative h-48 sm:h-56 bg-slate-900">
            <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover opacity-85">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div class="text-white space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-500 text-white">${ch.badge}</span>
                <h1 class="text-2xl sm:text-3xl font-extrabold font-serif-title">${ch.title}</h1>
                <p class="text-xs sm:text-sm text-slate-200">${ch.subtitle}</p>
              </div>

              <button onclick="APP.toggleFavorite({ id: 'ch4', title: '${ch.title}', chapterId: 4, category: 'Bài học & Thử thách 11 Ngày', snippet: '${ch.subtitle}', path: 'ch4' })" 
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 border-white text-slate-700 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: Thuyết Tự Trắc Ẩn (Self-Compassion - Kristin Neff) -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-md border border-pink-100 bg-white/90">
          <div class="flex items-center space-x-2">
            <span class="text-rose-500 text-xl"><i class="fas fa-heart"></i></span>
            <h3 class="text-lg font-bold text-slate-900 font-serif-title">Lòng Tự Trắc Ẩn (Self-Compassion — TS. Kristin Neff)</h3>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Theo TS. Kristin Neff, chiếc phao cứu sinh khi kiệt sức là <strong>“self-compassion”</strong> (lòng tự trắc ẩn) — khả năng đối xử với chính mình bằng sự thấu hiểu và tử tế khi gặp khó khăn, thay vì liên tục chỉ trích bản thân. Lòng tự trắc ẩn bao gồm 3 trụ cột:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div class="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
              <strong class="text-xs text-rose-900 font-bold flex items-center space-x-1.5">
                <i class="fas fa-hand-holding-heart text-rose-500"></i>
                <span>1. Tử tế với chính mình</span>
              </strong>
              <p class="text-[11px] text-slate-600">Thấu hiểu và vỗ về những yếu đuối thay vì tự trách móc, dằn vặt bản thân khi kết quả chưa như ý.</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
              <strong class="text-xs text-sky-900 font-bold flex items-center space-x-1.5">
                <i class="fas fa-people-group text-sky-500"></i>
                <span>2. Kết nối nhân loại</span>
              </strong>
              <p class="text-[11px] text-slate-600">Nhận ra những khó khăn, thất bại là một phần tất yếu của kiếp người, bạn không hề đơn độc hay bất thường.</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
              <strong class="text-xs text-emerald-900 font-bold flex items-center space-x-1.5">
                <i class="fas fa-wind text-emerald-500"></i>
                <span>3. Chánh niệm (Mindfulness)</span>
              </strong>
              <p class="text-[11px] text-slate-600">Quan sát cảm xúc và suy nghĩ hiện tại một cách rõ ràng, không phóng đại cũng không né tránh, chối bỏ.</p>
            </div>
          </div>
        </div>

        <!-- Section 2: Challenge 11 Ngày Phục Hồi Nhịp Thở -->
        <div id="challenge11Section" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-pink-200 relative bg-white/95">
          <div id="zenToolbar_challenge11Section"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-pink-600 uppercase tracking-wider">Hành trình 4 Chặng (Canva Trang 50–68)</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">
                ${ch.theory.challenge11DaysIntro.title}
              </h2>
              <p class="text-xs text-slate-500 mt-1">${ch.theory.challenge11DaysIntro.content}</p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="text-right">
                <span class="text-xs font-bold text-emerald-600 block">Tiến độ</span>
                <div class="text-lg font-extrabold text-slate-900">${completedDaysCount} / 11 Ngày</div>
              </div>
              ${COMPONENTS.renderFullscreenButton('challenge11Section', 'Thử Thách 11 Ngày Tìm Lại Nhịp Thở')}
            </div>
          </div>

          <!-- 4 Stages Accordion/List -->
          <div class="space-y-6">
            ${stages.map(st => `
              <div class="space-y-3">
                <div class="flex items-center space-x-2">
                  <span class="px-2.5 py-1 rounded-full bg-pink-100 text-pink-800 text-[11px] font-extrabold">Chặng ${st.stage}</span>
                  <h3 class="text-sm font-bold text-slate-900 font-serif-title">${st.name}</h3>
                </div>
                <p class="text-xs text-slate-500 pl-2">${st.desc}</p>

                <div class="space-y-4 pl-2 sm:pl-3">
                  ${st.days.map(d => {
                    const isDone = challengeState[d.day]?.completed || false;
                    const savedData = challengeState[d.day] || {};
                    return `
                      <div class="p-4 sm:p-5 rounded-2xl border ${isDone ? 'bg-emerald-50/80 border-emerald-300' : 'bg-slate-50/60 border-slate-200'} space-y-3 transition-all hover:bg-white hover:border-pink-300 shadow-sm">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-3">
                            <input type="checkbox" onchange="APP.toggleChallengeDay(${d.day})" ${isDone ? 'checked' : ''} class="custom-checkbox">
                            <h4 class="font-bold text-slate-900 text-xs sm:text-sm">${d.title}</h4>
                          </div>
                          <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isDone ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-600'}">
                            ${isDone ? '✓ Hoàn thành' : 'Chưa xong'}
                          </span>
                        </div>

                        <p class="text-xs text-slate-600 pl-7 leading-relaxed">${d.desc}</p>

                        <!-- Fact Box if present -->
                        ${d.factBox ? `
                          <div class="ml-7 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-start space-x-2">
                            <i class="fas fa-lightbulb text-amber-600 mt-0.5 flex-shrink-0"></i>
                            <div><strong>Bật mí tâm lý học:</strong> ${d.factBox}</div>
                          </div>
                        ` : ''}

                        <!-- Specific questions for this day -->
                        ${d.questions && d.questions.length > 0 ? `
                          <div class="ml-7 space-y-2 pt-1">
                            ${d.questions.map(q => `
                              <div>
                                <label class="block text-[11px] font-bold text-slate-700 mb-0.5">${q.label}</label>
                                <input type="text" id="dayQ_${d.day}_${q.id}" value="${savedData[q.id] || ''}" placeholder="${q.placeholder}" 
                                       class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-pink-500">
                              </div>
                            `).join('')}
                            <div class="flex justify-end pt-1">
                              <button onclick="
                                const ans = {};
                                ${d.questions.map(q => `ans['${q.id}'] = document.getElementById('dayQ_${d.day}_${q.id}')?.value || '';`).join(' ')}
                                APP.saveChallengeDayAnswers(${d.day}, ans);
                              " class="px-3.5 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold shadow-sm">
                                Lưu câu trả lời Ngày ${d.day}
                              </button>
                            </div>
                          </div>
                        ` : ''}

                        <!-- Special Flower Petals for Day 6 -->
                        ${d.flowerPetals ? `
                          <div class="ml-7 space-y-2 pt-2 border-t border-slate-100">
                            <h5 class="text-xs font-bold text-pink-900">🌸 5 Cánh hoa giá trị (Thuyết Tự Hiệu Quả — Albert Bandura):</h5>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              ${d.flowerPetals.map((pet, idx) => `
                                <div class="p-2.5 rounded-xl bg-pink-50/60 border border-pink-200 space-y-1">
                                  <label class="block text-[10px] font-bold text-pink-900">${pet}</label>
                                  <input type="text" id="flowerPetal_${idx}" value="${ch4Progress?.valueFlower?.[idx] || ''}" placeholder="Nhập suy nghĩ của bạn..." 
                                         class="w-full px-2 py-1 text-xs rounded-lg border border-slate-200 bg-white focus:ring-1 focus:ring-pink-500">
                                </div>
                              `).join('')}
                            </div>
                            <div class="flex justify-end">
                              <button onclick="
                                for(let i=0; i<5; i++) {
                                  const val = document.getElementById('flowerPetal_' + i)?.value;
                                  if(val) APP.saveValueFlowerPetal(i, val);
                                }
                                APP.showToast('Đã lưu 5 cánh hoa giá trị!', 'success');
                              " class="px-3.5 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold shadow-sm">
                                Lưu các cánh hoa
                              </button>
                            </div>
                          </div>
                        ` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 3: BẢN ĐỒ NĂNG LƯỢNG 24H (Circadian Energy Map) -->
        <div id="energyMapSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-teal-200 bg-white/95 relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-teal-600 uppercase tracking-wider">Ngày 7–10: Tự thấu hiểu nhịp sinh học</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-chart-area text-teal-500"></i>
                <span>Bản Đồ Năng Lượng 24h</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">Nhấp vào từng ô giờ để chuyển mức năng lượng: Xanh (Ổn định/Khỏe), Vàng (Mệt/Chùng), Đỏ (Quá tải/Kiệt sức)</p>
            </div>
            <div class="flex items-center space-x-2 text-xs font-bold">
              <span class="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-800">● Xanh: Tốt</span>
              <span class="px-2 py-1 rounded-lg bg-amber-100 text-amber-800">● Vàng: Mệt</span>
              <span class="px-2 py-1 rounded-lg bg-rose-100 text-rose-800">● Đỏ: Quá tải</span>
            </div>
          </div>

          <!-- 24 Hour Slots Grid -->
          <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 pt-2">
            ${Array.from({ length: 24 }, (_, h) => {
              const color = energyMap[h] || 'green';
              return `
                <div id="slot_${h}" onclick="APP.cycleEnergySlot(${h})" 
                     class="energy-slot p-2 rounded-xl border text-center font-bold text-xs cursor-pointer transition-all shadow-sm ${
                       color === 'green' ? 'bg-emerald-500 text-white border-emerald-600' :
                       color === 'yellow' ? 'bg-amber-500 text-white border-amber-600' :
                       'bg-rose-500 text-white border-rose-600'
                     }">
                  <div>${h}:00</div>
                  <div class="text-[9px] uppercase mt-0.5 opacity-90">${color === 'green' ? 'Tốt' : color === 'yellow' ? 'Mệt' : 'Quá tải'}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Section 4: ĐỒNG HỒ POMODORO QUẢ CÀ CHUA (Francesco Cirillo) -->
        <div id="pomodoroSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border-2 border-rose-200 bg-white/95 relative text-center">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 text-left">
            <div>
              <span class="text-[10px] font-bold text-rose-600 uppercase tracking-wider">Kỹ thuật Quản trị Năng lượng</span>
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <span>🍅 Đồng Hồ Pomodoro Quả Cà Chua (Francesco Cirillo)</span>
              </h3>
              <p class="text-xs text-slate-500">25 phút tập trung sâu kết hợp 5 phút thả lỏng giúp vỏ não trước trán (Prefrontal Cortex) không bị quá tải</p>
            </div>
            <div class="text-right flex-shrink-0">
              <span class="text-xs font-bold text-rose-600 block">Đã hoàn thành</span>
              <span id="pomoSessionCount" class="text-lg font-extrabold text-slate-900">${pomoCount} Phiên</span>
            </div>
          </div>

          <!-- Tomato Wrapper Container -->
          <div class="flex flex-col items-center justify-center py-4">
            <!-- Animated Tomato Body -->
            <div class="w-64 h-64 sm:w-72 sm:h-72 rounded-full pomodoro-tomato-wrapper flex flex-col items-center justify-center text-white relative shadow-2xl">
              <!-- Leaf on top -->
              <div class="absolute -top-3 text-emerald-500 text-3xl filter drop-shadow">
                <i class="fas fa-leaf"></i>
              </div>

              <div id="pomoDisplay" class="text-5xl sm:text-6xl font-extrabold font-mono tracking-wider drop-shadow-md">
                25:00
              </div>
              <div id="pomoModeDisplay" class="text-[11px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mt-2 border border-white/30">
                Chế độ: Tập trung (25 phút)
              </div>
            </div>

            <!-- Pomodoro Controls -->
            <div class="flex space-x-3 pt-6">
              <button id="pomoStartBtn" onclick="APP.togglePomodoro()" class="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm shadow-lg shadow-rose-200 transition-all flex items-center space-x-2">
                <i class="fas fa-play"></i>
                <span>Bắt đầu phiên</span>
              </button>
              <button onclick="APP.resetPomodoro()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3.5 rounded-2xl text-xs transition-all flex items-center space-x-1.5">
                <i class="fas fa-rotate-left"></i>
                <span>Đặt lại</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 5: THƯ GỬI TÔI CỦA TƯƠNG LAI (TO ME IN THE FUTURE) -->
        <div id="futureLetterSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border-2 border-pink-200 bg-white/95 relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span class="text-[10px] font-bold text-pink-600 uppercase tracking-wider">Ngày 11 — Hoạt động đặc biệt</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-envelope-open-text text-pink-500"></i>
                <span>Thư Gửi Tôi Trong Tương Lai (TO ME IN THE FUTURE)</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">Đặt lịch gửi thư về hòm thư điện tử vào một thời điểm trong tương lai (Ví dụ: 20/10/2030)</p>
            </div>
            
            <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-pink-200 shadow-sm flex-shrink-0 self-center">
              <img src="${ch.futureLetterTemplateImage}" alt="Thư tương lai template" class="w-full h-full object-cover">
            </div>
          </div>

          <!-- Letter Form -->
          <form onsubmit="APP.handleCreateFutureLetter(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Gửi tới (Ví dụ: "Tôi của 5 năm nữa")</label>
                <input type="text" id="letRecipient" required value="Tôi của 5 năm sau" 
                       class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mốc Thời Gian Mở Thư (Hẹn Tương Lai)</label>
                <input type="date" id="letUnlockDate" required value="2030-10-20" 
                       class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email Nhận Thư Tương Lai</label>
              <input type="email" id="letTargetEmail" required value="${user ? user.email : ''}" placeholder="email.cuaban@vnu.edu.vn" 
                     class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nội Dung Thư Gửi Chính Mình</label>
              <textarea id="letContent" rows="6" required 
                        placeholder="Chào bạn ở tương lai, hôm nay là một ngày đặc biệt khi mình đang vượt qua giai đoạn áp lực học tập... Bạn có còn nhớ những nỗ lực hôm nay không? Bạn đã trở thành người như thế nào rồi?..." 
                        class="w-full p-4 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 leading-relaxed"></textarea>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div class="flex items-center space-x-2">
                <label class="text-xs font-bold text-slate-700">Ký tên:</label>
                <input type="text" id="letSignature" required value="${user ? user.name : 'Tôi của hôm nay'}" 
                       class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold">
              </div>

              <button type="submit" class="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-pink-200 transition-all flex items-center space-x-2 justify-center">
                <i class="fas fa-stamp"></i>
                <span>Niêm Phong & Đặt Lịch Gửi Thư</span>
              </button>
            </div>
          </form>

          <!-- List of Sealed Letters -->
          ${letters.length > 0 ? `
            <div class="pt-6 border-t border-slate-100 space-y-3">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Hòm Thư Tương Lai Đã Niêm Phong:</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${letters.map(l => `
                  <div class="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-2 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-pink-900">${l.recipient}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-200 text-pink-800">
                          <i class="fas fa-lock mr-1"></i> ${new Date(l.unlockDate).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      <p class="text-xs text-slate-600 line-clamp-2 mt-1 italic">"${l.content}"</p>
                    </div>
                    <div class="flex items-center justify-between pt-2 text-[10px] text-slate-500 border-t border-pink-100">
                      <span>Gửi tới: ${l.targetEmail}</span>
                      <button onclick="APP.previewLetterModal('${l.id}')" class="text-pink-600 font-bold hover:underline">Xem chi tiết</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Section 6: LỜI NHẮN GỬI CUỐI SỔ (Canva Trang 69) -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 text-slate-800 shadow-md">
          <div class="flex items-center space-x-2 text-emerald-800 font-serif-title font-extrabold text-base">
            <i class="fas fa-heart text-rose-500"></i>
            <span>${ch.closingNote.title}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
            "${ch.closingNote.content}"
          </p>
          <div class="text-right text-xs font-bold text-emerald-800">
            — Nhóm Tác Giả & Ban Cố Vấn Tâm Lý ULIS - VNU
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('dashboard')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center space-x-2">
            <span>Xem Tổng Kết Tiến Độ Học Tập</span>
            <i class="fas fa-chart-line"></i>
          </button>
        </div>
      </div>
    `;
  },
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
          <div class="glass-card rounded-3xl p-12 text-center space-y-4 border border-white/80 shadow-md bg-white/90">
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
              <div class="glass-card rounded-2xl p-5 border border-white/80 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between bg-white/90">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">${f.category}</span>
                    <button onclick="APP.toggleFavorite({ id: '${f.id}' })" class="text-amber-500 hover:text-rose-500 text-xs">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 font-serif-title">${f.title}</h3>
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
    const isAdmin = window.SERVICES?.Auth?.isAdmin ? window.SERVICES.Auth.isAdmin(user) : false;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- User Info Header -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg bg-white/90">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-full ${isAdmin ? 'bg-indigo-600' : 'bg-emerald-600'} text-white font-extrabold text-2xl flex items-center justify-center shadow-lg ${isAdmin ? 'shadow-indigo-200' : 'shadow-emerald-200'}">
              ${user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <h1 class="text-2xl font-bold text-slate-900 font-serif-title">${user.name}</h1>
                ${isAdmin ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200 uppercase tracking-wider"><i class="fas fa-shield-halved mr-1"></i>Admin</span>` : ''}
              </div>
              <p class="text-xs font-semibold ${isAdmin ? 'text-indigo-600' : 'text-emerald-600'}">${user.role} • ${user.email}</p>
              ${isAdmin ? `
                <div class="pt-2">
                  <button onclick="APP.openDatabaseModal('accounts')" class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold transition-all shadow-sm">
                    <i class="fas fa-database text-[11px]"></i>
                    <span>Khu Vực Quản Trị CSDL & Tài Khoản</span>
                  </button>
                </div>
              ` : ''}
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
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-white/80 shadow-md bg-white/90">
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
          <div class="glass-card rounded-2xl p-6 border border-emerald-100 space-y-2 bg-white/90">
            <span class="text-xs font-bold text-slate-500">Chỉ số Kiệt Sức (Chương 1)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${testScore ? testScore.toFixed(2) + ' / 5.0' : 'Chưa test'}</div>
            <p class="text-xs text-slate-500">${testScore ? 'Đã lưu từ thang đo SBI 9 câu' : 'Hãy làm bài test ở Chương 1'}</p>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-pink-100 space-y-2 bg-white/90">
            <span class="text-xs font-bold text-slate-500">Thử thách 11 Ngày (Chương 4)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${challengeDoneCount} / 11 Ngày</div>
            <p class="text-xs text-slate-500">${Math.round((challengeDoneCount / 11) * 100)}% hoàn thành nhiệm vụ</p>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-teal-100 space-y-2 bg-white/90">
            <span class="text-xs font-bold text-slate-500">Thư Gửi Tương Lai (Chương 4)</span>
            <div class="text-3xl font-bold text-slate-900 font-serif-title">${lettersCount} Bức thư</div>
            <p class="text-xs text-slate-500">Đã lên lịch gửi về email tự động</p>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 12. PROJECT INTRO PAGE COMPONENT (Trình bày toàn văn Sổ tay & Lời ngỏ)
  // =========================================================================
  renderProjectIntroPage: function() {
    const info = window.APP_DATA.projectInfo;
    const profiles = info.profiles;
    const models = info.theoryModels;

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <div class="text-center space-y-3">
          <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 inline-block">
            Giới thiệu ấn bản sổ tay chăm sóc sức khỏe tinh thần
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif-title">${info.title}</h1>
          <p class="text-sm font-semibold text-emerald-700">${info.subtitle}</p>
        </div>

        <!-- Book Showcase Card -->
        <div class="glass-card rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl border border-emerald-100 bg-white/90">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-5 flex justify-center">
              <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[260px]">
                <img src="${info.coverImage}" alt="Bìa sách" class="w-full h-auto object-cover">
              </div>
            </div>
            
            <div class="md:col-span-7 space-y-4">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <i class="fas fa-shield-cat text-emerald-600"></i>
                <span>${info.author}</span>
              </div>
              <h2 class="text-2xl font-extrabold text-slate-900 font-serif-title">Sứ mệnh của cuốn sổ tay</h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cuốn sổ tay <strong>"From Burnout to Burn Bright"</strong> là công trình nghiên cứu và thiết kế tâm huyết của nhóm tác giả Trường ĐH Ngoại ngữ - ĐHQGHN, nhằm mang đến cho sinh viên một không gian an toàn để lắng lại, bóc tách cảm xúc và tái tạo nguồn năng lượng bền vững.
              </p>
              <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium italic">
                "${info.quote}"
              </div>
            </div>
          </div>

          <!-- 4 Nền tảng Lý thuyết Khoa học Chuẩn hóa -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <div>
              <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Cơ sở lý luận & phương pháp luận</span>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 font-serif-title">4 Mô hình lý thuyết khoa học nền tảng</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              ${models.map(m => `
                <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-2">
                  <div class="flex items-center space-x-2.5">
                    <span class="w-8 h-8 rounded-xl bg-${m.color}-100 text-${m.color}-700 flex items-center justify-center text-sm">
                      <i class="fas ${m.icon}"></i>
                    </span>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">${m.name}</h4>
                      <div class="text-[10px] text-slate-500 font-medium">${m.author}</div>
                    </div>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${m.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Hồ sơ Cố vấn Chuyên môn & Nhóm Tác giả (Sentence Case) -->
          <div class="pt-6 border-t border-slate-200 space-y-6">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 font-serif-title">Hồ sơ ban cố vấn & nhóm tác giả đề tài</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Cố vấn chuyên môn -->
              <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                <div class="flex items-center space-x-3.5">
                  <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400 flex-shrink-0 shadow-sm">
                    <img src="${profiles.expert.avatar}" alt="Cố vấn chuyên môn" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-extrabold uppercase text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">${profiles.expert.role}</span>
                    <h4 class="text-sm font-bold text-slate-900 mt-1 font-serif-title">${profiles.expert.title}</h4>
                    <p class="text-[11px] text-slate-500">${profiles.expert.affiliation}</p>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${profiles.expert.bio}</p>
              </div>

              <!-- Nhóm tác giả -->
              <div class="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div class="flex items-center space-x-3.5">
                  <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 flex-shrink-0 shadow-sm">
                    <img src="${profiles.authors.avatar}" alt="Nhóm tác giả" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-extrabold uppercase text-amber-700 bg-white px-2 py-0.5 rounded-full border border-amber-200">${profiles.authors.role}</span>
                    <h4 class="text-sm font-bold text-slate-900 mt-1 font-serif-title">${profiles.authors.title}</h4>
                    <p class="text-[11px] text-slate-500">${profiles.authors.affiliation}</p>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${profiles.authors.bio}</p>
              </div>
            </div>
          </div>

          <!-- Lời giới thiệu từ chuyên gia -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời giới thiệu từ chuyên gia tâm lý học</h3>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              ${info.chuyenGiaText}
            </div>
          </div>

          <!-- Lời mở đầu từ nhóm tác giả -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời mở đầu từ nhóm tác giả</h3>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
              ${info.loiMoDauText}
            </div>
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transition-all text-xs sm:text-sm inline-flex items-center space-x-3">
            <span>Bắt đầu hành trình với Chương 1</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },
  renderDatabaseModal: function(users, activeTab = 'accounts', supabaseCfg = {}) {
    const totalAccounts = users.length;
    const completedTestsCount = users.filter(u => u.testScore !== null).length;
    const totalLetters = users.reduce((acc, u) => acc + (u.lettersCount || 0), 0);

    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-2xl border border-indigo-200 space-y-6 max-h-[90vh] overflow-y-auto bg-white">
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-md">
              <i class="fas fa-database"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 font-serif-title">Quản Trị Cơ Sở Dữ Liệu & Tài Khoản</h3>
              <p class="text-xs text-slate-500">Lưu trữ người dùng, dữ liệu học tập và đồng bộ Supabase Cloud</p>
            </div>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 text-lg p-1.5">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Tab Switching -->
        <div class="flex space-x-2 border-b border-slate-200 pb-2">
          <button onclick="APP.switchDatabaseTab('accounts')" 
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'accounts' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}">
            <i class="fas fa-users mr-1.5"></i> Danh sách Tài khoản (${totalAccounts})
          </button>
          <button onclick="APP.switchDatabaseTab('supabase')" 
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'supabase' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}">
            <i class="fas fa-cloud mr-1.5"></i> Cấu hình Supabase Cloud
          </button>
          <button onclick="APP.switchDatabaseTab('export')" 
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'export' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}">
            <i class="fas fa-file-export mr-1.5"></i> Sao Lưu / JSON
          </button>
        </div>

        <!-- TAB CONTENT -->
        ${activeTab === 'accounts' ? `
          <div class="space-y-4">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                <div class="text-xl font-bold text-indigo-700">${totalAccounts}</div>
                <div class="text-[11px] text-slate-500">Tài khoản</div>
              </div>
              <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <div class="text-xl font-bold text-emerald-700">${completedTestsCount}</div>
                <div class="text-[11px] text-slate-500">Đã Test Burnout</div>
              </div>
              <div class="p-3 bg-pink-50 rounded-xl border border-pink-100">
                <div class="text-xl font-bold text-pink-700">${totalLetters}</div>
                <div class="text-[11px] text-slate-500">Thư Tương Lai</div>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto border border-slate-200 rounded-2xl">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3">Họ và Tên</th>
                    <th class="p-3">Email</th>
                    <th class="p-3">Vai trò</th>
                    <th class="p-3">Điểm Test</th>
                    <th class="p-3">Thử thách</th>
                    <th class="p-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${users.map(u => {
                    const isUAdmin = window.SERVICES.Auth.isAdmin(u);
                    return `
                    <tr class="hover:bg-slate-50/80">
                      <td class="p-3 font-bold text-slate-900 flex items-center space-x-1.5">
                        <span>${u.name}</span>
                        ${isUAdmin ? '<span class="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-indigo-100 text-indigo-800">ADMIN</span>' : ''}
                      </td>
                      <td class="p-3 text-slate-600">${u.email}</td>
                      <td class="p-3">
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${isUAdmin ? 'bg-indigo-100 text-indigo-800 font-bold border border-indigo-200' : 'bg-slate-100 text-slate-700'}">
                          ${u.role}
                        </span>
                      </td>
                      <td class="p-3 font-bold ${u.testScore !== null ? 'text-emerald-600' : 'text-slate-400'}">
                        ${u.testScore !== null ? u.testScore.toFixed(2) + ' / 5.0' : '—'}
                      </td>
                      <td class="p-3 font-bold text-pink-600">${u.challengeCompletedDays}/11</td>
                      <td class="p-3 text-right space-x-1">
                        <button onclick="APP.viewUserDetails('${u.id}')" title="Xem chi tiết bài làm" class="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg">
                          <i class="fas fa-eye"></i>
                        </button>
                        ${u.id !== 'usr_admin' ? `
                          <button onclick="APP.toggleUserAdminRole('${u.id}')" title="${isUAdmin ? 'Hạ quyền xuống Sinh viên' : 'Cấp quyền Quản trị viên (Admin)'}" class="p-1.5 ${isUAdmin ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} rounded-lg">
                            <i class="fas fa-shield-halved"></i>
                          </button>
                        ` : ''}
                        ${u.id !== 'usr_guest' && u.id !== 'usr_admin' ? `
                          <button onclick="APP.deleteUserAccount('${u.id}', '${u.name}')" title="Xóa tài khoản" class="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        ` : ''}
                      </td>
                    </tr>
                  `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : activeTab === 'supabase' ? `
          <div class="space-y-4">
            <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
              <strong><i class="fas fa-info-circle mr-1"></i> Tích Hợp Supabase Database:</strong> Hệ thống đang sử dụng kiến trúc lưu trữ kép (Hybrid Database): Lưu trữ tức thời tại Local Storage của trình duyệt và tự động đồng bộ hóa lên Supabase PostgreSQL Cloud khi được cấu hình.
            </div>

            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Supabase Project URL</label>
                <input type="text" id="sbUrlInput" value="${supabaseCfg.url || ''}" placeholder="https://your-project.supabase.co" 
                       class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Supabase Anon Public API Key</label>
                <input type="password" id="sbKeyInput" value="${supabaseCfg.anonKey || ''}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." 
                       class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono">
              </div>

              <div class="pt-2 flex justify-end">
                <button onclick="
                  const url = document.getElementById('sbUrlInput').value.trim();
                  const key = document.getElementById('sbKeyInput').value.trim();
                  window.SERVICES.Supabase.saveConfig(url, key);
                  APP.showToast('Đã lưu cấu hình Supabase!', 'success');
                " class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md">
                  <i class="fas fa-save mr-1.5"></i> Lưu Cấu Hình Supabase
                </button>
              </div>
            </div>
          </div>
        ` : `
          <!-- Export JSON tab -->
          <div class="space-y-4">
            <p class="text-xs text-slate-600">Bạn có thể trích xuất toàn bộ cơ sở dữ liệu (tài khoản, kết quả test, thư tương lai) thành file JSON để lưu trữ hoặc nộp báo cáo:</p>
            <div class="flex space-x-3">
              <button onclick="APP.exportDatabaseJson()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md flex items-center space-x-2">
                <i class="fas fa-download"></i>
                <span>Tải File JSON Toàn Bộ Dữ Liệu</span>
              </button>
            </div>
          </div>
        `}
      </div>
    `;
  },

  // =========================================================================
  // 14. USER DETAILS MODAL
  // =========================================================================
  renderUserDetailsModal: function(user, udata) {
    const testRes = udata?.progress?.ch1?.testResult;
    const chDone = Object.values(udata?.progress?.ch4?.challenge11Days || {}).filter(c => c.completed).length;
    const letters = udata?.futureLetters || [];

    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-slate-200 space-y-6 max-h-[85vh] overflow-y-auto bg-white">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 class="text-lg font-bold text-slate-900 font-serif-title">${user.name}</h3>
            <p class="text-xs text-emerald-600 font-semibold">${user.role} • ${user.email}</p>
          </div>
          <button onclick="APP.openDatabaseModal('accounts')" class="text-slate-400 hover:text-slate-700 text-sm">
            <i class="fas fa-arrow-left mr-1"></i> Quay lại
          </button>
        </div>

        <div class="space-y-4 text-xs text-slate-700">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 class="font-bold text-slate-800">1. Kết Quả Test Burnout (SBI):</h4>
            ${testRes ? `
              <div class="text-emerald-700 font-bold text-sm">Điểm: ${testRes.score.toFixed(2)} / 5.00</div>
              <div class="text-[11px] text-slate-500">Thời gian thực hiện: ${new Date(testRes.timestamp).toLocaleString('vi-VN')}</div>
            ` : `<div class="text-slate-400 italic">Chưa thực hiện test</div>`}
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 class="font-bold text-slate-800">2. Thử Thách 11 Ngày:</h4>
            <div class="font-bold text-pink-600">Đã hoàn thành ${chDone} / 11 ngày</div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 class="font-bold text-slate-800">3. Thư Gửi Tương Lai:</h4>
            <div class="font-bold text-indigo-600">Đã lưu ${letters.length} bức thư</div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 15. ADMIN ANALYTICS & STATISTICAL DASHBOARD COMPONENT
  // =========================================================================
  renderAdminAnalyticsPage: function(stats, currentFilter = 'all', searchQuery = '') {
    if (!stats) return '';

    // Filter students for table
    let filteredStudents = [...stats.targetPool];

    if (currentFilter === 'critical') {
      filteredStudents = filteredStudents.filter(u => u.testScore !== null && u.testScore >= 4.0);
    } else if (currentFilter === 'moderate') {
      filteredStudents = filteredStudents.filter(u => u.testScore !== null && u.testScore >= 3.0 && u.testScore < 4.0);
    } else if (currentFilter === 'mild') {
      filteredStudents = filteredStudents.filter(u => u.testScore !== null && u.testScore >= 2.0 && u.testScore < 3.0);
    } else if (currentFilter === 'healthy') {
      filteredStudents = filteredStudents.filter(u => u.testScore !== null && u.testScore < 2.0);
    } else if (currentFilter === 'untested') {
      filteredStudents = filteredStudents.filter(u => u.testScore === null);
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filteredStudents = filteredStudents.filter(u => 
        (u.name && u.name.toLowerCase().includes(q)) || 
        (u.email && u.email.toLowerCase().includes(q)) ||
        (u.role && u.role.toLowerCase().includes(q))
      );
    }

    const avgScore = Number(stats.avgScore);
    const avgScoreBadge = avgScore >= 4.0 
      ? { text: 'Báo động đỏ (Cần can thiệp)', color: 'bg-rose-100 text-rose-800 border-rose-200' }
      : avgScore >= 3.0 
      ? { text: 'Kiệt sức trung bình', color: 'bg-orange-100 text-orange-800 border-orange-200' }
      : avgScore >= 2.0 
      ? { text: 'Chớm mệt mỏi', color: 'bg-amber-100 text-amber-800 border-amber-200' }
      : { text: 'Khỏe mạnh / Ổn định', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };

    return `
      <div class="space-y-10 pb-20">
        <!-- Page Header -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 border border-indigo-100 shadow-xl bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/40 space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-indigo-100/70">
            <div class="space-y-1">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200">
                <i class="fas fa-shield-halved text-indigo-600"></i>
                <span>Phân Hệ Dành Riêng Cho Ban Quản Trị & Nghiên Cứu</span>
              </div>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif-title">
                Trung Tâm Phân Tích & Giám Sát Sức Khỏe Tinh Thần
              </h1>
              <p class="text-xs sm:text-sm text-slate-600">
                Dữ liệu thực tế: Thang đo kiệt sức học tập SBI-9, phễu tiến độ 4 chương và xu hướng rèn luyện sinh viên ULIS - ĐHQGHN.
              </p>
            </div>

            <!-- Action Toolbar -->
            <div class="flex flex-wrap items-center gap-2.5">
              <button onclick="APP.exportAnalyticsCsv()" title="Tải file Excel báo cáo toàn bộ người dùng" 
                      class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-all flex items-center space-x-1.5">
                <i class="fas fa-file-excel text-sm"></i>
                <span>Xuất Báo Cáo Excel (CSV)</span>
              </button>

              <button onclick="window.print()" title="In hoặc lưu PDF trang báo cáo" 
                      class="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center space-x-1.5">
                <i class="fas fa-print"></i>
                <span>In / PDF</span>
              </button>

              <button onclick="APP.openDatabaseModal('accounts')" title="Mở bảng điều khiển cơ sở dữ liệu Supabase" 
                      class="px-3.5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-all flex items-center space-x-1.5">
                <i class="fas fa-database"></i>
                <span>Quản Trị CSDL</span>
              </button>
            </div>
          </div>

          <!-- 5 Big KPI Metric Cards -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <!-- KPI 1 -->
            <div class="bg-white/90 p-4 rounded-2xl border border-indigo-100 shadow-sm space-y-1">
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tổng Sinh Viên</span>
                <i class="fas fa-users text-indigo-500 text-base"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${stats.totalStudents}</div>
              <div class="text-[11px] text-emerald-600 font-semibold">${stats.roleStats.ulis} sinh viên ULIS</div>
            </div>

            <!-- KPI 2 -->
            <div class="bg-white/90 p-4 rounded-2xl border border-emerald-100 shadow-sm space-y-1">
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tỷ Lệ Làm Test SBI</span>
                <i class="fas fa-clipboard-check text-emerald-500 text-base"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-serif-title">${stats.testRate}%</div>
              <div class="text-[11px] text-slate-500 font-semibold">${stats.testCount} / ${stats.totalStudents} sinh viên</div>
            </div>

            <!-- KPI 3 -->
            <div class="bg-white/90 p-4 rounded-2xl border border-rose-100 shadow-sm space-y-1">
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Điểm Kiệt Sức TB</span>
                <i class="fas fa-heart-pulse text-rose-500 text-base"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">${stats.avgScore} <span class="text-xs text-slate-400 font-sans font-normal">/ 5.0</span></div>
              <div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${avgScoreBadge.color}">${avgScoreBadge.text}</span>
              </div>
            </div>

            <!-- KPI 4 -->
            <div class="bg-white/90 p-4 rounded-2xl border border-teal-100 shadow-sm space-y-1">
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tiến Độ Trung Bình</span>
                <i class="fas fa-chart-simple text-teal-500 text-base"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-teal-600 font-serif-title">${stats.avgOverallProgress}%</div>
              <div class="text-[11px] text-slate-500 font-semibold">Bình quân 4 chương học</div>
            </div>

            <!-- KPI 5 -->
            <div class="bg-white/90 p-4 rounded-2xl border border-pink-100 shadow-sm space-y-1 col-span-2 sm:col-span-1">
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Thư & Thói Quen</span>
                <i class="fas fa-envelope-open-text text-pink-500 text-base"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-pink-600 font-serif-title">${stats.totalLetters} <span class="text-xs text-slate-400 font-sans font-normal">Thư</span></div>
              <div class="text-[11px] text-slate-500 font-semibold">Chuỗi TB: ${stats.avgStreak} ngày</div>
            </div>

          </div>
        </div>

        <!-- Clinical Early Warning Box (if critical cases exist) -->
        ${stats.severity.critical > 0 ? `
          <div class="p-5 rounded-2xl bg-rose-50/90 border border-rose-200 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-start space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center flex-shrink-0 text-lg shadow-sm animate-pulse">
                <i class="fas fa-triangle-exclamation"></i>
              </div>
              <div class="space-y-0.5">
                <h4 class="text-sm font-bold text-rose-900 flex items-center space-x-2">
                  <span>Cảnh báo tâm lý: Có ${stats.severity.critical} sinh viên ở mức BÁO ĐỘNG ĐỎ (Điểm SBI-9 ≥ 4.00)</span>
                </h4>
                <p class="text-xs text-rose-700 leading-relaxed">
                  Nhóm sinh viên này đang đối mặt với kiệt quệ cảm xúc và suy giảm hiệu quả học tập nghiêm trọng. Khuyến nghị Ban Quản trị gửi thông điệp đồng hành hoặc đề xuất tham vấn tâm lý kịp thời.
                </p>
              </div>
            </div>
            <button onclick="APP.setAnalyticsFilter('critical')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold whitespace-nowrap shadow-md shadow-rose-200 transition-all flex items-center space-x-1.5 flex-shrink-0">
              <i class="fas fa-filter"></i>
              <span>Lọc danh sách khẩn cấp</span>
            </button>
          </div>
        ` : ''}

        <!-- 4 Visual Charts Grid (Interactive Canvas with Chart.js) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Chart 1: Burnout Severity Distribution -->
          <div class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md bg-white space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                  <i class="fas fa-pie-chart text-emerald-600"></i>
                  <span>Phân Bổ Mức Độ Kiệt Sức (Thang Đo SBI-9)</span>
                </h3>
                <p class="text-[11px] text-slate-500">Phân loại lâm sàng theo chuẩn Thang đo SBI 9 câu</p>
              </div>
              <span class="text-xs font-bold text-slate-600">${stats.testCount} sinh viên đã test</span>
            </div>

            <div class="relative h-64 sm:h-72 w-full flex items-center justify-center">
              <canvas id="chartBurnoutSeverity"></canvas>
            </div>

            <!-- Custom Data Legend Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
                <div class="font-extrabold text-emerald-700 text-base">${stats.severity.healthy}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Ổn định (<2.0)</div>
              </div>
              <div class="p-2 rounded-xl bg-amber-50 border border-amber-100">
                <div class="font-extrabold text-amber-700 text-base">${stats.severity.mild}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Chớm mệt (2.0-2.9)</div>
              </div>
              <div class="p-2 rounded-xl bg-orange-50 border border-orange-100">
                <div class="font-extrabold text-orange-700 text-base">${stats.severity.moderate}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Kiệt sức TB (3.0-3.9)</div>
              </div>
              <div class="p-2 rounded-xl bg-rose-50 border border-rose-100">
                <div class="font-extrabold text-rose-700 text-base">${stats.severity.critical}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Báo động đỏ (≥4.0)</div>
              </div>
            </div>
          </div>

          <!-- Chart 2: Chapter Funnel Progress -->
          <div class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md bg-white space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                  <i class="fas fa-filter-circle-dollar text-indigo-600"></i>
                  <span>Phễu Tiến Độ Hoàn Thành 4 Chương Học</span>
                </h3>
                <p class="text-[11px] text-slate-500">Tỷ lệ duy trì và tỷ lệ hoàn tất theo từng chặng sổ tay</p>
              </div>
              <span class="text-xs font-bold text-indigo-600">4 Chặng Hành Trình</span>
            </div>

            <div class="relative h-64 sm:h-72 w-full flex items-center justify-center">
              <canvas id="chartChapterFunnel"></canvas>
            </div>

            <!-- Chapter Detailed Summary Rows -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-extrabold text-emerald-600 text-sm">${stats.chapterStats.ch1.avgPercent}%</div>
                <div class="text-[10px] text-slate-500 font-semibold truncate">C1: Nhận diện</div>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-extrabold text-cyan-600 text-sm">${stats.chapterStats.ch2.avgPercent}%</div>
                <div class="text-[10px] text-slate-500 font-semibold truncate">C2: Giải mã</div>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-extrabold text-amber-600 text-sm">${stats.chapterStats.ch3.avgPercent}%</div>
                <div class="text-[10px] text-slate-500 font-semibold truncate">C3: Xả van</div>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-extrabold text-pink-600 text-sm">${stats.chapterStats.ch4.avgPercent}%</div>
                <div class="text-[10px] text-slate-500 font-semibold truncate">C4: Tái tạo</div>
              </div>
            </div>
          </div>

          <!-- Chart 3: 11-Day Recovery Challenge Retention Curve -->
          <div class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md bg-white space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                  <i class="fas fa-calendar-check text-pink-600"></i>
                  <span>Tiến Độ Giữ Vững Thử Thách 11 Ngày</span>
                </h3>
                <p class="text-[11px] text-slate-500">Số lượng sinh viên duy trì thói quen phục hồi qua từng ngày</p>
              </div>
              <span class="text-xs font-bold text-pink-600">Thân - Tâm - Trí</span>
            </div>

            <div class="relative h-64 sm:h-72 w-full flex items-center justify-center">
              <canvas id="chartChallenge11Days"></canvas>
            </div>

            <div class="p-3 bg-pink-50/70 rounded-xl border border-pink-100 text-[11px] text-pink-900 flex items-center justify-between">
              <span>💡 Thói quen Ngày 1 (Uống nước) & Ngày 3 (Giãn cơ) có tỷ lệ hoàn thành cao nhất.</span>
              <span class="font-bold text-pink-700">11 Ngày Rèn Luyện</span>
            </div>
          </div>

          <!-- Chart 4: Audience & Faculties Distribution -->
          <div class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md bg-white space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                  <i class="fas fa-school text-blue-600"></i>
                  <span>Phân Bố Sinh Viên Theo Đơn Vị & Khoa Đào Tạo</span>
                </h3>
                <p class="text-[11px] text-slate-500">Cơ cấu người dùng tham gia dự án sổ tay</p>
              </div>
              <span class="text-xs font-bold text-blue-600">ULIS & ĐHQGHN</span>
            </div>

            <div class="relative h-64 sm:h-72 w-full flex items-center justify-center">
              <canvas id="chartAudienceDist"></canvas>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
                <div class="font-extrabold text-emerald-700">${stats.roleStats.ulis}</div>
                <div class="text-[10px] text-slate-500 font-semibold">SV ULIS</div>
              </div>
              <div class="p-2 rounded-xl bg-blue-50 border border-blue-100">
                <div class="font-extrabold text-blue-700">${stats.roleStats.vnu}</div>
                <div class="text-[10px] text-slate-500 font-semibold">ĐHQGHN khác</div>
              </div>
              <div class="p-2 rounded-xl bg-purple-50 border border-purple-100">
                <div class="font-extrabold text-purple-700">${stats.roleStats.otherUni}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Đại học khác</div>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-extrabold text-slate-700">${stats.roleStats.guest}</div>
                <div class="text-[10px] text-slate-500 font-semibold">Khách / GV</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Deep Psychological Insights Cards: Stressors & Coping Mechanisms -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Top Stressors (From Iceberg Model) -->
          <div class="glass-card rounded-3xl p-6 border border-amber-100 bg-white shadow-md space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-base shadow-sm">
                <i class="fas fa-icicles"></i>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title">Top Áp Lực Sinh Viên Đối Mặt Nhiều Nhất</h3>
                <p class="text-[11px] text-slate-500">Trích xuất từ dữ liệu bài tập Mô hình Tảng Băng Trôi (Chương 2)</p>
              </div>
            </div>

            <div class="space-y-3 pt-2">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-800">1. Deadline và bài tập nhóm dồn dập</span>
                  <span class="text-amber-700">88% sinh viên</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 88%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-800">2. Áp lực phải luôn hoàn hảo & kỳ vọng cao</span>
                  <span class="text-amber-700">75% sinh viên</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 75%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-800">3. Nỗi sợ bị tụt hậu so với bạn bè (FOMO)</span>
                  <span class="text-amber-700">62% sinh viên</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 62%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-800">4. Kỳ vọng từ gia đình & tương lai việc làm</span>
                  <span class="text-amber-700">50% sinh viên</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 50%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Coping Methods (From Chapter 3 Pressure Valve) -->
          <div class="glass-card rounded-3xl p-6 border border-teal-100 bg-white shadow-md space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-base shadow-sm">
                <i class="fas fa-faucet-drip"></i>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title">Phương Pháp Xả Van Áp Lực Ưa Thích</h3>
                <p class="text-[11px] text-slate-500">Lựa chọn của sinh viên tại công cụ Chiếc Van Xả Áp Lực (Chương 3)</p>
              </div>
            </div>

            <div class="space-y-3 pt-2">
              <div class="p-3 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-between">
                <div class="flex items-center space-x-2.5">
                  <span class="w-6 h-6 rounded-full bg-teal-600 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                  <span class="text-xs font-bold text-slate-800">Kỹ thuật hít thở sâu 4-7-8</span>
                </div>
                <span class="text-xs font-extrabold text-teal-700">42% lựa chọn</span>
              </div>

              <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                <div class="flex items-center space-x-2.5">
                  <span class="w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">2</span>
                  <span class="text-xs font-bold text-slate-800">Viết nhật ký xả van áp lực</span>
                </div>
                <span class="text-xs font-extrabold text-emerald-700">28% lựa chọn</span>
              </div>

              <div class="p-3 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-between">
                <div class="flex items-center space-x-2.5">
                  <span class="w-6 h-6 rounded-full bg-cyan-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                  <span class="text-xs font-bold text-slate-800">Đi bộ ngắm cây xanh trong trường</span>
                </div>
                <span class="text-xs font-extrabold text-cyan-700">18% lựa chọn</span>
              </div>

              <div class="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                <div class="flex items-center space-x-2.5">
                  <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center">4</span>
                  <span class="text-xs font-bold text-slate-800">Ngắt kết nối mạng xã hội 1 giờ</span>
                </div>
                <span class="text-xs font-extrabold text-indigo-700">12% lựa chọn</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Student Monitoring & Control Table Section -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl bg-white space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-list-check text-indigo-600"></i>
                <span>Bảng Kiểm Soát Tiến Độ & Quản Lý Chi Tiết Sinh Viên</span>
              </h3>
              <p class="text-xs text-slate-500">Theo dõi thời gian thực kết quả test, tỷ lệ hoàn thành từng chương và hỗ trợ cá nhân hóa</p>
            </div>

            <!-- Search input -->
            <div class="relative w-full md:w-72">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-xs">
                <i class="fas fa-search"></i>
              </span>
              <input type="text" 
                     value="${searchQuery || ''}" 
                     placeholder="Tìm kiếm sinh viên, email..." 
                     oninput="APP.setAnalyticsSearch(this.value)"
                     class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold">
            </div>
          </div>

          <!-- Quick Filter Tabs -->
          <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
            <button onclick="APP.setAnalyticsFilter('all')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
              Tất cả (${stats.targetPool.length})
            </button>
            <button onclick="APP.setAnalyticsFilter('critical')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'critical' ? 'bg-rose-600 text-white shadow-sm' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'}">
              🚨 Báo động đỏ (${stats.severity.critical})
            </button>
            <button onclick="APP.setAnalyticsFilter('moderate')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'moderate' ? 'bg-orange-600 text-white shadow-sm' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}">
              ⚠️ Kiệt sức TB (${stats.severity.moderate})
            </button>
            <button onclick="APP.setAnalyticsFilter('mild')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'mild' ? 'bg-amber-500 text-white shadow-sm' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}">
              🟡 Chớm mệt mỏi (${stats.severity.mild})
            </button>
            <button onclick="APP.setAnalyticsFilter('healthy')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'healthy' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}">
              🟢 Ổn định (${stats.severity.healthy})
            </button>
            <button onclick="APP.setAnalyticsFilter('untested')" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'untested' ? 'bg-slate-700 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}">
              ⚪ Chưa làm test (${stats.totalStudents - stats.testCount})
            </button>
          </div>

          <!-- Students Table -->
          <div class="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold border-b border-slate-200 tracking-wider">
                <tr>
                  <th class="p-3.5">Sinh Viên</th>
                  <th class="p-3.5">Điểm Test (SBI-9)</th>
                  <th class="p-3.5">Tiến Độ Chung</th>
                  <th class="p-3.5 text-center">4 Chương</th>
                  <th class="p-3.5 text-center">11 Ngày</th>
                  <th class="p-3.5 text-center">Thư</th>
                  <th class="p-3.5 text-center">Streak</th>
                  <th class="p-3.5 text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${filteredStudents.length === 0 ? `
                  <tr>
                    <td colspan="8" class="p-8 text-center text-slate-400 italic">
                      Không tìm thấy sinh viên phù hợp với bộ lọc hiện tại.
                    </td>
                  </tr>
                ` : filteredStudents.map(u => {
                  let badge = { text: 'Chưa test', class: 'bg-slate-100 text-slate-500' };
                  if (u.testScore !== null) {
                    if (u.testScore >= 4.0) badge = { text: `${u.testScore.toFixed(2)} • Nguy cơ cao`, class: 'bg-rose-100 text-rose-800 font-bold border border-rose-200' };
                    else if (u.testScore >= 3.0) badge = { text: `${u.testScore.toFixed(2)} • Kiệt sức TB`, class: 'bg-orange-100 text-orange-800 font-bold border border-orange-200' };
                    else if (u.testScore >= 2.0) badge = { text: `${u.testScore.toFixed(2)} • Chớm mệt`, class: 'bg-amber-100 text-amber-800 font-bold border border-amber-200' };
                    else badge = { text: `${u.testScore.toFixed(2)} • Ổn định`, class: 'bg-emerald-100 text-emerald-800 font-bold border border-emerald-200' };
                  }

                  return `
                    <tr class="hover:bg-slate-50/90 transition-colors">
                      <!-- Student Name & Email -->
                      <td class="p-3.5">
                        <div class="flex items-center space-x-3">
                          <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                            ${u.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div class="font-bold text-slate-900">${u.name}</div>
                            <div class="text-[11px] text-slate-500">${u.email}</div>
                            <div class="text-[10px] text-emerald-700 font-semibold">${u.role}</div>
                          </div>
                        </div>
                      </td>

                      <!-- SBI-9 Score -->
                      <td class="p-3.5">
                        <span class="px-2.5 py-1 rounded-full text-[10px] ${badge.class}">
                          ${badge.text}
                        </span>
                      </td>

                      <!-- Overall Progress Bar -->
                      <td class="p-3.5 w-36">
                        <div class="space-y-1">
                          <div class="flex justify-between text-[11px] font-bold">
                            <span class="text-slate-700">${u.overallProgress || 0}%</span>
                          </div>
                          <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" style="width: ${u.overallProgress || 0}%"></div>
                          </div>
                        </div>
                      </td>

                      <!-- 4 Chapters Mini Pills -->
                      <td class="p-3.5 text-center">
                        <div class="inline-flex space-x-1 text-[10px] font-bold">
                          <span title="Chương 1: ${u.chapter1Progress || 0}%" class="w-5 h-5 rounded flex items-center justify-center ${(u.chapter1Progress || 0) >= 100 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}">1</span>
                          <span title="Chương 2: ${u.chapter2Progress || 0}%" class="w-5 h-5 rounded flex items-center justify-center ${(u.chapter2Progress || 0) >= 100 ? 'bg-cyan-500 text-white' : (u.chapter2Progress || 0) > 0 ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-100 text-slate-400'}">2</span>
                          <span title="Chương 3: ${u.chapter3Progress || 0}%" class="w-5 h-5 rounded flex items-center justify-center ${(u.chapter3Progress || 0) >= 60 ? 'bg-amber-500 text-white' : (u.chapter3Progress || 0) > 0 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-400'}">3</span>
                          <span title="Chương 4: ${u.chapter4Progress || 0}%" class="w-5 h-5 rounded flex items-center justify-center ${(u.chapter4Progress || 0) >= 50 ? 'bg-pink-500 text-white' : (u.chapter4Progress || 0) > 0 ? 'bg-pink-100 text-pink-800' : 'bg-slate-100 text-slate-400'}">4</span>
                        </div>
                      </td>

                      <!-- 11 Days Challenge -->
                      <td class="p-3.5 text-center font-bold text-pink-600">
                        ${u.challengeCompletedDays || 0}/11
                      </td>

                      <!-- Future Letters -->
                      <td class="p-3.5 text-center font-bold text-indigo-600">
                        ${u.lettersCount || 0}
                      </td>

                      <!-- Streak -->
                      <td class="p-3.5 text-center font-bold text-orange-600">
                        <i class="fas fa-fire mr-0.5 text-xs"></i>${u.streakDays || 1}
                      </td>

                      <!-- Actions -->
                      <td class="p-3.5 text-right space-x-1 whitespace-nowrap">
                        <button onclick="APP.viewUserDetails('${u.id}')" title="Xem toàn bộ bài làm & bài viết của sinh viên" 
                                class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button onclick="APP.openSendEncouragementModal('${u.id}')" title="Gửi lời nhắn động viên / hỗ trợ tâm lý" 
                                class="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors">
                          <i class="fas fa-paper-plane"></i>
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 16. ENCOURAGEMENT & COUNSELING MESSAGE MODAL
  // =========================================================================
  renderEncouragementModal: function(student) {
    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-rose-200 space-y-5 bg-white">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center text-base shadow-md shadow-rose-200">
              <i class="fas fa-paper-plane"></i>
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 font-serif-title">Gửi Lời Nhắn Động Viên Sinh Viên</h3>
              <p class="text-xs text-slate-500">Gửi trực tiếp vào hòm thư & thông báo của sinh viên</p>
            </div>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 p-1">
            <i class="fas fa-times text-base"></i>
          </button>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center space-x-3">
          <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
            ${student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div class="font-bold text-slate-900">${student.name}</div>
            <div class="text-[11px] text-slate-500">${student.email} • ${student.role}</div>
            ${student.testScore ? `<div class="text-[10px] font-bold text-rose-600 mt-0.5">Điểm SBI: ${student.testScore.toFixed(2)} / 5.00</div>` : ''}
          </div>
        </div>

        <div class="space-y-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mẫu Thông Điệp Gợi Ý</label>
            <select id="msgTemplateSelect" onchange="
              const templates = {
                't1': { title: 'Thư động viên từ Phòng Tham vấn Tâm lý ULIS', body: 'Chào bạn, chúng mình nhận thấy gần đây bạn đang đối mặt với nhiều áp lực học tập và bài thi. Hãy nhớ rằng việc cảm thấy mệt mỏi là hoàn toàn bình thường, và bạn không đơn độc trên hành trình này. Bạn có thể dành chút thời gian ghé Chương 3 của Sổ tay để thực hành xả van áp lực nhé!' },
                't2': { title: 'Nhắc nhở nhẹ nhàng: Chăm sóc bản thân hôm nay', body: 'Chào bạn, bạn đã đi được một chặng đường rất đáng tự hào cùng cuốn sổ tay Burn Bright. Hôm nay bạn đừng quên uống đủ nước và ngủ sớm một chút nhé!' },
                't3': { title: 'Thư mời kết nối hỗ trợ tâm lý học đường', body: 'Chào bạn, Ban chủ nhiệm dự án From Burnout to Burn Bright luôn ở đây nếu bạn cần một người lắng nghe hoặc hỗ trợ tâm lý chuyên môn. Đừng ngần ngại liên hệ với chúng mình qua văn phòng tư vấn tâm lý ULIS nhé!' }
              };
              const sel = templates[this.value];
              if (sel) {
                document.getElementById('msgTitleInput').value = sel.title;
                document.getElementById('msgBodyInput').value = sel.body;
              }
            " class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white focus:ring-2 focus:ring-rose-500">
              <option value="t1">1. Động viên sinh viên đang gặp kiệt sức cao</option>
              <option value="t2">2. Nhắc nhở rèn luyện Thử thách 11 Ngày</option>
              <option value="t3">3. Thư mời kết nối tham vấn chuyên môn</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Tiêu Đề Lời Nhắn</label>
            <input type="text" id="msgTitleInput" value="Thư động viên từ Phòng Tham vấn Tâm lý ULIS" 
                   class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nội Dung Lời Nhắn</label>
            <textarea id="msgBodyInput" rows="4" 
                      class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-rose-500">Chào bạn, chúng mình nhận thấy gần đây bạn đang đối mặt với nhiều áp lực học tập và bài thi. Hãy nhớ rằng việc cảm thấy mệt mỏi là hoàn toàn bình thường, và bạn không đơn độc trên hành trình này. Bạn có thể dành chút thời gian ghé Chương 3 của Sổ tay để thực hành xả van áp lực nhé!</textarea>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
          <button onclick="APP.closeModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">
            Hủy Bỏ
          </button>
          <button onclick="
            const t = document.getElementById('msgTitleInput')?.value?.trim();
            const b = document.getElementById('msgBodyInput')?.value?.trim();
            APP.sendEncouragementMessage('${student.id}', t, b);
          " class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-200 flex items-center space-x-1.5">
            <i class="fas fa-paper-plane"></i>
            <span>Gửi Tin Nhắn Ngay</span>
          </button>
        </div>
      </div>
    `;
  }
};
