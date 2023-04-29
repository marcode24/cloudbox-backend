import { Schema, model } from 'mongoose';

const fileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cloudName: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'file',
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
  folder: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
  mimeType: {
    type: String,
    required: true,
  },
});

const File = model('File', fileSchema);

export default File;
