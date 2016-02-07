var userActionsModule = (function () {
	'use strict';

	// login
	function loginUser () {
		$(".login-button").off('click').on('click', function (e) {
			e.preventDefault();

			var $this = $(this),
				postData = $('#loginForm').serializeArray(),
				formURL = $('#loginForm').attr("action");

			requestsModule.loginUser({
				url: formURL,
				postData: postData,
				successCallback: function(data) {
					notifier.notifyForUserActions('success','Welcome, ' + data.user.username + ' !:)');
				},
				errorCallback: function() {
					notifier.notifyForUserActions('error','Wrong username or password. Please try again! :(');
				}
			});
		});
	}

	// register
	function registerUser () {
		$(".register-button").off('click').on('click', function (e) {
			e.preventDefault();

			var $this = $(this),
				postData = $('#registerForm').serializeArray(),
				formURL = $('#registerForm').attr("action");

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
		$('.add-comment-btn').off('click').on('click',function (e) {
			e.preventDefault();

			var $this = $(this),
				postData = $('#commentForm').serializeArray(),
				articleId = $('#commentForm').data('article-id'),
				formURL = $('#commentForm').attr("action"),
				commentPostDate,
				commentCounter = parseInt($('.post-title').text());

			requestsModule.postComment({
				articleId: articleId,
				content: postData[0].value,
				successCallback: function(data) {
					var commentContent = data.comment.content.trim(' '),
						newPostedCommentMarkup = '',
						userId = data.comment._creator;

					commentPostDate = moment(data.comment.date).format('MM-DD-YYYY');
					// get user by id -> the comment's author
					requestsModule.getUserById({
						userId: userId,
						successCallback: function(data){
							newPostedCommentMarkup = templates.singleComment({
								commentDate: commentPostDate,
								username: data.user.username,
								commentContent: commentContent,
								userImageUrl: data.user.userImageUrl
							});

							commentCounter += 1;
							$('.comments-container').append(newPostedCommentMarkup);
							$('.post-title').text(commentCounter + ' Comments');
							notifier.notifyForUserActions('success', 'Your comment was posted successfully! :)');
						},
						errorCallback: function() {
							notifier.notifyForUserActions('error', 'Wrong user data given! :(');
						}
					});
				},
				errorCallback: function(){
					notifier.notifyForUserActions('error', 'Your comment was not posted! :(');
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
