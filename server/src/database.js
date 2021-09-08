const { MongoClient } = require("mongodb");

class Database {

    constructor() {
    
        const username = encodeURIComponent(process.env.DB_USERNAME);
        const password = encodeURIComponent(process.env.DB_PWD);
        const dbUrl = process.env.DB_URL;
        const authSource = process.env.DB_AUTH_SOURCE;

        const uri =
            `mongodb://${username}:${password}@${dbUrl}/?authSource=${authSource}`;

        const client = new MongoClient(uri);

        async function run() {
            try {
                await client.connect();
                await client.db("admin").command({ ping: 1 });
                console.log("Successfully connected to database");
            } finally {
                await client.close();
            }
        }   
        run().catch(console.dir);
    } 
}

module.exports = {
    Database
};