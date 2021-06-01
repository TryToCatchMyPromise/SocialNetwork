import queryString from 'querystring'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {FilterType, requestUsers, follow, unfollow} from 'src/Redux/users-reducer'
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter
} from 'src/Redux/users-selectors'

type QueryParamsType = {
  term?: string;
  page?: string;
  friend?: string
}

export const useUsers = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const currentPage = useSelector(getCurrentPage)
  const filter = useSelector(getUsersFilter)
  const pageSize = useSelector(getPageSize)
  const users = useSelector(getUsers)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const followingInProgress = useSelector(getFollowingInProgress)

  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

    let actualPage = currentPage
    let actualFilter = filter

    if (!!parsed.page) {
      actualPage = Number(parsed.page)
    }

    if (!!parsed.term) {
      actualFilter = {...actualFilter, term: parsed.term as string}
    }

    switch (parsed.friend) {
      case 'null':
        actualFilter = {...actualFilter, friend: null}
        break
      case 'true':
        actualFilter = {...actualFilter, friend: true}
        break
      case 'false':
        actualFilter = {...actualFilter, friend: false}
        break
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, [])

  useEffect(() => {
    const query: QueryParamsType = {}

    if (!!filter.term) query.term = filter.term
    if (filter.friend !== null) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    history.push({
      pathname: '/developers',
      search: queryString.stringify(query)
    })
  }, [filter, currentPage])


  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }
  const followUser = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId))
  }

  return {
    onPageChanged,
    onFilterChanged,
    follow: followUser,
    unfollow: unfollowUser,
    users,
    followingInProgress,
    currentPage,
    totalUsersCount,
    pageSize
  }
}
