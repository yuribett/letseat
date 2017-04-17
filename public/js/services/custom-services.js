angular.module('customServices', ['ngResource'])
	.factory('pollResource', function($resource) {
		return $resource('/api/poll/');
	})
    
  .factory('restaurantResource', function($resource) {
		return $resource('/api/restaurant/:user');
	})
    
  .factory('userResource', function($resource) {
		return $resource('/api/user/');
	});