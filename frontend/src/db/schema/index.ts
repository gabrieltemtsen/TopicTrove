
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
      intro: text("intro").notNull(),
      content: text("content",).notNull(),
      userId: int("user_id").notNull(),
      views: int("views"),
      readTime: int("read_time"),
      isLocked: boolean("is_locked").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },
  );

//   enum POST_STATUS {
//     PENDING,
//     IN_PROGRESS,
//     COMPLETED,
//   }
  export const prompts = mysqlTable(
    "prompts",
    {
      id: int("id").primaryKey().autoincrement(),
      userId: int("user_id").notNull(),
      writerId: int("writer_id").notNull(), 
      title: varchar("title", { length: 256 }).notNull(),
      description: text("description").notNull(),
      amountToTip: int("amount_to_tip"),
      postStatus: mysqlEnum("post_status", ['PENDING','IN_PROGRESS','COMPLETED']),
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