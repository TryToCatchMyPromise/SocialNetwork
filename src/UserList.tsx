import classes from '*.module.css'
import {FC, useEffect, useState} from 'react'
import {useUsers} from 'src/useUsers'



// [ {}, {}]

export const UserList: FC = () => {

  const {usersArray} = useUsers()

  const [inputText, setInputText] = useState("")
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    getAndSetUsers(inputText)
  }, [inputText])

  const getAndSetUsers = async (inputText) => {
    const res = await  usersArray(inputText)
    setUsersList(res)
  }

  const onInputChange = (event) => {
    setInputText(event.targer.value)
  }

  return (
      <div className={classes.container}>
        <input value={inputText} onChange={onInputChange}></input>
        {usersArray.map((usersItem, index) => {
          return <div key={usersItem.id} className={classes.itemContainer}>
            <div>{index}</div>
            <div>{usersItem.id}</div>
            <div>{usersItem.name}</div>
            <div>{usersItem.surName}</div>
            <div>{usersItem.email}</div>
            <div>{usersItem.phoneNumber}</div>
            <div>{usersItem.address}</div>
          </div>
        })}
      </div>
    )
}
