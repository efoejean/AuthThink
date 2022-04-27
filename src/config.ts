import dotenv from 'dotenv';
import { Config } from './Types/config';

dotenv.config();

const config: Config = {
  api: {
    apiEndpoint: process.env.API_ENDPOINT,
    apiKey: process.env.API_KEY,
  },
  db: {
    dataSource: process.env.dataSource,
    dataBase: process.env.dataBase,
    collection: process.env.collection,
  },
  port: parseInt(process.env.PORT || '3000', 10),
};

export default config;
