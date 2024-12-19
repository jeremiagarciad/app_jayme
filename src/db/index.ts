import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import env from "../middlewares/env";

const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: Number(env.DB_PORT),
});

const db = drizzle(env.DB_URL);

export default db;
