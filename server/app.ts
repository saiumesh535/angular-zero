import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';

import { handle404Error, errorHandler } from './utils/errorHandler';
import { autController } from './controllers/auth';
import { connectDB } from './mongodb/connect';
import { adminController } from './controllers/admin';
import { verifyToken } from './utils/tokenHelper';

const app = express();

/* middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * connecting mongoDB as middleware
 */

app.use(connectDB);

/**
 * auth controllers
 */
app.use('/auth', autController);


/**
 * admin controllers
 * verify jwt token for admin requests
 */
app.use('/admin', verifyToken , adminController);


/**
 * handling all 404 errors
 */
app.use(handle404Error);
app.use(errorHandler);

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
    console.log(`express is up ${port}`);
});