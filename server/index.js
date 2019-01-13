var express = require('express')
var app = express()

var port = normalizePort(process.env.PORT || '3004');
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)