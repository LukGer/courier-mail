import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const thread = sqliteTable("thread", {
  id: text("id").primaryKey(),
  subject: text("subject"),
  historyId: text("historyId"),
});

export type DbThread = typeof thread.$inferSelect;
export type DbThreadInsert = typeof thread.$inferInsert;
