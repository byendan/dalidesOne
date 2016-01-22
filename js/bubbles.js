function bub_info(title, text, icon, id) {
    this.title = title;
    this.text = text;
    this.icon = icon;
    this.id = id;
}

var one = new bub_info("Design", "We take inspiration from the latest designs accross the web to make sure your site looks professional and modern", "fa-paint-brush", 0);

var two = new bub_info("Functionality", "Researching the newest tools, and using fall back methods and designs makes sure your website works on browsers new and old", "fa-cogs", 1);

var three = new bub_info("Mobile Ready", "Now over one third of all internet traffic comes from mobile devices. We make sure your website looks great on all screens big and small", "fa-tablet", 2);

var info = [one, two, three];
var cur = 0;

$("#bub-title").text(one.title);
$("#bub-text").text(one.text);
$("#bub-icon").addClass(one.icon);

$("#arrow-right").css("color", "#DC3E32");

$("#arrow-right").click(function() {
    MoveRight();
});

$("#arrow-left").click(function() {
    MoveLeft();
})

function MoveRight() {
    if(cur != 2) {
        $("#bub-icon").removeClass(info[cur].icon);
        $(".circle.active").toggleClass("active");
        cur += 1;
        var active = cur + 2;
        $(".circle:nth-child(" + active + ")").toggleClass("active");
        $("#bub-title").text(info[cur].title);
        $("#bub-text").text(info[cur].text);
        $("#bub-icon").addClass(info[cur].icon);
        if(cur == 2) {
            $("#arrow-right").css("color", "rgb(51, 51, 51)");
        } 
        $("#arrow-left").css("color", "#DC3E32");
    }
}

function MoveLeft() {
    if(cur != 0) {
        $("#bub-icon").removeClass(info[cur].icon);
        $(".circle.active").toggleClass("active");
        cur -= 1;
        var active = cur + 2;
        $(".circle:nth-child(" + active + ")").toggleClass("active");
        $("#bub-title").text(info[cur].title);
        $("#bub-text").text(info[cur].text);
        $("#bub-icon").addClass(info[cur].icon);
        if(cur == 0) {
            $("#arrow-left").css("color", "rgb(51, 51, 51)");
        }
        $("#arrow-right").css("color", "#DC3E32");
    }
}