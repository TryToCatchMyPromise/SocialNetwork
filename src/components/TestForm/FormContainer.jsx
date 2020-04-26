import React from "react";
import {connect} from "react-redux";
import Auth from "./Form";
import {setPasswordTextCreator, setEmailTextCreator} from "../../Redux/Test/AuthActions";


const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    setEmailText: (text) => {
      dispatch(setEmailTextCreator(text));
    },
    setPasswordText: (text) => {
      dispatch(setPasswordTextCreator(text));
    },
  };
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default FormContainer;