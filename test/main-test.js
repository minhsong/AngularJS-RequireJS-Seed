var tests = Object.keys(window.__karma__.files).filter(function (file) {

    return /Spec\.js$/.test(file);
});

requirejs.config({
    baseUrl: '/base/src',
    paths: {
        'jquery': '../lib/jquery',
        angular : '../lib/angular'
    },
    shim: {
        angular : {
            exports : 'angular'
        }
    },
    deps: tests,
    callback: window.__karma__.start
});