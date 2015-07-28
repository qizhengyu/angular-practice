var webapp = angular.module('app.directive');

webapp.directive('gridTable', [function(){
	return{
		templateUrl: '../templates/grid.html'
	};
}]);