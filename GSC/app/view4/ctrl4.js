'use strict';

define([], function() {
	return ['$scope', function($scope) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage1 = 'hey this is ctrl4.js!';
		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});