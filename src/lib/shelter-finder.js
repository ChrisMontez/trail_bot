'use strict';
var Shelter = require('../models/shelter');



var findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback)
	.sort("name")
	// .then(function(result) {console.log(result)});

	};






// Evidence that script connects to database 
// Shelter.findOne({ 'name': 'Springer Mountain Shelter' }, 'name notes', function (err, shelter) {
//   if (err) return handleError(err);
//   console.log(shelter.name, shelter.notes);
// });

module.exports.findByName = findByName;



// var findByName = function(name, callback) {
// 	Shelter.find({
// 		"name": {"$regex": name, "$options": "i" }}, callback).sort("name").then(function(result) {console.log(result)});

// 	};