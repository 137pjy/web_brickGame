    $(document).ready(function() {
        $("#game-start").click(function() {
            // $("body").css({"background-image": "url(bg_2.png)"});  //change to choose player
            $(this).empty(); //clear all text in div
            location.replace("choose.html");
        });
    });