import { defineConfig } from "drizzle-kit";
import env from "./jayme-backend/src/middlewares/env";

export default defineConfig({
  dialect: "postgresql",
  out: "src/db/migrations",
  schema: "src/db/schema.ts",
  dbCredentials: {
    url: env.DB_URL,
  },
  verbose: true,
  strict: true,
});
