import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {usersAPI} from "../API/users-api";
import {profileAPI} from "../API/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [{id: 1, message: 'Hi, how are You?', likesCount: 12},
        {id: 2, message: 'It is my first post!', likesCount: 16},] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/ADD-POST':
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'SN/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'SN/SET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SN/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        case "SN/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            }
        default:
            return state;
    }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPostActionCreator: (newPostText:string) => ({type: 'SN/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({
        type: 'SN/SET_USER_PROFILE', profile,
    } as const),
    setStatus: (status: string) => ({
        type: 'SN/SET_STATUS', status,
    } as const),
    deletePost: (postId:number) => ({
        type: 'SN/DELETE_POST', postId,
    } as const),
    savePhotoSuccess: (photos:PhotosType) => ({
        type: "SN/SAVE_PHOTO_SUCCESS", photos,
    } as const),
}

type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

export const getUserProfile = (userId:number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));

}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(response));
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {

    }

}

export const savePhoto = (file: File):ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !== null){
            await dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null!")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": data.messages[0]}}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;