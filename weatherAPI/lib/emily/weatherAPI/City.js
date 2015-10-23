
function City( cityName ) {

    var cityName = cityName;
    //var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=b0c1c0009a58c244370aacd101a2e7ac";

    //var whatEverData = "Rainy day";

    //var callOnReady;
    var temperature = 999;

    var dataProvider = new dataProvider_openweathermap(cityName);

    var that = this;

    /*this.getWhatEverData = function() {
        return whatEverData;
    };*/

    this.doSomeUIToData = function( someFunc ) {

        dataProvider.getData(function(data, obj) {

            temperature = obj.temperature;

            console.log('inside of callback', temperature);

            if (someFunc) {
                someFunc(data, obj, that);
            }
        });
    };

    this.getTemperature = function() {
        return temperature;
    }
}

module.exports.City = City;