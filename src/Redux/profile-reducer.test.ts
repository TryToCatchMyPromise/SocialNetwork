import React from "react";
import profileReducer, {actions} from "./profile-reducer";

let state = {
  posts: [{id: 1, message: 'Hi, how are You?', likesCount: 12},
    {id: 2, message: 'It is my first post!', likesCount: 16},
  ],
  profile: null,
  status: '',
  newPostText: ''
};

it('amount of posts should be incremented', () => {
let action = actions.addPostActionCreator("New post");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it('after deleting length of posts should be decrement', () => {
  let action = actions.deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});