import multer from 'multer';

const LIMIT_FILE_SIZE = 2000000; // 2MB

const uploadConfig = multer({
  limits: {
    fileSize: LIMIT_FILE_SIZE,
  },
}).array('file');

const fileSizeLimitErrorHandler = (err, _, res, next) => {
  err.code === 'LIMIT_FILE_SIZE'
    ? res.status(400).json({ message: 'File size limit exceeded' })
    : next();
};

const emptyFileErrorHandler = (req, res, next) => {
  req.files.length > 0
    ? next()
    : res.status(400).json({ message: 'No file uploaded' });
};

export { uploadConfig, fileSizeLimitErrorHandler, emptyFileErrorHandler };
