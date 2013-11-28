define(['angular', 'directives/focus'],
    function (angular, ngbkFocus){
        var directives = angular.module('directives', []);
        directives.directive('ngbkFocus', ngbkFocus);
        return directives;
    });