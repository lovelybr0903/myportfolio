var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
      rows: 2,
  },
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
              rows: 2,
          }
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
              rows: 2,
          }
      }
  }
});