$(document).on("ready", inicio);
function inicio () {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('.vr-logo-skills .nodejs').tooltip();
	$('.vr-logo-skills .mongodb').tooltip();
    fs();
    mapa();
	callprettyPhoto();
    btn_hover_social();
}
function btn_hover_social() {
	$('.btn-default').hover(function(){
			$(this).find('.vr-web-social-github').css("background-position","0 -32px");
            $(this).find('.vr-web-social-twitter').css("background-position","-32px -32px");
	},
		function(){
			$(this).find('.vr-web-social-github').css("background-position","0 0");
            $(this).find('.vr-web-social-twitter').css("background-position","-32px 0");
	});
};
function mapa() {
    var misOpciones = {
        zoom: 17,
        center: new google.maps.LatLng(-0.220936, -78.51506),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}]
    };
    var map = new google.maps.Map(document.getElementById('map'), misOpciones);
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-0.220936, -78.51506),
    map: map,
    title: 'Centro Histórico de Quito'
    });
};

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
        slideshowSpeed: 4000,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
};

//PrettyPhoto
function callprettyPhoto() {
    //para el html validador
	$('.thumbnail a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	///* light_rounded / dark_rounded / light_square / dark_square / facebook */
	$(".thumbnail a[rel^='prettyPhoto']").prettyPhoto({
        allow_expand: false,
        theme: 'facebook',
        social_tools:false,
        deeplinking: false });
};
