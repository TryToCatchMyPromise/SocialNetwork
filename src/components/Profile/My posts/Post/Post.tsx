import classes from './Post.module.css';
import {FC} from 'react';
import React from 'react';

type PropsType = {
    message: string
    likesCount: number
}

const Post: FC<PropsType> = (props) => {
  return (
          <div className={classes.item}>
            <img src='https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg'/>
            {props.message}
            <div>
              <span>like</span> {props.likesCount}
            </div>
          </div>
  );

};

export default Post;