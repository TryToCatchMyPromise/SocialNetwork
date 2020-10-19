import React, {ChangeEvent, FC, useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>

            {!editMode ?
                <div>
                    <b>Status:</b><span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           value={status}/>
                </div>
            }

        </div>
    );
}

export default ProfileStatusWithHooks;