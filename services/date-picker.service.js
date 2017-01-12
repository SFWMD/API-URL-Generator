'use strict';

angular.module('datePickerService', []).service('DatePickerService', function() {
	

	// Initializes the selector as a datepicker object with UI
	// components for selecting time
	this.createWithTime = function(selector) {
		flatpickr(selector, {
			enableTime: true,
			dateFormat: 'm/d/Y H:i',
			maxDate: new Date()
		});
	};
});