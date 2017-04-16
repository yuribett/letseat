angular.module('letseat', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/identification', {
			templateUrl: 'partials/identification.html',
			controller: 'IdentificationController'
		});

		$routeProvider.when('/poll/:user', {
			templateUrl: 'partials/poll.html',
			controller: 'PollController'
		});

		$routeProvider.otherwise({ redirectTo: '/identification' });

	});