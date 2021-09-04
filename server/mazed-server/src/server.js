const express = require('express');
const bodyParser = require('body-parser');
const {RequestHandler} = require('./request-handler');

function run() {
    
    console.log("starting server...");
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.post('/mazedServerRequest', function (req, res,) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("received '%s' request from %s", req.body.requestType, ip);
        
        let requestHandler = new RequestHandler(req.body);
        let response = requestHandler.processRequest();
        let responseCode = requestHandler.getResponseCode();
        res.status(responseCode).send(response);
    })
        
    var server = app.listen(8081, 'localhost', function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("mazed server listening at http://%s:%s", host, port);
    })

}

module.exports = {
    run
};