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

The Express server optionally respects a `PORT` variable to control which port
it listens on. When not provided it defaults to `3000`.

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

Before starting the application ensure that:

- You are using **Node.js 20** (run `nvm use` to match the version in
  `.nvmrc`).
- A `.env` file exists with the variables from the [Environment Variables](#environment-variables)
  section.
- All dependencies are installed via `npm install`.

### Start the servers

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
