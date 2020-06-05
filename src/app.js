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
	if( !req.query.address) {
		return res.send({
			error : 'You must provide an address'
		})
	}

	res.send({
		'forecast' : 'It is snowing',
		'location' : 'Philadephia',
		'address' : req.query.address 
	})
})  



// Goal : Update weather end point to accept address 

// 1. No address? send back an error message 
// 2. address? send back the statin JSON
// 3.	Add address property onto JSON which returns the provided address 
// 4.  Test /weather and /weather?address=philadelphia


app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error : 'You must provide a search term'
		})
	} 

	console.log(req.query.search) 
	res.send({
		products : []
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


app.listen(3000, () => {
	console.log('Server is up on port 3000')
})  


