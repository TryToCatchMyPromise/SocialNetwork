import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {initializeApp} from 'src/Redux/app-reducer'
import {AppStateType} from 'src/Redux/redux-store'


export const useInitialized = () => {
  const initialized = useSelector((state: AppStateType) => state.app.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  return {initialized}
}
