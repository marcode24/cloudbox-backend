import mongoose from 'mongoose';
import configEnv from '../env/config.js';

const dbConnection = async () => {
  try {
    const { mongoUrl } = configEnv;
    await mongoose.connect(mongoUrl);
    // eslint-disable-next-line no-console
    console.log('DB online');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw new Error('Error while connecting to the database');
  }
};

export default dbConnection;
