import dotenv from 'dotenv';
import app from './app.js';
import dbConnection from './db/config.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`server is running on port: ${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

start();
