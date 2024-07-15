import type { Config } from "drizzle-kit";

export default {
  schema: "src/schema.ts",
  dialect: "postgresql",
  out: "drizzle",
} satisfies Config;
