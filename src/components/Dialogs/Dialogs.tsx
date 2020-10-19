import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import App from "../../App";
import {InitialStateType} from "../../Redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import AddMessageForm from "../Dialogs/AddMessageForm/AddMessageForm"

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
      .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));

  let messagesElements = state.messages
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

// const maxLength50 =maxLengthCreator(100);
//
// const AddMessageForm = (props) => {
//   return (
//       <form onSubmit={props.handleSubmit}>
//         <div>
//               <Field component={Textarea}
//                      name={"newMessageBody"}
//                      placeholder="Enter Your message"
//                      validate={[required, maxLength50]}
//               />
//         </div>
//         <div>
//           <button>Send</button>
//         </div>
//       </form>
//   )
// }
//
// const AssMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm);


export default Dialogs;