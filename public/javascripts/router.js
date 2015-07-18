var bibleApp = angular.module('app',[
	'ui.router'
	]);

bibleApp.config(['$urlRouterProvider', 
				'$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url: '/?book&chapter',
		templateUrl: 'templates/home.html',
		controller : 'homeController',
		resolve:{
			bible: ['Bible', '$stateParams', function(Bible, $stateParams){
				return Bible.get($stateParams);
			}]
		}
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
	.state('restaurants',{
		url: '/restaurants',
		templateUrl: 'templates/restaurants.html',
		controller: 'restaurantsController',
		resolve:{
			restaurants: ['Restaurants', function(Restaurants){
				return Restaurants.get();
			}]
		}
	})
	.state('login',{
		url: '/login',
		templateUrl: 'templates/login.html'
	})
}])