



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









