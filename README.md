# ⚡ express-prisma-ts

> Minimal, production-ready REST API template — Express.js + Prisma + PostgreSQL + TypeScript

---

## Stack

| Layer | Tech |
|---|---|
| Runtime | Node.js 18+ |
| Framework | Express.js |
| ORM | Prisma |
| Database | PostgreSQL |
| Language | TypeScript |

---

## Quick Start

```bash
# 1. Clone
git clone <repository-url>
cd express-prisma-ts

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# Edit .env with your database credentials

# 4. Run migrations
npx prisma migrate dev

# 5. Start dev server
npm run dev
```

---

## Project Structure

```
express-prisma-ts/
├── prisma/
│   └── schema.prisma       # Database schema
├── src/
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Express middlewares
│   ├── routes/             # Route definitions
│   └── validators/         # Zod schemas
├── .env                    # Environment variables
├── prisma.config.ts        # Prisma configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## Environment Variables

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your_secret_key"
JWT_EXPIRES_IN="2h"
PORT=3000
```

---

## Database Schema

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  author   User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

---

## Scripts

```bash
npm run dev      # Development server with hot-reload
npm run build    # Compile TypeScript
npm start        # Start production server
```

---

## Extending the Template

1. Add new models to `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <migration_name>`
3. Create controller in `src/controllers/`
4. Add validation schema in `src/validators/`
5. Register routes in `src/routes/`

---