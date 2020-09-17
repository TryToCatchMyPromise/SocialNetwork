// import {authAPI} from "../API/api";
// import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";
import exp from "constants";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean,
  // globalError: null,
}

let initialState: InitialStateType = {
  initialized: false,
  // globalError: null,
}

const appReducer = (state = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }


}

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    })
}


export default appReducer;