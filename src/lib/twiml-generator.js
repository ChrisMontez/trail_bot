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
  message.body(`${shelter.notes}`);

  return resp;
};


module.exports.notFound = notFound;
module.exports.singleShelter = singleShelter;