define(function () {
    function MainController($scope) {
        $scope.uploadErrors = [];
        $scope.asyncMessage = [];
        $scope.progressWidth = {width: "100%"};
        $scope.queueFileCount = 0;

        $scope.something = "";
        $scope.yourName = 'Edgar';

    }

    MainController.$inject = ['$scope'];
    return MainController;
});