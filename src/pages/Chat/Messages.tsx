import {FC, useEffect, useState} from 'react'
import {useChatChannel} from 'src/hooks/useChatChannel'
import {Message} from 'src/pages/Chat/Message'

export type ChatMessageType = {
  message: string,
  photo: string,
  userId: number,
  userName: string
}

export const Messages: FC = () => {

  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const {wsChannel} = useChatChannel()

  useEffect(() => {
    wsChannel.addEventListener('message', (e: MessageEvent) => {
      const newMessages = JSON.parse(e.data)
      setMessages(prevMessages => [...prevMessages, ...newMessages])
    })
    // return ws.removeEventListener('message', (e) => {
    //     setMessages([...messages, ...newMessages])
    // })
  })


  return <div style={{height: '400px', overflowY: 'auto'}}>
    {messages.map((message, index) => {
      return <Message message={message} key={index}/>
    })}
  </div>
}
