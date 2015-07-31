'use strict';

/* jasmine specs for controllers go here */
describe('Home controllers', function() {

  describe('homeController', function(){

    beforeEach(module('app'));

    it('Default selected book should be "Genesis"', inject(function($controller) {
      var scope = {};
      var window = {};

      var bible = {bible: [{bookName: 'Genesis'}],
  					total: 36};
      var ctrl = $controller('homeController', {$scope:scope, bible: bible});

	  expect(scope.currentBook).toBe('Genesis');
    }));
  });
});
