import {FormAction, stopSubmit} from 'redux-form'
import {ResultCodeForCaptchaEnum, ResultCodesEnum} from '../API/api'
import {authAPI} from '../API/auth-api'
import {securityAPI} from '../API/security-api'
import {BaseThunkType, InferActionsTypes} from './redux-store'

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState = {

  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null,
}


const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      }
    case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
  } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
  } as const),
}





export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let {id, login, email} = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
    dispatch(stopSubmit("login", {email: message}));
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));

  }
}


export default authReducer;
