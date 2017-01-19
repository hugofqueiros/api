import express from 'express';
import expressWinston from 'express-winston';
import expressValidation from 'express-validation';
import winstonInstance from './winston';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import config from './config';
import env from './env';

import ApiError from '../utils/apierror';
import logger from 'morgan';

import routes from '../routes/'

const app = express();

console.log('on express.js: ', env);

if(env.env === 'development') {
    app.use(logger('dev'));
}

// parse body params and attach them to req.body
app.use(bodyParser.json({
    limit: config.bodyLimit
}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable cors
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

if(env.env === 'development') {
    expressWinston.responseWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
        winstonInstance,
        meta: true, // optional: log meta data about request (defaults to true)
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    }));
}

// mount all routes on /api path
app.use('/api', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if(err instanceof  expressValidation.ValidationError) {
        // validation error contains errors which is an array of error each containing message[]
        const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
        const error = new ApiError(unifiedErrorMessage, err.status, true);
        return next(error);
    } else if (!(err instanceof ApiError)) {
        const apiError = new ApiError(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new ApiError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

// log error in winston transports except when executing test suite
if (config.env !== 'test') {
    app.use(expressWinston.errorLogger({
        winstonInstance
    }));
}

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
    res.status(err.status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        stack: env.env === 'development' ? err.stack : {}
    })
);

// const port = normalizePort(process.env.PORT || config.port);
// app.set('port', port);

//app.server = http.createServer(app);

export default app;

// app.use('/api', routes);
//
// app.listen(port, () => {
//     console.log('App listening on port: ', port);
// });









