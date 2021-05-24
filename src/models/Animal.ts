import { Model } from "objection";
import { BaseEntity } from "./BaseEntity";
import { Client } from "./Client";
import { Vet } from "./Vet";

export class Animal extends BaseEntity {
  name!: string;
  race!: string;

  owner?: Partial<Client>;
  vets?: Partial<Vet>[];

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Client,
      join: {
        from: "animals.clientId",
        to: "clients.id",
      },
    },
    vets: {
      relation: Model.ManyToManyRelation,
      modelClass: Vet,
      join: {
        from: "animals.id",
        through: {
          from: "vetsAnimals.animalId",
          to: "vetsAnimals.vetId",
        },
        to: "vets.id",
      },
    },
  };
}
