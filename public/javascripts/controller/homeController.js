var bibleApp = angular.module('app');

bibleApp.controller('homeController', ['$scope', 'bible', function($scope, bible){
		$scope.title = "Home";
		$scope.bible = bible.bible;

		var chapter = parseInt(bible.bible[0].chapter);
		var book = bible.bible[0].bookName;
		var total = bible.total;
		$scope.prev = chapter > 1 ? '#/?book=' + book + '&chapter=' + (chapter - 1) : null;
		$scope.next = chapter < total ? '#/?book=' + book + '&chapter=' + (chapter + 1) : null;
	}]);