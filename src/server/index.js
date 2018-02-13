const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api.js')
const config = require('./config.js')

// CREATE THE APP
const app = express()
const router = express.Router()

// PARSE BODY
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api/episodes', api);



// LAUNCH THE APP
app.listen(config.port, () => console.log(`SERVER RUN ON PORT ${config.port}`))

// voir router
module.exports = router
