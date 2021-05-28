import {useSelector} from 'react-redux'
import {AppStateType} from 'src/Redux/redux-store'
import {InitialStateType} from 'src/Redux/dialogs-reducer'
import AddMessageForm from '../Dialogs/AddMessageForm/AddMessageForm'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: FC<PropsType> = (props) => {

  const dialogsPageState = useSelector( (state: AppStateType) => state.dialogsPage);
  const {dialogs, messages} = dialogsPageState

  let dialogsElements = dialogs
      .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));

  let messagesElements = messages
      .map(message => (<Message message={message.message} key={message.id} id={message.id}/>));

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
  };

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
  );
};

export default Dialogs;
