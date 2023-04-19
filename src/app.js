import express from 'express';
import fileRouter from './routes/file.js';

const app = express();

app.use(express.json());

const PREFIX = '/api/v1';

// ROUTES
app.use(`${PREFIX}/file`, fileRouter);

app.get('/', (_, res) => {
  res.send('CloudBox server is running');
});

export default app;
