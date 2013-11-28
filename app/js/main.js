requirejs({
    "baseUrl": "js/",
    "paths": {
        "config": "config",
        "angular": "lib/angular/angular",
        "jquery": "lib/jquery/jquery",
        "ngResource": 'lib/angular/angular-resource',
        "domReady": "lib/require/domReady",
        "app": "app"
    },
    "shim": {
        "jquery": {"exports": "jquery"},
        "angular": {
            "deps": ["jquery"],
            "exports": "angular"
        },
        "ngResource": {
            "deps": ["angular"],
            exports: "ngResource"
        }
    },
    priority: [
        "angular"
    ],
    urlArgs: "v=0.1"
}, ["angular", "domReady", "ngResource", "jquery", "app", "config", "routes", "services/services", "directives/directives", "providers/providers",
    "filters/filters", "controllers/controllers", "animations/animations"], function (angular, domReady) {
    domReady(function () {
        return angular.bootstrap(document, ["myApp"]);
    });
});

