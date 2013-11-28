/**
 * Created by Edgar Martinez on 11/28/13.
 */
define(function () {
    var ExampleController = function ($scope){
        //all your controller functionality in here / logic

        $scope.movie = {name: "Batman"};
    };

    ExampleController.$inject = ["$scope"];

    return ExampleController;
});