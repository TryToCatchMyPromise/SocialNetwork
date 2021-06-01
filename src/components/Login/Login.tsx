import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {login} from 'src/Redux/auth-reducer'
import {AppStateType} from 'src/Redux/redux-store'
import {required} from 'src/utils/validators/validators'
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls'
import classes from './../common/FormsControls/FormControls.module.css'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                              handleSubmit,
                                                                                                              error,
                                                                                                              captchaUrl
                                                                                                            }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
      {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
      {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
      {captchaUrl && <img src={captchaUrl} alt={'Captcha'}/>}
      {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}
      <div>
        <button>Login</button>
      </div>
      {error && <div className={classes.formSummaryError}>
        {error}
      </div>}
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: FC = () => {

  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}
      />
    </div>
  )
}
