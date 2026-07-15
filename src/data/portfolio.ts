export const profile = {
  greeting: "Xin chào, mình là",
  name: "Nguyễn Chí Phong",
  roles: [
    "Sinh viên Truyền thông Đa phương tiện",
    "Lập kế hoạch & Tổ chức sự kiện",
    "Điều phối dự án",
  ],
  headline: "Tổ chức sự kiện chỉn chu, mang trải nghiệm và giá trị cho cộng đồng.",
  about: [
    "Mình là sinh viên ngành Truyền thông Đa phương tiện tại Đại học FPT Hà Nội, định hướng phát triển trong lĩnh vực Tổ chức sự kiện.",
    "Trong hơn 02 năm tham gia các hoạt động câu lạc bộ và dự án cộng đồng, mình đã đảm nhận nhiều vai trò như Chủ nhiệm CLB, Trưởng Ban Tổ chức, Trưởng Ban Nội dung và Thành viên Ban Hậu cần, tích lũy kinh nghiệm từ khâu lên ý tưởng, lập kế hoạch đến triển khai và vận hành sự kiện.",
    "Mình mong muốn tạo nên những sự kiện chỉn chu, mang lại trải nghiệm tích cực và giá trị cho cộng đồng.",
  ],
  contact: {
    phone: "0925 552 006",
    email: "nchiphong69@gmail.com",
    location: "Hà Nội",
  },
  education: {
    school: "Đại học FPT Hà Nội",
    major: "Chuyên ngành Truyền thông Đa phương tiện",
    period: "2024 – Nay",
  },
};

export const experiences = [
  "Chủ nhiệm CLB Tình nguyện Vì Cộng Đồng iGo",
  "Trưởng Ban Tổ chức Sự kiện tuyển thành viên iGlow On",
  "Trưởng Ban Nội dung iLympic",
  "Thành viên Ban Tổ chức Vòng Tay Ấm 19",
  "Thành viên Ban Hậu cần F-Camp 2025",
  "Thành viên Ban Nội dung Tiếp Bước Khoen On",
  "Thành viên Ban Nội dung Mầm Nắng",
];

