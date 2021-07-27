(function($) {

    "use strict";
    var win = $(window);

    win.on('scroll', function() {

        var scroll = win.scrollTop();

        if (scroll < 800) {

            $("#sticky_funtion").removeClass("menu_secfixed");

        } else {

            $("#sticky_funtion").addClass("menu_secfixed");

        }

    });

    //Testimonials SLIDER ACTIVE CODE
    $('.testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1,
                dots: true
            }
        }
    });

    // :: 16.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



})(jQuery);



$(document).ready(function(){

	

	$(window).on('load', function() {

  $('#status').fadeOut(); 

  $('#preloader').delay(350).fadeOut('slow');  

  $('body').delay(350).css({'overflow':'visible'});

});



setTimeout(function() {

  $('.enquiry_sidebar').removeClass('enq-show');

}, 700); 



	$('.qebtn').click(function(){

		$('body').toggleClass('custom-pop-active');	

	});

      

    $('.enq_closs').click(function(){

		$('body').removeClass('custom-pop-active');

		

	});



});



   $(document).ready(function() {

        $('.cus-select').select2();

    });



 $('#datepicker').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });


    $('#datepicker2').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });



 $('.totop').tottTop({

            scrollTop: 100

        });  





   $('a.mm-original-link').click( function(e) {e.preventDefault(); return false; } );


   









