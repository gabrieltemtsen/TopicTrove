// write the schema here
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
      username: varchar("username", { length: 256 }).notNull().unique(),
      fullname: varchar("fullname", { length: 256 }).notNull(),
      address: varchar("address", {length: 256}).notNull(),
      email: varchar("email", { length: 256 }).notNull().unique(),
      shortBio: text("short_bio"),
      avatar: text("avatar"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },(table)=>({
      usernameIdx:uniqueIndex('username_idx').on(table.username),
      emailIdx:uniqueIndex('email_idx').on(table.email),
    })
  );

  export const userMeta = mysqlTable("user_meta", {   
    id:int('id').primaryKey().autoincrement(), 
    userId: int("user_id"),
    amountEarned: int("amount_earned").default(0),
    payPerPost: int("pay_per_post"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
  });
  

  export const posts = mysqlTable(
    "posts",
    {
      id: int("id").primaryKey().autoincrement(),
      title: varchar("title", { length: 256 }).notNull(),
      intro: text("intro"),
      content: text("content").notNull(),
      userId: int("user_id").notNull(),
      slug:varchar('slug',{length:256}).unique().notNull(),
      views: int("views").default(0),
      readTime: int("read_time"),
      isLocked: boolean("is_locked").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },(table)=>({
      titleIdx:index('title_idx').on(table.title),
    })
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
      postStatus: mysqlEnum("post_status", ['PENDING','IN_PROGRESS','COMPLETED','ACCEPTED','DECLINED']),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at"),
    },(table)=>({
titleIdx:index('title_idx').on(table.title),
statusIdx:index('status_idx').on(table.postStatus),
    })
  );

  export const promptsMeta = mysqlTable("prompts_meta", {  
    id:int('id').autoincrement().primaryKey()  ,
    promptId: int("prompt_id"),
    amountTipped: int("amount_tipped"),
    userId: int("user_id"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
  });

  export const userRelations=relations(users,({many,one})=>({
    posts:many(posts),
  prompts:many(prompts),
  promptsMeta:many(promptsMeta),
  meta:one(userMeta,{
    fields:[users.id],references:[userMeta.userId]
  })
  }))
  export const postRelations=relations(posts,({many,one})=>({
    user:one(users,{
      fields:[posts.userId],references:[users.id]
    })
  }))
  export const promptRelations=relations(prompts,({many,one})=>({
    meta:many(promptsMeta),
    promptOwner:one(users,{
      fields:[prompts.userId],references:[users.id]
    }),
    postWriter:one(users,{
      fields:[prompts.writerId],references:[users.id]
    })
  }))
  export const promptMetaRelations=relations(promptsMeta,({many,one})=>({
    prompt:one(prompts,{
      fields:[promptsMeta.promptId],references:[prompts.id]
    }),
    promptOwner:one(users,{
      fields:[promptsMeta.userId],references:[users.id]
    }),
   
  }))