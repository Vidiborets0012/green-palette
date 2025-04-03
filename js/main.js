const swiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 22,

  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--open');
});

const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordeon__item--active')) {
      parent.classList.remove('accordeon__item--active');
    } else {
      accordeonTitle.forEach(element => {
        element.parentNode.classList.remove('accordeon__item--active');
      });

      parent.classList.add('accordeon__item--active');
    }
    // item.parentNode.classList.toggle('accordeon__item--active');
  });
});
