'use strict';

define([], function() {
	return ['$scope','ngDialog', function($scope,ngDialog) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage1 = 'hey this is ctrl6.js!';
		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor

		$scope.clickToAddress = function () {
			ngDialog.open({ template: 'view6/test.html',//模式对话框内容为test.html
				className: 'ngdialog-theme-plain',
			});
		};

		$scope.$apply();
	}];
});