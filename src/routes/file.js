import { Router } from 'express';

import { downloadFile, uploadFiles } from '../controllers/file.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFileID, validateFolderID } from '../middlewares/fields.js';
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

fileRouter.get(
  '/download/:fileId',
  [
    validateJWT,
    validateFileID,
  ],
  downloadFile,
);

export default fileRouter;
