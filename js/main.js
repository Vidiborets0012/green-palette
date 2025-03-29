const swiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 22,

  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },
});
