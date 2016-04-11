'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'view3/view3',
	'view4/view4',
	'view5/view5',
	'view6/view6'
], function(angular, angularRoute) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.view1',
		'myApp.view2',
		'myApp.view3',
		'myApp.view4',
		'myApp.view5',
		'myApp.view6'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view3'});
	}]);
});

