import "reflect-metadata";
import fs from "fs/promises";
import path from "path";
import process from 'process';
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
        throw new Error("Method not implemented.");
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