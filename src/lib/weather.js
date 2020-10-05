const request = require("request")
// const dotenv = require( )


var findWeather = function (shelter, callback) { 
	var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.lat}&lon=${shelter.lon}&
	%20exclude=hourly,daily&units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`

	var getWeather = request(url, (error, response, body) => {

	JSON.parse(body)

	console.log(data.current)
})

};

module.exports.findWeather = findWeather;

