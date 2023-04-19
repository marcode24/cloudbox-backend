import { Router } from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/file.js';

const upload = multer({
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

fileRouter.post('/upload', upload, emptyFileErrorHandler, fileSizeLimitErrorHandler, uploadFile);

export default fileRouter;
