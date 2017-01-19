import Promise from 'bluebird';
import mongoose from 'mongoose';
import validator from 'mongoose-validators';
import httpStatus from 'http-status';
import ApiError from '../utils/apierror';


const UserSchema = new mongoose.Schema({
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
        validate: validator.isEmail()
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt: Date
});

UserSchema.pre('save', function(next){

});

UserSchema.method({

});

UserSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - the objectId of user
     * @returns {Promise<User, ApiError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((user) => {
                if(user) {
                    return user;
                }
                const error = new ApiError('No such user exists', httpStatus.NOT_FOUND);
                return Promise.reject(error);
        });
    },

    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }
};

export default mongoose.model('user', UserSchema);


