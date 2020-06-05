console.log('Client Side Javascript File is loaded!')

const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => { 
	e.preventDefault()	
	
	const location  = search.value 
	
	fetch('http://127.0.0.1:3000/weather?address='+ location).then( ( response ) => {
		response.json().then( ( data ) => {
				if	( data.error ){
					console.log(data.error)
				} else {
					console.log(data.location)
					console.log(data.forecast)
				}
		})
	})

}) 

// Goal : Use input value to get weather 

// 1. Migrate fetch call into the submit call back
// 2. Use the search test as the address query string value 
// 3. Submit the form with a valid and invalid value to test




