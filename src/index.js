import mongoose from 'mongoose';
import bluebird from 'bluebird';
import deb from 'debug';
import util from 'util';
import confEnv from './config/env';
import app from './config/express';
import config from './config/config';
import {normalizePort} from './utils/utils';
import {fs} from 'fs';
import https from 'https';

const debug = deb('app:index');

// plugin bluebird promise in mongoose
mongoose.Promise = bluebird;

//deb('env: ', env);

const env = confEnv.default;

console.log('on index.js: ', confEnv);

mongoose.connect(env.db, { server: { socketOptions: { keepAlive: 1} }});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${env.db}`);
});

if (env.MONGOOSE_DEBUG) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
        debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    });
}



// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if(!module.parent) {
    // listen on port config.port
    const port = normalizePort(env.port || config.port);

    app.listen(port, () => {
        debug(`server started on port ${port} (${env.env})`);
    });

    // if(process.env.NODE_ENV === 'production') {
    //     const key = fs.readFileSync('sslcert/server.key', 'utf8');
    //     const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
    //     const credentials = {
    //         key: key,
    //         cert: certificate
    //     };
    //
    //     https.createServer(credentials, app);
    // }
    //
    // app.listen('443', () => {
    //     debug(`https server started on port 443 (${env.env})`);
    // })
}

