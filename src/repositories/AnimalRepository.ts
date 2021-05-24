import { injectable } from "tsyringe";
import { Animal } from "../models/Animal";

@injectable()
export class AnimalRepository {
  public findAllWithOwners(): Promise<Animal[]> {
    return Animal.query()
      .withGraphFetched({ owner: { vets: true } })
      .omit(["createdAt", "updatedAt"]);
  }

  public create(animal: Partial<Animal>): Promise<Animal> {
    return Animal.query().insert(animal);
  }

  public findAll(): Promise<Animal[]> {
    return Animal.query();
  }

  public findById(id: number): Promise<Animal> {
    return Animal.query().findById(id);
  }

  public findByName(name: string): Promise<Animal[]> {
    return Animal.query().where("name", "like", `%${name}%`);
  }
}
