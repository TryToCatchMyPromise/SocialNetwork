import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import App from "../../App";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
      .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));

  let messagesElements = state.messages
      .map(message => (<Message message={message.message} key={message.id} id={message.id}/>));

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"}/>;
  }

  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <div>
            <AssMessageFormRedux onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
  );
};

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
              <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter Your message" />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
  )
}

const AssMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm);


export default Dialogs;