const express = require('express')
const path = require('path')
var host = '127.0.0.1'
var port = 2222

var app = express()
app.use(express.static(path.join(__dirname, '/www')))  // use static files in ROOT/www folder

app.get('/breakout', function (req, res) {
  res.sendFile(path.join(__dirname, 'www/breakout.html'))
})

//  The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'www/404.html'))
})

app.listen(port, host)
