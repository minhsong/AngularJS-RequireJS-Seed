define(['angular', 'services/galleryService'],
 	function (angular, galleryService) {
		var services = angular.module('services', ['ngResource']);
        services.factory("galleryService", galleryService);
 		return services;
 });