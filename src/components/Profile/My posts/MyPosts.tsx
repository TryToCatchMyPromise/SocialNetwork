import React, {FC} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm';
import {PostType} from '../../../types/types';

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = (props) => {

    const sum = (a: number) => typeof a === 'undefined' ?
        a :
        ((b: number) => typeof b === 'undefined' ?
                a :
                ((c: number) => typeof c === "undefined" ?
                    () => a + b :
                    () => (a + b) / c)
        );

    const sum2 = (a: number) => typeof a === 'undefined' ? a : (b: number) => typeof b === 'undefined' ? a : sum2(a + b);
// @ts-ignore
    console.log(sum2(2)(4)());
    // @ts-ignore
    console.log(sum(2)(4)(3)());


    let postsElements = props.posts
        .reverse()
        .map(post => (<Post key={post.id}
                            message={post.message}
                            likesCount={post.likesCount}
        />));

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;