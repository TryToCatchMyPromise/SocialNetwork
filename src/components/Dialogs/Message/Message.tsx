import React, {FC} from "react";
import classes from "./../Dialogs.module.css"

type PropsType = {
    id: number
    message: string
}

const Message: FC<PropsType> = (props) => {
  return (
      <div className={classes.dialog}>
        {props.message}
      </div>
  );
};

export default Message;