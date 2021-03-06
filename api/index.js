const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const background = require('./routes/background')
const weather = require('./routes/weather')
const nasa = require('./routes/nasa')

// Import API Routes
app.use(background)
app.use(weather)
app.use(nasa)

// Export the server middleware
module.exports = {
	path: '/api',
	handler: app
}
