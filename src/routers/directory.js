const express = require ('express');
const router = express.Router();
const twilio = require('twilio')
const shelterFinder = require('../lib/shelter-finder');
const twimlGenerator = require('../lib/twiml-generator');




const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))




router.post('/search', function(req, res, next) {
	var from = req.body.From;
	var body = req.body.Body;

	shelterFinder.findByName(body, function(err, shelters) {
		if (shelters.length === 0) {
			res.send(twimlGenerator.notFound().toString()); 
		} else if (shelters.length === 1) {
			res.send(twimlGenerator.singleShelter(shelters[0]).toString());
		}
	})



	console.log(from)
	console.log(body)
});


module.exports = router;