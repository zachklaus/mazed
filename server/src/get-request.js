const { Request } = require("./request");

class GetRequest extends Request {
    
    constructor(requestBody, requestQuery, httpRequestType) {
        super(requestBody, requestQuery, httpRequestType);
    }

    processRequest() {

        switch(this.requestQuery.type) {
            case 'type1': 
                this.response = this.handleTypeOneRequest(); break;
            case 'type2': 
                this.response = this.handleTypeTwoRequest(); break;
            case 'type3': 
                this.response = this.handleTypeThreeRequest(); break;
            default:
                this.response = this.handleDefault(); break;
        }
    }

    handleTypeOneRequest() {
        var response = {
            success: `processed type1 ${this.httpRequestType} request`
        }
        return response;
    }

    handleTypeTwoRequest() {
        var response = {
            success: `processed type2 ${this.httpRequestType} request`
        }
        return response;
    }

    handleTypeThreeRequest() {
        var response = {
            success: `processed type3 ${this.httpRequestType} request`
        }
        return response;
    }

}

module.exports = {
    GetRequest
};