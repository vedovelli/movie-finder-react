
import React, { Component } from 'react'
import { fetchMovies } from '../service/movie-api'
import MovieList from './MovieList'

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      searchTerm: '',
      movies: []
    }
  }
  changeHandler (ev) {
    this.setState({ searchTerm: ev.target.value })
  }
  submitHandler (ev) {
    ev.preventDefault()
    fetchMovies(this.state.searchTerm)
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
    const { movies } = this.state
    return (
      <div>
        <h1>Hello from MoviesContainer</h1>
        <form action="#" onSubmit={this.submitHandler}>
          <input
            type="search"
            value={this.state.searchTerm}
            onChange={this.changeHandler}
            placeholder="Type something and hit enter" />
        </form>
        {movies.length && <MovieList movies={movies} />}
      </div>
    )
  }
}

export default MoviesContainer
