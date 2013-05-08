define(['angular', 'mocks'], function () {
    "use strict";

    describe('ExampleController', function () {
        var baseScope;

        beforeEach(function () {
            module('controllers', function () {

            });

            inject(['$rootScope', '$controller',
                function($rootScope, $controller) {
                    baseScope = $rootScope.$new();
                    $controller('exampleController', {
                        $scope : baseScope
                    });
                }
            ]);
        });

        describe('Testing variables', function () {
            it('Scope should have a variable called name with a value of "edgar"', function () {
                expect(baseScope.name).toEqual('edgar');
            });
        });
    });
});