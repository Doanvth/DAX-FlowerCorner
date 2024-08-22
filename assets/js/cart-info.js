// Thêm sự kiện khi trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  updateCartTable(); // Cập nhật bảng giỏ hàng khi trang tải xong
  updateCart(); // Cập nhật cả dropdown giỏ hàng khi tải trang
  updateCartCount(); // Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng khi tải trang
});

// Cập nhật số lượng sản phẩm
function updateQuantity(productName, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = cart.find((item) => item.name === productName);

  if (product) {
    product.quantity += delta;
    if (product.quantity < 1) product.quantity = 1; // Đảm bảo số lượng không nhỏ hơn 1
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
    quantityContainer.className = "quantity-controls";

    let decreaseBtn = document.createElement("button");
    decreaseBtn.className = "btn btn-light decrease-qty";
    decreaseBtn.innerHTML = "-";
    decreaseBtn.addEventListener("click", function () {
      updateQuantity(item.name, -1);
    });

    let quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.className = "form-control qty-input";
    quantityInput.value = item.quantity;
    quantityInput.readOnly = true;

    let increaseBtn = document.createElement("button");
    increaseBtn.className = "btn btn-light increase-qty";
    increaseBtn.innerHTML = "+";
    increaseBtn.addEventListener("click", function () {
      updateQuantity(item.name, 1);
    });

    // Thêm các phần tử vào container số lượng
    quantityContainer.appendChild(decreaseBtn);
    quantityContainer.appendChild(quantityInput);
    quantityContainer.appendChild(increaseBtn);
    quantityCell.appendChild(quantityContainer);

    // Tạo ô cho giá sản phẩm
    let priceCell = document.createElement("td");
    priceCell.style.textAlign = "right";
    priceCell.textContent = item.price.toLocaleString("vi-VN") + " VND";

    // Tạo ô cho tổng cộng
    let totalCell = document.createElement("td");
    totalCell.style.textAlign = "right";
    totalCell.className = "product-total";
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

  // Cập nhật tổng phụ và tổng cộng
  document.getElementById("sub-total").innerText = subTotal.toLocaleString("vi-VN") + " VND";
  document.getElementById("total").innerText = subTotal.toLocaleString("vi-VN") + " VND";
}

// Cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".mini-cart-count").innerText = totalQuantity;
}

// Cập nhật giỏ hàng hiển thị trong dropdown (nếu có)
function updateCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <p class="product-name">${item.name}</p>
          <span class="product-count">x${item.quantity}</span>
          <p class="item-price">${item.price.toLocaleString("vi-VN")} VND</p>
        </div>
        <div class="square-del">
          <button onclick="removeFromCart('${item.name}')">X</button>
        </div>
      </div>
    `;
  });

  cartTotal.innerHTML = `<strong>Tổng cộng:</strong> ${total.toLocaleString("vi-VN")} VND`;
}
