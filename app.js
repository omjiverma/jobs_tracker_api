const express = require('express')
const app = express()
require('express-async-errors');

const userAuthentication = require('./middlewares/authentication.middleware')
const notFoundMiddleware = require('./middlewares/notFound.middleware')
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')

const authRouter = require('./routes/auth.router')
const jobsRouter = require('./routes/jobs.router')


// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',userAuthentication, jobsRouter)

// Middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


module.exports = app;