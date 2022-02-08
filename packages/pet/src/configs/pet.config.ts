import "reflect-metadata";

import { Container } from 'inversify';
import { PetDao, PetRepository } from '../models/dao/pet.model.dao';
import PetController from "../controllers/pet.controller";
import { PetService, PetServiceImpl } from "../services/pet.service";
import TYPES from "./types.config";
import { RegistrableController } from "../controllers/registrable.controller ";


const container: Container = new Container();

container.bind<RegistrableController>(TYPES.Controller).to(PetController);
container.bind<PetService>(TYPES.PetService).to(PetServiceImpl);
container.bind<PetRepository>(TYPES.PetRepository).to(PetDao);

export default container;