angular
	.module('app',[
	'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'templates/home.html',
			controller : 'homeController',
			resolve:{
				bible: ['Bible', function(Bible){
					console.log('bible', Bible.get());
					return Bible.get();
				}]
			}
			// resolve:{
			// 	friends: ['Friends', function(Friends){
			// 		return Friends.get();
			// 	}]
			// }
			// resolve: {
			// 	friends: ['$http', function($http){
			// 		return $http.get('/api/friends.json').then(function(response){
			// 			return response.data;
			// 		})
			// 	}]
			// }
		})
		.state('about',{
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutController'
		})
		.state('contact',{
			url: '/contact',
			templateUrl: 'templates/contact.html'
		})
	}])