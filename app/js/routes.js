define(["app", "config"], function (app, config) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "js/partials/home.html"
        })
        .otherwise({
            redirectTo: '/'
        })
    }])
});