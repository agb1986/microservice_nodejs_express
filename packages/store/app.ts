import express from 'express';
import router from './src/routes/store.route'

const app = express();
app.use(router);

export default app;