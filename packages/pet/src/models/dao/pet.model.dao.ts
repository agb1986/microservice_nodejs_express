import "reflect-metadata";
import { injectable } from "inversify";

import Pet from "../dto/pet.model.dto";
import { mongoDatabase } from "../mongo/pet.mongo";

export interface PetRepository {
    findAll(): Promise<Array<Pet>>;
    find(id: string): Promise<Pet>;
    create(pet: Pet): Promise<void>;
    update(pet: Pet): Promise<void>;
    delete(id: string): Promise<void>;
}

const Logger = require('agb-logger');

@injectable()
export class PetDao implements PetRepository {
    public async findAll(): Promise<Array<Pet>> {
        Logger.info('Getting Pets Data')
        const pets = await mongoDatabase.connect()
            .then(() => mongoDatabase.Pets.find());
        Logger.info('Returning Pets Data')
        return pets.toArray();
    }
    public async find(id: string): Promise<Pet> {
        Logger.info(`Getting Pet Data @ ${id}`)
        const pet = await mongoDatabase.connect()
            .then(() => mongoDatabase.Pets.findOne(id));

        Logger.info(`Returning Pet Data @ ${pet}`)
        return pet?.toJSON();
    }
    public async create(pet: Pet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async update(pet: Pet): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}