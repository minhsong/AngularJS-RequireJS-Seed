define(['angular',
    'directives/ngbkFocus',
    "directives/exampleDirective",
    "directives/testDirective"],
    function (angular, ngbkFocus, exampleDirective, testDirective){
        var directives = angular.module('directives', []);
        directives.directive('ngbkFocus', ngbkFocus);
        directives.directive("exampleDirective", exampleDirective);
        directives.directive("testDirective", testDirective);


        return directives;
    });