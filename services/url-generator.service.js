'use strict';

angular.module('urlGenerator', []).service('UrlGenerator', function() {
	this.generate = function(model) {
		var url = model.baseUrl + '?';
		var args = model.arguments.slice();

		for (var i = 0; i < args.length; i++) {
			var argument = args[i];
			if (argument.value) {
				
				if(argument.type == 'datetime') {
					var value = argument.value;
					var datetimeFormat = argument.datetimeFormat;
					argument.value = convertDatetime(value, datetimeFormat);
				}
				
				if(!url.endsWith('?')) {
					url += '&';
				}
				
				url += createParameter(argument);
			}
		}
		return url;
	};
	
	function convertDatetime(datetime, targetFormat) {
		var date = moment(datetime, config.dateTimeInputFormat);
		return date.format(targetFormat);
	}

	function createParameter(argument) {
		var param = argument.name;
		param += "=";
		param += argument.value;
		return param;
	};
	
	if (typeof String.prototype.endsWith !== 'function') {
	    String.prototype.endsWith = function(suffix) {
	        return this.indexOf(suffix, this.length - suffix.length) !== -1;
	    };
	}
});