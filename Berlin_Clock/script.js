$(function() {

    function timeNow() {
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();

        //for test
        //var hour = 11;
        //var minute = 51;
        //var second = 00;

        var timeString = hour + ":" + minute + ":" + second;
        $("#time").text(timeString);

        //top circle
        if ( second % 2 == 0 ) {
            $("#top_circle").css({"background-color": "gold"});
        } else {
            $("#top_circle").css({"background-color": "rgba(0, 0, 0, 0)"});
        }

        //row1
        if ( hour >= 20 ) {
            $("#row1").children().css("background-color", "#FF2751");
        } else if ( hour >= 15 ) {
            $("#row1").children().eq(0).css("background-color", "#FF2751");
            $("#row1").children().eq(1).css("background-color", "#FF2751");
            $("#row1").children().eq(2).css("background-color", "#FF2751");
        } else if ( hour >= 10 ) {
            $("#row1").children().eq(0).css("background-color", "#FF2751");
            $("#row1").children().eq(1).css("background-color", "#FF2751");
        } else if ( hour >= 5 ) {
            $("#row1").children().eq(0).css("background-color", "#FF2751");
        }

        /*function colorChange(hourOfTheDay) {
            if ( hour < hourOfTheDay ) {
                return "white";
            } else {
                return "#FF2751";
            }
        }

        $("#row1").children().eq(0).css("background-color", colorChange(5) );
        $("#row1").children().eq(1).css("background-color", colorChange(10) );
        $("#row1").children().eq(2).css("background-color", colorChange(15) );
        $("#row1").children().eq(3).css("background-color", colorChange(20) );*/

        function row2() {
            if ( hour % 5 == 1 ) {
                $("#row2").children().eq(0).css("background-color", "#FF2751" );
            }
            if ( hour % 5 == 2 ) {
                $("#row2").children().eq(0).css("background-color", "#FF2751" );
                $("#row2").children().eq(1).css("background-color", "#FF2751" );
            }
            if ( hour % 5 == 3 ) {
                $("#row2").children().eq(0).css("background-color", "#FF2751" );
                $("#row2").children().eq(1).css("background-color", "#FF2751" );
                $("#row2").children().eq(2).css("background-color", "#FF2751" );
            }
            if ( hour % 5 == 4 ) {
                $("#row2").children().css("background-color", "#FF2751" );
            }
            if ( hour % 5 == 0 ) {
                $("#row2").children().css("background-color", "white" );
            }
        }
        row2();

        function row3() {

            if ( minute < 5 ) {
                $("#row3").children().css("background-color", "white");
            } else {
                var blockIndex;
                var $thisBlock;
                if ( minute % 5 !== 0 ) {
                    var u = Math.floor( minute / 5);
                    var f = 5 * u;
                    blockIndex = f  / 5 - 1;

                } else {
                    blockIndex = minute / 5 - 1;
                }
                $thisBlock = $("#row3").children().eq( blockIndex );
                $thisBlock.prevAll().css( "background-color", "gold" );
                $thisBlock.css("background-color", "gold");
            }
        }
        row3();

        function row4() {
            var $blocks = $("#row4").children();
            if ( minute % 5 == 1 ) {
                $blocks.eq(0).css("background-color", "gold" );
            }
            if ( minute % 5 == 2 ) {
                $blocks.eq(0).css("background-color", "gold" );
                $blocks.eq(1).css("background-color", "gold" );
            }
            if ( minute % 5 == 3 ) {
                $blocks.eq(0).css("background-color", "gold" );
                $blocks.eq(1).css("background-color", "gold" );
                $blocks.eq(2).css("background-color", "gold" );
            }
            if ( minute % 5 == 4 ) {
                $blocks.css("background-color", "gold" );
            }
            if ( minute % 5 == 0 ) {
                $blocks.css("background-color", "white" );
            }
        }
        row4();

        function redMinute() {
            if ( minute >= 15 ) {
                var i;
                var $thisRedMinute;
                if ( minute % 15 !== 0 ) {
                    var u = Math.floor( minute / 15);
                    var f = 15 * u;
                    i = f  / 15 - 1;

                } else {
                    i = minute / 15 - 1;
                }
                $thisRedMinute = $(".quarter").eq( i );
                $thisRedMinute.prevAll(".quarter").css( "background-color", "#FF2751" );
                $thisRedMinute.css("background-color", "#FF2751");
            } else {
                $(".quarter").css("background-color", "white" );
            }
        }
        redMinute();

        setTimeout(function(){
            timeNow()
        }, 1000);
    }

    timeNow();

});