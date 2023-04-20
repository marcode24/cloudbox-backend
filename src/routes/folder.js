import { Router } from 'express';

import { create } from '../controllers/folder.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFolderID } from '../middlewares/fields.js';

const folderRouter = Router();

folderRouter.post(
  '/:currentFolderId',
  validateJWT,
  validateFolderID,
  create,
);

export default folderRouter;
