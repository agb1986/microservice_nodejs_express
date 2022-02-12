import "reflect-metadata";
import { injectable } from "inversify";

import Pet from "../dto/pet.model.dto";
import { mongoDatabase, PetSchema } from "../mongo/pet.mongo";

export interface PetRepository {
    findAll(): Promise<Array<Pet>>;
    find(id: string): Promise<Pet>;
    create(pet: Pet): Promise<void>;
    update(id: string, pet: Pet): Promise<void>;
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
        Logger.info(`Creating Pet Data: ${pet}`)

        const createdPet = await mongoDatabase.connect()
            .then(() => mongoDatabase.Pets.create(pet))

        Logger.info(`Pet Data Created: ${createdPet}`)
    }
    public async update(id: string, pet: Pet): Promise<void> {
        Logger.info(`Updating Pet Data with ${pet}`)

        const updatedPet = await mongoDatabase.connect()
            .then(() => mongoDatabase.Pets.findOne(id)
                .then(instance => {

                    instance!.document.name = pet.name;
                    instance!.document.status = pet.status;
                    instance!.document.photos = pet.photos;
                    instance!.document.category = pet.category;
                    instance!.document.tags = pet.tags;

                    return instance;
                }));
        await updatedPet?.save();
    }
    public async delete(id: string): Promise<void> {
        Logger.info(`Deleting Pet Data with ${id}`);

        await mongoDatabase.connect()
            .then(() => mongoDatabase.Pets.findOne(id)
                .then(async instance => {
                    await instance?.remove();
                }));
    }
}