import React from "react";
import classes from "./Users.module.css";
import userPhoto from '../../assets/images/user_icon.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../API/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
  return (
      <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
        <div>
          {
            users.map(
                u => <User user={u}
                           key={u.id}
                           followingInProgress={props.followingInProgress}
                           unfollow={props.unfollow}
                           follow={props.follow}
                />)
          }
        </div>
      </div>
  );
};

export default Users;