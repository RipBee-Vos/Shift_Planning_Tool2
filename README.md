# Shift Planning Tool

Under Construction

## Environment Variables

The application requires several environment variables to connect to Cosmos DB.  
When developing locally, create a `.env` file in the project root or provide
these values through your deployment configuration.

Required variables:

- `COSMOS_ENDPOINT`
- `COSMOS_KEY`
- `DATABASE_ID`
- `CONTAINER_ID`

Example `.env` file:

```
COSMOS_ENDPOINT=<your-endpoint>
COSMOS_KEY=<your-key>
DATABASE_ID=ShiftPlanningDB
CONTAINER_ID=ShiftPlanning
```

The `.env` file is listed in `.gitignore` and should not be committed to the
repository.
