var bibleApp = angular.module('app',[
	'ui.router'
	]);

bibleApp.config(['$urlRouterProvider', 
				'$stateProvider',
				'$httpProvider',
				'$locationProvider',
				function($urlRouterProvider, $stateProvider, $httpProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');


  	//================================================
    // Check if the user is connected
    //================================================
	var checkLoggedin = function($q, $timeout, $http, $location, $rootScope, $state){
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user){
      	console.log('user....', user);
        // Authenticated
        if (user !== '0'){
        	console.log('user Authenticated');
        	 /*$timeout(deferred.resolve, 0);*/
          deferred.resolve();
        }
         

        // Not Authenticated
        else {
        	console.log('you need to login');
          $rootScope.message = 'You need to log in.';
          //$timeout(function(){deferred.reject();}, 0);
          deferred.reject();
          // console.log('$location', $location.url('/login'));
          // $location.url('/login');
          $state.go('login');
        }
      });

      return deferred.promise;
    };
    //================================================

	//================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        response: function(response) {
          // do something on success
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            // $location.url('/login');
        $state.go('login');
          return $q.reject(response);
        }
      };
    });
    //================================================





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
	.state('admin', {
		url: '/admin',
        templateUrl: 'templates/admin.html',
        controller: 'AdminCtrl',
        resolve: {
          loggedin: checkLoggedin
        }
      })
	.state('login',{
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
}])
.run(function($rootScope, $http){
    $rootScope.message = '';

    // Logout function is available in any pages
    $rootScope.logout = function(){
      $rootScope.message = 'Logged out.';
      $http.post('/logout');
    };
  });
