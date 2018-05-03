const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required: true
    }
});

const user = module.exports = mongoose.model('User', userSchema);