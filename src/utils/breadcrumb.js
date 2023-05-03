import Folder from '../models/folder.js';

const buildBreadcrumb = async (parentFolderID) => {
  const breadcrumb = [];
  const folder = await Folder.findById(parentFolderID);
  if (folder) {
    breadcrumb.push({
      name: folder.name,
      _id: folder.id,
      color: folder.color,
    });
    if (folder.parent) {
      const parentBreadcrumb = await buildBreadcrumb(folder.parent);
      breadcrumb.push(...parentBreadcrumb);
    }
  }
  return breadcrumb;
};

export default buildBreadcrumb;
