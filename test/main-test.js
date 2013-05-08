(function (window, require) {
    'use strict';
    var file, requireModules;
    requireModules = [];
 
   for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (file.substring(file.length - 7, file.length) === 'Test.js') {
                console.log('Added file to testing..');
                requireModules.push(file);
            }
        }
    }
        
    requireModules.push('app');
    requireModules.push('mocks');
 
    require({
        baseUrl:'/base/app/js',
        paths:{
            'angular' : '../lib/angular/angular',
            'resource' : '../lib/angular/angular-resource',        
            'mocks' : '../../test/lib/angular/angular-mocks'
        },
        shim:{
            'angular' : { 'exports' : 'angular' },
            'resource' : { deps : ['angular'] },
            'mocks': { deps : ['angular'], 'exports' : 'mocks'}
        }
    }, requireModules, function () {
        window.__karma__.start();
    }, function (err) {
        var failedModules = err.requireModules;
        console.log("err", err);

        if (failedModules && failedModules[0]) {
            throw new Error("Module could not be loaded: " + failedModules);
        } else {
            throw new Error("unknown error:" + err);
        }
    });
}(window, require));