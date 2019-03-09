const express = require('express')
const util = require('util')
const app = express()
const port = 9999

function my_function(){
	console.log('entering my_function')
	var message="Hello World"
	console.log('finish my_function')
	console.log('---------------------------------')
	return message
}

function gen_stat(){

	var message="# Equinox Custom Stat\n"
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="2001"} 999\n'
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="5012"} 2\n'
	return message
}
function sinWaveByMinute(){
	var message="#Sine Web\n"
	
	// Get Minute
	var dateClass=new Date();
	var now_minute=dateClass.getMinutes();
	console.log('Console Now Min : '+now_minute);
	message = message + "Web Now Minute : "+now_minute;
		
	return message;
}

app.get('/', (req, res) => res.send(( my_function() )) )
app.get('/metrics', (req, res) => res.send(( gen_stat() )) )
app.get('/sine', (req, res) => res.send(( sinWaveByMinute() )) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))