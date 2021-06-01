import React, {FC} from 'react'
import classes from 'src/components/Profile/ProfileInfo/ProfileInfo.module.css'

type IContactsProps = {
  contactTitle: string
  contactValue: string
}

export const Contact: FC<IContactsProps> = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
