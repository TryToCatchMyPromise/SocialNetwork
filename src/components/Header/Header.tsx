import React, {FC} from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
      <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png" alt = "logo" />

        <div className={classes.loginBlock}>
          {props.isAuth ?
              <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
              <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
};

export default Header;