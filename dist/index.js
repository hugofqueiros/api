'use strict';

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils/utils');

var _fs = require('fs');

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import mongoose from 'mongoose';
//import bluebird from 'bluebird';
var debug = (0, _debug2.default)('app:index');

// plugin bluebird promise in mongoose
//mongoose.Promise = bluebird;

//deb('env: ', env);

var env = _env2.default.default;

console.log('on index.js: ', _env2.default);

// mongoose.connect(env.db, { server: { socketOptions: { keepAlive: 1} }});
// mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: ${env.db}`);
// });

// if (env.MONGOOSE_DEBUG) {
//     mongoose.set('debug', (collectionName, method, query, doc) => {
//         debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//     });
// }

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    var port = (0, _utils.normalizePort)(env.port || _config2.default.port);

    _express2.default.listen(process.env.PORT || port, function () {
        debug('server started on port ' + port + ' (' + env.env + ')');
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
//# sourceMappingURL=index.js.map
