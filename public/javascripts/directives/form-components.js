var webapp = angular.module('app.directive', []);

webapp.directive('formTextbox', ['$interval', 'dateFilter', function($interval, dateFilter){
	function link(scope, element, attrs){
		var format;
		var timeoutId;

		function updateTime(){
			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.formTextbox, function(value){
			format = value;
			updateTime();
		});

		element.on('$destroy', function(){
			$interval.cancel(timeoutId);
		})

		timeoutId = $interval(function(){
			updateTime();
		}, 1000);
	}

	return{
		link: link
	};
}]);