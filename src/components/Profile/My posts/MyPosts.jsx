import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

  const sum = (a) => typeof a === 'undefined' ?
      a :
      ( (b) => typeof b === 'undefined' ?
              a :
              ( (c) => typeof c === "undefined" ?
              () => a + b :
              () => (a + b)/c )
      ) ;

  const sum2 = (a) => typeof a === 'undefined' ? a : (b) => typeof b === 'undefined' ? a : sum2(a + b);
console.log(sum2(2)(4)());
  console.log(sum(2)(4)(3)());


  console.log("RENDER");
  let postsElements = props.posts
      .map(post => (<Post key={post.id} message={post.message}
                          likeCounts={post.likesCount}
                          id={post.id}/>));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
      <div className={classes.postsBlock}>
        <h3>MyPosts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea}
                 name={"newPostText"}
                 placeholder={"Here will be your post"}
          validate={[required, maxLength10]}
          />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;