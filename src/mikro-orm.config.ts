import { MikroORM } from "@mikro-orm/core";
import { User } from "./entities/User";
import path from "path";
import dotenv from 'dotenv'
 
dotenv.config()
export default {
  entities: [User],
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    disableForeignKeys: false,
  },
  dbName: process.env.DB_NAME,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
  debug: true,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
