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

  // Tabs
  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
var id = $(this).attr('data-id');
  $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
  $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
  $(this).addClass('active');
  $('#'+id).addClass('active-tab').fadeIn();
  return false;
});

// Стилизация чекбоксов для форм
  $('input[type='file'], select').styler();

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