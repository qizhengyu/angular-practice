angular.module('app').factory('Bible', ['$http', function($http){
	return {
		get: function(){
			return $http.post('/home').then(function(response){
				console.log('response.data', response.data);
				return response.data;
			});
		}
	}
}]);