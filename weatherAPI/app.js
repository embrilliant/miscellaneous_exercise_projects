//$(function() {

    var newCitiesList = new CitiesList(["Berlin", "Redmond", "Cupertino", "Stockholm", "Gibraltar"]);

    newCitiesList.addNewCity("Rome");
    newCitiesList.addNewCity("London");
    newCitiesList.removeCity("Rome");
    newCitiesList.removeCity("New York");
    newCitiesList.addNewCity("Berlin");
    newCitiesList.addNewCity("Tuvalu");

    var citiesArray = newCitiesList.getCitiesList();

    //UI
    for (var i = 0; i < citiesArray.length; i++) {


        var city = new City( citiesArray[i] );

        city.doSomeUIToData(function (data, obj) {

            var html = "<section>" +
                "<h2>" + obj.name + "</h2>" +
                "<div class='weather'>" + obj.weather + "</div>" +
                "<div class='temp'>" + obj.temperature + " &degC</div>" +
                "<div class='temp'>" + obj.errorMsg + "</div>" +
                "</section>";

            $("#container").append(html);

        });
    }
//});


