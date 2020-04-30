import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FormContainer from "./components/TestForm/FormContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (

      <div className="app-wrapper">
        <Header/>
        <Nav/>

        <div className="app-wrapper-content">
          <Route path="/dialogs" render={
            () => <DialogsContainer/>}/>
          <Route path="/profile" render={
            () => <Profile/>}/>
          <Route path="/test" render={
            () => <FormContainer/>}/>

          <Route path="/users" render={
            () => <UsersContainer/>}/>

        </div>

      </div>

  );
};

export default App;