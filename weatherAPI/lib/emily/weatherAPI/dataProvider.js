
function dataProvider_openweathermap(cityName) {

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=b0c1c0009a58c244370aacd101a2e7ac";

    this.getData = function(funcToHandleData) {
        $.getJSON(apiUrl, function(dataObj) {
            var obj;
            if( dataObj.cod == 200 ) {
                obj = {
                    name: dataObj.name,
                    weather: dataObj.weather[0].main,
                    temperature: Math.round( (dataObj.main.temp - 273.15)*10 )/10,
                    errorMsg: ""
                };
            } else {
                obj = {
                    name: "Error:",
                    weather: "",
                    temperature: "",
                    errorMsg: "City not found"
                }
            }

            if (funcToHandleData) {
                funcToHandleData(dataObj, obj);
            }

        });
    };

    /*this.getConvertedTemperature = function(kelvin) {
        return Math.round( (kelvin - 273.15)*10 )/10;
    };*/

    /*this.getCityName = function(cityData) {
        return cityData.name;
    };*/
}

module.exports.dataProvider_openweathermap = dataProvider_openweathermap;