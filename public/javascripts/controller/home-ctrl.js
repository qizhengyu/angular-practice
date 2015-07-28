var webapp = angular.module('app');

webapp.controller('homeController', ['$scope', '$window', 'bible', function($scope, $window, bible){
	$scope.title = "Home";
	$scope.bible = bible.bible;

	var chapter = parseInt(bible.bible[0].chapter);
	var book = bible.bible[0].bookName;
	var total = bible.total;
	$scope.prev = chapter > 1 ? '#/?book=' + book + '&chapter=' + (chapter - 1) : null;
	$scope.next = chapter < total ? '#/?book=' + book + '&chapter=' + (chapter + 1) : null;

	$scope.currentBook = book;
	$scope.books = app.books;
	// $scope.update = function(bookName){
	// 	console.log('changed', bookName);
	// 	$window.location.href = '/?book=' + bookName;
	// }

	$scope.$watch('selectedBook', function(newVal, oldVal){
		if(newVal !== oldVal){
			$window.location.href = '#/?book=' + newVal;
		}
	    // console.log(newVal, oldVal);
	  },true);
}]);