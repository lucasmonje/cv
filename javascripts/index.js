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
	
	var cafemania = [
		{
			href : 'http://farm6.staticflickr.com/5323/10040596633_81c83dbc19_o.jpg',
			title : 'CafeMania'
		}, {
			href : 'http://farm4.staticflickr.com/3757/10040595093_175af65ee8_o.jpg',
			title : 'CafeMania'
		}, {
			href : 'http://farm6.staticflickr.com/5538/10040497365_b2f141f79f_o.jpg',
			title : 'CafeMania'
		}, {
			href : 'http://farm3.staticflickr.com/2810/10040457984_e7962059dd_o.jpg',
			title : 'CafeMania'
		}
	];
    $("#cafemania").click(function() {
		$.fancybox.open(cafemania);
	});
    $("#cafemania2").click(function() {
		$.fancybox.open(cafemania);
	});
    $("#findandclimb").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm6.staticflickr.com/5507/10040456114_150e1a7de7_o.jpg',
				title : 'Find and Climb'
			}, {
				href : 'http://farm3.staticflickr.com/2819/10040593183_d0691801a0_o.jpg',
				title : 'Find and Climb'
			}, {
				href : 'http://farm3.staticflickr.com/2805/10040511256_9a25c67639_o.jpg',
				title : 'Find and Climb'
			}, {
				href : 'http://farm8.staticflickr.com/7309/10040495405_7df2429e20_o.jpg',
				title : 'Find and Climb'
			}, {
				href : 'http://farm3.staticflickr.com/2806/10040459184_3caf5803b1_o.jpg',
				title : 'Find and Climb'
			}
		]);
    });
    $("#wordshow").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm8.staticflickr.com/7395/10040508206_94252d48da_o.jpg',
				title : 'Word Show'
			}, {
				href : 'http://farm8.staticflickr.com/7427/10040492565_ec80640208_o.jpg',
				title : 'Word Show'
			}, {
				href : 'http://farm4.staticflickr.com/3716/10040508066_57ccab34d2_o.jpg',
				title : 'Word Show'
			}, {
				href : 'http://farm8.staticflickr.com/7445/10040508036_6a94d2ee93_o.jpg',
				title : 'Word Show'
			}
		]);
    });
    $("#worldmysteries").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm8.staticflickr.com/7416/10040589713_755d590b93_o.jpg',
				title : 'World Mysteries'
			}, {
				href : 'http://farm8.staticflickr.com/7409/10040452444_ba3ac322f7_o.jpg',
				title : 'World Mysteries'
			}, {
				href : 'http://farm4.staticflickr.com/3833/10040451774_fc5f93a07a_o.jpg',
				title : 'World Mysteries'
			}
		]);
    });
     $("#fazendamobile").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm6.staticflickr.com/5331/10040496835_0e9c260989_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm4.staticflickr.com/3815/10040457174_c56d3d74fe_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm3.staticflickr.com/2894/10040456784_95aab5825f_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm8.staticflickr.com/7319/10040496215_2d4922ddc8_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm6.staticflickr.com/5446/10040511976_7b249d6786_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm6.staticflickr.com/5482/10040593253_742782dd7a_o.jpg',
				title : 'Top Farm'
			}, {
				href : 'http://farm8.staticflickr.com/7428/10040511756_3ff6d4cfa7_o.jpg',
				title : 'Top Farm'
			}
			
		]);
    });
    
     $("#logos").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm3.staticflickr.com/2812/10040510306_8f7f21da16_o.jpg',
				title : 'Logos'
			}, {
				href : 'http://farm3.staticflickr.com/2845/10040591953_bd1b54167c_o.jpg',
				title : 'Logos'
			}, {
				href : 'http://farm4.staticflickr.com/3752/10040591873_7e63c94478_o.jpg',
				title : 'Logos'
			}, {
				href : 'http://farm4.staticflickr.com/3733/10040494285_aa861829aa_o.jpg',
				title : 'Logos'
			}, {
				href : 'http://farm6.staticflickr.com/5494/10040509936_d2de950642_o.jpg',
				title : 'Logos'
			}
		]);
    });
    
    $("#retoque").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm3.staticflickr.com/2841/10040514216_4becdcccaf_o.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}, {
				href : 'http://farm8.staticflickr.com/7382/10040453544_39392b1b89_o.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}, {
				href : 'http://farm4.staticflickr.com/3809/10040453354_3ed8b84e9b_o.jpg',
				title : 'Retoque Fotográfico para la radio de Kosiuko'
			}
		]);
    });
	
	$("#knorrsabor").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm3.staticflickr.com/2857/10040510976_3cec420b0a_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {
				href : 'http://farm8.staticflickr.com/7315/10040510896_f56c7390dc_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {				
				href : 'http://farm8.staticflickr.com/7443/10040495035_dcaa544a28_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {				
				href : 'http://farm4.staticflickr.com/3720/10040510676_18e925a30f_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {				
				href : 'http://farm4.staticflickr.com/3739/10040510716_a746932c44_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {				
				href : 'http://farm3.staticflickr.com/2893/10040455134_03bc015244_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {				
				href : 'http://farm8.staticflickr.com/7397/10040494865_9bf9bd3021_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {
				href : 'http://farm8.staticflickr.com/7436/10040592313_3c201ca28c_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {
				href : 'http://farm4.staticflickr.com/3715/10040455044_8c620f41c5_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {
				href : 'http://farm4.staticflickr.com/3676/10040510426_619196c189_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}, {
				href : 'http://farm8.staticflickr.com/7304/10040510446_e21003d805_o.jpg',
				title : 'Programación del sitio Knorrsabor.com'
			}
		]);
    });
	
    $("#lucianagomez").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm8.staticflickr.com/7351/10040591523_0e171cbfb9_o.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'http://farm8.staticflickr.com/7417/10040454344_5d7561b745_o.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'http://farm8.staticflickr.com/7331/10040509386_60b7f083ed_o.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}, {
				href : 'http://farm8.staticflickr.com/7422/10040453954_a484906007_o.jpg',
				title : 'Diseño y Programación del sitio de Luciana Gomez'
			}
		]);
    });
	$("#vaja").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm8.staticflickr.com/7289/10040590413_8fd2d25e4e_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}, {
				href : 'http://farm3.staticflickr.com/2855/10040590373_2fcce3c834_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}, {
				href : 'http://farm8.staticflickr.com/7306/10040452974_ff8e35749a_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}, {
				href : 'http://farm6.staticflickr.com/5471/10040508276_2e2f8c34cf_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}, {
				href : 'http://farm4.staticflickr.com/3769/10040590053_0059e0bb30_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}, {
				href : 'http://farm3.staticflickr.com/2870/10040492645_597c010810_o.jpg',
				title : 'Diseño y Programación del sitio de Vajacases.com'
			}
		]);
    });
	
	$("#madmen").click(function() {
		$.fancybox.open([
			{
				href : 'http://farm8.staticflickr.com/7416/10040590873_5d39eaab2d_o.jpg',
				title : 'Programación del sitio de Madmen.com'
			}, {
				href : 'http://farm8.staticflickr.com/7307/10040590793_49e0c06acc_o.jpg',
				title : 'Programación del sitio de Madmen.com'
			}, {
				href : 'http://farm4.staticflickr.com/3781/10040493405_4c12f2c6b3_o.jpg',
				title : 'Programación del sitio de Madmen.com'
			}
		]);
    });

});