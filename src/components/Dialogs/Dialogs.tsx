import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from 'src/Redux/dialogs-reducer'
import {AppStateType} from 'src/Redux/redux-store'
import AddMessageForm from '../Dialogs/AddMessageForm/AddMessageForm'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

export type NewMessageFormValuesType = {
  newMessageBody: string
}

export const Dialogs: FC = () => {

  const dialogsPageState = useSelector((state: AppStateType) => state.dialogsPage)
  const dispatch = useDispatch()
  const {dialogs, messages} = dialogsPageState

  let dialogsElements = dialogs
    .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>))

  let messagesElements = messages
    .map(message => (<Message message={message.message} key={message.id} id={message.id}/>))

  let addNewMessage = (values: NewMessageFormValuesType) => {
    dispatch(actions.sendMessage(values.newMessageBody))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
      </div>
    </div>
  )
}
