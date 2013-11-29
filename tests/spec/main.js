requirejs({
    "baseUrl": "/base/app/js",
    "paths": {
        "angular": "lib/angular/angular",
        "angularMocks": "lib/angular/angular-mocks",
        "angularResource": "lib/angular/angular-resource",
        "jquery": "lib/jquery/jquery",
        "domReady": "lib/require/domReady",
        "unitTests": "../../tests/spec",
        "mocks": "../../tests/mocks",
        'angularRoute': 'lib/angular/angular-route'
    },
    "shim": {
        "jquery": {"exports": "jquery"},
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
    "unitTests/controllers/mainControllerSpec",
    "unitTests/services/galleryServiceSpec",
    "unitTests/controllers/exampleControllerSpec",
    "unitTests/directives/testDirectiveSpec"

],function (domReady) {
    domReady(function () {
        window.__karma__.start();
    })
});

//karma start karma.conf.js