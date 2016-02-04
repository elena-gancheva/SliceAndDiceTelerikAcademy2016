var userActionsModule = (function () {
	'use strict';

	function addUserActionsEvents() {
		$('.test-button-dude').on('click', function () {
			$.ajax({
				url: 'blog/postArticle',
				type: 'POST',
				crossDomain: true,
				xhrFields: {
					withCredentials: true
				},
				data: {title: 'Yordan e gospodar!', content: 'Top kek.'},
				success: function (data, textStatus, jqXHR) {
					//data: return data from server`    1
					console.log(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					//if fails
					alert('it didnt work');
				}
			});
		});

		$('.test-button-dude2').on('click', function () {
			$.ajax({
				url: 'blog/getArticle',
				type: 'POST',
				crossDomain: true,
				xhrFields: {
					withCredentials: true
				},
				data: {articleId: "56a3e4a3b4ba74e8042c79c2"},
				success: function (data, textStatus, jqXHR) {
					//data: return data from server
					console.log(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					//if fails
					alert('it didnt work');
				}
			});
		});

		$('.test-button-dude3').on('click', function () {
			$.ajax({
				url: 'blog/postComment',
				type: 'POST',
				crossDomain: true,
				xhrFields: {
					withCredentials: true
				},
				data: {articleId: "56a3e4a3b4ba74e8042c79c2", content: 'ibaaah ta u zvqra ue'},
				success: function (data, textStatus, jqXHR) {
					//data: return data from server
					console.log(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					//if fails
					alert('it didnt work');
				}
			});
		});

		// login request
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
					$('#modalLoginForm').hide();
					$('.modal-backdrop.in').hide();

				},
				errorCallback: function() {
					notifier.notifyForUserActions('error','Wrong username or password. Please try again! :(');
				}
			});
		});

		// register request
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
					$('#modalRegisterForm').hide();
					$('.modal-backdrop.in').hide();
				},
				errorCallback: function() {
					notifier.notifyForUserActions('error','Error while registration. Please try again! :(');
				}
			});
		});

		// comment
		$('#commentForm').submit(function (e){
			e.preventDefault();

			var $this = $(this);
		});
	}

	return {
		addUserActionsEvents: addUserActionsEvents
	};

})();
