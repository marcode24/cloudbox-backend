import joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

const envVarsSchema = joi
  .object()
  .keys({
    PORT: joi.number().positive().required(),
    JWT_SECRET: joi.string().required(),
    MONGO_URL: joi.string().required(),
    AZURE_STORAGE_CONNECTION_STRING: joi.string().required(),
  })
  .unknown();

const { error, value: envVars } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  mongoUrl: envVars.MONGO_URL,
  azureStorageConnectionString: envVars.AZURE_STORAGE_CONNECTION_STRING,
};

export default config;
