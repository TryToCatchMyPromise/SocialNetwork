import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../Redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import classes from './../common/FormsControls/FormControls.module.css'
import {AppStateType} from '../../Redux/redux-store'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
  return (
      <form onSubmit={handleSubmit}>
        {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
        {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
        {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {},)}
        <div>
          <button>Login</button>
        </div>
        {error && <div className={classes.formSummaryError}>
          {error}
        </div>}
      </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormValuesType) => {
      dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {captchaUrl}
        />
      </div>
  )
}