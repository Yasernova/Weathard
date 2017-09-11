/*jslint browser:true */
'use strict';

(function() {
    var conditionsURL = "http://api.wunderground.com/api/745b2952d8b72680/conditions/q/84653.json" 
    var conditions = new XMLHttpRequest();
    conditions.responseType = 'text';
    conditions.open('GET',conditionsURL, true);
    conditions.send();
    conditions.onload = function() {
        if (conditions.status === 200) {
            var condObj = JSON.parse(conditions.responseText);
            console.log(condObj);
            document.getElementById('location').innerHTML = condObj.current_observation.display_location.full;
            document.getElementById('weather').innerHTML = condObj.current_observation.weather;
            document.getElementById('temperature').innerHTML = condObj.current_observation.temp_c;

        }
    }
    var forecastURL = "http://api.wunderground.com/api/745b2952d8b72680/forecast/q/84653.json"
    var forecast = new XMLHttpRequest();
    forecast.responseType = 'text';
    forecast.open('GET', forecastURL, true);
    forecast.send();
    forecast.onload = function () {
        if (forecast.status === 200) {
            var foreObj = JSON.parse(forecast.responseText);
            console.log(foreObj);
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
    
}())

















/* 
var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('', '', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);


    } //end if
}; //end function



// GET THE FORECARST
weatherForecast.open('', '', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
} //end if
}; //end function
 */

