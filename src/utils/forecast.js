const request = require('request') 


// //Goal : Add new ata to forecast 
// 1. Update the forecast string to include new data 
// 2. Commit your changes 
// 3. Push your changes to github and deploy to heroku 
// 4. Test your work in the live application  

const forecast = (latitude, longitude, callback ) =>  {
		const url = "http://api.weatherstack.com/current?access_key=2194777115c6c0a5ddc78a6ce78a0f72&query="+latitude+","+longitude+"&units=f"
		request({url : url , json : true }, (error , { body } ) => {
				if (error){
						callback('Unable to connect to weather service', undefined)
				} else if (body.error) {
						callback('Unable to find location', undefined)
				} else {  
						const temperature = body.current.temperature;
						const feelslike = body.current.feelslike; 
						const weatherdescription = body.current.weather_descriptions[0];
						const humidity = body.current.humidity;
						callback(undefined , weatherdescription+". It is currently "+temperature+" degress out. It feels like "+feelslike+" degress out. Humidity is " +humidity)
				}
		})

}
// test

module.exports  = forecast