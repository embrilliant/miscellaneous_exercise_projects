$(function() {

    function showTimeNow() {

        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();

        var newClock = new berlinClock(hour, minute, second);

        //top circle
        if (  newClock.getTopCircle() == 0 ) {
            $("#top_circle").css({"background-color": "gold"});
        } else {
            $("#top_circle").css({"background-color": "white"});
        }

        //row1
        newClock.getRow1().forEach(function(val, index) {
            if (val === 1) {
                $("#row1").children().eq(index).css("background-color", "#FF2751");
            } else {
                $("#row1").children().eq(index).css("background-color", "white");
            }
        });

        //row2
        newClock.getRow2().forEach(function(val, index) {
            if (val === 1) {
                $("#row2").children().eq(index).css("background-color", "#FF2751");
            } else {
                $("#row2").children().eq(index).css("background-color", "white");
            }
        });

        //row3
        newClock.getRow3().forEach(function(val, index) {
            if (val === 1) {
                $("#row3").children().eq(index).css("background-color", "gold");
            } else {
                $("#row3").children().eq(index).css("background-color", "white");
            }
        });

        //row4
        newClock.getRow4().forEach(function(val, index) {
            if (val === 1) {
                $("#row4").children().eq(index).css("background-color", "gold");
            } else {
                $("#row4").children().eq(index).css("background-color", "white");
            }
        });

        //red minutes
        newClock.getRedMinute().forEach(function(val, index) {
            if (val === 1) {
                $(".quarter").eq(index).css( "background-color", "#FF2751" );
            } else {
                $(".quarter").eq(index).css( "background-color", "white" );
            }
        });

        var timeString = hour + ":" + minute + ":" + second;
        $("#time").text(timeString);

        setTimeout(function(){
            showTimeNow();
        }, 1000);
    }

    showTimeNow();

});