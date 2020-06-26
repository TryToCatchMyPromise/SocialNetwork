import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
      <div>
        {/*<div>*/}
        {/*  <img src="https://tinyjpg.com/images/social/website.jpg"/>*/}
        {/*</div>*/}
        <div className={classes.descriptionBlock}>
          <img src={profile.photos.large}/>
          <ProfileStatusWithHooks status={status} updateStatus = {updateStatus}/>



          {/*<div>{props.profile.aboutMe}</div>*/}
          {profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}
                   ava + description
        </div>
      </div>
  );
};

export default ProfileInfo;