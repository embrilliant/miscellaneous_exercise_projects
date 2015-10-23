//var cities = require('../../../lib/emily/weatherAPI/CitiesList.js');

//var City = require('../../../lib/emily/weatherAPI/City').City;

var dataProvider_openweathermap = require('../../../test/emily/weatherAPI/dataProvider');

var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var expect = require('chai').expect;
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

//
function City( cityName ) {

    var cityName = cityName;

    this.doSomeUIToData = function( someFunc ) {

            if (someFunc) {
                someFunc();
            }
    };

}
//

//Tests

describe("Test if class works", function() {
    it("should creates an object", function() {
        var newCity = new City("Berlin");
        newCity.should.be.a("object");
    });
});

describe("Test if a new object is an instance", function() {
    it("should be an instance", function() {
        var newCity = new City("Berlin");
        expect(newCity).to.be.an.instanceof(City);
    });
});

describe("Test if the new object has the method", function() {
    it("should have the method", function() {
        var newCity = new City("Berlin");
        newCity.should.include.keys("doSomeUIToData");
    });
});

describe("Test if the method works", function() {
    it("should work", function() {
        var newCity = new City("Berlin");
        var spy = sinon.spy(newCity, "doSomeUIToData");
        spy();
        spy.should.have.been.called;
    });
});

describe("Test if the method calls a callback", function() {
    it("should call a callback", function() {
        var newCity = new City("Berlin");
        var callback = sinon.spy();
        newCity.doSomeUIToData(callback);
        callback.should.have.been.called;
    });
});

describe("Test if dataProvider object is there", function() {
    it("should contains another object", function() {
        var stub = sinon.createStubInstance(dataProvider_openweathermap);
        //var dataProvider = stub;
        console.log(stub);
    });
});
//
describe("Test if the object's method works", function() {
    it("should be able to use the method", function() {
        //

    });
});

describe("Test if data can be retrieved", function() {
    it("get data from the method of another object", function() {

    });
});

describe("Test how it worksssssss", function() {
    it("should tell you how things work", function() {
        var newCity = new City("Berlin");
        var spyFunc = sinon.spy();
        newCity.doSomeUIToData(spyFunc);
        assert(spyFunc.called);
    });
});

/*var server = sinon.fakeServer.create();
server.respondWith(something);
function something() {
    return "foo";
}
//var dataProvider = stub;
var xhr = sinon.useFakeXMLHttpRequest();
console.log(server);
console.log(xhr);*/
