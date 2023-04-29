import { Router } from 'express';

import { uploadFiles } from '../controllers/file.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFolderID } from '../middlewares/fields.js';
import {
  emptyFileErrorHandler,
  fileSizeLimitErrorHandler,
  uploadConfig,
} from '../middlewares/multer.js';

const fileRouter = Router();

fileRouter.post(
  '/upload/:folderId',
  [
    validateJWT,
    uploadConfig,
    emptyFileErrorHandler,
    fileSizeLimitErrorHandler,
    validateFolderID,
  ],
  uploadFiles,
);

export default fileRouter;
