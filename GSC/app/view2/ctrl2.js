'use strict';

define([
	'components/config/config'], function(config) {
	return ['$scope','ngDialog', function($scope,ngDialog) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is ctrl2.js!';
		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor

		$scope.clickToAddress = function (address) {
			ngDialog.open({ template: 'view2/test.html',//模式对话框内容为test.html
				className: 'ngdialog-theme-plain',
			});
		};

		$scope.$apply();

	}];

});