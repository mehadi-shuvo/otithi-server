// src/index.js
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './app/config';
import router from './app/routes';

dotenv.config();

const app: Express = express();
//parsers
app.use(express.json());
app.use(cors());

const port: string | undefined = config.port;

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send(`Otithi's Server is Running on port: ${port} ⚡`);
});

export default app;
