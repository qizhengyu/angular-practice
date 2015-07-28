var webapp = angular.module('app');

webapp.controller('ContactController', ['$scope', '$window', function($scope, $window){
	
	$scope.reset = function(){
		$window.location.href = '/';
	}

	$scope.update = function(user){
		
	}	
}]);