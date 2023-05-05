import { Router } from 'express';

import { deleteFile, downloadFile, uploadFiles } from '../controllers/file.js';

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

fileRouter.delete(
  '/:fileId',
  [
    validateJWT,
    validateFileID,
  ],
  deleteFile,
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
