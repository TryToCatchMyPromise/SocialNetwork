import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
      <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png" alt = "logo" />
      </header>
  );
};

export default Header;