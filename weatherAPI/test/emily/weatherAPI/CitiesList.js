/** Testing CitiesList **/
//var CitiesList = require('../../../lib/emily/weatherAPI/Board.js');

//var blub = new CitiesList.CitiesList();
//console.log('object is here ..... ', newCityList.getCitiesList());

var CitiesList = require('../../../lib/emily/weatherAPI/CitiesList').CitiesList; //ref: http://dailyjs.com/2011/12/08/mocha/
var newCityListForTest = new CitiesList(["Berlin", "Redmond", "Cupertino", "Stockholm", "Gibraltar"]);
var citiesArray = newCityListForTest.getCitiesList();

var assert = require('assert');
var chai = require('chai');
var should = chai.should();

describe('Cities in the array', function() {
    describe('listAll', function () {
        it('should list all cities in the array', function () {
            assert.deepEqual(["Berlin", "Redmond", "Cupertino", "Stockholm", "Gibraltar"],  newCityListForTest.getCitiesList());
        });
    });
});

describe('Test removeCity method', function() {
    describe('remove one city from the list array', function () {
        it('should remove the city', function () {
            newCityListForTest.removeCity("Berlin");
            assert.deepEqual(["Redmond", "Cupertino", "Stockholm", "Gibraltar"], citiesArray);
            citiesArray.should.have.length(4);
        });
    });
});

describe("Test addNewCity method", function() {
   it("should add a new city", function() {
       newCityListForTest.addNewCity("Rome");
       citiesArray.should.contain("Rome");
   });
});

describe("Test addAllCities method", function() {
    it("delete all cites in the array", function() {
        newCityListForTest.deleteAllCities();
        citiesArray.should.have.length(0);
    });
});

describe("Test removeCity method", function() {
    describe("test a city that is not in the list", function() {
        it("should say city not found", function() {
            var findAndDeleteCity = newCityListForTest.removeCity("Copenhagen");
            assert.equal("city not found in your list", findAndDeleteCity);
        });
    });
});

describe("Test addNewCity method", function() {
    describe("test add another new city", function() {
        it("should add another new city", function() {
            newCityListForTest.addNewCity("Berlin");
            assert.deepEqual(["Berlin"], citiesArray);
        });
    });
});

describe("Test deleteAllCities", function() {
    it("delete all cites in the array", function() {
        newCityListForTest.deleteAllCities();
        citiesArray.should.have.length(0);
    });
});

describe("Test getCitiesList", function() {
    it("get an empty array", function() {
        newCityListForTest.getCitiesList();
        assert.deepEqual([], newCityListForTest.getCitiesList());
    });
});

describe("Test removeCity city not found", function() {
    it("say city not found", function() {
        var findAndDeleteCity = newCityListForTest.removeCity("Berlin");
        assert.equal("city not found in your list", findAndDeleteCity);
    });
});

describe("Test addNewCity method", function() {
    it("add a new city", function() {
        newCityListForTest.addNewCity("London");
        citiesArray.should.have.length(1);
    });
});

describe("Test addNewCity method", function() {
    it("add another city", function() {
        newCityListForTest.addNewCity("London");
        citiesArray.should.have.length(1);
    });
});
//
describe("Test getCitiesList", function() {
    it("length of city list", function() {
        var msg = newCityListForTest.addNewCity("London");
        msg.should.equal("city already in the list");
    });
});

//nyan cat animation
afterEach(function (done) {
    setTimeout(done, 60);
});

