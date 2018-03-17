
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { POSTER_BASE_URL } from '../service/movie-api'

const renderMoviesWithoutPoster = (movies) => (
  <div className="well">
    <ul>
      <h5>Other titles</h5>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movie/${movie.id}`}>{movie.original_title}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

const renderMoviesWithPoster = (movies) => (
  movies.map(movie => {
    const styles = {
      backgroundImage: `url(${POSTER_BASE_URL}${movie.poster_path})`
    }
    return (
      <div className="col-md-4" key={movie.id}>
        <Link to={`movie/${movie.id}`}>
          <div className="panel panel-default panel-no-border">
            <div className="panel-body movie-card" style={styles}></div>
            <p className="text-center">click to see movie info</p>
          </div>
        </Link>
      </div>
    )
  })
)

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withPoster: [],
      withoutPoster: []
    }
  }

  //
  componentDidMount() {
    const { movies } = this.props
    this.setState({
      withPoster: movies.filter(movie => movie.poster_path != null),
      withoutPoster: movies.filter(movie => movie.poster_path == null)
    })
  }

  //
  render() {
    const { withPoster, withoutPoster } = this.state
    return (
      <div>
        <div className="row">
          {renderMoviesWithPoster(withPoster)}
        </div>
        {withoutPoster.length > 0 && renderMoviesWithoutPoster(withoutPoster)}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList
