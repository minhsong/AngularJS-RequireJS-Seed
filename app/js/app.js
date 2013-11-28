define(['angular', 'services/services', 'directives/directives', 'providers/providers',
    'filters/filters', 'controllers/controllers', 'animations/animations'], function (angular) {
    'use strict';

    return angular.module('myApp', [
        'services',
        'directives',
        'providers',
        'filters',
        'controllers',
        'animations'
    ]);
});