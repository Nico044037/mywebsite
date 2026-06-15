const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("broadcast", (msg) => {
        io.emit("broadcast", msg);
    });
});

server.listen(3000, () => {
    console.log("Running on port 3000");
});
