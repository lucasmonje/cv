(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-43843578-1', 'lucasmonje.is-a-geek.com');
ga('send', 'pageview');

$(document).ready(function() {
	
	$(".rslides").responsiveSlides(
        {
            timeout: 10000,
            speed: 250
        }
    );
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0
			}
		}
	});

	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect  : 'none',
		closeEffect	: 'none',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

	// Set custom style, close if clicked, change title type and overlay color
	$(".fancybox-effects-c").fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,

		openEffect : 'none',

		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			}
		}
	});

	// Remove padding, set opening and closing animations, close if clicked and disable overlay
	$(".fancybox-effects-d").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,

		closeClick : true,

		helpers : {
			overlay : null
		}
	});

	/*
	 *  Button helper. Disable animations, hide close button, change title type and content
	 */

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});


	/*
	 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
	 */

	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	/*
	 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	*/
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});

	/*
	 *  Open manually
	 */
	

    $("#cafemania").click(function() {
		$.fancybox.open([
			{
				href : 'images/cafemania/01large.jpg',
				title : 'CafeMania'
			}, {
				href : 'images/cafemania/02large.jpg',
				title : 'CafeMania'
			}, {
				href : 'images/cafemania/03large.jpg',
                title : 'CafeMania'
			}, {
				href : 'images/cafemania/04large.jpg',
                title : 'CafeMania'
			}
		]);
	});
    $("#cafemania2").click(function() {
		$.fancybox.open([
			{
				href : 'images/cafemania/01large.jpg',
				title : 'CafeMania'
			}, {
				href : 'images/cafemania/02large.jpg',
				title : 'CafeMania'
			}, {
				href : 'images/cafemania/03large.jpg',
                title : 'CafeMania'
			}, {
				href : 'images/cafemania/04large.jpg',
                title : 'CafeMania'
			}
		]);
	});
    $("#findandclimb").click(function() {
		$.fancybox.open([
			{
				href : 'images/findandclimb/01large.jpg',
				title : 'Find and Climb'
			}, {
				href : 'images/findandclimb/02large.jpg',
				title : 'Find and Climb'
			}, {
				href : 'images/findandclimb/03large.jpg',
				title : 'Find and Climb'
			}, {
				href : 'images/findandclimb/04large.jpg',
				title : 'Find and Climb'
			}, {
				href : 'images/findandclimb/05large.jpg',
				title : 'Find and Climb'
			}
		]);
    });
    $("#wordshow").click(function() {
		$.fancybox.open([
			{
				href : 'images/wordshow/01large.jpg',
				title : 'Word Show'
			}, {
				href : 'images/wordshow/02large.jpg',
				title : 'Word Show'
			}, {
				href : 'images/wordshow/03large.jpg',
				title : 'Word Show'
			}, {
				href : 'images/wordshow/04large.jpg',
				title : 'Word Show'
			}
		]);
    });
    $("#worldmysteries").click(function() {
		$.fancybox.open([
			{
				href : 'images/worldmysteries/01large.jpg',
				title : 'Word Show'
			}, {
				href : 'images/worldmysteries/02large.jpg',
				title : 'Word Show'
			}, {
				href : 'images/worldmysteries/03large.jpg',
				title : 'Word Show'
			}
		]);
    });
     $("#fazendamobile").click(function() {
		$.fancybox.open([
			{
				href : 'images/fazendamobile/01large.jpg',
				title : 'Top Farm'
			}, {
				href : 'images/fazendamobile/02large.jpg',
				title : 'Top Farm'
			}, {
				href : 'images/fazendamobile/03large.jpg',
				title : 'Top Farm'
			}, {
				href : 'images/fazendamobile/04large.jpg',
				title : 'Top Farm'
			}, {
				href : 'images/fazendamobile/05large.jpg',
				title : 'Top Farm'
			}, {
				href : 'images/fazendamobile/06large.jpg',
				title : 'Top Farm'
			}
		]);
    });
    
     $("#logos").click(function() {
		$.fancybox.open([
			{
				href : 'images/logos/01large.jpg',
				title : 'Logos'
			}, {
				href : 'images/logos/02large.jpg',
				title : 'Logos'
			}, {
				href : 'images/logos/03large.jpg',
				title : 'Logos'
			}, {
				href : 'images/logos/04large.jpg',
				title : 'Logos'
			}, {
				href : 'images/logos/05large.jpg',
				title : 'Logos'
			}
		]);
    });
    
    $("#retoque").click(function() {
		$.fancybox.open([
			{
				href : 'images/retoque/01large.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}, {
				href : 'images/retoque/02large.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}, {
				href : 'images/retoque/03large.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}
		]);
    });
    
    $("#lucianagomez").click(function() {
		$.fancybox.open([
			{
				href : 'images/lucianagomez/01large.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'images/lucianagomez/02large.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'images/lucianagomez/03large.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'images/lucianagomez/04large.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}
		]);
    });   

});