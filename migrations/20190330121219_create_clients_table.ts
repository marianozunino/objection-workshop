import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable("clients", (tableBuilder) => {
    tableBuilder.increments("id").primary();
    tableBuilder.string("name").notNullable();

    tableBuilder.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    tableBuilder.dateTime("updated_at").nullable().defaultTo(knex.fn.now());
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists("clients");
};
