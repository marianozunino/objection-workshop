import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable("animals", (tableBuilder) => {
    tableBuilder.increments("id").primary();
    tableBuilder.string("name").notNullable();
    tableBuilder.string("race").notNullable();

    tableBuilder.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    tableBuilder.dateTime("updated_at").nullable().defaultTo(knex.fn.now());

    tableBuilder
      .integer("client_id")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onUpdate("CASCADE") // If Person PK is changed, update FK as well.
      .onDelete("CASCADE"); // If Person is deleted, delete Pet as well.
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists("animals");
};
