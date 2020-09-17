import profileReducer from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import sidebarReducer from "./sidebar-reducer.ts";

let store = {
  _state: {
    profilePage: {
      posts: [{id: 1, message: 'Hi, how are You?', likesCount: 12},
        {id: 2, message: 'It is my first post!', likesCount: 16},],
      newPostText: 'My text',
    },
    dialogsPage: {
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
    },
    sidebarPage: {},

  },
  _callSubscriber() {
    console.log('State has changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);

  },
};






export default store;

window.store = store;