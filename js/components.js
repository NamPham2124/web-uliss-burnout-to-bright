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
      <div class="min-h-screen flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#f5fbf7] via-[#faf8f5] to-[#f0f8f4]">
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

        <!-- Features Overview Grid -->
        <div class="max-w-5xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pb-2">
          <div class="p-3 rounded-2xl bg-white/80 border border-emerald-200/80 space-y-1 shadow-sm">
            <i class="fas fa-stethoscope text-emerald-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Thang đo SBI 9 Câu</div>
            <div class="text-[10px] text-slate-500">Chuẩn hóa School Burnout</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/80 border border-sky-200/80 space-y-1 shadow-sm">
            <i class="fas fa-icicles text-sky-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Mô hình Tảng Băng</div>
            <div class="text-[10px] text-slate-500">Phần nổi & Phần chìm</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/80 border border-amber-200/80 space-y-1 shadow-sm">
            <i class="fas fa-faucet-drip text-amber-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Chiếc Van Xả Áp Lực</div>
            <div class="text-[10px] text-slate-500">Bình cảm xúc & Nối đất 5-4-3-2-1</div>
          </div>

          <div class="p-3 rounded-2xl bg-white/80 border border-pink-200/80 space-y-1 shadow-sm">
            <i class="fas fa-envelope-open-text text-pink-600 text-lg"></i>
            <div class="text-xs font-bold text-slate-800">Thư Gửi Tương Lai</div>
            <div class="text-[10px] text-slate-500">Lên lịch gửi mail tự động</div>
          </div>
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
  // 2. NAVBAR COMPONENT
  // =========================================================================
  renderNavbar: function(user, activePage, streakInfo, unreadNotifsCount, favsCount, audioState) {
    const chapters = window.APP_DATA.chapters;
    const isPlaying = audioState && audioState.isPlaying;

    return `
      <header class="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            
            <!-- Left: Logo & Brand -->
            <div class="flex items-center space-x-3 cursor-pointer" onclick="APP.navigateTo('home')">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white text-xl shadow-md shadow-emerald-200 animate-float">
                <i class="fas fa-fire-flame-curved"></i>
              </div>
              <div>
                <div class="text-base font-extrabold text-slate-900 font-serif-title leading-tight flex items-center space-x-1.5">
                  <span>Burn Bright</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">ULIS</span>
                </div>
                <div class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">ĐH Ngoại ngữ - ĐHQGHN</div>
              </div>
            </div>

            <!-- Middle: Desktop Navigation Links -->
            <nav class="hidden lg:flex items-center space-x-1 text-xs font-bold">
              <button onclick="APP.navigateTo('home')" 
                      class="px-3 py-2 rounded-xl transition-all ${activePage === 'home' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'}">
                <i class="fas fa-home mr-1"></i> Trang Chủ
              </button>

              <button onclick="APP.navigateTo('intro')" 
                      class="px-3 py-2 rounded-xl transition-all ${activePage === 'intro' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'}">
                <i class="fas fa-book mr-1"></i> Sổ Tay
              </button>

              ${chapters.map(ch => `
                <button onclick="APP.navigateTo('${ch.slug}')" 
                        class="px-3 py-2 rounded-xl transition-all ${activePage === ch.slug ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'}">
                  ${ch.navLabel}
                </button>
              `).join('')}

              <button onclick="APP.navigateTo('favorites')" 
                      class="px-3 py-2 rounded-xl transition-all relative ${activePage === 'favorites' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'}">
                <i class="fas fa-bookmark mr-1"></i> Yêu Thích
                ${favsCount > 0 ? `<span class="ml-1 px-1.5 py-0.2 bg-amber-500 text-white rounded-full text-[9px]">${favsCount}</span>` : ''}
              </button>

              <button onclick="APP.navigateTo('dashboard')" 
                      class="px-3 py-2 rounded-xl transition-all ${activePage === 'dashboard' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'}">
                <i class="fas fa-chart-line mr-1"></i> Tiến Độ
              </button>
            </nav>

            <!-- Right: Interactive Controls -->
            <div class="flex items-center space-x-2 sm:space-x-3">
              
              <!-- Search Modal Button -->
              <button onclick="APP.openSearchModal()" title="Tìm kiếm nhanh" 
                      class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-all text-xs border border-slate-200">
                <i class="fas fa-search"></i>
              </button>

              <!-- Sound / BGM Button -->
              <button onclick="APP.toggleAudioPlay()" title="Nhạc nền thư giãn nhẹ nhàng" 
                      class="px-2.5 py-1.5 rounded-xl border flex items-center space-x-1.5 text-xs font-bold transition-all ${isPlaying ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}">
                <i class="fas ${isPlaying ? 'fa-volume-high text-emerald-600' : 'fa-volume-xmark text-slate-400'}"></i>
                <span class="hidden sm:inline">${isPlaying ? 'Nhạc: Bật' : 'Nhạc nền'}</span>
              </button>

              <!-- Database Modal Button -->
              <button onclick="APP.openDatabaseModal('accounts')" title="Quản lý Cơ sở Dữ liệu & Tài khoản" 
                      class="w-9 h-9 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 flex items-center justify-center transition-all text-xs border border-indigo-200 shadow-sm">
                <i class="fas fa-database"></i>
              </button>

              <!-- User Profile & Logout -->
              <div class="flex items-center space-x-2 pl-1 border-l border-slate-200">
                <button onclick="APP.navigateTo('dashboard')" title="${user ? user.name : 'Người dùng'}" 
                        class="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-emerald-200 hover:bg-emerald-700 transition-all">
                  ${user ? user.name.charAt(0).toUpperCase() : 'U'}
                </button>
                <button onclick="APP.logout()" title="Đăng xuất" 
                        class="text-slate-400 hover:text-rose-600 text-xs p-1.5 transition-colors">
                  <i class="fas fa-arrow-right-from-bracket"></i>
                </button>
              </div>

              <!-- Mobile Menu Toggle -->
              <button onclick="APP.toggleMobileNav()" class="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100">
                <i class="fas fa-bars text-lg"></i>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobileNavMenu" class="hidden lg:hidden border-t border-slate-200 bg-white/95 px-4 py-3 space-y-1">
          <button onclick="APP.navigateTo('home'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50">
            <i class="fas fa-home mr-2 text-emerald-600"></i> Trang Chủ
          </button>
          <button onclick="APP.navigateTo('intro'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50">
            <i class="fas fa-book mr-2 text-emerald-600"></i> Sổ Tay & Lời Mở Đầu
          </button>
          ${chapters.map(ch => `
            <button onclick="APP.navigateTo('${ch.slug}'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50">
              <i class="fas ${ch.icon} mr-2 text-emerald-600"></i> ${ch.title}
            </button>
          `).join('')}
          <button onclick="APP.navigateTo('favorites'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50">
            <i class="fas fa-bookmark mr-2 text-amber-500"></i> Kho Yêu Thích (${favsCount})
          </button>
          <button onclick="APP.navigateTo('dashboard'); APP.toggleMobileNav();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50">
            <i class="fas fa-chart-line mr-2 text-teal-600"></i> Quản Lý Tiến Độ
          </button>
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
  // 5. HOME PAGE COMPONENT (Trang trí theo trang bìa sổ tay Canva)
  // =========================================================================
  renderHomePage: function(user, overallProgress, streakInfo) {
    const info = window.APP_DATA.projectInfo;

    return `
      <div class="space-y-12 pb-16">
        <!-- Hero Section: Split Layout with Handbook Cover Page -->
        <section class="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-10 lg:p-12 border border-emerald-100 shadow-xl bg-gradient-to-br from-white/90 via-[#f7fbf8]/80 to-[#f2f8f4]/90">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
          <div class="absolute -left-20 -top-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left: Hero Text & Actions -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold border border-emerald-200">
                <i class="fas fa-university text-emerald-600"></i>
                <span>Dự án Nghiên cứu & Chăm sóc Sức khỏe Tinh thần — ULIS - VNU</span>
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-title text-slate-900 leading-tight">
                From Burnout to <span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Burn Bright</span>
              </h1>

              <p class="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wide">
                ${info.subtitle}
              </p>

              <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ${info.description}
              </p>

              <!-- Central Quote Box -->
              <div class="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium italic flex items-start space-x-3 shadow-sm">
                <i class="fas fa-quote-left text-amber-500 text-lg mt-0.5"></i>
                <div>
                  <span>"${info.quote}"</span>
                </div>
              </div>

              <!-- Animal Companions Badges -->
              <div class="space-y-2 pt-1">
                <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">🐾 4 Người bạn đồng hành cùng bạn trong sổ tay:</span>
                <div class="flex flex-wrap gap-2">
                  ${info.companions.map(c => `
                    <span class="px-3 py-1.5 rounded-full border text-xs font-bold flex items-center space-x-1.5 shadow-sm ${c.class}">
                      <span>${c.icon}</span>
                      <span>${c.name}</span>
                      <span class="text-[10px] opacity-70 font-normal">(${c.role})</span>
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Action CTAs -->
              <div class="flex flex-wrap gap-3 pt-2">
                <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center space-x-2 text-xs sm:text-sm">
                  <i class="fas fa-clipboard-check"></i>
                  <span>Làm Test SBI 9 Câu (C1)</span>
                </button>
                <button onclick="APP.navigateTo('intro')" class="bg-white hover:bg-emerald-50 text-emerald-800 font-bold px-5 py-3.5 rounded-2xl border border-emerald-200 shadow-sm transition-all flex items-center space-x-2 text-xs sm:text-sm">
                  <i class="fas fa-book-open text-emerald-600"></i>
                  <span>Khám Phá Sổ Tay & Lời Ngỏ</span>
                </button>
                <button onclick="APP.navigateTo('ch4'); setTimeout(() => APP.scrollToDay11(), 200);" class="bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold px-5 py-3.5 rounded-2xl border border-pink-200 shadow-sm transition-all flex items-center space-x-2 text-xs sm:text-sm">
                  <i class="fas fa-envelope-open-text text-pink-500"></i>
                  <span>Thư Gửi Tương Lai (C4)</span>
                </button>
              </div>
            </div>

            <!-- Right: Prominent Handbook Cover Display -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center">
              <div class="relative group">
                <div class="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img src="${info.coverImage}" alt="Trang bìa sổ tay From Burnout to Burn Bright" class="w-full max-w-[320px] h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-300">
                  <div class="p-3 bg-gradient-to-r from-emerald-700 to-teal-800 text-white text-center">
                    <div class="text-xs font-bold uppercase tracking-wider">Ấn Bản Sổ Tay Chữa Lành</div>
                    <div class="text-[10px] text-emerald-200">Khoa Tiếng Anh & Nhóm Tác Giả ULIS - VNU</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- Lời Giới Thiệu Từ Chuyên Gia & Lời Mở Đầu Cards Grid -->
        <section class="space-y-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">Lời Ngỏ Từ Nhóm Tác Giả & Chuyên Gia</h2>
            <p class="text-slate-500 text-xs sm:text-sm mt-1">Được nghiên cứu và xây dựng bài bản dựa trên nền tảng Tâm lý học trường học</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Expert Review Card -->
            <div class="glass-card rounded-2xl p-6 border border-emerald-100 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-sm flex-shrink-0">
                    <img src="${info.chuyenGiaImage}" alt="Chuyên gia" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Đánh giá chuyên môn</span>
                    <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời Giới Thiệu Từ Chuyên Gia</h3>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed italic line-clamp-4">
                  "Đây là một sản phẩm được đầu tư tâm huyết, nghiên cứu và xây dựng kỹ lưỡng dựa trên nền tảng kiến thức khoa học về Tâm lý học... khuyến khích mỗi người dành thời gian lắng lại, kết nối với bản thân và tìm lại nguồn năng lượng."
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-500">Chuyên gia Tâm lý học</span>
                <button onclick="APP.navigateTo('intro')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
                  <span>Đọc toàn văn</span> <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Preface Card -->
            <div class="glass-card rounded-2xl p-6 border border-amber-100 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-300 shadow-sm flex-shrink-0">
                    <img src="${info.loiMoDauImage}" alt="Lời mở đầu" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Thư gửi sinh viên</span>
                    <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời Mở Đầu Từ Nhóm Tác Giả</h3>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed italic line-clamp-4">
                  "Nếu bạn đang cầm trên tay cuốn sổ này, có lẽ bạn đã từng, hoặc đang trải qua một giai đoạn áp lực nặng nề trong chính việc học của bản thân... Thấu hiểu được điều đó, chúng mình muốn tạo ra một không gian an toàn, nơi bạn có thể dừng chân, sạc lại năng lượng..."
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-500">Nhóm Tác giả ULIS - VNU</span>
                <button onclick="APP.navigateTo('intro')" class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center space-x-1">
                  <span>Đọc toàn văn</span> <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- 4 Key Modules Cards Grid -->
        <section class="space-y-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">4 Chặng Hành Trình Phục Hồi</h2>
            <p class="text-slate-500 text-xs sm:text-sm mt-1">Kết hợp lý thuyết chuẩn hóa tâm lý học cùng các công cụ bài tập tương tác</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${window.APP_DATA.chapters.map(ch => `
              <div onclick="APP.navigateTo('${ch.slug}')" class="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-emerald-100 group flex flex-col justify-between bg-white/90">
                <div>
                  <div class="relative h-40 overflow-hidden">
                    <img src="${ch.image}" alt="${ch.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/90 text-slate-800 shadow-sm">
                      ${ch.badge}
                    </div>
                  </div>

                  <div class="p-5 space-y-2">
                    <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors font-serif-title">${ch.title}</h3>
                    <p class="text-xs font-semibold text-emerald-600">${ch.subtitle}</p>
                    <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">${ch.theory?.intro || 'Lý thuyết chuyên sâu kèm bài tập thực hành tương tác.'}</p>
                  </div>
                </div>

                <div class="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <span>Học & Làm Bài Tập</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Stats Bar -->
        <section class="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-md bg-white/90">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            ${info.stats.map(s => `
              <div class="space-y-1">
                <div class="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-serif-title">${s.value}</div>
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">${s.label}</div>
              </div>
            `).join('')}
          </div>
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
  // 7. CHAPTER 2 COMPONENT (Giải mã & Mô hình Tảng Băng Trôi)
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
        <div class="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-lg">
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
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 border-white text-slate-700 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: "Một Ngày Kiệt Sức Nhất" Reflection Exercise -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-md border border-sky-100 bg-white/90">
          <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
            <i class="fas fa-cloud-moon text-sky-600"></i>
            <span>1. Khoảng Lắng: Một Ngày Kiệt Sức Nhất</span>
          </h2>

          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${ch.theory.intro}</p>

          <div class="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3">
            <div class="text-xs sm:text-sm font-bold text-sky-900">
              <i class="fas fa-pencil-alt text-sky-600 mr-1.5"></i>
              ${ch.theory.memoryExercise.prompt}
            </div>

            <textarea id="memoryExerciseInput" rows="3" placeholder="${ch.theory.memoryExercise.placeholder}" 
                      class="w-full p-3.5 rounded-xl border border-sky-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">${savedMemory}</textarea>

            <div class="flex justify-end">
              <button onclick="APP.saveMemoryReflection()" class="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow transition-all flex items-center space-x-1.5">
                <i class="fas fa-save"></i>
                <span>Lưu Dòng Suy Nghĩ</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 2: The Iceberg Model Theory & Graphic Illustration -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-white/80 bg-white/90">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-full md:w-1/2 space-y-3">
              <span class="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Cơ sở Tâm lý học</span>
              <h3 class="text-xl font-bold text-slate-900 font-serif-title">${ch.theory.scientificSecret.title}</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${ch.theory.scientificSecret.content}
              </p>
            </div>
            
            <div class="w-full md:w-1/2 flex justify-center">
              <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-sky-200 max-w-[280px]">
                <img src="${ch.icebergImage}" alt="Mô hình Tảng Băng Trôi" class="w-full h-auto object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Interactive Iceberg Tool -->
        <div id="icebergSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-sky-200 relative bg-white/95">
          <!-- Fullscreen Toolbar placeholder if active -->
          <div id="zenToolbar_icebergSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title">${ch.exercise.title}</h2>
              <p class="text-xs text-slate-500">${ch.exercise.description}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('icebergSection', 'Công cụ Mô hình Tảng Băng Trôi')}
          </div>

          <!-- Iceberg Graphic Display -->
          <div class="iceberg-container">
            <!-- Sky (Floating Part) -->
            <div class="iceberg-sky">
              <div class="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span><i class="fas fa-sun text-amber-500 mr-1"></i> Phần Nổi (Triệu chứng bề ngoài bạn nhìn thấy)</span>
                <span class="text-[10px] text-sky-600 font-normal">Chỉ là phần nhỏ câu chuyện</span>
              </div>
              <div id="floatingTagsContainer" class="flex flex-wrap gap-2">
                ${floatingItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-white text-sky-900 font-bold text-xs shadow-sm border border-sky-200 flex items-center space-x-1">
                    <span>${item}</span>
                    <button onclick="APP.removeIcebergItem('floating', '${item}')" class="text-slate-400 hover:text-rose-500 ml-1 font-bold">×</button>
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Waterline -->
            <div class="iceberg-waterline"></div>

            <!-- Water (Submerged Part) -->
            <div class="iceberg-water">
              <div class="text-[11px] font-bold text-sky-100 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span><i class="fas fa-water text-sky-300 mr-1"></i> Phần Chìm (Nguyên nhân gốc rễ, áp lực & nỗi sợ)</span>
                <span class="text-[10px] text-sky-200 font-normal">Quyết định trạng thái & hành vi</span>
              </div>
              <div id="submergedTagsContainer" class="flex flex-wrap gap-2">
                ${submergedItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-sky-950/70 text-sky-100 font-bold text-xs shadow-sm border border-sky-400/40 flex items-center space-x-1">
                    <span>${item}</span>
                    <button onclick="APP.removeIcebergItem('submerged', '${item}')" class="text-sky-300 hover:text-rose-300 ml-1 font-bold">×</button>
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
                <input type="text" id="floatingInput" placeholder="Ví dụ: Đau vai gáy, lướt mạng vô thức..." class="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                <button onclick="APP.addIcebergItem('floating')" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700">Thêm Nguyên nhân Phần Chìm:</label>
              <div class="flex space-x-2">
                <input type="text" id="submergedInput" placeholder="Ví dụ: Sợ làm người khác thất vọng..." class="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <button onclick="APP.addIcebergItem('submerged')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm">
                  Thêm
                </button>
              </div>
            </div>
          </div>

          <div class="text-center pt-2">
            <button onclick="APP.navigateTo('ch3')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all inline-flex items-center space-x-2">
              <span>Sang Chương 3: Chuyển hóa & Van Xả Áp Lực</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
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
    const dndState = progressObj?.ch3?.dndState || { pairs: {}, isCompleted: false, score: 0 };
    const savedWaterLevel = progressObj?.ch3?.waterLevel || { percent: 65, label: "Mình cảm thấy quá tải" };
    const savedValveMethod = progressObj?.ch3?.valveMethod || "";
    const pomoCount = progressObj?.ch3?.pomodoroSessions || window.APP?.state?.pomodoro?.sessionsCompleted || 0;

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

              <button onclick="APP.toggleFavorite({ id: 'ch3', title: '${ch.title}', chapterId: 3, category: 'Bài học & Van Xả', snippet: '${ch.subtitle}', path: 'ch3' })" 
                      class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-400 border-amber-300 text-amber-950 font-extrabold' : 'bg-white/90 border-white text-slate-700 hover:bg-white'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto shadow-md">
                <i class="fas fa-bookmark ${isFav ? 'text-amber-900' : 'text-slate-400'}"></i>
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: Lusi Story & Cognitive Appraisal Theory -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-amber-100 bg-white/90">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-full md:w-3/5 space-y-4">
              <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Tình huống thực tế</span>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 font-serif-title">${ch.theory.lusiStory.title}</h3>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${ch.theory.lusiStory.content}</p>

              <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div class="text-xs font-bold text-amber-900"><i class="fas fa-brain mr-1.5 text-amber-600"></i> ${ch.theory.cognitiveAppraisal.title}</div>
                <div class="text-xs text-slate-700 space-y-1">
                  <div><strong>1. Đánh giá ban đầu:</strong> ${ch.theory.cognitiveAppraisal.step1}</div>
                  <div><strong>2. Đánh giá thứ cấp:</strong> ${ch.theory.cognitiveAppraisal.step2}</div>
                  <div class="text-emerald-800 font-medium italic pt-1">💡 ${ch.theory.cognitiveAppraisal.conclusion}</div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-2/5 flex justify-center">
              <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200 max-w-[260px]">
                <img src="${ch.lusiImage}" alt="Câu chuyện của Lusi" class="w-full h-auto object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: CÔNG CỤ ĐẶC BIỆT: CHIẾC VAN XẢ ÁP LỰC (Pages 38-41) -->
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

          <!-- Step 1: Kiểm tra mực nước chiếc bình cảm xúc -->
          <div class="space-y-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-xl bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center">1</span>
              <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[0].title}</h4>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[0].desc}</p>

            <!-- Visual Water Gauge Display -->
            <div class="space-y-2 max-w-md mx-auto py-2">
              <div class="flex justify-between text-xs font-bold text-slate-700">
                <span>Mực nước bình cảm xúc: <strong id="waterLevelPercentText" class="text-amber-600">${savedWaterLevel.percent}%</strong></span>
                <span id="waterLevelLabelText" class="text-slate-500 text-[11px]">${savedWaterLevel.label}</span>
              </div>
              <div class="water-tank-gauge">
                <div id="waterTankFill" class="water-tank-fill" style="width: ${savedWaterLevel.percent}%; background-color: ${savedWaterLevel.percent > 60 ? '#f97316' : '#10b981'};"></div>
              </div>
            </div>

            <!-- Level Selectors -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
              <button onclick="APP.setWaterLevel(90, 'Mình gần như không còn năng lượng', '#ef4444')" class="p-2.5 rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-800 text-center transition-all">
                <div class="text-xs font-extrabold">81–100%</div>
                <div class="text-[10px]">Cạn kiệt pin</div>
              </button>
              <button onclick="APP.setWaterLevel(70, 'Mình cảm thấy quá tải', '#f97316')" class="p-2.5 rounded-xl border border-orange-200 bg-orange-50/70 hover:bg-orange-100 text-orange-800 text-center transition-all">
                <div class="text-xs font-extrabold">61–80%</div>
                <div class="text-[10px]">Quá tải</div>
              </button>
              <button onclick="APP.setWaterLevel(50, 'Mình đang chịu khá nhiều áp lực', '#eab308')" class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/70 hover:bg-amber-100 text-amber-800 text-center transition-all">
                <div class="text-xs font-extrabold">41–60%</div>
                <div class="text-[10px]">Khá áp lực</div>
              </button>
              <button onclick="APP.setWaterLevel(30, 'Mình bắt đầu thấy mệt', '#06b6d4')" class="p-2.5 rounded-xl border border-cyan-200 bg-cyan-50/70 hover:bg-cyan-100 text-cyan-800 text-center transition-all">
                <div class="text-xs font-extrabold">21–40%</div>
                <div class="text-[10px]">Bắt đầu mệt</div>
              </button>
              <button onclick="APP.setWaterLevel(15, 'Mình khá ổn', '#10b981')" class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 text-center transition-all col-span-2 sm:col-span-1">
                <div class="text-xs font-extrabold">0–20%</div>
                <div class="text-[10px]">Khá ổn</div>
              </button>
            </div>
          </div>

          <!-- Step 2: Mở van cảm xúc -->
          <div class="space-y-4 p-5 rounded-2xl bg-white border border-slate-200">
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-xl bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center">2</span>
              <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[1].title}</h4>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[1].desc}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${ch.pressureValveTool.steps[1].methods.map(m => `
                <div onclick="APP.saveValveReleaseMethod('${m.name}')" 
                     class="p-4 rounded-2xl border cursor-pointer hover:shadow-md transition-all space-y-1 ${savedValveMethod === m.name ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-300' : 'bg-slate-50/70 border-slate-200 hover:bg-teal-50/50'}">
                  <div class="text-xs font-extrabold text-teal-800 flex items-center justify-between">
                    <span>${m.name}</span>
                    <i class="fas ${savedValveMethod === m.name ? 'fa-check-circle text-teal-600' : 'fa-circle-notch text-slate-300'}"></i>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${m.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Step 3: Kỹ thuật Nối Đất 5-4-3-2-1 -->
          <div class="space-y-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">3</span>
                <h4 class="font-bold text-slate-900 text-sm">${ch.pressureValveTool.steps[2].title}</h4>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">Kỹ thuật 5 Giác Quan</span>
            </div>
            <p class="text-xs text-slate-600">${ch.pressureValveTool.steps[2].desc}</p>

            <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
              ${ch.pressureValveTool.steps[2].items.map(it => `
                <div class="grounding-step-box p-3 rounded-2xl bg-white border border-emerald-200 space-y-2 flex flex-col justify-between shadow-sm">
                  <div>
                    <div class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center mb-1">
                      ${it.num}
                    </div>
                    <div class="text-xs font-semibold text-slate-800 leading-snug">${it.sense}</div>
                  </div>
                  <label class="flex items-center space-x-1.5 text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-100 cursor-pointer">
                    <input type="checkbox" id="grounding_${it.num}" onchange="APP.toggleGroundingCheck(${it.num})" class="custom-checkbox">
                    <span>Đã nhận diện</span>
                  </label>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Step 4: Kiểm tra lại chiếc bình -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-lg bg-slate-700 text-white font-extrabold text-xs flex items-center justify-center">4</span>
              <span><strong>${ch.pressureValveTool.steps[3].title}:</strong> ${ch.pressureValveTool.steps[3].desc}</span>
            </div>
            <button onclick="APP.setWaterLevel(20, 'Đã xả van - Cảm thấy nhẹ nhõm hơn', '#10b981')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs shadow-sm flex-shrink-0 ml-2">
              Xả van thành công
            </button>
          </div>
        </div>

        <!-- Section 3: DRAG AND DROP EXERCISE -->
        <div id="dndSection" class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-amber-200 relative bg-white/95">
          <div id="zenToolbar_dndSection"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-hand-pointer text-amber-500"></i>
                <span>3. ${ch.dndExercise.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${ch.dndExercise.instruction}</p>
            </div>
            ${COMPONENTS.renderFullscreenButton('dndSection', 'Bài Tập Kéo Thả Chuyển Hóa Cảm Xúc')}
          </div>

          <!-- DND Board Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left: Problem Stickers -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Vấn đề / Áp lực kiệt sức</span>
                <span class="text-[10px] text-amber-600 font-normal">Kéo hoặc Bấm chọn</span>
              </h4>

              <div id="dndSourceList" class="space-y-2.5">
                ${ch.dndExercise.pairs.map(p => {
                  const isPaired = !!dndState.pairs[p.id];
                  return `
                    <div id="sticker_${p.id}" 
                         draggable="${!isPaired}" 
                         ondragstart="APP.onDragStart(event, '${p.id}')" 
                         onclick="APP.onStickerClick('${p.id}')"
                         class="draggable-item p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer ${isPaired ? 'paired' : ''}">
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

            <!-- Right: Drop Targets -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Giải pháp chuyển hóa tương ứng</span>
                <span class="text-[10px] text-emerald-600 font-bold">Điểm: ${dndState.score || 0} / ${ch.dndExercise.pairs.length}</span>
              </h4>

              <div id="dndTargetList" class="space-y-2.5">
                ${ch.dndExercise.pairs.map(p => {
                  const matchedStickerId = dndState.pairs[p.id];
                  const matchedPair = ch.dndExercise.pairs.find(x => x.id === matchedStickerId);
                  return `
                    <div id="drop_${p.id}" 
                         ondragover="APP.onDragOver(event)" 
                         ondragleave="APP.onDragLeave(event)" 
                         ondrop="APP.onDrop(event, '${p.id}')" 
                         onclick="APP.onDropZoneClick('${p.id}')"
                         class="drop-target p-3.5 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 transition-all ${matchedPair ? 'filled border-emerald-300 bg-emerald-50/60' : ''}">
                      <div class="text-xs font-bold text-slate-800 flex items-center justify-between">
                        <span>${p.solution}</span>
                        <i class="fas ${matchedPair ? 'fa-check text-emerald-600' : 'fa-arrow-down text-slate-300'} text-xs"></i>
                      </div>
                      ${matchedPair ? `
                        <div class="mt-2 text-[11px] text-emerald-800 font-semibold bg-white p-2 rounded-xl border border-emerald-200">
                          ✓ Đã ghép: "${matchedPair.problem}" — ${p.explanation}
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4: POMODORO TIMER -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-amber-200 bg-white/95">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Kỹ thuật Quản trị Năng lượng</span>
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-title">Đồng Hồ Pomodoro 25 Phút (Francesco Cirillo)</h3>
              <p class="text-xs text-slate-500">25 phút tập trung sâu kết hợp 5 phút thả lỏng giúp não bộ không rơi vào kiệt sức</p>
            </div>
            <div class="text-right">
              <span class="text-xs font-bold text-amber-600 block">Đã hoàn thành</span>
              <span class="text-lg font-extrabold text-slate-900">${pomoCount} Phiên</span>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center space-y-4 py-4">
            <div id="pomoTimeDisplay" class="text-5xl sm:text-6xl font-extrabold text-slate-900 font-mono tracking-wider">
              25:00
            </div>
            <div id="pomoModeDisplay" class="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Chế độ: Tập trung (25 phút)
            </div>

            <div class="flex space-x-3 pt-2">
              <button id="pomoToggleBtn" onclick="APP.togglePomodoro()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all flex items-center space-x-2">
                <i class="fas fa-play"></i>
                <span>Bắt đầu phiên</span>
              </button>
              <button onclick="APP.resetPomodoro()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-3 rounded-xl text-xs transition-all">
                <i class="fas fa-rotate-left"></i>
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

  // =========================================================================
  // 9. CHAPTER 4 COMPONENT (Tái tạo: Challenge 11 Ngày & Thư Gửi Tương Lai)
  // =========================================================================
  renderChapter4: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[3];
    const stages = ch.stages11Days;
    const progressObj = userProgress?.progress || userProgress;
    const challengeState = progressObj?.ch4?.challenge11Days || {};
    const letters = userProgress?.futureLetters || [];

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
                <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 1: Challenge 11 Ngày Phục Hồi Nhịp Thở -->
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

                <div class="space-y-3 pl-2 sm:pl-3">
                  ${st.days.map(d => {
                    const isDone = challengeState[d.day]?.completed || false;
                    const savedNote = challengeState[d.day]?.note || '';
                    return `
                      <div class="p-4 sm:p-5 rounded-2xl border ${isDone ? 'bg-emerald-50/80 border-emerald-300' : 'bg-slate-50/60 border-slate-200'} space-y-3 transition-all hover:bg-white hover:border-pink-300">
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

                        <!-- Journal Prompt -->
                        <div class="pl-7 space-y-1.5">
                          <div class="text-[11px] font-bold text-pink-700">✍️ Gợi ý nhật ký: ${d.prompt}</div>
                          <div class="flex gap-2">
                            <input type="text" id="challengeNote_${d.day}" value="${savedNote}" placeholder="Ghi lại cảm nhận của bạn..." 
                                   class="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-pink-500">
                            <button onclick="APP.saveChallengeNote(${d.day}, document.getElementById('challengeNote_${d.day}').value); APP.showToast('Đã lưu nhật ký Ngày ${d.day}!', 'success');" 
                                    class="px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold shadow-sm">
                              Lưu
                            </button>
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 2: THƯ GỬI TÔI CỦA TƯƠNG LAI (TO ME IN THE FUTURE) -->
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

        <!-- Section 3: LỜI NHẮN GỬI CUỐI SỔ (Canva Trang 69) -->
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

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- User Info Header -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg bg-white/90">
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
    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <div class="text-center space-y-4">
          <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            Giới thiệu Ấn Bản Sổ Tay Chăm Sóc Sức Khỏe Tinh Thần
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
              <h2 class="text-2xl font-extrabold text-slate-900 font-serif-title">Sứ Mệnh Của Cuốn Sổ Tay</h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cuốn sổ tay <strong>"From Burnout to Burn Bright"</strong> là công trình nghiên cứu và thiết kế tâm huyết của nhóm tác giả Trường ĐH Ngoại ngữ - ĐHQGHN, nhằm mang đến cho sinh viên một không gian an toàn để lắng lại, bóc tách cảm xúc và tái tạo nguồn năng lượng bền vững.
              </p>
              <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium italic">
                "${info.quote}"
              </div>
            </div>
          </div>

          <!-- Lời Giới Thiệu Từ Chuyên Gia -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-300 flex-shrink-0">
                <img src="${info.chuyenGiaImage}" alt="Chuyên gia" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời Giới Thiệu Từ Chuyên Gia Tâm Lý Học</h3>
                <p class="text-xs text-emerald-600 font-semibold">Cố vấn chuyên môn dự án</p>
              </div>
            </div>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              ${info.chuyenGiaText}
            </div>
          </div>

          <!-- Lời Mở Đầu Từ Nhóm Tác Giả -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-300 flex-shrink-0">
                <img src="${info.loiMoDauImage}" alt="Lời mở đầu" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 font-serif-title">Lời Mở Đầu Từ Nhóm Tác Giả</h3>
                <p class="text-xs text-amber-600 font-semibold">Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội</p>
              </div>
            </div>
            <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
              ${info.loiMoDauText}
            </div>
          </div>
        </div>

        <div class="text-center pt-2">
          <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transition-all text-xs sm:text-sm inline-flex items-center space-x-3">
            <span>Bắt Đầu Hành Trình Với Chương 1</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 13. DATABASE & REGISTERED ACCOUNTS VIEWER MODAL
  // =========================================================================
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
                  ${users.map(u => `
                    <tr class="hover:bg-slate-50/80">
                      <td class="p-3 font-bold text-slate-900">${u.name}</td>
                      <td class="p-3 text-slate-600">${u.email}</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">${u.role}</span></td>
                      <td class="p-3 font-bold ${u.testScore !== null ? 'text-emerald-600' : 'text-slate-400'}">
                        ${u.testScore !== null ? u.testScore.toFixed(2) + ' / 5.0' : '—'}
                      </td>
                      <td class="p-3 font-bold text-pink-600">${u.challengeCompletedDays}/11</td>
                      <td class="p-3 text-right space-x-1">
                        <button onclick="APP.viewUserDetails('${u.id}')" title="Xem chi tiết" class="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg">
                          <i class="fas fa-eye"></i>
                        </button>
                        ${u.id !== 'usr_guest' ? `
                          <button onclick="APP.deleteUserAccount('${u.id}', '${u.name}')" title="Xóa tài khoản" class="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        ` : ''}
                      </td>
                    </tr>
                  `).join('')}
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
  }
};
