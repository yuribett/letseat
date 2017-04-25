describe('PollController', function() {
  
  beforeEach(module('letseat'));

  let $controller, $scope;

  beforeEach(inject(function(_$httpBackend_, _$controller_){
    $controller = _$controller_;
    $scope = {}
    controller = $controller('PollController', { $scope: $scope });
  }));

  describe('Winner message', function() {

    it('should inform there is a tie', function() {
      $scope.setWinnerMsg([{"_id":1,"name":"Meet lovers","score":2,"winner":false,"alreadyVotedByUser":false},{"_id":2,"name":"Mexican Fire","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":3,"name":"Super Burger","score":2,"winner":false,"alreadyVotedByUser":true},{"_id":4,"name":"Fit Food","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":5,"name":"All You Can Have","score":0,"winner":false,"alreadyVotedByUser":false},{"_id":6,"name":"Nice And Homy","score":0,"winner":false,"alreadyVotedByUser":false}])
      expect($scope.winnerMsg).toBe('Oh no, we have a tie!');
    });

    it('should inform there is a winner', function() {
      $scope.setWinnerMsg([{"_id":1,"name":"Meet lovers","score":1,"winner":false,"alreadyVotedByUser":false},{"_id":2,"name":"Mexican Fire","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":3,"name":"Super Burger","score":2,"winner":false,"alreadyVotedByUser":true},{"_id":4,"name":"Fit Food","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":5,"name":"All You Can Have","score":0,"winner":false,"alreadyVotedByUser":false},{"_id":6,"name":"Nice And Homy","score":0,"winner":false,"alreadyVotedByUser":false}])
      expect($scope.winnerMsg).toBe('Hooray! The winner so far is Super Burger!');
    });

    it('should inform there is no winner', function() {
      $scope.setWinnerMsg([{"_id":1,"name":"Meet lovers","score":0,"winner":false,"alreadyVotedByUser":false},{"_id":2,"name":"Mexican Fire","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":3,"name":"Super Burger","score":0,"winner":false,"alreadyVotedByUser":true},{"_id":4,"name":"Fit Food","score":0,"winner":true,"alreadyVotedByUser":false},{"_id":5,"name":"All You Can Have","score":0,"winner":false,"alreadyVotedByUser":false},{"_id":6,"name":"Nice And Homy","score":0,"winner":false,"alreadyVotedByUser":false}])
      expect($scope.winnerMsg).toBe('No winners so far, start voting :)');
    });

  });

});