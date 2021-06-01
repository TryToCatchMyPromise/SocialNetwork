import {FC} from 'react'
import {AddMessageForm} from 'src/pages/Chat/AddMessageForm'
import {Messages} from 'src/pages/Chat/Messages'

export const Chat: FC = () => {

  return <div>
    <Messages/>
    <AddMessageForm/>
  </div>
}
