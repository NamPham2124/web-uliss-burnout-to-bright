/**
 * Data store for From Burnout to Burn Bright - ULIS VNU
 * Soạn thảo chuẩn xác theo cuốn Sổ tay Canva của Nhóm Tác Giả Trường ĐH Ngoại ngữ, ĐHQGHN
 * và tài liệu đặc tả yêu cầu cải tiến.
 */
window.APP_DATA = {
  projectInfo: {
    title: "From Burnout to Burn Bright",
    badgeText: "Sản phẩm chăm sóc sức khỏe tinh thần bởi nhóm sinh viên ULIS - VNU",
    subtitle: "Cùng sinh viên vượt qua tình trạng kiệt sức trong học tập",
    author: "Nhóm tác giả Trường ĐH Ngoại ngữ - ĐHQGHN (ULIS - VNU)",
    coverImage: "assets/handbook_cover.jpg",
    chuyenGiaImage: "assets/chuyen_gia.jpg",
    loiMoDauImage: "assets/loi_mo_dau.jpg",
    description: "Một không gian an toàn, nơi bạn có thể dừng chân và sạc lại nguồn năng lượng. “From Burnout to Burn Bright” sẽ đồng hành cùng bạn nhìn lại hành trình của bản thân, gọi tên những cảm xúc nằm sâu bên trong và dần tìm lại sự kết nối với chính mình",
    quote: "Burn Bright không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.",
    chuyenGiaText: "Đây là một sản phẩm được đầu tư tâm huyết, nghiên cứu và xây dựng kỹ lưỡng dựa trên nền tảng kiến thức khoa học về Tâm lý học. Nội dung cuốn sổ được trình bày gần gũi, dễ tiếp cận và có tính ứng dụng cao, giúp người dùng có thể từng bước nhận diện, thấu hiểu và chủ động xây dựng chiến lược ứng phó với tình trạng kiệt sức trong học tập.\n\nĐây không chỉ là một cuốn sổ cung cấp kiến thức, mà còn là một công cụ đồng hành, khuyến khích mỗi người dành thời gian lắng lại, kết nối với bản thân và từng bước tìm lại nguồn năng lượng của chính mình.",
    loiMoDauText: "Nếu bạn đang cầm trên tay cuốn sổ này, có lẽ bạn đã từng, hoặc đang trải qua một giai đoạn áp lực nặng nề trong chính việc học của bản thân. Những bài tập dồn dập, các kỳ thi nối tiếp nhau, hoạt động ngoại khóa, nghiên cứu khoa học hay những băn khoăn về định hướng nghề nghiệp khiến bạn cảm thấy mệt mỏi và dần mất đi động lực. Bạn đã từng thật sự nỗ lực rất nhiều, nhưng dần dần bạn cảm thấy mình mệt và trống rỗng - như thể ngọn lửa nhiệt huyết bên trong đang nhỏ dần đi lúc nào không hay.\n\nĐó chính là trạng thái kiệt sức trong học tập (academic burnout). Đây không phải là một điều gì đó quá xa lạ hay “bất thường”. Trên thực tế, rất nhiều sinh viên đã và đang trải qua cảm giác này ở một thời điểm nào đó trong hành trình học đại học của mình.\n\nThấu hiểu được điều đó, chúng mình muốn tạo ra một không gian an toàn, nơi bạn có thể dừng chân, sạc lại năng lượng và lắng nghe bản thân. “From Burnout to Burn Bright” sẽ đồng hành cùng bạn nhìn lại hành trình của bản thân, gọi tên những cảm xúc nằm sâu bên trong và dần tìm lại sự kết nối với chính mình. Hãy ghi nhớ rằng “Burn Bright” không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.",
    
    // 5 Nhân vật đồng hành (Lusi nhân vật chính, bỏ từ Bé ở các con vật)
    companions: [
      { id: "lusi", name: "Lusi", role: "Nhân vật chính", icon: "🌱", class: "companion-lusi" },
      { id: "fox", name: "Cáo Nhỏ", role: "Sự kiên nhẫn & ấm áp", icon: "🦊", class: "companion-fox" },
      { id: "bunny", name: "Thỏ Trắng", role: "Sự dịu dàng & lắng nghe", icon: "🐰", class: "companion-bunny" },
      { id: "cat", name: "Mèo Con", role: "Sự an yên & thư giãn", icon: "🐱", class: "companion-cat" },
      { id: "bear", name: "Chú Gấu Nâu", role: "Điểm tựa vững vàng", icon: "🐻", class: "companion-bear" }
    ],

    // 4 Nền tảng Lý thuyết Chuẩn hóa cho phần Đăng ký / Giới thiệu
    theoryModels: [
      {
        id: "sbi",
        name: "Thang đo kiệt sức học tập SBI-9",
        author: "School Burnout Inventory (Salmela-Aro et al., 2009)",
        desc: "Đo lường 3 chiều cạnh lâm sàng: kiệt quệ cảm xúc, hoài nghi việc học và suy giảm cảm giác thành tựu.",
        icon: "fa-stethoscope",
        color: "emerald"
      },
      {
        id: "cor",
        name: "Thuyết bảo toàn nguồn lực (COR)",
        author: "Conservation of Resources Theory (Stevan Hobfoll, 1989)",
        desc: "Lý giải kiệt sức xuất hiện khi tài nguyên tâm lý, thời gian và sức khỏe bị tiêu hao mà không được bù đắp.",
        icon: "fa-shield-halved",
        color: "sky"
      },
      {
        id: "coping",
        name: "Thuyết đối phó với căng thẳng",
        author: "Stress Coping Theory (Lazarus & Folkman, 1984)",
        desc: "Cơ chế đánh giá sơ cấp, thứ cấp và tái đánh giá để lựa chọn chiến lược giải quyết vấn đề hoặc cảm xúc.",
        icon: "fa-brain",
        color: "amber"
      },
      {
        id: "self_compassion",
        name: "Mô hình tảng băng & Lòng tự trắc ẩn",
        author: "Iceberg Model & Self-Compassion (Kristin Neff, 2003)",
        desc: "Bóc tách căn nguyên phần chìm và nuôi dưỡng sự tử tế, thấu hiểu với chính mình thay vì tự chỉ trích.",
        icon: "fa-heart",
        color: "rose"
      }
    ],

    // Hồ sơ Tác giả & Chuyên gia tâm lý học
    profiles: {
      expert: {
        role: "Cố vấn chuyên môn dự án",
        title: "Chuyên gia Tâm lý học Giáo dục",
        affiliation: "Cố vấn Sức khỏe Tinh thần Học đường",
        avatar: "assets/chuyen_gia.jpg",
        bio: "Chuyên gia tham vấn tâm lý với chuyên môn sâu về tâm lý học đường, đồng hành thẩm định và cố vấn xây dựng hệ thống thang đo chuẩn hóa SBI-9, cơ chế điều hòa cảm xúc và các bài tập phục hồi năng lượng học tập cho sinh viên."
      },
      authors: {
        role: "Nhóm tác giả cuốn sổ tay",
        title: "Nhóm Sinh viên Nghiên cứu Khoa học",
        affiliation: "Khoa Sư phạm Tiếng Anh & Khoa Ngôn ngữ & Văn hóa Anh — ULIS - VNU",
        avatar: "assets/loi_mo_dau.jpg",
        bio: "Được khởi xướng và phát triển bởi nhóm sinh viên Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội xuất phát từ sự thấu hiểu sâu sắc trước những áp lực thi cử, định hướng và kỳ vọng của sinh viên đại học hiện nay."
      }
    }
  },

  chapters: [
    // =========================================================================
    // CHƯƠNG 1: NHẬN DIỆN
    // =========================================================================
    {
      id: 1,
      slug: "ch1",
      navLabel: "CHƯƠNG 1",
      title: "Chương 1: Nhận diện",
      subtitle: "Lắng nghe & gọi tên trạng thái kiệt sức trong học tập",
      icon: "fa-search",
      badge: "Khởi đầu",
      image: "assets/ch1_cover.jpg",
      color: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
      theory: {
        intro: "Bạn mở laptop ra. Deadline vẫn còn đó, bài vở vẫn đang chờ, nhưng bạn không còn cảm thấy lo lắng hay thúc giục như trước đây. Thay vào đó là một sự trống rỗng đến lạ kỳ...",
        burnoutVsStress: {
          title: "Khi bạn bị Burnout — Đó là trạng thái của sự cạn kiệt",
          quote: "Nếu stress được ví như một chiếc ba lô quá nặng thì burnout giống như đôi vai đã mỏi rã rời đến mức bạn không muốn tiếp tục mang nó.",
          content: "Burnout thường xuất hiện sau chuỗi áp lực kéo dài mà không được giải tỏa và hỗ trợ. Giống như cách bạn đeo chiếc ba lô nặng ấy quá lâu mà không dừng lại để nghỉ ngơi, đến một lúc nào đó, cơ thể và tâm trí của bạn sẽ không còn đủ sức để tiếp tục. Không chỉ mệt mỏi, người bị burnout còn dần trở nên thờ ơ với việc học, né tránh bài vở và cảm thấy bản thân không còn đủ khả năng để hoàn thành những việc trước đây vốn làm được.",
          reference: "Robinson, B. E. (2020). The Surprising Difference Between Stress and Burnout. Psychology Today."
        },
        manifestations: [
          {
            id: "m1",
            title: "1. Kiệt quệ về thể chất & cảm xúc",
            desc: "Cảm giác cạn kiệt năng lượng, uể oải tinh thần kéo dài dù đã dành cả ngày nghỉ ngơi. Cảm giác như pin bên trong đã sập nguồn hoàn toàn.",
            icon: "fa-battery-empty",
            color: "text-rose-500 bg-rose-50 border-rose-200"
          },
          {
            id: "m2",
            title: "2. Hoài nghi & xa cách việc học",
            desc: "Thấy việc học trở nên vô nghĩa, hoài nghi \"Mình học cái này để làm gì?\" và xuất hiện ý nghĩ \"Dù mình có cố gắng thêm, kết quả cũng chẳng đi đến đâu.\"",
            icon: "fa-heart-crack",
            color: "text-amber-500 bg-amber-50 border-amber-200"
          },
          {
            id: "m3",
            title: "3. Giảm sút cảm giác thành tựu",
            desc: "Thường xuyên xao nhãng, mắc lỗi sai và cảm thấy bản thân bất tài, tự ti vào khả năng của chính mình dù trước đây làm rất tốt.",
            icon: "fa-user-slash",
            color: "text-indigo-500 bg-indigo-50 border-indigo-200"
          }
        ]
      },
      quiz: {
        title: "Bảng tự đánh giá Academic Burnout (Thang đo SBI-9)",
        instructions: "Hãy đánh giá mức độ thường xuyên của các biểu hiện dưới đây dựa trên trải nghiệm học tập thực tế của chính bạn:",
        reference: "Theo chuẩn hóa School Burnout Inventory (Salmela-Aro et al., 2009)",
        scale: [
          { val: 1, label: "1 - Chưa bao giờ" },
          { val: 2, label: "2 - Hiếm khi" },
          { val: 3, label: "3 - Thỉnh thoảng" },
          { val: 4, label: "4 - Thường xuyên" },
          { val: 5, label: "5 - Rất thường xuyên / Luôn luôn" }
        ],
        questions: [
          "1. Bạn cảm thấy quá tải, choáng ngợp với khối lượng học tập của mình.",
          "2. Bạn cảm thấy thiếu động lực trong việc học và thường nghĩ đến chuyện từ bỏ.",
          "3. Bạn thường cảm thấy bản thân không đủ năng lực trong học tập.",
          "4. Bạn thường ngủ không ngon vì những vấn đề liên quan đến việc học.",
          "5. Bạn cảm thấy mình đang dần mất hứng thú với việc học.",
          "6. Bạn liên tục tự hỏi liệu việc học của mình có thực sự cần thiết hay không.",
          "7. Bạn thường suy nghĩ quá nhiều về những vấn đề liên quan đến việc học ngay cả trong thời gian rảnh.",
          "8. Trước đây, bạn từng kỳ vọng vào việc học của mình nhiều hơn hiện tại.",
          "9. Áp lực học tập gây ảnh hưởng tiêu cực đến các mối quan hệ thân thiết của bạn với những người xung quanh."
        ],
        resultsInterpretation: [
          {
            min: 1.0,
            max: 2.50,
            level: "1.00 - 2.50: Ổn định & Cân bằng",
            badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
            icon: "fa-shield-heart",
            message: "Bạn vẫn đang ổn. Hãy tiếp tục duy trì nhịp độ này và đừng quên dành thời gian cho những niềm vui nhỏ bé để giữ cho tâm trí luôn cân bằng nhé.",
            advice: "Duy trì thói quen học tập kết hợp nghỉ ngơi điều độ. Bạn có thể tiếp tục sang Chương 2 để hiểu sâu hơn về cơ chế tâm lý phòng chống kiệt sức."
          },
          {
            min: 2.51,
            max: 3.50,
            level: "2.51 - 3.50: Chạm ngưỡng quá tải",
            badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
            icon: "fa-triangle-exclamation",
            message: "Bạn bắt đầu thấy mệt rồi, đúng không? Con số này là một lời nhắc nhở nhẹ nhàng rằng sự quá tải đang dần chạm đến giới hạn. Bạn đang ở ngưỡng mà cơ thể bắt đầu lên tiếng đòi hỏi sự quan tâm, chú ý.",
            advice: "Đừng cố gồng gánh thêm việc mới. Hãy ưu tiên ngủ đủ giấc, phân bổ lại thời gian và áp dụng các kỹ thuật chuyển hóa ở Chương 3."
          },
          {
            min: 3.51,
            max: 5.0,
            level: "3.51 - 5.00: Kiệt sức nghiêm trọng",
            badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
            icon: "fa-fire-extinguisher",
            message: "Bạn có thể đã đi qua một chặng đường rất căng thẳng. Kết quả này không nói rằng bạn kém cỏi hay lười biếng, nó chỉ là một lời xác nhận rằng bạn đã kiên cường trong suốt một thời gian dài, cho đến khi năng lượng bên trong bạn cạn kiệt hoàn toàn.",
            advice: "Hãy cho phép bản thân nghỉ ngơi không tội lỗi. Hãy làm các bài tập trong Thử thách 11 Ngày ở Chương 4 và trò chuyện với bạn bè, người thân hoặc chuyên viên tư vấn tâm lý."
          }
        ]
      }
    },

    // =========================================================================
    // CHƯƠNG 2: GIẢI MÃ
    // =========================================================================
    {
      id: 2,
      slug: "ch2",
      navLabel: "CHƯƠNG 2",
      title: "Chương 2: Giải mã",
      subtitle: "Góc nhìn tâm lý học & Khám phá mô hình tảng băng trôi",
      icon: "fa-puzzle-piece",
      badge: "Đi sâu",
      image: "assets/ch2_cover.jpg",
      icebergImage: "assets/iceberg_model.jpg",
      color: "from-sky-500 to-indigo-600",
      accentColor: "sky",
      theory: {
        intro: "Trước khi đi tìm giải pháp, hãy cùng ngồi xuống và nhìn lại chính mình trong những tháng ngày vừa qua. Hãy để tâm hồn thật thư giãn...",
        memoryExercise: {
          prompt: "Hãy thử nhớ lại một ngày khiến bạn cảm thấy kiệt sức nhất: Bạn đã làm gì trong ngày hôm đó? Điều nào khiến bạn mệt mỏi nhất?",
          placeholder: "Ghi lại những dòng suy nghĩ của bạn về ngày mệt mỏi ấy..."
        },
        scientificSecret: {
          title: "Bật mí: Mô hình tảng băng trôi (The Iceberg Model)",
          content: "Hình ảnh tảng băng không phải chỉ là một hình vẽ đơn thuần mà còn là một công cụ khoa học đã được các nhà tâm lý học sử dụng để lý giải hành vi và cảm xúc của con người. Những gì bạn thấy ở bề mặt (mất ngủ, lướt điện thoại vô thức, cáu gắt) chỉ là phần nổi. Phần chìm bên dưới chứa đựng những niềm tin cốt lõi, nỗi sợ hãi và áp lực vô hình."
        }
      },
      exercise: {
        title: "Công cụ tương tác: Phác họa tảng băng cảm xúc của bạn",
        description: "Hãy điền những sự việc cụ thể, những triệu chứng burnout bạn đang đối mặt vào Phần Nổi, và những nỗi sợ, kỳ vọng ẩn sâu vào Phần Chìm.",
        defaultFloating: [
          "Trì hoãn & Lướt mạng xã hội liên tục",
          "Mất ngủ & Thức dậy uể oải",
          "Dễ cáu gắt với người thân",
          "Choáng ngợp trước deadline"
        ],
        defaultSubmerged: [
          "Nỗi sợ làm bố mẹ và thầy cô thất vọng",
          "Áp lực đồng trang lứa (Peer Pressure)",
          "Chủ nghĩa hoàn hảo: Sợ mắc lỗi sai",
          "Niềm tin sai lầm: Nghỉ ngơi là lười biếng"
        ]
      }
    },

    // =========================================================================
    // CHƯƠNG 3: CHUYỂN HÓA
    // =========================================================================
    {
      id: 3,
      slug: "ch3",
      navLabel: "CHƯƠNG 3",
      title: "Chương 3: Chuyển hóa",
      subtitle: "Phân tích, đánh giá tình huống giả định, xác định “áp lực” và “nguồn lực hỗ trợ” của nhân vật; Giới thiệu lý thuyết: Thuyết Đối phó với căng thẳng ( Stress Coping Theory) của Lazarus và Folkman (1984)",
      icon: "fa-sync-alt",
      badge: "Hành động",
      image: "assets/ch3_cover.jpg",
      lusiImage: "assets/lusi_story.jpg",
      pressureValveImage: "assets/pressure_valve.jpg",
      groundingImage: "assets/grounding_54321.jpg",
      color: "from-amber-500 to-orange-600",
      accentColor: "amber",
      
      theory: {
        lusiStory: {
          title: "Gặp gỡ Lusi — Sinh viên năm thứ 2 khoa Ngôn ngữ và Văn hoá Anh (ULIS - VNU)",
          content: "Lusi là sinh viên năm thứ 2 khoa Ngôn ngữ và Văn hoá Anh của trường Đại học Ngoại ngữ, ĐHQGHN. Vào thời điểm này, khi kỳ thi cuối kỳ đang đến gần, các nhiệm vụ mà bạn ấy cần phải xử lý cũng ngày càng dồn dập hơn. Đầu tiên, Lusi vẫn chưa hoàn thành xong phần việc được phân công trong bài thuyết trình nhóm môn Ngôn ngữ học ứng dụng; một số môn học có deadline gần nhau khiến Lusi gần như không có thời gian để nghỉ ngơi; điểm số của bài kiểm tra giữa kỳ vừa qua không được như mong đợi, buộc Lusi phải nỗ lực nhiều hơn nữa để giữ được học bổng kỳ này. Công việc, áp lực chồng chất khiến Lusi dần rơi vào trạng thái kiệt sức và mất đi động lực học tập. Quá tải, Lusi trở nên xao nhãng trong việc học và liên tục lướt mạng xã hội như một cách để né tránh cảm giác này..."
        },
        cognitiveAppraisal: {
          title: "Thuyết đối phó với căng thẳng (Stress Coping Theory) của Lazarus và Folkman (1984)",
          step1: "Đánh giá sơ cấp (Primary appraisal): Tự hỏi 'Việc này có thật sự đáng lo không? Đây có phải là một mối đe dọa không?'",
          step2: "Đánh giá thứ cấp (Secondary appraisal): Tự hỏi 'Mình có đủ nguồn lực để xử lý chuyện này không?' (thời gian, kiến thức, kỹ năng, bạn bè, thầy cô).",
          problemVsEmotion: "Chiến lược đối phó: Nếu kiểm soát được -> Giải quyết trực tiếp vấn đề (Problem-focused coping). Nếu chưa thay đổi được ngay -> Chăm sóc và ổn định cảm xúc trước (Emotion-focused coping).",
          reappraisal: "Tái đánh giá (Reappraisal): Nhìn lại hiệu quả để điều chỉnh chiến lược phù hợp hơn cho tương lai."
        }
      },

      // Bài tập 1: Chiếc ba lô của Lusi
      lusiBackpackExercise: {
        title: "Chiếc ba lô của Lusi: Phân loại áp lực & Khám phá nguồn lực",
        subtitle: "Bên ngoài chiếc ba lô — tôi đang có gì trong tay?",
        instruction: "Bên cạnh áp lực trong chiếc ba lô nặng nề, Lusi vẫn luôn có những nguồn lực hỗ trợ xung quanh. Hãy cùng mở từng ngăn cặp, quan sát các phụ kiện gắn ngoài để khám phá những điểm tựa bạn đang có trong tay nhé!",
        backpackImage: "assets/lusi_backpack_base.png",
        accessories: [
          { id: "umbrella", icon: "🌂", img: "assets/acc_umbrella.png", name: "Chiếc ô", slotLabel: "Ngăn trên (Trái)", meaning: "Những người có thể lắng nghe và hỗ trợ Lusi khi gặp khó khăn (bạn bè, thầy cô, gia đình)" },
          { id: "bottle", icon: "💧", img: "assets/acc_bottle.png", name: "Bình nước", slotLabel: "Ngăn trên (Phải)", meaning: "Điều giúp Lusi duy trì năng lượng và tiếp tục bước đi (nghỉ ngơi, ăn uống, thể thao)" },
          { id: "keychain", icon: "🔑", img: "assets/acc_keychain.png", name: "Móc khóa ngôi sao", slotLabel: "Dây đeo (Trái)", meaning: "Kỹ năng, kinh nghiệm và điểm mạnh Lusi có thể vận dụng" },
          { id: "map", icon: "🗺️", img: "assets/acc_map.png", name: "Bản đồ", slotLabel: "Ngăn bên (Phải)", meaning: "Điều giúp Lusi định hướng con đường phù hợp với bản thân" },
          { id: "clock", icon: "⏰", img: "assets/acc_clock.png", name: "Đồng hồ / La bàn", slotLabel: "Nắp ngăn trước", meaning: "Điều giúp Lusi lấy lại cảm giác cân bằng và quản lý thời gian trong học tập" }
        ],
        classificationItems: [
          { id: "i1", text: "Sự kiên trì & Đam mê học hỏi", defaultCategory: "keep" },
          { id: "i2", text: "Bạn bè đáng tin cậy sẵn sàng lắng nghe", defaultCategory: "keep" },
          { id: "i3", text: "Kế hoạch phân bổ deadline hợp lý", defaultCategory: "arrange" },
          { id: "i4", text: "Thời gian ngủ & Nghỉ ngơi điều độ", defaultCategory: "arrange" },
          { id: "i5", text: "Chủ nghĩa hoàn hảo: Ám ảnh sợ sai", defaultCategory: "throw" },
          { id: "i6", text: "Thói quen trì hoãn & Lướt mạng vô thức", defaultCategory: "throw" },
          { id: "i7", text: "Tự dằn vặt và trách móc bản thân", defaultCategory: "throw" },
          { id: "i8", text: "Áp lực so sánh điểm số với bạn bè", defaultCategory: "throw" }
        ]
      },

      // Bài tập 2: Chiếc Van Xả Áp Lực
      pressureValveTool: {
        title: "Chiếc van xả áp lực: Lắng nghe chiếc bình cảm xúc bên trong",
        subtitle: "Đo lường mực nước chiếc bình, mở van xả an toàn và đưa cơ thể trở về hiện tại",
        steps: [
          {
            step: 1,
            title: "Bước 1: Kiểm tra “mực nước” cảm xúc",
            desc: "Hãy tưởng tượng bên trong bạn đang có một chiếc bình. Hiện tại, chiếc bình của bạn đang đầy đến mức nào?",
            levels: [
              { percent: 90, range: "81–100%", label: "Mình gần như không còn năng lượng (Cạn pin)", color: "#ef4444" },
              { percent: 70, range: "61–80%", label: "Mình cảm thấy quá tải", color: "#f97316" },
              { percent: 50, range: "41–60%", label: "Mình đang chịu khá nhiều áp lực", color: "#eab308" },
              { percent: 30, range: "21–40%", label: "Mình bắt đầu thấy mệt", color: "#06b6d4" },
              { percent: 15, range: "0–20%", label: "Mình khá ổn", color: "#10b981" }
            ]
          },
          {
            step: 2,
            title: "Bước 2: Mở van cảm xúc",
            desc: "Khi chiếc bình đã đầy, đôi khi điều mình cần trước tiên không phải là giải quyết mọi thứ, mà là cho cảm xúc một chỗ để đi ra an toàn:",
            methods: [
              { id: "write", name: "Viết", icon: "fa-pen-fancy", desc: "Viết tất cả những gì đang có trong đầu mà không cần chỉnh sửa." },
              { id: "draw", name: "Vẽ", icon: "fa-palette", desc: "Không cần vẽ đẹp. Dùng màu sắc, đường nét tự do để biểu đạt cảm xúc." },
              { id: "talk", name: "Nói ra", icon: "fa-comments", desc: "Nói với người bạn tin cậy: 'Hôm nay mình chỉ muốn cậu nghe mình một chút'." },
              { id: "move", name: "Vận động", icon: "fa-person-walking", desc: "Đi bộ, giãn cơ, hít thở nhẹ trong vài phút." }
            ]
          },
          {
            step: 3,
            title: "Bước 3: Đưa cơ thể trở về hiện tại (Kỹ thuật Nối Đất 5-4-3-2-1)",
            desc: "Sau khi đã xả bớt cảm xúc, hãy dành 1 phút để trở lại với cơ thể qua 5 giác quan:",
            items: [
              { num: 5, sense: "5 điều bạn có thể nhìn thấy xung quanh", placeholder: "Ví dụ: ánh nắng, chậu cây, trang vở, cây bút, cửa sổ..." },
              { num: 4, sense: "4 điều bạn có thể chạm vào", placeholder: "Ví dụ: bàn phím, vạt áo cotton, mặt bàn gỗ, cốc nước..." },
              { num: 3, sense: "3 âm thanh bạn có thể nghe thấy", placeholder: "Ví dụ: tiếng gió qua khe cửa, tiếng thở đều, tiếng xe ngoài xa..." },
              { num: 2, sense: "2 mùi hương bạn có thể nhận ra", placeholder: "Ví dụ: mùi cà phê, hương mưa, mùi giấy mới..." },
              { num: 1, sense: "1 điều bạn cảm thấy biết ơn hoặc dễ chịu ngay lúc này", placeholder: "Ví dụ: mình vẫn đang ở đây, một hơi thở trọn vẹn..." }
            ]
          },
          {
            step: 4,
            title: "Bước 4: Kiểm tra lại chiếc bình",
            subtitle: "Bây giờ, hãy quay lại hình ảnh chiếc bình.",
            desc: "Sau khi đã xả bớt cảm xúc và thực hành bài tập nối đất, hãy quan sát chiếc bình của bạn. Mực nước của bạn còn bao nhiêu?",
            image: "assets/jar_step4.png",
            fullIllustration: "assets/valve_step4_full.png",
            feelingsList: [
              { id: "calm", label: "Bình tĩnh hơn", icon: "🕊️" },
              { id: "relieved", label: "Nhẹ nhõm hơn", icon: "🍃" },
              { id: "sad_better", label: "Vẫn buồn nhưng dễ chịu hơn", icon: "⛅" },
              { id: "anxious_breathe", label: "Vẫn lo lắng nhưng có thể thở dễ hơn", icon: "🫁" },
              { id: "not_much", label: "Chưa thay đổi nhiều", icon: "⏳" }
            ],
            feelings: [
              "Bình tĩnh hơn",
              "Nhẹ nhõm hơn",
              "Vẫn buồn nhưng dễ chịu hơn",
              "Vẫn lo lắng nhưng có thể thở dễ hơn",
              "Chưa thay đổi nhiều"
            ]
          }
        ]
      },

      // Bài tập 3: Trạm Dừng Cảm Xúc
      emotionStopExercise: {
        title: "Trạm Dừng Cảm Xúc (Emotion Stop)",
        subtitle: "Dừng lại một nhịp để nhìn rõ hơn những điều khiến bạn áp lực, gọi tên và giải mã thử thách",
        guidingQuestions: [
          { num: 1, text: "Gọi tên cảm xúc của bạn: có thể là mệt mỏi / bất lực / vô hồn / hoang mang..." },
          { num: 2, text: "Bạn nghĩ cảm xúc này bắt nguồn từ đâu? Quá nhiều deadline hay áp lực từ bản thân?" },
          { num: 3, text: "Sự việc này đối với bạn, nó là gì? Là một thử thách, sự mất mát hay một mối đe dọa đến tinh thần?" },
          { num: 4, text: "Việc này ảnh hưởng gì đến bạn? Sức khỏe, sự uy tín hay thời gian của bạn?" },
          { num: 5, text: "Bạn đã có những nguồn lực nào để giải quyết vấn đề này? Sự kiên trì, người bạn tin cậy, sự lạc quan..." },
          { num: 6, text: "Bắt tay giải quyết: Chia nhỏ mục tiêu, chọn việc ưu tiên cần làm ngay, tâm sự với người thân..." },
          { num: 7, text: "Sau khi dành thời gian thực hiện những hành động trên, bạn cảm thấy như thế nào?" },
          { num: 8, text: "Viết đôi lời động viên, vỗ về bản thân mình trong tương lai bằng những lời dịu dàng nhất." }
        ]
      }
    },

    // =========================================================================
    // CHƯƠNG 4: TÁI TẠO
    // =========================================================================
    {
      id: 4,
      slug: "ch4",
      navLabel: "CHƯƠNG 4",
      title: "Chương 4: Tái tạo",
      subtitle: "Challenge 11 ngày - Tìm lại nhịp thở của chính bạn… Tự trắc ẩn (Self-compassion), Bản đồ năng lượng 24h & Thư gửi tương lai",
      icon: "fa-seedling",
      badge: "Phục hồi",
      image: "assets/ch4_cover.jpg",
      challengeImage: "assets/challenge_11days.jpg",
      futureLetterTemplateImage: "assets/future_letter_template.jpg",
      color: "from-pink-500 to-rose-600",
      accentColor: "pink",
      theory: {
        intro: "Sau khi đã hiểu hơn về những áp lực mình đang mang và những nguồn lực mình có, giờ là lúc bạn dành cho bản thân một khoảng nghỉ để tái tạo năng lượng và tìm lại nhịp sống của chính mình. Bạn không cần phải thay đổi tất cả ngay lập tức. Hãy bắt đầu từ một điều nhỏ hôm nay, và để 11 ngày tới trở thành khoảng thời gian bạn học cách chăm sóc chính mình.",
        challenge11DaysIntro: {
          title: "Challenge 11 ngày — Tìm lại nhịp thở của chính bạn",
          content: "Theo nhà tâm lý học Kristin Neff, chiếc phao cứu sinh khi kiệt sức là “self-compassion” (lòng tự trắc ẩn) - khả năng đối xử với chính mình bằng sự thấu hiểu và tử tế khi gặp khó khăn, thay vì liên tục chỉ trích bản thân. Lòng tự trắc ẩn gồm: Tử tế với chính mình (self-kindness), Kết nối nhân loại (common humanity) và Chánh niệm (mindfulness)."
        }
      },
      stages11Days: [
        {
          stage: 1,
          name: "Nghỉ ngơi và phục hồi cảm xúc",
          desc: "Điều duy nhất bạn cần làm là lắng nghe chính mình nhiều hơn, lắng nghe những nhu cầu, cảm xúc và chăm sóc cơ thể, tâm hồn.",
          days: [
            {
              day: 1,
              title: "Ngày 1: Tạm dừng để nghỉ ngơi — Giấc ngủ, một khoảng nghỉ bạn không nên đánh đổi",
              desc: "Nhiệm vụ đầu tiên: Tự thưởng cho bản thân một giấc ngủ thật ngon tối nay. Cất điện thoại trước 23:00.",
              factBox: "Trong giấc ngủ sâu, hệ thống Glymphatic sẽ hoạt động mạnh mẽ để dọn dẹp các chất thải tích tụ trong não bộ. Ở độ tuổi sinh viên, cơ thể cần ít nhất 7 giờ ngủ để duy trì khả năng tập trung và điều hòa cảm xúc.",
              questions: [
                { id: "q1", label: "Hôm nay tôi đã đi ngủ vào lúc:", placeholder: "Ví dụ: 22:45" },
                { id: "q2", label: "Tôi cảm thấy ... khi thức dậy vào sáng hôm sau:", placeholder: "Ví dụ: tỉnh táo, nhẹ nhõm hơn, bớt căng thẳng..." }
              ]
            },
            {
              day: 2,
              title: "Ngày 2: Nuôi dưỡng từ bên trong",
              desc: "Hãy tự thưởng cho mình một bữa ăn thật ngon miệng và đầy đủ dưỡng chất. Tự tay nấu một món ăn ấm cúng hoặc thưởng thức trọn vẹn bữa ăn mà không xem màn hình.",
              factBox: "Dinh dưỡng lành mạnh giúp cung cấp tiền chất cho các chất dẫn truyền thần kinh như Serotonin và Dopamine, giúp tâm trạng ổn định hơn.",
              questions: [
                { id: "q1", label: "Hôm nay tôi đã ăn món:", placeholder: "Ví dụ: cơm canh thanh đạm, salad tươi, súp ấm..." },
                { id: "q2", label: "Tôi cảm thấy:", placeholder: "Ví dụ: ấm bụng, trân trọng cơ thể mình hơn..." }
              ]
            }
          ]
        },
        {
          stage: 2,
          name: "Trở về với hiện tại",
          desc: "Khám phá khả năng neo đậu tâm trí vào khoảnh khắc hiện tại, giải phóng khỏi những lo âu về tương lai.",
          days: [
            {
              day: 3,
              title: "Ngày 3: Từng bước chậm lại (Mindful Walking — Đi bộ chánh niệm)",
              desc: "Dành 10-15 phút đi bộ chậm rãi. 5 bước: 1) Chọn lối đi yên tĩnh 10-15m; 2) Đứng yên hít thở sâu 3 nhịp; 3) Bước chậm cảm nhận nhấc - bước - đặt bàn chân; 4) Đưa sự chú ý về hiện tại; 5) Kết thúc chậm rãi.",
              factBox: "Tập trung vào cảm giác của lòng bàn chân tiếp xúc với mặt đất giúp ngắt mạch phản ứng lo âu tự động của hạch hạnh nhân (Amygdala).",
              questions: [
                { id: "q1", label: "Hôm nay tôi đã đi bộ ở:", placeholder: "Ví dụ: sân trường ULIS, công viên Cầu Giấy, hành lang..." },
                { id: "q2", label: "Trong thời gian (phút):", placeholder: "Ví dụ: 15 phút" },
                { id: "q3", label: "Tôi cảm thấy:", placeholder: "Ví dụ: tâm trí thông thoáng, bước chân nhẹ nhàng hơn..." }
              ]
            },
            {
              day: 4,
              title: "Ngày 4: Những người thân yêu",
              desc: "Nhấc máy gọi một cuộc điện thoại ngắn hoặc nhắn một tin nhắn yêu thương cho người bạn tin tưởng nhất. Cho phép mình được lắng nghe và chia sẻ.",
              factBox: "Hormone Oxytocin (hormone gắn kết) được kích hoạt qua những tương tác ấm áp, làm giảm Cortisol gây stress trong cơ thể.",
              questions: [
                { id: "q1", label: "Hôm nay tôi đã liên lạc / gặp gỡ:", placeholder: "Ví dụ: mẹ, bạn thân cùng phòng, thầy cô cố vấn..." },
                { id: "q2", label: "Sau cuộc trò chuyện đó, tôi đang cảm thấy:", placeholder: "Ví dụ: được yêu thương, nhận ra mình không hề đơn độc..." }
              ]
            },
            {
              day: 5,
              title: "Ngày 5: Biết ơn và trân trọng hiện tại",
              desc: "Cầm bút viết ra 3 điều bạn cảm thấy biết ơn nhất ngay lúc này. Có thể là điều rất nhỏ: một ly nước ấm, cơn gió mát, hay biết ơn chính mình vì đã kiên trì.",
              factBox: "Lòng biết ơn kích hoạt vùng não thưởng (Ventral Striatum), giúp dịch chuyển tiêu điểm từ thiếu hụt sang đủ đầy.",
              questions: [
                { id: "q1", label: "Điều 1 khiến tôi biết ơn:", placeholder: "Ví dụ: cơn gió mát lành chiều nay..." },
                { id: "q2", label: "Điều 2 khiến tôi biết ơn:", placeholder: "Ví dụ: ly cà phê ấm buổi sáng..." },
                { id: "q3", label: "Điều 3 khiến tôi biết ơn:", placeholder: "Ví dụ: mình đã không bỏ cuộc và kiên cường đến hôm nay..." }
              ]
            }
          ]
        },
        {
          stage: 3,
          name: "Hãy tin vào chính bạn",
          desc: "Nhìn lại chính mình một cách dịu dàng hơn — nhận ra những giá trị tốt đẹp vốn luôn hiện hữu bên trong bạn.",
          days: [
            {
              day: 6,
              title: "Ngày 6: Bông hoa giá trị & Điểm tựa động lực",
              desc: "Khắc phục 'Thiên kiến tiêu cực' (Negativity bias) qua Thuyết Tự Hiệu Quả (Self-efficacy Theory của Albert Bandura). Điền 5 điều bạn tin tưởng ở chính mình vào các cánh hoa. Đồng thời tự hỏi: 'Bạn đang học vì điều gì?' theo Thuyết Tự Quyết (Self-Determination Theory của Deci & Ryan).",
              factBox: "Khi chuyển từ trạng thái bị ép buộc ('Tôi phải...') sang quyền tự chủ ('Tôi chọn...'), động lực nội tại sẽ tự nhiên hồi sinh bền bỉ.",
              flowerPetals: [
                "1. Điểm mạnh / Kỹ năng tôi tự hào:",
                "2. Một lần tôi đã vượt qua khó khăn:",
                "3. Lời khen chân thành tôi từng nhận được:",
                "4. Giá trị tốt đẹp tôi mang đến cho người khác:",
                "5. Lời hứa tin tưởng tôi dành cho chính mình:"
              ],
              questions: [
                { id: "q1", label: "Bạn đang học vì điều gì? (Lý do thật lòng nhất của bạn):", placeholder: "Ví dụ: Mình chọn học để mở rộng thế giới quan và tự lập trong tương lai..." }
              ]
            }
          ]
        },
        {
          stage: 4,
          name: "Đồng điệu với chính mình",
          desc: "Hiểu được nhịp năng lượng của bản thân để điều chỉnh việc học, nghỉ ngơi và tập trung sâu.",
          days: [
            {
              day: 7,
              title: "Ngày 7–10: Bản đồ năng lượng 24h & Kỹ thuật Quả Cà Chua (Pomodoro)",
              desc: "Trong 4 ngày, trang trí bản đồ năng lượng 24h theo 3 mức màu: Xanh (Ổn định, dễ chịu), Vàng (Mệt mỏi, chùng xuống), Đỏ (Quá tải, kiệt sức). Kết hợp ứng dụng Kỹ thuật Pomodoro 25/5 của Francesco Cirillo.",
              factBox: "Nghiên cứu của TS. Ross W. May (2015) chỉ ra khả năng tập trung suy giảm rõ rệt khi bị burnout. Pomodoro 25 phút giúp não bộ duy trì sự chú ý cao độ mà không bị kiệt quệ.",
              hasEnergyMap: true,
              hasPomodoro: true
            },
            {
              day: 11,
              title: "Ngày 11: Du hành thời gian — Bức thư gửi tôi của tương lai (TO ME IN THE FUTURE)",
              desc: "Viết bức thư gửi chính mình ở tương lai: Lúc bạn mệt mỏi hay mất niềm tin, mở ra để cảm nhận bản thân đã từng kiên cường nhường nào. Đặt lịch niêm phong và gửi về email.",
              hasFutureLetter: true
            }
          ]
        }
      ],
      closingNote: {
        title: "Lời nhắn gửi cuối sổ",
        content: "Áp lực có thể không biến mất hoàn toàn, nhưng cách chúng ta mang nó theo có thể thay đổi. Đôi khi, điều mình cần không phải là cố gắng thêm một chút, mà là dừng lại để lắng nghe bản thân và nhìn lại những gì mình đang có. Hãy nhớ rằng 'Burn Bright' không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn."
      }
    }
  ],

  // Search Index
  searchIndex: [
    { title: "Bài test đánh giá Academic Burnout (SBI-9)", chapterId: "ch1", chapterTitle: "Chương 1: Nhận diện", snippet: "9 câu hỏi chuẩn hóa thang đo SBI giúp nhận diện mức độ kiệt sức trong học tập.", keywords: ["test", "burnout", "đánh giá", "kiệt sức", "sbi"] },
    { title: "Khi bạn bị Burnout — Trạng thái cạn kiệt", chapterId: "ch1", chapterTitle: "Chương 1: Nhận diện", snippet: "Nếu stress là chiếc ba lô quá nặng thì burnout là đôi vai đã mỏi rã rời.", keywords: ["stress", "balo", "cạn kiệt"] },
    { title: "Mô hình tảng băng trôi (The Iceberg Model)", chapterId: "ch2", chapterTitle: "Chương 2: Giải mã", snippet: "Bóc tách phần nổi (triệu chứng bề mặt) và phần chìm (áp lực vô hình, nỗi sợ thất bại).", keywords: ["tảng băng", "iceberg", "phần nổi", "phần chìm"] },
    { title: "Chiếc ba lô của Lusi & Thuyết Lazarus (1984)", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Phân loại áp lực trong cặp và khám phá 5 nguồn lực hỗ trợ bên ngoài.", keywords: ["lusi", "balo", "chiếc cặp", "lazarus", "folkman"] },
    { title: "Chiếc van xả áp lực & Chiếc bình cảm xúc", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Kiểm tra mực nước chiếc bình và kỹ thuật nối đất 5-4-3-2-1 trở về hiện tại.", keywords: ["van xả", "chiếc bình", "mực nước", "5-4-3-2-1", "grounding"] },
    { title: "Trạm dừng cảm xúc (Emotion Stop)", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "8 bước gọi tên cảm xúc và giải mã áp lực thực tế từ sổ tay.", keywords: ["trạm dừng", "emotion stop", "cảm xúc", "nhật ký"] },
    { title: "Thử thách 11 ngày phục hồi nhịp thở", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Hành trình 4 chặng nuôi dưỡng lòng tự trắc ẩn (self-compassion) và tự chăm sóc dịu dàng.", keywords: ["thử thách", "11 ngày", "challenge", "nhịp thở"] },
    { title: "Bản đồ năng lượng 24h", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Khám phá nhịp sinh học năng lượng 24h trong ngày theo 3 sắc màu xanh, vàng, đỏ.", keywords: ["bản đồ", "năng lượng", "24h"] },
    { title: "Đồng hồ Pomodoro Quả Cà Chua", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Phương pháp 25 phút tập trung của Francesco Cirillo giúp não bộ không rơi vào kiệt sức.", keywords: ["pomodoro", "cà chua", "25 phút"] },
    { title: "Thư gửi tôi của tương lai (TO ME IN THE FUTURE)", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Du hành thời gian gửi chính mình vào một mốc ngày tương lai kèm gửi email.", keywords: ["thư tương lai", "future letter", "to me", "niêm phong"] }
  ]
};
