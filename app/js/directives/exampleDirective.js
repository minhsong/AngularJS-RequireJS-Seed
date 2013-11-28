/**
 * Created by Edgar Martinez on 11/28/13.
 */
define(['jquery'],function () {
    return function () {
        return {
            restrict: 'A',
            replace: true,
            template: '<div>Hello World</div>',
            link: function (scope, lElement, attrs){
                 lElement.on('click', function () {
                     console.log("hello world has been clicked");
                 })
            }
        }
    }
});