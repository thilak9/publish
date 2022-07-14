///////////// POSTGRESQL /////////////

// const { Pool } = require("pg");

// const pool = new Pool({database: process.env.PG_DATABASE});

// module.exports = { pool };


///////////// MONGODB ////////////////

const { MongoClient } = require('mongodb');

const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;
'mongodb://localhost:27017/doggos';

const init = async () => {
    let client = await MongoClient.connect(connectionUrl)
    console.log("connected to " + dbName);
    return client.db(dbName)
}

module.exports = { init };