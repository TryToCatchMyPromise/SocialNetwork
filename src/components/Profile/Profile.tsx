import React, {FC} from 'react'
import {useRefreshProfile} from 'src/hooks/useRefreshProfile'
import {MyPosts} from './My posts/MyPosts'
import {ProfileInfo} from 'src/components/Profile/ProfileInfo/ProfileInfo'

export const Profile: FC = () => {

  useRefreshProfile()

  return (
      <div>
        <ProfileInfo />
        <MyPosts/>
      </div>
  );
};
