require('dotenv').config();
const express = require('express');
const { CosmosClient } = require('@azure/cosmos');

const app = express();
const port = process.env.PORT || 3000;

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

startServer();
