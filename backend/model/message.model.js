const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message: { type: String, required: true },
    createdBy: { type: String},
}, {
    versionKey: false
});

const messageModel = mongoose.model('messages', messageSchema);

module.exports = {
    messageModel
}