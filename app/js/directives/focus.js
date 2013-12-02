define(function () {
    return function (){
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, lElement, attrs){
               lElement.addClass('focus').focus();
            }

        }
    }
});