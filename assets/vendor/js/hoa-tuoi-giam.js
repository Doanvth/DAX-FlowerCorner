let products = [
    {
        id: "SP001",
        name: "Nhớ Nhung",
        salePrice: 450000,
        price: 570000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-nho-nhung-1.jpg.webp",
        percentSale: 21,
        quantity: 100,
        describe: "Bó hồng đỏ 11 bông cùng phong cách gói theo xu hướng hiện đại sẽ giúp bạn ghi điềm trong mắt người con gái với nụ cười đầy tươi sáng ấy. Bên nhau vượt qua biết bao nhiêu chuyện vui, chuyện buồn đây là lúc bạn gửi lời cảm ơn đến người ấy đó."
    },
    {
        id: "SP002",
        name: "Rạng Rỡ",
        salePrice: 1070000,
        price: 1310000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-rang-ro-1.jpg.webp",
        percentSale: 18,
        quantity: 100,
        describe: "Lẫng hoa Rạng Rỡ được tạo nên từ những bông hoa hồng đỏ, hoa đồng tiền đỏ, hoa đồng tiền hồng nhạt và các loại lá phụ trang trí khác. Lẵng hoa thích hợp dành tặng những dịp chúc mừng, mừng khai trương, tân gia...."
    },
    {
        id: "SP003",
        name: "Only Love",
        salePrice: 390000,
        price: 430000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-only-love.jpg.webp",
        percentSale: 9,
        quantity: 100,
        describe: "Chỉ mang hình bóng một người trong tim là lời nhắn mà bó hoa Only Love muốn gửi gắn. Được thiết kế chỉ từ 10 một bông hồng đỏ thắm thể hiện cho một tình yêu nồng nhiệt cháy bỏng và cũng rất chân thành. Yêu thương là luôn chia sẻ, quan tâm và thấu hiểu người mình thương bạn nhé. Đừng chần chừ mà hãy gửi đến họ một chút yêu thương đầy chân thành nhất cùng đóa hồng đỏ được tô điểm bằng những loại hoa phụ dễ thương khác nhé."
    },
    {
        id: "SP004",
        name: "Your Day",
        salePrice: 470000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/APR_2024/z5518904182385_fe64a4bf55c1dacca1aed16614cdceb4.jpg.webp",
        percentSale: 10,
        quantity: 100,
        describe: "Hạnh phúc đôi khi không được tính bằng năm, bằng tháng mà hạnh phúc có thể đong đầy dù trong một khoảnh khắc. Hãy gửi đến người bạn yêu thương nhất những khoảnh khắc chứa đựng đầy yêu thương nhé. Bó hoa gồm tông màu hồng lãng mạn của hồng kem kết hợp với vẻ đẹp đầy đáng yêu của cẩm chướng trắng. Nếu bạn đang cần tìm một bó hoa tặng sinh nhật hay tốt nghiệp, Your Day là một trong những lựa chọn mà bạn không nên bỏ qua."
    },
    {
        id: "SP005",
        name: "First Date",
        salePrice: 520000,
        price: 590000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-baby-first-date.jpg.webp",
        percentSale: 12,
        quantity: 100,
        describe: "Là sự kết hợp giữa hoa hồng kem và baby phun hồng quen thuộc. Bó hoa vừa mang vẻ bình dị, vừa sang trọng. Rất thích hợp để tặng cho bạn bè, người thân hay cả người yêu vào những dịp đặc biệt."
    },
    {
        id: "SP006",
        name: "Nụ Cười Em",
        salePrice: 390000,
        price: 420000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-cat-tuong-nu-cuoi-em.jpg.webp",
        percentSale: 7,
        quantity: 100,
        describe: "Hoa cát tường hồng bung nở tựa như nụ cười dịu dàng, ngọt ngào. Bó hoa nụ cười em là lựa chọn thích hợp để gửi tặng vợ, bạn bái vào những dịp đặc biệt."
    },
    {
        id: "SP007",
        name: "Red Wine",
        salePrice: 510000,
        price: 550000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-red-wine.jpg.webp",
        percentSale: 7,
        quantity: 100,
        describe: "Hoa hồng vốn mang rất nhiều ý nghĩa về cuộc sống lẫn tình yêu. Như một ly rượu vang hảo hạn, bó hoa nở rộ mang sắc đỏ làm bao nàng ngất ngây và say mê. Đây sẽ là một món quà mang tính biểu tượng của một tình yêu vừa mạnh mẽ lại vừa trường tồn theo thời gian."
    },
    {
        id: "SP008",
        name: "Khúc Tình Ca",
        salePrice: 580000,
        price: 620000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/khuc-tinh-ca.jpg.webp",
        percentSale: 7,
        quantity: 100,
        describe: "Bó hoa tone hồng nhẹ nhàng được thiết kế từ các loài hoa cúc ping pong, hoa hồng kem dâu kết hợp với cát tường xoăn trắng là lựa chọn hoàn hảo để gửi đến những người phụ nữ mà bạn yêu thương vào những dịp đặc biệt."
    },
    {
        id: "SP009",
        name: "Me Gusta",
        salePrice: 310000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/SUMMER_2024/14_04_2024/NEWBOUQUET_012.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: ""
    },
    {
        id: "SP010",
        name: "Lucky",
        salePrice: 400000,
        price: 440000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-tu-cau-lucky.jpg.webp",
        percentSale: 9,
        quantity: 100,
        describe: "May mắn thường luôn mang đến niềm vui và hạnh phúc. Một bó hoa được thiết kế bởi những cành hồng vàng sẽ mang đến cho bạn bè, người thân của bạn những cảm giác tuyệt vời nhất. Tất cả không chỉ là niềm vui, mà còn là sự động viên, lời chúc đầy ý nghĩa. Hoa cẩm tú cầu vốn tượng trưng cho sức khỏe dồi dào và sự may mắn. Hãy gửi tặng bó hoa kèm theo một lời nhắn nhỏ để khiến món quà thêm đặc biệt nhé."
    },
    {
        id: "SP011",
        name: "Sunny Smile",
        salePrice: 760000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-huong-duong-sunny-smile.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: ""
    },
    {
        id: "SP012",
        name: "Sunny Days",
        salePrice: 590000,
        price: 650000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/sunny-days.jpg.webp",
        percentSale: 9,
        quantity: 100,
        describe: "Sunny Days như một niềm tin vào ngày mai tươi sáng, hướng về phía trước, như đúng ý nghĩa của Hoa Hướng Dương đem lại. Dẫu cho ngày hôm nay có tối tăm mịt mờ, mặt trời vẫn lên, và ta vẫn đi tiếp"
    },
    {
        id: "SP013",
        name: "Hồng Dễ Thương",
        salePrice: 840000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-hong-de-thuong.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: '"Trời vừa rạng, nắng vừa lên" hoa hồng đỏ gồm những cánh hồng tươi rực rỡ nhất được gói theo tông giấy hồng dễ thương như một lời nhắn trao gửi yêu thương đầy chân thành nhất. Giữa cuộc sống đầy thử thách, một chút chia sẻ, trao gửi yêu thương nhất định sẽ làm ấm lòng và tiếp thêm sức mạnh cho bạn ấy đấy.'
    },
    {
        id: "SP014",
        name: "Hồng Dịu Dàng",
        salePrice: 530000,
        price: 570000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/APR_2024/hong-diu-dang-1.jpg.webp",
        percentSale: 7,
        quantity: 100,
        describe: 'Có khi nhớ lắm một nụ cười ai đó nhưng ngại ngùng không muốn nói, có khi cần lắm một bàn tay ấm áp dịu dàng nhưng lại ở quá xa, có khi yêu lắm một ánh nhìn đầy đáng yêu, lãng mạn. Những giây phút ấy hẳn sẽ không bao giờ có thể quên, vì vật hãy tạo thêm những giây phút yêu đầu đầy hạnh phúc và bất ngờ cho người bạn yêu nhé. Tặng ngay cho người ấy một bó hoa lãng mạn với 15 hồng kem pastel thật ngọt ngào này nha.'
    },
    {
        id: "SP015",
        name: "Tia Nắng Ấm",
        salePrice: 980000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-huong-duong-tia-nang-am.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Bó hoa Tia nắng ấm được thiết kế với hoa hướng dương kết hợp với các loại hoa lá phụ. Tia nắng ấm là lựa chọn hoàn hảo để gửi tặng bạn thân, đồng nghiệp trong dịp sinh nhật hoặc lễ tốt nghiệp.'
    },
    {
        id: "SP016",
        name: "Ngày Tinh Khôi",
        salePrice: 540000,
        price: 610000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-ngay-tinh-khoi.jpg.webp",
        percentSale: 11,
        quantity: 100,
        describe: 'Sắc hồng nhẹ nhàng thể hiện sự thuần khiết, tinh khôi. Một bó hồng kem pastel ngọt ngào được tô điểm thêm bởi tú cầu xinh xắn, được kết hợp khéo léo, nhẹ nhàng cùng tông giấy xanh nhạt sẽ giúp cho ai đó biết được tình cảm của bạn dành cho họ là trong sáng, thật tâm như chính màu sắc của những đóa hồng. Bó hoa còn thích hợp gửi tặng người thân, bạn bè, hay thậm chí là đối tác như lời cám ơn, lời chúc mừng thật tâm nhất đến với họ.'
    },
    {
        id: "SP017",
        name: "Mãi Bên Nhau",
        salePrice: 570000,
        price: 660000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/mai-ben-nhau.jpg.webp",
        percentSale: 14,
        quantity: 100,
        describe: 'Hoa hồng luôn là biểu tượng cho sự trường tồn, vĩnh cửu, thể hiện một tình yêu mãnh liệt, bất diện, không bao giờ đổi thay. Còn chần chờ gì mà không gửi đến một nửa yêu thương của bạn một bó hoa đầy dễ thương này?'
    },
    {
        id: "SP018",
        name: "Perfect",
        salePrice: 760000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-perfect.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Mang sắc hồng nhẹ nhàng từ giấy gói ngoài cho đến những đóa hồng kem, bó hoa Perfect hứa hẹn sẽ là một món quà tuyệt vời gửi tặng đến những người mà bạn yêu thương nhất. '
    },
    {
        id: "SP019",
        name: "Pink Moon",
        salePrice: 940000,
        price: 1030000,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-baby-hong-pink-moon.jpg.webp",
        percentSale: 9,
        quantity: 100,
        describe: ''
    },
    {
        id: "SP020",
        name: "My Girl",
        salePrice: 760000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/my-girl.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Bó hoa My Girl được thiết kế từ hoa hồng lạc thần kết hợp với hoa thủy tiên trắng và các loại hoa lá phụ. My Girl là lựa chọn hoàn hảo để gửi tặng cô gái của bạn vào những dịp đặc biệt như: Sinh nhật, lễ tình nhân hay kỷ niệm ngày cưới.'
    },
    {
        id: "SP021",
        name: "Bó Hoa Xinh Tươi",
        salePrice: 590000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-xinh-tuoi.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Một bó hoa được thiết kế bởi thật nhiều cành hoa hồng kem dâu sẽ là một món quà tinh thần tuyệt vời dành cho người mà bạn yêu thương đấy. Thật là một liều thuốc tinh thần thật tốt đẹp phải không nào, còn chần chừ gì mà không tặng nó ngay cho người mà bạn yêu quý nhất!'
    },
    {
        id: "SP022",
        name: "Vào Hạ",
        salePrice: 710000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-vao-ha.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Bó hoa gồm tông màu trắng tinh khôi từ hoa loa kèn, cúc ping pong, đồng tiền và các loài hoa lá phụ. Bó hoa là lựa chọn hoàn hảo để gửi tặng các cô gái có sinh nhật vào tháng 4, tháng 5.'
    },
    {
        id: "SP023",
        name: "Khúc Tình Ca",
        salePrice: 1850000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/chan-tinh.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Bó hoa được thiết kế theo tone màu hồng dịu nhẹ, ngọt ngào của hoa hồng Ohara và được tạo điểm nhấn bởi hoa Tulip trắng tinh khôi. Bó hoa Chân tình là lựa chọn hoàn hảo để gửi tặng vợ, bạn gái vào những dịp đặc biệt.'
    },
    {
        id: "SP024",
        name: "Tenderly",
        salePrice: 3550000,
        price: 0,
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/bo-hoa-mau-don-tenderly.jpg.webp",
        percentSale: 0,
        quantity: 100,
        describe: 'Sự kết hợp hài hòa giữa hoa mẫu đơn và hoa tulip trắng cùng các loại hoa lá phụ cao cấp tạo nên một bó hoa đẹp xuất sắc. Bó hoa Tenderly là lựa chọn hoàn hảo để gửi tặng vợ, Mẹ, bạn gái hoặc cấp trên vào những dịp đặc biệt.'
    },

    



]

