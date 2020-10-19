import React from "react";
import {actions} from "../../../Redux/profile-reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from '../../../Redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
};


const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,{
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;