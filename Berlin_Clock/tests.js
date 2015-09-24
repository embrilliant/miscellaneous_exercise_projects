
QUnit.test( "Test for 12:04:05 topCircle", function( assert ) {
    var clock = new berlinClock(12,4,5);
    var arr = clock.getTopCircle();

    assert.deepEqual( arr, [1], "Passed!" );
});

QUnit.test( "Test for 12:04:05 row1", function( assert ) {
    var clock = new berlinClock(12,4,5);

    var firstRow = clock.getRow1();

    assert.deepEqual( firstRow, [1, 1, 0, 0], "Passed!" );
});

QUnit.test( "Test for 12:04:05 row4", function( assert ) {
    var clock = new berlinClock(14,56,56);

    var row4 = clock.getRow4();

    assert.deepEqual( row4, [1, 0, 0, 0], "Passed!" );
});

QUnit.test( "Test for 22:12:56 row2", function( assert ) {
    var clock = new berlinClock(22,12,56);

    var row2 = clock.getRow2();

    assert.deepEqual( row2, [1, 1, 0, 0], "Passed!" );
});

QUnit.test( "Test for 00:00:01 row4", function( assert ) {
    var clock = new berlinClock(00,00,01);

    var row4 = clock.getRow4();

    assert.deepEqual( row4, [0, 0, 0, 0], "Passed!" );
});

QUnit.test( "Test for 00:30:00 redMinute", function( assert ) {
    var clock = new berlinClock(00,30,00);

    var redMinutes = clock.getRedMinute();

    assert.deepEqual( redMinutes, [1, 1, undefined], "Passed!" );
});