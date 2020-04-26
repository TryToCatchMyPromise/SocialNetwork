import React from "react";



const Auth = (props) => {
  let state = props;
  let email = state.email;
  let password = state.password;

  let onEmailChange = (event) => {
    let text = event.target.value;
    state.setEmailText(text);

  };

  let onPasswordChange = (event) => {
    let text = event.target.value;
    props.setPasswordText(text);
  };

  console.log(email);

  return (
      <div>
        <h3>Sing in</h3>
        <form>
          <div>
            <input type="text" name="login" value={email} onChange={onEmailChange}/>
          </div>
          <div>
            <input type="password" name="password" value={password} onChange={onPasswordChange}/>
          </div>
          <div>
            <button>Sing in</button>
          </div>
        </form>
      </div>
  );
};

export default Auth;