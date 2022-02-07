import { Router } from 'express';

const router = Router();

router.get('/pet', (req, res, err) => {
    return res.send("Hello World: PET");
});

export default router;