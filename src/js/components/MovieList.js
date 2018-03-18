
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { POSTER_BASE_URL } from '../service/movie-api'

const renderMoviesWithoutPoster = (movies) => (
  <div className="well">
    <ul>
      <h5>Other titles</h5>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movie/${movie.id}`}>{movie.original_title}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

const renderMoviesWithPoster = (movies) => (
  movies.map(movie => {
    const styles = {
      backgroundImage: `url(${POSTER_BASE_URL}${movie.poster_path})`
    }
    return (
      <div className="col-md-4" key={movie.id}>
        <Link to={`movie/${movie.id}`}>
          <div className="panel panel-default panel-no-border">
            <div className="panel-body movie-card" style={styles}></div>
            <p className="text-center">click to see movie info</p>
          </div>
        </Link>
      </div>
    )
  })
)

const MovieList = props => {
  //
  const { moviesWithPoster, moviesWithoutPoster } = props
  return (
    <div>
      <div className="row">
        {renderMoviesWithPoster(moviesWithPoster)}
      </div>
      {moviesWithoutPoster.length > 0 && renderMoviesWithoutPoster(moviesWithoutPoster)}
    </div>
  )
}

MovieList.propTypes = {
  moviesWithPoster: PropTypes.array,
  moviesWithoutPoster: PropTypes.array
}

export default MovieList
