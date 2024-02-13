const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
    }
});

// create model
const users = new mongoose.model("usersimg", userSchema);

module.exports = users;