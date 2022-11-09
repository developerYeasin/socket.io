const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const socketIo = require("socket.io");
const httpServer = http.createServer(app);
const io = socketIo(httpServer, {
    cors: {
      origin: "http://localhost:3000",
    },
})

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" })
})

io.on('connection', socket => {
    console.log("a user connected");
});
httpServer.listen("5000", () => { console.log("server is running now 5000") })