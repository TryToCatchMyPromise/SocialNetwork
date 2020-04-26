import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import App from "../../App";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

          let state = props.dialogsPage;

  let dialogsElements = state.dialogs
      .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));

  let messagesElements = state.messages
      .map(message => (<Message message={message.message} key={message.id} id={message.id}/>));

          let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

          let onNewMessageChange = (e) => {
            let body = e.target.value;
            props.updateNewMessageBody(body);
            // props.store.dispatch(updateNewMessageBodyCreator(body));
          };


  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter Your message">

              </textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
  );
};


export default Dialogs;