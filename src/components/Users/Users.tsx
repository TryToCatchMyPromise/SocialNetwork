import {FC} from 'react'
import {useUsers} from 'src/hooks/useUsers'
import {Paginator} from '../common/Paginator/Paginator'
import {User} from './User'
import {UsersSearchForm} from './UsersSearchForm'

export const Users: FC = () => {

  const {follow, unfollow, users, followingInProgress} = useUsers()

  return <div>
    <UsersSearchForm />
    <Paginator />
    <div>
      {users.map(user => <User user={user}
                             followingInProgress={followingInProgress}
                             key={user.id}
                             unfollow={unfollow}
                             follow={follow}
          />
        )
      }
    </div>
  </div>
}
