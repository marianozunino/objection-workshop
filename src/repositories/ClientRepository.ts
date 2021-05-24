import { injectable } from "tsyringe";
import { Client } from "../models/Client";

@injectable()
export class ClientRepository {
  public create(client: Partial<Client>): Promise<Client> {
    return Client.query().insert(client);
  }

  public createWithPet(client: Partial<Client>): Promise<Client> {
    return Client.query().insertGraphAndFetch(client, { relate: true }).omit(["createdAt", "updatedAt"]);
  }

  public findAll(): Promise<Client[]> {
    return Client.query();
  }

  public findById(id: number): Promise<Client> {
    return Client.query().findById(id);
  }

  public findByName(name: string): Promise<Client[]> {
    return Client.query().where("name", "like", `%${name}%`);
  }
}
