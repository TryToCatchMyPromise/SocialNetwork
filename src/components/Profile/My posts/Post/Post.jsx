import React from "react";
import classes from './Post.module.css';


const Post = (props) => {
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