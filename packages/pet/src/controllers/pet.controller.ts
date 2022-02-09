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
                Logger.info("GET @ /pet being executed")
                const pets = await this.petService.getPets();
                res.send(pets);
            })
    }
}

export default PetController;
