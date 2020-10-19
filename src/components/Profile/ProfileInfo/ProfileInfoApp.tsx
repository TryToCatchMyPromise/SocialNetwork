import React, {ChangeEvent, FC, useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user_icon.png';
import ProfileDataForm from "./ProfileDataForm";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {ContactsType, PhotosType, ProfileType} from '../../../types/types';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo:FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }

  console.log(profile);

  return (
      <div>
        {/*<div>*/}
        {/*  <img src="https://tinyjpg.com/images/social/website.jpg"/>*/}
        {/*</div>*/}
        <div className={classes.descriptionBlock}>
          <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

          {editMode ?
              <ProfileDataForm initialValues = {profile} profile={profile} onSubmit={onSubmit}/> :
              <ProfileData
                  goToEditMode={() => {
                    setEditMode(true)
                  }}
                  profile={profile}
                  isOwner={isOwner}/>}

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


          {/*<div>{props.profile.aboutMe}</div>*/}

          ava + description
        </div>
      </div>
  );
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

  return (
      <div>
        {isOwner && <div>
          <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
          <b>Full name: </b> {profile.fullName}
        </div>
        {profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}
        <div>
          <div>
            <b>My professional skills: </b> {profile.lookingForAJobDescription}
          </div>
          <div>
            <b>About me: </b> {profile.aboutMe}
          </div>
          <b>Contacts: </b>
          {Object
              .keys(profile.contacts)
              .map(key => {
            return (
                <div>{key}: {profile.contacts[key as keyof ContactsType]}</div>
            )
          })}
        </div>
      </div>
  )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;