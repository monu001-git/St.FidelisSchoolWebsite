$("document").ready(function ($) {

    // owl-carousel

    /*------------------------- Home page 1 -------------------------*/

    const $banner = $('.header-bottom__banner'),
        $services = $('.services__items'),
        $servicesnew = $('.servicesnew__items'),
        $servicestwo = $('.servicestwo__items'),
        $servicesthree = $('.servicesthree__items'),
        $testimonials = $(".testimonials__content-carousel"),
        $blogs = $(".blogs__content-carousel"),
        $specialists = $(".specialists__carousel"),
        $entspecialists = $(".ent__carousel"),
        $storyspecialists = $(".story__carousel"),
        $latestNews = $(".latest-news__carousel");
        $latestAn = $(".latest-An__carousel");

    /*------------------------- Home page 2 -------------------------*/

    const $banner2 = $(".header-bottom-2__banner"),
        $otherServices2Card = $(".other-services-2__card > .content > .other-services-2__carousel"),
        $specialists2Carousel = $(".specialists-2__carousel"),
        $ourClientsCarousel = $(".our-clients__carousel"),
        $latestNews2Carousel = $(".latest-news-2__carousel");

    /*------------------------- Home page 3 -------------------------*/

    const $headerBottom3Banner = $(".header-bottom-3__banner"),
        $ourDepartments2Carousel = $(".our-departments-2__carousel"),
        $ourClients2Carousel = $(".our-clients-2__carousel"),
        $specialists3Carousel = $(".specialists-3__carousel"),
        $latestNews3Carousel = $(".latest-news-3__carousel");

    /*------------------------- departments-details_right.html -------------------------*/

    const $doctorsDepartmentCarousel = $(".doctors-department__carousel"),
        $departmentCasesCarousel = $(".container_left-sidebar .department-cases__carousel"),
        $departmentCasesCarousel2 = $(".container_right-sidebar .department-cases__carousel"),
        $departmentCasesCarousel3 = $(".container_no-sidebar .department-cases__carousel");

    /*------------------------- doctors-single_right.html and doctors-single_left.html -------------------------*/

    const $doctorsTestimonialsCarousel = $(".doctors-testimonials__carousel"),
        $relativesCarousel = $(".relatives__carousel");

    /*------------------------- Home page 1 -------------------------*/

    // .header-bottom__banner
    $banner.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
	    arrows: false,
        items: 1,
        Speed: 5000,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
            },
			 390: {
                dots: true,
                nav: false,
				arrows: false,
            },

            768: {
                dots: true,
                nav: false,
				 arrows: false,
            },

            992: {
                dots: true,
				nav: false,
				arrows: false,
            },
        }
    });

    // .services__items
    $services.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
		 //navText: [$('.am-next'),$('.am-prev')],
		// navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
		navText:["<div class='nav-btn6 prev-slide6'><img src='images/left-arrow.svg'></div>","<div class='nav-btn6 next-slide6'><img src='images/right-arrow.svg'></div>"],
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.2,
                dots: false,
                nav: true,
				margin: 20,
            },

            390: {
                dots: false,
                nav: true,
                items: 1.2,
				margin: 20,
            },

            768: {
                dots: false,
                nav: false,
                items: 1.2,
				margin: 22,
            },

            992: {
                dots: false,
                nav: true,
                items: 4,
				margin: 22,
            },
        }
    });

 // .services__items1
	$servicesnew.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
		navText:["<div class='nav-btn5 prev-slide5'><img src='images/left-arrow.svg'></div>","<div class='nav-btn5 next-slide5'><img src='images/right-arrow.svg'></div>"],
        margin: 10,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2.2,
            },

            560: {
                items: 2.2,
            },

            840: {
                items: 2.2,
            },

            1200: {
                items: 4,
            },
        }
    });


 // .services__items1	
 $servicestwo.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
		navText:["<div class='nav-btn3 prev-slide3'><img src='images/left-org.svg'></div>","<div class='nav-btn3 next-slide3'><img src='images/right-org.svg'></div>"],
        margin: 12,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2.3,
            },

            560: {
                items: 2.3,
            },

            840: {
                items: 2.3,
            },

            1200: {
                items: 3.5,
            },
        }
    });
