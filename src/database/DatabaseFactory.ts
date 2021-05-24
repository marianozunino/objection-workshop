import knex, { Knex } from "knex";
import { Config } from "../config";
import { Model } from "objection";

export class DatabaseFactory {
  static knex: Knex<Model, Model[]>;

  public static createConnection(): void {
    if (!this.knex) {
      // Initialize knex.
      const knexConfig = Config.database[process.env.NODE_ENV || "develop"];
      this.knex = knex<Model>(knexConfig);
      // Bind all Models to the knex instance.
      Model.knex(this.knex);
    }
  }

  public static destroy(): Promise<void> {
    return this.knex.destroy();
  }
}
