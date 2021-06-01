import {FC, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from 'src/Redux/profile-reducer'
import {AppStateType} from 'src/Redux/redux-store'
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm'
import classes from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts: FC = memo(() => {

  const posts = useSelector((state: AppStateType) => state.profilePage.posts)
  const dispatch = useDispatch()

//   const sum = (a: number) => typeof a === 'undefined' ?
//     a :
//     ((b: number) => typeof b === 'undefined' ?
//         a :
//         ((c: number) => typeof c === 'undefined' ?
//           () => a + b :
//           () => (a + b) / c)
//     )
//
//   const sum2 = (a: number) => typeof a === 'undefined' ? a : (b: number) => typeof b === 'undefined' ? a : sum2(a + b)
// // @ts-ignore
//   console.log(sum2(2)(4)())
//   // @ts-ignore
//   console.log(sum(2)(4)(3)())


  const postsElements = posts
    .reverse()
    .map(post => (<Post key={post.id}
                        message={post.message}
                        likesCount={post.likesCount}
    />))

  const onAddPost = (values: AddPostFormValuesType) => {
    dispatch(actions.addPostActionCreator(values.newPostText))
  }

  return (
    <div className={classes.postsBlock}>
      <h3>MyPosts</h3>
      <AddPostForm onSubmit={onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
})
