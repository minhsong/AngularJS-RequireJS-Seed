define(function () {
    return function (){
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, lElement, attrs){
               lElement.addClass("focus").focus();
            }

        }
    }
});