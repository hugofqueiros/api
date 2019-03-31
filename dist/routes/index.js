'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressReverse = require('express-reverse');

var _expressReverse2 = _interopRequireDefault(_expressReverse);

var _metrics = require('./metrics');

var _metrics2 = _interopRequireDefault(_metrics);

var _medium = require('./medium');

var _medium2 = _interopRequireDefault(_medium);

var _tags = require('./tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
//import userRouter from './user';


router.use(function (req, res, next) {
    console.log('something is happening');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'hooray! Welcome to our api!' });
});

//router.use('/users', userRouter);
router.use('/metrics', _metrics2.default);
router.use('/medium', _medium2.default);
router.use('/tags', _tags2.default);

router.get('/wo', function (req, res) {
    res.json({ message: 'noooooooo' });
});

exports.default = router;
//# sourceMappingURL=index.js.map
