console.log('Client Side Javascript File is loaded!')

fetch('http://puzzle.mead.io/puzzle').then( (response) => { 
	 // this function will run when json data has arrived & been parsed
	response.json().then( (data) => {
			console.log(data)
	})
})

fetch('http://127.0.0.1:3000/weather?address=boston').then( ( response ) => {
	response.json().then( ( data ) => {
			if	( data.error ){
				console.log(data.error)
			} else {
				console.log(data.location)
				console.log(data.forecast)
			}
	})
})


// Goal : Fetch weather 

// 1. Set up a call to fetch to fetch weather for boston
// 2. Get the parse JSON Parameter 
//        - if error property , print error 
//         -if no error property, print location and forecast 
// 3. Refresh the browser and test your work