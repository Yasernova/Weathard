/*jslint browser:true */
'use strict';


    var conditions = new XMLHttpRequest();
    var forecast = new XMLHttpRequest();
    var condObj, foreObj;
    var weather = function() {

        var zipCode = document.getElementById('zip').value;
        if (zipCode === "") {
            zipCode = "Egypt/Cairo";
        }
        
        var conditionsURL = "https://api.wunderground.com/api/745b2952d8b72680/geolookup/conditions/q/"+zipCode+".json"; 
        
        conditions.open('GET', conditionsURL, true);
        conditions.responseType = 'text';
        conditions.send();

        var forecastURL = "https://api.wunderground.com/api/745b2952d8b72680/geolookup/forecast/q/" + zipCode + ".json";
    
        forecast.open('GET', forecastURL, true);
        forecast.responseType = 'text';
        forecast.send();
    }
    conditions.onload = function() {
        if (conditions.status === 200) {
            condObj = JSON.parse(conditions.responseText);
            document.getElementById('location').innerHTML = condObj.current_observation.display_location.full;
            document.getElementById('weather').innerHTML = condObj.current_observation.weather;
            document.getElementById('temperature').innerHTML = condObj.current_observation.temp_c;
        }
    }
    
    forecast.onload = function () {
        if (forecast.status === 200) {
            foreObj = JSON.parse(forecast.responseText);
            document.getElementById('desc').innerHTML = foreObj.forecast.txt_forecast.forecastday["0"].fcttext;


            document.getElementById('r1c1').innerHTML = foreObj.forecast.txt_forecast.forecastday[1].title;
            document.getElementById('r1c2').src = foreObj.forecast.txt_forecast.forecastday[1].icon_url;
            document.getElementById('r1c3').innerHTML = foreObj.forecast.simpleforecast.forecastday[1].high.celsius;
            document.getElementById('r1c4').innerHTML = foreObj.forecast.simpleforecast.forecastday[1].low.celsius;

            document.getElementById('r2c1').innerHTML = foreObj.forecast.txt_forecast.forecastday[2].title;
            document.getElementById('r2c2').src = foreObj.forecast.txt_forecast.forecastday[2].icon_url;
            document.getElementById('r2c3').innerHTML = foreObj.forecast.simpleforecast.forecastday[2].high.celsius;
            document.getElementById('r2c4').innerHTML = foreObj.forecast.simpleforecast.forecastday[2].low.celsius;

            document.getElementById('r3c1').innerHTML = foreObj.forecast.txt_forecast.forecastday[3].title;
            document.getElementById('r3c2').src = foreObj.forecast.txt_forecast.forecastday[3].icon_url;
            document.getElementById('r3c3').innerHTML = foreObj.forecast.simpleforecast.forecastday[3].high.celsius;
            document.getElementById('r3c4').innerHTML = foreObj.forecast.simpleforecast.forecastday[3].low.celsius;

        }
    }
    weather();
    
