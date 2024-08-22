window.onscroll = function () {
  stickyNav();
};

var navMenu = document.querySelector(".nav-menu");
var sticky = navMenu.offsetTop;

function stickyNav() {
  if (window.scrollY >= sticky) {
    navMenu.classList.add("sticky");
  } else {
    navMenu.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cartTable = document.getElementById("cart-table");

  cartTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("increase-qty")) {
      updateQuantity(event.target, 1);
    } else if (event.target.classList.contains("decrease-qty")) {
      updateQuantity(event.target, -1);
    }
  });

  function updateQuantity(button, delta) {
    const qtyInput = button.closest(".quantity-controls").querySelector(".qty-input");
    let qty = parseInt(qtyInput.value);
    qty += delta;
    if (qty < 1) qty = 1;
    qtyInput.value = qty;

    updateTotals(button.closest("tr"), qty);
  }

  function updateTotals(row, qty) {
    // Lấy giá sản phẩm và loại bỏ các ký tự không phải là số
    const unitPrice = parseFloat(row.querySelector("td:nth-child(4)").innerText.replace(/[^\d]/g, ""));
    const productTotal = row.querySelector(".product-total");

    // Cập nhật tổng tiền của sản phẩm
    productTotal.innerText = (unitPrice * qty).toLocaleString("vi-VN") + " VND";

    updateCartTotal();
  }

  function updateCartTotal() {
    const cartTable = document.getElementById("cart-table");
    const productTotals = cartTable.querySelectorAll(".product-total");
    let subTotal = 0;

    productTotals.forEach(function (productTotal) {
      // Loại bỏ tất cả ký tự không phải là số và chuyển thành số
      subTotal += parseFloat(productTotal.innerText.replace(/[^\d]/g, ""));
    });

    // Cập nhật tổng phụ và tổng cộng với định dạng VNĐ
    document.getElementById("sub-total").innerText = subTotal.toLocaleString("vi-VN") + " VND";
    document.getElementById("total").innerText = subTotal.toLocaleString("vi-VN") + " VND";
  }
});
