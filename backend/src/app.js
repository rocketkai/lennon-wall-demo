import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import postsRouter from './routes/postsRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Successfully hit root endpoint!'));

app.use('/posts', postsRouter);

module.exports = app;
