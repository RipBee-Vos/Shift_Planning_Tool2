codex/clean-up-server-js-and-resolve-conflicts
require("dotenv").config();
const express = require('express');
const { CosmosClient } = require("@azure/cosmos");

require('dotenv').config();
 codex/finalize-backend-server-js-implementation
const { CosmosClient } = require('@azure/cosmos');


const express = require('express');
const { CosmosClient } = require('@azure/cosmos');
 main

const app = express();
const port = process.env.PORT || 3000;

codex/clean-up-server-js-and-resolve-conflicts

 main
 main
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.DATABASE_ID;
const client = new CosmosClient({ endpoint, key });

app.get('/', (req, res) => {
  res.send('Hello, Shift Planning Tool!');
});

async function startServer() {
  try {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    console.log(`Connected to Cosmos DB: ${database.id}`);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Cosmos DB Connection Error:', error);
  }
}

 codex/clean-up-server-js-and-resolve-conflicts
startServer();

 codex/finalize-backend-server-js-implementation
testConnection();

app.get('/', (req, res) => {
  res.send('Hello, Shift Planning Tool!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  testConnection();
});
main
 main
