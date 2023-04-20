import jwt from 'jsonwebtoken';
import config from '../env/config.js';

const { jwtSecret } = config;

const validateJWT = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Must provide a token',
    });
  }
  try {
    const { id } = jwt.verify(token, jwtSecret);
    req.id = id;
    return next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'token invalid, try again',
    });
  }
};

export default validateJWT;
