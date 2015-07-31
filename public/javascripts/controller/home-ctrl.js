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

	$scope.chapters = function(){
		return new Array(total);
	}

	$scope.books.selected = {bookName: book};
	$scope.updateSelectedBook = function(selectedBook){
		$window.location.href = '#/?book=' + selectedBook.bookName;
	}

	$scope.updateSelectedChapter = function(selectedChapter){
		$window.location.href = '#/?book=' + book + '&chapter=' + selectedChapter; 
	}
}]);