export const skills = {
  event: [
    "Tổ chức sự kiện",
    "Lập kế hoạch sự kiện",
    "Vận hành sự kiện",
    "Điều phối nhân sự",
    "Quản lý hậu cần",
  ],
  content: [
    "Truyền thông",
    "Lập kế hoạch nội dung",
    "Quản lý mạng xã hội",
    "Viết nội dung",
  ],
  creative: ["Sáng tạo", "Phát triển ý tưởng", "Thiết kế cơ bản", "Chỉnh sửa video"],
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  overview: string;
  duties: string[];
  results: string[];
  accent: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "khi-im-lang-len-tieng",
    number: "01",
    title: "Khi Im Lặng Lên Tiếng",
    category: "Dự án Văn hóa · Nghệ thuật cộng đồng",
    role: "Event Organizer & Logistics Coordinator",
    overview:
      "Khi Im Lặng Lên Tiếng là dự án nghệ thuật cộng đồng sử dụng kịch câm như một phương tiện truyền tải thông điệp về cảm xúc và kết nối con người. Thông qua ngôn ngữ cơ thể thay cho lời nói, dự án giúp khán giả khám phá sức mạnh của sự im lặng trong việc thấu hiểu, đồng cảm và biểu đạt cảm xúc. Đồng thời, dự án góp phần lan tỏa giá trị của nghệ thuật biểu diễn đến cộng đồng, đặc biệt là giới trẻ.",
    duties: [
      "Tham gia brainstorm ý tưởng và xây dựng concept cho sự kiện.",
      "Lên phương án trang trí không gian phù hợp với chủ đề chương trình.",
      "Chuẩn bị và quản lý vật tư, đạo cụ, thiết bị phục vụ sự kiện.",
      "Phối hợp với các ban để triển khai công tác setup và tháo dỡ.",
      "Kiểm tra, bố trí khu vực tổ chức trước giờ diễn ra chương trình.",
      "Hỗ trợ điều phối và xử lý các vấn đề phát sinh trong quá trình vận hành sự kiện.",
    ],
    results: [
      "Thu hút 1.100+ người theo dõi trên Fanpage dự án.",
      "Mời thành công Nghệ sĩ Kịch câm Hoàng Tùng tham gia với vai trò khách mời đặc biệt.",
      "Dự án được 06 đơn vị báo chí và truyền thông đưa tin.",
      "Tổ chức thành công sự kiện, đảm bảo công tác tổ chức và hậu cần đúng kế hoạch.",
    ],
    accent: "#e87820",
    cover: "/assets/sk1.jpg",
    gallery: [
      "/assets/sk1.jpg",
      "/assets/sk1_1.jpg",
      "/assets/sk1_2.jpg",
      "/assets/sk1_3.jpg",
    ],
  },
  {
    id: "99-seconds",
    number: "02",
    title: "99 Seconds",
    category: "Dự án Giáo dục cộng đồng",
    role: "Event Organizer & Logistics Coordinator",
    overview:
      "99 SECONDS là dự án giáo dục cộng đồng nhằm nâng cao nhận thức về phòng chống đuối nước cho trẻ em thông qua mô hình talkshow kết hợp trải nghiệm thực tế. Chương trình hướng đến việc trang bị kiến thức, kỹ năng xử lý tình huống và xây dựng ý thức chủ động trong việc bảo vệ bản thân trước các nguy cơ đuối nước.",
    duties: [
      "Tham gia xây dựng ý tưởng và kế hoạch tổ chức sự kiện.",
      "Chuẩn bị và quản lý vật tư, đạo cụ cho chương trình.",
      "Hỗ trợ bố trí không gian talkshow và khu vực trải nghiệm.",
      "Phối hợp setup trước chương trình và thu dọn sau sự kiện.",
      "Hỗ trợ điều phối các hoạt động trong suốt thời gian diễn ra chương trình.",
      "Phối hợp với các thành viên để đảm bảo tiến độ và xử lý các tình huống phát sinh.",
    ],
    results: [
      "Thu hút 230+ người theo dõi trên Fanpage dự án.",
      "Mời thành công Anh Phạm Quốc Việt – Nhà sáng lập FAS Angel, chia sẻ kiến thức sơ cứu và phòng chống đuối nước.",
      "Tổ chức thành công chương trình giáo dục cộng đồng về phòng chống đuối nước dành cho trẻ em.",
      "Đảm bảo công tác tổ chức, hậu cần và vận hành chương trình diễn ra hiệu quả.",
    ],
    accent: "#f08a24",
    cover: "/assets/sk2.jpg",
    gallery: [
      "/assets/sk2.jpg",
      "/assets/sk2_1.jpg",
      "/assets/sk2_2.jpg",
      "/assets/sk2_3.jpg",
    ],
  },
  {
    id: "hoa-tren-da",
    number: "03",
    title: "Hoa Trên Đá",
    category: "Dự án Truyền thông văn hóa",
    role: "Event Organizer & Logistics Coordinator",
    overview:
      "Hoa Trên Đá là dự án truyền thông văn hóa nhằm giới thiệu và lan tỏa những giá trị đặc sắc của dân tộc H'Mông thông qua các hoạt động trải nghiệm, trưng bày và giao lưu văn hóa. Dự án hướng đến việc giúp người trẻ hiểu hơn về bản sắc dân tộc, góp phần gìn giữ và quảng bá các giá trị văn hóa truyền thống.",
    duties: [
      "Tham gia xây dựng ý tưởng và concept cho sự kiện.",
      "Chuẩn bị vật tư, đạo cụ và các hạng mục phục vụ chương trình.",
      "Hỗ trợ trang trí không gian theo chủ đề văn hóa H'Mông.",
      "Phối hợp setup và kiểm tra khu vực tổ chức trước khi chương trình diễn ra.",
      "Hỗ trợ điều phối các hoạt động trong suốt sự kiện.",
      "Phối hợp với các thành viên để đảm bảo tiến độ và chất lượng chương trình.",
    ],
    results: [
      "Thu hút 100+ người theo dõi trên Fanpage dự án.",
      "Mời thành công Chị Vàng Thị Súa – Trưởng Ban Tổ chức sự kiện \"Xyoo Tshiab Nram Nroog – Tết Mông Xuống Phố 2026\".",
      "Tổ chức thành công chương trình quảng bá giá trị văn hóa truyền thống dân tộc H'Mông.",
      "Xây dựng không gian trải nghiệm văn hóa, kết nối cộng đồng với bản sắc dân tộc.",
    ],
    accent: "#c45f12",
    cover: "/assets/sk3.jpg",
    gallery: [
      "/assets/sk3.jpg",
      "/assets/sk3_1.jpg",
      "/assets/sk3_2.jpg",
      "/assets/sk3_3.jpg",
    ],
  },
];
