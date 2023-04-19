const express = require("express")
const http = require("http")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookies = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")

// Create server
const server = http.createServer(app)

// Config middleware
app.use("/public", express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookies())

// Setup Passport.js session handler
require("./src/middleware/passport/auth")

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(function (req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated()
  next()
})

// Setup DB
require("./src/middleware/mongoose/connect")

// Point to routes
app.use("/", require("./src/routes/routes"))

// Start server
const port = process.env.PORT || 5000
server.listen(port, () => console.log("Listening on port " + port))