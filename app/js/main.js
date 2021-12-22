$(function() {
// Products mixitup
    $('.rate-star').rateYo({
    rating: 5, 
    readOnly: true,
    starWidth: "12px"
  });

  // Product slider
  $('.product-slider__inner').slick({
    dots: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

// Кнопка меню бургер для мобильной версии
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  // Кнопка "Пользователь"" для мобильной версии
   $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });
  
// строку об mixitup (рейтинг со звездами) указывай в конце общего js
  var mixer = mixitup('.products__inner-box');
});