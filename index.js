const path    = require("path");
const express = require("express");
const app     = express();
const servidor = app.listen(3000,()=>{console.log("Conectado al puerto 3000");});
const socket  = require("socket.io");
const io      = socket(servidor);

//Static files
app.use(express.static(path.join(__dirname,"public")));

//Web Sockets

io.on("connection", (socket) => {
  socket.on("envio",(envio) => {
    console.log(`${envio.usuario}:${envio.mensaje}`);
    io.sockets.emit("envio",envio);
  })
  socket.on("escribiendo", (usuario) => {
    socket.broadcast.emit("escribiendo",usuario);
  })
});


//Servidor conectado
