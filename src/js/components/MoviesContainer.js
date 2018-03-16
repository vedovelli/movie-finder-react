
import React, { Component } from 'react'
import { fetchMovies } from '../service/movie-api'
import MovieList from './MovieList'

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
        console.log(error) // eslint-disable-line no-console
      })
  }
  render() {
    return (
      <div>
        <h1>Hello from MoviesContainer</h1>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default MoviesContainer
