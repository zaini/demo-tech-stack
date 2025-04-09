# Demo Tech Stack

A modern web application demonstrating a Next.js App Router tech stack with React, TypeScript, Tailwind CSS, and Prisma.

## Features

- 📝 Create, read, and delete posts
- 🛠️ Modern component architecture
- 🎨 Beautiful UI with Tailwind CSS and Shadcn UI
- 🔄 Server components and client components
- 🗃️ PostgreSQL database with Prisma ORM

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4, Shadcn UI
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: React Hooks and Context
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide Icons
- **Styling**: Tailwind CSS with utility-first approach
- **Package Manager**: Yarn

## Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn package manager
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:zaini/demo-tech-stack.git
   cd demo-tech-stack
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your database connection string.

4. Run database migrations:

   ```bash
   yarn prisma migrate dev
   ```

5. Seed the database (optional):

   ```bash
   yarn prisma db seed
   ```

6. Start the development server:

   ```bash
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app/` - Next.js App Router pages and layouts
- `/app/_components/` - Page-specific components
- `/app/_actions/` - Server actions
- `/components/ui/` - Shadcn UI components
- `/components/my-ui/` - Custom reusable components
- `/lib/` - Utility functions and configurations
- `/hooks/` - Custom React hooks
- `/prisma/` - Database schema and migrations
- `/public/` - Static assets

## Database Schema

The project currently uses a simple schema with a `Post` model:

```prisma
model Post {
  id      String @id @default(uuid())
  title   String
  content String
}
```

## Development

### Commands

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint
- `yarn prisma studio` - Open Prisma Studio to manage your database

## Deployment

This application can be deployed on any platform that supports Next.js, such as Vercel or Netlify.

```bash
# Example deployment to Vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
