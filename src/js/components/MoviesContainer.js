
import React, { Component } from 'react'
import { fetchMovies } from '../service/movie-api'
import MovieList from './MovieList'
import MovieInputForm from './MovieInputForm'

class MoviesContainer extends Component {
  
  //
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      searchTerm: '',
      movies: []
    }
  }
  
  //
  changeHandler (ev) {
    if (ev.target.value === '') this.setState({ movies: [] })
    this.setState({ searchTerm: ev.target.value })
  }
  
  //
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
  
  //
  render() {
    const { movies } = this.state
    return (
      <section>
        <header>
          <h1>Movie Finder</h1>
        </header>
        <MovieInputForm
          submitHandler={this.submitHandler}
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}/>
        {movies.length > 0 && <MovieList movies={movies} />}
      </section>
    )
  }
}

export default MoviesContainer
