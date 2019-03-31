'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseValidators = require('mongoose-validators');

var _mongooseValidators2 = _interopRequireDefault(_mongooseValidators);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _apierror = require('../utils/apierror');

var _apierror2 = _interopRequireDefault(_apierror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: _mongooseValidators2.default.isEmail()
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});

UserSchema.pre('save', function (next) {});

UserSchema.method({});

UserSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - the objectId of user
     * @returns {Promise<User, ApiError>}
     */
    get: function get(id) {
        return this.findById(id).exec().then(function (user) {
            if (user) {
                return user;
            }
            var error = new _apierror2.default('No such user exists', _httpStatus2.default.NOT_FOUND);
            return _bluebird2.default.reject(error);
        });
    },
    list: function list() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$skip = _ref.skip,
            skip = _ref$skip === undefined ? 0 : _ref$skip,
            _ref$limit = _ref.limit,
            limit = _ref$limit === undefined ? 50 : _ref$limit;

        return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
    }
};

exports.default = _mongoose2.default.model('user', UserSchema);
//# sourceMappingURL=user.js.map
