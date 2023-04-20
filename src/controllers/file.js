import uploadCloud from '../utils/blob.js';

import Folder from '../models/folder.js';
import File from '../models/file.js';

export const uploadFiles = async (req, res) => {
  try {
    const { currentFolderId } = req.params;
    const { id } = req;

    const currentFolder = await Folder.findById(currentFolderId);
    if (!currentFolder) {
      return res.status(404).json({
        ok: false,
        msg: 'folder not found',
      });
    }
    if (currentFolder.owner.toString() !== id) {
      return res.status(401).json({
        ok: false,
        msg: 'you are not authorized to upload files here',
      });
    }

    const { files } = req;
    files.map((file) => {
      const fileSplit = file.originalname.split('.');
      const extension = fileSplit.pop();
      const fileName = fileSplit[0].replace(/\s/g, '_');
      file.name = `${fileName}_${Date.now()}.${extension}`;
      return file;
    });
    await uploadCloud(id, files);

    const newFilesPromises = files.map((file) => {
      const newFile = new File({
        name: file.originalname,
        cloudName: file.name,
        owner: id,
        folder: currentFolderId,
        size: file.size,
      });
      return newFile.save();
    });

    const newFiles = await Promise.all(newFilesPromises);

    currentFolder.files.push(...newFiles.map((file) => file.id));
    await currentFolder.save();

    return res.status(200).json({ message: 'Files uploaded successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const w = 0;
