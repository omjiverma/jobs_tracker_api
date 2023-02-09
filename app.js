const express = require('express')
const app = express()
require('express-async-errors');

const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const rateLimiter = require('express-rate-limit')

const userAuthentication = require('./middlewares/authentication.middleware')
const notFoundMiddleware = require('./middlewares/notFound.middleware')
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware')

const authRouter = require('./routes/auth.router')
const jobsRouter = require('./routes/jobs.router')


// Middleware
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

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