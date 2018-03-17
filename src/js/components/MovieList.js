
import React from 'react'
import PropTypes from 'prop-types'

const MovieList = props => {
  return (
    <ul>
      {
        props.movies.map(({ id, original_title }) => (
          <li key={id}>
            <div>
              <h4>{original_title}</h4>
              <a href={`movie/${id}`}>Details</a>
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
