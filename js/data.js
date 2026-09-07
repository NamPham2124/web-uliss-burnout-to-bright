/**
 * Data store for From Burnout to Burn Bright - ULIS VNU
 * Soạn thảo chuẩn xác theo cuốn Sổ tay Canva 78 Trang của Nhóm Tác Giả Trường ĐH Ngoại ngữ, ĐHQGHN
 */
window.APP_DATA = {
  projectInfo: {
    title: "From Burnout to Burn Bright",
    subtitle: "Cuốn Sổ Tay Đồng Hành Cùng Sinh Viên Chữa Lành & Tái Tạo Năng Lượng",
    author: "Nhóm Tác giả - Trường Đại học Ngoại ngữ, ĐHQGHN (ULIS - VNU)",
    coverImage: "assets/handbook_cover.jpg",
    chuyenGiaImage: "assets/chuyen_gia.jpg",
    loiMoDauImage: "assets/loi_mo_dau.jpg",
    description: "Một không gian an toàn giúp sinh viên nhận diện cảm xúc, giải mã áp lực, chuyển hóa tư duy và tái tạo năng lượng. Giữ cho ngọn lửa nhiệt huyết luôn đủ ấm, đủ bền và là của riêng bạn.",
    quote: "Burn Bright không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.",
    chuyenGiaText: "Đây là một sản phẩm được đầu tư tâm huyết, nghiên cứu và xây dựng kỹ lưỡng dựa trên nền tảng kiến thức khoa học về Tâm lý học. Nội dung cuốn sổ được trình bày gần gũi, dễ tiếp cận và có tính ứng dụng cao, giúp người dùng có thể từng bước nhận diện, thấu hiểu và chủ động xây dựng chiến lược ứng phó với tình trạng kiệt sức trong học tập.\n\nĐây không chỉ là một cuốn sổ cung cấp kiến thức, mà còn là một công cụ đồng hành, khuyến khích mỗi người dành thời gian lắng lại, kết nối với bản thân và từng bước tìm lại nguồn năng lượng của chính mình.",
    loiMoDauText: "Nếu bạn đang cầm trên tay cuốn sổ này, có lẽ bạn đã từng, hoặc đang trải qua một giai đoạn áp lực nặng nề trong chính việc học của bản thân. Những bài tập dồn dập, các kỳ thi nối tiếp nhau, hoạt động ngoại khóa, nghiên cứu khoa học hay những băn khoăn về định hướng nghề nghiệp khiến bạn cảm thấy mệt mỏi và dần mất đi động lực. Bạn đã từng thật sự nỗ lực rất nhiều, nhưng dần dần bạn cảm thấy mình mệt và trống rỗng - như thể ngọn lửa nhiệt huyết bên trong đang nhỏ dần đi lúc nào không hay.\n\nĐó chính là trạng thái kiệt sức trong học tập (academic burnout). Đây không phải là một điều gì đó quá xa lạ hay “bất thường”. Trên thực tế, rất nhiều sinh viên đã và đang trải qua cảm giác này ở một thời điểm nào đó trong hành trình học đại học của mình.\n\nThấu hiểu được điều đó, chúng mình muốn tạo ra một không gian an toàn, nơi bạn có thể dừng chân, sạc lại năng lượng và lắng nghe bản thân. “From Burnout to Burn Bright” sẽ đồng hành cùng bạn nhìn lại hành trình của bản thân, gọi tên những cảm xúc nằm sâu bên trong và dần tìm lại sự kết nối với chính mình. Hãy ghi nhớ rằng “Burn Bright” không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.",
    companions: [
      { id: "fox", name: "Bé Cáo Nhỏ", role: "Sự kiên nhẫn & ấm áp", icon: "🦊", class: "companion-fox" },
      { id: "bunny", name: "Bé Thỏ Trắng", role: "Sự dịu dàng & lắng nghe", icon: "🐰", class: "companion-bunny" },
      { id: "cat", name: "Bé Mèo Con", role: "Sự an yên & thư giãn", icon: "🐱", class: "companion-cat" },
      { id: "bear", name: "Chú Gấu Nâu", role: "Điểm tựa vững vàng", icon: "🐻", class: "companion-bear" }
    ],
    stats: [
      { label: "Chương học chuyên sâu", value: "4 Chương" },
      { label: "Thử thách phục hồi", value: "11 Ngày" },
      { label: "Thang đo chuẩn hóa", value: "SBI 9 Câu" },
      { label: "Công cụ đồng hành", value: "Chiếc Van Xả" }
    ]
  },

  chapters: [
    // =========================================================================
    // CHƯƠNG 1: NHẬN DIỆN
    // =========================================================================
    {
      id: 1,
      slug: "ch1",
      navLabel: "C1: Nhận diện",
      title: "Chương 1: Nhận diện",
      subtitle: "Lắng nghe & Gọi tên trạng thái Kiệt sức trong Học tập",
      icon: "fa-search",
      badge: "Khởi đầu",
      image: "assets/ch1_cover.jpg",
      color: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
      theory: {
        intro: "Bạn mở laptop ra. Deadline vẫn còn đó, bài vở vẫn đang chờ, nhưng bạn không còn cảm thấy lo lắng hay thúc giục như trước đây. Thay vào đó là một sự trống rỗng đến lạ kỳ...",
        burnoutVsStress: {
          title: "Khi bạn bị Burnout — Đó là trạng thái của sự \"Cạn Kiệt\"",
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
        title: "BẢNG TỰ ĐÁNH GIÁ ACADEMIC BURNOUT (THANG ĐO SBI)",
        instructions: "Hãy đánh giá mức độ thường xuyên của các biểu hiện dưới đây dựa trên trải nghiệm học tập thực tế của chính bạn:",
        reference: "Theo thang đo School Burnout Inventory (SBI)",
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
      navLabel: "C2: Giải mã",
      title: "Chương 2: Giải mã",
      subtitle: "Góc nhìn Tâm lý học & Khám phá Mô hình Tảng băng trôi",
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
          title: "Bật mí: Mô hình Tảng Băng Trôi (The Iceberg Model)",
          content: "Hình ảnh tảng băng không phải chỉ là một hình vẽ đơn thuần mà còn là một công cụ khoa học đã được các nhà tâm lý học sử dụng để lý giải hành vi và cảm xúc của con người. Những gì bạn thấy ở bề mặt (mất ngủ, lướt điện thoại vô thức, cáu gắt) chỉ là phần nổi. Phần chìm bên dưới chứa đựng những niềm tin cốt lõi, nỗi sợ hãi và áp lực vô hình."
        }
      },
      exercise: {
        title: "Công cụ Tương tác: Phác họa Tảng Băng Cảm Xúc của bạn",
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
      navLabel: "C3: Chuyển hóa",
      title: "Chương 3: Chuyển hóa",
      subtitle: "Chiếc Ba Lô Lusi, Chiếc Van Xả Áp Lực & Kỹ Thuật Nối Đất 5-4-3-2-1",
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
          title: "Gặp gỡ Lusi — Sinh viên năm 2 Khoa Ngôn ngữ & Văn hóa Anh (ULIS - VNU)",
          content: "Lusi là sinh viên năm thứ 2 của trường Đại học Ngoại ngữ, ĐHQGHN. Vào thời điểm kỳ thi cuối kỳ đang đến gần, các đầu việc dồn dập: bài thuyết trình nhóm, tiểu luận chưa xong, điểm kiểm tra giữa kỳ chưa như kỳ vọng. Công việc và áp lực chồng chất khiến Lusi rơi vào trạng thái kiệt sức và mất đi động lực. Quá tải, Lusi trở nên xao nhãng và lướt mạng xã hội liên tục để trốn tránh cảm giác này..."
        },
        cognitiveAppraisal: {
          title: "Thuyết Đánh Giá Nhận Thức (Lazarus & Folkman)",
          step1: "Đánh giá ban đầu: \"Chuyện này có phải là mối đe dọa với mình không?\"",
          step2: "Đánh giá thứ cấp: \"Mình có đủ nguồn lực để xử lý chuyện này không?\"",
          conclusion: "Nếu coi là 'thử thách' và nhận ra các nguồn lực xung quanh (bạn bè, thầy cô, kỹ năng), não bộ sẽ chuyển từ hoảng loạn sang chủ động giải quyết."
        }
      },
      // Công cụ đặc sắc: Chiếc Van Xả Áp Lực (Page 38-41)
      pressureValveTool: {
        title: "CÔNG CỤ ĐẶC BIỆT: CHIẾC VAN XẢ ÁP LỰC",
        subtitle: "Lắng nghe chiếc bình cảm xúc bên trong & Đưa cơ thể trở về hiện tại",
        steps: [
          {
            step: 1,
            title: "Bước 1: Kiểm tra mực nước cảm xúc",
            desc: "Hãy tưởng tượng bên trong bạn đang có một chiếc bình. Hiện tại, chiếc bình của bạn đang đầy đến mức nào?",
            levels: [
              { range: "81–100%", label: "Mình gần như không còn năng lượng" },
              { range: "61–80%", label: "Mình cảm thấy quá tải" },
              { range: "41–60%", label: "Mình đang chịu khá nhiều áp lực" },
              { range: "21–40%", label: "Mình bắt đầu thấy mệt" },
              { range: "0–20%", label: "Mình khá ổn" }
            ]
          },
          {
            step: 2,
            title: "Bước 2: Mở van cảm xúc",
            desc: "Khi chiếc bình đã đầy, trước tiên hãy cho cảm xúc một lối thoát an toàn:",
            methods: [
              { name: "Viết", desc: "Viết tất cả những gì đang có trong đầu ra giấy/màn hình mà không cần chỉnh sửa." },
              { name: "Vẽ", desc: "Dùng hình ảnh, đường nét, màu sắc tự do để biểu đạt cảm xúc." },
              { name: "Nói ra", desc: "Chia sẻ với người bạn tin cậy: 'Hôm nay mình không cần cậu giải quyết, chỉ cần nghe mình một chút'." },
              { name: "Vận động", desc: "Đi bộ nhẹ nhàng, vươn vai, hít thở sâu trong vài phút." }
            ]
          },
          {
            step: 3,
            title: "Bước 3: Đưa cơ thể trở về hiện tại (Kỹ thuật Nối Đất 5-4-3-2-1)",
            desc: "Sau khi xả bớt cảm xúc, dành 1 phút để trở lại với cơ thể qua 5 giác quan:",
            items: [
              { num: 5, sense: "5 điều bạn có thể NHÌN THẤY xung quanh" },
              { num: 4, sense: "4 điều bạn có thể CHẠM VÀO (bàn phím, áo, mặt bàn...)" },
              { num: 3, sense: "3 âm thanh bạn có thể NGHE THẤY (tiếng gió, tiếng thở, tiếng xe...)" },
              { num: 2, sense: "2 mùi hương bạn có thể NHẬN RA" },
              { num: 1, sense: "1 điều bạn cảm thấy BIẾT ƠN hoặc DỄ CHỊU ngay lúc này" }
            ]
          },
          {
            step: 4,
            title: "Bước 4: Kiểm tra lại chiếc bình",
            desc: "Sau bài tập, quan sát lại mực nước chiếc bình của bạn đã giảm đi bao nhiêu phần trăm và ghi lại sự chuyển biến tích cực trong cơ thể."
          }
        ]
      },
      dndExercise: {
        title: "Bài Tập Kéo Thả: Ghép Cặp Chuyển Hóa Cảm Xúc & Giải Pháp",
        instruction: "Hãy kéo thả các Sticker Vấn đề bên trái vào đúng Giải pháp chuyển hóa tương ứng bên phải!",
        pairs: [
          {
            id: "p1",
            problem: "Quá tải deadline dồn dập",
            solution: "Chia nhỏ nhiệm vụ & Áp dụng Pomodoro 25p",
            explanation: "Chia nhỏ đầu việc giúp não bộ không bị áp đảo bởi khối lượng lớn."
          },
          {
            id: "p2",
            problem: "Áp lực so sánh với bạn bè đồng trang lứa",
            solution: "Tập trung vào thang đo tiến bộ của chính mình",
            explanation: "Mỗi người có một đường đua riêng, so sánh chỉ làm hao mòn năng lượng nội tại."
          },
          {
            id: "p3",
            problem: "Cảm giác cạn kiệt, kiệt sức cảm xúc",
            solution: "Tạm dừng, cho phép bản thân nghỉ ngơi không tội lỗi",
            explanation: "Nghỉ ngơi là một phần bắt buộc của năng suất bền vững."
          },
          {
            id: "p4",
            problem: "Nỗi sợ nói lời từ chối người khác",
            solution: "Xác lập ranh giới cá nhân rõ ràng và nhẹ nhàng",
            explanation: "Nói \"Không\" với điều quá tải là nói \"Có\" với sức khỏe tinh thần của mình."
          },
          {
            id: "p5",
            problem: "Xao nhãng lướt mạng xã hội liên tục",
            solution: "Bật chế độ tập trung & đặt điện thoại ngoài tầm mắt",
            explanation: "Giảm kích thích Dopamine ảo giúp khôi phục khả năng chú ý sâu."
          },
          {
            id: "p6",
            problem: "Tư duy \"Mình phải luôn luôn hoàn hảo\"",
            solution: "Chuyển hóa sang \"Hoàn thành tốt hơn hoàn hảo\"",
            explanation: "Chấp nhận những thiếu sót nhỏ để tiến bước thay vì đóng băng vì cầu toàn."
          }
        ]
      }
    },

    // =========================================================================
    // CHƯƠNG 4: TÁI TẠO
    // =========================================================================
    {
      id: 4,
      slug: "ch4",
      navLabel: "C4: Tái tạo",
      title: "Chương 4: Tái tạo",
      subtitle: "Thử Thách 11 Ngày, Bản Đồ Năng Lượng 24h & Thư Gửi Tôi Của Tương Lai",
      icon: "fa-seedling",
      badge: "Phục hồi",
      image: "assets/ch4_cover.jpg",
      challengeImage: "assets/challenge_11days.jpg",
      futureLetterTemplateImage: "assets/future_letter_template.jpg",
      color: "from-pink-500 to-rose-600",
      accentColor: "pink",
      theory: {
        intro: "Sau khi đã hiểu hơn về những áp lực mình đang mang và những nguồn lực mình có, giờ là lúc bạn dành cho bản thân một khoảng nghỉ để tái tạo năng lượng.",
        challenge11DaysIntro: {
          title: "Challenge 11 Ngày — Tìm Lại Nhịp Thở Của Chính Bạn",
          content: "Hành trình vực dậy động lực nội tại không bắt đầu bằng việc ép mình học nhiều hơn, mà bắt đầu từ việc học cách đối xử dịu dàng với chính bản thân mình."
        }
      },
      stages11Days: [
        {
          stage: 1,
          name: "Chặng 1: Nghỉ ngơi và phục hồi cảm xúc",
          days: [
            {
              day: 1,
              title: "Ngày 1: Giấc ngủ — Một khoảng nghỉ bạn không nên đánh đổi",
              desc: "Ngủ đủ 7-8 tiếng tối nay. Đặt điện thoại xa giường ít nhất 30 phút trước khi ngủ.",
              prompt: "Hôm nay bạn dự định đi ngủ lúc mấy giờ? Hãy viết ra cam kết cho giấc ngủ của mình."
            },
            {
              day: 2,
              title: "Ngày 2: Nuôi dưỡng từ bên trong",
              desc: "Ăn một bữa ăn đủ chất, uống đủ 2 lít nước và thưởng thức từng ngụm nước trong chánh niệm.",
              prompt: "Cơ thể bạn hôm nay đang cảm thấy thế nào sau khi được chăm sóc chu đáo?"
            }
          ]
        },
        {
          stage: 2,
          name: "Chặng 2: Trở về với hiện tại",
          days: [
            {
              day: 3,
              title: "Ngày 3: Từng bước chân chữa lành",
              desc: "Dành 15 phút đi bộ chậm rãi tại sân trường, công viên hoặc hành lang mà không cầm điện thoại.",
              prompt: "Bạn quan sát thấy điều gì đẹp đẽ trên con đường mình vừa bước qua?"
            },
            {
              day: 4,
              title: "Ngày 4: Những người thân yêu",
              desc: "Gửi một tin nhắn ấm áp hoặc gọi điện thoại cho một người bạn, người thân mà bạn yêu quý.",
              prompt: "Người bạn đã kết nối hôm nay là ai? Cảm xúc sau cuộc trò chuyện ấy thế nào?"
            },
            {
              day: 5,
              title: "Ngày 5: Biết ơn và trân trọng hiện tại",
              desc: "Viết ra 3 điều nhỏ bé khiến bạn mỉm cười hoặc cảm thấy biết ơn trong ngày hôm nay.",
              prompt: "3 điều bạn trân trọng hôm nay là gì?"
            }
          ]
        },
        {
          stage: 3,
          name: "Chặng 3: Hãy tin vào chính bạn",
          days: [
            {
              day: 6,
              title: "Ngày 6: Thuyết Tự Quyết — Chuyển từ \"Tôi Phải\" sang \"Tôi Chọn\"",
              desc: "Áp dụng Thuyết Tự Quyết (Self-Determination Theory của Edward Deci & Richard Ryan). Khi chuyển từ trạng thái bị ép buộc sang tự chủ, động lực học tập sẽ quay trở lại tự nhiên.",
              prompt: "Chọn 1 việc bạn đang ngán ngẩm và viết lại dưới dạng: \"Tôi CHỌN làm việc này vì...\""
            }
          ]
        },
        {
          stage: 4,
          name: "Chặng 4: Đồng điệu với chính mình",
          days: [
            {
              day: 7,
              title: "Ngày 7-10: Bản đồ Năng lượng 24h & Kỹ thuật Pomodoro",
              desc: "Theo dõi nhịp sinh học trong ngày (Xanh = Năng lượng cao, Vàng = Trung bình, Đỏ = Cần nghỉ ngơi) và ứng dụng các phiên Pomodoro 25 phút của Francesco Cirillo.",
              prompt: "Khung giờ vàng nào trong ngày bạn cảm thấy tỉnh táo và tập trung nhất?"
            },
            {
              day: 11,
              title: "Ngày 11: Du hành thời gian — TO ME IN THE FUTURE",
              desc: "Hãy cùng nhau viết một bức thư gửi tới bạn trong tương lai. Mở nó ra và chậm rãi cảm nhận khoảnh khắc bản thân đã kiên cường vượt qua những ngày giông bão này.",
              prompt: "Viết thư gửi chính mình vào một ngày đặc biệt trong tương lai (ví dụ: 20/10/2030) và lên lịch gửi về email!"
            }
          ]
        }
      ],
      closingNote: {
        title: "Lời Nhắn Gửi Cuối Sổ",
        content: "Cuộc sống không phải lúc nào cũng dịu dàng. Sẽ có những lúc bạn phải đối mặt với những cảm xúc tiêu cực mà chính bản thân cũng không biết chia sẻ cùng ai. Khi cảm thấy mệt mỏi, hãy cho phép bản thân nghỉ ngơi. Đừng vội vàng, đừng tự trách móc chính mình. Hãy nhớ rằng ngọn lửa bên trong bạn luôn ở đó, chỉ cần bạn dành cho nó thời gian để tích tụ và bùng sáng trở lại một cách dịu dàng và bền bỉ."
      }
    }
  ],

  // Search Index
  searchIndex: [
    { title: "Bài Test Đánh giá Academic Burnout", chapterId: "ch1", chapterTitle: "Chương 1: Nhận diện", snippet: "9 câu hỏi chuẩn hóa thang đo SBI giúp nhận diện mức độ kiệt sức trong học tập.", keywords: ["test", "burnout", "đánh giá", "kiệt sức", "sbi"] },
    { title: "Khi Bạn Bị Burnout — Trạng thái cạn kiệt", chapterId: "ch1", chapterTitle: "Chương 1: Nhận diện", snippet: "Nếu stress là chiếc ba lô quá nặng thì burnout là đôi vai đã mỏi rã rời.", keywords: ["stress", "balo", "cạn kiệt"] },
    { title: "Mô hình Tảng Băng Trôi (The Iceberg Model)", chapterId: "ch2", chapterTitle: "Chương 2: Giải mã", snippet: "Bóc tách phần nổi (triệu chứng bề mặt) và phần chìm (áp lực vô hình, nỗi sợ thất bại).", keywords: ["tảng băng", "iceberg", "phần nổi", "phần chìm"] },
    { title: "Câu chuyện của Lusi & Chiếc ba lô", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Tình huống sinh viên năm 2 khoa Anh ULIS vượt qua áp lực thi cử qua Thuyết Đánh Giá Nhận Thức.", keywords: ["lusi", "tiểu luận", "thuyết trình", "lazarus"] },
    { title: "Chiếc Van Xả Áp Lực & Nối Đất 5-4-3-2-1", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Kiểm tra mực nước cảm xúc chiếc bình và kỹ thuật nối đất 5 giác quan.", keywords: ["van xả", "chiếc bình", "mực nước", "5-4-3-2-1", "grounding"] },
    { title: "Kéo thả Ghép cặp Sticker Chuyển Hóa", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Bài tập ghép cặp 6 vấn đề với giải pháp tư duy chuyển hóa tích cực.", keywords: ["kéo thả", "sticker", "chuyển hóa"] },
    { title: "Đồng hồ Pomodoro Quả Cà Chua", chapterId: "ch3", chapterTitle: "Chương 3: Chuyển hóa", snippet: "Phương pháp 25 phút tập trung của Francesco Cirillo giúp não bộ không bị quá tải.", keywords: ["pomodoro", "cà chua", "25 phút"] },
    { title: "Bản Đồ Năng Lượng 24 Giờ", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Biểu đồ nhịp sinh học năng lượng 24h trong ngày theo 3 mức màu xanh, vàng, đỏ.", keywords: ["bản đồ", "năng lượng", "24h"] },
    { title: "Thử thách 11 Ngày Phục Hồi Nhịp Thở", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "4 chặng chăm sóc bản thân dịu dàng từ giấc ngủ, bước chân đến thuyết tự quyết.", keywords: ["thử thách", "11 ngày", "challenge", "nhịp thở"] },
    { title: "Thư Gửi Tôi Trong Tương Lai (TO ME IN THE FUTURE)", chapterId: "ch4", chapterTitle: "Chương 4: Tái tạo", snippet: "Viết thư du hành thời gian gửi chính mình vào một mốc ngày tương lai kèm gửi email.", keywords: ["thư tương lai", "future letter", "to me", "niêm phong"] }
  ]
};
