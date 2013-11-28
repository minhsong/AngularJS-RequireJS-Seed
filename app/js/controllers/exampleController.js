/**
 * Created by Edgar Martinez on 11/28/13.
 */
define(function () {
    var ExampleController = function ($scope, galleryService, $routeParams, $timeout, exampleService){
        //all your controller functionality in here / logic

        $scope.movie = {name: "Batman"};
        $scope.exampleList = exampleService.get();
    };

    ExampleController.$inject = ["$scope", "galleryService", "$routeParams", "$timeout", "exampleService"];

    return ExampleController;
});