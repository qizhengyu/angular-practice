angular
	.module('app')
	.controller('aboutController', ['$scope', function($scope){
		$scope.title = "About";
		$scope.items = ['About1', 'About2', 'About3']
	}]);