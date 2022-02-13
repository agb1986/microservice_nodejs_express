import "reflect-metadata";
import { Application, NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { RegistrableController } from "./registrable.controller ";
import { PetService } from "../services/pet.service";
import TYPES from "../configs/types.config";

const Logger = require('agb-logger');

@injectable()
class PetController implements RegistrableController {
    private petService!: PetService;

    constructor(@inject(TYPES.PetService) petService: PetService) {
        this.petService = petService;
    }

    register(app: Application): void {
        app.route('/pet')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                Logger.info("GET @ /pet being executed");
                await this.petService.getPets()
                    .then(pets => {
                        res.send(pets);
                    }).catch(e => {
                        Logger.error('GET @ /pet ERROR ', e);
                        res.statusCode = 500;
                        res.send(e);
                    });
            })
            .post(async (req: Request, res: Response, next: NextFunction) => {
                Logger.info("POST @ /pet being executed");
                const pet = req.body;
                await this.petService.createPet(pet)
                    .then(() => {
                        res.statusCode = 201;
                        res.send("PET CREATED");
                    }).catch(e => {
                        Logger.error('POST @ /pet ERROR ', e);
                        res.statusCode = 500;
                        res.send(e);
                    });
            })

        app.route('/pet/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`GET @ /pet/${petId} being executed`);
                await this.petService.getPet(petId)
                    .then(pet => {
                        res.send(pet);
                    }).catch(e => {
                        Logger.error(`GET @ /pet/${petId} ERROR `, e);
                        res.statusCode = 500;
                        res.send(e);
                    });
            })
            .put(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`PUT @ /pet/${petId} being executed`);
                const pet = req.body;
                await this.petService.updatePet(petId, pet)
                    .then(() => {
                        res.send(`PET UPDATED: ${petId}`);
                    }).catch(e => {
                        Logger.error(`PUT @ /pet/${petId} ERROR `, e);
                        res.statusCode = 500;
                        res.send(e);
                    });
            })
            .delete(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`DELETE @ /pet/${petId} being executed`);
                await this.petService.deletePet(petId)
                    .then(() => {
                        res.statusCode = 204;
                        res.send(`PET DELETED: ${petId}`);
                    }).catch(e => {
                        Logger.error(`DELETE @ /pet/${petId} ERROR `, e);
                        res.statusCode = 500;
                        res.send(e);
                    });
            });
    }
}

export default PetController;
