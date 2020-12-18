'use strict';
var MessagingResponse = require('twilio').twiml.MessagingResponse
var request = require("request")
var weather = require('../lib/weather');

var notFound = function() {
  var resp = new MessagingResponse();
  resp.message('Beep Boop. Sorry, I did not find the shelter you are looking for. Check your spelling'  
  + ' and try again. Be sure that the word "shelter" is not included in your text.');
  return resp;
};
 

var singleShelter = function(shelter) {
  var resp = new MessagingResponse();
  var message = resp.message();

  console.log(shelter.notes)


  message.body(`${shelter.notes}`);

  return resp;
};

var sendWeather = function(shelter, data) {

  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.lat}&lon=${shelter.lon}&
             %20exclude=hourly,daily&units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`
  var getWeather = request(url, (error, response, body) => {
  const data = JSON.parse(body)
  var resp = new MessagingResponse();
  var message = resp.message();
  message.body(( `${data}`));


  })


};



var sendWeather2 = function (data) {

  var resp = new MessagingResponse();
  var message = resp.message();
  message.body(
      'Currently:'  + '\n' 
    +'Description: ' + `${data.description}`.charAt(0).toUpperCase()  + `${data.description}`.slice(1) +'\n'

    + 'Temp: ' + `${data.temp}` +' \xB0' + 'F' +'\n'
    + 'Pressure: ' + `${data.pressure}` + ' hPa' + '\n' 
    + 'Humidity: ' + `${data.humidity}` + '%' + '\n' 
    + 'Dew Point: ' + `${data.dew_point}` +' \xB0' + 'F' +'\n'
    + 'Wind Speed: ' + `${data.wind_speed}` + ' mph'  + '\n'
    + 'Wind Direction: ' + +`${data.wind_deg}` + '\xB0'  + '\n'  + '\n'



    + `${data.date_0}`+':' + '\n' 
    + 'Description: ' + `${data.description_0}`.charAt(0).toUpperCase()  + `${data.description_0}`.slice(1) +'\n'
    + 'Chance of rain: '  + `${data.pop_0}`*100 + '%' + '\n'
    + 'Avg. Day Temp: ' + `${data.day_temp_0}`  +' \xB0' + 'F' +'\n'
    + 'Avg. Night Temp: ' + `${data.night_temp_0}`  +' \xB0' + 'F' +'\n'
    + 'Pressure: ' + `${data.pressure_0}` + ' hPa' + '\n' 
    + 'Humidity: ' + `${data.humidity_0}` + '%' + '\n' 
    + 'Dew Point: ' + `${data.dew_point_0}` +' \xB0' + 'F' +'\n'
    + 'Wind Speed: ' + `${data.wind_speed_0}` + ' mph'  + '\n' 
    + 'Wind Direction: ' + +`${data.wind_deg_0}` + '\xB0'  + '\n'  + '\n'


    + `${data.date_1}`+':' + '\n'
    + 'Description: ' + `${data.description_1}`.charAt(0).toUpperCase()  + `${data.description_1}`.slice(1) +'\n'
    + 'Chance of rain: '  + `${data.pop_1}`*100 + '%' + '\n'
    + 'Avg. Day Temp: ' + `${data.day_temp_1}`  +' \xB0' + 'F' +'\n'
    + 'Avg. Night Temp: ' + `${data.night_temp_1}`  +' \xB0' + 'F' +'\n'
    + 'Pressure: ' + `${data.pressure_1}` + ' hPa' + '\n' 
    + 'Humidity: ' + `${data.humidity_1}` + '%' + '\n' 
    + 'Dew Point: ' + `${data.dew_point_1}` +' \xB0' + 'F' +'\n'
    + 'Wind Speed: ' + `${data.wind_speed_1}` + ' mph'  + '\n' 
    + 'Wind Direction: ' + +`${data.wind_deg_1}` + '\xB0'  + '\n'  + '\n'




    + `${data.date_2}`+':' + '\n' 
    + 'Description: ' + `${data.description_2}`.charAt(0).toUpperCase()  + `${data.description_2}`.slice(1) +'\n'
    + 'Chance of rain: '  + `${data.pop_2}`*100 + '%' + '\n'
    + 'Avg. Day Temp: ' + `${data.day_temp_2}`  +' \xB0' + 'F' +'\n'
    + 'Avg. Night Temp: ' + `${data.night_temp_2}`  +' \xB0' + 'F' +'\n'
    + 'Pressure: ' + `${data.pressure_2}` + ' hPa' + '\n' 
    + 'Humidity: ' + `${data.humidity_2}` + '%' + '\n' 
    + 'Dew Point: ' + `${data.dew_point_2}` +' \xB0' + 'F' +'\n'
    + 'Wind Speed: ' + `${data.wind_speed_2}` + ' mph'  + '\n' 
    + 'Wind Direction: ' + +`${data.wind_deg_2}` + '\xB0'  + '\n'  + '\n'


    );
  return resp;





}


module.exports.notFound = notFound;
module.exports.singleShelter = singleShelter;
module.exports.sendWeather = sendWeather;
module.exports.sendWeather2 = sendWeather2;