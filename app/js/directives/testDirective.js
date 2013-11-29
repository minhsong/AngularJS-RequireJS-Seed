define(function () {
    return function (){
        return {
            restrict: 'A',
            replace: false,
            template:'<p>hello world</p>',
            link: function (scope, lElement, attrs){

            }

        }
    }
});