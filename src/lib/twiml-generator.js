'use strict';

var MessagingResponse = require('twilio').twiml.MessagingResponse

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

var sendWeather = function(weather) {
  var resp = new MessagingResponse();
  var message = resp.message();
console.log('test')
  message.body(`${weather.temp}`);

  return resp;
};

module.exports.notFound = notFound;
module.exports.singleShelter = singleShelter;
module.exports.sendWeather = sendWeather;