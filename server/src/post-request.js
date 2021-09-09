const { Request } = require("./request");

class PostRequest extends Request {
    
    constructor(requestBody, requestQuery, httpRequestType) {
        super(requestBody, requestQuery, httpRequestType);
    }

    processRequest() {

        switch(this.requestQuery.type) {
            case 'TestDBConnection': 
                this.handleTestDBConnectionRequest(); break;
            default:
                this.handleDefault(); break;
        }
    }

    handleTestDBConnectionRequest() {
    
        try {
            this.database.testInsertRecord(this.requestBody);
        } catch {
            this.responseCode = 500;
            this.response = {
                serverError: "500 Internal Server Error",
                description: "Failed to insert record into database"
            };
            return;
        }
        this.responseCode = 201;
        this.response = {
            result: "201 Created",
            description: "Successfully inserted record into database"
        };
    }
}

module.exports = {
    PostRequest
};