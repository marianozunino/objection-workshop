import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable("vets_animals", (tableBuilder) => {
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
      .integer("animal_id")
      .notNullable()
      .references("id")
      .inTable("animals")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists("vets_animals");
};
