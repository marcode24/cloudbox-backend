import express from 'express';
import cors from 'cors';

import fileRouter from './routes/file.js';
import userRouter from './routes/user.js';
import folderRouter from './routes/folder.js';
import authRouter from './routes/auth.js';

const corsOptions = {
  origin: ['http://localhost:4200', 'https://cloudbox-m.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE'],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const PREFIX = '/api/v1';

// ROUTES
app.use(`${PREFIX}/auth`, authRouter);
app.use(`${PREFIX}/file`, fileRouter);
app.use(`${PREFIX}/user`, userRouter);
app.use(`${PREFIX}/folder`, folderRouter);

app.get('/', (_, res) => {
  res.send('CloudBox server is running');
});

export default app;
