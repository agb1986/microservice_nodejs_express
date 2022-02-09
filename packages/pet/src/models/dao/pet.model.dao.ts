import "reflect-metadata";
import fs from "fs/promises";
import path from "path";
import process from 'process';
import { injectable } from "inversify";

import Pet from "../dto/pet.model.dto";

export interface PetRepository {
    findAll(): Promise<Array<Pet>>;
    find(id: string): Promise<Pet>;
    create(pet: Pet): Promise<void>;
    update(pet: Pet): Promise<void>;
    delete(id: string): Promise<void>;
}

const Logger = require('agb-logger');

// TODO: Replace with DB
const petDataFilePath: string = path.resolve(process.cwd(), '/data/pet.json');

@injectable()
export class PetDao implements PetRepository {
    public async findAll(): Promise<Pet[]> {
        let petData!: Pet[];

        await fs.readFile(petDataFilePath, 'utf8')
            .then(data => {
                Logger.info(`Fetching Pet Data: ${data.length}`);
                petData = JSON.parse(data);
            }).catch(err => {
                Logger.error(`Unable to Fetch Pet Data: ${err}`);
                throw err;
            });

        return petData;
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