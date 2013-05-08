/**
 * Base Controller
 **/ 

define(['angular', 'controllers/homeController', 'controllers/exampleController'],
 	function (angular, HomeController, ExampleController) {
 		
 		var controllers = angular.module('controllers', ['services']);

 		controllers.controller('homeController', HomeController);
        controllers.controller('exampleController', ExampleController);

 		return controllers;
});