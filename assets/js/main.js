document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-btn");
  const menu = document.querySelector(".mobile-menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
  const closeBtn = document.querySelector(".mobile-close");

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  });
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
