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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body},]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;