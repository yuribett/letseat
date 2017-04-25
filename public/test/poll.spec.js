describe('PollController', function() {

  beforeEach(module('letseat'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PollController', {$scope: scope});

    scope.setWinnerMsg([{"_id":1,"name":"Meet lovers","score":1,"winner":false,"alreadyVotedByUser":false},{"_id":2,"name":"Mexican Fire","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":3,"name":"Super Burger","score":2,"winner":false,"alreadyVotedByUser":true},{"_id":4,"name":"Fit Food","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":5,"name":"All You Can Have","score":0,"winner":false,"alreadyVotedByUser":false},{"_id":6,"name":"Nice And Homy","score":0,"winner":false,"alreadyVotedByUser":false}])

    expect(scope.winnerMsg).toBe('Oh no, we have a tie!');
  }));

});