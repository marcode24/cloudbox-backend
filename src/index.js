import app from './app.js';

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
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
