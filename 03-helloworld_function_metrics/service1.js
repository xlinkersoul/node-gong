const express = require('express')
const util = require('util')
const app = express()
const port = 9999

function my_function(){

	var message="# Equinox Custom Stat\n"
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="2001"} 999\n'
	message = message + 'equinox_node_result{service="OCF", server="OCF3g402",code="5012"} 2\n'
	return message
}

app.get('/', (req, res) => res.send(( my_function() )) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))