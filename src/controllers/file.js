import upload from '../utils/blob.js';

const CONTAINER_NAME = 'files';

export const uploadFile = async (req, res) => {
  try {
    const { files } = req;
    files.map((file) => {
      const fileSplit = file.originalname.split('.');
      const extension = fileSplit.pop();
      const fileName = fileSplit[0].replace(/\s/g, '_');
      file.name = `${fileName}_${Date.now()}.${extension}`;
      return file;
    });
    await upload(CONTAINER_NAME, files);
    res.status(200).json({ message: 'Files uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const w = 0;
