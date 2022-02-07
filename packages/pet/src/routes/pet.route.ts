import { Router } from 'express';
import PetController from '../controllers/pet.controller';

const router = Router();

router.get('/pet', PetController.getPet);

export default router;