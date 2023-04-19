// Config router
const express = require("express")
const router = express.Router()

// Define routes
router.get("/", (req, res) => {
    res.render("home")
})

// Export to app
module.exports = router