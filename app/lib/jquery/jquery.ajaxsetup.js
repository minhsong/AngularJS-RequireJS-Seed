(function ($){
    $(document).ajaxStart(function (){
        $('.preloader').show();
    });
    $(document).ajaxComplete(function (){
        $('.preloader').hide();
    });
}(jQuery));