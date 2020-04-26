import {AUT_CHANGE_EMAIL_TEXT, AUT_CHANGE_PASSWORD_TEXT} from './AuthActions';
import {setPasswordTextCreator, setEmailTextCreator} from "./AuthActions";

const defaultState = {
  email: '',
  password: '',
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUT_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload,
      };
    case AUT_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload,
      };
  }
  return state;
};