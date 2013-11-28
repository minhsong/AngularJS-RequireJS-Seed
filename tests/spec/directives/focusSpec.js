define(["angular", "directives/focus", "angularMocks"], function (angular, focus) {
    describe('Focus Directive', function () {
        beforeEach(module('directives'));
        var directives = angular.module('directives', []);
        directives.directive('focus', focus);
        var elem;

        beforeEach(inject(function ($rootScope, $compile) {
            elem = $compile('<input type="text" data-focus>')($rootScope);
        }));

        afterEach(function () {
            elem = null;
        });

        it('Should have focus immediately', function () {
            expect(elem.hasClass('focus')).toBeTruthy();
        });

    });
});