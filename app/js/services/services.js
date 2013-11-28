define(['angular',
    'services/galleryService',
    "services/exampleService"
],
 	function (angular, galleryService, exampleService) {
		var services = angular.module('services', ['ngResource']);
        services.factory("galleryService", galleryService);
        services.factory("exampleService", exampleService);
 		return services;
 });