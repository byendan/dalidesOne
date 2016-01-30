$(window).resize(Fix());

$(document).ready(Fix());


function Fix() {
    if ($(window).width() < 962) {
        var v_height = $(".v-text.two").css("height");
        $(".v-image.two").css("top", v_height);
    }
}