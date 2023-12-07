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

// script animasi for use
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".animation-container");
  const images = document.querySelectorAll(".use");
  const imageWidth = 100; 

  let currentPosition = 1;
  let currentImageIndex = 0;
  let isResetting = false;

  function scrollImages() {
    currentPosition -= 0.2;
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


// script animasi for use again
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".animation-cont");
  const images = document.querySelectorAll(".usa");
  const imageWidth = 100;
  let currentPosition = 1;
  let currentImageIndex = 0;
  let isResetting = false;

  function scrollImages() {
    currentPosition += 0.2;
    container.style.transform = `translateX(${currentPosition}%)`;

    if (currentPosition >= imageWidth * currentImageIndex) {
      currentImageIndex += 1;

      if (currentImageIndex === images.length) {
        currentImageIndex = 0;
        currentPosition = -100;
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



// script for portfolio
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");

    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
  
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
  
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
