const Shelter = require('../models/shelter');

const findByName = function(name, callback) {
	Shelter.find({
		"name": {"$regex": name, "$options": "i" }}, callback).sort("name");

	};




// Shelter.findOne({ 'name': 'Black Gap Shelter' }, 'name notes', function (err, shelter) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   console.log(shelter.name, shelter.notes);
// });






// Shelter.findOne({name: 'Black Gap Shelter'}, 'notes').exec();



// Shelter.find().byName('Black Gap Shelter').exec((err, shelters) => {
//     console.log(shelters);
//   });

// shelterSchema.query.byName = function(name) {
//     return this.where({ name: new RegExp(name, 'i') })
//   };


// Shelter.find().byName('Black Gap Shelter').exec((err, shelter) => {
//     console.log(animals);
//   });





module.exports.findByName = findByName;