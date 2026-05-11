# Express + Prisma TypeScript Boilerplate

A production-ready boilerplate for building REST APIs with Express.js, Prisma ORM, and TypeScript. This boilerplate includes authentication, validation, and a well-structured architecture to help you get started quickly.

## Features

- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js
- **Prisma ORM** - Modern database toolkit with type-safe database queries
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Authentication** - JWT-based authentication with bcrypt password hashing
- **Validation** - Zod schema validation for request data
- **Error Handling** - Comprehensive error handling and input validation
- **Structured Architecture** - Well-organized code following clean architecture principles

## Project Structure

```
src/
├── controllers/     # Request handlers
├── middlewares/    # Custom middleware functions
├── routes/        # API route definitions
├── validators/     # Request validation schemas
├── types/         # TypeScript type definitions
└── prisma/        # Prisma schema and client
```

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- Environment variables for database connection

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
```

3. **Run database migrations:**
```bash
npx prisma migrate dev
```

## API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /login` - User login

## Available Scripts

```bash
npm run dev     # Run in development mode
npm run build     # Build the project
npm run start     # Run the built application
npm run test      # Run tests
```

## Project Structure

The application follows a modular structure:

- `src/`
  - `controllers/` - Contains route handlers
  - `routes/` - Route definitions
  - `middlewares/` - Custom middleware functions
  - `validators/` - Zod validation schemas
  - `types/` - TypeScript type definitions

## Authentication

This boilerplate includes a complete JWT-based authentication system with:
- User registration
- Password hashing with bcrypt
- JWT token generation and verification
- Protected routes middleware

## Environment Variables

Create a `.env` file in your project root with the following variables:

```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## API Endpoints

### Authentication Routes
- `POST /register` - Register a new user
- `POST /login` - Login with email and password

### Database Schema

The database schema includes:
- Users table with email, name, and password fields
- Posts table for content management

## Development

To run the development server:

```bash
npm run dev
```

The server will be available at `http://localhost:3000` (or your configured port)

## Deployment

This project includes deployment configuration for popular cloud platforms.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Create a pull request

## License

MIT