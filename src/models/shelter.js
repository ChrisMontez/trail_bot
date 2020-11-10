'use strict';

var  mongoose = require ('mongoose');

var ShelterSchema = new mongoose.Schema({
	name: String,
	notes: String,
	lat: String,
	lon: String
});



module.exports = mongoose.model('Shelter', ShelterSchema);


 