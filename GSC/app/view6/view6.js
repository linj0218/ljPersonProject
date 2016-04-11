'use strict';

define([
	'angular',
	'angularRoute',
	'components/version/version','ngDialog'
], function(angular) {
	angular.module('myApp.view6', ['ngRoute', 'myApp.version','ngDialog'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view6', {
				templateUrl: 'view6/view6.html',
				controller: 'View6Ctrl'
			});
		}])
		// We can load the controller only when needed from an external file
		.controller('View6Ctrl', ['$scope', '$injector','ngDialog', function($scope, $injector,ngDialog) {
			require(['view6/ctrl6'], function(ctrl6) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(ctrl6, this, {'$scope': $scope});
			});
		}]);
});