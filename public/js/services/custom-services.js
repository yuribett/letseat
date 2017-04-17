angular.module('customServices', ['ngResource'])
	.factory('pollResource', function($resource) {

		return $resource('/api/poll/', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
    
    .factory('restaurantResource', function($resource) {
		return $resource('/api/restaurant/:user');
	})
    
    .factory('userResource', function($resource) {
		return $resource('/api/user/', null);
	});