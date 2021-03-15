const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * 
 */
const roomSchema = new Schema({
    name: String,
    message: String,
    attendees: [String]
})

module.exports =  mongoose.model('Person', roomSchema)