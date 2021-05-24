import { config } from "dotenv";
import { knexSnakeCaseMappers } from "objection";
import { Knex } from "knex";

config();

export const Config = {
  database: {
    develop: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./example.db",
      },
      ...knexSnakeCaseMappers(),
    },
    production: {
      client: "pg",
      connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "production_db",
        charset: "utf8",
        ssl: false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      ...knexSnakeCaseMappers(),
    },
  } as Record<string, Knex.Config>,
};
