import { Request, Response } from 'express';
import IPet from '../models/pet.model';

class PetController {
    public static getPet(req: Request, res: Response): Response<IPet> {
        const pet: IPet = {
            id: 0,
            name: "Dogo"
        }
        
        return res.send(pet);
    }
}

export default PetController;