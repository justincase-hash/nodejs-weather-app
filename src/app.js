const express = require('express')

const app = express()

app.get('', (req , res) => {
	res.send('Hello Express!') 
})

app.get('/help', (req, res) => {
	res.send('Help Page')
})

app.get('/about' , (req, res) => {
	res.send('About page')
}) 

app.get('/weather', (req, res) => {
	res.send('Weather page')
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})  


// Goal : Setup two new routes 
// 1. Set up an about route and render a page titile 
// 2. Set up a weather route and render a page titile 
// 3. Test your work by visiting both in the browser