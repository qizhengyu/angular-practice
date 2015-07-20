 var bibleApp = angular.module('app');

  /**********************************************************************
 * Login controller
 **********************************************************************/
bibleApp.controller('loginCtrl', function($scope, $rootScope, $http, $state) {
  // This object will be filled by the form
  $scope.user = {};

  // Register the login() function
  $scope.login = function(){
    $http.post('/login', {
      username: $scope.user.username,
      password: $scope.user.password,
    })
    .success(function(user){
      // No error: authentication OK
      console.log('Authentication successful!');
      $rootScope.message = 'Authentication successful!';
      // $location.url('/admin');
      $state.go('admin');
    })
    .error(function(){
      // Error: authentication failed
      console.log('Authentication failed!');
      $rootScope.message = 'Authentication failed.';
      // $location.url('/login');
      $state.go('login');
    });
  };
});