import React, {FC} from 'react'
import {ContactsType, ProfileType} from 'src/types/types'

type IProfileDataProps = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

export const ProfileData: FC<IProfileDataProps> = ({profile, isOwner, goToEditMode}) => {

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
