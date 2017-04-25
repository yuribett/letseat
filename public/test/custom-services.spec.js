describe('CustomServices', function () {

  beforeEach(module('letseat'));
  beforeEach(module('customServices'));
  
  let $httpBackend, userResource, restaurantResource, pollResource;

  beforeEach(inject(function (_$httpBackend_, _userResource_, _restaurantResource_, _pollResource_) {
    $httpBackend = _$httpBackend_;
    userResource = _userResource_;
    restaurantResource = _restaurantResource_;
    pollResource = _pollResource_;
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should resquest a list of users', function () {
    userResource.query();
    $httpBackend.when('GET', '/api/user')
      .respond(200, [{ _id: 1 , name: 'Tim Cook' }]);
    $httpBackend.flush();
    
  });

  it('should resquest a list of restaurants', function () {
    restaurantResource.query();
    $httpBackend.when('GET', '/api/restaurant')
      .respond(200, [{ _id: 1 , name: 'Meet lovers' }]);
    $httpBackend.flush();
  });

  it('should post a vote', function () {
    pollResource.save();
    $httpBackend.when('POST', '/api/poll',  { user: 1 , restaurant: 1 })
      .respond(201, { user: 1 , restaurant: 1 });
    $httpBackend.flush();
  });

});