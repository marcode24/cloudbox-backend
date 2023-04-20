import { Router } from 'express';
import multer from 'multer';

import { uploadFiles } from '../controllers/file.js';

import validateJWT from '../middlewares/jwt.js';
import { validateFolderID } from '../middlewares/fields.js';

const uploadConfig = multer({
  limits: {
    fileSize: 1000000, // 1MB
  },
}).array('file', 5);

const fileSizeLimitErrorHandler = (err, _, res, next) => {
  err.code === 'LIMIT_FILE_SIZE'
    ? res.status(400).json({ message: 'File size limit exceeded' })
    : next();
};

const emptyFileErrorHandler = (req, res, next) => {
  req.files.length > 0 ? next() : res.status(400).json({ message: 'No file uploaded' });
};

const fileRouter = Router();

fileRouter.post(
  '/upload/:currentFolderId',
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
