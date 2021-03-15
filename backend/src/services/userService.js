const { create } = require("../models/UserSchema")
const User = require("../models/UserSchema")

async function create(user){
    let newUser = new User(user);
    let doc = await newUser.save();
    return doc;
}

module.exports = {
    create
}