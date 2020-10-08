const request = require("request")
// const dotenv = require( )


var findWeather = function (shelter, callback) { 
	var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.lat}&lon=${shelter.lon}&
	%20exclude=hourly,daily&units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`

	var getWeather = request(url, (error, response, foo) => {

	const data = JSON.parse(foo)


	callback(undefined, {
		data: data,
		temp: data.current.temp,
		pressure: data.current.pressure,
		humidity: data.current.humidity,
		dew_point: data.current.dew_point,
		wind_speed: data.current.wind_speed

	})
	
})

};

module.exports.findWeather = findWeather;

// const request = require('request')

// const findWeather = (shelter, callback) => {

// const url =  `https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.lat}&lon=${shelter.lon}&
// 	%20exclude=hourly,daily&units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`


// request({ url: url, json: true }, (error, response) => {



// callback(undefined, {
// 	console.log(response)

// })

// }
// }


// module.exports.findWeather = findWeather