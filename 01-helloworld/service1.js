const express = require('express')
const util = require('util')
const app = express()
const port = 9999

function OCF_genStat(){

var date = new Date();
var baseValue = date.getHours()*50+date.getMinutes()*20+date.getSeconds();

var Stat = "#OCF Stat\n";

baseValue = date.getHours()*50+date.getMinutes()*20+date.getSeconds();
random_stat=baseValue +Math.floor(Math.random() * Math.floor(5))
Stat  += util.format('equinox_node_error{service="OCF", server="OCF3g402", env="production",code="2001"} %d\n',random_stat);


baseValue = date.getHours()*20+date.getMinutes()*20+date.getSeconds();
random_stat=baseValue +Math.floor(Math.random() * Math.floor(5))
Stat  += util.format('equinox_node_error{service="OCF", server="OCF3g402", env="production",code="5012"} %d\n',random_stat);
return Stat
}
app.get('/metrics', (req, res) => { res.setHeader('Content-Type', 'text/plain') ; res.send((OCF_genStat())); })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))