'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizePort = undefined;

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizePort = exports.normalizePort = function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};
//# sourceMappingURL=utils.js.map
