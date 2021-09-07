const express = require('express');
const bodyParser = require('body-parser');
const {GetRequest} = require('./get-request');
const {PostRequest} = require('./post-request');
const {PutRequest} = require('./put-request');
const {DeleteRequest} = require('./delete-request');

class Server {

    constructor(host, port) {
        this.host = host;
        this.port = port;
    }

    run() {
    
        console.log("starting server...");
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true}));

        app.get('/mazedServer', function (req, res,) {
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log("received '%s' GET request from %s", req.query.type, ip);
            let request = new GetRequest(req.body, req.query, "GET");
            request.processRequest();
            let response = request.getResponse();
            let responseCode = request.getResponseCode();
            res.status(responseCode).send(response);
        })

        app.post('/mazedServer', function (req, res,) {
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log("received '%s' POST request from %s", req.query.type, ip);
            let request = new PostRequest(req.body, req.query, "POST");
            request.processRequest();
            let response = request.getResponse();
            let responseCode = request.getResponseCode();
            res.status(responseCode).send(response);
        })

        app.put('/mazedServer', function (req, res,) {
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log("received '%s' PUT request from %s", req.query.type, ip);
            let request = new PutRequest(req.body, req.query, "PUT");
            request.processRequest();
            let response = request.getResponse();
            let responseCode = request.getResponseCode();
            res.status(responseCode).send(response);
        })

        app.delete('/mazedServer', function (req, res,) {
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log("received '%s' DELETE request from %s", req.query.type, ip);
            let request = new DeleteRequest(req.body, req.query, "DELETE");
            request.processRequest();
            let response = request.getResponse();
            let responseCode = request.getResponseCode();
            res.status(responseCode).send(response);
        })

        var server = app.listen(this.port, this.host, function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log("mazed server listening at http://%s:%s", host, port);
        })

    }
}

module.exports = {
    Server
};