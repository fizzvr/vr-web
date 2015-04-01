$(document).on("ready", inicio);
function inicio () {
    $('.vr-logo-skills .nodejs').tooltip();
	$('.vr-logo-skills .mongodb').tooltip();
    fs();

}


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
     if ($(".navbar").offset().top > 50)     {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
////////// Regresar para arriba //////////
$(function tt() {
	$(document).scroll(function() {
		if($(this).scrollTop() !== 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({
            scrollTop:0
        }, 800);
	});
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/////flexslider
function fs() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 2000,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
};
