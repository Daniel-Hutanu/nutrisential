$(document).on("ready", function () {
    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
    $(".lazy").slick({
      lazyLoad: 'ondemand',
      infinite: true,
      dots: true
    });
    $(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 8,
      slidesToScroll: 8
    });
  });