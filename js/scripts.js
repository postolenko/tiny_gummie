$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getFooterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    $(function() {

        $(".show_popup").click(function() {

            $(".popups-block").fadeIn(300);

        });

        $(".close_popup").click(function() {

            $(".popups-block").fadeOut(300);

        });

        $(this).keydown(function(eventObject){

            if ( eventObject.which == 27) {

               $(".popups-block").fadeOut(300);

            }

        });

        $(document).mouseup(function (e){

            hide_element = $(".popup");

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".popups-block").fadeOut(300);

            }

        });

    });


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }



});
