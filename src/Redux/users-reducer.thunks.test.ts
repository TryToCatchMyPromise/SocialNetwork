import usersReducer, {actions, InitialStateType} from './users-reducer'
import {UserType} from '../types/types';

let state: InitialStateType;

beforeEach(() => {
    state = {

    users: [
        {id: 0, name: "Gleb 0", followed: false,
            photos: {small: null, large: null}, status: "My status 0"},
        {id: 1, name: "Gleb 1", followed: false,
            photos: {small: null, large: null}, status: "My status 1"},
        {id: 2, name: "Gleb 2", followed: true,
            photos: {small: null, large: null}, status: "My status 2"},
        {id: 3, name: "Gleb 3", followed: true,
            photos: {small: null, large: null}, status: "My status 3"},
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [], // array of users ids
}})

test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
})