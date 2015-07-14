angular.module('app').factory('Bible', ['$http', function($http){
	return {
		get: function(){
			return $http.post('/home').then(function(response){
				return response.data;
			});
		}
	}
}]);