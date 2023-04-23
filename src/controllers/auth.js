import bcrypt from 'bcrypt';

import generateJWT from '../utils/jwt.js';

import User from '../models/user.js';
import Folder from '../models/folder.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        ok: false,
        msg: 'email or password are incorrect',
      });
    }
    const validPassword = bcrypt.compareSync(password, userExist.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'email or password are incorrect',
      });
    }
    const [token, userData, rootFolder] = await Promise.all([
      generateJWT(userExist.id),
      User.findById(userExist.id, '-password'),
      Folder.findById(userExist.rootFolder),
    ]);
    return res.status(200).json({
      ok: true,
      user: userData,
      token,
      root: rootFolder,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    });
  }
};

export const renewToken = 'comming soon';
