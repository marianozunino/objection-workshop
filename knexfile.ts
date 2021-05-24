import { knexSnakeCaseMappers } from "objection";

export default {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./example.db",
  },
  ...knexSnakeCaseMappers(),
};
