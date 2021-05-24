import { Model } from "objection";
import { Client } from "./Client";
import { Vet } from "./Vet";

export class Animal extends Model {
  name!: string;
  race!: string;
  clientId!: number;

  readonly id!: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  owner?: Partial<Client>;
  vets?: Partial<Vet>[];

  static tableName = "animals";
}
