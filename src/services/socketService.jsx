import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_API) // mesmo endereço do backend

export default socket
