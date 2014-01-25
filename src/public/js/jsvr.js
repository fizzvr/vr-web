//llamo a la funcion inicio
$(document).on("ready", inicio);
function inicio ()
{
	fs();
	galleryHover();
	callprettyPhoto();
}

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
////////// Function for gallery rollovers //////////
function galleryHover() {
	$('.item-de-la-galeria').hover(function(){
			$(this).find('.gallery-hover-4col').stop('true','true').fadeTo("normal",1);
	},
		function(){
			$(this).find('.gallery-hover-4col').stop('true','true').fadeTo("normal",0);
	});
}

//PrettyPhoto
function callprettyPhoto() {

	//para el html validador
	$('.gallery-icons a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	///* light_rounded / dark_rounded / light_square / dark_square / facebook */
	$(".gallery-icons a[rel^='prettyPhoto']").prettyPhoto({allow_expand: false, theme: 'light_rounded',social_tools:false, deeplinking: false });
}
