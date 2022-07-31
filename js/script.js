(function ($) {
    "use strict";

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function (mutations, observer) {
        // my owl caroussel script
        /*------------------------------------------
            = Testimonial SLIDER
        -------------------------------------------*/
        if ($(".wpo-happy-client-slide").length) {
            $(".wpo-happy-client-slide").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                rtl: true,
                margin: 0,
                loop: true,
                autoplayHoverPause: true,
                dots: false,
                nav: false,
                items: 5,
                responsive: {
                    0: {
                        items: 3,
                    },

                    500: {
                        items: 3,
                    },

                    768: {
                        items: 3,
                    },

                    1200: {
                        items: 4,
                    },

                    1400: {
                        items: 5,
                    },
                },
            });
        }

        /*------------------------------------------
            = Testimonial SLIDER
        -------------------------------------------*/
        if ($(".team-slider").length) {
            $(".team-slider").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 20,
                loop: true,
                rtl: true,
                center: true,
                autoplayHoverPause: true,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                    },

                    500: {
                        items: 1,
                    },

                    768: {
                        items: 2,
                    },

                    1200: {
                        items: 3,
                    },

                    1400: {
                        items: 4,
                    },
                },
            });
        }
        /*------------------------------------------
            = Testimonial SLIDER
        -------------------------------------------*/
        if ($(".testimonial-slider").length) {
            $(".testimonial-slider").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 100,
                loop: true,
                rtl: true,
                autoplayHoverPause: true,
                dots: false,
                nav: true,
                navText: [
                    '<i class="fi flaticon-left-arrow"></i>',
                    '<i class="fi flaticon-right-arrow"></i>',
                ],
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                    },

                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 2,
                    },
                    1300: {
                        items: 2,
                    },

                    1400: {
                        items: 2,
                    },
                    1500: {
                        items: 2,
                    },
                },
            });
        }

        /*------------------------------------------
            = Testimonial SLIDER S2
        -------------------------------------------*/
        if ($(".testimonial-slider-s2").length) {
            $(".testimonial-slider-s2").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                rtl: true,
                dots: false,
                nav: true,
                navText: [
                    '<i class="fi flaticon-left-arrow"></i>',
                    '<i class="fi flaticon-right-arrow"></i>',
                ],
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                    },

                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 2,
                    },
                    1300: {
                        items: 2,
                    },

                    1400: {
                        items: 2,
                    },
                    1500: {
                        items: 3,
                    },
                },
            });
        }

        /*------------------------------------------
            = PARTNERS SLIDER
        -------------------------------------------*/
        if ($(".partners-slider").length) {
            $(".partners-slider").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                rtl: true,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 2,
                    },

                    550: {
                        items: 3,
                    },

                    992: {
                        items: 4,
                    },

                    1200: {
                        items: 6,
                    },
                },
            });
        }
        if ($(".courses-slider").length) {
            $(".courses-slider").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                rtl: true,
                dots: true,
                nav: false,
                items: 1,
            });
        }
        /*------------------------------------------
            = Gallery SLIDER
        -------------------------------------------*/
        if ($(".gallery-active").length) {
            $(".gallery-active").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 0,
                loop: true,
                rtl: true,
                autoplayHoverPause: true,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                    },

                    550: {
                        items: 2,
                    },

                    992: {
                        items: 2,
                    },

                    1200: {
                        items: 3,
                    },
                    1400: {
                        items: 4,
                    },
                },
            });
        }

        /*------------------------------------------
            = POST SLIDER
        -------------------------------------------*/
        if ($(".post-slider".length)) {
            $(".post-slider").owlCarousel({
                mouseDrag: true,
                smartSpeed: 500,
                margin: 30,
                loop: true,
                rtl: true,
                dots: false,
                nav: false,
                // navText: [
                //   '<i class="fi ti-arrow-left"></i>',
                //   '<i class="fi ti-arrow-right"></i>',
                // ],
                items: 1,
            });
        }
    });

    observer.observe(document, {
        subtree: true,
        attributes: true,
    });
});