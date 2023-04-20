import { Schema, model } from 'mongoose';
import defaultImageUser from '../constants/images.js';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  image: {
    type: String,
    default: defaultImageUser,
  },
  active: {
    type: Boolean,
    default: true,
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  rootFolder: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
});

const User = model('User', userSchema);

export default User;
