import jwt from 'jsonwebtoken';
import config from '../env/config.js';

const { jwtSecret } = config;

const generateJWT = (id) => new Promise((resolve, reject) => {
  const payload = { id };
  jwt.sign(payload, jwtSecret, { expiresIn: '2h' }, (err, token) => {
    err ? reject(err) : resolve(token);
  });
});

export default generateJWT;
