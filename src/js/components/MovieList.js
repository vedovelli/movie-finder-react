
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieList = props => {
  return (
    <ul>
      {
        props.movies.map(({ id, original_title }) => (
          <li key={id}>
            <div>
              <h4>{original_title}</h4>
              <Link to={`movie/${id}`}>Details</Link>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList
