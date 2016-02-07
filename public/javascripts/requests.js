var requestsModule = (function () {
	'use strict';

	function registerUser (options) {
		$.ajax({
			url: options.url,
			type: "POST",
			crossDomain: true,
			data: options.postData,
			success: function (data) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
			}
		});
	}

	function loginUser (options) {
		$.ajax({
			url: options.url,
			type: "POST",
			crossDomain: true,
			data: options.postData,
			success: function (data) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
			}
		});
	}

	function getArticleById (options) {
		$.ajax({
			url: 'blog/getArticle',
			type: 'POST',
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			data: {
				articleId: "56b79459f651374c10097472"
			},
			success: function (data, textStatus, jqXHR) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
			}
		});
	}

	function getUserById (options) {
		$.ajax({
			url: 'blog/getUserById',
			type: 'POST',
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			data: {
				userId: options.userId
			},
			success: function(data) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
			}
		});
	}

	function postComment (options) {
		$.ajax({
			url: 'blog/postComment',
			type: "POST",
			crossDomain: true,
			data: {
				articleId: options.articleId,
				content: options.content
			},
			success: function (data) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
			}
		});
	}

	return {
		registerUser: registerUser,
		loginUser: loginUser,
		getArticleById: getArticleById,
		getUserById: getUserById,
		postComment: postComment
	};

})();
