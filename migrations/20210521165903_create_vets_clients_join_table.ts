import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable("vets_clients", (tableBuilder) => {
    tableBuilder.increments("id").primary();

    tableBuilder.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    tableBuilder.dateTime("updated_at").nullable().defaultTo(knex.fn.now());

    tableBuilder
      .integer("vet_id")
      .notNullable()
      .references("id")
      .inTable("vets")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tableBuilder
      .integer("client_id")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists("vets_clients");
};
