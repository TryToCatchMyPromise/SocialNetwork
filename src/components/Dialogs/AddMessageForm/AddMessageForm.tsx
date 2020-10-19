import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Textarea} from '../../common/FormsControls/FormsControls';
import React from 'react';
import {NewMessageFormValuesType} from '../Dialogs';

const maxLength50 =maxLengthCreator(100);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter Your message","newMessageBody",[required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType, PropsType>({form: "DialogAddMessageForm"})(AddMessageForm);