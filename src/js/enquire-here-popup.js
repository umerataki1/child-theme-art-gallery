(function ($) {

$(document).ready(function(){
    $("#enquire-here").click(function(){
        $("#popup").fadeIn();
    });

    $(".close").click(function(){
        $("#popup").fadeOut();
    });

    $(document).on('keydown', function(event) {
        if (event.keyCode === 27) { // ESC key code is 27
            $("#popup").fadeOut();
        }
    });

    $(document).mouseup(function(e){
        var container = $(".popup-content");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $("#popup").fadeOut();
        }
    });
});

})(jQuery);