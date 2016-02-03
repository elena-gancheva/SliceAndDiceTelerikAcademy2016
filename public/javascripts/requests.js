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
				alert(this.data + "," + this.url);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXhr.responseText );
				}
				alert('it didnt work');
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
				alert(this.data + "," + this.url);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if( typeof options.errorCallback === 'function' ) {
					options.errorCallback( jqXhr.responseText );
				}
			}
		});
	}

	return {
		registerUser: registerUser,
		loginUser: loginUser
	};

})();
