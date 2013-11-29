define(['angular', 'directives/testDirective', "angularMocks"], function (angular, testDirective) {
    describe("Test Directive", function () {

        var directives;
        var elem;
        var $rootScope;
        var $compile;
        var directiveTemplate = '<div data-test-directive></div>';

        beforeEach(module('directives'));
        directives = angular.module('directives', []);
        directives.directive("testDirective", testDirective);

        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        }));

        it("Should create template element", function () {
            var $scope = $rootScope.$new();
            elem = $compile(directiveTemplate)($scope);
            expect(elem.html()).toContain('hello world');
        });

        afterEach(function () {
            elem = null;
        });
    })
});