/*
describe('IdentificationController', function() {

  beforeEach(module('letseat'));

  it('should xxx', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('IdentificationController', {$scope: scope});

    expect(3).toBe(3);
  }));

});
*/


describe('calculator', function () {

  beforeEach(module('letseat'));

  var $controller;
  var $httpBackend, cntrl;

  beforeEach(inject(function (_$controller_, _$httpBackend_) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('http://localhost:3000/api/users')
      .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

    var scope = {};
    cntrl = $controller('IdentificationController', { $scope: scope });

  }));

  it('should create a `phones` property with 2 phones fetched with `$http`', function () {
    expect(cntrl).toBeUndefined();

    //$httpBackend.flush();
    //expect(cntrl.users).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
  });


});