import {lazy} from 'react'
import {withSuspense} from 'src/hoc/withSuspense'

export const useLazy = () => {
  const Dialogs = lazy(() => import('src/components/Dialogs/Dialogs').then(({Dialogs}) => ({default: Dialogs})))
  const Profile = lazy(() => import('src/components/Profile/Profile').then(({Profile}) => ({default: Profile})))
  const ChatPage = lazy(() => import('src/pages/Chat/ChatPage').then(({ChatPage}) => ({default: ChatPage})))

  const SuspendedDialogs = withSuspense(Dialogs)
  const SuspendedProfile = withSuspense(Profile)
  const SuspendedChatPage = withSuspense(ChatPage)

  return {SuspendedChatPage, SuspendedProfile, SuspendedDialogs}
}
