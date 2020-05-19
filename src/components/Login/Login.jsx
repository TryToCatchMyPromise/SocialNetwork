import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./../common/FormsControls/FormControls.module.css";

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"}
                 name={"email"}
                 component={Input}
                 validate={[required]}
          />
        </div>
        <div>
          <Field placeholder={"Password"}
                 name={"password"}
                 component={Input}
                 validate={[required]}
                 type={"password"}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
        </div>

        <div>
          <button>Login</button>
        </div>
        { props.error && <div className={classes.formSummeryError}>
          {props.error}
        </div>}
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);