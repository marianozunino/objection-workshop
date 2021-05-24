import { Model } from "objection";

export abstract class BaseEntity extends Model {
  readonly id!: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}
