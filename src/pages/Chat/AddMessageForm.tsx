import {FC, useState} from 'react'
import {useChatChannel} from 'src/hooks/useChatChannel'

export const AddMessageForm: FC = () => {

  const [message, setMessage] = useState('')
  const {wsChannel} = useChatChannel()


  const sendMessage = () => {
    if (!message) return
    wsChannel.send(message)
    setMessage('')
  }

  return <div>
    <div>
      <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
    </div>
    <div>
      <button onClick={() => sendMessage()}>Send</button>
    </div>
  </div>
}
