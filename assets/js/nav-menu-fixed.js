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
