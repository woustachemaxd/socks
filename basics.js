const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

const server = http.createServer((req, res) => {
  res.end("I am connected!");
});

const io = socketio(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("hello", { data: "Welcome to the websocket server!!" });
  socket.on("messagefromclient", (arg) => {
    console.log(arg);
  });
});

server.listen(8000);
