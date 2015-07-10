angular.module('app').controller('homeController', ['$scope', 'bible', function($scope, bible){
		$scope.title = "Home";
		$scope.bible = bible;
	}]);


// angular
// 	.module('app')
// 	.controller('homeController', ['$scope', 'friends', function($scope, friends, $http){
// 		$scope.title = "Home";
// 		$scope.friends = friends;
// 		$scope.items = ['home1', 'home2', 'home3'];
// 		$scope.selectedValue = 'home1';
// 		$scope.save = function(){
// 			alert(JSON.stringify($scope.friends));
// 		};
// 	}]);