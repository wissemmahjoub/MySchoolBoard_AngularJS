(function($) {
    "use strict"; // Start of use strict

    // TOOLTIP
    $('.bs-example-tooltips').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

    $('.bs-example-popover').popover({
        container: "body"
    });

    // IPHONE SLIDER
    $('.iphone-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    // TRANINER CAROUSEL
    $('.trainers-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });


    // SINGLE CAROUSEL
    $('.single-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

    // SHOP CAROUSEL
    $('.shop-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

})(jQuery); // End of use strict