var bibleApp = angular.module('app');

bibleApp.controller('SignInController', ['$scope', function($scope){
		$scope.signedIn = false;

		$scope.processAuth = function(authResult) {
        // Do a check if authentication has been successful.
	        if(authResult['access_token']) {
	            // Successful sign in.
	            $scope.signedIn = true;
	 			console.log('signed in');
	            //     ...
	            // Do some work [1].
	            //     ...
	        } else if(authResult['error']) {
	            // Error while signing in.
	            $scope.signedIn = false;
	 
	            // Report error.
	        }
	    };

	    $scope.signInCallback = function(authResult) {
	        $scope.$apply(function() {
	            $scope.processAuth(authResult);
	        });
	    };
	 
	    // Render the sign in button.
	    $scope.renderSignInButton = function() {
	        gapi.signin.render('signInButton',
	            {
	                'callback': $scope.signInCallback, // Function handling the callback.
	                'clientid': '1053287787299-6nfvjpqerbdbd5hnecpje2206rp96bgq.apps.googleusercontent.com', // CLIENT_ID from developer console which has been explained earlier.
	                'requestvisibleactions': 'http://schemas.google.com/AddActivity', // Visible actions, scope and cookie policy wont be described now,
	                                                                                  // as their explanation is available in Google+ API Documentation.
	                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
	                'cookiepolicy': 'single_host_origin'
	            }
	        );
	    }
	 
	    // Start function in this example only renders the sign in button.
	    $scope.start = function() {
	        $scope.renderSignInButton();
	    };
	 
	    // Call start function on load.
	    $scope.start();
}]);