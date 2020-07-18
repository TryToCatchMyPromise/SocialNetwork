import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user_icon.png';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
      <div>
        {/*<div>*/}
        {/*  <img src="https://tinyjpg.com/images/social/website.jpg"/>*/}
        {/*</div>*/}
        <div className={classes.descriptionBlock}>
          <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


          {/*<div>{props.profile.aboutMe}</div>*/}
          {profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}
          ava + description
        </div>
      </div>
  );
};

export default ProfileInfo;