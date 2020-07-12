//Getting the necessary modules
const path = require(`path`)
const express = require(`express`)
const router = express.Router()

router.get(`/`, function(req, res) {

  //Get Link back to homepage
  var home = req.protocol + `://` + req.get('host')
  
  // Variables being passed to the corresponding EJS file
  res.render(`index`, {title: `Hello World`, home, modeLoad: "loadTheme(1)", modeSwitch: "modeSwitch(1)"})
})

module.exports = router