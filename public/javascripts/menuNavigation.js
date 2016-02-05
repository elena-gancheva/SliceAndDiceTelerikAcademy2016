var menuModule = (function () {
	'use strict';

	function addEvents() {
		$('.home').off('click').on('click', function () {
			$('#body-container').html(templates.home());

			addEvents();
		});

		$('.breadcrumb-home').off('click').on('click', function () {
			$('#body-container').html(templates.home());

			addEvents();
		});

		$('.logo-img').off('click').on('click', function () {
			$('#body-container').html(templates.home());

			addEvents();
		});

		$('.recentposts').off('click').on('click', function () {
			$('#body-container').html(templates.recentposts());
			addEvents();
		});

		$('.comments').off('click').on('click', function () {
			$('#body-container').html(templates.comments());

			requestsModule.getArticleById({
				successCallback: function(data) {
					$('.post-title-content').text(data.article.content);
					$('.post-title-link').text(data.article.title);
					$('.category-title').text(data.article.title);
					$('.current-blog-section').text(data.article.title);
					$('.weekly-category-titile').text(data.article.title);
					$('#commentForm').data('article-id', data.article._id);

					addEvents();
					userActionsModule.postComment();
				},
				errorCallback: function(data) {

				}
			});
		});

		$('.features').off('click').on('click', function () {
			$('#body-container').html(templates.portfolio());

			addEvents();
		});

		$('.active-img').hover(function () {
			var $this = $(this),
				$overlay = $this.siblings('.overlay'),
				$overlayTitle = $overlay.children('.active-img-title');

			$overlay.removeClass('hidden');
			$('.active-img-title').removeClass('hidden');
			$('.additional').removeClass('hidden');

		}, function () {
			var $this = $(this),
				$overlay = $this.siblings('.overlay'),
				$overlayTitle = $overlay.children('.active-img-title');

			$overlay.addClass('hidden');
			$('.active-img-title').addClass('hidden');
			$('.additional').addClass('hidden');
		});

		$('.zoom-icon').off('click').on('click', function() {
			var $this = $(this),
				$currentImageToBeViewed = $this.siblings('.project-image'),
				$popupContainer = $this.siblings('.bigger-view');

			$popupContainer.removeClass('hidden');

			addEvents();
		});

		$('.leave-comment').off('click').on('click', function () {
			$('.leave-comment-modal').removeClass('hidden');

			addEvents();
		});
	}


	return {
		addEvents: addEvents
	};

})();
