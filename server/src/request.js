const { Database } = require("./database");

class Request {

    constructor(requestBody, requestQuery, httpRequestType) {
        this.requestBody = requestBody;
        this.requestQuery = requestQuery;
        this.httpRequestType = httpRequestType;
        this.responseCode = 200;
        this.response = "";
        this.database = new Database();
    }

    handleDefault() {
        this.responseCode = 400;
        
        let errorResponse = {
            serverError: "400 Bad Request",
            description: `Couldn't process ${this.httpRequestType}`
                          + ` request of type '${this.requestQuery.type}'`
        }
        return errorResponse;
    }

    getResponseCode() {
        return this.responseCode;
    }

    getResponse() {
        return this.response;
    }

}

module.exports = {
    Request
};