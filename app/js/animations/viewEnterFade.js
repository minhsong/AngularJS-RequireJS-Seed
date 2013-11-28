define(['jquery'],function ($) {
    return function () {
        return {
            setup: function (myElement){
                $(myElement).css({ 'opacity': 0 });
            },
            start: function (myElement, done) {
                $(myElement).animate({
                    'opacity' : 1
                }, 2000, function() {
                    done()
                });
            }
        }
    }
});