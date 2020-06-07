console.log('Client Side Javascript File is loaded!')

const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')  
const messageTwo = document.querySelector('#message-2')


// Goal : Render conent to paragraphs 
// 1. Select the second messsage p from JavaScript 
// 2. Just before fetch, render loading message and empty p 
// 3. If error , render error 
// 4. if no error , render location and forecast
// 5. Test your work ! search for errors and for valid locations 

weatherForm.addEventListener('submit', (e) => { 
	e.preventDefault()	
	
	const location  = search.value 

	messageOne.textContent = 'Loading...' 
	messageTwo.textContent = ''

	fetch('/weather?address='+ location).then( ( response ) => {
		response.json().then( ( data ) => {
				if	( data.error ){
					messageOne.textContent = data.error
				} else {
					messageOne.textContent = data.location
					messageTwo.textContent = data.forecast
				}
		})
	})

}) 




