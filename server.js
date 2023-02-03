const http = require("http");
const app = require("./app");
require("dotenv").config();

const mongoConnect = require("./services/mongodb");


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  try {
    await mongoConnect();
    server.listen(PORT, () => {
      console.log("Server is listening at ${PORT} ...");
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
