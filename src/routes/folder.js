import { Router } from 'express';

import { create, getFolder, updateFolder } from '../controllers/folder.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFolderID } from '../middlewares/fields.js';

const folderRouter = Router();

folderRouter.post(
  '/:folderId',
  validateJWT,
  validateFolderID,
  create,
);

folderRouter.patch(
  '/update/:folderId',
  [
    validateJWT,
    validateFolderID,
  ],
  updateFolder,
);

folderRouter.get(
  '/:folderId',
  validateJWT,
  validateFolderID,
  getFolder,
);

export default folderRouter;
