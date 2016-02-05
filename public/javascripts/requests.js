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
				// alert(this.data + "," + this.url);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
				}
				// alert('it didnt work');
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
				// alert(this.data + "," + this.url);
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
				articleId: "56b3cd01a42a73801bfe4764"
			},
			success: function (data, textStatus, jqXHR) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXHR.responseText );
					alert('it didnt work');
				}
			}
		});
	}

	function postComment (options) {
		$.ajax({
			url: 'blog/postComment',
			type: "POST",
			crossDomain: true,
			data: options.postData,
			success: function (data) {
				if( typeof options.successCallback === 'function' ) {
					options.successCallback( data );
				}
				// alert(this.data + "," + this.url);
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
		postComment: postComment
	};

})();
