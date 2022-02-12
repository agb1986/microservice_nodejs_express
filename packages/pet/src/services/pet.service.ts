import "reflect-metadata";
import { inject, injectable } from "inversify";
import Pet from "../models/dto/pet.model.dto";
import TYPES from "../configs/types.config";
import { PetRepository } from "../models/dao/pet.model.dao";

export interface PetService {
    getPets(): Promise<Array<Pet>>;
    getPet(id: string): Promise<Pet>;
    createPet(pet: Pet): Promise<void>;
    updatePet(id: string, pet: Pet): Promise<void>;
    deletePet(id: string): Promise<void>;
}

const Logger = require('agb-logger');

@injectable()
export class PetServiceImpl implements PetService {
    
    @inject(TYPES.PetRepository)
    private petRepository!: PetRepository;

    public async getPets(): Promise<Pet[]> {
        Logger.info('Service running @ getPets');
        return await this.petRepository.findAll();
    }
    public async getPet(id: string): Promise<Pet> {
        Logger.info(`Service running @ getPet /w ${id}`);
        return await this.petRepository.find(id);
    }
    public async createPet(pet: Pet): Promise<void> {
        Logger.info("Service running @ createPet");
        await this.petRepository.create(pet);
    }
    public async updatePet(id: string, pet: Pet): Promise<void> {
        Logger.info("Service running @ updatePet");
        await this.petRepository.update(id, pet);
    }
    public async deletePet(id: string): Promise<void> {
        Logger.info("Service running @ deletePet");
        await this.petRepository.delete(id);
    }
    
}