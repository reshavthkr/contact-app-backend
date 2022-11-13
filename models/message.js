const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
    otp: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 60
    },
    message: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, { timestamp: true })
const Message = mongoose.model('Messages', messageSchema);

module.exports.Message = Message;