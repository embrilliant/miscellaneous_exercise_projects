//var cities = require('../../../lib/emily/weatherAPI/CitiesList.js');

var dataProvider_openweathermap = require('../../../test/emily/weatherAPI/dataProvider').dataProvider_openweathermap;

//var dings = new dataProvider_openweathermap("Berlin");
//console.log('data provider is here, start of file', dings);

var City = require('../../../lib/emily/weatherAPI/City').City;

var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var expect = require('chai').expect;
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

//Tests

describe("1. Test if class works", function() {
    it("should creates an object", function() {
        var newCity = new City("Berlin");
        newCity.should.be.a("object");
    });
});

describe("2. Test if a new object is an instance", function() {
    it("should be an instance", function() {
        var newCity = new City("Berlin");
        expect(newCity).to.be.an.instanceof(City);
    });
});

describe("3. Test if the new object has a method", function() {
    it("should have the method", function() {
        var newCity = new City("Berlin");
        newCity.should.include.keys("doSomeUIToData");
    });
});

describe("4. Test if the method works", function() {
    it("the method should work", function() {
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        var spy = sinon.spy(newCity, "doSomeUIToData");
        spy();
        spy.should.have.been.called;
    });
});

describe("5. Test if the method calls a callback", function() {
    it("should call a callback", function() {
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        var callback = sinon.spy();
        newCity.doSomeUIToData(callback);
        callback.should.have.been.called;
    });
});

describe("6. Test if the method gets data", function() {
    it("should get some data", function() {
        var data;
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        newCity.doSomeUIToData(function(obj) {
            data = obj;
        });
        data.should.be.a("object");
    });
});

describe("7. Test if data can be retrieved", function() {
    it("should get data", function() {
        var data;
        var cityName;
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        newCity.doSomeUIToData(function(obj) {
            data = obj;
        });
        assert.equal(data.name, "Berlin", "both should be 'Berlin'");
    });
});

describe("8. Test if data can be retrieved correctly", function() {
    it("should get the correct data", function() {
        var data;
        var cityName;
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        newCity.doSomeUIToData(function(obj) {
            data = obj;
            cityName = obj.name;
        });
        assert.equal(data.name, cityName, "both should be 'Berlin'");
        assert.equal(data.temperature, 12);
    });
});

describe("9. Test how things work", function() {
    it("should tell you how things work", function() {
        var newCity = new City("Berlin");
        var stub = sinon.stub(newCity,"getDataProvider", function(){
            return new dataProvider_openweathermap('Berlin');
        });
        var spyMethod = sinon.spy(newCity, "doSomeUIToData");
        spyMethod();
        assert(spyMethod.called);
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