// .services__items3	
 $servicesthree.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
		navText:["<div class='nav-btn7 prev-slide7'><img src='images/left-org.svg'></div>","<div class='nav-btn7 next-slide7'><img src='images/right-org.svg'></div>"],
        margin: 12,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.2,
            },

            560: {
                items: 1.2,
            },

            840: {
                items: 1.2,
            },

            1200: {
                items: 2,
            },
        }
    });

    // .testimonials__content-carousel
    $testimonials.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        margin: 20,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.2,
            },

            560: {
                items: 1.2,
            },

            840: {
                items: 1.2,
            },

            1200: {
                items: 2,
            },
        }
    });

 // .testimonials__content-carousel
    $blogs.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        margin: 30,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.2,
            },

            560: {
                items: 1.2,
            },

            840: {
                items: 1.2,
            },

            1200: {
                items: 3,
            },
        }
    });
    // .specialists__carousel
    $specialists.owlCarousel({
        items: 1,
		loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                margin: 10,
            },

            768: {
                items: 1,
                dots: true,
                nav: false,
            },

            992: {
                items: 1,
                dots: true,
                nav: false,
                margin: false,
            },

            1200: {
                items: 1,
                dots: true,
                nav: false,
                margin: 20,
            },
        }
    });
 // .ent__carousel
    $entspecialists.owlCarousel({
        items: 1,
		loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                margin: 10,
            },

            768: {
                items: 1,
                dots: true,
                nav: false,
            },

            992: {
                items: 1,
                dots: true,
                nav: false,
                margin: false,
            },

            1200: {
                items: 1,
                dots: true,
                nav: false,
                margin: 20,
            },
        }
    });
	
 // .story__carousel
    $storyspecialists.owlCarousel({
        items: 1,
		loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                margin: 0,
            },

            768: {
                items: 1,
                dots: true,
                nav: false,
            },

            992: {
                items: 1,
                dots: true,
                nav: false,
                margin: false,
            },

            1200: {
                items: 1,
                dots: true,
                nav: false,
                margin: 0,
            },
        }
    });
    // .latest-news__carousel
    $latestNews.owlCarousel({
        loop: true,
        dots: false,
		nav: true,
		navText:["<div class='nav-btn1 prev-slide1'><img src='images/left-arrow.svg'></div>","<div class='nav-btn1 next-slide1'><img src='images/right-arrow.svg'></div>"],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2.3,
                dots: false,
                nav: true,
                margin: 5,
            },
            
            768: {
                items: 2.3,
                dots: false,
                nav: true,
				margin: 5,
            },
            
            992: {
                items: 2.3,
                dots: false,
                nav: true,
                margin: false,
				 margin: 5,
            },

            1200: {
                items: 2,
                dots: false,
                nav: true,
                margin: 5,
            },
        }
    });
    // .latest-An__carousel
    $latestAn.owlCarousel({
        loop: true,
        dots: false,
		nav: true,
		navText:["<div class='nav-btn2 prev-slide2'><img src='images/an-arrow-left.svg'></div>","<div class='nav-btn2 next-slide2'><img src='images/an-arrow-right.svg'></div>"],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.1,
                dots: false,
                nav: true,
                margin: 10,
            },
            
            768: {
                items: 1.1,
                dots: false,
                nav: true,
            },
            
            992: {
                items: 1,
                dots: false,
                nav: true,
                margin: false,
            },

            1200: {
                items: 1,
                dots: false,
                nav: true,
                margin: 30,
            },
        }
    });
    /*------------------------- Home page 2 -------------------------*/

    // .header-bottom__banner-2
    $banner2.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                nav: false,
                dots: false,
            },
            1200: {
                nav: true,
                dots: true,
            },
        }
    });

    // .other-services-2__card > .content > .carousel
    $otherServices2Card.owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                nav: false,
                items: 1,
            },

            600: {
                dots: false,
                nav: false,
                items: 2,
            },

            900: {
                dots: false,
                nav: false,
                items: 3,
            },


            1200: {
                items: 1,
                dots: false,
                nav: false,
            },
        }
    });

    // .specialists-2__carousel 
    $specialists2Carousel.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                items: 1,
            },

            767: {
                dots: true,
                items: 2,
            },

            1200: {
                items: 1,
                dots: true,
            },
        }
    })

    // .our-clients__carousel
    $ourClientsCarousel.owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: true,
        items: 1,
        margin: 50,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                nav: false,
                items: 1,
            },

            1200: {
                items: 1,
                dots: true,
                nav: true,
            },
        }
    })

    // .lates-news-2__carousel
    $latestNews2Carousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                items: 1,
                margin: 20,
                nav: true,
            },

            768: {
                dots: true,
                items: 2,
                margin: 20,
            },
        }
    });

    /*------------------------- Home page 3 -------------------------*/

    // .header-bottom-3__banner
    $headerBottom3Banner.owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
    });

    // .our-departments-2__items
    $ourDepartments2Carousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 4,
        // autoWidth: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                nav: true,
                items: 1,
            },

            420: {
                dots: false,
                nav: true,
                items: 2,
            },

            768: {
                items: 3,
                dots: true,
                nav: false,
            },

            900: {
                items: 4,
                dots: true,
                nav: false,
            },

            1300: {
                items: 4,
                dots: true,
                nav: true,
            },

        }
    });

    // .our-clients-3__carousel
    $ourClients2Carousel.owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
    });

    // .specialists-3__carousel
    $specialists3Carousel.owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
                margin: 10,
            },

            620: {
                items: 2,
                dots: true,
                nav: false,
            },

            920: {
                items: 3,
                dots: true,
                nav: false,
            },

            1200: {
                items: 4,
                dots: true,
                nav: false,
            },
            
            1300: {
                nav: true,
            }
        }
    });

    // .lates-news-3__carousel
    $latestNews3Carousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                nav: true,
                dots: false,
                items: 1,
                margin: 20,
            },

            768: {
                nav: false,
                dots: true,
                items: 2,
                margin: 20,
            },
            1300: {
                items: 2,
                nav: true,
                dots: true,
            }
        }
    });

    /*------------------------- departments-details_right.html -------------------------*/
  /* inspiration   */

    // .doctors-department__carousel
    $doctorsDepartmentCarousel.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 50,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        mouseDrag: false,
    });

    //  .department-cases__carousel
    $departmentCasesCarousel.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
            },
        }
    });

    $departmentCasesCarousel2.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
            },
        }
    });

    // .container_no-sidebar => .department-cases__carousel 4 items
    $departmentCasesCarousel3.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
                dots: false,
            },
            1200: {
                items: 4,
            }
        }
    });


    /*------------------------- doctors-single_right.html and doctors-single_left.html -------------------------*/
    $doctorsTestimonialsCarousel.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });


    // Product Carousel Slider
    if ($('.shop .image-carousel').length && $('.shop .thumbs-carousel').length) {

        var $sync1 = $(".shop .image-carousel"),
            $sync2 = $(".shop .thumbs-carousel"),
            flag = false,
            duration = 1000;

        $sync1
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 10000
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = false;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                nav: true,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 10000,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    350: {
                        items: 3,
                        autoWidth: false
                    },
                    550: {
                        items: 4,
                        autoWidth: false
                    }
                },
            })

            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }

    // shop single product
    $relativesCarousel.owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoWidth: false,
            },
            550: {
                items: 2,
                nav: false,
                autoWidth: false,
            },
            840: {
                items: 3,
                nav: false,
                autoWidth: false,
            },
            1200: {
                items: 4,
                nav: true,
                autoWidth: false,
            },
        }
    });

    $(".img-mobile__carousel").owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        margin: 10,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        mouseDrag: true,
    });
	/**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

	
})