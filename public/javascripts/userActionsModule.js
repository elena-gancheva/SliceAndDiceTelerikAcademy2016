var userActionsModule = (function () {
	'use strict';

	// login
	function loginUser () {
		$("#loginForm").submit(function (e) {
			e.preventDefault();

			var $this = $(this),
				postData = $this.serializeArray(),
				formURL = $this.attr("action");

			requestsModule.loginUser({
				url: formURL,
				postData: postData,
				successCallback: function(data) {
					notifier.notifyForUserActions('success','You have logged in successfully! :)');
				},
				errorCallback: function() {
					notifier.notifyForUserActions('error','Wrong username or password. Please try again! :(');
				}
			});
		});
	}

	// register
	function registerUser () {
		$("#registerForm").submit(function (e) {
			e.preventDefault();

			var $this = $(this),
				postData = $this.serializeArray(),
				formURL = $this.attr("action");

			requestsModule.registerUser({
				url: formURL,
				postData: postData,
				successCallback: function(data) {
					notifier.notifyForUserActions('success','Registration is successfully made :)');
				},
				errorCallback: function() {
					notifier.notifyForUserActions('error','Error while registration. Please try again! :(');
				}
			});
		});
	}

	// comment
	function postComment () {
		$('.add-comment-btn').off('click').on('click',function (e){
			e.preventDefault();

			var $this = $(this),
				postData = $('#commentForm').serializeArray(),
				articleId = $('#commentForm').data('article-id'),
				formURL = $('#commentForm').attr("action");

			$.ajax({
				url: 'blog/postComment',
				type: 'POST',
				crossDomain: true,
				xhrFields: {
					withCredentials: true
				},
				data: {
					articleId: articleId,
					content: postData[0].value
				},
				success: function (data, textStatus, jqXHR) {
					var commentContent = data.comment.content.trim(' '),
						newPostedCommentMarkup = '';

					newPostedCommentMarkup = '<div class="row">'
						+ '<div class="col-md-2 user-comments">'
						+ '	<div class="project user-image-container">'
								+ '<img src="images/user-charlie.jpg" class="user-image img-responsive" alt="Make A Wish"/>'
							+ '</div>'
							+ '<span class="comment-date ">12-13-2011</span>'
						+ '</div>'
					+ '<div class="col-md-10 user-comment-balloon">'
						+ '<div class="comment-container">'
							+ '	<div class="comment-meta commentmetadata">'
									+ '<span class="fn">Chalie Sheen</span>'
									+ ' says:'
								+ '</div>'
							+ '<div class="comment-content">'
									+ '<p>'
										+ commentContent
									+ '</p>'
									+ '<a href="#" class="readmore more-comments pull-right"><span>Read More</span></a>'
								+ '</div>'
							+ '</div>'
						+ '<div class="comment-arrow hidden-xs hidden-sm"></div>'
						+ '</div>'
					+ '</div>';

					$('.comments-container').append(newPostedCommentMarkup);

					notifier.notifyForUserActions('success', 'Your comment posted successfully!');
					$(document).click();
					console.log(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					alert('it didnt work');
				}
			});
		});
	}

	return {
		loginUser: loginUser,
		postComment: postComment,
		registerUser: registerUser
	};

})();
