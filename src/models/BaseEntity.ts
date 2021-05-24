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

  $parseDatabaseJson(json: BaseEntity): BaseEntity {
    // Remember to call the super class's implementation.
    json = super.$parseDatabaseJson(json) as BaseEntity;

    // Do your conversion here.
    json.createdAt = new Date(json.createdAt);
    json.updatedAt = new Date(json.updatedAt);

    return json;
  }
}
