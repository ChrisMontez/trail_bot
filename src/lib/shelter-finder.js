const Shelter = require('../models/shelter');

const findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback).sort("name");

	};









module.exports.findByName = findByName;