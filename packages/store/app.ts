import express from 'express';
import router from './routes/store.route'

const app = express();
app.use(router);

export default app;