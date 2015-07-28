angular.module('app').controller('restaurantsController', ['$scope', 'restaurants', function($scope, restaurants){
		$scope.restaurants = restaurants;
	}]);