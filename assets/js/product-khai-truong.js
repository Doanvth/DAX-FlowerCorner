let products = [
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/gio-hoa-may-man.jpg.webp",
    name: "May Mắn",
    sale: 0,
    newPrice: "580,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/lang-hoa-hong-cam-01.jpg.webp",
    name: "Sunrise Spirit",
    sale: 9,
    newPrice: "690,000VND",
    oldPrice: "760,000VND",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/Autumn_2024/FFL_003.jpg.webp",
    name: "Kệ Hoa Khai Trương Vinh Quang",
    sale: 0,
    newPrice: "3,100,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/ke-hoa-khai-truong-dai-thang.jpg.webp",
    name: "Kệ Hoa Khai Trương Đại Thắng",
    sale: 0,
    newPrice: "2,650,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/hoa-khai-truong-van-su-may-man.jpg.webp",
    name: "Vạn Sự May Mắn",
    sale: 0,
    newPrice: "1,680,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/APR_2024/cheerful-success.png.webp",
    name: "Cheerful Success",
    sale: 0,
    newPrice: "1,290,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/Amour.jpg.webp",
    name: "Amour",
    sale: 0,
    newPrice: "920,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-bung-sang.jpg.webp",
    name: "Lẵng Hoa Bừng Sáng",
    sale: 0,
    newPrice: "1,220,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/hoa-khai-truong-phat-dat.jpg.webp",
    name: "Kệ Hoa Khai Trương Phát Đạt",
    sale: 0,
    newPrice: "2,070,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/ke-hoa-khai-truong-huy-hoang.jpg.webp",
    name: "Kệ Hoa Khai Trương Huy Hoàng",
    sale: 0,
    newPrice: "1,960,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/hoa-chuc-mung-phat.jpg.webp",
    name: "Hoa Chúc Mừng Lộc Phát",
    sale: 0,
    newPrice: "2,350,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/hoa-khai-truong-nong-nhiet.jpg.webp",
    name: "Kệ Hoa Khai Trương Nồng Nhiệt",
    sale: 0,
    newPrice: "2,160,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/lang-hoa-ngay-vui.jpg.webp",
    name: "Ngày Vui",
    sale: 0,
    newPrice: "1,890,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/ke-hoa-chuc-mung-thien-thanh.jpg.webp",
    name: "Hoa Chúc Mừng Thiên Thanh",
    sale: 0,
    newPrice: "1,830,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/hoa-khai-truong-khai-hoan.jpg.webp",
    name: "Kệ Hoa Khai Trương Khải Hoàn",
    sale: 0,
    newPrice: "1,850,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/hoa-khai-truong-tan-dat.jpg.webp",
    name: "Kệ Hoa Khai Trương Tấn Đạt",
    sale: 0,
    newPrice: "2,200,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/ke-hoa-chuc-mung-tan-toi.jpg.webp",
    name: "Kệ Hoa Chúc Mừng Tấn Tới",
    sale: 0,
    newPrice: "2,980,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/hoa-khai-truong-trang-trong.jpg.webp",
    name: "Kệ Hoa Khai Trương Trang Trọng",
    sale: 23,
    newPrice: "1,780,000VND",
    oldPrice: "2,320,000VND",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/hoa-khai-truong-vang-danh.jpg.webp",
    name: "Hoa Khai Trương Vang Danh",
    sale: 0,
    newPrice: "1,150,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/Passion.jpg.webp",
    name: "Passion",
    sale: 0,
    newPrice: "1,270,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-huong-duong-100.jpg.webp",
    name: "Warm Breeze",
    sale: 0,
    newPrice: "1,220,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/phuc-thinh.jpg.webp",
    name: "Phúc Thịnh",
    sale: 0,
    newPrice: "1,990,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/ke-hoa-khai-truong-phat-loc.jpg.webp",
    name: "Kệ Hoa Khai Trương Phát Lộc",
    sale: 0,
    newPrice: "4,800,000VND",
    oldPrice: "",
  },
  {
    img: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202022/van-su-hong-phat.jpg.webp",
    name: "Vạn Sự Hồng Phát",
    sale: 14,
    newPrice: "1,130,000VND",
    oldPrice: "1,310,000VND",
  },
];

var p = "";
for (var i = 0; i < products.length; i++) {
  if (products[i].sale > 0 && products[i].oldPrice !== "") {
    p += `
          <div class="col-lg-3">
              <div class="card product" style="width: 18rem">
                  <a href="chi-tiet-san-pham.html" onclick="viewProductDetails('${
                    products[i].name
                  }')">
                      <img src="${products[i].img}" class="card-img-top" alt="${
      products[i].name
    }" />
                  </a>
                  <div class="icon-bar">
                      <i class="fas fa-heart"></i>
                      <i class="fas fa-plus"></i>
                      <i class="fas fa-cart-shopping"></i>
                      <i class="fas fa-sync-alt"></i>
                  </div>
                  <span class="sale">${products[i].sale}%<br />GIẢM</span>
                  <div class="card-body">
                      <h5 class="card-title text-center product-name">${
                        products[i].name
                      }</h5>
                      <p class="card-text text-center">
                          <span class="price-new">${products[i].newPrice}</span>
                          <span class="price-old">${products[i].oldPrice}</span>
                      </p>
                      <a href="#" class="btn btn-primary" onclick="addToCart('${
                        products[i].name
                      }', ${parseInt(products[i].newPrice)}, '${
      products[i].img
    }')">ĐẶT HÀNG</a>
                  </div>
              </div>
          </div>`;
  } else if (products[i].sale == 0 && products[i].oldPrice == "") {
    p += `
          <div class="col-lg-3">
              <div class="card product" style="width: 18rem">
                  <a href="chi-tiet-san-pham.html" onclick="viewProductDetails('${
                    products[i].name
                  }')">
                      <img src="${products[i].img}" class="card-img-top" alt="${
      products[i].name
    }" />
                  </a>
                  <div class="icon-bar">
                      <i class="fas fa-heart"></i>
                      <i class="fas fa-plus"></i>
                      <i class="fas fa-cart-shopping"></i>
                      <i class="fas fa-sync-alt"></i>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title text-center product-name">${
                        products[i].name
                      }</h5>
                      <p class="card-text text-center">
                          <span class="price-new">${products[i].newPrice}</span>
                      </p>
                      <a href="#" class="btn btn-primary" onclick="addToCart('${
                        products[i].name
                      }', ${parseInt(products[i].newPrice)}, '${
      products[i].img
    }')">ĐẶT HÀNG</a>
                  </div>
              </div>
          </div>`;
  }
}

document.querySelector(".list-products").innerHTML = p;

// Hàm xử lý liên kết chi tiết sản phẩm
function viewProductDetails(productName) {
  localStorage.setItem("selectedProductName", productName);
}
