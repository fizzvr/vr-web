  $(document).ready(function() {
            init();
        });
        var stage;
        function init()
        {
            $("img.lazy").lazyload({
                event : "scrollstop"
            });
            $('.navbar-collapse ul li a').click(function() {
                $('.navbar-toggle:visible').click();
            });
            $('.vr-logo-skills .nodejs').tooltip();
            $('.vr-logo-skills .angularjs').tooltip();
            $('.vr-logo-skills .mongodb').tooltip();
            setCover();

        }
        function navColapso()
        {
            //jQuery to collapse the navbar on scroll
            $(window).scroll(function() {
                 if ($(".navbar").offset().top > 50)     {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
        }
        function setCover()
        {
            scaleVideoContainer();

            initBannerVideoSize('.video-container .poster img');
            initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');

            $(window).on('resize', function() {
                scaleVideoContainer();
                scaleBannerVideoSize('.video-container .poster img');
                scaleBannerVideoSize('.video-container .filter');
                scaleBannerVideoSize('.video-container video');
            });
        }
        function scaleVideoContainer() {

            var height = $(window).height() + 5;
            var unitHeight = parseInt(height) + 'px';
            $('.homepage-hero-module').css('height',unitHeight);

        }

        function initBannerVideoSize(element){

            $(element).each(function(){
                $(this).data('height', $(this).height());
                $(this).data('width', $(this).width());
            });

            scaleBannerVideoSize(element);

        }

        function scaleBannerVideoSize(element){

            var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;

            console.log(windowHeight);

            $(element).each(function(){
                var videoAspectRatio = $(this).data('height')/$(this).data('width');

                $(this).width(windowWidth);

                if(windowWidth < 1000){
                    videoHeight = windowHeight;
                    videoWidth = videoHeight / videoAspectRatio;
                    $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                    $(this).width(videoWidth).height(videoHeight);
                }

                $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

            });
        }
