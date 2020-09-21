var MessagingResponse = require('twilio').twiml.MessagingResponse


var notFound = function() {
  var resp = new MessagingResponse();
  resp.message('We did not find the shelter you\'re looking for');
  return resp;
};

var singleShelter = function(shelter) {
  var resp = new MessagingResponse();
  var message = resp.message();
  message.body(`${shelter.name}\n${shelter.notes}\n${shelter.lat}`);
  message.media(shelter.imageUrl);
  return resp;
};

module.exports.notFound = notFound;

module.exports.singleShelter = singleShelter;