//var dataProvider_openweathermap = require('../../emily/weatherAPI/dataProvider').dataProvider_openweathermap;

function City( cityName ) {

    var cityName = cityName;
    var that = this;

    this.getDataProvider = function(cityName) {
        return new dataProvider_openweathermap(cityName);
    };

    //var dataProvider = new dataProvider_openweathermap(cityName);

    this.doSomeUIToData = function( someFunc ) {

        that.getDataProvider(cityName).getData(function(data, obj) {

            //temperature = obj.temperature;
            //console.log('inside of callback', temperature);

            if ( someFunc ) {
                someFunc(data, obj);
                //someFunc(data, obj, that);
            }
        });
    };

    //var temperature = 999;
    /*this.getTemperature = function() {
        return temperature;
     };*/

}

module.exports.City = City;

