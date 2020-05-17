import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfoApp";
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer/>
      </div>
  );
};



export default Profile;