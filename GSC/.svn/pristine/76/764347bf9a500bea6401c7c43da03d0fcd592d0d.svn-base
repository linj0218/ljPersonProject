'use strict';

define([
	'angular',
	'angularRoute',
	'components/version/version'
], function(angular) {
	angular.module('myApp.view3', ['ngRoute', 'myApp.version'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view3', {
			templateUrl: 'view3/view3.html',
			controller: 'View3Ctrl'
		});
	}])
	// We can load the controller only when needed from an external file
	.controller('View3Ctrl', ['$scope', '$injector', function($scope, $injector) {
		require(['view3/ctrl3'], function(ctrl3) {
			// injector method takes an array of modules as the first argument
			// if you want your controller to be able to use components from
			// any of your other modules, make sure you include it together with 'ng'
			// Furthermore we need to pass on the $scope as it's unique to this controller
			$injector.invoke(ctrl3, this, {'$scope': $scope});
		});
	}]);
});