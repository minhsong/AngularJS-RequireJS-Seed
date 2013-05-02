define(['app'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/path/to/templates.html'
            })
    }])
});