import React, {Suspense, lazy} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {AppStateType} from './Redux/redux-store';
import {Users} from './components/Users/Users'
import { UsersPage } from "./components/Users/UsersContainer";

// lazy loading realization
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
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
                            () => <UsersPage pageTitle={"Users"}/>}/>

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

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);