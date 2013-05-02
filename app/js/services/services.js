/**
 * BaseService
 **/
 
define(['angular', 'services/configService', 'resource'],
 	function (angular, configService) {

		var services = angular.module('services', ['ngResource']);
 		services.service('configService', configService);
 		return services;
 });