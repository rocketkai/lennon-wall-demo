import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';

import postsRouter from './routes/postsRouter';
import wallsRouter from './routes/wallsRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Successfully hit root endpoint!'));

app.use('/posts', postsRouter);
app.use('/walls', wallsRouter);

module.exports = app;
