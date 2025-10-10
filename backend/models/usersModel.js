const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male','female','other'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

})
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;