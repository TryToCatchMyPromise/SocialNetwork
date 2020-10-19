import React, {FC} from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav: FC = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
        <div className={classes.item}>
          <a>Music</a>
        </div>
        <div className={classes.item}>
          <a>Settings</a>
        </div>
      </nav>
  );
};

export default Nav;