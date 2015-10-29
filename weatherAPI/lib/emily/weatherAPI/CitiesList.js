function CitiesList(arrayOfCities) {

    var citiesArray = arrayOfCities; //array

    this.addNewCity = function(cityToBeAdded) {
        var index = citiesArray.indexOf(cityToBeAdded);
        if (index < 0) {
            citiesArray.push(cityToBeAdded);
        } else {
            console.log("city already in the list");
            return "city already in the list";
        }
    };

    this.removeCity = function(cityToBeRemoved) {
        var index = citiesArray.indexOf(cityToBeRemoved);
        if (index > -1) {
            citiesArray.splice(index, 1);
        } else {
            console.log("city not found in list");
            return "city not found in your list";
        }
    };

    this.deleteAllCities = function() {
        citiesArray.length = 0;
    };

    this.getCitiesList = function() {
        return citiesArray; //return array
    };

    this.getCount = function() {
        return citiesArray.length; //length of array: number
    };

    this.getCity = function( nameOfCity ) {
        return new City( nameOfCity );
    };

    this.showArrayInConsole = function() {
        console.log(citiesArray);
    }
}

//module.exports = CitiesList;
module.exports.CitiesList = CitiesList;