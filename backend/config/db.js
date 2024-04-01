const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/evently');

module.exports = {
    connection
}