const { MongoClient } = require("mongodb");

class Database {

    constructor() {
    
        const username = encodeURIComponent(process.env.DB_USERNAME);
        const password = encodeURIComponent(process.env.DB_PWD);
        const dbUrl = process.env.DB_URL;
        const authSource = process.env.DB_AUTH_SOURCE;
        this.dbName = 'mazedDB'

        const uri =
            `mongodb://${username}:${password}@${dbUrl}/?authSource=${authSource}`;

        this.client = new MongoClient(uri);
    }
    
    async testInsertRecord(record) {
        
        try {
            await this.client.connect();
            let testCollection = await this.client.db(this.dbName).collection('testCollection');
            await testCollection.insertOne(record);
        } catch {
            throw "Failed to insert record into database"
        } finally {
            await this.client.close();
        }

    }

}

module.exports = {
    Database
};