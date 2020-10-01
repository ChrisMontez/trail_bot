'use strict';
var Shelter = require('../models/shelter');



var findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback).sort("name");

	};


// Evidence that script connects to database 
// Shelter.findOne({ 'name': 'Springer Mountain Shelter' }, 'name notes', function (err, shelter) {
//   if (err) return handleError(err);
//   console.log(shelter.name, shelter.notes);
// });

module.exports.findByName = findByName;



