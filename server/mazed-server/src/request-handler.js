const { request } = require("express");

class RequestHandler {
    
    constructor(requestBody) {
        this.requestBody = requestBody;
        this.responseCode = 200;
    }

    processRequest() {
        var response = '';

        switch(this.requestBody.requestType) {
            case 'type1': 
                response = this.handleTypeOneRequest(); break;
            case 'type2': 
                response = this.handleTypeTwoRequest(); break;
            case 'type3': 
                response = this.handleTypeThreeRequest(); break;
            default:
                var type = this.requestBody.requestType;
                this.responseCode = 400;
                response = `{
                                "error" : "400 Bad Request",
                                "description": "Couldn't process request of type '${type}'."
                            }`;
        }
        return response;

    }

    handleTypeOneRequest() {
        var response = `{
                            "success" : "processed type1 request"
                        }`;
        return response;
    }

    handleTypeTwoRequest() {
        var response = `{
                            "success" : "processed type2 request"
                        }`;
        return response;
    }

    handleTypeThreeRequest() {
        var response = `{
                            "success" : "processed type3 request"
                        }`;
        return response;
    }

    getResponseCode() {
        return this.responseCode;
    }

}

module.exports = {
    RequestHandler
};