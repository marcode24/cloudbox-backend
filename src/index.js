import app from './app.js';

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
