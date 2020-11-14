import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import '@shared/typeorm'
import '@shared/container';

import routes from './routes'


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log('🚀️ server started on port 3333!')
});
