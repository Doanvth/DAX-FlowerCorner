// Cập nhật số lượng sản phẩm
function updateQuantity(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = cart.find((item) => item.name === productName);

  if (product) {
    let newQuantity = document.getElementById(`quantity-${productName}`).value;
    product.quantity = parseInt(newQuantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartTable();
    updateCart(); // Cập nhật cả dropdown giỏ hàng
    updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
  }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.name !== productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartTable();
  updateCart(); // Cập nhật cả dropdown giỏ hàng
  updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
}

// Hiển thị thông tin giỏ hàng lên bảng
function updateCartTable() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTableBody = document.querySelector("#cart-table tbody");
  cartTableBody.innerHTML = "";
  let subTotal = 0;

  cart.forEach((item) => {
    let total = item.price * item.quantity;
    subTotal += total;

    // Tạo hàng trong bảng
    let row = document.createElement("tr");

    // Tạo ô cho hình ảnh
    let imgCell = document.createElement("td");
    let imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.alt = item.name;
    imgElement.style.width = "50px";
    imgCell.appendChild(imgElement);

    // Tạo ô cho tên sản phẩm
    let nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    // Tạo ô cho số lượng và các nút
    let quantityCell = document.createElement("td");
    let quantityContainer = document.createElement("div");
    quantityContainer.className = "quantity-container";

    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.id = `quantity-${item.name}`;
    quantityInput.value = item.quantity;
    quantityInput.min = "1";

    let updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-success btn-sm";
    updateBtn.innerHTML = '<i class="fa-solid fa-rotate"></i>';
    updateBtn.addEventListener("click", function () {
      item.quantity = parseInt(quantityInput.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartTable();
      updateCart(); // Cập nhật cả dropdown giỏ hàng
      updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    deleteBtn.addEventListener("click", function () {
      cart = cart.filter((cartItem) => cartItem.name !== item.name);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartTable();
      updateCart(); // Cập nhật cả dropdown giỏ hàng
      updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
    });

    // Thêm các phần tử vào container số lượng
    quantityContainer.appendChild(quantityInput);
    quantityContainer.appendChild(updateBtn);
    quantityContainer.appendChild(deleteBtn);
    quantityCell.appendChild(quantityContainer);

    // Tạo ô cho giá sản phẩm
    let priceCell = document.createElement("td");
    priceCell.textContent = item.price.toLocaleString("vi-VN") + " VND";

    // Tạo ô cho tổng cộng
    let totalCell = document.createElement("td");
    totalCell.textContent = total.toLocaleString("vi-VN") + " VND";

    // Thêm các ô vào hàng
    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(totalCell);

    // Thêm hàng vào body của bảng
    cartTableBody.appendChild(row);
  });

  document.getElementById(
    "sub-total"
  ).innerHTML = `<span style="text-align: right; display: block;">${subTotal.toLocaleString(
    "vi-VN"
  )} VND</span>`;
  document.getElementById(
    "total"
  ).innerHTML = `<span style="text-align: right; display: block;">${subTotal.toLocaleString(
    "vi-VN"
  )} VND</span>`;
}

// Khi trang tải xong, cập nhật bảng giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
  updateCartTable();
  updateCart(); // Cập nhật cả dropdown giỏ hàng khi tải trang
  updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng khi tải trang
});
