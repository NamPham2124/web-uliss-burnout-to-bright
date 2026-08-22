/**
 * Component renderers for ULIS "From Burnout to Burn Bright"
 */

window.COMPONENTS = {

  // =========================================================================
  // 1. NAVBAR COMPONENT
  // =========================================================================
  renderNavbar: function(user, activePage, streakInfo, unreadNotifsCount, favsCount) {
    const pages = [
      { id: 'home', label: 'Trang chủ', icon: 'fa-home' },
      { id: 'intro', label: 'Giới thiệu', icon: 'fa-info-circle' },
      { id: 'ch1', label: 'C1: Nhận diện', icon: 'fa-search' },
      { id: 'ch2', label: 'C2: Giải mã', icon: 'fa-puzzle-piece' },
      { id: 'ch3', label: 'C3: Chuyển hóa', icon: 'fa-sync-alt' },
      { id: 'ch4', label: 'C4: Tái tạo', icon: 'fa-seedling' },
      { id: 'future-letter', label: 'Thư tương lai', icon: 'fa-envelope-open-text' },
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

    const userHtml = user 
      ? `
        <div class="flex items-center space-x-2 bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
          <div class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            ${user.name.charAt(0).toUpperCase()}
          </div>
          <div class="hidden sm:block text-left pr-1">
            <div class="text-xs font-bold text-slate-800 leading-tight truncate max-w-[110px]">${user.name}</div>
            <div class="text-[10px] text-emerald-600 font-medium">${user.role || 'Sinh viên ULIS'}</div>
          </div>
          <button onclick="APP.logout()" title="Đăng xuất" class="text-slate-400 hover:text-rose-500 transition-colors p-1 text-xs">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      `
      : `
        <button onclick="APP.navigateTo('login')" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-1.5">
          <i class="fas fa-sign-in-alt"></i>
          <span>Đăng nhập</span>
        </button>
      `;

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
            <nav class="hidden xl:flex items-center space-x-0.5">
              ${navItemsDesktop}
            </nav>

            <!-- Action Controls (Search, Streak, Notif, User) -->
            <div class="flex items-center space-x-2 sm:space-x-3">
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

              <!-- User / Auth -->
              ${userHtml}

              <!-- Mobile Menu Toggle Button -->
              <button onclick="APP.toggleMobileNav()" class="xl:hidden text-slate-600 hover:text-emerald-600 p-2 rounded-lg">
                <i class="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Nav Drawer -->
        <div id="mobileNavDrawer" class="hidden xl:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1 shadow-lg">
          ${navItemsMobile}
        </div>
      </header>
    `;
  },

  // =========================================================================
  // 2. HERO / HOME PAGE COMPONENT
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
              <button onclick="APP.navigateTo('future-letter')" class="bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold px-6 py-3.5 rounded-2xl border border-pink-200 shadow-sm transition-all flex items-center space-x-2 text-sm">
                <i class="fas fa-envelope-open-text text-pink-500"></i>
                <span>Viết Thư Tương Lai</span>
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

        <!-- Highlight Features Banner -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card rounded-2xl p-6 border border-emerald-100 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-fire"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">Chuỗi Streak Hàng Ngày</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Duy trì ngọn lửa thói quen tốt mỗi ngày thông qua các hoạt động ý nghĩa: làm test, đọc bài học, luyện Pomodoro.</p>
            <button onclick="APP.openStreakModal()" class="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1">
              <span>Xem thể lệ Streak</span> <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-pink-100 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-envelope"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">Thư Gửi Tôi Trong Tương Lai</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Viết thư, niêm phong sáp bảo mật và hẹn ngày mở. Hệ thống sẽ gửi thông báo email khi đến thời khắc mở thư.</p>
            <button onclick="APP.navigateTo('future-letter')" class="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center space-x-1">
              <span>Viết thư ngay</span> <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>

          <div class="glass-card rounded-2xl p-6 border border-teal-100 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-puzzle-piece"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">Bài Tập Kéo Thả & Công Cụ</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Ghép cặp chuyển hóa cảm xúc, Mô hình Tảng băng, Đồng hồ Pomodoro 25p và Bản đồ Năng lượng 24h.</p>
            <button onclick="APP.navigateTo('ch3')" class="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center space-x-1">
              <span>Thực hành ngay</span> <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
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
  // 3. PROJECT INTRO PAGE COMPONENT
  // =========================================================================
  renderProjectIntroPage: function() {
    const info = window.APP_DATA.projectInfo;
    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="text-center space-y-4">
          <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            Giới thiệu Dự án Nâng cao Sức khỏe Tinh thần
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 font-serif-title">${info.title}</h1>
          <p class="text-sm font-semibold text-emerald-600">${info.subtitle}</p>
        </div>

        <!-- Main Banner Card -->
        <div class="glass-card rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl border border-white/80">
          <div class="flex items-center space-x-4 pb-6 border-b border-slate-100">
            <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 text-2xl flex items-center justify-center">
              <i class="fas fa-university"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900">${info.author}</h3>
              <p class="text-xs text-slate-500">Đơn vị chủ trì thực hiện dự án nghiên cứu & chăm sóc sức khỏe tinh thần sinh viên</p>
            </div>
          </div>

          <div class="prose max-w-none text-slate-700 space-y-4 text-sm leading-relaxed">
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

          <!-- Highlight Box -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-3 shadow-lg">
            <div class="flex items-center space-x-2 text-amber-300 font-bold text-sm">
              <i class="fas fa-fire"></i>
              <span>Thông Điệp Cốt Lõi</span>
            </div>
            <p class="text-sm font-medium leading-relaxed">
              "Hãy ghi nhớ rằng <strong>Burn Bright</strong> không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn."
            </p>
          </div>
        </div>

        <!-- 4 Pillars Summary -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-slate-900 font-serif-title text-center">4 Chặng Hành Trình Phục Hồi</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="glass-card rounded-2xl p-6 border border-emerald-100 space-y-2">
              <div class="flex items-center space-x-3 mb-2">
                <span class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">1</span>
                <h4 class="font-bold text-slate-900">Chương 1: Nhận diện</h4>
              </div>
              <p class="text-xs text-slate-600">Gọi tên trạng thái Academic Burnout, đánh giá 3 biểu hiện chính và làm bài test 12 chỉ số chuẩn hóa.</p>
            </div>

            <div class="glass-card rounded-2xl p-6 border border-sky-100 space-y-2">
              <div class="flex items-center space-x-3 mb-2">
                <span class="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 font-bold text-sm flex items-center justify-center">2</span>
                <h4 class="font-bold text-slate-900">Chương 2: Giải mã</h4>
              </div>
              <p class="text-xs text-slate-600">Bóc tách áp lực từ chữ "PHẢI", ứng dụng Mô hình Tảng băng trôi phân tích bề nổi và nguyên nhân gốc rễ.</p>
            </div>

            <div class="glass-card rounded-2xl p-6 border border-amber-100 space-y-2">
              <div class="flex items-center space-x-3 mb-2">
                <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center">3</span>
                <h4 class="font-bold text-slate-900">Chương 3: Chuyển hóa</h4>
              </div>
              <p class="text-xs text-slate-600">Bài tập kéo thả chuyển hóa cảm xúc, phân tích tình huống bạn Lusi (ULIS), Pomodoro 25p & Bản đồ Năng lượng 24h.</p>
            </div>

            <div class="glass-card rounded-2xl p-6 border border-teal-100 space-y-2">
              <div class="flex items-center space-x-3 mb-2">
                <span class="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 font-bold text-sm flex items-center justify-center">4</span>
                <h4 class="font-bold text-slate-900">Chương 4: Tái tạo</h4>
              </div>
              <p class="text-xs text-slate-600">Video bài học mindfulness, thực hành Thử thách 11 Ngày, Bông hoa giá trị & Bức thư gửi Tôi trong tương lai.</p>
            </div>
          </div>
        </div>

        <div class="text-center pt-4">
          <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transition-all text-base inline-flex items-center space-x-3">
            <span>Bắt đầu Chương 1 Ngay</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 4. LOGIN & REGISTER FORMS COMPONENT
  // =========================================================================
  renderLoginPage: function(errorMsg, emailDraft = '') {
    return `
      <div class="max-w-md mx-auto my-10 glass-card rounded-3xl p-8 shadow-2xl border border-white/80 relative">
        <div class="text-center space-y-3 mb-6">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white text-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-200">
            <i class="fas fa-user-lock"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 font-serif-title">Đăng Nhập Tài Khoản</h2>
          <p class="text-xs text-slate-500">Đăng nhập để đồng bộ tiến độ học tập, streak và thư tương lai</p>
        </div>

        ${errorMsg ? `
          <div class="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center space-x-2">
            <i class="fas fa-exclamation-circle text-rose-500"></i>
            <span>${errorMsg}</span>
          </div>
        ` : ''}

        <form onsubmit="APP.handleLogin(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email / Tài khoản</label>
            <input type="email" id="loginEmail" required value="${emailDraft}" placeholder="sinhvien@vnu.edu.vn" 
                   class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu</label>
            <input type="password" id="loginPassword" required placeholder="••••••••" 
                   class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all text-sm">
            Đăng Nhập
          </button>
        </form>

        <div class="relative my-6 text-center">
          <span class="bg-white/90 px-3 text-xs text-slate-400">hoặc</span>
          <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 -z-10"></div>
        </div>

        <div class="space-y-3">
          <button onclick="APP.loginAsGuest()" class="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl border border-slate-200 text-sm transition-all flex items-center justify-center space-x-2">
            <i class="fas fa-user-clock text-emerald-600"></i>
            <span>Trải nghiệm nhanh dưới dạng Khách</span>
          </button>

          <button onclick="APP.navigateTo('register')" class="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3 rounded-xl border border-emerald-200 text-sm transition-all flex items-center justify-center space-x-2">
            <i class="fas fa-user-plus text-emerald-600"></i>
            <span>Chưa có tài khoản? Đăng ký ngay</span>
          </button>
        </div>
      </div>
    `;
  },

  renderRegisterPage: function(errorMsg) {
    return `
      <div class="max-w-md mx-auto my-10 glass-card rounded-3xl p-8 shadow-2xl border border-white/80 relative">
        <div class="text-center space-y-3 mb-6">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white text-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-200">
            <i class="fas fa-user-plus"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 font-serif-title">Đăng Ký Tài Khoản Mới</h2>
          <p class="text-xs text-slate-500">Tạo tài khoản để cá nhân hóa toàn bộ lộ trình chăm sóc sức khỏe tinh thần</p>
        </div>

        ${errorMsg ? `
          <div class="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center space-x-2">
            <i class="fas fa-exclamation-circle text-rose-500"></i>
            <span>${errorMsg}</span>
          </div>
        ` : ''}

        <form onsubmit="APP.handleRegister(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Họ và Tên</label>
            <input type="text" id="regName" required placeholder="Ví dụ: Nguyễn Văn ULIS" 
                   class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
            <input type="email" id="regEmail" required placeholder="sinhvien@vnu.edu.vn" 
                   class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mật khẩu (Tối thiểu 6 ký tự)</label>
            <input type="password" id="regPassword" required minlength="6" placeholder="••••••••" 
                   class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Vai trò</label>
            <select id="regRole" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
              <option value="Sinh viên ULIS - ĐHQGHN">Sinh viên ULIS - ĐHQGHN</option>
              <option value="Sinh viên Đại học khác">Sinh viên Đại học khác</option>
              <option value="Học sinh / Giảng viên">Học sinh / Giảng viên</option>
            </select>
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all text-sm">
            Tạo Tài Khoản & Bắt Đầu Học
          </button>
        </form>

        <div class="mt-6 text-center text-xs text-slate-500">
          Đã có tài khoản? 
          <button onclick="APP.navigateTo('login')" class="text-emerald-700 font-bold hover:underline ml-1">
            Đăng nhập ngay
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 5. CHAPTER 1 COMPONENT (Nhận diện & Test 12 Câu)
  // =========================================================================
  renderChapter1: function(user, userProgress, isFav, activeTestResult) {
    const ch = window.APP_DATA.chapters[0];
    const quiz = ch.quiz;
    const progressObj = userProgress?.progress || userProgress;
    const userTestResult = progressObj?.ch1?.testResult || activeTestResult;

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

          <!-- Favorite Toggle Button -->
          <button onclick="APP.toggleFavorite({ id: 'ch1', title: '${ch.title}', chapterId: 1, category: 'Bài học', snippet: '${ch.subtitle}', path: 'ch1' })" 
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

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed">
            ${ch.theory.intro}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${ch.theory.manifestations.map((m, idx) => `
              <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                    ${idx + 1}
                  </div>
                  <h4 class="font-bold text-slate-900 text-xs sm:text-sm">${m.title}</h4>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${m.desc}</p>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
            <i class="fas fa-info-circle text-amber-600 mr-1"></i>
            ${ch.theory.definition}
          </div>
        </div>

        <!-- Exercise / Interactive Quiz Section -->
        <div id="quizSection" class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-emerald-200">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-clipboard-check text-emerald-600"></i>
                <span>2. Bài Tập Thực Hành: ${quiz.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-1">${quiz.instructions}</p>
            </div>
          </div>

          <!-- Questions List -->
          <form id="burnoutForm" onsubmit="APP.calculateBurnoutScore(event)" class="space-y-6">
            ${quiz.questions.map((q, qIdx) => {
              const savedVal = userTestResult?.answers ? userTestResult.answers[qIdx] : null;
              return `
                <div class="p-4 rounded-2xl bg-white/80 border border-slate-200 space-y-3">
                  <div class="text-sm font-bold text-slate-800">${q}</div>
                  <div class="grid grid-cols-5 gap-2 text-center text-xs font-medium">
                    ${[1, 2, 3, 4, 5].map(score => `
                      <label class="quiz-option p-2.5 rounded-xl border ${savedVal === score ? 'border-emerald-500 bg-emerald-50 font-bold' : 'border-slate-200 bg-white'} hover:border-emerald-400 flex flex-col items-center justify-center cursor-pointer transition-all">
                        <input type="radio" name="q_${qIdx}" value="${score}" ${savedVal === score ? 'checked' : ''} required class="custom-checkbox mb-1">
                        <span class="text-[11px] text-slate-700">${score}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}

            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-200 text-sm sm:text-base transition-all flex items-center justify-center space-x-2">
              <i class="fas fa-chart-line"></i>
              <span>Tính Điểm & Diễn Giải Kết Quả</span>
            </button>
          </form>

          <!-- Result Container -->
          <div id="testResultContainer" class="${userTestResult ? '' : 'hidden'} p-6 rounded-2xl bg-white border border-emerald-300 space-y-4 shadow-inner">
            ${userTestResult ? COMPONENTS.renderTestResultContent(userTestResult) : ''}
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
      <div class="text-center space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Kết quả Đánh giá của Bạn</span>
        <div class="text-4xl font-extrabold text-emerald-600 font-serif-title">${res.score.toFixed(2)} / 5.00</div>
        
        <div class="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold border ${interpretation.badgeColor}">
          <i class="fas ${interpretation.icon}"></i>
          <span>${interpretation.level}</span>
        </div>

        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">${interpretation.message}</p>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 max-w-xl mx-auto">
          <strong class="text-slate-800">Lời khuyên dành riêng cho bạn:</strong>
          <p class="text-slate-600 leading-relaxed">${interpretation.advice}</p>
        </div>

        <div class="pt-2 flex justify-center space-x-3">
          <button onclick="APP.navigateTo('ch2')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all flex items-center space-x-1">
            <span>Tiếp tục sang Chương 2: Giải mã</span>
            <i class="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 6. CHAPTER 2 COMPONENT (Giải mã & Iceberg Model Tool)
  // =========================================================================
  renderChapter2: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[1];
    const progressObj = userProgress?.progress || userProgress;
    const savedIceberg = progressObj?.ch2?.iceberg;
    const readSections = progressObj?.ch2?.readSections || [];

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

          <button onclick="APP.toggleFavorite({ id: 'ch2', title: '${ch.title}', chapterId: 2, category: 'Bài học', snippet: '${ch.subtitle}', path: 'ch2' })" 
                  class="px-3.5 py-2 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-bold transition-all flex items-center space-x-1.5 self-start sm:self-auto">
            <i class="fas ${isFav ? 'fa-bookmark text-amber-500' : 'fa-bookmark text-slate-400'}"></i>
            <span>${isFav ? 'Đã lưu yêu thích' : 'Lưu Yêu thích'}</span>
          </button>
        </div>

        <!-- 3 Deep Reading Sections -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-md border border-white/80">
          <div class="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 class="text-xl font-bold text-slate-900 font-serif-title flex items-center space-x-2">
              <i class="fas fa-lightbulb text-sky-600"></i>
              <span>1. Lý Thuyết: 3 Góc Nhìn Bóc Tách Áp Lực</span>
            </h2>
            <span class="text-xs font-bold text-sky-600">Đã đọc: ${readSections.length} / 3 phần</span>
          </div>

          <div class="space-y-4">
            ${ch.sections.map(sec => {
              const isRead = readSections.includes(sec.id);
              return `
                <div class="p-5 rounded-2xl border ${isRead ? 'bg-sky-50/70 border-sky-300' : 'bg-white border-slate-200'} space-y-3 transition-all">
                  <div class="flex items-center justify-between">
                    <h4 class="font-bold text-slate-900 text-sm sm:text-base text-sky-900">${sec.title}</h4>
                    <button onclick="APP.toggleSectionRead('${sec.id}')" 
                            class="px-3 py-1 rounded-xl text-xs font-bold border transition-all ${isRead ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}">
                      <i class="fas ${isRead ? 'fa-check-circle' : 'fa-circle'} mr-1"></i>
                      <span>${isRead ? 'Đã đọc' : 'Đánh dấu đã đọc'}</span>
                    </button>
                  </div>

                  <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${sec.content}</p>

                  <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-medium flex items-center space-x-2">
                    <i class="fas fa-key text-amber-600"></i>
                    <span><strong>Góc nhìn chuyển hóa:</strong> ${sec.insight}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Interactive Iceberg Tool -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-sky-200">
          <div class="text-center space-y-2">
            <h2 class="text-2xl font-extrabold text-slate-900 font-serif-title">${ch.exercise.title}</h2>
            <p class="text-xs text-slate-500 max-w-xl mx-auto">${ch.exercise.description}</p>
          </div>

          <!-- Iceberg Graphic Display -->
          <div class="iceberg-container">
            <!-- Sky (Floating Part) -->
            <div class="iceberg-sky">
              <div class="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span><i class="fas fa-sun text-amber-500 mr-1"></i> Phần Nổi (Biểu hiện bề ngoài)</span>
                <span class="text-[10px] text-sky-600 font-normal">Chỉ là phần nhỏ</span>
              </div>
              <div id="floatingTagsContainer" class="flex flex-wrap gap-2">
                ${floatingItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-white/95 text-sky-900 font-bold text-xs shadow-sm border border-sky-200 flex items-center space-x-1.5 animate-modal-in">
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
                <span><i class="fas fa-water text-sky-300 mr-1"></i> Phần Chìm (Nguyên nhân gốc rễ)</span>
                <span class="text-[10px] text-sky-200 font-normal">Yếu tố quyết định</span>
              </div>
              <div id="submergedTagsContainer" class="flex flex-wrap gap-2">
                ${submergedItems.map(item => `
                  <span class="px-3 py-1 rounded-full bg-sky-950/80 text-sky-100 font-bold text-xs shadow-sm border border-sky-400/40 flex items-center space-x-1.5 animate-modal-in">
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
                <input type="text" id="floatingInput" placeholder="Ví dụ: Đau đầu, mệt mỏi..." class="flex-1 px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none">
                <button onclick="APP.addIcebergItem('floating')" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  Thêm
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700">Thêm Nguyên nhân Phần Chìm:</label>
              <div class="flex space-x-2">
                <input type="text" id="submergedInput" placeholder="Ví dụ: Sợ thất bại, kỳ vọng lớn..." class="flex-1 px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                <button onclick="APP.addIcebergItem('submerged')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  Thêm
                </button>
              </div>
            </div>
          </div>

          <div class="text-center pt-3 flex justify-center space-x-3">
            <button onclick="APP.resetIceberg()" class="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-4 py-2.5 rounded-xl">
              Khôi phục mặc định
            </button>
            <button onclick="APP.navigateTo('ch3')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center space-x-1">
              <span>Sang Chương 3: Chuyển hóa</span>
              <i class="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 7. CHAPTER 3 COMPONENT (Drag and Drop, Pomodoro & Energy Map)
  // =========================================================================
  renderChapter3: function(user, userProgress, isFav, selectedStickerId) {
    const ch = window.APP_DATA.chapters[2];
    const progressObj = userProgress?.progress || userProgress;
    const dndState = progressObj?.ch3?.dndState || { pairs: {}, isCompleted: false, score: 0 };
    const savedEnergyMap = progressObj?.ch3?.energyMap || {};
    const lusiAnswers = progressObj?.ch3?.lusiAnswers || {};

    const pairsData = ch.dndExercise.pairs;
    const pairedProblemIds = Object.keys(dndState.pairs);

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

          <button onclick="APP.toggleFavorite({ id: 'ch3', title: '${ch.title}', chapterId: 3, category: 'Bài học & Công cụ', snippet: '${ch.subtitle}', path: 'ch3' })" 
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

          <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
            ${ch.theory.caseStudy.content}
          </div>

          <!-- Lusi Scenario Quiz -->
          <div class="space-y-4 pt-2">
            <h4 class="font-bold text-slate-900 text-sm">Phân tích tình huống của Lusi:</h4>
            ${ch.exercise.lusiQuiz.map(q => {
              const selectedOpt = lusiAnswers[q.id];
              return `
                <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
                  <div class="text-xs font-bold text-slate-800">${q.question}</div>
                  <div class="space-y-1.5">
                    ${q.options.map((opt, optIdx) => `
                      <label class="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-amber-50 transition-colors ${selectedOpt === optIdx ? 'bg-amber-100 font-bold' : ''}">
                        <input type="radio" name="${q.id}" value="${optIdx}" ${selectedOpt === optIdx ? 'checked' : ''} 
                               onchange="APP.handleLusiQuizAnswer('${q.id}', ${optIdx})" class="custom-checkbox">
                        <span>${opt}</span>
                      </label>
                    `).join('')}
                  </div>
                  ${selectedOpt !== undefined ? `
                    <div class="p-2.5 rounded-lg ${selectedOpt === q.correct ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'} text-xs">
                      <i class="fas ${selectedOpt === q.correct ? 'fa-check-circle text-emerald-600' : 'fa-times-circle text-rose-600'} mr-1"></i>
                      <span>${selectedOpt === q.correct ? 'Chính xác!' : 'Chưa tối ưu.'} ${q.explanation}</span>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- DRAG AND DROP EXERCISE -->
        <div id="dndSection" class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-amber-200">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
                <i class="fas fa-hand-pointer text-amber-500"></i>
                <span>${ch.dndExercise.title}</span>
              </h2>
              <p class="text-xs text-slate-500 mt-1">${ch.dndExercise.instruction}</p>
            </div>
            <div class="flex items-center space-x-2">
              <button onclick="APP.resetDnD()" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all">
                <i class="fas fa-undo mr-1"></i> Làm lại
              </button>
              <button onclick="APP.checkDnDPairs()" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all">
                <i class="fas fa-check-double mr-1"></i> Kiểm tra
              </button>
            </div>
          </div>

          <!-- DnD Workspace Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column: Draggable Problem Stickers -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                <span>Vấn đề / Biểu hiện Kiệt sức</span>
                <span class="text-[10px] text-slate-400 font-normal">Kéo hoặc chạm để chọn</span>
              </div>

              <div id="dndStickersContainer" class="space-y-2.5">
                ${pairsData.map(p => {
                  const isPaired = pairedProblemIds.includes(p.id);
                  const isSelected = selectedStickerId === p.id;
                  return `
                    <div id="sticker_${p.id}"
                         draggable="${!isPaired}" 
                         ondragstart="APP.onDragStart(event, '${p.id}')"
                         onclick="APP.selectStickerForMobilePair('${p.id}')"
                         class="draggable-item p-3.5 rounded-2xl bg-white border ${isSelected ? 'selected-for-drop' : 'border-amber-200'} shadow-sm ${isPaired ? 'paired' : 'hover:border-amber-400 hover:shadow-md'} flex items-center justify-between">
                      <div class="flex items-center space-x-2.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center justify-center">
                          <i class="fas fa-puzzle-piece text-[11px]"></i>
                        </span>
                        <span class="text-xs font-bold text-slate-800">${p.problem}</span>
                      </div>
                      ${isPaired ? '<span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Đã ghép</span>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Right Column: Drop Target Slots (Solutions) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                <span>Giải pháp & Chuyển hóa Tư duy</span>
                <span class="text-[10px] text-slate-400 font-normal">Thả vào đây</span>
              </div>

              <div class="space-y-3">
                ${pairsData.map(p => {
                  const pairedProblemId = dndState.pairs[p.id];
                  const pairedProblem = pairsData.find(item => item.id === pairedProblemId);
                  const isChecked = dndState.isCompleted;
                  const isCorrect = isChecked && pairedProblemId === p.id;
                  const isIncorrect = isChecked && pairedProblemId && pairedProblemId !== p.id;

                  let targetClass = '';
                  if (isCorrect) targetClass = 'correct-match';
                  else if (isIncorrect) targetClass = 'incorrect-match';

                  return `
                    <div id="drop_target_${p.id}"
                         ondragover="APP.onDragOver(event)" 
                         ondragleave="APP.onDragLeave(event)"
                         ondrop="APP.onDrop(event, '${p.id}')"
                         onclick="APP.pairWithTarget('${p.id}')"
                         class="drop-target-zone p-3.5 bg-slate-50/80 ${targetClass} flex flex-col justify-between cursor-pointer transition-all">
                      <div class="flex items-start justify-between">
                        <div class="text-xs font-extrabold text-slate-800 flex items-center space-x-1.5">
                          <i class="fas fa-lightbulb text-amber-500 text-xs"></i>
                          <span>${p.solution}</span>
                        </div>
                        ${pairedProblem ? `
                          <button onclick="event.stopPropagation(); APP.unpairSlot('${p.id}')" title="Gỡ ghép" class="text-slate-400 hover:text-rose-500 text-xs px-1">
                            <i class="fas fa-times"></i>
                          </button>
                        ` : ''}
                      </div>

                      ${pairedProblem ? `
                        <div class="mt-2 p-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-between shadow-xs">
                          <span>Ghép với: <strong>${pairedProblem.problem}</strong></span>
                          ${isChecked ? `
                            <span class="text-xs ${isCorrect ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}">
                              <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>
                            </span>
                          ` : ''}
                        </div>
                      ` : `
                        <div class="mt-2 text-[11px] text-slate-400 italic text-center py-1">
                          Kéo hoặc chọn sticker để ghép vào giải pháp này
                        </div>
                      `}

                      ${isChecked && isCorrect ? `
                        <div class="mt-1.5 text-[11px] text-emerald-800 bg-emerald-50/90 p-1.5 rounded-lg border border-emerald-200">
                          <strong>Ý nghĩa:</strong> ${p.explanation}
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- DnD Result / Feedback Bar -->
          ${dndState.isCompleted ? `
            <div class="p-4 rounded-2xl ${dndState.score === 6 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'} border flex items-center justify-between text-xs font-bold">
              <div class="flex items-center space-x-2">
                <i class="fas ${dndState.score === 6 ? 'fa-award text-emerald-600 text-xl' : 'fa-info-circle text-amber-600 text-xl'}"></i>
                <span>Kết quả bài tập: ${dndState.score} / 6 cặp chính xác! ${dndState.score === 6 ? 'Tuyệt vời, bạn đã nắm trọn vẹn tư duy chuyển hóa!' : 'Hãy xem lại các cặp chưa đúng và thử lại nhé.'}</span>
              </div>
              <button onclick="APP.resetDnD()" class="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs hover:bg-slate-50">Làm lại</button>
            </div>
          ` : ''}
        </div>

        <!-- Pomodoro Interactive Tool -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-amber-200 text-center">
          <div class="max-w-xl mx-auto space-y-2">
            <h2 class="text-2xl font-extrabold text-slate-900 font-serif-title">
              <i class="fas fa-stopwatch text-amber-500 mr-2"></i> ${ch.theory.pomodoroInfo.title}
            </h2>
            <p class="text-xs text-slate-500">${ch.theory.pomodoroInfo.desc}</p>
          </div>

          <!-- Timer Visual -->
          <div class="relative w-48 h-48 mx-auto flex items-center justify-center">
            <div class="w-44 h-44 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex flex-col items-center justify-center shadow-xl shadow-amber-200">
              <span id="pomoStatus" class="text-xs font-bold uppercase tracking-wider text-amber-100">Phiên Tập Trung</span>
              <span id="pomoDisplay" class="text-4xl font-extrabold font-serif-title my-1">25:00</span>
              <span id="pomoSessionCount" class="text-[11px] font-semibold text-amber-200">Đã xong: ${userProgress?.ch3?.pomodoroSessions || 0} phiên</span>
            </div>
          </div>

          <!-- Controls -->
          <div class="flex justify-center space-x-3 pt-2">
            <button id="pomoStartBtn" onclick="APP.togglePomodoro()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all">
              Bắt đầu (25p)
            </button>
            <button onclick="APP.resetPomodoro()" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs transition-all">
              Đặt lại
            </button>
          </div>
        </div>

        <!-- 24-Hour Energy Map Tool -->
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-emerald-200">
          <div class="text-center space-y-2">
            <h2 class="text-2xl font-extrabold text-slate-900 font-serif-title">${ch.exercise.energyMapTool.title}</h2>
            <p class="text-xs text-slate-500 max-w-xl mx-auto">${ch.exercise.energyMapTool.desc}</p>
          </div>

          <!-- Legend -->
          <div class="flex flex-wrap justify-center gap-4 text-xs font-bold">
            <span class="flex items-center space-x-1.5"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500"></span><span>Xanh: Năng lượng tốt</span></span>
            <span class="flex items-center space-x-1.5"><span class="w-3.5 h-3.5 rounded-full bg-amber-500"></span><span>Vàng: Hơi mệt</span></span>
            <span class="flex items-center space-x-1.5"><span class="w-3.5 h-3.5 rounded-full bg-rose-500"></span><span>Đỏ: Kiệt sức</span></span>
          </div>

          <!-- 24-Hour Grid Slots -->
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5 pt-4" id="energyGrid">
            ${[...Array(24).keys()].map(h => {
              const savedColor = savedEnergyMap[h] || 'green';
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
                  <div class="text-[10px] opacity-80">${savedColor === 'green' ? 'Ổn' : savedColor === 'yellow' ? 'Mệt' : 'Đỏ'}</div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Energy Balance Analytics -->
          <div id="energyAnalytics" class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1 text-slate-700">
            ${COMPONENTS.renderEnergyAnalytics(savedEnergyMap)}
          </div>

          <div class="text-center pt-4">
            <button onclick="APP.navigateTo('ch4')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all inline-flex items-center space-x-2">
              <span>Sang Chương 4: Tái tạo</span>
              <i class="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderEnergyAnalytics: function(energyMap) {
    let green = 0, yellow = 0, red = 0;
    for (let i = 0; i < 24; i++) {
      const color = energyMap[i] || 'green';
      if (color === 'green') green++;
      else if (color === 'yellow') yellow++;
      else if (color === 'red') red++;
    }
    const total = 24;
    const greenPct = Math.round((green / total) * 100);
    const redPct = Math.round((red / total) * 100);

    return `
      <div class="flex items-center justify-between font-bold text-slate-800 pb-1">
        <span>Chỉ số Cân bằng Năng lượng 24h:</span>
        <span class="text-emerald-700">${green} giờ Xanh (${greenPct}%) • ${yellow} giờ Vàng • ${red} giờ Đỏ (${redPct}%)</span>
      </div>
      <p class="text-slate-600">
        ${redPct > 30 ? '⚠️ Cảnh báo: Tỷ lệ giờ kiệt sức (màu đỏ) đang cao. Bạn cần bổ sung ít nhất 2 phiên nghỉ ngơi xanh trong ngày!' : '🌟 Nhịp sinh học của bạn đang duy trì ở mức cân bằng tốt. Tiếp tục phát huy nhé!'}
      </p>
    `;
  },

  // =========================================================================
  // 8. CHAPTER 4 COMPONENT (Video, 11-Day Challenge & Value Flower)
  // =========================================================================
  renderChapter4: function(user, userProgress, isFav) {
    const ch = window.APP_DATA.chapters[3];
    const days = ch.exercise.challenge11Days;
    const progressObj = userProgress?.progress || userProgress;
    const challengeState = progressObj?.ch4?.challenge11Days || {};
    const flowerState = progressObj?.ch4?.valueFlower || {};
    const videoCompleted = progressObj?.ch4?.videoCompleted || false;

    const completedDaysCount = Object.values(challengeState).filter(c => c.completed).length;

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

            <!-- Video Fallback Card if Video Fails to Load -->
            <div id="videoErrorFallback" class="hidden absolute inset-0 bg-slate-900/90 text-white p-8 flex flex-col items-center justify-center text-center space-y-3">
              <i class="fas fa-wifi text-rose-400 text-3xl"></i>
              <div class="font-bold text-sm">Không thể tải luồng video trực tiếp</div>
              <p class="text-xs text-slate-300 max-w-md">Đừng lo lắng! Bạn có thể thực hành bài tập thở 4-7-8 ngay tại đây: Hít vào sâu bằng mũi trong 4 giây, giữ hơi thở 7 giây, và thở từ từ bằng miệng trong 8 giây.</p>
              <button onclick="APP.markVideoCompleteManual()" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl">
                Đánh dấu đã hoàn thành bài thở
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            ${ch.videoSection.reflectionPrompts.map((p, idx) => `
              <div class="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-teal-900">
                <strong>Câu hỏi lắng nghe ${idx + 1}:</strong> ${p}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 11-DAY RECOVERY CHALLENGE TRACKER -->
        <div id="challenge11Section" class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-emerald-200">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-title">Thử Thách 11 Ngày — Tìm Lại Nhịp Thở</h2>
              <p class="text-xs text-slate-500 mt-1">Hoàn thành bài tập mỗi ngày để khôi phục nguồn năng lượng tự nhiên của bạn</p>
            </div>
            <div class="text-right">
              <span class="text-xs font-bold text-emerald-600 block">Tiến độ</span>
              <div class="text-lg font-extrabold text-slate-900">${completedDaysCount} / 11 Ngày</div>
            </div>
          </div>

          <!-- Challenge Days List -->
          <div class="space-y-3.5">
            ${days.map(d => {
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
        <div class="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-white/80">
          <div class="text-center space-y-2">
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 font-serif-title">${ch.exercise.valueFlower.title}</h2>
            <p class="text-xs text-slate-500 max-w-md mx-auto">${ch.exercise.valueFlower.desc}</p>
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

        <!-- FUTURE LETTER LINK CALLOUT -->
        <div class="glass-card rounded-3xl p-8 border border-pink-200 bg-gradient-to-r from-pink-50/80 via-white to-emerald-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div class="space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-pink-600">Trạm Dừng Cuối Cùng</span>
            <h3 class="text-lg font-bold text-slate-900 font-serif-title">Thư Gửi Tôi Trong Tương Lai (Pink / Green Theme)</h3>
            <p class="text-xs text-slate-600">Viết lời nhắn nhủ, niêm phong sáp bảo mật và cài đặt ngày mở trong tương lai.</p>
          </div>
          <button onclick="APP.navigateTo('future-letter')" class="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all flex items-center space-x-2 self-start sm:self-auto">
            <i class="fas fa-envelope-open-text"></i>
            <span>Mở Trạm Viết Thư</span>
          </button>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 9. FUTURE LETTER PAGE COMPONENT (Pink / Green Theme)
  // =========================================================================
  renderFutureLetterPage: function(user, userProgress) {
    const letters = userProgress?.futureLetters || [];
    const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    return `
      <div class="max-w-4xl mx-auto space-y-10 pb-16">
        <!-- Header -->
        <div class="text-center space-y-3">
          <span class="px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-bold border border-pink-200">
            <i class="fas fa-heart text-pink-500 mr-1"></i> Trạm Du Hành Cảm Xúc
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-title">
            Thư Gửi Tôi Trong <span class="text-pink-600">Tương Lai</span>
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Hãy viết những lời nhắn nhủ chân thành gửi đến chính bạn. Bức thư sẽ được niêm phong sáp và khóa bảo mật cho đến ngày bạn chọn mở.
          </p>
        </div>

        <!-- Letter Composition Station -->
        <div class="future-letter-envelope rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl border-2 border-pink-300">
          <div class="flex items-center justify-between pb-4 border-b border-pink-200">
            <div class="flex items-center space-x-2 text-pink-800 font-bold text-sm">
              <i class="fas fa-feather-pointed text-pink-500 text-lg"></i>
              <span>Soạn Bức Thư Niêm Phong</span>
            </div>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Tone Pink / Green
            </span>
          </div>

          <form onsubmit="APP.handleCreateFutureLetter(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Gửi đến (Người nhận)</label>
                <input type="text" id="letRecipient" required placeholder="Gửi Tôi của ngày tốt nghiệp / năm sau..." 
                       class="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xs font-bold">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Ngày mở thư (Trong tương lai)</label>
                <input type="date" id="letUnlockDate" required min="${tomorrowStr}" 
                       class="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xs font-bold">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nội dung bức thư</label>
              <textarea id="letContent" rows="6" required minlength="10" 
                        placeholder="Chào cậu, khi cậu đọc được bức thư này, chắc hẳn cậu đã đi qua một chặng đường dài. Hãy nhớ rằng..." 
                        class="w-full p-4 rounded-2xl letter-paper border border-pink-200 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-pink-400"></textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Ký tên</label>
                <input type="text" id="letSignature" placeholder="Tên của bạn" value="${user ? user.name : ''}" 
                       class="w-full px-4 py-2 rounded-xl border border-pink-200 bg-white/90 text-xs font-bold">
              </div>

              <div class="flex justify-end pt-4 sm:pt-0">
                <button type="submit" class="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-pink-200 transition-all flex items-center space-x-2 text-xs sm:text-sm">
                  <div class="wax-seal w-6 h-6 text-xs mr-1"><i class="fas fa-stamp"></i></div>
                  <span>Niêm Phong & Khóa Thư</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Sealed & Saved Letters Gallery -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-slate-900 font-serif-title flex items-center space-x-2">
              <i class="fas fa-box-archive text-emerald-600"></i>
              <span>Hòm Thư Đã Niêm Phong (${letters.length})</span>
            </h3>
          </div>

          ${letters.length === 0 ? `
            <div class="glass-card rounded-2xl p-8 text-center text-slate-500 space-y-2 border border-slate-200">
              <i class="fas fa-envelope-open text-3xl text-pink-300"></i>
              <div class="text-xs font-bold">Bạn chưa có bức thư nào được niêm phong.</div>
              <p class="text-[11px]">Hãy viết một bức thư để gửi gắm niềm tin cho chính mình trong tương lai!</p>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${letters.map(letItem => {
                const status = window.SERVICES.FutureLetter.checkLetterStatus(letItem);
                const isOpened = letItem.isOpened;

                return `
                  <div class="glass-card rounded-2xl p-5 border ${isOpened ? 'border-emerald-300 bg-emerald-50/50' : 'border-pink-200 bg-pink-50/30'} space-y-3 shadow-md relative">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-pink-800 truncate">${letItem.recipient}</span>
                      <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${isOpened ? 'bg-emerald-100 text-emerald-800' : 'bg-pink-100 text-pink-800'}">
                        ${isOpened ? '✓ Đã mở' : '🔒 Đã niêm phong'}
                      </span>
                    </div>

                    <div class="text-xs text-slate-600 space-y-1">
                      <div>Ngày niêm phong: <strong>${new Date(letItem.createdAt).toLocaleDateString('vi-VN')}</strong></div>
                      <div>Ngày hẹn mở: <strong>${letItem.unlockDate}</strong></div>
                      <div class="text-[11px] font-bold ${status.isLocked ? 'text-pink-600' : 'text-emerald-600'}">
                        ${status.label}
                      </div>
                    </div>

                    <div class="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      ${status.isLocked ? `
                        <button onclick="APP.testUnlockLetter('${letItem.id}')" title="Mở thử nghiệm ngay phục vụ QA kiểm tra" 
                                class="text-[10px] text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200 font-bold transition-all">
                          <i class="fas fa-flask mr-1"></i> QA Fast-Forward
                        </button>
                        <button disabled class="opacity-50 cursor-not-allowed text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
                          Chưa đến hạn
                        </button>
                      ` : `
                        <button onclick="APP.openLetterModal('${letItem.id}')" 
                                class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs shadow-sm transition-all flex items-center justify-center space-x-1">
                          <i class="fas fa-envelope-open"></i>
                          <span>Đọc Thư Ngay</span>
                        </button>
                      `}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
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
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h1 class="text-3xl font-extrabold text-slate-900 font-serif-title flex items-center space-x-2">
              <i class="fas fa-bookmark text-amber-500"></i>
              <span>Danh Sách Yêu Thích</span>
            </h1>
            <p class="text-xs text-slate-500 mt-1">Lưu trữ các bài học, phương pháp và công cụ tâm đắc của bạn</p>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-100 text-amber-800">
            ${favorites.length} mục đã lưu
          </span>
        </div>

        ${favorites.length === 0 ? `
          <div class="glass-card rounded-3xl p-12 text-center text-slate-500 space-y-4 border border-slate-200">
            <div class="w-16 h-16 rounded-full bg-amber-50 text-amber-500 text-2xl flex items-center justify-center mx-auto shadow-sm">
              <i class="fas fa-bookmark"></i>
            </div>
            <h3 class="text-base font-bold text-slate-800">Chưa có nội dung yêu thích nào</h3>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">
              Khi học các chương hoặc sử dụng công cụ, hãy nhấp vào biểu tượng bookmark để lưu lại xem sau bất cứ lúc nào!
            </p>
            <button onclick="APP.navigateTo('ch1')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md">
              Khám phá Chương 1
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${favorites.map(fav => `
              <div class="glass-card rounded-2xl p-5 border border-amber-100 hover:border-amber-300 transition-all space-y-3 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      ${fav.category || 'Bài học'}
                    </span>
                    <button onclick="APP.removeFavorite('${fav.id}')" title="Xóa khỏi yêu thích" class="text-slate-400 hover:text-rose-500 p-1 text-xs">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900">${fav.title}</h4>
                  <p class="text-xs text-slate-500 mt-1 line-clamp-2">${fav.snippet || 'Nội dung quan trọng đã được lưu.'}</p>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-[10px] text-slate-400">${new Date(fav.savedAt).toLocaleDateString('vi-VN')}</span>
                  <button onclick="APP.navigateTo('${fav.path}')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
                    <span>Xem nội dung</span>
                    <i class="fas fa-arrow-right text-[10px]"></i>
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
  // 11. DASHBOARD / USER PROGRESS COMPONENT
  // =========================================================================
  renderDashboardPage: function(user, userProgress) {
    if (!user) {
      return COMPONENTS.renderLoginPage();
    }

    const overallProgress = window.SERVICES.Progress.getOverallProgress(user.id);
    const streakInfo = window.SERVICES.Streak.getStreakInfo(user.id);
    const lastActivity = window.SERVICES.Progress.getLastActiveActivity(user.id);

    const c1 = window.SERVICES.Progress.calculateChapterProgress(user.id, 1);
    const c2 = window.SERVICES.Progress.calculateChapterProgress(user.id, 2);
    const c3 = window.SERVICES.Progress.calculateChapterProgress(user.id, 3);
    const c4 = window.SERVICES.Progress.calculateChapterProgress(user.id, 4);

    const progressObj = userProgress?.progress || userProgress;
    const testScore = progressObj?.ch1?.testResult?.score;
    const favCount = (userProgress?.favorites || []).length;
    const letterCount = (userProgress?.futureLetters || []).length;

    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <!-- User Info Header -->
        <div class="glass-card rounded-3xl p-8 border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-lg">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
              ${user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 font-serif-title">${user.name}</h1>
              <p class="text-xs font-semibold text-emerald-600">${user.role || 'Sinh viên ULIS'} • ${user.email}</p>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-[10px] font-bold bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full">
                  🔥 Streak: ${streakInfo.count} Ngày
                </span>
                <span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                  🌟 ${overallProgress >= 100 ? 'Đã hoàn thành toàn bộ' : 'Đang học tập'}
                </span>
              </div>
            </div>
          </div>

          <div class="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0">
            <span class="text-xs font-bold text-slate-500 block">Tổng tiến độ hoàn thành</span>
            <span class="text-3xl font-extrabold text-emerald-600 font-serif-title">${overallProgress}%</span>
            <div class="w-full sm:w-36 h-2 rounded-full bg-slate-200 overflow-hidden mt-1.5">
              <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: ${overallProgress}%"></div>
            </div>
          </div>
        </div>

        <!-- SMART RESUME LEARNING BANNER -->
        <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Tiếp tục phiên học của bạn</span>
            <h3 class="text-base sm:text-lg font-bold">${lastActivity.title || 'Chương 1: Nhận diện Burnout'}</h3>
            <p class="text-xs text-emerald-100">Bấm nút để quay trở lại đúng vị trí và tiếp tục sạc lại năng lượng.</p>
          </div>
          <button onclick="APP.resumeLearning()" class="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-2xl text-xs shadow-lg transition-all flex items-center space-x-2 self-start sm:self-auto">
            <i class="fas fa-play"></i>
            <span>Tiếp Tục Ngay</span>
          </button>
        </div>

        <!-- 4 Chapters Progress Breakdown -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900 font-serif-title">Tiến Độ Từng Chương Học</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div onclick="APP.navigateTo('ch1')" class="glass-card rounded-2xl p-5 border border-emerald-100 space-y-2 cursor-pointer hover:shadow-md transition-all">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-slate-800">C1: Nhận diện</span>
                <span class="text-emerald-600">${c1}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-emerald-500" style="width: ${c1}%"></div>
              </div>
              <p class="text-[11px] text-slate-500">${testScore ? `Điểm test: ${testScore.toFixed(2)}` : 'Chưa làm test'}</p>
            </div>

            <div onclick="APP.navigateTo('ch2')" class="glass-card rounded-2xl p-5 border border-sky-100 space-y-2 cursor-pointer hover:shadow-md transition-all">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-slate-800">C2: Giải mã</span>
                <span class="text-sky-600">${c2}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-sky-500" style="width: ${c2}%"></div>
              </div>
              <p class="text-[11px] text-slate-500">Mô hình Tảng băng trôi</p>
            </div>

            <div onclick="APP.navigateTo('ch3')" class="glass-card rounded-2xl p-5 border border-amber-100 space-y-2 cursor-pointer hover:shadow-md transition-all">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-slate-800">C3: Chuyển hóa</span>
                <span class="text-amber-600">${c3}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-amber-500" style="width: ${c3}%"></div>
              </div>
              <p class="text-[11px] text-slate-500">Kéo thả & Pomodoro</p>
            </div>

            <div onclick="APP.navigateTo('ch4')" class="glass-card rounded-2xl p-5 border border-teal-100 space-y-2 cursor-pointer hover:shadow-md transition-all">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-slate-800">C4: Tái tạo</span>
                <span class="text-teal-600">${c4}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-teal-500" style="width: ${c4}%"></div>
              </div>
              <p class="text-[11px] text-slate-500">Thử thách 11 Ngày</p>
            </div>
          </div>
        </div>

        <!-- Secondary Modules Summary Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Favorites Widget -->
          <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <i class="fas fa-bookmark text-amber-500"></i>
                <span>Mục Yêu Thích Đã Lưu</span>
              </h4>
              <button onclick="APP.navigateTo('favorites')" class="text-xs font-bold text-emerald-600 hover:underline">
                Xem tất cả (${favCount})
              </button>
            </div>
            <p class="text-xs text-slate-500">${favCount > 0 ? `Bạn đã lưu ${favCount} bài học và công cụ.` : 'Chưa có mục nào được lưu vào danh sách yêu thích.'}</p>
          </div>

          <!-- Future Letter Widget -->
          <div class="glass-card rounded-2xl p-6 border border-pink-200 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <i class="fas fa-envelope-open-text text-pink-500"></i>
                <span>Bức Thư Tương Lai</span>
              </h4>
              <button onclick="APP.navigateTo('future-letter')" class="text-xs font-bold text-pink-600 hover:underline">
                Quản lý thư (${letterCount})
              </button>
            </div>
            <p class="text-xs text-slate-500">${letterCount > 0 ? `Bạn có ${letterCount} bức thư đang được niêm phong.` : 'Hãy viết một bức thư để gửi đến chính bạn sau này!'}</p>
          </div>
        </div>

        <!-- Quick Access Grid to All Interactive Tools -->
        <div class="glass-card rounded-3xl p-8 space-y-4 border border-white/80">
          <h3 class="text-base font-bold text-slate-900 font-serif-title">Truy Cập Nhanh Toàn Bộ Công Cụ Tương Tác</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button onclick="APP.navigateTo('ch1')" class="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-stethoscope text-lg block mb-1 text-emerald-600"></i>
              <span>Test Burnout (12 câu)</span>
            </button>
            <button onclick="APP.navigateTo('ch2')" class="p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-icicles text-lg block mb-1 text-sky-600"></i>
              <span>Mô hình Tảng băng</span>
            </button>
            <button onclick="APP.navigateTo('ch3')" class="p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-puzzle-piece text-lg block mb-1 text-amber-600"></i>
              <span>Kéo thả Cảm xúc</span>
            </button>
            <button onclick="APP.navigateTo('ch3')" class="p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-stopwatch text-lg block mb-1 text-orange-600"></i>
              <span>Đồng hồ Pomodoro</span>
            </button>
            <button onclick="APP.navigateTo('ch3')" class="p-4 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-calendar-day text-lg block mb-1 text-teal-600"></i>
              <span>Bản đồ Năng lượng 24h</span>
            </button>
            <button onclick="APP.navigateTo('ch4')" class="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-play text-lg block mb-1 text-indigo-600"></i>
              <span>Video Mindfulness</span>
            </button>
            <button onclick="APP.navigateTo('ch4')" class="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-calendar-check text-lg block mb-1 text-emerald-600"></i>
              <span>Thử thách 11 Ngày</span>
            </button>
            <button onclick="APP.navigateTo('future-letter')" class="p-4 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-800 text-xs font-bold text-center transition-all shadow-xs">
              <i class="fas fa-envelope text-lg block mb-1 text-pink-600"></i>
              <span>Thư Tương Lai</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 12. GLOBAL MODALS (Streak, Search, Notifications & Email Mailbox)
  // =========================================================================
  renderStreakModal: function(streakInfo) {
    const count = streakInfo.count || 0;
    const history = streakInfo.history || [];
    const activeToday = streakInfo.activeToday;

    // Past 7 days calculation
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000).toISOString().split('T')[0];
      const dayName = new Date(d).toLocaleDateString('vi-VN', { weekday: 'short' });
      days.push({ date: d, dayName: dayName, active: history.includes(d) });
    }

    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-modal-in space-y-6">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-orange-600 font-bold text-base">
            <i class="fas fa-fire text-xl"></i>
            <span>Chuỗi Daily Streak</span>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 p-1">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <div class="text-center space-y-2">
          <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white text-4xl flex items-center justify-center mx-auto shadow-xl shadow-orange-200 animate-pulse-glow">
            <i class="fas fa-fire"></i>
          </div>
          <div class="text-4xl font-extrabold text-slate-900 font-serif-title">${count} Ngày Liên Tiếp</div>
          <p class="text-xs font-semibold ${activeToday ? 'text-emerald-600' : 'text-amber-600'}">
            ${activeToday ? '✓ Bạn đã hoàn thành hoạt động ý nghĩa hôm nay!' : '⚠️ Hôm nay bạn chưa hoàn thành hoạt động nào.'}
          </p>
        </div>

        <!-- 7-Day Activity Calendar -->
        <div class="space-y-2 pt-2">
          <span class="text-xs font-bold text-slate-700">Lịch Hoạt Động 7 Ngày Qua:</span>
          <div class="grid grid-cols-7 gap-1.5 text-center">
            ${days.map(d => `
              <div class="p-2 rounded-xl border ${d.active ? 'bg-orange-500 text-white border-orange-600 shadow-sm' : 'bg-slate-100 text-slate-400 border-slate-200'} text-xs font-bold">
                <div class="text-[9px] uppercase opacity-90">${d.dayName}</div>
                <div class="text-xs mt-0.5">${d.date.split('-')[2]}</div>
                <div class="mt-1">${d.active ? '🔥' : '•'}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Rules explanation -->
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-1 text-amber-900">
          <div class="font-bold"><i class="fas fa-info-circle text-amber-600 mr-1"></i> Quy tắc tính Streak (Duolingo Style):</div>
          <ul class="list-disc pl-4 space-y-0.5 text-[11px] text-amber-800">
            <li>Chỉ tính khi hoàn thành 1 <strong>hoạt động ý nghĩa</strong> (Test Ch1, Đọc xong Ch2, Kéo thả Ch3, Pomodoro, 11 Ngày Ch4, Niêm phong thư).</li>
            <li>Đăng nhập đơn thuần sẽ không tăng streak.</li>
            <li>Tối đa tăng 1 lần/ngày. Bỏ lỡ 1 ngày sẽ đặt lại chuỗi.</li>
          </ul>
        </div>

        <button onclick="APP.closeModal()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs">
          Đóng
        </button>
      </div>
    `;
  },

  renderSearchModal: function(query, results) {
    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl animate-modal-in space-y-5">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-emerald-700 font-bold text-base">
            <i class="fas fa-search text-emerald-600"></i>
            <span>Tìm Kiếm Nội Dung Sổ Tay</span>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 p-1">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative">
          <input type="text" id="globalSearchInput" value="${query || ''}" 
                 oninput="APP.handleSearchInput(this.value)"
                 placeholder="Nhập từ khóa (ví dụ: Pomodoro, Burnout, Tảng băng, Thư tương lai...)" 
                 class="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium">
          <i class="fas fa-search text-slate-400 absolute left-4 top-4 text-sm"></i>
        </div>

        <!-- Results Container -->
        <div class="max-h-96 overflow-y-auto space-y-2.5 pr-1">
          ${query && results.length === 0 ? `
            <div class="text-center py-8 text-slate-400 space-y-2">
              <i class="fas fa-search text-3xl text-slate-300"></i>
              <div class="text-xs font-bold">Không tìm thấy nội dung phù hợp với "${query}"</div>
              <p class="text-[11px]">Hãy thử tìm kiếm với các từ khóa ngắn hơn như "Test", "Pomodoro", "Thử thách"...</p>
            </div>
          ` : results.map(item => `
            <div onclick="APP.navigateToSearchResult('${item.chapterId}')" 
                 class="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer space-y-1 shadow-xs group">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">${item.title}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">${item.chapterTitle}</span>
              </div>
              <p class="text-xs text-slate-500">${item.snippet}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderNotificationModal: function(user, notifications, emailLogs, activeTab = 'notifs') {
    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl animate-modal-in space-y-5">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-slate-900 font-bold text-base">
            <i class="fas fa-bell text-emerald-600"></i>
            <span>Trung Tâm Thông Báo & Hộp Thư Email</span>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 p-1">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <!-- Tab Controls -->
        <div class="flex border-b border-slate-200 text-xs font-bold">
          <button onclick="APP.switchNotifTab('notifs')" 
                  class="py-2.5 px-4 border-b-2 transition-all ${activeTab === 'notifs' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800'}">
            <i class="fas fa-bell mr-1"></i> Thông Báo Ứng Dụng (${notifications.length})
          </button>
          <button onclick="APP.switchNotifTab('emails')" 
                  class="py-2.5 px-4 border-b-2 transition-all ${activeTab === 'emails' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800'}">
            <i class="fas fa-envelope mr-1"></i> Hộp Thư Email Mô Phỏng (${emailLogs.length})
          </button>
        </div>

        <!-- Content according to active tab -->
        ${activeTab === 'notifs' ? `
          <div class="space-y-3 max-h-96 overflow-y-auto pr-1">
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-500">Thông báo từ hệ thống</span>
              <button onclick="APP.markAllNotifsRead()" class="text-emerald-600 font-bold hover:underline">
                Đánh dấu đã đọc tất cả
              </button>
            </div>

            ${notifications.length === 0 ? `
              <div class="text-center py-8 text-slate-400 space-y-1 text-xs">
                <i class="fas fa-bell-slash text-2xl text-slate-300"></i>
                <div>Bạn không có thông báo mới nào.</div>
              </div>
            ` : notifications.map(n => `
              <div class="p-3.5 rounded-2xl border ${n.isRead ? 'bg-white border-slate-200 opacity-80' : 'bg-emerald-50 border-emerald-300'} space-y-1.5 shadow-xs">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-900">${n.title}</span>
                  <span class="text-[10px] text-slate-400">${new Date(n.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <p class="text-xs text-slate-600">${n.message}</p>
                ${n.ctaPath ? `
                  <button onclick="APP.closeModal(); APP.navigateTo('${n.ctaPath}')" class="text-[11px] font-bold text-emerald-700 hover:underline pt-1 block">
                    ${n.ctaText || 'Xem chi tiết'} →
                  </button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        ` : `
          <!-- Simulated Email Mailbox -->
          <div class="space-y-3 max-h-96 overflow-y-auto pr-1">
            <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
              <div>
                <strong>Hộp thư mô phỏng:</strong> Hiển thị nội dung email thực tế được gửi đến <strong>${user ? user.email : 'sinhvien@vnu.edu.vn'}</strong>
              </div>
              <button onclick="APP.triggerTestEmail()" class="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-bold text-[10px] whitespace-nowrap shadow-xs">
                Gửi Test Email
              </button>
            </div>

            ${emailLogs.length === 0 ? `
              <div class="text-center py-8 text-slate-400 space-y-1 text-xs">
                <i class="fas fa-inbox text-2xl text-slate-300"></i>
                <div>Hộp thư trống. Hệ thống sẽ tự động gửi email nhắc nhở Streak, Thư tương lai và tiến độ dở.</div>
              </div>
            ` : emailLogs.map(e => `
              <div class="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm font-sans">
                <div class="flex items-center justify-between text-xs pb-1.5 border-b border-slate-100">
                  <div class="font-bold text-slate-800">
                    <i class="fas fa-envelope text-emerald-600 mr-1"></i>
                    <span>${e.subject}</span>
                  </div>
                  <span class="text-[10px] text-slate-400">${e.sentAt}</span>
                </div>
                ${e.title ? `<div class="text-xs font-bold text-slate-800">${e.title}</div>` : ''}
                <div class="text-[11px] text-slate-500">
                  <span>Từ: <strong>no-reply@burnbright.ulis.vnu.edu.vn</strong></span> • 
                  <span>Đến: <strong>${e.toEmail}</strong></span>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                  ${e.body}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },

  renderLetterViewModal: function(letter) {
    return `
      <div class="glass-modal rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl animate-modal-in space-y-5 future-letter-envelope border-2 border-pink-300">
        <div class="flex items-center justify-between pb-2 border-b border-pink-200">
          <div class="flex items-center space-x-2 text-pink-800 font-bold text-base">
            <i class="fas fa-envelope-open-text text-pink-500 text-lg"></i>
            <span>Bức Thư Đã Mở Niêm Phong</span>
          </div>
          <button onclick="APP.closeModal()" class="text-slate-400 hover:text-slate-700 p-1">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <div class="p-6 rounded-2xl bg-white/95 letter-paper border border-pink-200 space-y-4 shadow-inner text-slate-800">
          <div class="flex justify-between items-center text-xs font-bold text-pink-900 border-b border-pink-100 pb-2">
            <span>${letter.recipient}</span>
            <span>Niêm phong ngày: ${new Date(letter.createdAt).toLocaleDateString('vi-VN')}</span>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-800 font-serif">
            ${letter.content}
          </p>

          <div class="text-right text-xs font-bold text-pink-800 pt-3 border-t border-pink-100">
            With Love & Strength,<br>
            <span class="text-sm font-serif-title">${letter.signature || 'Chính tôi'}</span>
          </div>
        </div>

        <button onclick="APP.closeModal()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs shadow-md">
          Đóng Bức Thư
        </button>
      </div>
    `;
  }
};
