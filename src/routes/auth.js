import { Router } from 'express';

import { validateLogin } from '../middlewares/fields.js';
import validateJWT from '../middlewares/jwt.js';

import { login, renewToken } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/login',
  [validateLogin],
  login,
);

authRouter.get(
  '/renew',
  [validateJWT],
  renewToken,
);

export default authRouter;
