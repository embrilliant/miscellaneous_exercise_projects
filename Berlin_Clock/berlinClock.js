function berlinClock(h, m, s) {

    var hour = h;
    var minute = m;
    var second = s;

    function createArray(numberOfBlocks) {
        var array = new Array(numberOfBlocks);
        return array;
    }

    this.topCircle = createArray(1);
    this.row1 = createArray(4);
    this.row2 = createArray(4);
    this.row3 = createArray(11);
    this.row4 = createArray(4);
    this.redMinutes = createArray(3);

    this.getTopCircle = function() {
        if ( second % 2 == 0 ) {
            this.topCircle = [0];
        } else {
            this.topCircle = [1];
        }
        return this.topCircle;
    };

    this.getRow1 = function() {
        if ( hour >= 20 ) {
            this.row1 = [1, 1, 1, 1];
        } else if ( hour >= 15 ) {
            this.row1 = [1, 1, 1, 0];
        } else if ( hour >= 10 ) {
            this.row1 = [1, 1, 0, 0];
        } else if ( hour >= 5 ) {
            this.row1 = [1, 0, 0, 0];
        }
        return this.row1;
    };

    this.getRow2 = function() {
        if ( hour % 5 == 1 ) {
            this.row2 = [1, 0, 0, 0];
        }
        if ( hour % 5 == 2 ) {
            this.row2 = [1, 1, 0, 0];
        }
        if ( hour % 5 == 3 ) {
            this.row2 = [1, 1, 1, 0];
        }
        if ( hour % 5 == 4 ) {
            this.row2 = [1, 1, 1, 1];
        }
        if ( hour % 5 == 0 ) {
            this.row2 = [0, 0, 0, 0];
        }
        return this.row2;
    };

    this.getRow3 = function() {
        if ( minute < 5 ) {
            this.row3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        } else {
            var numberToReplace;

            if ( minute % 5 !== 0 ) {
                var u = Math.floor( minute / 5);
                var f = 5 * u;
                numberToReplace = f  / 5;

            } else {
                numberToReplace = minute / 5;
            }

            this.row3.splice(0, numberToReplace);

            for (var n = 1; n <= numberToReplace; n++) {
                this.row3.unshift(1);
            }
        }
        return this.row3;
    };

    this.getRow4 = function() {
        if ( minute % 5 == 1 ) {
            this.row4 = [1, 0, 0, 0];
        }
        if ( minute % 5 == 2 ) {
            this.row4 = [1, 1, 0, 0];
        }
        if ( minute % 5 == 3 ) {
            this.row4 = [1, 1, 1, 0];
        }
        if ( minute % 5 == 4 ) {
            this.row4 = [1, 1, 1, 1];
        }
        if ( minute % 5 == 0 ) {
            this.row4 = [0, 0, 0, 0];
        }
        return this.row4;
    };

    this.getRedMinute = function() {
        if ( minute >= 15 ) {
            var howManyRMToChange;
            if ( minute % 15 !== 0 ) {
                var u = Math.floor( minute / 15);
                var f = 15 * u;
                howManyRMToChange = f  / 15;

            } else {
                howManyRMToChange = minute / 15;
            }

            this.redMinutes.splice(0, howManyRMToChange);
            for (var d = 1; d <= howManyRMToChange; d++) {
                this.redMinutes.unshift(1);
            }

        } else {
            this.redMinutes = [0, 0, 0];
        }

        return this.redMinutes;
    };

}