function changeImage(id) {
  let pathImage = document.getElementById(id).getAttribute("src");
  document.getElementById("mainImage").setAttribute("src", pathImage);
}
