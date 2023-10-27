import React from 'react'
import styles from './styles.module.css'
function ChatItem(props) {
    console.log(props)
  return (
    <div className={`${styles.chatItem} ${props.item.fromMe ? styles.right :""}`}>
        <p>{props.item.message}</p>
        </div>
  )
}

export default ChatItem