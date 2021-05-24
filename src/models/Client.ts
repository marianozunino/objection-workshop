import { Model } from "objection";
import { Animal } from "./Animal";
import { BaseEntity } from "./BaseEntity";
import { Vet } from "./Vet";
import path from "path";

export class Client extends BaseEntity {
  name!: string;
  age!: number;

  pets?: Partial<Animal>[];
  vets?: Partial<Vet>[];

  static tableName = "clients";

  static relationMappings = {
    pets: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, "Animal"),
      join: {
        from: "clients.id",
        to: "animals.clientId",
      },
    },
    vets: {
      relation: Model.ManyToManyRelation,
      modelClass: Vet,
      join: {
        from: "clients.id",
        through: {
          from: "vetsClients.clientId",
          to: "vetsClients.vetId",
        },
        to: "vets.id",
      },
    },
  };
}
