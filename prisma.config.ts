import "dotenv/config";
import { defineConfig } from "prisma/config";

// prisma.config.ts is required for prisma 7.5.0+ to load .env when using Accelerate
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // We explicitly DO NOT provide datasource URL here to avoid build-time validation errors
  // on Vercel when DATABASE_URL is not set. We handle the fallback in src/lib/prisma.ts
});
