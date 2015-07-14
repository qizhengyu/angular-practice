var bibleApp = angular.module('app');

bibleApp.controller('homeController', ['$scope', 'bible', function($scope, bible){
		$scope.title = "Home";
		$scope.bible = bible;
	}]);