const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
	res.render('404', {
		title: '404',
		name : 'Andrew Mead',
		errorMessage : 'Help article not found'
	})
})

app.get('*', (req, res ) => {
	res.render('404', {
		title : '404' ,
		name : 'Andrew Mead', 
		errorMessage : 'Page not found'
	})
})	 

// Goal : Create and render a 404 page with handle bars 
// 1. Set up the template to render the header and footer 
// 2. Setup the template to render an error message in 5 paragraph
// 3. Render the template for both rotues 
// 		- Page not found 
// 		- Help article not found 
// 4. Test your Worker. Visit /what and /help/units 


app.listen(3000, () => {
	console.log('Server is up on port 3000')
})  


