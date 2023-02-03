const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/notFound.middleware')
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')
// Middleware


// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})

// Middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


module.exports = app;