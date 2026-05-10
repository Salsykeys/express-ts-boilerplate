# Express.js + Prisma Template

This is a template project for building web applications with Express.js and Prisma ORM.

## Overview

This template provides a foundation for building REST APIs with Express.js and database operations with Prisma. It includes:

- Express.js server setup
- Prisma ORM for database operations
- PostgreSQL database integration
- TypeScript support

## Features

- Preconfigured Express server
- Prisma schema with User and Post models
- Environment configuration with dotenv
- PostgreSQL database integration

## Prerequisites

- Node.js (version 16 or higher)
- PostgreSQL database
- npm or yarn package manager

## Setup

1. Clone the repository:
   \```bash
   git clone <repository-url>
   \```

2. Install dependencies:
   \```bash
   npm install
   \```

3. Set up your database:
   - Create a .env file with your database connection string
   - Run Prisma migrations:
     \```bash
     npx prisma migrate dev
     \```

4. Start the development server:
   \```bash
   npm run dev
   \```

## Project Structure

- \`prisma/schema.prisma\` - Database schema definition
- \`src/\` - Application source code
- \`prisma.config.ts\` - Prisma configuration file
- Environment variables in \`.env\` file

## Development

To start the development server with hot-reload:

\```bash
npm run dev
\```

## Building

To build the application for production:

\```bash
npm run build
\```

## Environment Variables

Create a \`.env\` file in the root directory with your database connection:

\```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
\```

## Prisma Schema

The Prisma schema includes:
- User model with id, email, and name fields
- Post model with title, content, and author relationship

## Usage

This template is designed to be a starting point for building Express.js applications with Prisma ORM integration. You can extend it by:

1. Adding new models to the Prisma schema
2. Creating new API endpoints in your Express server
3. Extending the data models as needed

## Folder Structure

\```
.
├── generated/
├── node_modules/
├── prisma/
│   └── schema.prisma
├── src/
│   └── (add your source code here)
├── .env
├── prisma.config.ts
└── package.json
\```

## Available Scripts

- \`npm run dev\` - Run the application in development mode
- \`npm run build\` - Build the application for production
- \`npm start\` - Start the production server

## Dependencies

- Express.js as the web framework
- Prisma as the ORM
- PostgreSQL as the database
- TypeScript for type checking