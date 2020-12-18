'use strict';
var Shelter = require('../models/shelter');

var findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback)
	.sort("name")


	};


module.exports.findByName = findByName; 
