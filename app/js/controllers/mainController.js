/**
 * Created by Edgar Martinez on 8/12/13.
 */
define(function () {
    function MainController($scope, galleryService) {
        $scope.uploadErrors = [];
        $scope.asyncMessage = [];
        $scope.progressWidth = {width: "100%"};
        $scope.queueFileCount = 0;
        $scope.galleryService = galleryService;

        $scope.something = "";
    }

    MainController.$inject = ['$scope', 'galleryService'];
    return MainController;
});