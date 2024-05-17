const express = require('express')
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const databaseConnection = require('./config/database')

const app = express()
const PORT = process.env.PORT || 3004

//* Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(cors())

//check for token and create an req.user prop in the request
app.use(require('./config/checkToken'))


//* API routes
app.use('/api/users', require('./routes/api/users'));


databaseConnection()

app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});