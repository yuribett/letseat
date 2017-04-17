angular.module('letseat').controller('IdentificationController', function($scope, $http, userResource) {
	
	$scope.users = [];

    userResource.query(users => {
		$scope.users = users;
	}, err => {
		console.log(erro);
	});

});