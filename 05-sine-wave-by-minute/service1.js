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
	
	// convert Minute to degree
	// 60 x 6 = 360, so to convert Minute to Degree 
	//, we need to multiply minute by 6
	var degree=now_minute*6;
	console.log('Console Now Degree : '+degree);
	message = message + "Web Now Degree : "+degree;
	
	// convert degree to radian
	// 1 degree = 0.0174533 radian
	var radian=degree*0.0174533;
	console.log('Console Now radian : '+radian);
	message = message + "Web Now radian : "+radian;	
	
	// get Sin Value
	var sinValue = Math.sin(radian);
	console.log('Console Now sinValue : '+sinValue);
	message = message + "Web Now sinValue : "+sinValue;		
	
	message = 'my_sin_wave_1{service="sine"} '+sinValue+'\n'
	
	return message;
}

app.get('/', (req, res) => res.send(( my_function() )) )
app.get('/metrics', (req, res) => res.send(( sinWaveByMinute() )) )
app.get('/sine', (req, res) => res.send(( sinWaveByMinute() )) )


app.listen(port, () => console.log(`Example app listening on port ${port}!`))