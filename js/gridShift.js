$(window).resize(function() {
    if( $(window).width() < 962) {
        var v_height = $(".v-text.two").height() + 69
        $(".v-image.two").css("top", v_height+"px");
    }
});

if ($(window).width() < 962) {
    var v_height = $(".v-text.two").height() + 69
    $(".v-image.two").css("top", v_height+"px");
}

