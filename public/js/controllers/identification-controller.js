angular.module('letseat').controller('IdentificationController', function($scope, $http) {
	
	$scope.users = [];

    $http.get("/api/user")
        .then(function(response) {
            $scope.users = response.data;
        });

});