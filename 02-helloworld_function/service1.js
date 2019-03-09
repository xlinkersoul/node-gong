const express = require('express')
const util = require('util')
const app = express()
const port = 9999

function my_function(){
	console.log('entering my_function')
	var message="Hello World from my_function"
	console.log('finish my_function')
	console.log('---------------------------------')
	return message
}

app.get('/', (req, res) => res.send(( my_function() )) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))