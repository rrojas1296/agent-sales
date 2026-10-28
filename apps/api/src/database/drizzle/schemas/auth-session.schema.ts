import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";

export const authSession = pgTable("auth_session", {
  id: uuid("id").primaryKey().defaultRandom(),
  refreshToken: varchar("refresh_token").notNull(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
