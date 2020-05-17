import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div>
        <div>
          <img src="https://tinyjpg.com/images/social/website.jpg"/>
        </div>
        <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.aboutMe}</div>
          {props.profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}
                   ava + description
        </div>
      </div>
  );
};

export default ProfileInfo;