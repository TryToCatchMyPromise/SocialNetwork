import React from "react";
import {actions} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from '../../Redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Dialogs);