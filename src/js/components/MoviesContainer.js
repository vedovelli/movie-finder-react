
import React, { Component } from 'react'
import queryString from 'query-string'
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
  componentDidMount() {
    this.queryString()
  }
  
  //
  queryString() {
    const data = queryString.parse(window.location.search)
    if (data.query != null && data.query !== '') {
      this.setState({ searchTerm: data.query })
      this.fetch(data.query)
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
    
    /**
    * This will append the search term to URL query string
    * thus triggering the listener with queryString() attached.
    * The method will check the input and if valid, will request
    * the data for the API.
    */
    window.location.search = queryString.stringify({ query: this.state.searchTerm })
  }

  //
  fetch(term) {
    fetchMovies(term)
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
