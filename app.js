const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/notFound.middleware')
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')

const authRouter = require('./routes/auth.routes')


// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})

app.use('/api/v1/auth',authRouter)

// Middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


module.exports = app;