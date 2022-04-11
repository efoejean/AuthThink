import dotnev from 'dotenv';

dotnev.config();

export default {
  PORT: parseInt(process.env.PORT as string, 10),
};
