$(document).ready(function(){
    $('.carousel_area_wrapper').owlCarousel({
        items:4,
        loop:true,
        nav:true,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })


    $('.bestProduts_carousel').owlCarousel({
        items:4,
        loop:true,
        nav:true,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
        
    })


    $(".mobile_bars a").click(function(){
        $(".header_navbar ul ").slideToggle();
      });


})