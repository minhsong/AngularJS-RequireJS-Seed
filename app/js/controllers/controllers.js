define(['angular', "controllers/mainController"],
 	function (angular, mainController) {
 		var controllers = angular.module('controllers', []);
        controllers.controller("mainController", mainController);
 		return controllers;
});