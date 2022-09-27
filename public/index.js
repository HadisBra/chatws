$(
    () => {

        const socket = io()
        let username
        $("#form1").on("submit", ()=> {
            if (username)
            socket.emit("Chat msg", $("#msg").val())
            else{
                username=$("#msg").val()
                socket.emit("Login",username)
            }
            return false
        })
        socket.on("Chat msg", msg => $("#messagens").append($("<li>").text(msg)))
    }
)
