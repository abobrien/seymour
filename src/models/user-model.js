const mongoose = require("mongoose");

// Define model schema
let LocalUserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

// Export to app
module.exports = mongoose.model("LocalUser", LocalUserSchema)