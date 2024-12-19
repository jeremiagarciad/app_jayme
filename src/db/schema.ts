import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const appointmentsTable = pgTable("appointments", {
  id: integer("id").primaryKey(),
  user_id: integer("user_id").notNull(),
  appointmet_date: date("appointmet_date").notNull(),
  description: varchar("description"),
  created_at: integer("created_at")
    .notNull()
    .default(sql`now()`),
  updated_at: integer("updated_at")
    .notNull()
    .default(sql`now()`),
});
export { appointmentsTable };
