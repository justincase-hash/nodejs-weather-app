const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Goal : Create a partial for the footer 

// // 1. Setup the template for the footer partial "Created by some name" 
// // 2. Render the partial at the bottom of all three pages 
// // 3. test your work by visiting all three pages

const app = express() 


// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs') 
app.set('views' , viewsPath)  // setting up default views folder 
hbs.registerPartials(partialsPath) 

//for customoizing server - root of the sites , Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title : 'Weather',	
		name : 'Andrew Mead'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title : 'About me',
		name : 'Andrew Mead'
	})
})  

app.get('/help', (req, res) => {
	res.render('help', {
		title : 'Help' ,
		name : 'Andrew mead'
	})
})

app.get('/weather', (req, res) => {
	res.send({
		'forecast' : 'It is snowing',
		'location' : 'Philadelphia' 
	})
}) 

app.get('/help/*', (req, res) => {
	res.send('Help article not found')
})

app.get('*', (req, res ) => {
	res.send('My 404 Page')
})	

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})  


