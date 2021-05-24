import { Model } from "objection";
import { Client } from "./Client";
import { Animal } from "./Animal";

export class Vet extends Model {
  name!: string;
  clients?: Partial<Client>[];
  animals?: Partial<Animal>[];

  readonly id!: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  static tableName = "vets";
}
