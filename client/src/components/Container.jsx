import React,{useEffect}from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init } from '../socketApi'
import { subscribeChat } from '../socketApi'
import { useChat } from '../context/ChatContext'
import { initalMessage } from '../socketApi'
function Container() {
  const {setMessages} = useChat()
  useEffect(()=>{
    init()
    initalMessage((messages)=> setMessages(messages))
    subscribeChat((message)=>{
      setMessages((prevState)=> [...prevState,{message,fromMe:true}])
    })

  },[])
  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container