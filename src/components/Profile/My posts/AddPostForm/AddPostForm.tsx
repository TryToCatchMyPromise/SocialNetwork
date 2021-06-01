import React, {FC} from "react"
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input} from '../../../common/FormsControls/FormsControls';
import {required} from 'src/utils/validators/validators';

type IAddPostForm = {

}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: FC<InjectedFormProps<AddPostFormValuesType, IAddPostForm> & IAddPostForm> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Email", "newPostText", [required], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, IAddPostForm>({form: 'profile-add-post'})(AddPostForm)
