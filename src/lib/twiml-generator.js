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
  // console.log(data.current)

  })


};



var sendWeather2 = function (data) {
  // weather.findWeather(shelter)
  var resp = new MessagingResponse();
  var message = resp.message();
  message.body('Description: ' + `${data.description}`.charAt(0).toUpperCase()  + `${data.description}`.slice(1) +'\n'
     + 'Temp: ' + `${data.temp}` +'\xB0' + 'F' +'\n'
    + 'Pressure: ' + `${data.pressure}` + ' hPa' + '\n' 
    + 'Humidity: ' + `${data.humidity}` + '%' + '\n' 
    + 'Dew Point: ' + `${data.dew_point}` +'\xB0' + 'F' +'\n'
    + 'Wind Speed: ' + `${data.wind_speed}` + ' mph' 










    );
  return resp;





}


module.exports.notFound = notFound;
module.exports.singleShelter = singleShelter;
module.exports.sendWeather = sendWeather;
module.exports.sendWeather2 = sendWeather2;