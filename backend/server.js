require('dotenv').config();
 codex/finalize-backend-server-js-implementation
const { CosmosClient } = require('@azure/cosmos');


const express = require('express');
const { CosmosClient } = require('@azure/cosmos');

const app = express();
const port = process.env.PORT || 3000;

 main
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.DATABASE_ID;
const client = new CosmosClient({ endpoint, key });

async function testConnection() {
  try {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    console.log(`Connected to Cosmos DB: ${database.id}`);
  } catch (error) {
    console.error('Cosmos DB Connection Error:', error);
  }
}

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
