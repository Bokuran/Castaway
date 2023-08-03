new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 30,
    direction: 'horizontal',
    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },
});


const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
});
