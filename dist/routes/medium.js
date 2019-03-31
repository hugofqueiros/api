'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _medium = require('../controllers/medium');

var _medium2 = _interopRequireDefault(_medium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_medium2.default.getPublications);

exports.default = router;
//# sourceMappingURL=medium.js.map
