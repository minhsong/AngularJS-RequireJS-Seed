/**
 * Created by Edgar Martinez on 8/12/13.
 */
define(['angular',
    'controllers/exampleController',
    "angularMocks"],
    function (angular, exampleController) {
    describe('exampleController', function () {
        var $scope;
        var ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller(exampleController, {$scope: $scope});
        }));


        it("Should have a property value", function () {
            expect($scope.movie.name).toBe("Batman");
        });

        it("Should have another property", function () {
            expect(1).toBe(1);
        })
    })
});
