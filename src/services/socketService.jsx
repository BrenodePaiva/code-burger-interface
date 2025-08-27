import { io } from 'socket.io-client'

const socket = io(
  'https://api-code-burger-online.onrender.com' /* import.meta.env.VITE_API */
) // mesmo endereço do backend

export default socket
