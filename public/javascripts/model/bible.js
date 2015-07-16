angular.module('app').factory('Bible', ['$http', function($http){
	return {
		get: function(params){
			var url = '/home?' + generateUrl(params)
			return $http.post(url).then(function(response){
				return response.data;
			});
		}
	}
}]);