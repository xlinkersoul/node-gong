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
	var message = "#Sine Web\n"
	
	// declare variable myDate 
	var myDate;
	
	// [---------------------------]	
	// [ Link myDate to Date Class ]
	// [---------------------------]
	// to get Time, we Need to use Date Class in Node.JS
	// so we construct/link myDate to Date Class template
	// syntax : 'myDate = new Date()'
	myDate = new Date();

	// [------------------------------------]	
	// [ Get Time by Calling toTimeString() ]
	// [------------------------------------]	
	// syntax : 'myDate.toTimeString()'
	var now_time = myDate.toTimeString();
	message = message + "Calling myDate.toTimeString()\n"
	message = message + "Result : '" + now_time + "'\n";
	message = message + "===================================================\n"
	
	// [------------------------------------]	
	// [ Get Minute by Calling getMinutes() ]
	// [------------------------------------]	
	// syntax : 'myDate.toTimeString()'
	var now_minute = myDate.getMinutes();
	message = message + "Calling myDate.getMinutes()\n";
	message = message + "Result : '" + now_minute + "'\n";
	message = message + "===================================================\n"
		
	return message;
}

app.get('/', (req, res) => res.send(( my_function() )) )
app.get('/metrics', (req, res) => res.send(( gen_stat() )) )
app.get('/sine', (req, res) => res.send(( sinWaveByMinute() )) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))