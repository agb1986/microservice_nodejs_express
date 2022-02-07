import { Router } from 'express';

const router = Router();

router.get('/store', (req, res, err) => {
    return res.send("Hello World: STORE")
});

export default router;