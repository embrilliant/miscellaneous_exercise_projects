//$(function() {

    var newCitiesList = new CitiesList(["Berlin", "Redmond", "Cupertino", "Stockholm", "Gibraltar"]);

    //UI
    function updateUI() {

        var citiesArray = newCitiesList.getCitiesList();
        $("#container").html("");
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
    }

    function add() {
        var userInput = $("input").val(); //cityName
        newCitiesList.addNewCity(userInput);
        newCitiesList.showArrayInConsole();
    }

    function remove() {
        var userInput = $("input").val();
        newCitiesList.removeCity(userInput);
        newCitiesList.showArrayInConsole();
    }

    function deleteAll() {
        newCitiesList.deleteAllCities();
        newCitiesList.showArrayInConsole();
    }

    $("#btnAdd").on("click", function(e) {
        e.preventDefault();
        add();
        updateUI();
    });

    $("#btnDltAll").on("click", function(e) {
        e.preventDefault();
        deleteAll();
        updateUI();
    });

    $("#btnRemove").on("click", function(e) {
        e.preventDefault();
        remove();
        updateUI();
    });

    updateUI();

//});


