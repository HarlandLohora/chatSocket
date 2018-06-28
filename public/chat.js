const socket = io();
let mensaje = document.getElementById("mensaje");
let usuario = document.getElementById("usuario");
let btn     = document.getElementById("enviar");
let salida  = document.getElementById("output");
let actions = document.getElementById("actions")

btn.addEventListener("click", () => {
  socket.emit("envio",{
    usuario: usuario.value,
    mensaje: mensaje.value
  });
})

mensaje.addEventListener("keypress", () => {
  socket.emit("escribiendo", usuario.value);
})

socket.on("envio", (info) => {
  actions.innerHTML = "";
  mensaje.value = "";
  output.innerHTML += `<p><strong>${info.usuario}</strong>: ${info.mensaje}</p>`
})

socket.on("escribiendo", (usuario) => {
  actions.innerHTML = "";
  actions.innerHTML += `<p><strong>${usuario}</strong> esta escribiendo</p>`
})
