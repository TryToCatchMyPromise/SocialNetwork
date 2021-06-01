import React, {ChangeEvent, FC, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router'
import {ProfileData} from 'src/components/Profile/ProfileInfo/ProfileData/ProfileData'
import ProfileStatus from 'src/components/Profile/ProfileInfo/ProfileStatus'
import {IProfileMatchParams} from 'src/hooks/useRefreshProfile'
import {savePhoto, saveProfile, updateStatus} from 'src/Redux/profile-reducer'
import {AppStateType} from 'src/Redux/redux-store'
import {ProfileType} from 'src/types/types'
import userPhoto from '../../../assets/images/user_icon.png'
import Preloader from '../../common/Preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import classes from './ProfileInfo.module.css'

export const ProfileInfo: FC = () => {

  const {profile, status} = useSelector((state: AppStateType) => state.profilePage)
  const dispatch = useDispatch()
  const match = useRouteMatch<IProfileMatchParams>()
  const isOwner = !match.params.userId

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhoto(e.target.files[0]))
    }
  }

  const onSubmit = (formData: ProfileType) => {
    dispatch(saveProfile(formData))
    setEditMode(false)
  }

  console.log(profile)

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

        {editMode ?
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
          <ProfileData
            goToEditMode={() => {
              setEditMode(true)
            }}
            profile={profile}
            isOwner={isOwner}/>}

        <ProfileStatus status={status} updateStatus={dispatch(updateStatus)}/>
      </div>
    </div>
  )
}
