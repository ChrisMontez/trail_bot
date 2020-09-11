const express = require ('express');
const router = express.Router();



const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))




router.post('/search', function(req, res, next) {
	var from = req.body.From;
	var body = req.body.Body;

	console.log(from)
	console.log(body)
});




module.exports = router;