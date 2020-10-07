'use strict';

var express = require ('express');
var router = express.Router();
var twilio = require('twilio')
var shelterFinder = require('../lib/shelter-finder');
var twimlGenerator = require('../lib/twiml-generator');
// var weather = require('../lib/weather');
const request = require("request")


var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))

router.post('/search', function(req, res, next) {
	var from = req.body.From;
	var body = req.body.Body;
	res.type('text/xml');

	shelterFinder.findByName(body, function(err, shelters, sendWeather2) {

		if (shelters.length === 0) {
			res.send(twimlGenerator.notFound().toString()); 
		} else if (shelters.length === 1) { 
				// const url = `https://api.openweathermap.org/data/2.5/onecall?lat=
				// ${shelters[0].lat}&lon=${shelters[0].lon}&%20exclude=hourly,daily
				// &units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`
				// request(url, (error, response, body) => {
				// 	const data = JSON.parse(body)
				// 	console.log(data.current)
				// 	})

		// weather.findWeather(shelters[0])
			res.send(twimlGenerator.sendWeather(shelters[0],sendWeather2));
			// res.send(twimlGenerator.singleShelter(shelters[0]).toString());
		}
				
	})

	console.log(from)
	console.log(body)
});


module.exports = router;
