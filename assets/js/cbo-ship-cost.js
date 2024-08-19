const districts = {
  hn: [
    "Quận Ba Đình",
    "Quận Hoàn Kiếm",
    "Quận Tây Hồ",
    "Quận Long Biên",
    "Quận Cầu Giấy",
    "Quận Đống Đa",
    "Quận Hai Bà Trưng",
    "Quận Hoàng Mai",
    "Quận Thanh Xuân",
    "Quận Hà Đông",
    "Quận Bắc Từ Liêm",
    "Quận Nam Từ Liêm",
    "Huyện Sóc Sơn",
    "Huyện Đông Anh",
    "Huyện Gia Lâm",
    "Huyện Thanh Trì",
    "Huyện Mê Linh",
    "Huyện Ba Vì",
    "Huyện Phúc Thọ",
    "Huyện Đan Phượng",
    "Huyện Hoài Đức",
    "Huyện Quốc Oai",
    "Huyện Thạch Thất",
    "Huyện Chương Mỹ",
    "Huyện Thanh Oai",
    "Huyện Thường Tín",
    "Huyện Phú Xuyên",
    "Huyện Ứng Hòa",
    "Huyện Mỹ Đức",
  ],

  hcm: [
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 10",
    "Quận 11",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Phú Nhuận",
    "Quận Bình Thạnh",
    "Quận 12",
    "Quận Bình Tân",
    "Quận Gò Vấp",
    "TP Thủ Đức (Quận 2, 9, Thủ Đức)",
    "Huyện Hóc Môn",
    "Huyện Củ Chi",
    "Huyện Bình Chánh",
    "Huyện Nhà Bè",
    "Huyện Cần Giờ",
  ],

  other: ["Khác"],
};

function fillDistricts() {
  const city = document.getElementById("city").value;
  const districtSelect = document.getElementById("district");
  const fee = document.getElementById("fee");

  districtSelect.innerHTML = '<option value="">--- Chọn ---</option>';

  if (city === "hn" || city === "hcm") {
    districts[city].forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
    fee.textContent = "Phí giao hàng: Miễn phí!";
  } else if (city === "other") {
    const option = document.createElement("option");
    option.value = "other";
    option.textContent = "Khác";
    districtSelect.appendChild(option);
    fee.textContent = "Phí giao hàng: 60.000đ";
  } else {
    fee.textContent = "Phí giao hàng: ";
  }
}