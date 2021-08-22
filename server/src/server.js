console.log("starting server...")

var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    
    res.send('server received request');
})

var server = app.listen(8081, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port
    console.log("mazed server listening at http://%s:%s", host, port)
})
