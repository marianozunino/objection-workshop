import faker from "faker";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  const vets = [];
  for (let index = 0; index < 10; index++) {
    vets.push({
      name: faker.name.findName(),
    });
  }
  await knex("vets").insert(vets);

  const clients = [];
  for (let index = 0; index < 10; index++) {
    clients.push({
      name: faker.name.findName(),
      age: faker.datatype.number(80),
    });
  }
  await knex("clients").insert(clients);

  const animals = [];
  for (let index = 0; index < 10; index++) {
    animals.push({
      name: faker.name.findName(),
      race: faker.hacker.abbreviation(),
      client_id: faker.datatype.number(5) + 1,
    });
  }
  await knex("animals").insert(animals);

  await knex("vets_animals").insert([
    { vet_id: 1, animal_id: 1 },
    { vet_id: 2, animal_id: 1 },
    { vet_id: 1, animal_id: 2 },
    { vet_id: 3, animal_id: 2 },
    { vet_id: 1, animal_id: 3 },
    { vet_id: 4, animal_id: 3 },
  ]);

  await knex("vets_clients").insert([
    { vet_id: 1, client_id: 1 },
    { vet_id: 2, client_id: 1 },
    { vet_id: 1, client_id: 2 },
    { vet_id: 3, client_id: 2 },
    { vet_id: 1, client_id: 3 },
    { vet_id: 4, client_id: 3 },
    { vet_id: 1, client_id: 5 },
    { vet_id: 5, client_id: 5 },
    { vet_id: 1, client_id: 6 },
    { vet_id: 6, client_id: 6 },
    { vet_id: 1, client_id: 7 },
    { vet_id: 7, client_id: 7 },
    { vet_id: 1, client_id: 8 },
    { vet_id: 8, client_id: 8 },
    { vet_id: 1, client_id: 9 },
    { vet_id: 9, client_id: 9 },
  ]);
}
