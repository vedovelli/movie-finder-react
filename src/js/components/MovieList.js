
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { POSTER_BASE_URL } from '../service/movie-api'

const MovieList = props => {
  //
  return (
    <div className="row">
      {
        props.movies.map(movie => {
          const styles = {
            backgroundImage: `url(${POSTER_BASE_URL}${movie.poster_path})`,
            height: 500
          }
          return (
            <div className="col-md-4" key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <div className="panel panel-default">
                  <div className="panel-body" style={styles}></div>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList
