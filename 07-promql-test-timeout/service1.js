const express = require('express')
const util = require('util')
const app = express()
const port = 9999
const apiMetrics = require('prometheus-api-metrics');

let get_timeout=100;
function my_function(){
	//console.log('entering my_function')
	var message="Hello WorldS"
	//console.log('finish my_function')
	//console.log('---------------------------------')
	return message
}
function gen_stat(){

	var message="# Equinox Custom Stat\n"
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="2001"} 999\n'
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="5012"} 2\n'
	return message
}

app.use(apiMetrics())
app.use( ( req, res, next ) => {
	//wait_time=Math.floor( Math.random() * 8 )*50 + 50 ;
	wait_time=get_timeout;
    setTimeout(next, wait_time);
	console.log('Wait : '+wait_time);
});
//app.get('/', (req, res) => {setTimeout((function() {res.send( my_function())}, 3000)) })
//app.get('/', (req, res) => res.status(200).send(( my_function() )) )
//app.get('/metrics', (req, res) => res.send(( gen_stat() )) )

app.get('/', function (req, res) {
	let set_timeout=req.query.set_timeout;
	if ( typeof set_timeout !== 'undefined' && set_timeout )
	{
	  //do stuff if query is defined and not null
	  get_timeout=set_timeout;
	}
    res.status(200).send( ("Hello "+set_timeout));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

;