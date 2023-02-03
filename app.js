const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/notFound.middleware')

// Middleware


// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})

// Middleware
app.use(notFoundMiddleware)


module.exports = app;