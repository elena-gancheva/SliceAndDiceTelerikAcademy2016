var notifier = (function () {
	'use strict';

	toastr.options = {
		"closeButton": false,
		"debug": false,
		 "newestOnTop": false,
		"progressBar": false,
		"positionClass": "toast-bottom-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};

	function notifyForUserActions(message, customMsg) {
		switch(message) {
			case 'success':
				return toastr.success(customMsg);
			case 'error':
				return toastr.error(customMsg);
			case 'info':
				return toastr.info(customMsg);
		}
	}

	return {
		notifyForUserActions: notifyForUserActions
	};

})();
