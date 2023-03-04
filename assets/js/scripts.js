$(document).ready(function(){
    $('.carousel_area_wrapper').owlCarousel({
        items:3.5,
        loop:true,
        nav:true,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>']
    })


    $('.bestProduts_carousel').owlCarousel({
        items:3.5,
        loop:true,
        nav:true,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>']
    })


    $(".mobile_bars a").click(function(){
        $(".header_navbar ul ").slideToggle();
      });


})