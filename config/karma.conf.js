
module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)

        frameworks: ['jasmine',
            'requirejs'
        ],


        // list of files / patterns to load in the browser
        files: [
            {pattern:'app/lib/angular/angular.js', included:false},
            {pattern:'app/lib/angular/angular-resource.js', included:false},
            {pattern:'test/lib/angular/angular-mocks.js', included:false},
            {pattern:'app/js/**/*.js', included:false},
            {pattern:'test/unit/**/*.js', included:false},
            'test/main-test.js'
        ],
        // list of files / patterns to exclude
        exclude: ['app/scripts/main.js'],

        reporters: ['progress'],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};

