import { validateEmail, validatePassword } from '../utils/regex.js';
import isMongoId from '../utils/mongo-id.js';

export const validateCreateUser = (req, res, next) => {
  const { email = null, password = null } = req.body;
  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({
      ok: false,
      msg: 'password or email has incorrect format',
    });
  }
  return next();
};

export const validateLogin = (req, res, next) => {
  const { email = null, password = null } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: 'Must provide email and password',
    });
  }
  return next();
};

export const validateFolderID = (req, res, next) => {
  const { folderId } = req.params;
  if (!folderId || !isMongoId(folderId)) {
    return res.status(400).json({
      ok: false,
      msg: 'Must provide a valid folder ID',
    });
  }
  return next();
};
