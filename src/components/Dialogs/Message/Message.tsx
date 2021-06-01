import React, {FC} from "react";
import classes from "./../Dialogs.module.css"

type IMessage = {
    id: number
    message: string
}

const Message: FC<IMessage> = ({message}) => {
  return (
      <div className={classes.dialog}>
        {message}
      </div>
  );
};

export default Message;
