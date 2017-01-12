'use strict';

angular.module('viewService',['datePickerService']).service('ViewService', function(DatePickerService) {
	
	this.matchHeight = function(selector) {
		setTimeout(function(){
			$(selector).matchHeight();
		},50);
	};
	
	this.initDatePickers = function(selector) {
		setTimeout(function(){
			DatePickerService.createWithTime(selector);
		}, 500);
	};
	
});