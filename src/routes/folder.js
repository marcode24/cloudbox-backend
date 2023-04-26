import { Router } from 'express';

import { create, getFolder } from '../controllers/folder.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFolderID } from '../middlewares/fields.js';

const folderRouter = Router();

folderRouter.post(
  '/:folderId',
  validateJWT,
  validateFolderID,
  create,
);

folderRouter.get(
  '/:folderId',
  validateJWT,
  validateFolderID,
  getFolder,
);

export default folderRouter;
