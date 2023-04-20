import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';
import config from '../env/config.js';

const { azureStorageConnectionString } = config;
dotenv.config();

const blobService = BlobServiceClient.fromConnectionString(
  azureStorageConnectionString,
);

const uploadCloud = async (containerName, files) => {
  const containerClient = blobService.getContainerClient(containerName);
  if (!(await containerClient.exists())) {
    await containerClient.create();
  }
  const uploadPromises = files.map((file) => {
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    return blockBlobClient.uploadData(file);
  });
  const uploadResponses = await Promise.all(uploadPromises);
  return uploadResponses;
};

export default uploadCloud;
