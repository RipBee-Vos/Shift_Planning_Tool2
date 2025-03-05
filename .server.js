require("dotenv").config();
const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.DATABASE_ID;
const containerId = process.env.CONTAINER_ID;

const client = new CosmosClient({ endpoint, key });

async function testConnection() {
  try {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    console.log(`Connected to Cosmos DB: ${database.id}`);
  } catch (error) {
    console.error("Cosmos DB Connection Error:", error);
  }
}

testConnection();
