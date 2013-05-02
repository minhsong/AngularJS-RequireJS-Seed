define(['angular'], function (angular) {
    "use strict";

    //can inject $http
    return function () {
        return {
            get: function (appName) {
                return $.ajax({
                    url: 'index.php?option=com_social&task=.getConfig',
                    type: 'GET',
                    data: {
                        app: appName
                    },
                    dataType: 'JSON'
                });
            },
            save: function (formData) {
                return $.ajax({
                    url: '/administrator/index.php?option=com_social&task=.save',
                    type: 'POST',
                    dataType: 'JSON',
                    data: formData
                });
            }
        }
    };
    //service.$inject = ['$http'];
});

