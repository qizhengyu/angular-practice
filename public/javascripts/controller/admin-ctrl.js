var webapp = angular.module('app');

/**********************************************************************
 * Admin controller
 **********************************************************************/
webapp.controller('AdminCtrl', function($scope, $http) {
  // List of users got from the server
  $scope.users = [];

  // Fill the array to display it in the page
  $http.get('/users').success(function(users){
  	console.log('successfuly get users', users);
    for (var i in users)
      $scope.users.push(users[i]);
  });
});