import {createContext,useContext,useState} from 'react'

const ChatContext = createContext()

export const ChatProvider = ({children}) =>{
    const [message,setMessages] = useState([])
    const values= {
        message,
        setMessages,
    }

    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export const useChat = () => useContext(ChatContext)


