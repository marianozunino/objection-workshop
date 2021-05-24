import { Model, ModelOptions, QueryContext } from "objection";

export abstract class BaseEntity extends Model {
  readonly id!: number;
  createdAt!: Date;
  updatedAt!: Date;

  $beforeInsert(context: QueryContext): void {
    void super.$beforeInsert(context);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  $beforeUpdate(opt: ModelOptions, context: QueryContext): void {
    void super.$beforeUpdate(opt, context);
    this.updatedAt = new Date();
  }
}
