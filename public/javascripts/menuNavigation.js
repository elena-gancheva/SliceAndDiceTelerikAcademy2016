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
					var exsistingComments = data.article.comments,
						exsistingCommentsCount = exsistingComments.length,
						articleTitle = data.article.title,
						articleContent = data.article.content,
						createdArticleId = data.article._id;

					$('.post-title-content').text(articleContent);
					$('.post-title-link').text(articleTitle);
					$('.category-title').text(articleTitle);
					$('.current-blog-section').text(articleTitle);
					$('.weekly-category-titile').text(articleTitle);
					$('#commentForm').data('article-id', createdArticleId);

					requestsModule.getUserById({
						userId: data.article._creator,
						successCallback: function(data) {
							var postCreatorUsername = data.user.username;

							$('.post-creator').text(postCreatorUsername);
						}
					});

					if ( exsistingCommentsCount === 0 ) {
						$('.post-title').text(exsistingCommentsCount + ' Comments');
					} else if ( exsistingCommentsCount === 1 ) {
						$('.post-title').text(exsistingCommentsCount + ' Comment');
					} else {
						$('.post-title').text(exsistingCommentsCount + ' Comments');
					}

					exsistingComments.forEach(function(comment) {
						requestsModule.getUserById({
							userId: comment._creator,
							successCallback: function(data) {
								var singleCommentMarkup = templates.singleComment({
									commentId: comment._id,
									commentDate: moment(comment.date).format('MM-DD-YYYY'),
									username: data.user.username,
									commentContent: comment.content.trim(' '),
									userImageUrl: data.user.userImageUrl
								});
								$('.comments-container').append(singleCommentMarkup);
							}
						});
					});

					addEvents();
					userActionsModule.postComment();
				},
				errorCallback: function(data) {

				}
			});
		});

		// $('.reply-button').off('click').on('click', function (){
		// 	var $this = $(this),
		// 		$repliedComment = $this.parent('.user-comment-row');

		// 	$('')
		// });

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
