define(['require', 'angular', 'app'], function(require, angular) {
  'use strict';
  return require(['domReady!'], function(document) {
    return angular.bootstrap(document, ['myApp']);
  });
});