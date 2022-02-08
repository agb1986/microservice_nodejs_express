import "reflect-metadata";
import { inject, injectable } from "inversify";
import Pet from "../models/dto/pet.model.dto";
import TYPES from "../configs/types.config";
import { PetRepository } from "../models/dao/pet.model.dao";

export interface PetService {
    getPets(): Promise<Array<Pet>>;
    getPet(id: string): Promise<Pet>;
    createPet(pet: Pet): Promise<void>;
    updatePet(pet: Pet): Promise<void>;
    deletePet(id: string): Promise<void>;
}

@injectable()
export class PetServiceImpl implements PetService {
    
    @inject(TYPES.PetRepository)
    private petRepository!: PetRepository;

    public async getPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }
    public async getPet(id: string): Promise<Pet> {
        throw new Error("Method not implemented.");
    }
    public async createPet(pet: Pet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async updatePet(pet: Pet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async deletePet(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}