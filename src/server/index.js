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



// app.get('/api/episodes', api.findAll)
// app.get('/api/episodes/:id', api.findById)
//
// // a remplacer par post
// app.get('/api/episodes/delete/:id', api.delete)
// app.get('/api/episodes/update/:id/:name/:score', api.update)
// app.get('/api/episodes/create/:name/:score', api.create)


// LAUNCH THE APP
app.listen(config.port, () => console.log(`SERVER RUN ON PORT ${config.port}`))

// voir router
module.exports = router
