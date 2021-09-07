const { Request } = require("./request");

class PostRequest extends Request {
    
    constructor(requestBody, requestQuery, httpRequestType) {
        super(requestBody, requestQuery, httpRequestType);
    }

    processRequest() {

        switch(this.requestQuery.type) {
            case 'TestDBConnection': 
                this.response = this.handleTestDBConnectionRequest(); break;
            default:
                this.response = this.handleDefault(); break;
        }
    }

    handleTestDBConnectionRequest() {
        var response = "";
        
        return response;
    }
}

module.exports = {
    PostRequest
};