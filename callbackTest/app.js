
//My test
function testFunction(a, b, callback) {
    var c = a + b;
    console.log(c);
    callback(c);
    console.log(a);
    console.log(b);
}

function funcToCallLater(something) {
    var s = something + 10;
    console.log("something:", something, "s:", s);
}

testFunction(2, 3, funcToCallLater);


