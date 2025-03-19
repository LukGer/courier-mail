import Database from "@tauri-apps/plugin-sql";

import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export const sqlite = await Database.load("sqlite:sqlite-1.db");

export const db = drizzle({
  connection: sqlite.path,
  schema,
});
