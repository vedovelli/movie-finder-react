
import React from 'react'

const MovieList = props => {
  return props.movies.map(({ id, original_title }) => {
    return <p key={id}>{original_title}</p>
  })
}

export default MovieList
