const createError = require(`http-errors`)
const express = require(`express`)
const path = require(`path`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const app = express()

const indexRoute = require(`./routes/index`)
const messageRoute = require(`./routes/message`)

app.set(`views`, path.join(__dirname, `views`))
app.set(`view engine`, `ejs`)

app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, `public`)))
app.use(`/`, indexRoute)
app.use(`/message`, messageRoute)

app.use(function(req, res, next) {
  next(createError(404))
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get(`env`) === `development` ? err : {}

  var home = req.protocol + `://` + req.get('host')

  res.render(`error`, {number: err.status, message: err.message, home, modeLoad: `loadTheme(1)`, modeSwitch: `modeSwitch(1)`})
});

module.exports = app