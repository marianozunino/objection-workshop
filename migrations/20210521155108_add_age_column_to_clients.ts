import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.alterTable("clients", (table) => {
    table.integer("age").notNullable().defaultTo(0);
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.alterTable("clients", (table) => {
    table.dropColumn("age");
  });
};
