$( ".collapse-button" ).click(function() {
            $(".navs").toggleClass('active');
            $(".navs").slideToggle();
        });
        $(".drop-item").click(function() {
            $(this).children(".dropdown-content").toggleClass('active');
            $(this).children(".dropdown-content").slideToggle();
        });
        
        if($(window).width() > 715) {
            $(".drop-item").hover(function() {
                $(this).children(".dropdown-content").slideToggle(200);
            }); 
        }