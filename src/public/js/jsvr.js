//llamo a la funcion inicio
$(document).on("ready", inicio);
function inicio () {
	"use strict";
	fs();
	galleryHover();
	callprettyPhoto();
	blogCarrusel();
	$('.vr-web-social .github').tooltip();
	$('.vr-web-social .steam').tooltip();
	$('.vr-web-social .sc').tooltip();
	$('.vr-web-social .twitter').tooltip();
	$('.vr-web-social .rss').tooltip();
	$('.vr-logo-skills .html').tooltip();
	$('.vr-logo-skills .css').tooltip();
	$('.vr-logo-skills .jquery').tooltip();
	$('.vr-logo-skills .php').tooltip();
	$('.vr-logo-skills .asp').tooltip();
	$('.vr-logo-skills .mysql').tooltip();
    $('#vr-searchbox').html('<gcse:searchbox></gcse:searchbox>');
    $('#vr-searchresultado').html('<gcse:searchresults></gcse:searchresults>');
};

/////flexslider
function fs() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
};

////////// funcion para el rollover de las miniaturas //////////
function galleryHover() {
	$('.item-de-la-galeria').hover(function(){
			$(this).find('.gallery-hover-4col').stop('true','true').fadeTo("normal",1);
	},
		function(){
			$(this).find('.gallery-hover-4col').stop('true','true').fadeTo("normal",0);
	});
};

//PrettyPhoto
function callprettyPhoto() {

	//para el html validador
	$('.gallery-icons a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	///* light_rounded / dark_rounded / light_square / dark_square / facebook */
	$(".gallery-icons a[rel^='prettyPhoto']").prettyPhoto({allow_expand: false, theme: 'light_rounded',social_tools:false, deeplinking: false });
};
function blogCarrusel () {
	$("#btn-blog-next").click(function () {
      $('#blogCarrusel').carousel('next');
    });
     $("#btn-blog-prev").click(function () {
      $('#blogCarrusel').carousel('prev');
    });
};
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
		$('body,html').animate({scrollTop:0},800);
	});
});
//////////// CSE //////////////
    $(function cse() {
    var cx = '009969376724171116055:781xbveht7m';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  });
