
type UsersArrayItemType = {
  //№, Имя, Фамилия, почта, телефон, адрес
  id: number,
  name: string,
  surName: string,
  email: string,
  phoneNumber: string,
  address: string
}

type UsersArrayType = Array<UsersArrayItemType>

export const useUsers = ({inputText}) => {

  const usersArray = async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([])
      }, 500)
    })
  }

  return {usersArray}
}
