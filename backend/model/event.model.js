const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { 
        type: String,
        default: 'https://img.freepik.com/free-vector/flat-design-business-party-illustration_23-2149481435.jpg?w=900'
    },
    startDateTime: { type: Date},
    endDateTime: { type: Date},
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category:  { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    versionKey: false
});
  
const EventModel = mongoose.model("Event", eventSchema);

module.exports = {
    EventModel
}