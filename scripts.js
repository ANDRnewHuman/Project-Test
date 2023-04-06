$("#slider").slick({
  slidesToShow: 4,
  appendArrows: $(".div-button"),
  prevArrow:
    '<button class="slider-arrow arrow-prev">"<svg width="25" height="25"><use href="./image/sprite.svg#icon-right"></use> </svg></button>',
  nextArrow:
    '<button class="slider-arrow arrow-prev">"<svg width="25" height="25"><use href="./image/sprite.svg#icon-left"></use> </svg></button>',
});
$("#slider-two").slick({
  slidesToShow: 5,
  prevArrow:
    '<button class="slider-compainer ">"<svg width="20" height="20"><use href="./image/sprite.svg#icon-right"></use> </svg></button>',
  nextArrow:
    '<button class="slider-compainer-two">"<svg width="20" height="20"><use href="./image/sprite.svg#icon-left"></use> </svg></button>',
});
$("#slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: $("#slider-nav"),
});
$("#slider-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  focusOnSelect: true,
  asNavFor: $("#slider-for"),
});
