import express from 'express';
import router from './routes/user.route'

const app = express();
app.use(router);

export default app;