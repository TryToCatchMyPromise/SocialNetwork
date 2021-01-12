import React, {useEffect} from 'react'

const url = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'

const ws = new WebSocket(url)

const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            console.log(e)
        })
        return ws.removeEventListener('message', (e) => {
            console.log(e)
        })
    })

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages: React.FC = () => {

    const messages = [1, 2, 3, 4]

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((message: any) => {
            return <Message/>
        })}
    </div>
}

const Message: React.FC = () => {

    const message = {
        url: 'https://via.placeholder.com/30',
        author: 'Gleb',
        text: 'Hello, my friends!'
    }

    return <div>
        <img src={message.url}/> <b>{message.author}</b>
        <br/>
        {message.text}
        <hr/>
    </div>
}

const AddMessageForm: React.FC = () => {
    return <div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Send</button>
        </div>
    </div>
}

export default ChatPage