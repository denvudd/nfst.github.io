
$(document).ready(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.slider__item__photo'),
    draggable: false,
    autoplay: true,
    touchMove: false,
    swipe: false,
  });
  $('.slider-conferance2020').slick({
    slidesToShow: 5,
    arrows: true,
    appendArrows: $('.slider__head__arrows2020'),
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          appendArrows: false,
          dots: true,
          appendDots: $('.slider-conferance2020'),
        }
      }
    ]
  });
  $('.slider-conferance2019').slick({
    slidesToShow: 5,
    arrows: true,
    appendArrows: $('.slider__head__arrows2019'),
    variableWidth: true,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          appendArrows: false,
          dots: true,
          appendDots: $('.slider-conferance2019'),
        }
      }
    ]
  });
  $('.partners__inner').slick({
    responsive: [
      {
        breakpoint: 4800,
        settings: 'unslick',
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          speed: 500,
        }
      }
    ]
  });
});



