'use strict';

var express = require ('express');
var router = express.Router();
var twilio = require('twilio')
var shelterFinder = require('../lib/shelter-finder');
var twimlGenerator = require('../lib/twiml-generator');
var weather = require('../lib/weather');

const request = require("request")


var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))

router.post('/search', function(req, res, next) {
	var from = req.body.From;
	var body = req.body.Body;
	res.type('text/xml');

	shelterFinder.findByName(body, function(err, shelters) {

		if (shelters.length === 0) {
			res.send(twimlGenerator.notFound().toString()); 
		} else if (shelters.length === 1) { 

			weather.findWeather(shelters[0], (error, data) => {
				console.log(data.temp)
				console.log(data.pressure)
				res.send(twimlGenerator.sendWeather2(data).toString() );
			})



			// res.send(twimlGenerator.sendWeather2(shelters[0]).toString());
			// res.send(twimlGenerator.singleShelter(shelters[0]).toString());
		}
				
	})

	console.log(from)
	console.log(body)
});


module.exports = router;
