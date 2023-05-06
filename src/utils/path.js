import Folder from '../models/folder.js';

const buildPath = async (parentFolderID) => {
  const path = [];
  const folder = await Folder.findById(parentFolderID);
  if (folder) {
    path.push({
      name: folder.name,
      _id: folder.id,
      color: folder.color,
    });
    if (folder.parent) {
      const parentPath = await buildPath(folder.parent);
      path.push(...parentPath);
    }
  }
  return path;
};

export default buildPath;
