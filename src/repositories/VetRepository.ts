import { injectable } from "tsyringe";
import { Vet } from "../models/Vet";

@injectable()
export class VetRepository {
  public create(vet: Partial<Vet>): Promise<Vet> {
    return Vet.query().insert(vet);
  }

  public findAll(): Promise<Vet[]> {
    return Vet.query();
  }

  public findById(id: number): Promise<Vet> {
    return Vet.query().findById(id);
  }

  public findByName(name: string): Promise<Vet[]> {
    return Vet.query().where("name", "like", `%${name}%`);
  }
}
