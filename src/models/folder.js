import { Schema, model } from 'mongoose';

const folderSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  size: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'folder',
  },
  permission: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    write: {
      type: Boolean,
      default: false,
    },
    execute: {
      type: Boolean,
      default: false,
    },
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
  folders: [{
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  }],
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File',
  }],
});

const Folder = model('Folder', folderSchema);

export default Folder;
