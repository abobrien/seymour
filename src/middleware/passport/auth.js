const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const LocalUser = require("../../models/user-model")

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
      LocalUser.findOne({ username: username })
        .then((user) => {
          // If user is not found, return an error
          if (!user) {
            return done(null, false, { message: "Username not found." })
          }

          // If users is found, decrypt and validate password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err

            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false, { message: "Username or password is incorrect." })
            }
          })
        })
        .catch((err) => { console.log(err) })
    })
  )

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    LocalUser.findById(id, function (err, user) {
      done(err, user)
    })
  })
}

// Validate user has an active session
ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.login = req.isAuthenticated()
    return next()
  }
  res.redirect("/restricted_content")
}

// Export to app
module.exports = ensureAuthenticated