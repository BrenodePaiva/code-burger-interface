import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: import.meta.env.VITE_API
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`
  return config
})

apiCodeBurger.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.data.error === 'Token is invalid') {
      localStorage.removeItem('codeburger:userData')
      // alert('Sessão expirada')
      window.location.href = `${import.meta.env.VITE_APP_URL}/#/login`
    }

    return Promise.reject(error)
  }
)
export default apiCodeBurger
