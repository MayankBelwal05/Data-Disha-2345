const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    userID: { type: String },
    organizer: { type: String, ref: 'User' }
}, {
    versionKey: false
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = {
    eventModel
}