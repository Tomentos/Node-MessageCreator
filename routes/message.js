//Getting the necessary modules
const path = require(`path`)
const express = require(`express`)
const router = express.Router()
const config = require(`../data/message.json`)

router.get(`/`, function(req, res) {
  
  //Get Link back to homepage
  var home = req.protocol + `://` + req.get('host')

  // Variable Creation
  var keys = Object.keys(config.Options)
  var bgAmount = Object.keys(config.Path.BackgroundThumbnail).length
  var fontAmount = Object.keys(config.Options.Font).length
  var appearanceAmount = Object.keys(config.Options.Appearance).length
  var bgTag = ``
  var fontTag = ``
  var appearanceTag = ``
  var appearanceSpeedTag = ``
  var appearanceDelayTag = ``

  // Tag Generation
  for (var i = 0; i < bgAmount; i++)
    bgTag += `<label>\n<input type="radio" name="background" value="${i}" id="${keys[0].toLowerCase() + `.` + i}">\n<img class="imgGap" src="${config.Path.BackgroundThumbnail[i]}" alt="BG${i}">\n</label>\n`

  for (var i = 0; i < fontAmount; i++)
    fontTag += `<option value="${i}">${config.Options.Font[i]}</option>\n`

  for (var i = 0; i < appearanceAmount; i++)
    appearanceTag += `<label>\n<input type="radio" name="appearance" value="${i}" id="${keys[3].toLowerCase() + `.` + i}">\n<img class="imgGap arrow" title="${config.Options.Appearance[i]}" id="arrow${i}">\n</label>\n`
  
  //Creation of Tags where generation is unnecessary
  appearanceSpeedTag = `<input class="txtInput" type="number" min="0" max="10" value="1" id="appearanceSpeed">`
  appearanceDelayTag = `<input class="txtInput" type="number" min="0" max="10" value="0" id="appearanceDelay">`
  textTag = `<textarea class="txtInput" onkeypress="charCountdown()" onkeyup="charCountdown()" cols="50" rows="5" maxlength="100" id="text"></textarea>`

  // Variables being passed to the corresponding EJS file
  res.render(`message`, {title: `Welcome to the Message Creator`, home, modeLoad: "loadTheme(1, 1)", modeSwitch: "modeSwitch(1, 1)", bgTag, fontTag, appearanceTag, appearanceSpeedTag, appearanceDelayTag, textTag})
})


router.get(`/view`, function(req, res) {

  //Get Link back to homepage
  var home = req.protocol + `://` + req.get('host') + req.baseUrl
  
  //Creating variables from the URL querys
  var options = req.query.op.split(`,`)
  var message = ``
  var title = ``

  //Formatting the message
  decodeURIComponent(req.query.msg).split(decodeURI(`%0A`)).forEach(msg => {
    message += msg + `<br/>`
    title += ` `
  });

  //Getting the amount of lines and longest line
  msglines = message.split(`<br/>`).length
  msglength = 0
  msgvw = 1
  message.split(`<br/>`).forEach(line => {
    if (line.length > msglength)
      msglength = line.length
  })
  while (msglength < 10) {
    msglength = msglength + msglength
    msgvw++
  }

  if (msglength > msglines || msglength == msglines) {
    msghigh = msglength
    msglow = msglines
  }
  else if (msglength < msglines) {
    msghigh = msglines
    msglow = msglength

  }

  //Processing the options
  var bg = config.Path.Background[options[0]]  
  var font = config.Options.Font[options[1]]
  var appearance = config.Options.Appearance[options[2]].split(` `)[0]
  var speed = config.Options.AppearenceSpeed[options[3]]
  var delay = config.Options.AppearenceDelay[options[4]]

  res.render(`messageView`, {title, home, options, message, msghigh, msglow, msgvw, bg, font, appearance, speed, delay})
})

module.exports = router