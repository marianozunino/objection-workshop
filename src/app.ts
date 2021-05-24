import "reflect-metadata";
import { container } from "tsyringe";
import { DatabaseFactory } from "./database/DatabaseFactory";
import { MainService } from "./services/MainService";

DatabaseFactory.createConnection();
const mainService = container.resolve(MainService);

mainService
  .run()
  .catch((err: Error) => {
    console.error(err);
  })
  .finally(() => {
    return DatabaseFactory.destroy();
  });
