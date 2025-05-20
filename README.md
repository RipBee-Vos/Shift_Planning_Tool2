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

## Running Locally

This project uses Node.js version 20 as specified in `.nvmrc`. Ensure you are
using this version (for example, run `nvm use`). Install dependencies with
`npm install` and provide the required environment variables in a `.env` file as
shown above.

1. Start the Express API server:

   ```bash
   node backend/server.js
   ```

   The server listens on the port defined by the `PORT` environment variable or
   defaults to `3000`.

2. In a separate terminal, start the Next.js development server:

   ```bash
   npm run dev
   ```

   This runs the Next.js app in development mode on port `3000` by default.
