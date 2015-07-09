angular.module('app').factory('Restaurants', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/restaurants').then(function(response){
				console.log('restaurants', response.data);
				return response.data;
			});
		}		
	}
}]);