import { Client } from "./Client";
import { Animal } from "./Animal";
import { BaseEntity } from "./BaseEntity";
import { Model } from "objection";

export class Vet extends BaseEntity {
  name!: string;
  clients?: Partial<Client>[];
  animals?: Partial<Animal>[];

  static tableName = "vets";

  static relationMappings = {
    animals: {
      relation: Model.ManyToManyRelation,
      modelClass: Animal,
      join: {
        from: "vets.id",
        through: {
          from: "vets_animals.vet_id",
          to: "vets_animals.animal_id",
        },
        to: "animals.id",
      },
    },
    clients: {
      relation: Model.ManyToManyRelation,
      modelClass: Client,
      join: {
        from: "vets.id",
        through: {
          from: "vets_clients.vet_id",
          to: "vets_clients.client_id",
        },
        to: "clients.id",
      },
    },
  };
}
