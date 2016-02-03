var menuModule = (function () {
	'use strict';

	function addEvents() {
		$('.home').off('click').on('click', function () {
			$('#body-container').html(templates.home());
			addEvents();
			startCarousel();
		});

		$('.portfolio-about').off('click').on('click', function () {
			$('#body-container').html(templates.recentposts());
			addEvents();
		});

		$('.comments').off('click').on('click', function () {
			$('#body-container').html(templates.comments());
			addEvents();
		});

		$('.zoom-icon').on('click', function() {
			var $this = $(this),
				$currentImageToBeViewed = $this.siblings('.project-image'),
				$popupContainer = $this.siblings('.bigger-view');

			$popupContainer.removeClass('hidden');
		});
	}

	function startCarousel() {
		var defaultCss = {
			width: 240,
			height: 150,
			marginTop: 50,
			marginRight: 10,
			marginLeft: 10,
			opacity: 0.4
		};

		var selectedCss = {
			width: 500,
			height: 434,
			marginTop: -30,
			marginRight: -105,
			marginLeft: -105,
			opacity: 1
		};

		var aniOpts = {
			queue: false,
			duration: 1000,
			easing: 'elastic'
		};

		var $car = $('#carousel');

		for ( var a = 0; a < 3; a++ ) {
			$car.prepend( '<div />' );
		}

		for ( var b = 0; a < 3; b++ ) {
			$car.append( '<div />' );
		}

		$car.find('img').css('zIndex', 1).css( defaultCss );
		$car.find('img').eq(0).css('zIndex', 2).css( selectedCss );

		$car.carouFredSel({
			circular: true,
			infinite: true,
			width: '100%',
			height: 305,
			items: 7,
			prev: '#prev',
			next: '#next',
			auto: true,
			scroll: {
				items: 1,
				duration: 1000,
				easing: 'elastic',
				onBefore: function( data ) {
					data.items.old.eq(3).find('img').css('zIndex', 1).animate( defaultCss, aniOpts );
					data.items.visible.eq(3).find('img').css('zIndex', 2).animate( selectedCss, aniOpts );
				}
			}
		});
	}

	return {
		addEvents: addEvents,
		startCarousel: startCarousel
	};

})();
