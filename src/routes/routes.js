// Config router
const express = require("express")
const passport = require("passport")
require("../middleware/passport/auth")
const bcrypt = require("bcrypt")
const router = express.Router()

// Import user model
const User = require("../models/user-model")

// Validate user has an active session
ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/restricted_content")
}

// Define routes
router.get("/", (req, res) => {
  res.redirect("/login")
})

router.get("/register", (req, res) => {
  res.render("session/register")
})

router.post("/register", (req, res) => {
  const { username, email, password1, password2 } = req.body

  if (password1 !== password2) {
    res.redirect("/register")
  } else {
    User.findOne({ username: username })
      .then((user) => {
        if (user) {
          // If user already exists, redirect to login
          res.redirect("/login")
        } else {
          const newUser = new User({
            username: username,
            email: email,
            password: password1
          })

          // Hash password before saving
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt,
              (err, hash) => {
                if (err) throw err

                // Overwrite password as hash
                newUser.password = hash;

                // Save user
                newUser.save().then(() => {
                  res.redirect("/login")
                })
              }
            )
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
})

router.get("/login", (req, res) => {
  res.render("session/login")
})

router.post("/login",
  passport.authenticate("local", {
    failureRedirect: "public/html/restricted_content.html",
    successRedirect: "/welcome"
  })
)

router.get("/logout", (req, res) => {
  res.render("session/login")
})

router.get("/welcome", (req, res) => {
  res.render("welcome")
})

router.get("/restricted_content", (req, res) => {
  res.render("restricted_content")
})

// Export to app
module.exports = router