import { Animal } from "./Animal";
import { BaseEntity } from "./BaseEntity";
import { Vet } from "./Vet";

export class Client extends BaseEntity {
  name!: string;
  age!: number;

  pets?: Partial<Animal>[];
  vets?: Partial<Vet>[];

  static tableName = "clients";
}
