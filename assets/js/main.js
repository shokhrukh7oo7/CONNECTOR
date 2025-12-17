const openSearchBtn = document.getElementById("openSearch");
const searchPanel = document.getElementById("searchPanel");
const searchOverlay = document.getElementById("searchOverlay");

const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");

// открыть бургер
burgerBtn?.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// закрыть бургер
mobileClose?.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// открыть поиск
openSearchBtn.addEventListener("click", () => {
  // если открыт бургер — закрываем его
  mobileMenu.classList.remove("active");

  searchPanel.classList.add("active");
  searchOverlay.classList.add("active");
});

// закрыть поиск
function closeSearch() {
  searchPanel.classList.remove("active");
  searchOverlay.classList.remove("active");
}

searchOverlay.addEventListener("click", closeSearch);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
    mobileMenu.classList.remove("active");
  }
});

// --------------------------------------------
$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container", {
    loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1420: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
  });
});
// ================================================
// partner swiper
$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container-partner", {
    loop: true,
    slidesPerView: 10,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    autoplay: 3000, // ⏱ 4 секунды
    autoplayDisableOnInteraction: false, // не останавливается после клика
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1920: {
        slidesPerView: 10,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      395: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
});

// ================================================
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter");
  if (!counter) return;

  const startYear = parseInt(counter.dataset.startYear, 10);
  const targetValue = new Date().getFullYear() - startYear;

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        animateCounter(counter, targetValue);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(counter);
});

function animateCounter(el, target) {
  let current = 0;
  const interval = setInterval(() => {
    current++;
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 50);
}
