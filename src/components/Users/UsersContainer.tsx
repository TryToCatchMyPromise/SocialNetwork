import React from "react";
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  // setCurrentPage,
  // toggleFollowingInProgress,
  requestUsers,
  // followSuccess,
  // unfollowSuccess,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
  getUsers: (currentPage: number, pageSize:number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    return <>
      <h2>{this.props.pageTitle}</h2>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  };
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

// @ts-ignore
export default compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
      // followSuccess,
      // unfollowSuccess,
      // setCurrentPage,
      // toggleFollowingInProgress,
      getUsers: requestUsers,
      follow,
      unfollow,
    }),
    // withAuthRedirect
)(UsersContainer);
