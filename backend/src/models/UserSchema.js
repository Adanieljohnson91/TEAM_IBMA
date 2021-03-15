const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * User Schema, Not using numbers directly, 
 * currentRoom will be a number in string form
 * along with proficiency.
 */
const userSchema = new Schema({
    name: String,
    headLine: String,
    email: String,
    languages: [{id: Number, proficiency: Number }],
    friends: [String],
    currentRoom: String,
})

module.exports =  mongoose.model('Person', userSchema)