(function ($) {
"use strict";

    
    
    //sticky-menu
    $(window).on('scroll' ,function() {
        var scroll = $(window).scrollTop();
        if(scroll < 10) {
            $(".sticky").removeClass("scroll-header");
        }else{
            $(".sticky").addClass("scroll-header");
        }
    });
    
    
    
    
     
    
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu-active'
    });

    

    // slider - active
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })    // slider - active
    $('.project-active').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

})(jQuery);