const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})


module.exports = app;