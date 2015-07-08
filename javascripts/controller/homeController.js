angular
	.module('app')
	.controller('homeController', ['$scope', 'friends', '$http', function($scope, friends, $http){
		$scope.title = "Home";
		$scope.friends = friends;
		$scope.items = ['home1', 'home2', 'home3'];
		$scope.selectedValue = 'home1';
		$scope.save = function(){
			$http.post('/api/friends', friends);
			alert(JSON.stringify($scope.friends));
		};
	}]);