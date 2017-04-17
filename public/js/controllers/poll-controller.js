angular.module('letseat').controller('PollController', function ($scope, $http, $routeParams, restaurantResource, pollResource) {

    const userID = parseInt($routeParams.user);

    $scope.restaurants = [];
    $scope.winnerMsg = '';

    restaurantResource.get({user: $routeParams.user}, restaurants => {
		$scope.restaurants = restaurants;
        setWinnerMsg(restaurants);
	}, err => {
		console.log(erro);
	});

    /*
    $http.get("/api/restaurant/"+userID)
        .then((response) => {
            $scope.restaurants = response.data;
            setWinnerMsg(response.data);
        })
        .catch(err => console.log(err));
*/

    $scope.vote = (restaurant) => {
        const restaurantID = restaurant._id;
        
        pollResource.update({
            user: userID,
            restaurant: restaurantID
        }, () => {
            $scope.restaurants = response.data;
            setWinnerMsg(response.data);
        }, err => {
            console.log(err);
        });

        /*
        $http.put("/api/poll", {
            user: userID,
            restaurant: restaurantID
        })
        
            .then(response => {
                $scope.restaurants = response.data;
                setWinnerMsg(response.data);
            }).catch(err => console.log(err));
        */
    };

    function setWinnerMsg(list) {
        let clone = list.slice(0);
        clone.sort( (a, b) => { return (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0); });
        if(clone[0].score === 0){
            $scope.winnerMsg = 'No winners so far, start voting :)';
        } else if(clone[0].score === clone[1].score){
            $scope.winnerMsg = 'Oh no, we have a tie!'
        } else {
            $scope.winnerMsg = `Hooray! The winner so far is ${clone[0].name}!`;
        }
    }

});