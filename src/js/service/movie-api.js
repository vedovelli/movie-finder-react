
import { http, API_KEY } from './http'

export const fetchMovies = term => http.get(`search/movie?api_key=${API_KEY}&query=${term}`)

export default {
  fetchMovies
}
