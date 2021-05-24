import { Client } from "./Client";
import { Animal } from "./Animal";
import { BaseEntity } from "./BaseEntity";

export class Vet extends BaseEntity {
  name!: string;
  clients?: Partial<Client>[];
  animals?: Partial<Animal>[];

  static tableName = "vets";
}
