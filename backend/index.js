let app = require("express")();
let http = require("http").createServer(app);

let io = require("socket.io")(http);

const PORT = 3000;

io.on("connection", function(socket) {
  console.log("user connected");

  socket.on("chat message", message => {
    console.log(message);
    io.emit('chat message', message);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(PORT, function() {
  console.log(`started on port ${PORT}`);
});
