const express = require("express");
const app = express();
const socketio = require("socket.io"); //Server

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
  socket.on("newMessage", (data) => {
    io.emit("messageToClients", { text: data.text });
  });
});
