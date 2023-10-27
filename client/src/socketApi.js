import io from 'socket.io-client'

let socket;

export const init = () =>{
    console.log("Bağlanılıyor....")
    socket = io("http://localhost:3000",{
        transports: ["websocket"],  
    })
    socket.on("connect", ()=> console.log("Connected"))
}

export const sendMessage = (message)=> {
    if(socket) socket.emit("new-message",message)
}

export const subscribeChat = (cb) =>{
    if(!socket ) return

    socket.on("receive-message",(message)=>{
        console.log("new message",message)
        cb(message)
    })
}
export const initalMessage = (cb)=>{
    if(!socket) return 

    socket.on("message-list",(messages)=>{
        console.log("Inital",messages)
        cb(messages)
    }
    )
}