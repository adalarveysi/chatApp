import React, { useState } from 'react'
import styles from './styles.module.css'
import { sendMessage } from '../socketApi'
import { useChat } from '../context/ChatContext'
function ChatForm() {
    const {setMessages} = useChat()
    const [message,setMessage] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(message)
        setMessages((prevState) => [...prevState,{message}])

        sendMessage(message)
        setMessage("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput}type='text' value={message} onChange={(e)=> setMessage(e.target.value)}></input>
        </form>
    </div>
  )
}

export default ChatForm