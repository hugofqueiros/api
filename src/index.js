import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import {normalizePort} from './utils';
import logger from 'morgan';

import routes from './routes/index'

let app = express();

app.use(logger('dev'));

const port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

//app.server = http.createServer(app);

app.use(helmet());

app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use('/api', routes);

app.listen(port);
console.log('Magic happens on port: ', port);

//export default app;







