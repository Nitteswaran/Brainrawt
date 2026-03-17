# Brainrawt - Micro-Learning SaaS Platform

Brainrawt is a daily micro-learning platform where users learn 1 useful skill every day in under 5 minutes. The application features a bold Neo-Brutalist design.

## Features Built
- **Neo-Brutalist Global Design:** Space Grotesk font, sharp UI limits, thick borders, massive hard shadows, and intentional rotation (`sticker effect`).
- **User Authentication:** Integrated with NextAuth matching the schema (Google OAuth + Credentials).
- **Gamification:** Streak counter, XP tracking logic, local progress state simulations.
- **AI Content Generator Route:** OpenAI API mocked setup with `/api/generate-skill`.
- **Pages Complete:**
  - Landing, Login, Signup
  - Onboarding, Library, User Profile
  - Pricing (Free vs Premium plans with Stripe Mock integration)
  - Daily Skill View & Quizzes
  - Admin Dashboard

## Tech Stack
- Frontend: Next.js 14 (App Router), React, TailwindCSS, `clsx` & `tailwind-merge`
- Design Tokens: Neo-Brutalist aesthetics.
- Backend: Next.js Route Handlers.
- Database: Prisma schema mapped for PostgreSQL.

## Getting Started

First, install dependencies:
```bash
npm install
```

Copy the example environment variables:
```env
# Create a .env file containing:
DATABASE_URL="postgresql://user:password@localhost:5432/brainrawt"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"
OPENAI_API_KEY="your_openai_api_key_here"
STRIPE_SECRET_KEY="sk_test_..."
GOOGLE_CLIENT_ID="your_google_id"
GOOGLE_CLIENT_SECRET="your_google_secret"
```

Initialize your Prisma database:
```bash
npx prisma generate
npx prisma db push
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Rules for Contribution
Follow the neo-brutalism design style:
- Borders must be 4px solid black (`border-4 border-black`).
- Shadows must be hard inset/drop-shadows with NO blur (`shadow-neo-sm`, `shadow-neo-md`, etc).
- Use `rotate-1`, `rotate-2`, `-rotate-1` sparingly to create a "slapped sticker" effect on cards and badges.
- Avoid perfectly sharp roundings (use `rounded-none` or `rounded-full`).
