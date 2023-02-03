const http = require('http');
const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const server =  http.createServer(app)

async function startServer(){
    server.listen(PORT, ()=>{
        console.log('Server is listening at ${PORT} ...')
    })
}

startServer()