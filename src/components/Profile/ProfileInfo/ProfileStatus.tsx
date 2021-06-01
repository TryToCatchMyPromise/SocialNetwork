import React, {ChangeEvent, FC, useEffect, useState} from 'react'

type IProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<IProfileStatusProps> = ({status: propsStatus, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(propsStatus);

    useEffect(() => {
        setStatus(status);
    }, [status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>

            {!editMode ?
                <div>
                    <b>Status:</b><span onDoubleClick={activateEditMode}>{status || "-------"}</span>
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

export default ProfileStatus;
