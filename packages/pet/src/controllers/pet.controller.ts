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
                const pets = await this.petService.getPets();
                res.send(pets);
            })
            .post(async (req: Request, res: Response, next: NextFunction) => {
                Logger.info("POST @ /pet being executed");
                const pet = req.body;
                await this.petService.createPet(pet);
                res.send("PET CREATED");
            })

        app.route('/pet/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`GET @ /pet/${petId} being executed`);
                const pet = await this.petService.getPet(petId);
                res.send(pet);
            })
            .put(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`PUT @ /pet/${petId} being executed`);
                const pet = req.body;
                await this.petService.updatePet(petId, pet);
                res.send(pet);
            })
            .delete(async (req: Request, res: Response, next: NextFunction) => {
                const petId = req.params.id;
                Logger.info(`DELETE @ /pet/${petId} being executed`);
                await this.petService.deletePet(petId);
            });
    }
}

export default PetController;
