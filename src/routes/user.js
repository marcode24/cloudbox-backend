import { Router } from 'express';
import { validateCreateUser } from '../middlewares/fields.js';
import { create, changeTheme } from '../controllers/user.js';
import validateJWT from '../middlewares/jwt.js';

const userRouter = Router();

userRouter.post(
  '/',
  [validateCreateUser],
  create,
);

userRouter.patch(
  '/theme',
  [validateJWT],
  changeTheme,
);

export default userRouter;
