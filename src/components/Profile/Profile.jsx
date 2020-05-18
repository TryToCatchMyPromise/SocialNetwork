import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfoApp";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

  if (props.isAuth === false) {
    return <Redirect to ={"/login"} />;
  }

  return (
      <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer/>
      </div>
  );
};



export default Profile;