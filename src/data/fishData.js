export const FISH_DATA = [
  // 1. CÁ RỒNG
  {
    id: "huyet-long-super-red-f4",
    name: "Cá Rồng Huyết Long Super Red King F4",
    scientificName: "Scleropages formosus (Super Red)",
    category: "ca-rong",
    categoryName: "Cá Rồng",
    price: 38500000,
    priceDisplay: "38.500.000 ₫",
    status: "available", // 'available' | 'sold' | 'contact'
    featured: true,
    rarity: "Masterpiece",
    size: "32 cm",
    age: "16 tháng tuổi",
    origin: "Trại cá rồng Qian Hu (Singapore)",
    gender: "Trống (Male)",
    diet: "Tôm bóc nõn, cá mồi khử trùng, sâu canxi, dế tẩm vitamin",
    temperament: "Uy nghiêm, hiếu động, dáng bơi uyển chuyển như rồng bay",
    waterParams: {
      ph: "6.5 – 7.2",
      temp: "28°C – 30°C",
      tankSize: "Tối thiểu 150 x 60 x 60 cm (500L+)",
      hardness: "3 – 8 dGH"
    },
    shortDesc: "Đỉnh cao phong thủy đế vương với sắc đỏ ớt rực rỡ, viền vảy hàng thứ 6 full ánh kim và vây đuôi bản rộng hoàn hảo.",
    description: "Cá Rồng Huyết Long Super Red King F4 được tuyển chọn trực tiếp tại bể nhân giống đặc biệt của trang trại Qian Hu. Cá thể sở hữu cặp râu chĩa thẳng song song, mắt khép sát không sa đĩa đệm, mang cong đỏ như son. Khi bơi lội dưới ánh đèn chuyên dụng 13000K, từng lớp vảy ánh lên gam màu đỏ ớt thẫm (Chili Red) đặc trưng cùng ánh kim sắc nét. Đây là mẫu cá thể đại diện cho quyền lực tối cao và năng lượng vượng khí cho phòng khách hoặc văn phòng gia chủ.",
    careGuide: "Duy trì hệ thống lọc tràn dưới hoặc lọc vách công suất lớn. Thay 15-20% nước mỗi tuần bằng nước đã khử clo và sục khí. Duy trì nhiệt độ ổn định bằng sưởi cảm ứng.",
    primaryImage: "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Phong thủy", "Thượng phẩm", "Huyết Long", "Singapore"]
  },
  {
    id: "kim-long-qua-boi-24k-9999",
    name: "Cá Rồng Kim Long Quá Bối 24K Gold 9999",
    scientificName: "Scleropages formosus (Cross Back Golden)",
    category: "ca-rong",
    categoryName: "Cá Rồng",
    price: 26000000,
    priceDisplay: "26.000.000 ₫",
    status: "available",
    featured: false,
    rarity: "Hiếm có",
    size: "26 cm",
    age: "11 tháng tuổi",
    origin: "Trang trại SingArowana (Malaysia)",
    gender: "Chưa xác định",
    diet: "Tép tươi, gián dubia nhân tạo, cá chép mồi",
    temperament: "Lãnh thổ cao, bơi lượn mặt nước, cực kỳ dạn người",
    waterParams: {
      ph: "6.8 – 7.4",
      temp: "27°C – 29°C",
      tankSize: "120 x 60 x 60 cm trở lên",
      hardness: "4 – 10 dGH"
    },
    shortDesc: "Vảy leo full hàng 6 phủ kín lưng, ánh kim vàng ròng 24K óng ả phản chiếu ánh sáng lấp lánh như dát vàng.",
    description: "Dòng Kim Long Quá Bối (Cross Back) thuần chủng từ bang Bukit Merah, Malaysia. Cá sở hữu đầu hoa thị vàng kín, lưng lên màu hoàn toàn qua hàng vảy thứ 6 (Cross Back) và viền vảy vi cá đầy đặn. Ánh kim vàng rực sáng như miếng vàng 24K di động dưới làn nước trong suốt, tôn vinh đẳng cấp không gian sống.",
    careGuide: "Nên sử dụng phông nền màu trắng trong giai đoạn dưỡng vảy, sau đó chuyển dần sang phông đen hoặc xanh thẫm để bật tông màu vàng hoàng gia.",
    primaryImage: "https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Kim Long", "Hoàng Kim", "Quá Bối", "Malaysia"]
  },

  // 2. CÁ ĐĨA
  {
    id: "ca-dia-heckel-cross-turquoise",
    name: "Cá Đĩa Heckel Cross Red Turquoise Tuyển Chọn",
    scientificName: "Symphysodon discus (Heckel Cross)",
    category: "ca-dia",
    categoryName: "Cá Đĩa",
    price: 4500000,
    priceDisplay: "4.500.000 ₫",
    status: "available",
    featured: true,
    rarity: "Masterpiece",
    size: "14 cm (Full Form)",
    age: "14 tháng tuổi",
    origin: "Lai tạo tuyển chọn từ nguồn hoang dã Rio Negro",
    gender: "Cặp đực cái (Pair)",
    diet: "Tim bò xay trộn tảo Spirulina, trùn huyết đông lạnh",
    temperament: "Hiền hòa, bơi theo đàn, chuyển động quý phái",
    waterParams: {
      ph: "5.8 – 6.5",
      temp: "29°C – 31°C",
      tankSize: "Tối thiểu 100 x 50 x 50 cm",
      hardness: "1 – 4 dGH"
    },
    shortDesc: "Vạch sọc số 5 màu đen huyền bí cắt dọc thân tròn xoe như chiếc đĩa ngọc, hoa văn đỏ lam sắc nét như tranh thủy mặc.",
    description: "Cá thể Heckel Cross kết hợp giữa nét hoang dã nguyên bản của dòng sông Rio Negro và sự rực rỡ của dòng Red Turquoise. Form dáng tròn trịa đạt tỷ lệ vàng 1:1, vây lưng và vây bụng xòe căng không khiếm khuyết. Thích hợp nuôi theo bầy từ 5-7 cá thể trong hồ kính siêu trong (Ultra Clear Glass) với ánh sáng dịu nhẹ.",
    careGuide: "Yêu cầu nước mềm, hơi acid và sạch sẽ tuyệt đối. Thay nước 2 ngày một lần (khoảng 20-30%) để cá luôn giữ màu da căng bóng và mắt đỏ ruby.",
    primaryImage: "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Cá Đĩa", "Heckel", "Amazon", "Mỹ Nhân Bể Kính"]
  },
  {
    id: "ca-dia-albino-white-diamond",
    name: "Cá Đĩa Bạch Ngọc Albino White Diamond",
    scientificName: "Symphysodon aequifasciatus (Albino White)",
    category: "ca-dia",
    categoryName: "Cá Đĩa",
    price: 3200000,
    priceDisplay: "3.200.000 ₫",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "12 cm",
    age: "10 tháng tuổi",
    origin: "Trại cá đĩa Penang (Malaysia)",
    gender: "Mái (Female)",
    diet: "Artemia tươi, thức ăn dán kính cao cấp Tetra Discus",
    temperament: "Tĩnh lặng, uyển chuyển, thân thiện",
    waterParams: {
      ph: "6.0 – 6.8",
      temp: "29°C – 30°C",
      tankSize: "100 x 50 x 50 cm",
      hardness: "2 – 5 dGH"
    },
    shortDesc: "Thân hình trắng muốt tinh khôi như ngọc trai nước ngọt, mắt đỏ ruby rực sáng kiêu sa.",
    description: "Bạch Ngọc Diamond là dòng cá đĩa đột biến bạch tạng toàn thân thuần khiết. Không tì vết hạt tiêu, làn da mịn màng phản chiếu ánh sáng dịu mắt. Khi bơi lướt qua các khúc lũa lũa tự nhiên, cá mang lại cảm giác bình yên và thanh lọc tâm trí tuyệt đối.",
    careGuide: "Cần đèn chuyên dụng có chỉ số hoàn màu CRI > 90 để làm nổi bật độ bóng ngọc trai mà không kích ứng mắt nhạy cảm của dòng albino.",
    primaryImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Bạch Ngọc", "Albino", "Kim Cương", "Thanh Khiết"]
  },

  // 3. CÁ KOI
  {
    id: "koi-kohaku-dainichi-grand-champion",
    name: "Cá Koi Kohaku Dainichi Tuyển Chọn Cấp Triển Lãm",
    scientificName: "Cyprinus rubrofuscus (Kohaku)",
    category: "ca-koi",
    categoryName: "Cá Koi",
    price: 52000000,
    priceDisplay: "52.000.000 ₫",
    status: "available",
    featured: true,
    rarity: "Masterpiece",
    size: "58 cm (Jumbo Body)",
    age: "3 năm tuổi (Nisai)",
    origin: "Dainichi Koi Farm (Niigata, Nhật Bản)",
    gender: "Mái (Female - Tiềm năng đạt 85cm+)",
    diet: "Cám Saki-Hikari Color Enhancing kết hợp nhộng tằm hữu cơ",
    temperament: "Thân hình vạm vỡ, bơi dũng mãnh, tương tác chủ nhân xuất sắc",
    waterParams: {
      ph: "7.2 – 7.8",
      temp: "20°C – 26°C",
      tankSize: "Hồ kính ngoài trời hoặc hồ xi măng 5m³ trở lên",
      hardness: "6 – 12 dGH"
    },
    shortDesc: "Mảng Beni đỏ thắm 4 khoang phân bố hài hòa trên nền da trắng tuyết Shiroji, giấy khai sinh certificate chuẩn gốc Dainichi.",
    description: "Cá Koi Kohaku là đỉnh cao khởi đầu và cũng là đích đến cuối cùng của người chơi Koi sành điệu. Cá thể này sở hữu cấu trúc xương khổng lồ (Jumbo Frame), vóc dáng hình thoi dày dặn, đuôi to chắc khỏe. Mảng màu đỏ Beni sâu thấu lớp biểu bì, mép viền (Kiwa) sắc bén như cắt dao lam. Kèm đầy đủ giấy chứng nhận nguồn gốc (Certificate) chính chủ từ trang trại Dainichi trứ danh.",
    careGuide: "Cung cấp dòng chảy tuần hoàn tốt và hàm lượng oxy hòa tan > 7mg/L. Giữ nước mát và cho ăn điều độ theo mùa.",
    primaryImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Koi Nhật", "Kohaku", "Dainichi", "Triển Lãm"]
  },
  {
    id: "koi-showa-sanshoku-sakai",
    name: "Cá Koi Showa Sanshoku Sakai Bloodline",
    scientificName: "Cyprinus rubrofuscus (Showa Sanshoku)",
    category: "ca-koi",
    categoryName: "Cá Koi",
    price: 42000000,
    priceDisplay: "42.000.000 ₫",
    status: "available",
    featured: false,
    rarity: "Hiếm có",
    size: "52 cm",
    age: "2.5 năm tuổi",
    origin: "Sakai Fish Farm (Hiroshima, Nhật Bản)",
    gender: "Trống (Male)",
    diet: "Thức ăn tăng cơ Hikari Silkworm Selects",
    temperament: "Mạnh mẽ, phong thái thủ lĩnh",
    waterParams: {
      ph: "7.0 – 7.6",
      temp: "22°C – 27°C",
      tankSize: "Hồ kính lớn 4m³ trở lên",
      hardness: "7 – 14 dGH"
    },
    shortDesc: "Vệt đen Sumi cuồn cuộn như tia sét hình chữ Y trên trán (Menware), hòa quyện 3 sắc Đen - Đỏ - Trắng sống động.",
    description: "Showa Sanshoku đại diện cho sự biến chuyển huyền bí của vũ trụ. Màu đen Sumi thăm thẳm như mực tàu tương phản ngoạn mục với sắc đỏ cam bừng cháy và các mảng trắng tinh khiết. Cá thể đạt tiêu chuẩn thi đấu tại các hội chợ Nishikigoi All Japan.",
    careGuide: "Chất lượng nước hồ đòi hỏi vi sinh ổn định và lọc drum tự động để giữ độ trong suốt pha lê.",
    primaryImage: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Showa", "Tam Sắc", "Sakai", "Niigata"]
  },

  // 4. CÁ BETTA
  {
    id: "betta-halfmoon-rosetail-royal-violet",
    name: "Cá Betta Halfmoon Rosetail Hoàng Gia Tím Lavender",
    scientificName: "Betta splendens (Halfmoon Rosetail)",
    category: "ca-betta",
    categoryName: "Cá Betta",
    price: 1850000,
    priceDisplay: "1.850.000 ₫",
    status: "available",
    featured: true,
    rarity: "Tuyển chọn",
    size: "6.5 cm",
    age: "5 tháng tuổi (Độ sung mãn đỉnh cao)",
    origin: "Nhà lai tạo nghệ thuật Bangkok (Thái Lan)",
    gender: "Trống (Male)",
    diet: "Trùn chỉ tươi rửa sạch, cám chuyên dụng Atison Betta Pro",
    temperament: "Kiêu hùng, xòe vây 180 độ không góc chết khi gặp gương",
    waterParams: {
      ph: "6.5 – 7.0",
      temp: "26°C – 28°C",
      tankSize: "Hồ kính nghệ thuật 25 x 25 x 25 cm (15L)",
      hardness: "3 – 6 dGH"
    },
    shortDesc: "Vạt vây xòe cánh hoa hồng xếp nếp đa tầng bồng bềnh như lụa nhung, sắc tím lavender chuyển ánh ngọc trai quyến rũ.",
    description: "Được mệnh danh là cánh hồng dưới nước (Water Rose), cá thể Betta Rosetail này sở hữu góc xòe đuôi vượt ngưỡng 180 độ (Over Halfmoon). Từng tia vây phân nhánh dày đặc như những cánh hoa xếp lớp cầu kỳ. Khi cá bơi lượn trong hồ kính mini để bàn, chuyển động nhịp nhàng mang lại hiệu ứng thị giác xoa dịu tâm trí sau giờ làm việc căng thẳng.",
    careGuide: "Tránh luồng nước chảy xiết làm mệt cá. Bổ sung lá bàng khô lên men (Indian Almond Leaves) để duy trì chất chát tannin bảo vệ màng nhầy và màu vây.",
    primaryImage: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Betta", "Halfmoon", "Rosetail", "Nghệ Thuật"]
  },
  {
    id: "betta-samurai-black-plakat-master",
    name: "Cá Betta Samurai Giáp Bạc Plakat Chiến Binh",
    scientificName: "Betta splendens (Samurai Plakat)",
    category: "ca-betta",
    categoryName: "Cá Betta",
    price: 1450000,
    priceDisplay: "1.450.000 ₫",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "5.5 cm",
    age: "4.5 tháng tuổi",
    origin: "Tuyển chọn giống thuần Plakat Thái Lan",
    gender: "Trống (Male)",
    diet: "Lăng quăng, trùn huyết, cám giàu astaxanthin",
    temperament: "Hiếu chiến, nhanh nhẹn, tư thế đứng nước vững chãi",
    waterParams: {
      ph: "6.8 – 7.2",
      temp: "27°C – 29°C",
      tankSize: "30 x 20 x 20 cm",
      hardness: "4 – 8 dGH"
    },
    shortDesc: "Tương phản đối lập giữa lớp giáp vảy rồng trắng bạc phủ kín lưng trên nền thân nhung đen sâu thẳm.",
    description: "Lấy cảm hứng từ những chiến binh Samurai huyền thoại, dòng Betta này khoác lên mình lớp vảy dày ánh bạc (Dragon scale) đối lập hoàn toàn với lớp da đen nhung huyền bí bên dưới. Form Plakat đuôi ngắn, cơ bắp săn chắc và tốc độ phản xạ chớp nhoáng.",
    careGuide: "Nuôi đơn lẻ từng bể riêng. Cho cá kè gương mỗi ngày 10-15 phút để duy trì tinh thần dũng mãnh và kích thước vây căng tròn.",
    primaryImage: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Samurai", "Plakat", "Chiến Binh", "Hắc Bạch"]
  },

  // 5. CÁ RANCHU
  {
    id: "ranchu-calico-lionhead-japan",
    name: "Cá Ranchu Ngũ Sắc Đầu Lân Calico Đỉnh Bướu",
    scientificName: "Carassius auratus (Japanese Ranchu Calico)",
    category: "ca-ranchu",
    categoryName: "Cá Ranchu & Vàng",
    price: 3600000,
    priceDisplay: "3.600.000 ₫",
    status: "available",
    featured: true,
    rarity: "Hiếm có",
    size: "13 cm",
    age: "12 tháng tuổi",
    origin: "Dòng giống nghệ nhân Kyoto (Nhật Bản)",
    gender: "Đực (Male)",
    diet: "Cám chìm Hikari Lionhead, trùn chỉ, đậu hà lan luộc bóc vỏ",
    temperament: "Bơi lội lắc lư đáng yêu, hiền lành, cực kỳ háu ăn",
    waterParams: {
      ph: "7.0 – 7.5",
      temp: "20°C – 25°C",
      tankSize: "Bể kính nông 80 x 40 x 30 cm",
      hardness: "5 – 10 dGH"
    },
    shortDesc: "Lưng cong hoàn mỹ không vây lưng, bướu đầu nở bung dạng lân vuông vức, hoa văn cẩm thạch ngũ sắc rực rỡ.",
    description: "Ranchu được ca tụng là 'Vua của các loài cá vàng'. Khác với cá vàng thông thường, cá thể Ranchu Calico thượng phẩm này sở hữu sống lưng cong tròn như quả trứng luộc, điểm gập đuôi 45 độ chuẩn mực. Phần đầu phát triển các búi thịt nhung mịn ôm trọn gò má và đỉnh đầu, mang nét phúc hậu may mắn theo quan niệm Á Đông.",
    careGuide: "Thích hợp bể nước nông có mực nước từ 25-35cm để tránh áp lực nước lên bọng bơi. Sử dụng lọc vi sinh êm dịu.",
    primaryImage: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Ranchu", "Đầu Lân", "Calico", "Phúc Lộc"]
  },
  {
    id: "oranda-red-cap-hac-dinh-hong",
    name: "Cá Ba Đuôi Hạc Đỉnh Hồng Oranda Red Cap",
    scientificName: "Carassius auratus (Red Cap Oranda)",
    category: "ca-ranchu",
    categoryName: "Cá Ranchu & Vàng",
    price: 2200000,
    priceDisplay: "2.200.000 ₫",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "15 cm",
    age: "14 tháng tuổi",
    origin: "Trại cá vàng Quảng Châu tuyển lựa",
    gender: "Cái (Female)",
    diet: "Cám chìm cao đạm, rau chân vịt chần sơ, bo bo",
    temperament: "Thân thiện, chuyển động bồng bềnh thanh thoát",
    waterParams: {
      ph: "7.0 – 7.6",
      temp: "22°C – 26°C",
      tankSize: "100 x 45 x 45 cm",
      hardness: "6 – 12 dGH"
    },
    shortDesc: "Toàn thân trắng tuyết như bạch ngọc, đội vương miện bướu đỏ son rực rỡ như chim hạc tiên.",
    description: "Hình tượng Hạc Đỉnh Hồng từ xa xưa đã tượng trưng cho sự trường thọ và thanh cao. Bộ vây đuôi xòe rộng như tà váy dạ hội lướt trong nước trong suốt, bướu đỏ hình quả dâu tây trên đỉnh đầu mọng đỏ không lẫn tạp sắc.",
    careGuide: "Bể cần sục khí dồi dào và kiểm soát nitrat thấp bằng hệ thực vật thủy sinh chịu nước mát.",
    primaryImage: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Hạc Đỉnh Hồng", "Oranda", "Bạch Tuyết", "Trường Thọ"]
  },

  // 6. CÁ GUPPY
  {
    id: "guppy-full-gold-24k-ribbon",
    name: "Cá Guppy Full Gold 24K Ribbon Gen Thuần Tuyệt Đối",
    scientificName: "Poecilia reticulata (Full Gold Ribbon)",
    category: "ca-guppy",
    categoryName: "Cá Guppy",
    price: 950000,
    priceDisplay: "950.000 ₫ / Cặp Trio",
    status: "available",
    featured: true,
    rarity: "Tuyển chọn",
    size: "4 cm",
    age: "3.5 tháng tuổi",
    origin: "Trại cá cảnh cao cấp Đài Loan",
    gender: "Bộ Trio (1 Trống Ribbon + 1 Mái Ribbon + 1 Mái Gen)",
    diet: "Ấu trùng Artemia ấp nở tươi, cám Nhật B2",
    temperament: "Năng động, bơi theo đàn, dễ sinh sản thuần chủng",
    waterParams: {
      ph: "7.0 – 7.8",
      temp: "24°C – 28°C",
      tankSize: "40 x 30 x 30 cm",
      hardness: "6 – 15 dGH"
    },
    shortDesc: "Toàn thân từ đầu đến vây phủ kín ánh kim vàng 24K đặc quánh, bộ vây bơi kéo dài như dải ruy băng lụa thanh nhã.",
    description: "Được tuyển chọn gắt gao qua 6 thế hệ để ổn định gen Full Gold. Khi ánh đèn bể rọi xuống, vẩy cá phát sáng như những mảnh vàng lá tí hon đang nhảy múa. Bộ vây bụng ruy băng (Ribbon) mềm mại kéo dài chạm đáy tạo nên nét kiêu kỳ khác biệt.",
    careGuide: "Giữ độ ổn định pH nước máy qua lọc than hoạt tính. Bổ sung một lượng muối khoáng nhẹ 0.5g/L để tăng cường sức đề kháng.",
    primaryImage: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Guppy", "Full Gold", "Ribbon", "24K"]
  },
  {
    id: "guppy-albino-blue-topaz",
    name: "Cá Guppy Mắt Đỏ Lam Ngọc Albino Blue Topaz",
    scientificName: "Poecilia reticulata (Albino Blue Topaz)",
    category: "ca-guppy",
    categoryName: "Cá Guppy",
    price: 850000,
    priceDisplay: "850.000 ₫ / Cặp",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "3.8 cm",
    age: "3 tháng tuổi",
    origin: "Thái Lan xuất khẩu",
    gender: "1 Trống + 1 Mái",
    diet: "Cám Inve 3/5, trùn trĩ vi sinh",
    temperament: "Hiền hòa, sinh động",
    waterParams: {
      ph: "6.8 – 7.4",
      temp: "25°C – 28°C",
      tankSize: "30 x 20 x 25 cm",
      hardness: "4 – 8 dGH"
    },
    shortDesc: "Đôi mắt đỏ rực như đá Ruby kết hợp vạt đuôi màu xanh lam da trời trong trẻo như đá Topaz quý phái.",
    description: "Một trong những dòng guppy trang nhã nhất từng được lai tạo. Sắc xanh lam dịu mát phản quang nhẹ, tạo cảm giác như một mảnh băng trôi trong suốt giữa hồ thủy sinh xanh mát.",
    careGuide: "Bể trồng nhiều rêu java và cây thủy sinh để cá mẹ sinh sản tự nhiên an toàn.",
    primaryImage: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Blue Topaz", "Albino", "Mắt Đỏ", "Lam Ngọc"]
  },

  // 7. CÁ NEON & TETRA
  {
    id: "cardinal-tetra-vua-nam-my",
    name: "Cá Neon Vua Cardinal Tetra Nam Mỹ (Đàn 30 Con)",
    scientificName: "Paracheirodon axelrodi",
    category: "ca-neon",
    categoryName: "Cá Neon",
    price: 1200000,
    priceDisplay: "1.200.000 ₫ / Đàn 30 con",
    status: "available",
    featured: true,
    rarity: "Tuyển chọn",
    size: "3.5 – 4.0 cm (Size Đại)",
    age: "6 tháng tuổi",
    origin: "Đánh bắt chọn lọc tại lưu vực Rio Negro (Amazon)",
    gender: "Bầy đàn tự nhiên",
    diet: "Artemia sấy lạnh, cám mịn JBL NovoGranoColor mini",
    temperament: "Bơi đồng bộ theo đàn cực kỳ chặt chẽ, tạo luồng sáng rực rỡ",
    waterParams: {
      ph: "5.5 – 6.8",
      temp: "26°C – 29°C",
      tankSize: "Hồ thủy sinh từ 60cm đến 150cm",
      hardness: "1 – 5 dGH"
    },
    shortDesc: "Vạch đỏ kéo dài toàn vẹn từ đầu đến tận cuống đuôi, song hành cùng dải sáng neon xanh lục phát quang lấp lánh.",
    description: "Khác với neon thường, dòng Neon Vua (Cardinal Tetra) sở hữu dải đỏ rực toàn phần, tạo nên sự cân bằng hoàn mỹ giữa hai thái cực nóng và lạnh. Khi bơi lướt qua tán rêu thẳm và lũa đá phong cảnh rừng rậm, cả đàn cá di chuyển nhịp nhàng như một dải ngân hà thu nhỏ.",
    careGuide: "Yêu cầu nước mềm, nền đất dinh dưỡng chuyên dụng cho thủy sinh. Đèn full phổ quang WRGB sẽ đẩy sắc đỏ và xanh đạt độ bão hòa tuyệt đối.",
    primaryImage: "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Neon Vua", "Cardinal", "Amazon", "Thủy Sinh"]
  },

  // 8. CÁ THỦY SINH
  {
    id: "altum-angelfish-orinoco",
    name: "Cá Thần Tiên Ai Cập Altum Sông Orinoco Hoang Dã",
    scientificName: "Pterophyllum altum",
    category: "ca-thuy-sinh",
    categoryName: "Cá Thủy Sinh",
    price: 6800000,
    priceDisplay: "6.800.000 ₫ / Con",
    status: "available",
    featured: true,
    rarity: "Masterpiece",
    size: "24 cm (Sải cánh vây đứng)",
    age: "18 tháng tuổi",
    origin: "Lưu vực sông Orinoco (Venezuela / Colombia)",
    gender: "Tự nhiên",
    diet: "Tim bò, tép tươi băm nhuyễn, cám lá cao cấp",
    temperament: "Trầm mặc, quý tộc, tư thế vươn cao uy nghiêm",
    waterParams: {
      ph: "5.0 – 6.2",
      temp: "28°C – 31°C",
      tankSize: "Bể kính cao tối thiểu 70cm (Dung tích 400L+)",
      hardness: "1 – 3 dGH"
    },
    shortDesc: "Vua của các loài cá Thần Tiên với sống mũi gãy đặc trưng, sải vây lưng vây bụng cao vút ngút ngàn như tháp cổ.",
    description: "Altum Orinoco được giới sành thủy sinh thế giới tôn kính như biểu tượng thiêng liêng nhất của phong cách Biotope Nam Mỹ. Thân cá bạc ánh kim điểm xuyết các sọc nâu đỏ thẫm kéo dài. Để dưỡng thành công một cá thể Altum size lớn với bộ vây hoàn hảo đòi hỏi sự kiên nhẫn và công nghệ lọc nước tinh khiết hàng đầu.",
    careGuide: "Hồ cần chiều cao mặt nước lớn (>65cm) để cá không bị cong vây. Sử dụng hệ thống RO (Reverse Osmosis) để kiểm soát độ tinh khiết của nước.",
    primaryImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Altum", "Thần Tiên", "Orinoco", "Biotope"]
  },
  {
    id: "apistogramma-cacatuoides-triple-red",
    name: "Cá Phượng Hoàng Vẹt Cánh Đỏ Apisto Triple Red",
    scientificName: "Apistogramma cacatuoides (Triple Red)",
    category: "ca-thuy-sinh",
    categoryName: "Cá Thủy Sinh",
    price: 1600000,
    priceDisplay: "1.600.000 ₫ / Cặp",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "6 cm",
    age: "5 tháng tuổi",
    origin: "Đức nhân giống thuần chủng (F1)",
    gender: "1 Trống + 1 Mái",
    diet: "Trùn chỉ, artemia, cám dán tép",
    temperament: "Lãnh thổ hang đá, giương mào uy dũng khi ve vãn bạn tình",
    waterParams: {
      ph: "6.2 – 6.8",
      temp: "25°C – 28°C",
      tankSize: "50 x 35 x 30 cm",
      hardness: "3 – 6 dGH"
    },
    shortDesc: "Vây lưng vươn cao như mào vẹt Cockatoo, 3 mảng vây đuôi lưng bụng rực cháy như những ngọn đuốc hoa cúc đỏ.",
    description: "Cá Phượng Hoàng lùn Apistogramma là viên ngọc quý của các bể thủy sinh rêu phong. Chú cá đực sở hữu mào vây lưng vươn nhọn đầy khí chất, thường xuyên kiểm tra từng ngóc ngách hang gốm và canh giữ lãnh thổ đầy bản lĩnh.",
    careGuide: "Bố trí hang gốm đất nung hoặc vỏ dừa khô để cá đẻ trứng và chăm sóc đàn con non tận tụy.",
    primaryImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Apistogramma", "Triple Red", "Cá Cảnh Mini", "Thủy Sinh"]
  },

  // 9. CÁC DÒNG CÁ QUÝ HIẾM
  {
    id: "zebra-pleco-l046-rio-xingu",
    name: "Cá Tỳ Bà Ngựa Vằn Zebra Pleco L-046 Sông Xingu",
    scientificName: "Hypancistrus zebra (L-046)",
    category: "ca-quy-hiem",
    categoryName: "Các dòng cá quý hiếm",
    price: 12500000,
    priceDisplay: "12.500.000 ₫ / Con",
    status: "contact", // 'contact' (hàng hiếm liên hệ)
    featured: true,
    rarity: "Masterpiece",
    size: "7.5 cm (Size Sinh Sản)",
    age: "2.5 năm tuổi",
    origin: "F1 Nhân giống bảo tồn từ nguồn Rio Xingu (Brazil)",
    gender: "Trống trưởng thành",
    diet: "Cám dán thịt tôm Fluval Bug Bites, viên chìm cá tầng đáy cao cấp",
    temperament: "Nhút nhát, thích bóng tối, hoa văn đồ họa đen trắng cực nét",
    waterParams: {
      ph: "6.4 – 7.0",
      temp: "29°C – 32°C (Yêu cầu nước ấm và giàu oxy)",
      tankSize: "60 x 40 x 30 cm",
      hardness: "2 – 6 dGH"
    },
    shortDesc: "Bảo vật đáy nước được xếp vào danh lục cực kỳ quý hiếm, hoa văn sọc vằn đen trắng tinh tế như kiệt tác hội họa hiện đại.",
    description: "Zebra Pleco L046 là đỉnh cao khao khát của mọi nhà sưu tầm sinh vật thủy sinh toàn cầu. Do đập thủy điện Belo Monte làm suy giảm môi trường tự nhiên, cá thể thuần chủng hiện nay chủ yếu được nhân giống bởi các chuyên gia bảo tồn quốc tế. Sọc đen trên nền thân trắng sứ nguyên bản tạo nên giá trị thẩm mỹ vượt thời gian.",
    careGuide: "Yêu cầu dòng nước luân chuyển rất mạnh mô phỏng thác ghềnh sông Xingu. Nước bắt buộc phải ấm 30°C và sủi oxy liên tục 24/24.",
    primaryImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["L046", "Zebra Pleco", "Độc Bản", "Sưu Tầm Cao Cấp"]
  },
  {
    id: "platinum-senegalus-bichir",
    name: "Cá Cửu Sừng Bạch Tạng Platinum Senegalus Cổ Đại",
    scientificName: "Polypterus senegalus (Platinum Morphe)",
    category: "ca-quy-hiem",
    categoryName: "Các dòng cá quý hiếm",
    price: 19000000,
    priceDisplay: "19.000.000 ₫",
    status: "contact",
    featured: false,
    rarity: "Masterpiece",
    size: "22 cm",
    age: "18 tháng tuổi",
    origin: "Trại lai tạo đột biến gen Nhật Bản",
    gender: "Chưa xác định",
    diet: "Thịt cá hồi phi lê, tép tươi lột vỏ, tim bò sạch",
    temperament: "Bơi đáy uyển chuyển như rồng đất cổ đại, tính cách điềm đạm",
    waterParams: {
      ph: "6.8 – 7.5",
      temp: "26°C – 29°C",
      tankSize: "120 x 50 x 50 cm",
      hardness: "5 – 12 dGH"
    },
    shortDesc: "Hóa thạch sống thời tiền sử với đột biến bạch tạng toàn thân trắng ánh kim platin, mắt đen tuyền huyền ảo.",
    description: "Dòng cá hóa thạch sống tồn tại từ kỷ Creta. Phiên bản đột biến Platinum hiếm có với lớp vảy ngọc trai trắng sáng không lem một hạt sắc tố xám. Vây lưng phân nhánh như những cánh buồm cổ đại nhấp nhô lướt sát mặt sỏi đen.",
    careGuide: "Bể cần đậy nắp thật kín vì cá có khả năng phóng nhảy và hít thở không khí trực tiếp qua phổi phụ.",
    primaryImage: "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544943910-4c1dc44a0815?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Platinum", "Cửu Sừng", "Hóa Thạch Sống", "Cổ Đại"]
  },
  {
    id: "ca-dia-albino-millennium-gold",
    name: "Cá Đĩa Hoàng Kim Albino Millennium Golden",
    scientificName: "Symphysodon aequifasciatus (Golden Albino)",
    category: "ca-dia",
    categoryName: "Cá Đĩa",
    price: 3900000,
    priceDisplay: "3.900.000 ₫",
    status: "available",
    featured: false,
    rarity: "Tuyển chọn",
    size: "13 cm",
    age: "11 tháng tuổi",
    origin: "Penang Discus Farm",
    gender: "Trống",
    diet: "Tim bò dinh dưỡng, tép mồi sạch",
    temperament: "Hiền hòa, phong thái đài các",
    waterParams: {
      ph: "6.2 – 6.8",
      temp: "29°C – 30°C",
      tankSize: "100 x 50 x 50 cm",
      hardness: "2 – 5 dGH"
    },
    shortDesc: "Sắc vàng ánh kim nguyên khối như thỏi vàng di động, không một vết tiêu, mắt đỏ rực quý tộc.",
    description: "Một biến thể màu sắc cao quý mang ý nghĩa phú quý và cát tường. Thân đĩa dày dặn, viền vây vàng óng ả phát quang dưới đèn thủy sinh 10000K.",
    careGuide: "Tránh cho ăn thức ăn có phẩm màu đỏ nhân tạo để duy trì sắc vàng thuần khiết vốn có.",
    primaryImage: "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "/videos/betta.webm",
    tags: ["Cá Đĩa", "Millennium Gold", "Hoàng Kim", "Thịnh Vượng"]
  }
];

