
import React, { Component } from 'react'
import { fetchMovies } from '../service/movie-api'

const renderList = movies => (
  movies.map(({ id, original_title }) => {
    return <p key={id}>{original_title}</p>
  })
)

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetchMovies('pulp fiction')
      .then(res => {
        this.setState({ movies: res.data.results })
      })
      .catch(error => {
      /*
      * TODO implement error feedback
      */
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <h1>Hello from MoviesContainer</h1>
        {renderList(this.state.movies)}
      </div>
    )
  }
}

export default MoviesContainer
