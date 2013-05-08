define(function () {
	'use strict';
	
	function ExampleController($scope) {
		$scope.name = 'edgar';
	}

	ExampleController.$inject = ['$scope'];

	return ExampleController;
});