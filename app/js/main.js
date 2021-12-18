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

  var mixer = mixitup('.products__inner-box');
});