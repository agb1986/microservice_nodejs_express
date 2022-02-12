import express, { Application } from 'express';
import container from './src/configs/pet.config';
import TYPES from './src/configs/types.config';
import { RegistrableController } from './src/controllers/registrable.controller ';

const app: Application = express();
app.use(express.json());

const controllers: RegistrableController[] = container.getAll<RegistrableController>(TYPES.Controller);
controllers.forEach(controller => controller.register(app));

export default app;