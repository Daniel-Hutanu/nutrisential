$(document).ready(function () {
      $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
        slidesToScroll: 8,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      });
    });