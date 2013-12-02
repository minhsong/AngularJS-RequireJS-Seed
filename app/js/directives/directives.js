define(['angular',
    'directives/focus',
    "directives/exampleDirective"],
    function (angular, ngbkFocus, exampleDirective){
        var directives = angular.module('directives', []);
        directives.directive('ngbkFocus', ngbkFocus);
        directives.directive("exampleDirective", exampleDirective);


        return directives;
    });