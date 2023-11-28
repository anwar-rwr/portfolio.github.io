// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// SCRIPT ANIMASI BERGERAK CONTINUE FOR USE
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".animation-container");
  const images = document.querySelectorAll(".use");
  const imageWidth = 100; // Ganti dengan lebar gambar sesuai kebutuhan

  let currentPosition = 1;
  let currentImageIndex = 0;
  let isResetting = false;

  function scrollImages() {
    currentPosition -= 0.1;
    container.style.transform = `translateX(${currentPosition}%)`;

    if (currentPosition <= -imageWidth * currentImageIndex) {
      currentImageIndex += 1;

      if (currentImageIndex === images.length) {
        currentImageIndex = 0;
        currentPosition = 100;
        isResetting = false;
      } else {
        isResetting = true;
      }
    }

    if (isResetting) {
      container.style.transform = `translateX(${currentPosition}%)`;
    }

    requestAnimationFrame(scrollImages);
  }

  scrollImages();
});
