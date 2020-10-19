import React, {FC} from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
  return (
      <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
  );
};

export default DialogItem;