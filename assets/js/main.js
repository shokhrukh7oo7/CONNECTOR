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
