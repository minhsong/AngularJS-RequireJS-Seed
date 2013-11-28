define(['angular',
    "controllers/mainController",
    "controllers/exampleController"],
 	function (angular, mainController, exampleController) {
 		var controllers = angular.module('controllers', []);
        controllers.controller("mainController", mainController);
        controllers.controller("exampleController", exampleController);
 		return controllers;
});