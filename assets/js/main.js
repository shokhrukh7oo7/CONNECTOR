document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-btn');
  const menu = document.querySelector('.mobile-menu');

  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
  const closeBtn = document.querySelector('.mobile-close');
  
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
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
