import React, {FC} from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfoApp";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {ProfileType} from '../../types/types';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: FC<PropsType> = (props) => {
  return (
      <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner = {props.isOwner}
                     profile={props.profile}
                     status = {props.status}
                     saveProfile = {props.saveProfile}
                     updateStatus = {props.updateStatus}/>
        <MyPostsContainer/>
      </div>
  );
};



export default Profile;