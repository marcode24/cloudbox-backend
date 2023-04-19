import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();
const blobService = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING,
);

const upload = async (containerName, files) => {
  const containerClient = blobService.getContainerClient(containerName);
  const uploadPromises = files.map((file) => {
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    return blockBlobClient.uploadData(file);
  });
  const uploadResponses = await Promise.all(uploadPromises);
  return uploadResponses;
};

export default upload;
