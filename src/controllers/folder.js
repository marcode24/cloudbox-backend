import Folder from '../models/folder.js';

export const create = async (req, res) => {
  try {
    const { folderId: currentFolderId } = req.params;
    const parentFolder = await Folder.findById(currentFolderId);
    if (!parentFolder) {
      return res.status(404).json({
        ok: false,
        msg: 'folder not found',
      });
    }
    if (parentFolder.owner.toString() !== req.id) {
      return res.status(401).json({
        ok: false,
        msg: 'you are not authorized to create a folder here',
      });
    }

    const { name } = req.body;
    const newFolder = new Folder({
      name: name || 'new folder',
      owner: req.id,
      parent: currentFolderId,
    });

    parentFolder.folders.push(newFolder.id);

    await Promise.all([
      newFolder.save(),
      parentFolder.save(),
    ]);

    return res.status(201).json({
      ok: true,
      msg: 'folder created correctly',
      folder: newFolder,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    });
  }
};

export const getFolder = async (req, res) => {
  try {
    const { folderId } = req.params;
    const folder = await Folder.findById(folderId)
      .populate({ path: 'folders', options: { sort: { name: 1 }, collation: { locale: 'en' } } })
      .populate({ path: 'files', options: { sort: { name: 1 }, collation: { locale: 'en' } } });
    if (!folder) {
      return res.status(404).json({
        ok: false,
        msg: 'folder not found',
      });
    }
    return res.status(200).json({
      ok: true,
      folder,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    });
  }
};
