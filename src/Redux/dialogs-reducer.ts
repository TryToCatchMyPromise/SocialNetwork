import exp from "constants";
import {type} from "os";

const SEND_MESSAGE = 'SEND-MESSAGE';

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "It's me"},
        {id: 3, message: "Hello, world"},
        {id: 4, message: "Palundra!"},
        {id: 5, message: "Kokos"},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Gleb"},
        {id: 2, name: "Petr"},
        {id: 3, name: "Ann"},
        {id: 4, name: "Lera"},
        {id: 5, name: "Andru"},
    ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string):SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;