define(['angular', 'animations/viewEnterFade'],
    function (angular, viewEnterFade) {
        var animations = angular.module('animations', []);
        animations.animation('view-enter-fade', viewEnterFade);
        return animations;
    });