import { Model } from "objection";
import { Animal } from "./Animal";
import { Vet } from "./Vet";

export class Client extends Model {
  name!: string;
  age!: number;

  readonly id!: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  pets?: Partial<Animal>[];
  vets?: Partial<Vet>[];

  static tableName = "clients";
}
