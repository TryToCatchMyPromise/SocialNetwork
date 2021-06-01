export const useChatChannel = () => {
  const url = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  const wsChannel = new WebSocket(url)

  return {wsChannel}
}
