define(['jquery'],function ($) {
  return function () {
      return {
          enter : function(element, done) {
              $(element).css({ 'opacity': 0 });
              $(element).animate({
                  'opacity' : 1
              }, 2000, function() {
                  done()
              });
          },

          leave : function(element, done) {


          },

          move : function(element, done) {

          }
      };
  }
});