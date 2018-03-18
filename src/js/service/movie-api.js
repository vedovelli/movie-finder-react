
import { http, API_KEY } from './http'

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original'

export const fetchMovies = term => http.get(`search/movie?api_key=${API_KEY}&query=${term}`)
export const fetchMovie = id => http.get(`movie/${id}?api_key=${API_KEY}`)

