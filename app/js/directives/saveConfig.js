define(function () {
    return function () {
        return {
            restrict: 'C',
            link: function (scope, lElement, attrs) {
                lElement.click(function () {
                    console.log('the element with the class of save-config has been clicked');
                });
            }
        }
    }
});