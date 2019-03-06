const express = require('express')
const util = require('util')
const app = express()
const port = 9999


app.get('/metrics', (req, res) => res.send(("Hello World")) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))