
import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { fetchMovies } from '../service/movie-api'
import MovieList from './MovieList'
import withErrorHandler from '../hoc/ErrorHandler'
import MovieInputForm from './MovieInputForm'

class MoviesContainer extends Component {
  
  //
  constructor(props) {
    super(props)
    
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)

    /*
    * Performs service calls during navigation
    */
    this.unlisten = this.props.history.listen(() => {
      this.queryString()
    })

    this.state = {
      searchTerm: '',
      hasMovies: false,
      moviesWithPoster: [],
      moviesWithoutPoster: []
    }
  }

  //
  componentDidMount() {
    this.queryString()
  }

  //
  componentWillUnmount() {
    /*
    * Prevents multiple listeners to perform
    * multiple service calls during navigation.
    */
    this.unlisten()
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
    if (ev.target.value === '') {
      this.setState({
        hasMovies: false,
        moviesWithPoster:[],
        moviesWithoutPoster: []
      })
    }
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
    const { history } = this.props
    const query = queryString.stringify({ query: this.state.searchTerm })
    history.push(`${history.location.pathname}?${query}`)
  }

  //
  fetch(term) {
    fetchMovies(term)
      .then(res => {
        const movies = res.data.results
        this.setState({
          hasMovies: movies.length > 0,
          moviesWithPoster: movies.filter(movie => movie.poster_path != null),
          moviesWithoutPoster: movies.filter(movie => movie.poster_path == null)
        })
      })
      .catch(() => this.props.errorHandler('Error fetching the movie\'s list.'))
  }
  
  //
  render() {
    const { hasMovies, moviesWithPoster, moviesWithoutPoster } = this.state
    return (
      <section>
        <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand">Movie Finder</span>
          </div>
        </nav>
        <div className="container">
          <MovieInputForm
            submitHandler={this.submitHandler}
            searchTerm={this.state.searchTerm}
            changeHandler={this.changeHandler} />
          {hasMovies && <MovieList moviesWithPoster={moviesWithPoster} moviesWithoutPoster={moviesWithoutPoster} />}
        </div>
      </section>
    )
  }
}

MoviesContainer.propTypes = {
  history: PropTypes.object,
  errorHandler: PropTypes.func
}

export default withErrorHandler(MoviesContainer)
