import React, {Suspense, lazy} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

// lazy loading realization
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
alert("Some error occurred");

  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }


    return (

        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>

          <div className="app-wrapper-content">
            <Switch>
              {/*<Redirect from="/" to="/profile"/>*/}
              <Route exact path={"/"}>
                <Redirect from="/" to="/profile"/>
              </Route>
              <Route path="/dialogs" render={
                () => <DialogsContainer/>}/>
              <Route path="/profile/:userId?" render={
                () => <ProfileContainer/>}/>

              <Route path="/users" render={
                () => <UsersContainer pageTitle={"Users"}/>}/>

              <Route path="/login" render={
                () => <LoginPage/>}/>
              <Route path="*" render={
                () => <div>404 not found</div>}/>
            </Switch>
          </div>

        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);