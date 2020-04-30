const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "It's me"},
    {id: 3, message: "Hello, world"},
    {id: 4, message: "Palundra!"},
    {id: 5, message: "Kokos"},
  ],
  dialogs: [{id: 1, name: "Gleb"},
    {id: 2, name: "Petr"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Lera"},
    {id: 5, name: "Andru"},],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body},]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;