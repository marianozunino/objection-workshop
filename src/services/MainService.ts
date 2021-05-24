import { injectable } from "tsyringe";
import { AnimalRepository } from "../repositories/AnimalRepository";
import { ClientRepository } from "../repositories/ClientRepository";

@injectable()
export class MainService {
  constructor(private animalRepo: AnimalRepository, private clientRepo: ClientRepository) {}

  public async run(): Promise<void> {
    // await this.getAllAnimals();
    // await this.getAllAnimalsWithOwners();
    // await this.createClientWithGraph();
  }

  private async getAllAnimals(): Promise<void> {
    const animals = await this.animalRepo.findAll();
    console.dir(animals, { depth: null });
  }

  private async getAllAnimalsWithOwners(): Promise<void> {
    const animals = await this.animalRepo.findAllWithOwners();
    console.dir(animals, { depth: null });
  }

  private async createClientWithGraph(): Promise<void> {
    const animals = await this.clientRepo.createWithPet({
      name: "Mariano",
      age: 15,
      pets: [{ name: "Tibu", race: "Cruza", vets: [{ id: 1 }] }],
    });
    console.dir(animals, { depth: null });
  }
}
