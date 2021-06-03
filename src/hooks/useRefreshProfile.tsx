import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router'
import {useHistory} from 'react-router-dom'

import {getStatus, getUserProfile} from 'src/Redux/profile-reducer'
import {AppStateType} from 'src/Redux/redux-store'

export interface IProfileMatchParams {
  userId: string
}

export const useRefreshProfile = () => {
  const match = useRouteMatch<IProfileMatchParams>()
  const history = useHistory()
  const {userId: authorizedUserId, isAuth} = useSelector((state: AppStateType) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    let userId: number | null = +match.params.userId
    if (!userId) {
      userId = authorizedUserId
      if (!userId) {
        history.push('/login')
      }
    }
    if (!userId) {
      console.error('ID should exists in URI params or in state (authorizedUserId)')
    } else {
      dispatch(getUserProfile(userId as number))
      dispatch(getStatus(userId as number))
    }
  }, [match.params.userId, isAuth])


}
