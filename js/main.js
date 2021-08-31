$(document).ready(function () {
    if ($(window).width() >= 1199) {
        new WOW().init();
    }

    $(window).on('load', function () {
        console.log(window.location.hash);
        if (window.location.hash == '#contact') {
            window.scrollTo({
                top: $('#contact').offset().top - 120,
                behavior: 'smooth'
            });
        }
    });

    //////////** header **//////////
    if ($(this).scrollTop() >= 50) {
        $("header").addClass("header-scroll");
    } else {
        $("header").removeClass("header-scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 120
        }, 1000, 'swing');
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** services slider **//////////
    var serviceswiper = new Swiper('.services-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: '.services-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-slider .swiper-btn-next',
            prevEl: '.services-slider .swiper-btn-prev',
        },
    });
    //////////** testmonials slider **//////////
    var testmonialswiper = new Swiper('.testmonials-slider .swiper-container', {

        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 2.61,
                spaceBetween: 15,
                centeredSlides: true,
            },
        },
        pagination: {
            el: '.testmonials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testmonials-slider .swiper-btn-next',
            prevEl: '.testmonials-slider .swiper-btn-prev',
        },
    });

    //////////** menu **//////////
    $('.menu-btn').click(function () {
        $("nav").slideToggle(300);
        $(this).toggleClass("active");
        $("body").toggleClass("overflow");
    })

    //////////** numbers animate **//////////
    if ($('.states-grid').length) {
        var a = 0;
        $(window).scroll(function () {
            if (a === 0 && $(this).scrollTop() >= ($(".states-grid").offset().top) - 700) {
                $('.state-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1
            }
        });
    }

    //////////** infograph **//////////
    $('.infograph-item').click(function () {
        $('.infograph-item').not(this).removeClass("active")
        $(this).addClass("active")
    })

    //////////** partners slider **//////////
    var partnerswiper = new Swiper('.partners-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1,
            },
            480: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            991: {
                spaceBetween: 30,
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.partners-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.partners-slider .swiper-btn-next',
            prevEl: '.partners-slider .swiper-btn-prev',
        },
    });

    //////////** download tab  **//////////
    $('.download-button').click(function () {
        $('.download-form-tab').slideToggle(500)
        $(this).toggleClass("active")
    })

    //////////** related slider **//////////
    var relatedwiper = new Swiper('.related-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1300: {
                spaceBetween: 36,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: '.related-slider .swiper-pagination',
            clickable: true,
        },
    });
});


$(function () { // wait for document ready

    var controllers = new ScrollMagic.Controller();

    var pinIntroScenes = new ScrollMagic.Scene({
        triggerElement: '#pinContainer',
        triggerHook: 0,
        duration: '1000'
    })
        .setPin('#pinContainer')
        .addTo(controllers);


    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1150
    })
        .setTween(TweenMax.fromTo($('#text1'), 1, {
            opacity: 0,
        }, {
            opacity: 1,
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1250
    })
        .setTween(TweenMax.fromTo($('#text2'), 1, {
            opacity: 0,
        }, {
            opacity: 1,
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1350
    })
        .setTween(TweenMax.fromTo($('#name1'), 1, {
            opacity: 0,
            transform: "translateY(120px) rotate(-90deg)",
        }, {
            opacity: 1,
            transform: "translateY(00px) rotate(-90deg)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1450
    })
        .setTween(TweenMax.fromTo($('#name2'), 1, {
            opacity: 0,
            transform: "translateY(-120px) rotate(-90deg)",
        }, {
            opacity: 1,
            transform: "translateY(00px) rotate(-90deg)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1550
    })
        .setTween(TweenMax.fromTo($('#animate1'), 1, {
            opacity: 0,
            transform: "translateX(120px)",
        }, {
            opacity: 1,
            transform: "translateX(00px)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1750
    })
        .setTween(TweenMax.fromTo($('#animate2'), 1, {
            opacity: 0,
            transform: "translateX(120px)",
        }, {
            opacity: 1,
            transform: "translateX(00px)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 2000
    })
        .setTween(TweenMax.fromTo($('#animate3'), 1, {
            opacity: 0,
            transform: "translateX(120px)",
        }, {
            opacity: 1,
            transform: "translateX(00px)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1650
    })
        .setTween(TweenMax.fromTo($('#animate4'), 1, {
            opacity: 0,
            transform: "translateX(-120px)",
        }, {
            opacity: 1,
            transform: "translateX(00px)"
        }))
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var startimgbook1 = new ScrollMagic.Scene({
        duration: 100,
        offset: 1850
    })
        .setTween(TweenMax.fromTo($('#animate5'), 1, {
            opacity: 0,
            transform: "translateX(-120px)",
        }, {
            opacity: 1,
            transform: "translateX(00px)"
        }))
        .addTo(controller);
});