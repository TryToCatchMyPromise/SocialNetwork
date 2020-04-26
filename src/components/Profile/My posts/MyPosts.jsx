import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {


  let postsElements = props.posts
      .map(post => (<Post message={post.message}
                          likeCounts={post.likesCount}
                          id={post.id}/>));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = {type: 'ADD-NEW-TEXT-POST', newText: text};
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
      <div className={classes.postsBlock}>
        <h3>MyPosts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
            <button onClick={onAddPost}>Add Post</button>
          </div>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;