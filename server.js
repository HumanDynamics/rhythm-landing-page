const express = require('express')
const path = require('path')
var host = '127.0.0.1'
var port = 3000

var app = express()
app.use(express.static(path.join(__dirname, '/www')))  // use static files in ROOT/www folder

app.get('/breakout', function (req, res) {
  res.sendFile('www/breakout.html')
})

//  The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.sendFile('www/404.html')
})

app.listen(port, host)
