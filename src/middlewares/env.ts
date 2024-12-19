import { config } from "dotenv";
import { z } from "zod";

config();

export const envSchema = z.object({
  PORT: z
    .string()
    .default("3000")
    .refine((val) => !isNaN(Number(val)), {
      message: "PORT should be a valid number",
    })
    .transform((val) => Number(val)),

  NODE_ENV: z
    .string()
    .default("development")
    .refine((val) => ["development", "production", "test"].includes(val), {
      message: "NODE_ENV should be 'development', 'production' o 'test'",
    }),

  BASE_URL: z.string().default("http://localhost:3000"),
  DB_USER: z
    .string()
    .min(1, { message: "DB_USER cannot be empty" })
    .default("postgres"),

  DB_PASSWORD: z
    .string()
    .min(1, { message: "DB_PASSWORD cannot be empty" })
    .default("postgres"),

  DB_HOST: z
    .string()
    .min(1, { message: "DB_HOST cannot be empty" })
    .default("localhost"),

  DB_PORT: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "DB_PORT should be a valid number",
    })
    .transform((val) => Number(val))
    .default("5432"),

  DB_NAME: z.string().default("postgres"),
  DB_URL: z
    .string()
    .url()
    .default("postgres://postgres:postgres@localhost:5432/postgres"),
});

export type env = z.infer<typeof envSchema>;

let env: env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(error.flatten().fieldErrors);
  }
  process.exit(1);
}

export default env;
