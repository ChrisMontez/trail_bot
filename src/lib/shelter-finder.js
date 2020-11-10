'use strict';
var Shelter = require('../models/shelter');

var findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback)
	.sort("name")
	// .then(function(result) {console.log(result)});

	};


module.exports.findByName = findByName; 
