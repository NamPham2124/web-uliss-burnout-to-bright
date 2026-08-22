/**
 * Data store for From Burnout to Burn Bright - ULIS VNU
 * Sổ tay Chăm sóc Sức khỏe Tinh thần & Phòng chống Kiệt sức Học tập
 */
window.APP_DATA = {
  projectInfo: {
    title: "From Burnout to Burn Bright",
    subtitle: "Sổ tay Chăm sóc Sức khỏe Tinh thần & Phòng chống Kiệt sức Học tập",
    author: "Nhóm Tác giả - Trường Đại học Ngoại ngữ, ĐHQGHN (ULIS - VNU)",
    description: "Một không gian an toàn giúp sinh viên nhận diện cảm xúc, giải mã áp lực, chuyển hóa tư duy và tái tạo năng lượng. Giữ cho ngọn lửa nhiệt huyết luôn đủ ấm, đủ bền và là của riêng bạn.",
    quote: "Burn Bright không có nghĩa là cháy rực đến cạn kiệt, mà là giữ cho ngọn lửa của mình đủ ấm, đủ bền và là của riêng bạn.",
    stats: [
      { label: "Chương học chuyên sâu", value: "4 Chương" },
      { label: "Thử thách phục hồi", value: "11 Ngày" },
      { label: "Công cụ tương tác", value: "8+ Bổ trợ" },
      { label: "Đánh giá chuẩn khoa học", value: "12 Chỉ số" }
    ]
  },

  chapters: [
    {
      id: 1,
      slug: "ch1",
      navLabel: "C1: Nhận diện",
      title: "Chương 1: Nhận diện",
      subtitle: "Lắng nghe & Gọi tên trạng thái Kiệt sức trong Học tập",
      icon: "fa-search",
      badge: "Khởi đầu",
      color: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
      theory: {
        intro: "Bạn mở laptop ra. Bạn biết mình có rất nhiều việc phải hoàn thành, deadline đang sát nút, nhưng bạn không còn cảm thấy lo lắng hay thúc giục như trước đây. Thay vào đó là một sự trống rỗng đến lạ kỳ...",
        reflectionQuestions: [
          "Có phải mình đang lười biếng không?",
          "Hay mình mất đi động lực học tập?",
          "Hay mình đã bị kiệt sức?"
        ],
        definition: "Thực ra, đó có thể là tình trạng kiệt sức (academic burnout) trong học tập - trạng thái bạn cảm thấy mệt mỏi kéo dài vì việc học, dần trở nên chán nản, mất hứng thú với bài vở, và nghi ngờ về năng lực học tập của bản thân.",
        manifestations: [
          {
            id: "m1",
            title: "Sự kiệt quệ về mặt cảm xúc",
            desc: "Cảm giác cạn kiệt năng lượng, uể oải tinh thần kéo dài dù đã dành cả ngày nghỉ ngơi. Cảm giác như pin bên trong đã sập nguồn hoàn toàn.",
            icon: "fa-battery-empty",
            color: "text-rose-500 bg-rose-50 border-rose-200"
          },
          {
            id: "m2",
            title: "Giảm hứng thú với việc học",
            desc: "Thấy việc học trở nên vô nghĩa, hoài nghi \"Mình học cái này để làm gì?\" và chỉ muốn buông xuôi, bỏ mặc tất cả cho xong.",
            icon: "fa-heart-crack",
            color: "text-amber-500 bg-amber-50 border-amber-200"
          },
          {
            id: "m3",
            title: "Giảm niềm tin vào năng lực bản thân",
            desc: "Thường xuyên xao nhãng, mắc lỗi sai không đáng có và mất đi cảm giác tự tin vào khả năng của chính mình dù trước đây rất giỏi.",
            icon: "fa-user-slash",
            color: "text-indigo-500 bg-indigo-50 border-indigo-200"
          }
        ]
      },
      quiz: {
        title: "Bài Test Đánh giá Mức độ Academic Burnout",
        instructions: "Hãy đánh giá mức độ thường xuyên của các biểu hiện dưới đây dựa trên trải nghiệm học tập thực tế của chính bạn (Thang điểm 1 - 5):",
        scale: [
          { val: 1, label: "1 - Chưa bao giờ" },
          { val: 2, label: "2 - Hiếm khi" },
          { val: 3, label: "3 - Thỉnh thoảng" },
          { val: 4, label: "4 - Thường xuyên" },
          { val: 5, label: "5 - Luôn luôn" }
        ],
        questions: [
          "1. Bạn thấy đầu óc mình lúc nào cũng trong trạng thái \"quá tải\" và mệt mỏi vì việc học.",
          "2. Dù đã nghỉ ngơi cả một ngày, bạn vẫn thấy uể oải và chẳng thể lấy lại được sự tỉnh táo.",
          "3. Chỉ cần nghĩ đến việc ngồi vào bàn học là bạn đã thấy cơ thể mình rã rời, không chút sức sống.",
          "4. Bạn thấy khó mà tìm lại được niềm vui hay sự hứng thú với việc học.",
          "5. Cảm giác chán học xâm chiếm lấy bạn, đôi khi bạn chỉ muốn \"bỏ mặc tất cả\" cho xong.",
          "6. Bạn bắt đầu tự hỏi: \"Mình học cái này để làm gì?\" và thấy ý nghĩa của việc học trở nên mờ nhạt.",
          "7. Bạn không thể ngồi yên hay tập trung vào bài vở quá lâu, đầu óc cứ thế trôi đi đâu mất.",
          "8. Chỉ cần một thông báo điện thoại hay một tiếng động nhỏ cũng khiến bạn xao nhãng ngay lập tức.",
          "9. Bạn hay mắc những lỗi sai không đáng có vì tâm trí lúc nào cũng lơ lửng, không ở thực tại.",
          "10. Bạn thấy mình khó kiểm soát được tâm trạng, đôi khi thấy buồn bực hay lo âu vô cớ.",
          "11. Bạn dễ nổi nóng hoặc bật khóc vì những chuyện rất nhỏ mà trước đây bạn thấy bình thường.",
          "12. Có lúc bạn phản ứng gay gắt với người xung quanh, sau đó lại thấy khó hiểu về chính mình."
        ],
        resultsInterpretation: [
          {
            min: 1.0,
            max: 2.53,
            level: "Ổn định & Cân bằng",
            badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
            icon: "fa-shield-heart",
            message: "Bạn vẫn đang ổn. Hãy tiếp tục duy trì nhịp độ này và đừng quên dành thời gian cho những niềm vui nhỏ bé để giữ cho tâm trí luôn cân bằng nhé.",
            advice: "Duy trì thói quen học tập kết hợp nghỉ ngơi điều độ. Bạn có thể sang Chương 2 để hiểu thêm về cách phòng ngừa kiệt sức từ sớm."
          },
          {
            min: 2.54,
            max: 2.95,
            level: "Ngưỡng Chờ / Báo động Nhẹ",
            badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
            icon: "fa-triangle-exclamation",
            message: "Bạn bắt đầu thấy mệt rồi, đúng không? Con số này là một lời nhắc nhở nhẹ nhàng rằng sự quá tải đang dần chạm đến giới hạn. Bạn đang ở ngưỡng mà cơ thể bắt đầu lên tiếng đòi hỏi sự quan tâm, chú ý.",
            advice: "Đừng cố gồng gánh thêm việc mới. Hãy ưu tiên giấc ngủ, phân bổ lại thời gian và áp dụng các kỹ thuật chuyển hóa ở Chương 3."
          },
          {
            min: 2.96,
            max: 5.0,
            level: "Kiệt sức Nghiêm trọng (Burnout)",
            badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
            icon: "fa-fire-extinguisher",
            message: "Bạn có thể đã đi qua một chặng đường rất căng thẳng. Kết quả này không nói rằng bạn kém cỏi hay lười biếng, nó chỉ là một lời xác nhận rằng bạn đã kiên cường trong suốt một thời gian dài, cho đến khi năng lượng bên trong bạn cạn kiệt hoàn toàn.",
            advice: "Hãy cho phép bản thân nghỉ ngơi không tội lỗi. Hãy làm các bài tập trong Thử thách 11 Ngày ở Chương 4 và trò chuyện với người thân hoặc chuyên viên tư vấn tâm lý."
          }
        ]
      }
    },

    {
      id: 2,
      slug: "ch2",
      navLabel: "C2: Giải mã",
      title: "Chương 2: Giải mã",
      subtitle: "Bóc tách nguyên nhân & Xây dựng Mô hình Tảng băng trôi",
      icon: "fa-puzzle-piece",
      badge: "Đi sâu",
      color: "from-sky-500 to-indigo-600",
      accentColor: "sky",
      sections: [
        {
          id: "sec1",
          title: "1. Cạm bẫy của chữ \"PHẢI\"",
          content: "Nguồn gốc áp lực thường bắt đầu từ tâm lý: \"Mình phải giỏi\", \"Mình phải nhanh\", \"Mình phải đạt kỳ vọng của gia đình\". Khi hành trình học tập bắt đầu bằng từ \"PHẢI\", nó dễ trở thành gánh nặng vô hình khiến bạn kiệt sức mà không hề hay biết.",
          insight: "Hãy thử đổi \"Tôi PHẢI làm...\" thành \"Tôi CHỌN làm... vì mục tiêu của chính mình\"."
        },
        {
          id: "sec2",
          title: "2. Áp lực vô hình & Sự so sánh",
          content: "Trong môi trường đại học năng động như ULIS, sinh viên dễ rơi vào hội chứng sợ bị tụt hậu (FOMO) khi thấy bạn bè xung quanh đạt học bổng, thi IELTS điểm cao, làm thêm nhiều nơi. Việc so sánh hậu trường của mình với ánh hào quang của người khác là nguyên nhân lớn gây kiệt sức.",
          insight: "Tốc độ của mỗi người là khác nhau. Đi chậm mà bền vững quan trọng hơn chạy nhanh rồi gãy gánh giữa đường."
        },
        {
          id: "sec3",
          title: "3. Mô hình Tảng Băng Trôi (Iceberg Model)",
          content: "Phần thấy được chỉ là bề nổi (mất ngủ, deadline dồn dập, cáu gắt, xao nhãng). Sự bình yên chỉ thực sự đến khi bạn hiểu được những nguyên nhân sâu bên dưới mặt nước (kỳ vọng gia đình, nỗi sợ thất bại, thiếu ranh giới từ chối).",
          insight: "Muốn chữa lành ngọn lửa bên trong, chúng ta phải can đảm nhìn sâu xuống phần chìm của tảng băng cảm xúc."
        }
      ],
      exercise: {
        title: "Công cụ Tương tác: Mô hình Tảng Băng Cá Nhân",
        description: "Điền các yếu tố bề nổi (biểu hiện bạn cảm thấy) và phần chìm (nguyên nhân sâu xa) để phác họa tảng băng cảm xúc của chính bạn.",
        defaultFloating: [
          "Deadline dồn dập",
          "Mất ngủ mệt mỏi",
          "Uể oải mỗi sáng",
          "Dễ cáu gắt"
        ],
        defaultSubmerged: [
          "Kỳ vọng từ gia đình",
          "Nỗi sợ bị tụt hậu",
          "Áp lực phải hoàn hảo",
          "Chưa biết từ chối"
        ]
      }
    },

    {
      id: 3,
      slug: "ch3",
      navLabel: "C3: Chuyển hóa",
      title: "Chương 3: Chuyển hóa",
      subtitle: "Thay đổi tư duy, Quản lý năng lượng & Bài tập Kéo thả",
      icon: "fa-sync-alt",
      badge: "Hành động",
      color: "from-amber-500 to-orange-600",
      accentColor: "amber",
      theory: {
        caseStudy: {
          title: "Câu chuyện của Lusi (Sinh viên ULIS)",
          content: "Lusi là sinh viên khoa Ngôn ngữ và Văn hóa Anh của Trường ĐH Ngoại ngữ, ĐHQGHN. Vào thời điểm kỳ thi cuối kỳ đang đến gần, các nhiệm vụ cần xử lý dồn dập: bài thuyết trình nhóm cuối tuần, hai bài tiểu luận sát deadline, điểm giữa kỳ chưa như mong đợi. Lusi quá tải, xao nhãng và liên tục lướt điện thoại để trốn tránh cảm giác này..."
        },
        pomodoroInfo: {
          title: "Phương pháp Pomodoro (Kỹ thuật Quả Cà Chua)",
          desc: "Thay vì học liền mạch trong khoảng thời gian dài gây quá tải não bộ, hãy chia nhỏ thành các phiên 25 phút tập trung cao độ + 5 phút nghỉ ngơi thư giãn. Sau 4 phiên, hãy dành khoảng nghỉ dài 15-30 phút để phục hồi trọn vẹn."
        }
      },
      dndExercise: {
        title: "Bài Tập Kéo Thả: Ghép Cặp Chuyển Hóa Cảm Xúc & Giải Pháp",
        instruction: "Hãy kéo thả các Sticker Vấn đề / Biểu hiện bên trái vào đúng Giải pháp / Tư duy Chuyển hóa tương ứng bên phải (hoặc chạm chọn trên điện thoại)!",
        pairs: [
          {
            id: "p1",
            problem: "Quá tải deadline nhiều môn học",
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
      },
      exercise: {
        lusiQuiz: [
          {
            id: "lusi_q1",
            question: "Nếu là Lusi, bạn nên nhìn nhận tình huống áp lực thi cử này là gì?",
            options: [
              "Một mối đe dọa to lớn không thể vượt qua",
              "Một thử thách tạm thời mà ai cũng từng trải qua và có thể giải quyết từng bước"
            ],
            correct: 1,
            explanation: "Coi khó khăn là thử thách giúp não bộ kích hoạt trạng thái chủ động giải quyết thay vì rơi vào hoảng sợ tê liệt."
          },
          {
            id: "lusi_q2",
            question: "Chiến lược đầu tiên Lusi nên làm để thoát khỏi việc trốn tránh deadline?",
            options: [
              "Ép bản thân thức trắng đêm học liên tục 10 tiếng",
              "Chia nhỏ các đầu việc, chọn 1 việc đơn giản nhất làm trong 25 phút để tạo đà",
              "Bỏ thi để nghỉ ngơi hoàn toàn"
            ],
            correct: 1,
            explanation: "Tạo động lượng bằng một chiến thắng nhỏ (Small Win) là cách tốt nhất phá vỡ sự trì hoãn."
          }
        ],
        energyMapTool: {
          title: "Bản đồ Năng lượng 24 Hours",
          desc: "Nhấp để đổi màu cho 24 khung giờ trong ngày: Xanh lá (Năng lượng tốt), Vàng (Hơi mệt), Đỏ (Kiệt sức). Hệ thống sẽ tự động tính toán chỉ số cân bằng cho bạn!",
          colorDefs: {
            green: { label: "Xanh: Năng lượng tốt, thoải mái", code: "#22c55e" },
            yellow: { label: "Vàng: Hơi mệt, trùng xuống", code: "#eab308" },
            red: { label: "Đỏ: Kiệt sức, quá tải", code: "#ef4444" }
          }
        }
      }
    },

    {
      id: 4,
      slug: "ch4",
      navLabel: "C4: Tái tạo",
      title: "Chương 4: Tái tạo",
      subtitle: "Video Hồi phục, Thử thách 11 Ngày & Bức thư Tương lai",
      icon: "fa-seedling",
      badge: "Phục hồi",
      color: "from-teal-500 to-emerald-600",
      accentColor: "teal",
      theory: {
        intro: "Cuộc sống không phải lúc nào cũng dịu dàng. Bằng việc hiểu bản thân hơn và đối diện với cảm xúc thay vì trốn chạy, bạn sẽ từng bước chạm đến ánh nắng rực rỡ.",
        quote: {
          text: "Cảm xúc đến rồi đi như những đám mây trên bầu trời đầy gió. Hít thở có ý thức là điểm tựa vững chắc của tôi.",
          author: "Thiền sư Thích Nhất Hạnh"
        },
        transformationMindset: {
          from: "Tôi PHẢI học / PHẢI gồng gánh tất cả",
          to: "Tôi CHỌN chăm sóc bản thân để giữ cho ngọn lửa bên trong luôn đủ ấm và bền bỉ."
        }
      },
      videoSection: {
        title: "Video Bài Học: Hướng Dẫn Tái Tạo Năng Lượng & Thiền Thở Cho Sinh Viên",
        subtitle: "Một khoảng dừng êm dịu giúp điều hòa nhịp tim, xoa dịu hệ thần kinh giao cảm sau chuỗi ngày học tập căng thẳng.",
        duration: "5 phút thực hành",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        reflectionPrompts: [
          "Sau khi hít thở sâu, vùng cơ nào trên cơ thể bạn cảm thấy nhẹ nhõm nhất?",
          "Một điều bạn muốn tự tha thứ cho bản thân trong tuần học vừa qua là gì?"
        ]
      },
      exercise: {
        challenge11Days: [
          {
            day: 1,
            phase: "Chặng 1: Nghỉ ngơi & Phục hồi",
            title: "Ngày 1: Tạm dừng để nghỉ ngơi",
            task: "Tự thưởng cho bản thân một giấc ngủ đêm thật ngon. Đêm nay tuyệt đối không thức khuya quá 23h!",
            inputPrompt: "Hôm nay tôi đã đi ngủ vào lúc:",
            placeholder: "Ví dụ: 22:30"
          },
          {
            day: 2,
            phase: "Chặng 1: Nghỉ ngơi & Phục hồi",
            title: "Ngày 2: Nuôi dưỡng từ bên trong",
            task: "Tự thưởng cho mình một bữa ăn thật ngon miệng và uống đủ 2 lít nước.",
            inputPrompt: "Hôm nay tôi đã nạp năng lượng bằng:",
            placeholder: "Ví dụ: Cơm sườn nóng, nước ép cam..."
          },
          {
            day: 3,
            phase: "Chặng 1: Nghỉ ngơi & Phục hồi",
            title: "Ngày 3: Từng bước chân chữa lành",
            task: "Dành 15 phút đi bộ ở nơi thoáng đãng (công viên, sân trường ULIS) và hít thở không khí tự nhiên.",
            inputPrompt: "Hôm nay tôi đã đi dạo ở:",
            placeholder: "Ví dụ: Sân trường ULIS trong 15 phút"
          },
          {
            day: 4,
            phase: "Chặng 1: Nghỉ ngơi & Phục hồi",
            title: "Ngày 4: Kết nối người thân yêu",
            task: "Gọi một cuộc điện thoại ngắn hoặc nhắn tin hỏi thăm người bạn tin tưởng nhất.",
            inputPrompt: "Hôm nay tôi đã liên lạc với:",
            placeholder: "Ví dụ: Gọi điện cho mẹ, nhắn tin đứa bạn thân"
          },
          {
            day: 5,
            phase: "Chặng 1: Nghỉ ngơi & Phục hồi",
            title: "Ngày 5: Biết ơn & Trân trọng hiện tại",
            task: "Viết ra 3 điều mà bạn cảm thấy biết ơn nhất ngay lúc này dù là nhỏ bé nhất.",
            inputPrompt: "3 điều khiến tôi biết ơn là:",
            placeholder: "1. Tách trà ấm / 2. Nụ cười người bạn / 3. Mình vẫn đang cố gắng"
          },
          {
            day: 6,
            phase: "Chặng 2: Hãy tin vào chính bạn",
            title: "Ngày 6: Bông hoa giá trị",
            task: "Viết ra 5 đặc điểm tốt / điểm mạnh của bản thân vào 5 cánh hoa giá trị.",
            inputPrompt: "5 điểm tốt của tôi:",
            placeholder: "Kiên trì, biết lắng nghe, sáng tạo, chân thành, trách nhiệm"
          },
          {
            day: 7,
            phase: "Chặng 3: Đồng điệu với chính mình",
            title: "Ngày 7 - 10: Theo dõi Bản đồ Năng lượng",
            task: "Dành 4 ngày liên tục ghi nhận năng lượng 24h và thêm các khoảng nghỉ xanh dịu nhẹ.",
            inputPrompt: "Cảm nhận về nhịp sinh học của bạn:",
            placeholder: "Đã bớt đỏ hơn, các khoảng xanh dần tăng lên..."
          },
          {
            day: 11,
            phase: "Chặng 4: Tái tạo hoàn toàn",
            title: "Ngày 11: Thử thách Du hành thời gian",
            task: "Viết một bức thư gửi cho chính mình trong tương lai (To Me In The Future).",
            inputPrompt: "Thông điệp gửi tương lai:",
            placeholder: "Cậu đã làm rất kiên cường rồi, hãy tiếp tục tỏa sáng nhé..."
          }
        ],
        valueFlower: {
          title: "Bài tập: Bông Hoa Giá Trị Bản Thân",
          desc: "Nhập 5 giá trị / điểm mạnh tích cực của chính bạn để làm nở rộ bông hoa tự hào của sinh viên ULIS!"
        }
      }
    }
  ],

  searchIndex: [
    {
      id: "s1",
      title: "Nhận diện Academic Burnout",
      chapterId: "ch1",
      chapterTitle: "Chương 1: Nhận diện",
      snippet: "Gọi tên 3 biểu hiện chính: Kiệt quệ cảm xúc, Giảm hứng thú học tập, Giảm niềm tin năng lực.",
      keywords: ["nhan dien", "kiet suc", "burnout", "cam xuc", "bieu hien", "qua tai", "hoc tap"]
    },
    {
      id: "s2",
      title: "Bài Test Đánh giá Mức độ Kiệt Sức",
      chapterId: "ch1",
      chapterTitle: "Chương 1: Nhận diện",
      snippet: "Bài kiểm tra 12 câu hỏi chuẩn khoa học giúp xác định chính xác mức độ Burnout từ 1.0 đến 5.0.",
      keywords: ["test", "danh gia", "quiz", "12 cau", "diem so", "kiem tra", "chuan khoa hoc"]
    },
    {
      id: "s3",
      title: "Cạm bẫy của chữ \"PHẢI\"",
      chapterId: "ch2",
      chapterTitle: "Chương 2: Giải mã",
      snippet: "Bóc tách áp lực tâm lý từ chữ \"PHẢI\" sang \"CHỌN\" để giảm bớt gánh nặng vô hình.",
      keywords: ["chu phai", "giai ma", "ap luc", "cam bay", "tu duy", "chon lua"]
    },
    {
      id: "s4",
      title: "Mô hình Tảng Băng Trôi (Iceberg Model)",
      chapterId: "ch2",
      chapterTitle: "Chương 2: Giải mã",
      snippet: "Phân biệt giữa phần nổi (mất ngủ, deadline) và phần chìm (kỳ vọng gia đình, nỗi sợ thất bại).",
      keywords: ["tang bang", "iceberg", "phan noi", "phan chim", "nguyen nhan", "goc re"]
    },
    {
      id: "s5",
      title: "Bài tập Kéo Thả: Chuyển Hóa Cảm Xúc",
      chapterId: "ch3",
      chapterTitle: "Chương 3: Chuyển hóa",
      snippet: "Thực hành kéo thả ghép cặp 6 vấn đề kiệt sức với giải pháp và tư duy chuyển hóa tích cực.",
      keywords: ["keo tha", "drag and drop", "ghep cap", "chuyen hoa", "bai tap", "sticker"]
    },
    {
      id: "s6",
      title: "Phương pháp Pomodoro Quả Cà Chua",
      chapterId: "ch3",
      chapterTitle: "Chương 3: Chuyển hóa",
      snippet: "Công cụ đồng hồ bấm giờ 25 phút học tập trung + 5 phút nghỉ ngơi giúp phục hồi năng suất.",
      keywords: ["pomodoro", "ca chua", "dong ho", "tap trung", "25 phut", "nghi ngoi", "quan ly thoi gian"]
    },
    {
      id: "s7",
      title: "Bản đồ Năng lượng 24 Hours",
      chapterId: "ch3",
      chapterTitle: "Chương 3: Chuyển hóa",
      snippet: "Công cụ tô màu theo dõi mức năng lượng sinh học qua 24 khung giờ trong ngày.",
      keywords: ["ban do nang luong", "energy map", "24 gio", "xanh vang do", "nhip sinh hoc"]
    },
    {
      id: "s8",
      title: "Video Hướng Dẫn Tái Tạo Năng Lượng",
      chapterId: "ch4",
      chapterTitle: "Chương 4: Tái tạo",
      snippet: "Video bài học thực hành hít thở chánh niệm và điều hòa cảm xúc cho sinh viên.",
      keywords: ["video", "tai tao", "thien tho", "chanh niem", "phuc hoi", "video bai hoc"]
    },
    {
      id: "s9",
      title: "Thử thách 11 Ngày Phục Hồi",
      chapterId: "ch4",
      chapterTitle: "Chương 4: Tái tạo",
      snippet: "Lộ trình 11 ngày từng bước lấy lại nhịp thở, nuôi dưỡng cơ thể và kết nối giá trị nội tại.",
      keywords: ["11 ngay", "challenge", "thu thach", "nhip tho", "bong hoa", "du hanh"]
    },
    {
      id: "s10",
      title: "Bức Thư Gửi Tôi Trong Tương Lai",
      chapterId: "future-letter",
      chapterTitle: "Future Letter",
      snippet: "Viết thư niêm phong, cài đặt ngày hẹn mở khóa trong tương lai và nhận email thông báo.",
      keywords: ["thu tuong lai", "future letter", "niem phong", "khoa thu", "gui toi", "mo thu", "la thu"]
    }
  ]
};
