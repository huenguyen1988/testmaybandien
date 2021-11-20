const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Test = new Schema({
    name: { type: String },
    state: { type: Boolean },
    power: { type: Number },
    command: { type: Boolean }

});

module.exports = mongoose.model('Test', Test)