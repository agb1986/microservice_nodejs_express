import { Router } from 'express';

const router = Router();

router.get('/user', (req, res, err) => {
    return res.send('Hello World: USER');
});

export default router;