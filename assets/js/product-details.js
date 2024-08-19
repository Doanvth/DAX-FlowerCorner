// Hàm tìm sản phẩm theo tên
function findProductByName(productName) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].name === productName) {
      return productsArray[i];
    }
  }
  return null; // Trả về null nếu không tìm thấy sản phẩm nào
}

// Hàm lấy thông tin sản phẩm từ localStorage và hiển thị chi tiết
function renderProductDetails(product) {
  if (!product) return; // Nếu không có sản phẩm, không làm gì cả

  // Hiển thị thông tin sản phẩm vào HTML
  document.getElementById("mainImage").src = product.img;
  document.querySelector(".product-name").textContent = product.name;
  document.querySelector(".new-price").textContent = product.newPrice;
  document.querySelector(".old-price").textContent = product.oldPrice;

  const salePercentElement = document.querySelector(".sale-percent");
  if (product.sale > 0 && salePercentElement) {
    salePercentElement.textContent = product.sale + "% GIẢM";
  } else if (salePercentElement) {
    salePercentElement.remove();
  }

  document.querySelector(".tab-description p").textContent =
    product.description;
  document.querySelector(".tab-description p strong").textContent =
    product.component;

  const ul = document.querySelector(".tab-description ul");
  ul.innerHTML = ""; // Xóa nội dung trước đó

  // Thêm các phần tử khác nếu có
  for (var key in product) {
    if (product.hasOwnProperty(key)) {
      // Kiểm tra xem key có phải là thuộc tính của product không
      if (key.indexOf("element") === 0 && product[key]) {
        // Kiểm tra nếu key bắt đầu với "element" và có giá trị
        var li = document.createElement("li");
        li.textContent = product[key];
        ul.appendChild(li);
      }
    }
  }

  // Điền các ảnh ngẫu nhiên vào các thẻ h2 đến h6
  const randomImages = imagePaths.sort(() => 0.5 - Math.random()).slice(0, 5);
  for (let i = 0; i < randomImages.length; i++) {
    const img = document.getElementById("h" + (i + 2));
    if (img) {
      img.src = randomImages[i];
    }
  }

  // Hiển thị tên sản phẩm vào thẻ h1
  document.querySelector("h1.product-name").textContent = product.name;
  document.getElementById("h1").src = product.img;
}

document.addEventListener("DOMContentLoaded", function () {
  const productName = localStorage.getItem("selectedProductName");
  const product = findProductByName(productName);
  renderProductDetails(product);
});
