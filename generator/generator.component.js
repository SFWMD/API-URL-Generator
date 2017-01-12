'use strict';

angular.module('generator').component('generator', {
	
	templateUrl: 'generator/generator.html',
	
	bindings: {
		modelUrl: '<'
	},
	
	controller: function GeneratorController($scope, $http, ViewService, UrlGenerator) {
		$scope.apiModel = {};
		
		$http.get(this.modelUrl).then(
			function success(response) {
				$scope.apiModel = response.data;
				ViewService.matchHeight('.argument');
				ViewService.initDatePickers('.date-picker');
			}
		);
		
		$scope.openInNewWindow = function(url) {
			window.open(url, "");
		};
		
		$scope.$watch('apiModel', function(newValue, oldValue) {
			if(newValue.arguments) {
				var modelCopy = copyModel(newValue);
				$scope.generatedUrl = UrlGenerator.generate(modelCopy);
			}
		}, true);
		
		function copyModel(model) {
			return JSON.parse(JSON.stringify(model));
		};

	}
});