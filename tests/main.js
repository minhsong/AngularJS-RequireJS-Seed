requirejs({
    "baseUrl": "/base/app/js",
    "paths": {
        "config": "config",
        "angular": "lib/angular/angular",
        "angularMocks": "lib/angular/angular-mocks",
        "angularResource": "lib/angular/angular-resource",
        "jquery": "lib/jquery/jquery",
        "domReady": "lib/require/domReady",
        "unitTests": "../../tests/spec",
        "mocks": "../../tests/mocks"
    },
    "shim": {
        "jQuery": {"exports": "jquery"},
        "angular": {
            "deps" : ["jquery"],
            "exports": "angular"
        },
        "angularResource": {
            deps: ["angular"]
        },
        "angularMocks": {
            deps: ["angularResource"]
        }
    },
    priority: [
        "angular"
    ]
},["domReady",
    "unitTests/directives/focusSpec",
    "unitTests/controllers/mainControllerSpec",
    "unitTests/services/galleryServiceSpec"

],function (domReady) {
    domReady(function () {
        window.__karma__.start();
    })
});

//karma start karma.conf.js