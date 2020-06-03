const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

//for customoizing server - root of the sites
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {   
	//sending array of object
	res.send([{
		name : 'Andrew'
	}, {
		name : 'Sarah'
	}])
})

app.get('/about' , (req, res) => {
	res.send('<h1> About page </h1>')
}) 

app.get('/weather', (req, res) => {
	res.send({
		'forecast' : 'It is snowing',
		'location' : 'Philadelphia' 
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})  


