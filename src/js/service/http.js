
import axios from 'axios'

const API_KEY = 'a1279933de606b4374a2c93a1d0127a9'

const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default {
  http,
  key: API_KEY
}
