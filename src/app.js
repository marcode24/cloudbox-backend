import express from 'express';
import fileRouter from './routes/file.js';
import userRouter from './routes/user.js';

const app = express();

app.use(express.json());

const PREFIX = '/api/v1';

// ROUTES
app.use(`${PREFIX}/file`, fileRouter);
app.use(`${PREFIX}/user`, userRouter);

app.get('/', (_, res) => {
  res.send('CloudBox server is running');
});

export default app;
