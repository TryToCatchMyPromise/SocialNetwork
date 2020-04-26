const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [{id: 1, message: 'Hi, how are You?', likesCount: 12},
    {id: 2, message: 'It is my first post!', likesCount: 16},],
  newPostText: 'My text',
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state};
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.newText;
      break;
  }
  return stateCopy;
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;