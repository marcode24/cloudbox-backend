import bcrypt from 'bcrypt';
import generateJWT from '../utils/jwt.js';

import Folder from '../models/folder.js';
import User from '../models/user.js';

export const create = async (req, res) => {
  try {
    const { password, email } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: 'email has already been registered',
      });
    }
    const newUser = new User({ email, ...req.body });
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password, salt);
    const userSaved = await newUser.save();
    const folder = new Folder({
      name: 'root',
      owner: userSaved.id,
    });
    const [token, userData, folderCreated] = await Promise.all([
      generateJWT(userSaved.id),
      User.findById(userSaved.id, '-password'),
      folder.save(),
    ]);

    userSaved.rootFolder = folderCreated.id;
    await userSaved.save();

    return res.status(201).json({
      ok: true,
      user: userData,
      token,
      root: folderCreated,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    });
  }
};

export const changeTheme = async (req, res) => {
  try {
    const idUser = req.id;
    const darkMode = req.body.darkMode || false;
    const userDB = await User.findById(idUser);
    if (!userDB) {
      return res.json({
        ok: false,
        msg: 'user not found, try again',
      });
    }

    userDB.darkMode = darkMode;
    await userDB.save();
    return res.status(200).json({
      ok: true,
      msg: 'theme updated correctly',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    });
  }
};
