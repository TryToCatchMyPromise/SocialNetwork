import {updateObjectInArray} from '../utils/object-helpers'
import {PhotosType, UserType} from '../types/types'
import {AppStateType, BaseThunkType, InferActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'
import exp from 'constants'
import {usersAPI} from '../API/users-api'

const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET-USERS'
const SET_CURRENT_PAGE = 'SN/USERS/SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SN/USERS/SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users ids
}

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: [...action.users],
            }
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SN/USERS/SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId,} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId,} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users,} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage,} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SN/USERS/SET_USERS_TOTAL_COUNT',
        count: totalUsersCount,
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching,} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const)
}

type ThunkType = BaseThunkType<ActionsTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}


export default usersReducer