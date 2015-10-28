
function dataProvider_openweathermap(cityName) {

    //var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=b0c1c0009a58c244370aacd101a2e7ac";

    this.getData = function(funcToHandleData) {

        console.log('Which dataProvider are you looking for? ----- This one is the test version');
        var obj = {
            name: cityName,
            weather: "Rainy",
            temperature: 12,
            errorMsg: ""
        };

        funcToHandleData(obj);
    };
}

module.exports.dataProvider_openweathermap = dataProvider_openweathermap;