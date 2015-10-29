//$(function() {

    var newCitiesList = new CitiesList(["berlin", "redmond", "cupertino", "stockholm", "gibraltar"]);

    //UI
    function updateUI() {

        $("#container").html("");

        for (var i = 0; i < newCitiesList.getCount(); i++) {
            //var city = new City( citiesArray[i] );
            var city = newCitiesList.getCity( newCitiesList.getCitiesList()[i] );

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

    var actions = {
        add: function() {
            var userInput = $("input").val();
            var userInputLower = userInput.toLowerCase();
            newCitiesList.addNewCity(userInputLower);
        },
        remove: function() {
            var userInput = $("input").val();
            var userInputLower = userInput.toLowerCase();
            newCitiesList.removeCity(userInputLower);
        },
        deleteAll: function() {
            newCitiesList.deleteAllCities();
        }
    };

    /*function add() {
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
    }*/

    $("#btnAdd").on("click", function(e) {
        e.preventDefault();
        actions.add();
        updateUI();
    });

    $("#btnDltAll").on("click", function(e) {
        e.preventDefault();
        actions.deleteAll();
        updateUI();
    });

    $("#btnRemove").on("click", function(e) {
        e.preventDefault();
        actions.remove();
        updateUI();
    });

    updateUI();

//});


