var mongoose = require ('mongoose');

var ShelterSchema = new mongoose.Schema({
	name: String,
	notes: String
})

module.exports = mongoose.model('shelter', ShelterSchema)