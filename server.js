// SaaS = Software as a Service.
// PaaS = Platform as a Service.
// IaaS = Infraestrutura as a Service.

// export PORT=3000

// git init & git status verificaçao dos arquivos

// ls~/.bashrc
// ls~/.profile

// npmjs.com


const express = require("express")
const { platform } = require("os")
const { Socket } = require("socket.io")
const app = express()
app.use(express.static("public"))

const http = require("http").Server(app)
const PORT = process.env.PORT || 8000

const serverSocket = require("socket.io")(http)



//função de callback
http.listen(PORT, () => console.log(`Servidor iniciado em ${PORT}`))


app.get("/", (_, res) => res.sendFile(`${__dirname}/index.html`))


serverSocket.on("connect", socket => {

    console.log(`Cilente ${socket.id} conectou`)

    socket.on("Chat msg", msg => serverSocket.emit("Chat msg", `Msg recebida ${socket.username} -- ${msg}`))
    socket.on("Login", username => {
        socket.username = username
        serverSocket.emit("Chat msg", `Cliente ${username} conectou`)
    })

})


//serverSocket.on("login", socket =>{
 //   console.log(`Usuario ${login}`);

//})