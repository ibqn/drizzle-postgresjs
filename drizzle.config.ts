import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "src/schema.ts",
  dialect: "postgresql",
  out: "drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
