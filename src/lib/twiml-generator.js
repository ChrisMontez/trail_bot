

var MessagingResponse = require('twilio').twiml.MessagingResponse

var notFound = function() {
  var resp = new MessagingResponse();
  resp.message('I did not find the shelter you are looking for. Check your spelling and try again.');
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