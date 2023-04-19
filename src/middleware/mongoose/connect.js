const mongoose = require("mongoose")

// Connect to Mongo DB Atlas
const mongoConnectionString = process.env.NUCLEUS_DB_STRING

module.exports = mongoose.connect(mongoConnectionString)
  .then(() => {
    console.log("Server connected to Mongo DB Atlas")
  })
  .catch((err) => {
    console.log(err)
  })