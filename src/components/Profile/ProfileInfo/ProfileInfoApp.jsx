import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
      <div>
        <div>
          <img src="https://tinyjpg.com/images/social/website.jpg"/>
        </div>
        <div className={classes.descriptionBlock}>
          ava + description
        </div>
      </div>
  );
};

export default ProfileInfo;