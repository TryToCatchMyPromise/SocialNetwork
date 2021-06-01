import React, {FC} from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type IDialogsItem = {
    id: number
    name: string
}

const DialogItem: FC<IDialogsItem> = ({id, name}) => {
  return (
      <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={'/dialogs/' + id}>{name}</NavLink>
      </div>
  );
};

export default DialogItem;
