import { Router } from 'express';

import { validateLogin } from '../middlewares/fields.js';

import { login } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/login',
  [validateLogin],
  login,
);

export default authRouter;
