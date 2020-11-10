const request = require("request")
// const dotenv = require( )


var findWeather = function (shelter, callback) { 
	var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.lat}&lon=${shelter.lon}&
	%20exclude=hourly,daily&units=imperial&appid=1f9a85ae0301e9988c9e14ba3ac50022`

	var getWeather = request(url, (error, response, body) => {

	const data = JSON.parse(body)
 

	callback(undefined, {
		data: data,
		description: data.current.weather[0].description,
		temp: data.current.temp,
		pressure: data.current.pressure,
		humidity: data.current.humidity,
		dew_point: data.current.dew_point,
		wind_speed: data.current.wind_speed,
		wind_deg: data.current.wind_deg,
		
		
   		date_0: new Date((data.daily[0].dt)*1000).toLocaleDateString("en-US"),
   		description_0: data.daily[0].weather[0].description,
   		pop_0: data.daily[0].pop,
  		day_temp_0: data.daily[0].temp.day,
   		night_temp_0: data.daily[0].temp.night,
    	pressure_0: data.daily[0].pressure,
    	humidity_0: data.daily[0].humidity,
   		dew_point_0: data.daily[0].dew_point,
   		wind_speed_0: data.daily[0].wind_speed,
 		wind_deg_0: data.daily[0].wind_deg,


 		date_1: new Date((data.daily[1].dt)*1000).toLocaleDateString("en-US"),
 		description_1: data.daily[1].weather[0].description,
   		pop_1: data.daily[1].pop,
  		day_temp_1: data.daily[1].temp.day,
   		night_temp_1: data.daily[1].temp.night,
    	pressure_1: data.daily[1].pressure,
    	humidity_1: data.daily[1].humidity,
   		dew_point_1: data.daily[1].dew_point,
   		wind_speed_1: data.daily[1].wind_speed,
 		wind_deg_1: data.daily[1].wind_deg,


 		date_2: new Date((data.daily[2].dt)*1000).toLocaleDateString("en-US"),
 		description_2: data.daily[2].weather[0].description,
   		pop_2: data.daily[2].pop,
  		day_temp_2: data.daily[2].temp.day,
   		night_temp_2: data.daily[2].temp.night,
    	pressure_2: data.daily[2].pressure,
    	humidity_2: data.daily[2].humidity,
   		dew_point_2: data.daily[2].dew_point,
   		wind_speed_2: data.daily[2].wind_speed,
 		wind_deg_2: data.daily[2].wind_deg


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