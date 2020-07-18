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
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner = {props.isOwner}
                     profile={props.profile}
                     status = {props.status}
                     updateStatus = {props.updateStatus}/>
        <MyPostsContainer/>
      </div>
  );
};



export default Profile;