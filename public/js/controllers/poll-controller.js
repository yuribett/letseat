angular.module('letseat').controller('PollController', function ($scope, $http, $routeParams, restaurantResource, pollResource) {

    const userID = parseInt($routeParams.user);

    $scope.restaurants = [];
    $scope.winnerMsg = '';
    $scope.lastVote = {};
    refreshRestaurants();

    $scope.vote = (restaurant) => {
        const restaurantID = restaurant._id;
        
        pollResource.save({
            user: userID,
            restaurant: restaurantID
        }, vote => {
            $scope.lastVote = vote;
            refreshRestaurants();
        }, err => {
            console.log(err);
        });

    };

    function refreshRestaurants() {
        restaurantResource.query({user: $routeParams.user}, restaurants => {
            $scope.restaurants = restaurants;
            $scope.setWinnerMsg(restaurants);
        }, err => {
            console.log(err);
        });
    }

    $scope.setWinnerMsg = (list) => {
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