function bub_info(title, text, icon, id) {
    this.title = title;
    this.text = text;
    this.id = id;
}

var one = new bub_info("Design", "We take inspiration from the latest designs accross the web, and expand on common layouts used in your industry, to make sure your site looks professional and modern.", 0);

var two = new bub_info("Functionality", "We keep in mind that your potential clients use technology that came out anytime between yesterday and the 90's. We research the newest tools, and use fall back methods and designs makes sure your website works on browsers new and old.", 1);

var three = new bub_info("Mobile Ready", "Now over one third of all internet traffic comes from mobile devices. We make sure your website looks great on all screens big and small.", 2);

var info = [one, two, three];
var cur = 0;

$("#bub-title").text(one.title);
$("#bub-text").text(one.text);


//$(".bub-info-area").on("swipeleft", MoveRight());
//$(".bub-info-area").on("swiperight", MoveLeft());

$(document).on("swipeleft", ".bub-info-area", function() {
    MoveRight();
});
$(document).on("swiperight", ".bub-info-area", function() {
    MoveLeft();
});
$("#arrow-right").click(function() {
    MoveRight();
});

$("#arrow-left").click(function() {
    MoveLeft();
})

function MoveRight() {
    if(cur != 2) {
        $(".circle.active").removeClass("active");
        cur += 1;
        if(cur == 1) {
            $("#arrow-left").addClass("active");
        }
        $("#c" + cur).addClass("active");
        trans();
        
        if(cur == 2) {
            $("#arrow-right").removeClass("active");
        } 
    }
}

function MoveLeft() {
    if(cur != 0) {
        $(".circle.active").removeClass("active");
        cur -= 1;
        if(cur == 1) {
            $("#arrow-right").addClass("active");
        }
        $("#c" + cur).addClass("active");
        trans();
        if(cur == 0) {
            $("#arrow-left").removeClass("active");
        }
        
    }
}

function trans() {
    $("#bub-title").fadeOut(400, "swing", function() {
        $("#bub-title").text(info[cur].title);
    });
    $("#bub-text").fadeOut(400, "swing", function() {
        $("#bub-text").text(info[cur].text);
    });
    $("#bub-title").fadeIn();
    $("#bub-text").fadeIn();
}