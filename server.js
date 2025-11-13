const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('hoopa-logger')

require('dotenv').load()

const config = require('./config')
const routes = require('./routes')

const app = express()

app.config = config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('port', config.port)

app.use(routes())

const port = 8080

app.listen(port, () => {
    logger.info(`Dialetus API server is listening on port 8080 (http://localhost:8080)`)
})

module.exports = app