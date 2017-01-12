'use strict';

angular.module('app').factory('errorInterceptor', function ($q, $rootScope) {
    return {
        request: function (config) {
        	$rootScope.responseStatus = 0;
            return config || $q.when(config);
        },
        
        requestError: function(request){
            return $q.reject(request);
        },
        
        response: function (response) {
        	$rootScope.responseStatus = response.status;
            return response || $q.when(response);
        },
        
        responseError: function (response) {
            $rootScope.responseStatus = response.status;
            return $q.reject(response);
        }
    };
});

angular.module('app').config(function ($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
    
    $routeProvider.
		when('/timeseries', {
			template: createGeneratorTemplate(config.models.timeseries)
		}).
		when('/realtime', {
			template: createGeneratorTemplate(config.models.realtime)
		}).
		when('/aggregate', {
			template: createGeneratorTemplate(config.models.aggregate)
		}).
		otherwise({
			redirectTo: '/timeseries'
		}); 
    
    function createGeneratorTemplate(modelUrl) {
    	var template = '<generator model-url="\'MODEL_URL\'"></generator>';
    	template = template.replace('MODEL_URL', modelUrl);
    	return template;
    }
});

