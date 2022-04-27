import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import config from './config';

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
