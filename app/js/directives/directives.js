define(['angular', 'directives/saveConfig'],
    function (angular, connect, instagramImport, saveConfig) {
        var directives = angular.module('directives', []);
        directives.directive('saveConfig', saveConfig);
        return directives;
    });