const express = require('express')
const { config } = require('dotenv')
config()
const userRoutes = require('./routes/user.routes')
require('./database/config/init-db')

const app = express()

app.use('/api', userRoutes)

app.listen(process.env.PORT || 3000)
