import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "database",
});
export const db = drizzle(poolConnection);
import { relations } from "drizzle-orm";
import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
  timestamp,
  text,
  boolean,
  index,
  primaryKey,
} from "drizzle-orm/mysql-core";




export const users = mysqlTable(
    "users",
    {
      id: int("id").primaryKey().autoincrement(),
      username: varchar("username", { length: 256 }).notNull(),
      fullname: varchar("fullname", { length: 256 }).notNull(),
      address: varchar("address", {length: 256}).notNull(),
      email: varchar("email", { length: 256 }).notNull(),
      shortBio: text("short_bio"),
      avatar: text("avatar"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },
  );

  export const userMeta = mysqlTable("user_meta", {    
    userId: int("user_id"),
    amountEarned: int("amount_earned"),
    payPerPost: int("pay_per_post"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
  });
  

  export const posts = mysqlTable(
    "posts",
    {
      id: int("id").primaryKey().autoincrement(),
      title: varchar("title", { length: 256 }).notNull(),
      intro: varchar("intro", { length: 256 }).notNull(),
      content: varchar("content", {length: 256}).notNull(),
      userId: int("user_id").notNull(),
      views: int("views"),
      readTime: int("read_time"),
      isLocked: boolean("is_locked").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },
  );

  enum POST_STATUS {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
  }
  export const prompts = mysqlTable(
    "prompts",
    {
      id: int("id").primaryKey().autoincrement(),
      userId: int("user_id").notNull(),
      writerId: int("writer_id").notNull(), 
      title: varchar("title", { length: 256 }).notNull(),
      description: varchar("description", { length: 256 }).notNull(),
      amountToTip: int("amount_to_tip"),
      postStatus: varchar("post_status",  { length: 15 }).notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },
  );

  export const promptMeta = mysqlTable("prompt_meta", {    
    promptId: int("prompt_id"),
    amountTipped: int("amount_tipped"),
    userId: int("user_id"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
  });