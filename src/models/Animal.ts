import { BaseEntity } from "./BaseEntity";
import { Client } from "./Client";
import { Vet } from "./Vet";

export class Animal extends BaseEntity {
  name!: string;
  race!: string;

  owner?: Partial<Client>;
  vets?: Partial<Vet>[];
}
