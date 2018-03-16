
import React from 'react'

const MovieList = props => {
  return props.movies.map(({ id, original_title }) => (
    <li key={id}>
      <div>
        <h4>{original_title}</h4>
        <a href={`movie/${id}`}>Details</a>
      </div>
    </li>
  ))
}

export default MovieList
