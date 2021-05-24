# objection-workshop

Simple POC with Typescript + DI + Knex + Objection + SQLite

The project is split is 12 tags with specific changes to make the progress more understandable.

<details>
  <summary>Objective 🔨</summary>

![ER](plantuml.png?raw=true "ER")

</details>
Tags:

1. Basic structure, linter, prettier, tsconfig. Basic dependencies: `knex, objection and sqlite3`
2. `Knexfile` and some migrations.
3. Config folder, `KnexFile` now extends from our project config.
4. Add some seeds
5. DatabaseFactory. Singleton which handles the model binding with Knex and creates the Db connection.
6. Models. Basic models that represent the schema (no relationship yet).
7. Add a BaseEntity to avoid DRY.
8. Hooks. Pre Save/Update hooks. Example with auditing (createdAt/updatedAt)
9. Parse SQLite timestamp into JS Date using parseDatabaseJson hook.
10. Relationships.
11. Repositories with DI.
12. Service/Main with DI. This shows how we can graph insert data, graph relate, and graph fetch.

## Install & Run

Execute project:

```shell
yarn
yarn start
```

Some Knex commands:

```shell
yarn knex migrate:create my_migration -x ts #create new migration
yarn knex migrate:latest #execute all migrations
yarn knex migrate:rollback #execute rollback

yarn knex seed:make my_seed -x ts #create new seed
yarn knex seed:run #execute seeds
```
